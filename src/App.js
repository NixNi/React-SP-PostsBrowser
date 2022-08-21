import React, { useState } from "react";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import './styles/App.css'


function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'Javascript', body: 'Javascript - современный язык программирования.' },
    { id: 2, title: 'Javascript', body: 'Javascript - современный язык программирования.' },
    { id: 3, title: 'Javascript', body: 'Javascript - современный язык программирования.' }
  ])

  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  const addNewPost = (e) => {
    e.preventDefault()
    const newPost = {
      id: Date.now(),
      title,
      body
    }
    setPosts([...posts, newPost])
  }
  return (
    <div className="App">
      <form>
        <MyInput
          value={title}
          type="text"
          placeholder="Заголовок"
          onChange={e => setTitle(e.target.value)}
        />
        <MyInput
          value={body}
          type="text"
          placeholder="Содержание"
          onChange={e => setBody(e.target.value)}
        />
        <MyButton onClick={addNewPost}>Создать пост</MyButton>
      </form>
      <PostList posts={posts} title="Список постов" />
    </div>
  );
}

export default App;
