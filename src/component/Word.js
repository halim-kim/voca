import React, { useState } from 'react';

export default function Word({ word }) {
    const [isShow, setIsShow] = useState(false);
    const [isDone, setIsDone] = useState(word.isDone);

    function handleShow() {
        setIsShow(!isShow);
    }

    function handleDone() {
      fetch(`http://localhost:3001/words/${word.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...word,
          isDone: !isDone,
        }),
      }).then(res => {
        if (res.ok) {
          setIsDone(!isDone);
        }
      });
    }

  return (
    <tr className={isDone ? "off" : ""}>
      <td>
        <input type="checkbox" checked={isDone} onChange={handleDone}/>
        
      </td>
      <td>{word.eng}</td>
      <td>{isShow && word.jap}</td>
      <td>
        <button onClick={handleShow}>意味を{isShow ? "隠す" : "確認"}</button>
        <button className="btn_del">削除</button>
      </td>
    </tr>
  );
}