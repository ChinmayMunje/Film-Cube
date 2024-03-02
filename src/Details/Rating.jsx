import React from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import "react-circular-progressbar/dist/styles.css";

const Rating = ({ rating }) => {
  return (
    <div className="bg-black rounded-full p-2 w-[60px] h-[60px]">
    <div className="text-black text-2xl font-bold">
      <CircularProgressbar value={rating} text={rating} maxValue={10}   styles={buildStyles({
        textSize: "30px",
        textColor: "#ffff",
        pathColor:
          rating < 5 ? "red" : rating < 7 ? "orange" : "green",
      })} />
    </div>
</div>

    
  )
}

export default Rating