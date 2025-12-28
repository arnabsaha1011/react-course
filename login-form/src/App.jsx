import { Login } from './components/Login'
import { Time } from './components/Time'
import { Clicker } from './components/Clicker'
import './App.css'

function App() {
  return (
    <div
      className="app-container">
      <Login />
      <Time />
      <Clicker />
    </div>
  );
}

export default App
