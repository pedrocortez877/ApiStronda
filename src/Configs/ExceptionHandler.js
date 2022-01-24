export default async function ExceptionHandler(err, req, res, next) {
  return res.status(500).json({
    message: 'Ocorreu um erro inesperado no servidor',
    content: err.stack,
  });
}
