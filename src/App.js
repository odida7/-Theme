import React from 'react';
import useLocalStorage from 'use-local-storage';
import './App.css';

function App() {
  const [theme, setTheme] = useLocalStorage('theme' ? 
  'dark' : 'light')

  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme)
  }

  return (
    <div className="app" data-theme={theme}>
      <div className='container'>
        <h2>ODIDA THEME</h2>
        <input type='email' placeholder='Enter email' className='input'/>
        <p>lorem ipsum ffkjdsnfkdjs nsfnsfkjsfns bnfkjfnk fkjfsndfsnds hbfskjds.</p>
        <button className='btn'>subscribe</button>
      </div>

     <button className='btn btn-theme' onClick={switchTheme}>BG</button>


    </div>
  );
}

export default App;
