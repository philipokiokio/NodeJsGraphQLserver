const productModel = require('./products.models');


module.exports = {
    Query:{
    products: ()=>{
        console.log('Getting the products ...')
        return productModel.getAllProducts();
        },
    productsByPrice: (_, args) =>{
        return productModel.getProductByPrice(args.min, args.max);
    },
    product: (_, args)=>{

        return productModel.getProductByID(args.id)
    }
    

    },
    Mutation:{
        addNewProduct: (_, args)=>{
            return productModel.addNewProduct(args.id,args.description, args.price)
        },
        addNewProductReview: (_, args) =>{
            return productModel.addNewProductReview(args.id, args.rating,args.comment)

        }
    }
}
     