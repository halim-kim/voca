import dummy from '../db/data.json';

export default function Day() {
const day = 3;
const wordList = dummy.words.filter(word => word.day === day);
console.log(wordList);

    return (
    <>
    <table>
        <tbody>
            {wordList.map(word => (
                <tr key={word.id}>
                    <td>{word.eng}</td>
                    <td>{word.jap}</td>
                </tr>
            ))}

        </tbody>  
    </table>
    </>
    )
}