import React, { Component } from 'react';


function PostHeader ({author, date}) {
    return (
        <div className="post-header">
          <img src={author.avatar}/>
          <div className="header-details">
            <strong>{author.name}</strong>
            <small>{date}</small>
          </div>
        </div>
    )
}

function PostComments ({comments}) {
  return(
    <div className="comments">
          <div className="divider" />
            <div className="post-comment">
              <img src='' alt=""/>
              <p><strong>Diego Fernandes</strong> A Rocketseat está sempre em busca de novos membros 
                para o time, e geralmente ficamos de olho em quem se destaca no Bootcamp, 
                inclusive 80% do nosso time de devs é composto por alunos do Bootcamp. 
                Além disso, se você tem vontade de ensinar gravando vídeos e criando posts, 
                pode me chamar no Discord! (Sério, me chamem mesmo, esse comentário é real) </p>
            </div>
    </div>
  )
}

function Post ({author, date, content, comments}) {
  return(
    <div className="post">
      <PostHeader author={author} date={date}/>
        <p className="post-text">Pessoal, alguem sabe se a Rocketseat está contratando?</p>
      <PostComments /> 
    </div>
 
  )
}
export default Post;