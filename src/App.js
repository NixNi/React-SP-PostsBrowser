import React, { useState } from "react";
import PostList from "./components/PostList";
import './styles/App.css'


function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'Javascript', body: 'Javascript - современный язык программирования.' },
    { id: 2, title: 'Javascript', body: 'Javascript - современный язык программирования.' },
    { id: 3, title: 'Javascript', body: 'Javascript - современный язык программирования.' }
  ])
  return (
    <div className="App">
      <form>
        <input type="text" placeholder="Заголовок" />
        <input type="text" placeholder="Содержание" />
        <button>Создать пост</button>
      </form>
      <PostList posts={posts} title="Список постов" />
    </div>
  );
}

export default App;
