import './App.css';
import dayjs from "dayjs";

function App() {
  const [date, setDate] = useState({ year: 2025, month: 12, day: 31 });
  const dayOfWeek = dayjs(date).format("dddd");

  function handleChange(event, field) {
    const newDate = { ...date };
    newDate[field] = +event.target.value;
    setDate(newDate);
  }

  return (
    <div>
      <p>
        Год: {date.year}, месяц: {date.month}, день: {date.day}, день недели: {dayOfWeek}
      </p>
      <input type="number" value={date.year} onChange={(event) => handleChange(event, "year")} />
      <input type="number" value={date.month} onChange={(event) => handleChange(event, "month")} />
      <input type="number" value={date.day} onChange={(event) => handleChange(event, "day")} />
    </div>
  );
}




export default App;