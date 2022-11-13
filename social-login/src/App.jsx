import "./app.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Post from "./pages/Post";
import Login from "./pages/Login";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUser = () => {
      fetch("http://localhost:5000/auth/login/success", {
        method: "GET",
        credentials: "include",
        headers: {
          Accept: "application/json",
          "Content-Type": "aplication/json",
          "Accesss-Control-Allow-Credentials": true,
        },
      })
        .then((res) => {
          if (res.status === 200) return res.json();
          throw new Error("Authentication has failed");
        })
        .then((resObject) => {
          setUser(resObject.user);
        })
        .catch((err) => console.log(err));
    };
    getUser();
  }, []);
  console.log(user);
  return (
    <BrowserRouter>
      <div className='App'>
        <Navbar user={user} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route
            path='/login'
            element={user ? <Navigate to='/' /> : <Login />}
          />
          <Route
            path='/post/:id'
            element={user ? <Post /> : <Navigate to='/login' />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
