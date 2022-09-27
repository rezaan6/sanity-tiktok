import React, { useState, useEffect } from "react";
import { MdFavorite } from "react-icons/md";

import useAuthstore from "../store/authStore";

interface IProps{
    handleLike: ()=>void,
    handleDislike:()=>void,
}

const LikeButton = ({handleDislike, handleLike}:IProps) => {
  const [alreadyliked, setAlreadyliked] = useState(false);
  const { userProfile } = useAuthstore();


  return (
<div className="gap-6">
    <div className="mt-4 flex flex-col cursor-pointer items-center justify-center">
        {alreadyliked ? (
            <div className="bg-primary rounded-full p-2 md:p-4 text-[#F51997]">
                <MdFavorite className="text-lg md:text-2xl" onClick={handleDislike}/>
            </div>
        ):(
            <div className="bg-primary rounded-full p-2 md:p-4">
            <MdFavorite className="text-lg md:text-2xl" onClick={handleLike}/>
        </div>
        )}

        <p className="text-base font-semibold">likes</p>
    </div>
</div>
  );
};

export default LikeButton;


