import React from 'react';
import './App.css';
import Layout from 'components/layout/Layout';
import Main from 'components/main/Main';

function App() {
  return (
    <div>
      <Layout>
        <div className='main'>
        <Main/>
        </div>
      </Layout>
    </div>
  );
}

export default App;
