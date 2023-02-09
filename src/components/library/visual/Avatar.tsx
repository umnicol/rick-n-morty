import React from 'react';

interface AvatarProps {
  image?: string;
  greyscale: boolean;

}

export default function Avatar({
   image= "./src/assets/rick1.png",
   greyscale,
  }: AvatarProps)

  {
return (
<div className='avatarComponent'>
<img src={image}/>

</div>
)
  }
