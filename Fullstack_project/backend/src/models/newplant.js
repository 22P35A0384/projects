import mongoose from "mongoose";
const schema = mongoose.Schema;

let newplant = new schema({
    name:{
        type:String
    },
    details:{
        type:String
    },
    profile:{
        type:String,
        // type:required
    }
})

export default mongoose.model('Newplant',newplant)