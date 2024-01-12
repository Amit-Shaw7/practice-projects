import React from "react";
import { server, videoUploadHeader } from "../../config";
import axios from "axios";
import Heading from "../components/Heading";
import Input from "../components/Input";
import SubtitleFields from "../components/SubtitleFields";
import Container from "../components/Container";
import Button from "../components/Button";
import SavedSubtitles from "../components/SavedSubtitles";
import Loader from "../components/Loader";


const UploadVideo = () => {
    const [subtitleArray, setSubtitleArray] = React.useState([]);
    const [file, setFile] = React.useState(null);
    const [fileError, setFileError] = React.useState("");
    const [loading, setLoading] = React.useState(false);
    const [title, setTitle] = React.useState("");


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

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    }

    const handleSubtitleArray = (startTime, endTime, subtitleText) => {
        setSubtitleArray([...subtitleArray, { startTime, endTime, subtitleText }]);
    }

    const handleUpload = async (e) => {
        setLoading(true);
        e.preventDefault();
        if (subtitleArray.length === 0) {
            alert("Please add some subtitles");
        }
        if (!file) {
            setFileError(true);
            return;
        }
        const url = `${server}/api/video/upload`;
        const formData = new FormData();
        formData.append('video', file);
        formData.append('title', title);
        formData.append('subtitles', JSON.stringify(subtitleArray));

        try {
            const response = await axios.post(url, formData, videoUploadHeader);
            if (response.status === 201) {
                emptyAllFields();
                alert("Video uploaded successfully");
            }
        } catch (error) {
            console.error('Error uploading video', error);
        }
        setLoading(false);
    };

    const emptyAllFields = () => {
        setSubtitleArray([]);
        setFile(null);
        setFileError("");
    }

    return (
        <Container>
            {
                loading
                    ?
                    <Loader />
                    :
                    <div className="min-h-[87.5vh] w-full bg-black">

                        {/* <div className="flex flex-col gap-12"> */}
                        <form
                            className="flex flex-col gap-5 w-full"
                            onSubmit={handleUpload}
                        >
                            <div className="flex justify-between items-center">
                                <Heading title="Upload Video" />
                                <Button
                                    type="submit"
                                    text="Upload"
                                />
                            </div>

                            <div className="flex flex-col w-full items-center justify-center gap-5">
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

                                <Input
                                    handleChange={handleTitleChange}
                                    type="text"
                                    name="title"
                                    label="Title"
                                    required={true}
                                    value={title}
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
            }

        </Container>
    )
}

export default UploadVideo;