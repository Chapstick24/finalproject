const mongoose = require('mongoose');
const db = require('../models');

mongoose.connect(process.env.MONGOD_URI || 'mongodb://localhost/accountInfoGSdb',{
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
});

const userSeed = [
    {
        firstName: 'Mike',
        lastName: 'Rhiney',
        email: 'mikeR@gmail.com',
        password: '12345678'
    },
    {
        firstName: 'Mychal',
        lastName: 'Stanciu',
        email: 'mychal@gmail.com',
        password: '87654321'
    },
    {
        firstName: 'William',
        lastName: 'Malos',
        email: 'williamM@gmail.com',
        password: '09876543'
    },
    {
        firstName: 'Uriel',
        lastName: 'Cruz',
        email: 'urielC@gmail.com',
        password: '34567890'
    }
];

db.User.deleteMany({})
    .then(() => db.User.collection.insertMany(userSeed))
    .then((data) => {
        console.log(data.result.n + ' records inserted!');
        process.exit(0);
    })
    .catch((err) => {
        console.error(err);
        process.exit(1);
    });