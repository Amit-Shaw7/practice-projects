import mongoose from 'mongoose';

const videoSchema = new mongoose.Schema({
    title : {
        type : String,
        // rquired : true
    },
    videoUrl : {
        type : String,
        required : true
    },
    subtitles : { 
        type : String,
        // required : true
    }
} , {timestamps : true});

const Video = new mongoose.model("video" , videoSchema);
export default Video;