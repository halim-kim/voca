export default function Header() {
  return (
    <div className="header">
        <h1>
            <a href="/">トイック英単語</a>    
        </h1>
        <div className="menu">
            <a href="#x" className="link">単語追加</a>
            <a href="#x" className="link">Day 追加</a>
        </div>
    </div>
  );
}