import {Switch, Route, BrowserRouter, Redirect} from 'react-router-dom'

import Login from './components/Login'
import ProtectedRoute from './components/ProtectedRoute'
import Home from './components/Home'
import './App.css'

const App = () => (
  <Switch>
    <Route exact path="/login" component={Login} />
    <ProtectedRoute exact path="/" component={Home} />
    {/* <ProtectedRoute exact path="/products" component={Products} />
    <ProtectedRoute exact path="/products/:id" component={ProductItemDetails} />
    <ProtectedRoute exact path="/cart" component={Cart} /> */}
    {/* <Route path="/not-found" component={NotFound} />
    <Redirect to="not-found" /> */}
  </Switch>
)

export default App
