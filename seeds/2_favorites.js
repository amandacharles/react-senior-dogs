'use strict';

exports.seed = function(knex) {
  return knex('favorites').del()
    .then(() => {
      return knex('favorites').insert([{
        id: 1,
        user_id: 1,
        name: 'Mikey',
        description: 'Here is a nice dog',
        img: 'https://static.pexels.com/photos/8382/pexels-photo.jpg',
        sex: 'M',
        created_at: new Date('2016-07-09 14:26:16 UTC'),
        updated_at: new Date('2016-09-07 14:26:16 UTC')
      }])
    })
    .then(function(){
      return knex.raw("SELECT setval('favorites_id_seq', (SELECT MAX(id) FROM favorites));");
    });
  }
