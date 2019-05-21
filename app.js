import config from 'dotenv';
import express from 'express';
import logger from 'morgan';
import bodyParser from 'body-parser';
import articleRoutes from './server/routes/ArticleRoutes';

config.config();

const app = express();

const port = process.env.PORT || 3000;

// Log requests to the console
app.use(logger('dev'));

// Parse incoming request data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Register use of router
app.use('/api/v1/articles', articleRoutes);

app.get('*', (request, response) => {
  return response.status(200).send({ message: 'Welcome to myBlog API.' });
});

app.listen(port, console.log(`Server running at port: ${port}`));

export default app;
