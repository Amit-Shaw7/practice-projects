import express from 'express';
import { upload } from '../../utils/multer/multer.js';
import { addVideo } from '../controllers/video/addVideo.js';
import { showVideo } from '../controllers/video/showVideo.js';

const VideoRouter = express.Router();

VideoRouter.post('/upload',
    upload.single('video'),
    addVideo
);

VideoRouter.get('/',
    showVideo
);

export default VideoRouter;