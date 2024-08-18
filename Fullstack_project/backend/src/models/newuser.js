import mongoose from "mongoose";

const schema = mongoose.Schema;
let newuser = new schema({
    username:{
        type:String
    },
    password:{
        type:String
    },
    cnfpass:{
        type:String
    }
})

export default mongoose.model('New User',newuser)