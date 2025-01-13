import { Item } from "../models/item.js"
import mongoose from "mongoose"
export const getallItem = async (req, res) => {
    let { search } = req.query;
    let perPage = req.query.perPage || 5;
    let page = req.query.page || 1;
    let ex = new RegExp(`${search}`)
    try {
        let filter = {};
        if (search)
            filter.name = ex;
        else filter.name=""
        let allItems = await Item.find()
            .skip(perPage * (page - 1))
            .limit(perPage);
        res.json(allItems)
    }
    catch (er) {
        res.status(400).send("מצטערים התרחשה שגיאה בשליפת הנתונים " + er.message)
    }
}
export const getItemById = async (req, res) => {
    try {
        let id = req.params.itemid
        if (!mongoose.isValidObjectId(id))
            return res.status(400).send("קוד לא תקין")
        let item = await Item.findById(id)
        if (!item)
            return res.status(404).send("מצטערים לא נמצא פריט עם כזה קוד")
        res.json(item)
    }
    catch (er) {
        res.status(400).send("מצטערים התרחשה שגיאה בשליפת הנתונים " + er.message)
    }
}
export const deletItemById = async (req, res) => {
    let { id } = req.params;
    try {
        if (!mongoose.isValidObjectId(id))
            return res.status(400).send("קוד לא תקין")
        let item = await Item.findById(id);
        if (!item)
            return res.status(404).send(" מצטערים לא נמצא פריט עם כזה קוד למחיקה")
        let deleted={};
        if (req.user.role == "admin" || req.user._id == item.ordererID){
            deleted = await Item.findByIdAndDelete(id);}
        res.json(deleted);
    }
    catch (er) {
        res.status(400).send("מצטערים התרחשה שגיאה במחיקת הנתונים" + er.message)
    }
}

export const addItem = async (req, res) => {
    let { name,description,price,count,url } = req.body;
    if (!name || !price)
        return res.status(404).send("שם ומחיר עמודים הם חובה");
    try {
        let sameItem = await Item.find({  name });
        if (sameItem.length > 0)
            return res.status(409).send("כבר קיים פריט עם שם כזה ")
        let newItem = new Item({ name,description, price,count,url });
        await newItem.save();
        res.json(newItem);
    } catch (er) {
        res.status(400).send("מצטערים התרחשה שגיאה בהוספת הנתונים" + er.message)
    }
}
export const updateItem = async (req, res) => {
    let { id } = req.params;
    try {
        if (!mongoose.isValidObjectId(id))
            return res.status(400).send("קוד לא תקין")
        let itemToUpdate = await Item.findById(id);
        if (!itemToUpdate)
            return res.status(404).send(" מצטערים לא נמצא פריט עם כזה קוד לעדכון")
        await Item.findByIdAndUpdate(id, req.body);
        let item = await Item.findById(id)
        res.json(item);
    }
    catch (er) {
        res.status(400).send("מצטערים התרחשה שגיאה במחיקת הנתונים" + er.message)
    }
    
}
