import yup from '../../Helpers/Yup.js';

export default async (req, res, next) => {
  const schemaProductSale = yup.object().shape({
    IdCustomer: yup.number().required().min(1),
    Invoice: yup.boolean(),
    DiscountPercentage: yup.number(),
    DiscountValue: yup.number(),
  });

  const schemaItemsProductSale = yup.array().of(
    yup.object().shape({
      Quantity: yup.number().required().min(1),
      IdProduct: yup.number().required().min(1),
      ProductValue: yup.number().required(),
    })
  );

  try {
    const validateProductSale = await schemaProductSale.validate(
      req.body.ProductSale
    );

    const validateItemsProductSale = await schemaItemsProductSale.validate(
      req.body.ItemsProductSale
    );

    if (validateProductSale && validateItemsProductSale) next();
  } catch (e) {
    return res.badRequest({ message: e.errors.pop() });
  }
};
