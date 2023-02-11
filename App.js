import './App.css';

import React, { Component } from 'react';
import Navbar from './component/Navbar';
import News from './component/News';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div style={{ backgroundColor: '#f5ca00' }}>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<News country='in' category='' pagesize={12} />} />
            <Route exact path="/Business" element={<News key='Business' country='in' category='Business' pagesize={12} />} />
            <Route exact path="/Sports" element={<News key='Sports' country='in' category='Sports' pagesize={12} />
            } />
            <Route exact path="/Tech" element={<News key='technology' country='in' category='technology' pagesize={12} />
            } />
            <Route exact path="Entertainment" element={<News key='Entertainment' country='in' category='Entertainment' pagesize={12} />
            } />
            <Route exact path="/Health" element={<News key='Health' country='in' category='Health' pagesize={12} />
            } />
            <Route exact path="/Science" element={<News key='Science' country='in' category='science' pagesize={12} />
            } />
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
