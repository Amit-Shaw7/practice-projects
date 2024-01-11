import React from "react";
import { server, videoUploadHeader } from "../../config";
import axios from "axios";
import Heading from "../components/Heading";
import Input from "../components/Input";
import SubtitleFields from "../components/SubtitleFields";
import Container from "../components/Container";
import Button from "../components/Button";
import SavedSubtitles from "../components/SavedSubtitles";


const UploadVideo = () => {
    const [subtitleArray, setSubtitleArray] = React.useState([]);
    const [file, setFile] = React.useState(null);
    const [fileError, setFileError] = React.useState("");


    const handleFileChange = (e) => {
        const file = e.target.files[0];
        const fileSizeInBytes = file.size;
        const fileSizeInKB = fileSizeInBytes / 1024;
        if (fileSizeInKB > 10240) {
            setFileError("File size should be less than 10 MB");
            return
        }
        setFile(file);
    };

    const handleSubtitleArray = (startTime, endTime, subtitleText) => {
        setSubtitleArray([...subtitleArray, { startTime, endTime, subtitleText }]);
    }

    const handleUpload = async (e) => {
        e.preventDefault();
        if (!file) {
            setFileError(true);
            return;
        }
        const url = `${server}/api/video/upload`;
        const formData = new FormData();
        formData.append('video', file);
        formData.append('subtitles', JSON.stringify(subtitleArray));

        try {
            const response = await axios.post(url, formData, videoUploadHeader);
            if (response.status === 201) {
                emptyAllFields();
                alert('Video uploaded successfully');
            }
        } catch (error) {
            console.error('Error uploading video', error);
        }

    };

    const emptyAllFields = () => {
        setSubtitleArray([]);
        setFile(null);
        setFileError("");
    }

    return (
        <Container>
            <div className="min-h-[87.5vh] w-full">

                {/* <div className="flex flex-col gap-12"> */}
                <form
                    className="flex flex-col gap-5"
                    onSubmit={handleUpload}
                >
                    <div className="flex justify-between items-center">
                        <Heading title="Upload Video" />
                        <Button
                            type="submit"
                            text="Upload"
                        />
                    </div>

                    <div className="flex items-center gap-5">
                        <Input
                            // value={file}
                            handleChange={handleFileChange}
                            error={fileError}
                            type="file"
                            name="video"
                            label="Video"
                            required={true}
                            fileType="video/*"
                        />

                        <SubtitleFields
                            subtitleArray={subtitleArray}
                            handleSubtitleArray={handleSubtitleArray}
                        />
                    </div>
                </form>

                <div className="mt-12">
                    <Heading
                        title="Subtitles Added"
                        size="small"
                    />
                    <SavedSubtitles subtitleArray={subtitleArray} />
                </div>
                {/* </div> */}
            </div>
        </Container>
    )
}

export default UploadVideo;