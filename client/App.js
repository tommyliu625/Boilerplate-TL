import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import Routes from './routes';
// import { Navbar } from './components';

const App = () => {
  const [testData, setTestData] = useState('');
  let data = axios.get('/api/test').then((data) => {
    setTestData(data.data.message);
  });
  console.log(testData);
  return (
    <div>
      {/* <Navbar /> */}
      {/* <Routes /> */}
      {testData}
    </div>
  );
};

export default App;
