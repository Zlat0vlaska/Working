import React from 'react';
import './styles/App.css';

import { Routes, Route} from 'react-router-dom';
import Layout from './Components/Layout';
import Home from './pages/Home';
import UserPage from './pages/UserPage';
import Blog from "./pages/Blog";
import PostIdPage from './pages/PostIdPage';
function App() {

  return (
    <div className="App">
      <div className='.Header'>


      <Routes>
          <Route path="/" element={<Layout />} >
            <Route index element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<PostIdPage />} />
            <Route path="/users" element={<UserPage />} />
          </Route>

        </Routes>

      </div>
    </div>
  );
}

export default App;
