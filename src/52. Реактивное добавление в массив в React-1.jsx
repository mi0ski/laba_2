import './App.css';

function App() {
  const [notes, setNotes] = useState([1, 2, 3, 4, 5]);

  function addNote() {
    setNotes([...notes, notes.length + 1]);
  }

  const result = notes.map((note, index) => {
    return <li key={index}>{note}</li>;
  });

  return (
    <div>
      <ul>{result}</ul>
      <button onClick={addNote}>Добавить</button>
    </div>
  );
}



export default App;