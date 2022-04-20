import React from "react";
import SongCard from "../SongCard";

const PlayList = ({ data }) => {
    return (
      <div className='list-container'>
        {data.map((list) => (
          <SongCard key={list.id} data={list} />
        ))}
      </div>
    );
  };
  
  export default PlayList;