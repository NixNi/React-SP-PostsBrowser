import React, { useMemo, useState } from "react";
import PostFilter from "./components/PostFilter";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";

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
  const [filter, setFilter] = useState({sort:'', query:''});

  const sortedPosts = useMemo(()=> {
    console.log('qqqq')
    if (filter.sort) {
      return [...posts].sort((a, b)=> a[filter.sort].localeCompare(b[filter.sort]))
    }
    return posts
  }, [filter.sort, posts])

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query.toLocaleLowerCase()))
  },[filter.query, sortedPosts])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }


  return (
    <div className="App">
      <PostForm create={createPost} />
      <hr style={{ margin: '15px 0' }}/>
      <PostFilter filter={filter} setFilter={setFilter} />
      <PostList remove={removePost} posts={sortedAndSearchedPosts} title="Список постов" /> 
    </div>
  );
}

export default App;
