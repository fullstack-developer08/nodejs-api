const Company = require('../models/company.model');
module.exports = {
    create(req, res) {
        Company.create({
            name: req.body.name,
            city: req.body.city,
            address: req.body.city
        }, (err, savedCompany) => {
            if (err) {
                return res.status(500).send(err);
            }
            return res.status(200).json(savedCompany);
        });
    },
    find(req, res) {
        Company.find({}, (err, companies) => {
            if (err) {
                return res.status(404).send(err);
            }
            return res.status(200).json(companies);
        });
    },
    findById(req, res) {
        var id = req.params.id;
        Company.findById(id, (err, company) => {
            if (err) {
                return res.status(404).send(err);
            }
            return res.status(200).json(company);
        });
    },
    update(req, res) {
        if (!req.params.id) {
            return res.status(400).send({ err: 'Invalid Id Provide' });
        }

        let updatedInfo = {};

        if (req.body.name) {
            updatedInfo.name = req.body.name;
        }
        if (req.body.city) {
            updatedInfo.city = req.body.city;
        }
        if (req.body.address) {
            updatedInfo.address = req.body.address;
        }

        Company.findByIdAndUpdate(req.params.id, updatedInfo, (err, company) => {
            if (err) {
                return res.status(500).send(err);
            }
            return res.status(200).json(company);
        });
    },
    delete(req, res) {
        if (!req.params.id) {
            res.status(400).send({ err: 'Invalid Id Or Bad Request' });
        }

        Company.findByIdAndRemove(req.params.id, (err, company) => {
            if (err) {
                return res.status(500).send(err);
            }
            if (!company) {
                return res.status(404).send({ err: 'unable to find the company' });
            }
            return res.status(200).send({ msg: 'company is deleted' });
        });
    }
};   