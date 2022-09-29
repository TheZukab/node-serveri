import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

const URL = 'http://localhost:3001/'

function App() {
  const [message, setMessage] = useState('test')

  useEffect(() => {
    axios.get(URL)
    .then((response) => {
      console.log(response.data)
      setMessage(response.data.message)
    }).catch(error => {
      setMessage(error)
    })
  },
  [])

return(
  <p>{message}</p>
);
}

export default App;
