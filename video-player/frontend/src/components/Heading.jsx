import PropTypes from 'prop-types'

const Heading = ({ title, size , center }) => {
    return (
        <div className='my-4 w-full flex items-center justify-start'>
            {
                size === "small"
                    ?
                    <h2 className={`${center ? "text-center" : "text-left"} text-xl font-semibold w-full`}>{title}</h2>
                    :
                    <h1 className={`${center ? "text-center" : "text-left"} text-3xl font-semibold w-full`}>{title}</h1>
            }
        </div>
    )
}

Heading.propTypes = {
    title: PropTypes.string.isRequired,
    size: PropTypes.string,
    center : PropTypes.bool
}

export default Heading;