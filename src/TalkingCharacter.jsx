import { useState } from "react";
import { FaCrown } from "react-icons/fa"; 

function TalkingCharacter({ image, streak}) {
  let effectClass = "effect-default";

  if (streak >= 6) {
    effectClass = "effect-6";
  } else if (streak >= 3) {
    effectClass = "effect-3";
  } else if (streak >= 1) {
    effectClass = "effect-1";
  }

  return (
    <div className={`talking-character ${effectClass}`}>
      <img
        src={image}
        className="mouse_image floating-character" 
    />
      {streak >= 1 && <span className="sparkle sparkle-one">✨</span>}
      {streak >= 3 && <span className="sparkle sparkle-two">✨</span>}
      {streak >= 6 && (<FaCrown className="sparkle-icon crown" />)}      
      </div>
  );
}
 

export default TalkingCharacter;