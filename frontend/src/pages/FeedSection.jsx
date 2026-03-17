import React, { useState } from 'react'

const FeedSection = () => {
  const [Post, setPost] = useState([
        {
            id: 1,
            image: 'https://images.unsplash.com/photo-1503803548695-c2a7b4a5b875?w=620&auto=format&fit=crop&q=60&ixlib=rb-4.1.0',
            caption: 'This is a sample caption for the post.'
        }
    ]);
    <section className='feed-section'>
      <div className='nav'>
        <h1>Feed</h1>
        <button>Back</button>
      </div>
        <div className='post-container'>
        {    Post.length > 0 ? (
                Post.map((post) => (
                    <div key={post.id} className='post'>
                        <img src={post.image} alt={`Post ${post.id}`} />
                        <p>{post.caption}</p>
                    </div>

                ))
            ) : (
                <p>No posts available.</p>
            )

        }
        </div>

    </section>
  
}

export default FeedSection
