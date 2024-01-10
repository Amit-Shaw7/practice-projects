import fs from 'fs';
export const convertToVtt = (subtitles , filename) => {
    const fileName = filename + '.vtt';
    fs.writeFileSync(fileName, "WEBVTT\n\n");

    for (let i = 0; i < subtitles.length; i++) {
        fs.appendFileSync(fileName, `${i} \n${subtitles[i].startTime} --> ${subtitles[i].endTime}\n${subtitles[i].subtitle}\n\n`);
    }

    return fileName;
};