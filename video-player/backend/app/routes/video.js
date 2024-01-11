import express from 'express';
import { upload } from '../../utils/multer/multer.js';
import { addVideo } from '../controllers/video/addVideo.js';
import { getAllVideos } from '../controllers/video/getAllVideos.js';
import { getVideoById } from '../controllers/video/getVideoById.js';

const VideoRouter = express.Router();

VideoRouter.post('/upload',
    upload.single('video'),
    addVideo
);

VideoRouter.get('/all',
    getAllVideos
);

VideoRouter.get('/:id',
    getVideoById
);



export default VideoRouter;