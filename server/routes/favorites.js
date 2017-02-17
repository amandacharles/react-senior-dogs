// const express = require('express');
// const router = require('express').Router()
//
//
// router.get('/favorites', (_req, res, next) => {
//
// res.send('this is favorites')
//
//
//   knex('favorites')
//     .orderBy('created_at', 'desc')
//     .then((rows) => {
//       const favorites = camelizeKeys(rows);
//
//       res.send(favorites);
//     })
//     .catch((err) => {
//       next(err);
//     });
// });
//
// module.exports = router
