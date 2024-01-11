import PropTypes from 'prop-types'

const Heading = ({ title, size }) => {
    return (
        <div className='my-4 w-full flex items-center justify-start'>
            {
                size === "small"
                    ?
                    <h2 className='text-2xl font-semibold'>{title}</h2>
                    :
                    <h1 className='text-3xl font-semibold'>{title}</h1>
            }
        </div>
    )
}

Heading.propTypes = {
    title: PropTypes.string.isRequired,
    size: PropTypes.string
}

export default Heading;