import PropTypes from 'prop-types';
const Container = ({ children, className }) => {
  return (
    <div className='h-screen pt-16'>
      <div className={`px-2 md:px-12 ${className}`}>
        {children}
      </div>
    </div>
  )
}

export default Container;

Container.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
}