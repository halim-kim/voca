import useFetch from "../hooks/useFetch";
import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

export default function CreateWord() {
    const days = useFetch('http://localhost:3001/days');
    const navigate = useNavigate();

    const engRef = useRef(null);
    const japRef = useRef(null);
    const dayRef = useRef(null);

    function onSubmit(e) {
        e.preventDefault();

        fetch('http://localhost:3001/words', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                day: dayRef.current.value,
                eng: engRef.current.value,
                jap: japRef.current.value,
                isDone: false
            }),
        })
        .then(res => {
            if (res.ok) {
                alert("登録が完了しました");
                navigate(`/day/${dayRef.current.value}`);
            }
        });
    }

    return (
        <form onSubmit={onSubmit}>
            <div className="input_area">
                <label>Day</label>
                <select ref={dayRef}>
                    {days && days.map(day => (  // daysが存在する場合のみマップを実行
                        <option key={day.id} value={day.day}>
                            {day.day}
                        </option>
                    ))}
                </select>
            </div>
            <div className="input_area">
                <label>Eng</label>
                <input type="text" placeholder="computer" ref={engRef} />
            </div>
            <div className="input_area">
                <label>Jap</label>
                <input type="text" placeholder="パソコン" ref={japRef} />
            </div>
            <button type="submit">저장</button>
        </form>
    );
}
