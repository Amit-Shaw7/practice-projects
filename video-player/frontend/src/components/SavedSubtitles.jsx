import PropTypes from 'prop-types'

const SavedSubtitles = ({ subtitleArray }) => {
    return (
        <div id="savedSubtitles">
            {
                subtitleArray?.map((subtitles, index) => (
                    <div
                        key={index}
                        className='flex gap-3 items-center'
                    >
                        <p>{subtitles.startTime} &#8594; {subtitles.endTime}</p> - 
                        <p>{subtitles.subtitleText}</p>
                    </div>
                ))
            }
        </div>
    )
}

SavedSubtitles.propTypes = {
    subtitleArray: PropTypes.array
}

export default SavedSubtitles