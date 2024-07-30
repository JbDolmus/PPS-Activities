import React, { useState } from 'react';
import ReplyInput from './ReplyInput';
import user from '../img/usuario.svg';
import deleteIcon from '../img/icon-delete.svg';
import editIcon from '../img/icon-edit.svg';
import replyIcon from '../img/icon-reply.svg';
import minusIcon from '../img/icon-minus.svg';
import plusIcon from '../img/icon-plus.svg';

const Comment = ({ comment, addComment, currentUser }) => {
  const [showReply, setShowReply] = useState(false);

  const handleReply = (text) => {
    addComment(text, comment.id, comment.user.username);
    setShowReply(false);
  };

  return (
    <div className="comment-wrp">
      <div className="comment container">
        <div className="c-score">
          <img src={minusIcon} alt="plus" className="score-control score-plus" />
          <p className="score-number">{comment.score}</p>
          <img src={plusIcon} alt="minus" className="score-control score-minus" />
        </div>
        <div className="c-controls">
          {comment.user.username === currentUser.username && (
            <>
              <button className="delete"><img src={deleteIcon} alt="" className="control-icon" />Eliminar</button>
              <button className="edit"><img src={editIcon} alt="" className="control-icon" />Editar</button>
            </>
          )}
          <button className="reply" onClick={() => setShowReply(!showReply)}><img src={replyIcon} alt="" className="control-icon" />Responder</button>
        </div>
        <div className="c-user">
          <img src={user} alt="" className="usr-img" />
          <p className="usr-name">{comment.user.username}</p>
          <p className="cmnt-at">{comment.createdAt}</p>
        </div>
        <p className="c-text">
          {comment.replyingTo && <span className="reply-to">@{comment.replyingTo} </span>}
          <span className="c-body">{comment.content}</span>
        </p>
      </div>
      {showReply && <ReplyInput addComment={handleReply} />}
      <div className="replies comments-wrp">
        {comment.replies && comment.replies.map(reply => (
          <Comment key={reply.id} comment={reply} addComment={addComment} currentUser={currentUser} />
        ))}
      </div>
    </div>
  );
};

export default Comment;
