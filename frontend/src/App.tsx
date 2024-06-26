
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Signin } from './pages/SignIn'
import { Signup } from './pages/SignUp'
import { Blogs } from './pages/Blogs'
import { Blog } from './pages/Blog'
import { Publish } from './pages/Publish'
// import { EditBlog } from './pages/EditBlog'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/signin' element={<Signin />}></Route>
          <Route path='/' element={<Signin />}></Route>
          <Route path='/signup' element={<Signup />}></Route>
          <Route path='/blog/:id' element={<Blog />}></Route>
          <Route path='/blogs' element={<Blogs />}></Route>
          <Route path='/publish' element={<Publish />}></Route>
          {/* <Route path='/edit/:id' element={<EditBlog />}></Route> */}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
