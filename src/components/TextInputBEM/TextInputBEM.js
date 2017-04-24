import React from 'react';
import PropTypes from 'prop-types';
import Label from '../Label';

/** Text input with integrated label to enforce consistency in layout, error display, label placement, and required field marker. */
function TextInput({htmlId, name, label, type = "text", required = false, onChange, placeholder, value, error, children, ...props}) {
  return (
    <div className="textinput">
      <Label htmlFor={htmlId} label={label} required={required} />
      <input
        id={htmlId}
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={error && 'textinput__input--state-error'}
        {...props}/>
        {children}
      {error && <div className="textinput__error">{error}</div>}
    </div>
  );
};

TextInput.propTypes = {
  /** Unique HTML ID. Used for tying label to HTML input. Handy hook for automated testing. */
  htmlId: PropTypes.string.isRequired,

  /** Input name. Recommend setting this to match object's property so a single change handler can be used. */
  name: PropTypes.string.isRequired,

  /** Input label */
  label: PropTypes.string.isRequired,

  /** Input type */
  type: PropTypes.oneOf(['text', 'number', 'password']),

  /** Mark label with asterisk if set to true */
  required: PropTypes.bool,

  /** Function to call onChange */
  onChange: PropTypes.func.isRequired,

  /** Placeholder to display when empty */
  placeholder: PropTypes.string,

  /** Value */
  value: PropTypes.any,

  /** String to display when error occurs */
  error: PropTypes.string,

  /** Child component to display next to the input */
  children: PropTypes.node
};

export default TextInput;
