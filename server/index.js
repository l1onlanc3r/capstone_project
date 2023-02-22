import express from 'express';
import dotEnv from 'dotenv';
import cors from 'cors';
import Routes from './routes';

dotEnv.config();

const port = process.env.PORT || 3000;

const app = express();

/*
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept',
  );
  next();
});
*/

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());

// Fix CORS related issues
app.use(cors());

Routes.initRoutes(app);

app.listen(port, () => {
  console.log('Server started');
});
