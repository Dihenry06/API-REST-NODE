const mongoose = require('mongoose');

const Product = mongoose.model('Product');

module.exports = {
    async index(req, res) {
        const products = await Product.find();

        return res.json(products);
    },
    async show(req, res) {
        const id = req.params.id;
        const product = await Product.findById(id);

        return res.json(product);
    },

    async store(req, res) {

        const { title, description, url } = req.body;

        const response = await Product.create({
            title,
            description,
            url
        });

        return res.json(response);
    },

    async update(req, res) {
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
        return res.json(product);
    },

    async delete(req,res){
        await Product.findByIdAndRemove(req.params.id);
        return res.send();
    }

}