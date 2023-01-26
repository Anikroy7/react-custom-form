import React from 'react';

const InputGroup = ({ label, type, name, value, placeholder }) => {
    return (
        <div className="inputs" >
            <label htmlFor="">{label}</label>
            <input type={type} name={name} placeholder={placeholder} />
        </div >
    );
};

export default InputGroup;