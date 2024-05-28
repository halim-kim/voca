import useFetch from "../hooks/useFetch";
import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

export default function CreateDay() {
    const days = useFetch('http://localhost:3001/days');
    const navigate = useNavigate();
    const nameRef = useRef(null);

    function addDay(event) {
        event.preventDefault();
        fetch('http://localhost:3001/days', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                day: days.length + 1,
                name: nameRef.current.value  // 追加
            }),
        })
        .then(res => {
            if (res.ok) {
                alert("登録が完了しました");
                navigate(`/`);
            } else {
                alert("エラーが発生しました。");
            }
        })
        .catch(error => {
            console.error("エラー:", error);
            alert("エラーが発生しました。");
        });
    }

    return (
        <div>
            <h3>Day 追加</h3>
            <form onSubmit={addDay}>
                <div className="input_area">
                    <label>ページ名</label>
                    <input type="text" placeholder="HTML" ref={nameRef} />
                </div>
                <button type="submit">追加</button>
            </form>
        </div>
    );
}