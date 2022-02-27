const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  Category.findAll({
    include: [
      // be sure to include its associated Products
      { model: Product, where: [id, product_name, price, stock]}
    ]
  })
  res.json()
  
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  res.send(req.params.id)
  // be sure to include its associated Products
});

router.post('/', (req, res) => {
  // create a new category
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
