import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getData } from '../redux/reducer/messages';

const Messages = () => {
  const dispatch = useDispatch();
  const globalState = useSelector((state) => state.messagesReducer);
  const [message, setMessage] = useState('Alo');

  useEffect(() => {
    dispatch(getData());
  }, []);

  const shuffleMessage = () => {
    const rand = Math.floor(Math.random() * globalState.length);
    setMessage(globalState[rand].message);
  };

  return (
    <div>
      <h1>{message}</h1>
      <button onClick={shuffleMessage} type="button">Change the language</button>
    </div>
  );
};

export default Messages;
