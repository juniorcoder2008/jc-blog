import React from 'react';
import Header from './Header'
import PostList from './PostList';

// Import Sass
import './sass/_template.sass';

const App = () => {
  return (
    <div>
      <Header />
      <PostList />
    </div>
  )
}

export default App;