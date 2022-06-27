import React from 'react';
import { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { deleteMissedConnection, getMissedConnectionById, updateMissedConnection } from '../services/fetch-utils';

export default function UpdatePage() {
  const { push } = useHistory();
  const { id } = useParams();
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');

  //onload fetch this missedConnection 
  useEffect(()=> {
    async function doFetch() {
      const missedConnection = await getMissedConnectionById(id);

      setTitle(missedConnection.title);
      setMessage(missedConnection.message);
    }
    doFetch();
  }, [id]);


  async function handleDeleteMissedConnection() {
    await deleteMissedConnection(id);

    push('/list');
  }

  async function handleSubmit(e){
    e.preventDefault();

    await updateMissedConnection({
      title: title,
      message: message,
    }, id);
    // console.log(missedConnection);
    setTitle('');
    setMessage('');
    
    push('/list');

  }

  return (
    <div>
      <h2>Update Your Missed Connection</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Title
          <input onChange={e => setTitle(e.target.value)} value={title}/>
        </label>
        <label>
          Message
          <input onChange={e => setMessage(e.target.value)} value={message}/>
        </label>
        <button>update this missed connection</button>
        <button onClick={handleDeleteMissedConnection} className="delete-button">delete this missed connection</button>
      </form>
    </div>
  );
}
