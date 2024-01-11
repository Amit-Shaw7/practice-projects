import axios from "axios";
import React, { useRef } from "react";
import { useParams } from "react-router-dom"
import { server } from "../../config";
import ReactPlayer from "react-player";
import Container from "../components/Container";

const VideoDetails = () => {
    const params = useParams();
    const player = useRef();

    const { id } = params;
    const [video, setVideo] = React.useState({});
    const fetchVideo = async () => {
        const url = `${server}/api/video/${id}`;
        try {
            const response = await axios.get(url);
            if (response.status === 200) {
                setVideo(response?.data.video);
            }
        } catch (error) {
            alert("Error occured");
            console.log(error);
        }
    }

    React.useEffect(() => {
        fetchVideo();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <Container>
            <div className="h-[89.7vh] w-full flex items-center justify-center">
                <ReactPlayer
                    config={{
                        file: {
                            attributes: {
                                crossOrigin: "anonymous",
                            },
                            tracks: [
                                {
                                    kind: "subtitles",
                                    src: `${server}/${video?.subtitles}`,
                                    srcLang: "en",
                                    default: true
                                }
                            ]
                        },

                    }}
                    ref={player}
                    loop
                    muted
                    url={`${server}/${video?.videoUrl}`}
                    controls
                    height="100%"
                    width="100%"
                />
            </div>
        </Container>
    )
}

export default VideoDetails