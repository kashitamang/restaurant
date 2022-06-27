import React from 'react';
import { useState } from 'react';
import { createConnection } from '../services/fetch-utils';
import { useHistory } from 'react-router-dom';

export default function CreatePage() {
  const { push } = useHistory();
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');

  async function handleSubmit(e){
    e.preventDefault();

    await createConnection({
      title: title,
      message: message,
    });
    // console.log(missedConnection);
    setTitle('');
    setMessage('');
    
    push('/list');

  }


  return (
    <div>
      <h2>Add Missed Connection</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Title
          <input onChange={e => setTitle(e.target.value)} value={title}/>
        </label>
        <label>
          Message
          <input onChange={e => setMessage(e.target.value)} value={message}/>
        </label>
        <button>submit</button>
      </form>
    </div>
  );
}



// #"Create" page#
// Make a form with a title, author, value, onChange, etc
// Make a submit handler and log out the title and author just to confirm we can access form values
// Make a createBook function in fetch-utils. it takes in a book object: { title, author }
// in our submit handler, call create book, clear out the form, redirect the user to the books page