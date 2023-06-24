// Make it so that clicking on the picture removes the background--active CSS class from the outer <div>, but adds the picture--active class to the <img>. Clicking the background again should restore the original CSS classes.

// Visually, you should expect that clicking on the picture removes the purple background and highlights the picture border. Clicking outside the picture highlights the background, but removes the picture border highlight.

import { useState } from 'react';
export default function Picture() {
  const [picSelect, setPicSelect] = useState(false)
  
  function handlePicClick(){
    setPicSelect(true)
  }

  function backSelect(){
    setPicSelect(false)  
  }
  
  if(picSelect){
  return (
    <div onClick={backSelect} className="background">
      <img
        id='img'
        className="picture picture--active"
        alt="Rainbow houses in Kampung Pelangi, Indonesia"
        src="https://i.imgur.com/5qwVYb1.jpeg"
        onClick={handlePicClick}
      />
    </div>
  );
}else{
return (
    <div className="background background--active">
      <img
        id='img'
        className="picture"
        alt="Rainbow houses in Kampung Pelangi, Indonesia"
        src="https://i.imgur.com/5qwVYb1.jpeg"
        onClick={handlePicClick}
      />
    </div>
  );
    
}
}

