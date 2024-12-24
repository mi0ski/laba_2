import './App.css';
function App() {
  const [notes, setNotes] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  function changeHandler(index, event) {
    setNotes([...notes.slice(0, index), +event.target.value, ...notes.slice(index + 1)]);
  }
  const result = notes.map((note, index) => {
    return <input key={index} value={note} onChange={(event) => changeHandler(index, event)} />;
  });
  const average = notes.reduce((a, b) => a + b, 0) / notes.length;
  return (
    <div>
      {result}
      <p>Среднее арифметическое: {average}</p>
    </div>
  );
}



 


export default App;