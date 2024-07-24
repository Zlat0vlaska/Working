import React, { useState } from 'react';
import Header from '../Components/Header';
import MyButton from '../Components/UI/button/MyButton';
import { useForm } from 'react-hook-form';
import MyInput from '../Components/UI/input/MyInput';


const Home = function () {
  const [likes, setLikes] = useState(0);
  
  function increment() {
    setLikes((prev) => { return prev + 1 });
  }

  function decrement() {
    setLikes((prev) => { return prev - 1 });
  }

  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
        
    }
  })

  const submit = data => {
    console.log(data)
  }

  const error = data => {
    console.log('error')
  }

  const isAge = age => {
    return ( age ? true : false);
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

      <div>  
      <form style={{marginTop: 10}} onSubmit={handleSubmit(submit, error)}>
          <MyInput placeholder='Ваше имя' type='string' {...register('name', { required: true })} />
          <MyInput placeholder='Ваш возраст' type='number' {...register('age', { required: true, validate: isAge })} />
          <MyButton>Отправить</MyButton>
          <MyButton type='button'onClick={() => reset({name: '', age: null})}>
            Очистить форму</MyButton>
        </form>
      </div>

    </div>

  );
};

export default Home;