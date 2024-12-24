import './App.css';
function App() {
  const [isChecked, setIsChecked] = useState(false);
  function handleChange(event) {
    setIsChecked(event.target.checked);
  }
  return (
    <div>
      <input type="checkbox" checked={isChecked} onChange={handleChange} />
      <label>Мне уже есть 18 лет</label>
      {isChecked ? (
        <div>
          <h2>Ура, вам уже есть 18</h2>
          <p> здесь расположен контент только для взрослых </p>
        </div>
      ) : (
        <div>
          <p> увы, вам еще нет 18 лет:( </p>
        </div>
      )}
    </div>
  );
}

 


export default App;