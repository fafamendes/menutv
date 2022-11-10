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
        price: 'R$ 7,34',
        productImageUrl: 'https://i.pinimg.com/564x/00/e0/30/00e030619e352c815b47bd4447c40e5b.jpg'
      },
      {
        name: 'Sonho',
        price: 'R$ 3,00',
        productImageUrl: 'https://i.pinimg.com/564x/f1/e7/fe/f1e7fe7f5200a722eec7339e32e0291b.jpg'
      },
      {
        name: 'Donuts',
        price: 'R$ 3,00',
        productImageUrl: 'https://i.pinimg.com/564x/4c/2e/22/4c2e22f7ddf1ad1218433ebd612efd4c.jpg',
      },
      {
        name: 'Pão Italiano',
        price: 'R$ 17,99',
        productImageUrl: 'https://i.pinimg.com/564x/36/37/82/363782e826bc019979a140239f4ef3a3.jpg'
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
