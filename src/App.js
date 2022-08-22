import React, { useState } from "react";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import MySelect from "./components/UI/select/MySelect";
import './styles/App.css'


function App() {

  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "Javascript",
      body: "Javascript - современный язык программирования.",
    },
    {
      id: 2,
      title: "Python",
      body: "Python - современный язык программирования.",
    },
    {
      id: 3,
      title: "C++",
      body: "C++ - старый язык программирования.",
    },
  ]);
  const [selectedSort, setSelectedSort] = useState('');
  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  const sortPosts = (sort) => {
    setSelectedSort(sort)
    setPosts([...posts].sort((a, b)=> a[sort].localeCompare(b[sort])))
  }

  return (
    <div className="App">
      <PostForm create={createPost} />
      <hr style={{ margin: '15px 0' }}/>
      <div>
        <MySelect
          value={selectedSort}
          onChange={sortPosts}
          defaultValue='Сортировка'
          options={[
            { value: 'title', name: 'По заголовку' },
            { value: 'body', name: 'По описанию' }
          ]}
        />
      </div>
      {posts.length !== 0
        ? <PostList remove={removePost} posts={posts} title="Список постов" /> 
        : <h1 style={{textAlign:'center'}}>Посты не найдены</h1>
      }
      
    </div>
  );
}

export default App;
