import mongoose from "mongoose";

const productSchema = new mongoose.Schema( { 
    name : {
        type : String,
        require : true
    },
    price : {
        type:Number,
        required : true,
    },
    featured : {
        type: Boolean,
        default: false
    },
    rating : {
        type: Number,
        default: 4.8
    },
    createdAt : {
        type: Date,
        default: Date.now()
    },
    company : {
        type : String,
        enum : {
            values : [ "apple", "samsung", "dell", "mi" ],
            message : ` {value} product is not available `,
        }
    }
} );

const ProductModel = mongoose.model( 'Product', productSchema );

export default ProductModel;