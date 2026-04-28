import { useState } from "react";
import { FaCrown } from "react-icons/fa"; 

function TalkingCharacter({ image, streak, variant="normal"}) {
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
      <div className={`character-scale character-${variant}`}>
      <img
        src={image}
        className="mouse_image floating-character" 
    />
    </div>

      {streak >= 1 && <span className="sparkle sparkle-one">✨</span>}
      {streak >= 3 && <span className="sparkle sparkle-two">✨</span>}
      {streak >= 6 && (<FaCrown className="sparkle-icon crown" />)}      
      </div>
  );
}
 

export default TalkingCharacter;