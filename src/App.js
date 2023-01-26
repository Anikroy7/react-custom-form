
import { useState } from 'react';
import './App.css';
import InputGroup from './Components/InputGroup';

const init = {
  title: '',
  bio: '',
  skills: ''
}




function App() {
  const [inputValues, setInputValues] = useState({ ...init });
  const [errors, setErrors] = useState({ ...init });

  const handleSubmit = (e) => {
    e.preventDefault();
    const { isValid, errors } = cheakValidation(inputValues);
    console.log(isValid, errors);
    if (isValid) {
      setErrors({ ...errors });
    } else {
      setErrors({ ...errors });
    }
  }

  const handleOnchange = (e) => {
    setInputValues((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }
  console.log(errors);
  const cheakValidation = (values) => {
    const { title, bio, skills } = values;
    const errors = {}

    if (!title) {
      errors.title = 'Invalid title'
    }
    if (!bio) {
      errors.bio = 'Invalid bio'
    }
    if (!skills) {
      errors.skills = 'Invalid Skills'
    }

    return {
      isValid: Object.keys(errors).length === 0,
      errors
    }
  }



  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <div className='container'>
          <div className="brand-title">User Form</div>
          <InputGroup
            label={'What is your title?'}
            name={'title'}
            type={'text'}
            placeholder={'Anik roy'}
            value={inputValues.title}
            onChange={handleOnchange}
            errors={errors.title}
          />
          <InputGroup
            label={'Bio?'}
            name={'bio'}
            type={'text'}
            placeholder={'I am a software engineer'}
            value={inputValues.bio}
            onChange={handleOnchange}
            errors={errors.bio}
          />
          <InputGroup
            label={'Skills?'}
            name={'skills'}
            type={'text'}
            placeholder={'React, Node js, etc.'}
            value={inputValues.skills}
            onChange={handleOnchange}
            errors={errors.skills}
          />

          <input className='submitBtn' type="submit" value='Submit' />
        </div>
      </form >
    </div >
  );
}

export default App;
