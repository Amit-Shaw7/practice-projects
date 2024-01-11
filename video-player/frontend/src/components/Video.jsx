import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const url = "https://media.istockphoto.com/id/841380450/photo/autumn-in-the-white-mountains-of-new-hampshire.jpg?s=2048x2048&w=is&k=20&c=lCrZpa08MBivWf9veR_QnfdSFNTbXYoyZVOhjg6qkM0="

const Video = ({ video }) => {
    return (
        <Link className='h-fit rounded-md' to={`/video/${video._id}`}>
            <div className='h-full rounded-md w-full'>
                <img
                    className='h-full w-full rounded-md object-cover'
                    src={url}
                    alt="demo"
                />

                <div className='mt-3 mx-1'>
                    <p>{video.title}</p>
                </div>
            </div>
        </Link>
    )
}

export default Video

Video.propTypes = {
    video: PropTypes.object.isRequired
}
