import './App.css';
function App() {
  const [value, setValue] = useState("");

  function handleChange(event) {
    setValue(event.target.value);
  }

  return (
    <div>
      <input value={value} onChange={handleChange} />
      <p>{value.length}</p>
    </div>
  );
}








export default App;