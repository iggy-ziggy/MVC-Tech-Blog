const router = require('express').Router();
const { Blog } = require('../../models');
const withAuth = require('../../utils/auth');

// get all blogs
router.get('/', withAuth, async (req, res) => {
  const blogData = await Blog.findAll();
  res.status(200).json(blogData);
});

// router.get('/update/:id', withAuth, async (req, res) => {
//   res.render('update');
// });
router.get('/update/:id', async (req, res) => {
  try {
    const blogData = await Blog.findByPk(req.params.id);

    const blog = blogData.get({ plain: true });

    res.render('update', {
      ...blog,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// create new blog
router.post('/', withAuth, async (req, res) => {
  try {
    const newBlog = await Blog.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newBlog);
  } catch (err) {
    res.status(400).json(err);
  }
});

// delete specific blog
router.delete('/:id', withAuth, async (req, res) => {
  try {
    const blogData = await Blog.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!blogData) {
      res.status(404).json({ message: 'No project found with this id!' });
      return;
    }

    res.status(200).json(blogData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// update specific blog
router.put('/update/:id', withAuth, async (req, res) => {
  try {
    // const updatedData = {
    //       ...req.body,
    //     };
    const update = await Blog.update(req.body, {
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      }
    });
    res.status(200).json(update);
  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;
