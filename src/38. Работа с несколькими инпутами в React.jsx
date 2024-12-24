import './App.css';
function App() {
    const [inputs, setInputs] = useState([2, 4, 36, 40, 44]);
    function handleChange(event, index) {
      const newInputs = [...inputs];
      newInputs[index] = +event.target.value;
      setInputs(newInputs);
    }
    const average = inputs.reduce((a, b) => a + b, 0) / inputs.length;
    return (
      <div>
        {inputs.map((input, index) => (
          <input key={index} value={input} onChange={(event) => handleChange(event, index)} />
        ))}
        <p>average: {average}</p>
      </div>
    );
  }
  









export default App;