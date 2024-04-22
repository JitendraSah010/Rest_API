import express, { query } from 'express';
const router = express.Router();

import ProductModel from './model/productSchema.js';
import { testProduct, addProductsAPI } from './controllers/productController.js';
import sortProducts from './controllers/sortProducts.js';
import selectProducts from './controllers/selectProduct.js';


// ------------------fetching all data-----------------------
// router.get( '/', async(req, res) =>{
//     const data = await ProductModel.find({}); 
//     res.status(200).json({data});
// })

//-------------------search data using req.query-------------
router.get('/search', async(req, res)=>{                        // product?company=apple  eg: http://localhost:3000/product?company=apple
    const data = await ProductModel.find( req.query );
    res.status(200).json( {data} );
})

// ---------------------search using req.query with search value in url and also make case insensitive-----------------
router.get('/', async(req,res)=>{
    const { company, name, featured, page, limit} = req.query;
    const queryObject = {};
    // pagination
    const pages = Number(page) || 1 ;
    const lim = Number(limit) || 7;
    const skip = (pages-1)* lim;

    if(company){
        queryObject.company = { $regex : company, $options:'i' }                    //search if user write company name
    }
    if(name){
        queryObject.name= { $regex: name, $options:'i'}       //search but uppercase or lowercase don't matter so use regex
    }
    if(featured){
        queryObject.featured=featured
    }
    const products = await ProductModel.find(queryObject).skip(skip).limit(lim);
    res.status(200).json({products, nbHits: products.length, pages:pages});
})

// ----------------filter data using req.params--------------
// router.get('/:company', async(req,res)=>{             // to test url on thunder:  product/apple  Eg:   http://localhost:3000/product/apple
//     const company1 =  req.params.company;
//     try {
//         const data = await ProductModel.find({company:company1});
//         res.status(200).json(data);
//         console.log("data is: ",req.params.company);
//     } catch (error) {
//         console.log(error);
//     }
// } )

router.get('/test', testProduct);
router.get('/addProduct', addProductsAPI);
router.get('/sort', sortProducts);
router.get('/select', selectProducts);

export default router;