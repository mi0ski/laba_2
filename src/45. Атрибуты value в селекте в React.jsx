import './App.css';
function App() {
  const [ageGroup, setAgeGroup] = useState("0-12");
  const ageGroups = ["0-12", "13-17", "18-25", "+25"];
  function handleChange(event) {
    setAgeGroup(event.target.value);
  }
  return (
    <div>
      <select value={ageGroup} onChange={handleChange}>
        {ageGroups.map((ageGroup) => (
          <option key={ageGroup} value={ageGroup}>
            {ageGroup}
          </option>
        ))}
      </select>
      <p>Ваша возрастная группа: {ageGroup}</p>
    </div>
  );
}


 


export default App;