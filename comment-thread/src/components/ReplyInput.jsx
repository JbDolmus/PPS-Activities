import React, { useState } from 'react';
import user from '../img/usuario.svg';

const ReplyInput = ({ addComment }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      addComment(text);
      setText('');
    }
  };

  return (
    <div className="reply-input container">
      <img src={user} alt="" className="usr-img" />
      <textarea className="cmnt-input" placeholder="Agrega un comentario" value={text} onChange={(e) => setText(e.target.value)} />
      <button className="bu-primary" onClick={handleSubmit}>Enviar</button>
    </div>
  );
};

export default ReplyInput;
