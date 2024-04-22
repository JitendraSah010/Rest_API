import ProductModel from "../model/productSchema.js"

const sortProducts = async(req, res)=>{
    const {sort} = req.query;

    const queryObject = {};


    if(sort){                                       //user type sort=name,company
        const sortFix = sort.replace(',', ' ');     // but pattern have no comma i.e sort(name company)
        queryObject.sort = sortFix;                 // so, i removed the comma 
    }


    console.log(req.query);
    console.log(queryObject);
    // const data = await ProductModel.find().sort("-featured company");     //sort default
    const data = await ProductModel.find().sort(queryObject.sort);                  // user type or click on sort then only sort otherwise not
    res.status(200).json({data});
    
}



export default sortProducts;