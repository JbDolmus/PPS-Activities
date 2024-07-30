import React from 'react';
import Comment from './Comment';
import ReplyInput from './ReplyInput';
import { useComment } from '../hooks/useComment';

const CommentSection = ({ comments, setComments, currentUser }) => {
  const { insertComment } = useComment();

  const addComment = (text, parentId = 0) => {
    const newComment = {
      id: Date.now(),
      content: text,
      createdAt: new Date().toLocaleString(),
      score: 0,
      user: currentUser,
      replies: [],
    };

    if (parentId === 0) {
      setComments([...comments, newComment]);
    } else {
      const updatedComments = comments.map(comment => {
        return insertComment(comment, parentId, text);
      });
      setComments(updatedComments);
    }
  };

  return (
    <div className="comment-section">
      {comments.map(comment => (
        <Comment key={comment.id} comment={comment} addComment={addComment} currentUser={currentUser} />
      ))}
      <ReplyInput addComment={addComment} />
    </div>
  );
};

export default CommentSection;
