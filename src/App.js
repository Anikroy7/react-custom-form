
import './App.css';
import InputGroup from './Components/InputGroup';

const formIntitalState = {
  title: '',
  bio: '',
  skills: ''
}

const handleSubmit = (e) => {
  e.preventDefault();
  console.log('object');
}

function App() {
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
            value={formIntitalState.title}
          />
          <InputGroup
            label={'Bio?'}
            name={'bio'}
            type={'text'}
            placeholder={'I am a software engineer'}
            value={formIntitalState.bio}
          />
          <InputGroup
            label={'Skills?'}
            name={'skills'}
            type={'text'}
            placeholder={'React, Node js'}
            value={formIntitalState.bio}
          />

          <input className='submitBtn' type="submit" value='Submit' />
        </div>
      </form >
    </div >
  );
}

export default App;
