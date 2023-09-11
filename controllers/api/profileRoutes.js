const router = require('express').Router();
const { Blog, User, Comment } = require('../../models');
const withAuth = require('../../utils/auth');

// router.get('/', async (req, res) => {
//   try {
//     const profileData = await User.findByPk(req.session.user_id, {
//       include: [
//         {
//           model: Blog,
//           include: [
//             {
//               model: Comment,
//               include: [{ model: User, attributes: { exclude: ['password'] } }],
//             },
//           ],
//         },
//       ],
//     });

//     res.status(200).json(profileData);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });
// router.get('/', async (req, res) => {
//   try {
//     const profileData = await User.findByPk(req.session.user_id, {
//       include: [
//         {
//           model: Blog,
//           include: [
//             {
//               model: Comment,
//               include: [
//                 {
//                   model: User,
//                   attributes: { exclude: ['password'] },
//                 },
//               ],
//             },
//           ],
//         },
//       ],
//     });

//     const profile = profileData.get({ plain: true });

//       res.render('profile', {
//         ...profile,
//       });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// router.get('/', async (req, res) => {
//   try {
//     const profileData = await Blog.findByPk(req.session.user_id, {
//       include: [
//         {
//           model: User,
//           attributes: { exclude: ['password'] },
//         },
//         {
//           model: Comment,
//           include: [
//             {
//               model: User,
//               attributes: { exclude: ['password'] },
//             },
//           ],
//         },
//       ],
//     });

//     const profile = profileData.get({ plain: true });

//     res.render('profile', {
//       ...profile,
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

router.get('/:id', async (req, res) => {
  try {
    const profileData = await User.findByPk(req.params.id, {
      include: [
        {
          model: Blog,
          include: [
            {
              model: Comment,
              include: [
                {
                  model: User,
                  attributes: { exclude: ['password'] },
                },
              ],
            },
          ],
        },
      ],
    });

    const profile = profileData.get({ plain: true });

    res.render('profile', {
      ...profile,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
