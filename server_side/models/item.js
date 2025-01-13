import mongoose from "mongoose";
import URL from "mongoose-type-url"
import Joi from "joi";
const itemSchema=mongoose.Schema({
    name:String,
    description:String,
    price:Number,
    count:Number,
    url:String
})
export const Item=mongoose.model("items",itemSchema);
export const itemValidationForAdd = (_item) => {
    const schema = Joi.object(
        
        {
            name:Joi.string().min(3).max(30).required(),
            description:Joi.string().required,
            price: Joi.string().min(0).pattern(new RegExp(`^[1-9][0-9]*(\. [0-9]+)? |0+\. [0-9]*[1-9][0-9]*$`)).required(),
            count: Joi.string().min(0).pattern(new RegExp(`^[1-9][0-9]*(\. [0-9]+)? |0+\. [0-9]*[1-9][0-9]*$`)).required(),
            url:Joi.string().required
        }
    );
    return schema.validate(_item);
}