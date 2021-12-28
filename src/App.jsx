import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Home from './Home'
import Card from './Cart'
import { CartProvider } from "react-use-cart";

function App() {
  return (
    <>
      <CartProvider>
        <Home />
        <Card />
      </CartProvider>
    </>
  )
}

export default App
