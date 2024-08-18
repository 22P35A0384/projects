import mongoose from "mongoose";
const schema = mongoose.Schema;

let bus_data = new schema({
    date:{
        type:String
    },
    distance:{
        type:String
    },
    regno:{
        type:String
    },
    routename:{
        type:String
    },
    uploaddate:{
        type:String
    },
    strength:{
        type:String
    },
    society:{
        type:String
    },
    branch:{
        type:String
    },
    capacity:{
        type:String
    },
    omr:{
        type:String
    },
    cmr:{
        type:String
    },
    result:{
        type:String
    },
    kms:{
        type:String
    },
    remarks:{
        type:String
    },
    Timestamp:{
        type:String
    },
})


export default mongoose.model('Bus Data',bus_data)