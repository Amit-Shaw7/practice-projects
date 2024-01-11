import PropTypes from 'prop-types';

const Button = (props) => {
  return (
    <button
      type={props.type}
      onClick={props.onClick}
      className={
        `hover:bg-gray-200
         bg-white
         text-black
         transition-all
         duration-300
         ease-in-out
         ${props.size === "large" ? "px-8 py-4" : "py-2 px-4"}
         ${props.size === "large" ? "text-xl" : "text-md"} 
         font-semibold 
         uppercase
         h-fit
         rounded-md`
      }
    >
      {props.text}
    </button>
  )
}

export default Button;


Button.propTypes = {
  onClick: PropTypes.func,
  text: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  size: PropTypes.string,
}