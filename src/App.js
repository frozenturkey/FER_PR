import './App.css';
import { BEDDING } from './shared/bedding';
import { LIGHTING } from './shared/lighting';
import DetailComponent from './DetailComponent';
import MainComponent from './MainComponent';

function App() {
  return (
    <div className="App d-flex">
      <MainComponent />
    </div>
  );
}

export default App;
