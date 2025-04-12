import { useState, useEffect } from "react";
import love from '../images/love.png'
import like from '../images/like.png'
const Reactions = ({ id }) => {
  const [selectedReaction, setSelectedReaction] = useState(null);
  const [reactions, setReactions] = useState({
    love: 362,
    like: 124,
  });

  useEffect(() => {
    // Load saved reactions for the specific story
    const savedReaction = localStorage.getItem(`userReaction_${id}`);
    const savedCounts = localStorage.getItem(`reactionCounts_${id}`);

    if (savedReaction) {
      setSelectedReaction(savedReaction);
    }

    if (savedCounts) {
      setReactions(JSON.parse(savedCounts));
    }
  }, [id]);

  const handleReaction = (type) => {
    let updatedReactions = { ...reactions };

    if (selectedReaction === type) {
      updatedReactions[type] -= 1;
      setSelectedReaction(null);
      localStorage.removeItem(`userReaction_${id}`);
    } else {
      if (selectedReaction) {
        updatedReactions[selectedReaction] -= 1;
      }
      updatedReactions[type] += 1;
      setSelectedReaction(type);
      localStorage.setItem(`userReaction_${id}`, type);
    }

    setReactions(updatedReactions);
    localStorage.setItem(`reactionCounts_${id}`, JSON.stringify(updatedReactions));
  };

  return (
      <div className="buttons" style={{width: '80%', margin: 'auto', zIndex: '999'}}>
        <button  style={{margin: '0', padding: '0'}}
          onClick={() => handleReaction("love")}
          className={`love ${selectedReaction === "love" ? "active" : ""}`}
        >
          <img src={love} ></img> {reactions.love}
        </button>
        <button  style={{margin: '0', padding: '0'}}
          onClick={() => handleReaction("like")}
          className={`like ${selectedReaction === "like" ? "active" : ""}`}
        >
          <img src={like} ></img> {reactions.like}
        </button>
      </div>
  );
};

export default Reactions;
