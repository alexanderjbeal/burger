const express = require("express");

const router = express.Router();

const burger = require('../models/burger');

router.get("/", (req, res) => {
    burger.all((data) => {
        console.log({
            burgers: data
        });
        let results = {
            burgers: data
        };
        res.render("index", results);
    });
});

router.post("/api/create", (req, res) => {
    burger.create(req.body.name, (results) => {
        res.json({ id: results.insertId });
    });
});

router.put("/api/update/:id", (req, res) => {
    const id = req.params.id;

    burger.update(id, (results) => {
        (results.changedRows == 0) ? res.status(404).end() : res.status(200).end();
    });
});

module.exports = router;