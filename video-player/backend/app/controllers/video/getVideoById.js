import { asyncError } from "../../../utils/errors/asyncError.js";
import Video from "../../models/video.js";
import path from "path";
import { __dirname } from "../../../globals.js";
export const getVideoById = asyncError(async (req, res, next) => {
    const { id } = req.params;
    const video = await Video.findById(id);

    const videoUrl = path.join(__dirname ,`${video.videoUrl}`);

    const subtitles = path.join(__dirname, "subtitles" , `/${video.subtitles}`);

    if (!video) {
        return res.status(404).json({
            msg: "No video Found",
        })
    }

   
    return res.status(200).json({
        msg: "video Found",
        video,
        videoUrl,
        subtitles
    })
})