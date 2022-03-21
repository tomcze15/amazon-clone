import express from 'express';
import data from './data.js';

const app = express();

app.get('/api/products', (req, res, next) => {
  res.send(data);
});

app.get('/api/products/slug/:slug', (req, res, next) => {
  console.log(data);
  const product = data.find((x) => x.slug === req.params.slug);

  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: 'Product Not Found' });
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Serve at http://localhost:${PORT}`);
});
