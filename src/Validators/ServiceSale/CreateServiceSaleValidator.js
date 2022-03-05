import yup from '../../Helpers/Yup.js';

export default async (req, res, next) => {
  const schemaServiceSale = yup
    .object()
    .required()
    .shape({
      IdCustomer: yup.number().min(1).required(),
      ServiceSaleValue: yup.number().required(),
      Invoice: yup.boolean(),
      IdServiceProvided: yup.number().min(1).required(),
    });

  const schemaProductsServiceSale = yup.array().of(
    yup.object().shape({
      Quantity: yup.number().required().min(1),
      IdProduct: yup.number().required().min(1),
      ProductValue: yup.number().required(),
      DiscountPercentage: yup.number(),
      DiscountValue: yup.number(),
    })
  );

  try {
    const validateServiceSale = await schemaServiceSale.validate(
      req.body.ProductSale
    );

    const validateItemsServiceSale = await schemaProductsServiceSale.validate(
      req.body.ItemsProductSale
    );

    if (validateServiceSale && validateItemsServiceSale) next();
  } catch (e) {
    return res.status(400).json({ message: e.errors.pop() });
  }
};
