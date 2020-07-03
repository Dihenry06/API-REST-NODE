const mongoose = require('mongoose');

const Product = mongoose.model('Product');

module.exports = {
    async index(req, res) {
        try {
            const products = await Product.find();
            return res.status(200).json(products);
        } catch (error) {
            return res.status(500).json(error)
        }

    },
    async show(req, res) {
        const id = req.params.id;

        try {
            const product = await Product.findById(id);
            return res.status(200).json(product);
        } catch (error) {
            return res.status(500).json(error);
        }

    },

    async store(req, res) {

        const { title, description, url } = req.body;

        try {

            const response = await Product.create({
                title,
                description,
                url
            });

            return res.status(200).json(response);
        } catch (error) {
            return res.status(500).json(error);
        }

    },

    async update(req, res) {

        try {
            const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
            return res.status(200).json(product);
        } catch (error) {
            return res.status(200).json(error);
        }

    },

    async delete(req, res) {
        try {
            await Product.findByIdAndRemove(req.params.id);
            return res.status(200).json({ message: 'Product deleted' });
        } catch (error) {
            return res.status(200).json(error);
        }

    }

}