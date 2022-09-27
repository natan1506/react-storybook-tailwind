import { Card } from './components/Card'
import { ListCard } from './components/ListCard'
import { Login } from './pages/Login'
import { Header } from './components/Header'
import './styles/main.css'
import { Button } from './components/Button'

const data = [
  {
    id: 1,
    title: 'UX: entenda a experiencia de usuario',
    subtitle: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam ...'
  },
  {
    id: 2,
    title: 'Exemplo 2',
    subtitle: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam ...'
  },
  {
    id: 3,
    title: 'Exemplo 3',
    subtitle: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam ...'
  },
]

function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      <ListCard data={data} />
      {/* <Login /> */}
      <Button 
        size='lg'
        label='Button'
      />
      <Button 
        size='sm'
        label='Button'
      />
    </div>
  )
}

export default App
