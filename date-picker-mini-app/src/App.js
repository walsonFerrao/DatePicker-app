import logo from './logo.svg';
import './App.css';
import {Example} from './Components/Date'
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file

function App() {
  return (
    <div className="App"> 
     <Example/>
    </div>
  );
}

export default App;
