import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navbar from './modules/share/navbar.js';
import Footer from './modules/share/footer.js';
import Blogs from './modules/blog/blogs.js';

export default function App() {
  return (
    <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/blogs">
            <Blogs />
          </Route>
          <Route path="/categories">
            <Categories />
          </Route>
        </Switch>
        <Footer />
    </Router>
  );
}


function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function Categories() {
  return (
    <div>
      <h2>Categories</h2>
    </div>
  );
}
