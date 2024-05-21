// import dummy from '../db/data.json';
import { useParams } from 'react-router-dom';
import Word from './Word';
// import { useEffect, useState } from 'react';
import useFetch from '../hooks/useFetch';

export default function Day() {
  const { day } = useParams(); 
  const dayInt = parseInt(day, 10); 
//   const wordList = dummy.words.filter(word => word.day === dayInt);
//   const [words, setWords] = useState([]);

//   useEffect(() => {
//     fetch(`http://localhost:3001/words?day=${day}`)
//     .then(res => {
//         return res.json();
//     })
//     .then(data => {
//         setWords(data);
//     });
    
// }, [day]); 

const words = useFetch(`http://localhost:3001/words?day=${day}`);

  return (
    <>
      <h2>Day {dayInt}</h2>
      <table>
        <tbody>
          {words.map(word => (
            <Word word={word} key={word.id}/>
          ))}
        </tbody>
      </table>
    </>
  )
}