import dummy from '../db/data.json';
import { useParams } from 'react-router-dom';
import Word from './Word';

export default function Day() {
  const { day } = useParams(); 
  const dayInt = parseInt(day, 10); 
  const wordList = dummy.words.filter(word => word.day === dayInt);

  return (
    <>
      <h2>Day {dayInt}</h2>
      <table>
        <tbody>
          {wordList.map(word => (
            <Word word={word} key={word.id}/>
          ))}
        </tbody>
      </table>
    </>
  )
}