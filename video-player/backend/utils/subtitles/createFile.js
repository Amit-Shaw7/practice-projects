import fs from 'fs';
import { __dirname } from '../../globals.js';
import path from 'path';

export const convertToVtt = (subtitles, filename) => {
    const mediaFolderPath = path.join(__dirname, 'media' , 'subtitles');
    const fileName = `${filename}.vtt`;
    const dirPath = path.join(mediaFolderPath, fileName);
    fs.writeFileSync(dirPath, "WEBVTT\n\n");

    for (let i = 0; i < subtitles.length; i++) {
        fs.appendFileSync(dirPath, `${i} \n${subtitles[i].startTime} --> ${subtitles[i].endTime}\n${subtitles[i].subtitleText}\n\n`);
    }

    return fileName;
};