import ProductModel from "../model/productSchema.js";

const selectProducts = async(req,res)=>{
    const { select } = req.query;
    const queryObject = {};

    if(select){
        const selectFix = select.split(",").join(" ");
        queryObject.select = selectFix;
    }

    console.log(queryObject.select);

    const data = await ProductModel.find().select(queryObject.select);
    res.status(200).json({data});
}

export default selectProducts;
