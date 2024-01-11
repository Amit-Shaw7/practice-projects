import React from 'react';
import { server } from '../../config';
import axios from 'axios';
import Video from '../components/Video';
import Container from '../components/Container';
import Heading from '../components/Heading';
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';
import NoVideos from '../components/NoVideos';


const Videos = () => {
    const [videos, setVideos] = React.useState([]);
    const navigate = useNavigate();

    const fetchAllVideos = async () => {
        const url = `${server}/api/video/all`;
        try {
            const response = await axios.get(url);
            if (response.status === 200) {
                setVideos(response.data.videos);
            }
        } catch (error) {
            alert("Error loading")
            console.log(error);
        }
    }

    const goToAddVideoPage = () => {
        navigate("video/upload");
    }

    React.useEffect(() => {
        fetchAllVideos();
    }, []);

    return (
        <Container>
            <div className='flex items-center justify-between'>
                <Heading title='Videos' />
                <Button
                    text='Upload'
                    onClick={goToAddVideoPage}
                    size="small"
                />
            </div>

            {
                videos?.length === 0
                    ?
                    <NoVideos />
                    :
                    <div
                        id='video-container'
                        className='w-full h-full grid justify-start gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 overflow-y-auto'
                    >
                        <>
                            {
                                videos?.map((video) => (
                                    <Video video={video} key={video?._id} />
                                ))
                            }
                        </>
                    </div>
            }
        </Container>
    )
}

export default Videos