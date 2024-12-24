import './App.css';

import { useState } from "react";

function App() {
  const [notes, setNotes] = useState(initNotes);
  const newNote = {
    id: new_${notes.length + 1},
    prop1: value${notes.length + 1}1,
    prop2: value${notes.length + 1}2,
    prop3: value${notes.length + 1}3,
  };

  function addNote() {
    setNotes([...notes, newNote]);
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
      <button onClick={addNote}>Добавить</button>
    </div>
  );
}

export default App;

