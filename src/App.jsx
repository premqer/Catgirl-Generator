import { useState, useEffect } from 'react'
import axios from 'axios';
import './App.css'

function App() {
  const [neko, setNeko] = useState('');
  const fetchNekoImage = async () => {
    try {
       const res = await axios.get('https://api.nekosia.cat/api/v1/images/catgirl');
       const json = res.data;
       setNeko(json.image.original.url);
 
       console.log(json);
    } catch (err) {
       console.error(err.stack);
    }
 };
 useEffect(() => {
  fetchNekoImage();
 }, [])
 return (
  <div className='min-h-screen bg-gradient-to-br from-purple-300 to-purple-500 flex items-center justify-center p-8'>
    <div className='p-8 shadow-2xl rounded-3xl bg-white flex flex-col items-center space-y-6 max-w-lg w-full'>
      <h1 className='text-4xl font-extrabold text-purple-700 mb-4 text-center'>Catgirl Image Generator</h1>
      {neko && (
        <div className='w-80 h-80 overflow-hidden rounded-2xl shadow-xl border-4 border-purple-600'>
          <img className='object-cover w-full h-full' src={neko} alt='nekoRand'/>
        </div>
      )}
      <button 
        className='bg-purple-600 hover:bg-purple-800 text-white font-bold py-3 px-6 rounded-full shadow-lg transition transform hover:scale-105 ease-in-out' 
        onClick={fetchNekoImage}
      >
        Get a new dose of catgirls!
      </button>
    </div>
  </div>
)
}

export default App
