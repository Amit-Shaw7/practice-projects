import { asyncError } from "../../../utils/errors/asyncError.js";
import Video from "../../models/video.js";

export const addVideo = asyncError(async (req, res, next) => {
    const { filename, path } = req.file;
    const { title } = req.body;

    // Save video details in MongoDB
    const newVideo = new Video({
        title,
        videoUrl: path,
        // Add more fields as needed
    });

    await newVideo.save();

    res.status(200).send('Video uploaded successfully');
})