const orm = require('../config/orm.js');

const burger = {
    all: (cb) => {
        orm.all((results) => {
            cb(results);
        });
    },
    create: (name, cb) => {
        orm.create(name, (results) => {
            cb(results);
        });
    },
    update: (id, cb) => {
        orm.update(id, (results) => {
            cb(results);
        });
    }
};

module.exports = burger;