import React from 'react';
import Post from './Post';

import './sass/PostList.sass';

const PostList = () => {

  const PostArray = [
    {
      title: 'Eine ganz lange Überschrift',
      date: '10.10.2022',
      text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam, similique ab. Perferendis sequi, recusandae minus qui deserunt suscipit quia explicabo mollitia non architecto in exercitationem, eaque quis consectetur ut harum maxime eius. Dolorem eos dicta non facilis debitis aliquam omnis error? Ab odit iste enim, distinctio voluptates eveniet repellendus quod qui minus nam cupiditate quos quisquam cumque reiciendis asperiores sint et esse voluptas aperiam doloribus unde harum nesciunt quas! Voluptatibus, at deleniti ea aut, eligendi fugiat dolorem eveniet dolores laboriosam odit ut consequuntur accusamus tenetur dolore ratione tempora ab explicabo voluptates nobis. Reiciendis dolore eveniet qui aspernatur, dignissimos distinctio fugit at. Beatae repellat quibusdam magnam omnis at aliquid dicta officia esse rem! Laborum hic ut minus. Earum error nobis possimus dolores suscipit quam alias est omnis odit totam quae, ipsum dolore quod iure, vel atque obcaecati sapiente voluptates molestiae ea quidem. Praesentium dolorum voluptates, velit corporis assumenda enim suscipit non. Quae, quaerat. Id sunt similique, aut quasi quaerat maiores tempora porro magnam quis natus, soluta corrupti temporibus incidunt odit veritatis esse quo eius! Animi ea beatae ex? Tempora sapiente repellendus ab quaerat necessitatibus aperiam iste architecto, delectus ratione id ducimus libero magnam odit quod exercitationem vel dicta temporibus laboriosam inventore.',
    },
    {
      title: 'Eine ganz lange Überschrift',
      date: '10.10.2022',
      text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam, similique ab. Perferendis sequi, recusandae minus qui deserunt suscipit quia explicabo mollitia non architecto in exercitationem, eaque quis consectetur ut harum maxime eius. Dolorem eos dicta non facilis debitis aliquam omnis error? Ab odit iste enim, distinctio voluptates eveniet repellendus quod qui minus nam cupiditate quos quisquam cumque reiciendis asperiores sint et esse voluptas aperiam doloribus unde harum nesciunt quas! Voluptatibus, at deleniti ea aut, eligendi fugiat dolorem eveniet dolores laboriosam odit ut consequuntur accusamus tenetur dolore ratione tempora ab explicabo voluptates nobis. Reiciendis dolore eveniet qui aspernatur, dignissimos distinctio fugit at. Beatae repellat quibusdam magnam omnis at aliquid dicta officia esse rem! Laborum hic ut minus. Earum error nobis possimus dolores suscipit quam alias est omnis odit totam quae, ipsum dolore quod iure, vel atque obcaecati sapiente voluptates molestiae ea quidem. Praesentium dolorum voluptates, velit corporis assumenda enim suscipit non. Quae, quaerat. Id sunt similique, aut quasi quaerat maiores tempora porro magnam quis natus, soluta corrupti temporibus incidunt odit veritatis esse quo eius! Animi ea beatae ex? Tempora sapiente repellendus ab quaerat necessitatibus aperiam iste architecto, delectus ratione id ducimus libero magnam odit quod exercitationem vel dicta temporibus laboriosam inventore.',
    }
  ]

  return (
    <div className='post-list'>
      {PostArray.map(post => {
        return <Post title={post.title} date={post.date} text={post.text} shortenText={post.text.slice(0,300)} />
      })}
    </div>
  )
}

export default PostList;