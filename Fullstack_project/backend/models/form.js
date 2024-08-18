import mongoose from "mongoose";
const schema = mongoose.Schema;

let form = new schema({
    username:{
        type:String
    },
    password:{
        type:String
    },
    mail:{
        type:String
    },
    course:{
        type:String
    }
})

export default mongoose.model('forms',form)