import {Amplify} from 'aws-amplify';
import confi from './aws-exports'
import './App.css';
Amplify.config(confi)

function App() {
  return (
    <div className="App">
    Home
    </div>
  );
}

export default App;
