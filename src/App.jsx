
import Products from './components/Products'
import './App.css'
import Counter from './components/Counter'
import RegistrationForm from './components/RegistrationForm'
import TaskManager from './components/TaskManager'
import ProductAPI from './components/ProductAPI'

function App() {
  return <div>

    <ProductAPI />

    <TaskManager />

    <RegistrationForm />
    <Products />
    <Counter />
  </div>
}

export default App
