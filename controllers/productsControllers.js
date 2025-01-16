const Product = require('../models/Products');

module.exports = {
    createProduct: async(req, res)=>{
        const newProduct = new Product(req.body);
        try{
            await newProduct.save();
            res.status(200).json('Product Created Successfully');
        }catch(error){
            res.status(500).json('Failed Product Created');
        }
    },
    getAllProducts: async(req, res)=>{
        try{
            const products = await Product.find().sort({ createdAt:-1 })
            res.status(200).json(products);
        }catch(error){
            res.status(500).json('Failed to get Products');
        }
    },
    getProduct: async(req, res)=>{
        try{
            const product = await Product.findById(req.params.id)
            res.status(200).json(product);
        }catch(error){
            res.status(500).json('Failed to get Product');
        }
    },
    searchProduct: async(req,res)=>{
        try{
            const result = await Product.aggregate(
                [
                    {
                      $search: {
                        index: "default",
                        text: {
                          query: req.param.key,
                          path: {
                            wildcard: "*"
                          }
                        }
                      }
                    }
                ]
            );
            res.status(200).json(result);
        }catch(error){
            res.status(500).json("Failed to get the Product");
        }
    },
};