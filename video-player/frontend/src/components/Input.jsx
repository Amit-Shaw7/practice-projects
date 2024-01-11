import PropTypes from 'prop-types';

const Input = ({ error, type, label, name, required, value, handleChange, fileType }) => {
    return (
        <div className='flex flex-col gap-1'>
            <input
                className={
                    `rounded-sm
                     p-2 
                     border-2
                     bg-transparent
                     text-white
                     focus:outline-none
                     focus:ring-1
                     focus:ring-sky-500
                     focus:border-sky-500
                     ${error ? 'border-red-500' : 'border-slate-300'}
                     `
                }
                type={type}
                placeholder={label}
                required={required}
                name={name}
                value={value}
                onChange={handleChange}
                accept={fileType}
            // accept="video/*"
            />
            {error && <span className='text-xs text-red-500'>{error}</span>}
        </div>
    )
}

export default Input;


Input.propTypes = {
    label: PropTypes.string,
    name: PropTypes.string,
    required: PropTypes.bool,
    type: PropTypes.string,
    error: PropTypes.string,
    value: PropTypes.string,
    handleChange: PropTypes.func,
    fileType: PropTypes.string
}