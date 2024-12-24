import './App.css';

function App() {
  const [notes, setNotes] = useState([1, 2, 3, 4, 5]);
  const [newNote, setNewNote] = useState("");

  function addNote() {
    setNotes([...notes, newNote]);
  }

  const result = notes.map((note, index) => {
    return <li key={index}>{note}</li>;
  });

  return (
    <div>
      <ul>{result}</ul>
      <input value={newNote} onChange={(event) => setNewNote(event.target.value)} />
      <button onClick={addNote}>Добавить</button>
    </div>
  );
}

export default App;
