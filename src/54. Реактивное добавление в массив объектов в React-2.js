import './App.css';

function App() {
  const [notes, setNotes] = useState(initNotes);
  const [newNote, setNewNote] = useState({ prop1: "", prop2: "", prop3: "" });

  function addNote() {
    setNotes([...notes, newNote]);
    setNewNote({ prop1: "", prop2: "", prop3: "" });
  }

  const result = notes.map((note) => {
    return (
      <li key={note.id}>
        <span>{note.prop1}</span> <span>{note.prop2}</span> <span>{note.prop3}</span>
      </li>
    );
  });

  return (
    <div>
      <ul>{result}</ul>
      <input value={newNote.prop1} onChange={(event) => setNewNote({ ...newNote, prop1: event.target.value })} />
      <input value={newNote.prop2} onChange={(event) => setNewNote({ ...newNote, prop2: event.target.value })} />
      <input value={newNote.prop3} onChange={(event) => setNewNote({ ...newNote, prop3: event.target.value })} />
      <button onClick={addNote}>Добавить</button>
    </div>
  );
}

export default App;


