import React from 'react';
import TextInput from './TextInput';



const InputGroup = ({ label, type, name, value, placeholder, onChange, errors, onFoucus, onBlur }) => {
    return (
        <div className="inputs" >
            <label htmlFor="">{label}</label>
            <TextInput
                type={type}
                name={name}
                id={name}
                placeholder={placeholder ?? ''}
                value={value}
                onChange={onChange}
                errors={errors}
                onFocus={onFoucus}
                onBlur={onBlur}
            />
            {errors && <p className='inputError'>{errors}</p>}
        </div >
    );
};

export default InputGroup;