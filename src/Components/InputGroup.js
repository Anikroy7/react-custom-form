import React from 'react';
import styled from 'styled-components';
import TextInput from './TextInput';



const InputGroup = ({ label, type, name, value, placeholder, onChange, errors }) => {
    console.log(errors);
    return (
        <div className="inputs" >
            <label htmlFor="">{label}</label>
            <TextInput
                name={name}
                id={name}
                placeholder={placeholder ?? ''}
                value={value}
                onChange={onChange}
                errors={errors}
            />
            {errors && <p className='inputError'>{errors}</p>}
        </div >
    );
};

export default InputGroup;