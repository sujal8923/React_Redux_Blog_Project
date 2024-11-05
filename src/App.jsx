import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbars from "./Component/Navbars";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AllPosts from "./Pages/AllPosts";
import CreatePost from "./Pages/CreatePost";
import Edit from "./Pages/Edit";
import Preview from "./Pages/Preview";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Category from "./Component/Category";
// import 'react-toastify/dist/ReactToastify.css';

// import Layout from "./Layout/Layout";

function App() {
  return (
    <>
      <Navbars />
      
      <Routes>
        <Route path="/" element=<Login /> />
        <Route path="/register" element=<Register /> />
        <Route path="/allpost" element=<AllPosts /> />
        <Route path="/C_Product" element=<CreatePost /> />
        <Route path="/edit/:id" element=<Edit /> />
        <Route path="/preview/:id" element=<Preview /> />
      </Routes>
    </>
  );
}

export default App;
