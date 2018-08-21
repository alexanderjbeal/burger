const db = require('./connection');

const orm = {
    all: (cb) => {
        const queryString = `SELECT * FROM burgers;`;

        db.connection.query(queryString, (err, result) => {
            if (err) {
                throw err;
            } else {
                cb(result);
            }
        });
    },
    update: (id, cb) => {
        const queryString = `UPDATE burgers SET devoured = true WHERE id = ${id};`;

        db.connection.query(queryString, (err, result) => {
            if (err) {
                throw err;
            } else {
                cb(result);
            }
        });
    },
    create: (name, cb) => {
        const queryString = `INSERT INTO burgers (burger_name) VALUES ("${name}");`;

        db.connection.query(queryString, (err, result) => {
            if (err) {
                throw err;
            } else {
                cb(result);
            }
        });
    }
};

module.exports = orm;