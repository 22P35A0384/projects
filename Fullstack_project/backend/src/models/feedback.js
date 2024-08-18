import mongoose from "mongoose";
const schema = mongoose.Schema;

let feedback = new schema({
    name:{
        type:String
    },
    email:{
        type:String
    },
    subject:{
        type:String
    },
    message:{
        type:String,
        // type:required
    }
})

export default mongoose.model('Feedback Data',feedback)