'use client'
import React, { useCallback } from 'react';
import { useEffect, useState } from 'react';

const Clock = ({timeZone = "Asia/Kolkata"})=> {

const date = new Date()
const [hours, setHours] = useState(date.getHours());
const [minutes, setMins] = useState(date.getMinutes());
const [seconds, setSeconds] = useState(date.getSeconds());
const [pause, setPause] = useState(false);


useEffect(() => {
  const date = new Date(new Date().toLocaleString('en-US', {timeZone: timeZone || "Asia/Kolkata"}))
  setHours(date.getHours())
  setMins(date.getMinutes())
  setSeconds(date.getSeconds())

}, [timeZone]);


useEffect(() => {
  const interval = setInterval(() => {
    if(!pause) { //I used '!paused' because I set pause initially to false. 
      if (seconds >= 0) {
        setSeconds(seconds + 1);
      }
      if (seconds === 59 ){
       setSeconds(0)
       setMins(minutes + 1)
      }
      if (seconds === 59 && minutes === 59 ){
        setSeconds(0)
        setMins(0)
       setHours(hours + 1)
      }

    }
  }, 1000);
  return () => clearInterval(interval);
});

const handlePauseToggle = useCallback(()=>{
  setPause(!pause);
})


    return (
        <div className='flex justify-end items-center gap-2'>
          <div className='w-[90px] font-semibold py-1 px-3 pl-[20px] border-[1px] border-white rounded-xl text-white text-[12px] bg-blue-600 hover:bg-white hover:text-blue-700'>
          {String(hours).padStart(2, "0") + ':' + String(minutes).padStart(2, "0") + ':' + String(seconds).padStart(2, "0")}{' '}
          </div>
          <button className="rounded-xl w-[75px] bg-blue-600 text-white border-[1px] text-[12px] p-1 hover:bg-white hover:text-blue-700" onClick={handlePauseToggle}>{pause ? "Start" : "Pause"}</button>
        </div>
        
    );
}

export default Clock;