import sendData from "../send_API_DB.js";

const testProduct = (req,res)=>{
    res.json( {message: "This is testing of products"} );
}

const addProductsAPI = (req, res)=>{
    try {
        sendData();
        return res.json("API data send to database !!")
    } catch (error) {
       console.log(error);
    }
}

export { testProduct, addProductsAPI};