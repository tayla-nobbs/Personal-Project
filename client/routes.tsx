import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'

import App from './components/App'
import Landing from './components/Landing'
import Visual from './components/Visual'

export const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Landing />}></Route>
      <Route path="/play" element={<Visual />}></Route>
    </Route>
  )
)
