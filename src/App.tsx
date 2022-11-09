import './App.css';
import Slider from './features/slider/Slider'

function App() {
  return (
    <div className="App">
      <Slider data={data} delay={2000} />
    </div>
  );
}

const data = [
  {
    title: 'Panificação',
    products: [
      {
        name: 'Pão francês',
        price: 'R$ 7,34'
      },
      {
        name: 'Sonho',
        price: 'R$ 3,00',
      }
    ]
  },
  {
    title: 'Bebidas',
    products: [
      {
        name: 'Heineken Long Neck',
        price: 'R$ 9,00'
      },
      {
        name: 'Coca-cola Lata',
        price: 'R$ 4,00'
      },
      {
        name: 'Budweiser',
        price: 'R$ 6,99'
      }
    ]
  },
  {
    title: 'Ofertas',
    products: [
      {
        name: 'Brigadeiro',
        price: 'R$ 0,99'
      }
    ]
  },
]

export default App;
