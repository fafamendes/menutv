import './App.css';
import Slider from './features/slider/Slider'

function App() {
  return (
    <div className="App">
      <Slider data={data} delay={2000} />
    </div>
  );
}

const data = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

export default App;
