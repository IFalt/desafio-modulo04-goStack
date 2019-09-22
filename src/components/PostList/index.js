import React, { Component } from 'react';
import Post from '../Post/index'

class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: 'Julio Alcantara',
          avatar: 'https://avatars2.githubusercontent.com/u/2254731?v=4'
        },
        date: '04 Jun 2019',
        content: 'Pessoal, alguém sabe se a Rocketseat está contratando?',
        comments: [
          {
            id: 1,
            author: {
              name: 'Diego Fernandes',
              avatar: 'https://avatars2.githubusercontent.com/u/2254731?v=4'
            },
            content: "Conteúdo do comentário"
          }
        ],
      },
    ]
  };

  render() {
    const {posts} = this.state;
    return (
      <section>
        {posts.map(post => (
          <Post key={post.id}{...post}/>
        ))}   
      </section>
    )
  }
}

export default PostList;
