import { asyncError } from "../../../utils/errors/asyncError.js";
import { convertToVtt } from "../../../utils/subtitles/createFile.js";
import Video from "../../models/video.js";

export const addVideo = asyncError(async (req, res, next) => {
    const { filename, path } = req.file;
    const { title, subtitles } = req.body;

    
    const subtitlesInJSON  = JSON.parse(subtitles);

    const filenameFinal = convertToVtt(subtitlesInJSON , filename);
    // Save video details in MongoDB
    const newVideo = new Video({
        title,
        videoUrl: `/uploads/${filename}`,
        subtitles : `/subtitles/${filenameFinal}`
        // Add more fields as needed
    });

    await newVideo.save();

    return res.status(201).send('Video uploaded successfully');
})