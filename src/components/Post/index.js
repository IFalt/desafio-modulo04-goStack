import React, { Component } from 'react';

function PostHeader ({author, date}) {
    return (
        <div className="post-header">
          <img src={author.avatar}/>
          <div className="header-details">
            <span>{author.name}</span>
            <span>{date}</span>
          </div>
        </div>
    )
}

function PostComments ({comments}) {
  return(
    <div className="comments">
          <div className="divider" />
          {comments.map(comment => (
            <div key={comment.id}className="post-comment">
              <img src={comment.author.avatar} alt={comment.name}/>
              <p><strong>{comment.author.name}</strong> {comment.content} </p>
            </div>
          ))}
    </div>
  )
}

function Post ({author, date, content, comments}) {
  return(
    <div className="post">
      <PostHeader author={author} date={date}/>
        <p className="post-text">{content}</p>
      <PostComments comments={comments}/> 
    </div>
 
  )
}
export default Post;