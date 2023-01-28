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
  const [focus, setFocus] = useState({
    title: false,
    bio: false,
    skills: false
  })

  const handleSubmit = (e) => {
    e.preventDefault();
    const { isValid, errors } = cheakValidation(inputValues);

    if (isValid) {
      setErrors({ ...errors });
      setInputValues({
        ...inputValues,
      })

    } else {
      setErrors({ ...errors });
    }
    console.log(inputValues);
  }
  const handleOnchange = (e) => {
    setInputValues((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleBlur = (e) => {
    const { errors } = cheakValidation(inputValues);
    const key = e.target.name;
    if (errors[key] && focus[key]) {
      setErrors((prev) => ({
        ...prev,
        [key]: errors[key]

      }))
    } else {
      setErrors((prev) => ({
        ...prev,
        [key]: ""
      }))
    }
  }
  const handleOnFocus = (e) => {
    setFocus((prev) => ({
      ...prev,
      [e.target.name]: true
    }))

  }

  const cheakValidation = (values) => {
    const { title, bio, skills } = values;
    const errors = {}

    if (!title) {
      errors.title = 'Name Field is required'
    }
    if (!bio) {
      errors.bio = 'Bio field is required'
    }
    if (!skills) {
      errors.skills = 'Skills field is required'
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
            errors={errors.title}
            onChange={handleOnchange}
            onFoucus={handleOnFocus}
            onBlur={handleBlur}
          />
          <InputGroup
            label={'Bio?'}
            name={'bio'}
            type={'text'}
            placeholder={'I am a software engineer'}
            value={inputValues.bio}
            errors={errors.bio}
            onChange={handleOnchange}
            onFoucus={handleOnFocus}
            onBlur={handleBlur}
          />
          <InputGroup
            label={'Skills?'}
            name={'skills'}
            type={'text'}
            placeholder={'React, Node js, etc.'}
            value={inputValues.skills}
            errors={errors.skills}
            onChange={handleOnchange}
            onFoucus={handleOnFocus}
            onBlur={handleBlur}
          />

          <input className='submitBtn' type="submit" value='Submit' />
        </div>
      </form >
    </div >
  );
}

export default App;
