import './App.css';
import Slider from './features/slider/Slider'

function App() {
  return (
    <div className="App">
      <Slider data={data} delay={2000} />
    </div>
  );
}

const data = [1, 2, 3, 4, 5]

export default App;
