import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./Pages/Home"
import Navbar from "./Components/Navbar"
import AddStudent from "./Pages/AddStudent"
import DisplayStudent from "./Pages/DisplayStudent"
import NotFound from "./Pages/NotFound"
import EditStudent from "./Pages/EditStudent"

const App = () => {
  return (
    <div>
        <BrowserRouter >
        <Navbar />
            <Routes >
                <Route path='/' element={<Home/>}></Route>
                <Route path='/add' element={<AddStudent/>}></Route>
                <Route path='/students' element={<DisplayStudent/>}></Route>
                <Route path="*" element={<NotFound/>}></Route>
                <Route path="/editStudent/:id" element={<EditStudent/>}></Route>
                
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App