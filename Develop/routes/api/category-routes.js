const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  try {
    const categoryData = await Category.findAll();
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err)
  }
  // find all categories
  // be sure to include its associated Products
});

router.get('/:id', async (req, res) => {
  try {
    const categoryData = await Category.findByPk(req.params.id, {
      indclude: [{ model: Product }]
      //might need more here
    });

    if (!categoryData) {
      res.status(404).json({ message: "No Category found with that id :("})
      return;
    }

    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
  // find one category by its `id` value
  // be sure to include its associated Products
});

router.post('/', async (req, res) => {
  try {
    const categoryData = await Category.create(req.body);
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(400).json(err)
  }
  // create a new category
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Category.update( req.body, {
    where: {
      id: req.params.id
    }
  })
  .then((updatedCategory) => {
    res.json(updatedCategory)
  })
  .catch((err) => res.json(err))
});

router.delete('/:id', async (req, res) => {
  try {
    const categoryData = await Category.destroy({
      where: {
        id: req.params.id
      }
    });

    if(!categoryData) {
      res.status(404).json({ message: "No category found with that id :("})
      return;
    }

    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
  // delete a category by its `id` value
});

module.exports = router;
