import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();

app.use(cors());
app.options('*', cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const server = app.listen(3000, () => {
  console.log(
    `Servidor rodando🔥 na porta ${server.address().port}🚪 no host ${
      server.address().address
    }✉️`
  );
});
