import './App.css'
import { HashRouter, Routes, Route } from 'react-router-dom'
import {Home, Login, ProductDetails, Chart, Purchases, SingUp} from "./pages"
import { NavBar, LoadingScreen, Footer, ProtectedRoutes} from './components'
import {useSelector} from "react-redux"



function App() {
  
const isLoading = useSelector(state => state.isLoading)


  return (
   
   <div className="App">
     
    <HashRouter>
    <NavBar />
    { isLoading && <LoadingScreen />}
    <Routes>
     
      <Route path='/' element={<Home />}/>
      <Route path='/login' element={<Login />} />
      <Route path='/singup' element={<SingUp />} />
      <Route path='/products/:id' element={<ProductDetails/>} />
     
     
     <Route element={<ProtectedRoutes />}>

      <Route path='/purchases' element={<Purchases />} />
     </Route>
     

    </Routes>
    
    <Footer />

    </HashRouter>


    </div>
  )
}

export default App
