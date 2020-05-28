const db = require('../../database/model.js');

const band = {
  type: 'band',
  name: 'Index',
  link: 'https://indexxxband.bandcamp.com/',
  location: 'D.C.',
  about: 'graeme leddy: guitar, vox. nyle leddy: drums, bass on secret, charlotte hodgson: bass, vox, francisco abate: keys',
  photo: 'https://f4.bcbits.com/img/0018959511_10.jpg',
};

const venue = {
  type: 'venue',
  name: 'The Void',
  link: 'https://www.facebook.com/avoidlife/',
  location: 'D.C.',
  about: 'We live to party but we also party to live',
  photo: 'https://i.imgur.com/VtgNC94.jpeg',
};

const sets = [
  {
    userId: 1,
    photo: 'https://i.imgur.com/thiF7RE.gif',
    location: 'D.C.',
    date: '10/31/20',
    description: 'Got some spooky tunes for your spooky show. Check us out.',
    name: 'Index',
    link: 'https://indexxxband.bandcamp.com/',
    userLocation: 'D.C.'
  },
  {
    userId: 1,
    photo: 'https://i.imgur.com/RbCKrf8.gif',
    location: 'D.C.',
    date: '12/31/20',
    description: 'Who needs some new year music for their new year show?',
    name: 'Index',
    link: 'https://indexxxband.bandcamp.com/',
    userLocation: 'D.C.'
  }
];

const shows = [
  {
    userId: 2,
    photo: 'https://i.imgur.com/AHA6wLd.gif',
    location: 'D.C.',
    date: '10/31/20',
    description: 'Looking for some scary music to make our ears bleed.',
    name: 'The Void',
    link: 'https://www.facebook.com/avoidlife/',
  },
  {
    userId: 2,
    photo: 'https://i.imgur.com/5rT9u.gif',
    location: 'D.C.',
    date: '12/31/20',
    description: 'Let\'s put 2020 behind us with some 2021 music. Who\'s got it?',
    name: 'The Void',
    link: 'https://www.facebook.com/avoidlife/',
  }
];

// const clearUsers = db.User.destroy({truncate: true, cascase: false});
// const clearSets = db.Set.destroy({truncate: true, cascade: false});
// const clearShows = db.Show.destroy({truncate: true, cascade: false});

// Promise.all([clearSets, clearShows])
//   .then(() => db.User.destroy({truncate: true, cascade: true}))
//   // .then(() => db.User.destroy({truncate: true, cascade: false}))
//   // .then(() => console.log('users sucessfully cleared'))
//   // .then(() => seedDB())
//   .catch(err => {
//     console.log('error clearing tables: ', err);
//   });


db.User.destroy({truncate: true, cascade: true, restartIdentity: true})
  .then(() => console.log('table sucessfully cleared'))
  .then(() => createUsers())
  .catch(err => console.log('error clearing tables:', err));

const createUsers = () => {
  db.User.bulkCreate([band, venue])
    .then(() => console.log('users sucessfully created'))
    .then(() => seedPosts())
    .catch(err => console.log('error seeding users: ', err));
};

const seedPosts = () => {
  db.Set.bulkCreate(sets)
    .then(() => console.log('sets sucessfully seeded'))
    .catch(err => console.log('error seeding sets: ', err));
  
  db.Show.bulkCreate(shows)
    .then(() => console.log('shows sucessfully seeded'))
    .catch(err => console.log('error seeding shows: ', err));
};


