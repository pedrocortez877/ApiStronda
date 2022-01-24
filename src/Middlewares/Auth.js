import { verify } from 'jsonwebtoken';

export default async (req, res, next) => {
  try {
    const { authorization } = req.headers;

    if (!authorization) {
      return res.status(401).json({ message: 'Authorization não fornecido' });
    }

    const [, token] = authorization.split(' ');

    const data = verify(token, process.env.JWT_SECRET);

    if (!data) {
      return res.status(401).json({ message: 'Credencial inválida' });
    }

    next();
  } catch {
    return res.status(401).json({ message: 'Credencial inválida' });
  }
};
