import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import Routes from './routes';
// import { Navbar } from './components';

const App = () => {
  const [testData, setTestData] = useState('');
  const getdata = async () => {
    const { data } = await axios.get('/api/test');
    console.log(data);
    setTestData(data.message);
  };
  getdata();
  return (
    <div>
      {/* <Navbar /> */}
      {/* <Routes /> */}
      {testData}
    </div>
  );
};

export default App;
