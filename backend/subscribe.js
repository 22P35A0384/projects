import mongoose from "mongoose";
const schema = mongoose.Schema;

let mailupdate = new schema({
    email:{
        type:String
    }
})

export default mongoose.model("Subscriber's Mail I'd",mailupdate)