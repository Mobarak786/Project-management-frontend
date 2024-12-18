import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Portfolio from './Pages/Portfolio/Portfolio'
import Dashboard from './Pages/Dashboard'
import Inputs from './Pages/Inputs'
import Profile from './Pages/Profile'
import Shared from './Pages/Portfolio/Components/Shared'
import Saved from './Pages/Portfolio/Components/Saved'
import Achievements from './Pages/Portfolio/Components/Achievements'
import { Provider } from 'react-redux'
import { store } from './redux/store'

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Portfolio />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/inputs" element={<Inputs />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/portfolio/saved" element={<Saved />} />
          <Route path="/portfolio/shared" element={<Shared />} />
          <Route path="/portfolio/achivements" element={<Achievements />} />
        </Routes>
      </Router>
    </Provider>
  )
}

export default App
