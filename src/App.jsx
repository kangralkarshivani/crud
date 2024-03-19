import React from "react";
import { BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import Post from "./components/Post";
import Read from "./components/Read";
import Update from "./components/Update"


const App = () => {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Post />} />
          <Route path='/read' element={<Read />}/>
          <Route path='/edit/:id' element={<Update />}/>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
