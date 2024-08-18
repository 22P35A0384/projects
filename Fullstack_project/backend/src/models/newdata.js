import mongoose from "mongoose";
const schema = mongoose.Schema;

let newdata = new schema({
    username:{
        type:String
    },
    password:{
        type:String
    },
    mail:{
        type:String
    },
    profile:{
        type:String,
        // type:required
    }
})

export default mongoose.model('Newdata',newdata)