import './App.css';
function App() {
  const [selectedCity, setSelectedCity] = useState("Kyiv");
  const cities = ["Kyiv", "Kharkiv", "Lviv", "Dnipro", "Odessa"];
  function handleChange(event) {
    setSelectedCity(event.target.value);
  }
  return (
    <div>
      <select value={selectedCity} onChange={handleChange}>
        {cities.map((city) => (
          <option key={city} value={city}>
            {city}
          </option>
        ))}
      </select>
      <p>Ваш выбор: {selectedCity}</p>
    </div>
  );
}


 


export default App;