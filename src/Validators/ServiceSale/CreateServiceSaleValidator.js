import yup from '../../Helpers/Yup.js';

export default async (req, res, next) => {
  const schemaServiceSale = yup
    .object()
    .required()
    .shape({
      IdCustomer: yup.number().required().min(1),
      Invoice: yup.boolean(),
      DiscountPercentage: yup.number(),
      DiscountValue: yup.number(),
    });

  const schemaProductsOfThisSale = yup.array().of(
    yup.object().shape({
      Quantity: yup.number().required().min(1),
      IdProduct: yup.number().required().min(1),
      ProductValue: yup.number().required(),
    })
  );

  const schemaServicesOfThisSale = yup
    .array()
    .required()
    .of(
      yup.object().shape({
        IdService: yup.number().required().min(1),
        ServiceValue: yup.number().required(),
      })
    );

  try {
    const validateServiceSale = await schemaServiceSale.validate(
      req.body.ServiceSale
    );

    const validateItemsServiceSale = await schemaProductsOfThisSale.validate(
      req.body.ProductsOfThisSale
    );

    const validateServiceProvided = await schemaServicesOfThisSale.validate(
      req.body.ServicesOfThisSale
    );

    if (
      validateServiceSale &&
      validateItemsServiceSale &&
      validateServiceProvided
    )
      next();
  } catch (e) {
    return res.badRequest({ message: e.errors.pop() });
  }
};
