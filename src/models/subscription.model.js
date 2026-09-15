import mongoose , {Schema} from "mongoose";

const subsciptionSchema = new Schema({
    subscriber : {
        type : Schema.Types.ObjectId, //one who is
        ref : "User"
    },

    channel : {
        type : Schema.Types.ObjectId, // One to whom subscriber is subscribing
        ref : "User"
    }

},{timestamps : true})


export const Subsciption = mongoose.model("Subscription" , subscriptionSchema)