import ProductModel from './model/productSchema.js';
import send_API_DBjson from './API_Data_Products.json' assert { type: 'json' };

const sendData = async(req, res)=>{
    try {
        await ProductModel.deleteMany();
        await ProductModel.create(send_API_DBjson);
        console.log("Sucess");
    } catch (error) {
        console.log(error);
    }
}

export default sendData;