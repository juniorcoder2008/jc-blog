import React, { useState } from 'react';

import './sass/Post.sass';

const Post = ({title, date, text, shortenText}) => {

  const [readMore, setReadMore] = useState(false);

  return (
    <div className='post'>
      <h1 className='heading'>{title}</h1>
      <p className='date'>{date}</p>
      <p className="text">{readMore ? text : shortenText}</p>

      <p className="readMore" onClick={() => setReadMore(!readMore)}>{readMore ? 'Weniger anzeigen' : 'Mehr anzeigen'}</p>
    </div>
  )
}

export default Post;