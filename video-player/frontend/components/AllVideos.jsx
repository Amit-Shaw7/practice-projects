import React from 'react';
import axios from 'axios';
import ReactPlayer from 'react-player';

const AllVideos = () => {
    const [allVideos, setAllVideos] = React.useState([]);
    const [curVideo, setCurVideo] = React.useState("659d614c445b2bb68a44a2cf");
    const player = React.useRef();
    const [playing, setPlaying] = React.useState(false);
    const [path, setPath] = React.useState("");
    const [url, setUrl] = React.useState("");



    const getVideos = async () => {
        const url = "http://localhost:5000/api/video";
        try {
            const response = await axios.get(url);
            if (response.status === 200) {
                setAllVideos(response.data.videos);
            }
        } catch (error) {
            console.log(error);
        }
    }

    const getVideo = async () => {
        const url = `http://localhost:5000/api/video/${curVideo}`;
        try {
            const response = await axios.get(url);
            if (response.status === 200) {
                console.log(response.data.subtitles);
                console.log(response.data.videoUrl);
                setPath(response.data.subtitles);
                setUrl(response.data.videoUrl);
            }
        } catch (error) {
            console.log(error);
        }
    }

    React.useEffect(() => {
        getVideos();
    }, []);

    React.useEffect(() => {
        getVideo();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [curVideo]);

    return (
        <div>
            {
                allVideos.map((video) => (
                    <div onClick={() => setCurVideo(video?._id)} key={video?._id}>
                        {video?._id}
                    </div>
                ))
            }

            <div>
                <ReactPlayer
                    config={{
                        file: {
                            attributes: {
                                crossOrigin: "anonymous",
                            },
                            tracks: [
                                {
                                    kind: "subtitles",
                                    src: path,
                                    srcLang: "en",
                                    default: true
                                }
                            ]
                        },

                    }}
                    ref={player}
                    loop
                    muted
                    playing={playing}
                    url={url}
                    controls
                />
                <button onClick={() => setPlaying(!playing)}>Play</button>

            </div>
        </div>
    )
}

export default AllVideos