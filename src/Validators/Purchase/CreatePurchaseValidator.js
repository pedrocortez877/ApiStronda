import yup from '../../Helpers/Yup.js';

export default async (req, res, next) => {
  const schemaPurchase = yup.object().shape({
    IdSupplier: yup.number().required().min(1),
    Invoice: yup.boolean(),
  });

  const schemaPurchaseItems = yup.array().of(
    yup.object().shape({
      Quantity: yup.number().required().min(1),
      IdProduct: yup.number().required().min(1),
      PurchasePrice: yup.number().required(),
      ProfitPercentage: yup.number().required(),
    })
  );

  try {
    const validatePurchase = await schemaPurchase.validate(req.body.Purchase);

    const validatePurchaseItems = await schemaPurchaseItems.validate(
      req.body.PurchaseItems
    );

    if (validatePurchase && validatePurchaseItems) next();
  } catch (e) {
    return res.status(400).json({ message: e.errors.pop() });
  }
};
