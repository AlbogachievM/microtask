import { useState } from 'react';
import './App.css';
import { FullInput } from './components/FullInput';
import { Input } from './components/Input';
import { Button } from './components/Button';



function App() {
  let [message, setMessage] = useState([
    { message: 'message 1' },
    { message: 'message 2' },
    { message: 'message 3' },
  ])

  let [title, setTitle] = useState('')
  console.log(title);


  function addMessage(value: string) {
    setMessage([{ message: value }, ...message,])

  }

  function callBackButtonHandler() {
      addMessage(title);
      setTitle('')
  }
  return (
    <div className="App">

      <div>
        <Input setTitle={setTitle} title={title} />
        <Button title='+' callBack={callBackButtonHandler} />
      </div>

      {message.map((m, index) => {
        return (
          <div key={index}>{m.message}</div>
        )
      })}
    </div>
  );
}

export default App;