import axios from 'axios';
import SubtitleComponent from './SubtitleComponent';
import React from 'react';

const VideoUploadComponent = () => {
    const [subtitleArray, setSubtitleArray] = React.useState([]);
    const [file, setFile] = React.useState(null);

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleSubtitleArray = (startTime , endTime , subtitle) => {
        setSubtitleArray([...subtitleArray, { startTime, endTime, subtitle }]);
    }

    const handleUpload = async () => {
        const formData = new FormData();
        formData.append('video', file);
        formData.append('subtitles', JSON.stringify(subtitleArray));

        try {
            await axios.post('http://localhost:5000/api/video/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            alert('Video uploaded successfully');
        } catch (error) {
            console.error('Error uploading video', error);
        }
    };

    return (
        <>
            <div>
                <input type="file" onChange={handleFileChange} />
                <button onClick={handleUpload}>Upload Video</button>
            </div>
            <br />
            <SubtitleComponent subtitleArray={subtitleArray} handleSubtitleArray={handleSubtitleArray}/>
        </>
    );
};

export default VideoUploadComponent;
