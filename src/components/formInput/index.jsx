import { forwardRef } from 'react';
import './index.css';

const FormInput = forwardRef(
  (
    { type, name, value, onChange, placeholder, required, disabled, style },
    ref
  ) => {
    const formStyle =
      style === 'full'
        ? 'formInput formInput-full'
        : 'formInput formInput-half';

    return (
      <input
        className={formStyle}
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
        ref={ref}
      />
    );
  }
);

export default FormInput;
