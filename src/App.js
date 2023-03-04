import Layout from './components/layout/Layout';
import Main from 'components/main/Main';
import './App.css';

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
