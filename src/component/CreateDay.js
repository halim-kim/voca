import useFetch from "../hooks/useFetch";
import { useNavigate } from 'react-router-dom';

export default function CreateDay() {
    const days = useFetch('http://localhost:3001/days');
    const navigate = useNavigate();

    function addDay(){
            fetch('http://localhost:3001/days', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    day:days.length + 1
                }),
            })
            .then(res => {
                if (res.ok) {
                    alert("登録が完了しました");
                    navigate(`/`);
                }
            });
        }
    return (
        <div>
            <h3>Day 追加</h3>
            <form>
                <input type="text" />
                <button onClick={addDay}>Submit</button>
            </form>
        </div>
    );
}
