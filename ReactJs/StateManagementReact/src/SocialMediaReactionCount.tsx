import { useState } from "react";

export default function SocialMediaReactionCounter() {
    const [totalReact, updateReaction] = useState(0);
    const [love, updateLove] = useState(0);
    const [like, updateLike] = useState(0);
    const [sad, updateSad] = useState(0);

    const reactionHandle = (reactType: string) => {
        if (reactType === "Love") {
            updateReaction(totalReact + 1);
            updateLove(love + 1);
        } else if (reactType === "Sad") {
            updateReaction(totalReact + 1);
            updateSad(sad + 1)
        }else if(reactType === "Like"){
            updateReaction(totalReact + 1);
            updateLike(like + 1)
        }
    }

    const reactionCount = {
            love: love,
            like: like,
            sad: sad,
            totalReact: totalReact
        }



    console.log(reactionCount);

    return (
        <div>
            <p>Love: {love}</p>
            <p>Like: {like}</p>
            <p>Sad: {sad}</p>
            <button onClick={() => reactionHandle("Love")}>Love</button>
            <button onClick={() => reactionHandle("Sad")}>Sad</button>
            <button onClick={() => reactionHandle("Like")}>Like</button>
        </div>


    )
}