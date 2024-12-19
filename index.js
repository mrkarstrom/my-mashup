import e from 'express';
// import artistRoute from './routes/artistRoute.js';
// import { handleErrors } from './src/utils/ErrorHandler.js';

const PORT = process.env.PORT || 3000;
const app = e();

app.use(e.json());

app.get('/', (req, res) => {
  res.set('Content-Type', 'text/html');
  res.statusCode = 200;
  res.send(`<h1>Home</h1>`);
});

// app.use('/artist', artistRoute);

app.use((req, res) => {
  res.status(404).send('Not Found');
});

// app.use(handleErrors);

if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

export { app };
