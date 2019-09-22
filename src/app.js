import React from 'react'

import './styles/styles.css'
import Header from './components/Header';
import PostList from './components/PostList';

function App() {
  return (
    <div className="container">
      <Header />
      <PostList />
    </div>
  );
}

export default App;