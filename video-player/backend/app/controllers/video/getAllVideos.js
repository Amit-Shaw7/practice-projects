import { asyncError } from "../../../utils/errors/asyncError.js";
import Video from "../../models/video.js";

export const getAllVideos = asyncError(async (req, res, next) => {
    const videos = await Video.find();
    if (!videos) {
        return res.status(404).json({
            msg: "No Videos Found",
            videos: []
        })
    }

    return res.status(200).json({
        msg: "Videos Found",
        videos
    })
})