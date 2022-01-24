import App from './App';

const server = App.listen(3000, () => {
  console.log(
    `Servidor rodando🔥 na porta ${server.address().port}🚪 no host ${
      server.address().address
    }✉️`
  );
});
