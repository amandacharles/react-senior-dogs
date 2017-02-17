// const router = require('express').Router()
// const knex = require('../../knex')
// const camelizeKeys = require('humps')
//
//
// router.get('/', (req, res) => {
//   res.send('this is working')
// })
//
// router.get('/users', (_req, res, next) => {
//   knex('users')
//     .orderBy('created_at', 'desc')
//     .then((rows) => {
//       const users = rows;
//
//       res.send(users);
//     })
//     .catch((err) => {
//       next(err);
//     });
// });
//
// module.exports = router
