import React, { useState } from 'react';
import Header from '../Components/Header';
import MyButton from './UI/button/MyButton';

const Likes = function () {
  const [likes, setLikes] = useState(0);

  function increment() {
    setLikes((prev) => { return prev + 1 });
  }

  function decrement() {
    setLikes((prev) => { return prev - 1 });
  }


  return (
    <div>
      <div className='.Header'>
        <Header />
      </div>

      {likes < 0
        ? <h1 style={{ color: "red" }}>{likes}</h1>
        : <h1>{likes}</h1>
      }
      <MyButton onClick={increment}>Like</MyButton>
      <MyButton onClick={decrement}>Dislike</MyButton>
    </div>

  );
};

export default Likes;