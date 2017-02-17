const router = require('express').Router()
const knex = require('../../knex')
const camelizeKeys = require('humps')


router.get('/', (req, res) => {
  res.send('this is working')
})

// FAVORITES******************

router.get('/favorites', (_req, res, next) => {
  knex('favorites')
    .orderBy('created_at', 'desc')
    .then((rows) => {
      const favorites = rows;

      res.send(favorites);
    })
    .catch((err) => {
      next(err);
    });
});

router.post('/favorites', (req, res, next) => {
  knex('favorites')
    .insert(params(req))
    .returning('*')
    .then(posts => res.json(posts[0]))
    .catch(err => next(err))
})

router.delete('/:id', (req, res, next) => {
  knex('favorites')
    .del()
    .where({id: req.params.id})
    .then(() => res.end())
    .catch(err => next(err))
})

function params(req) {
  return {
    id: req.body.id,
    description: req.body.description,
    name: req.body.name,
    img: req.body.img,
    sex: req.body.sex,
    user_id: req.body.user_id
  }
}

// USERS**********************


router.get('/users', (_req, res, next) => {
  knex('users')
    .orderBy('created_at', 'desc')
    .then((rows) => {
      const users = rows;

      res.send(users);
    })
    .catch((err) => {
      next(err);
    });
});

router.get('/:id', (req, res, next) => {
  knex('users')
    .where({id: req.params.id})
    .first()
    .then(post => res.json(post))
    .catch(err => next(err))
})

router.delete('/:id', (req, res, next) => {
  knex('users')
    .del()
    .where({id: req.params.id})
    .then(() => res.end())
    .catch(err => next(err))
})

module.exports = router
