import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import useFetch from '../hooks/useFetch';

export default function DayList() {
    const days = useFetch('http://localhost:3001/days');

    // const [days, setDays] = useState([]);
    // // const [count, setCount] = useState(0);

    // // function onClick() {
    // //     setCount(count + 1);
    // // }

    // // function onClick2() {
    // //     setDays([
    // //         ...days,
    // //         { id: Math.random(), day: 1 },
    // //     ])
    // // }

    // useEffect(() => {
    //     fetch('http://localhost:3001/days')
    //     .then(res => {
    //         return res.json();
    //     })
    //     .then(data => {
    //         setDays(data);
    //     });

    // }, []); // count 값이 변경될 때만 실행, 빈배열이면 처음 한번만 실행
    

  return (
    // <>
        <ul className="list_day">
        {days.map(day => (
            <li key={day.id}>
            <Link to={`/day/${day.day}`}>Day {day.day}</Link> 
            </li>
        ))}
        </ul>
    //     <button onClick={onClick}>{count}</button>
    //     <button onClick={onClick2}>Day Change</button>
    // </>
  );
}