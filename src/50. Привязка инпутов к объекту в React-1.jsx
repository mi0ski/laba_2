import './App.css';
import dayjs from "dayjs";

function App() {
  const [date, setDate] = useState({ year: 2025, month: 12, day: 31 });
  const dayOfWeek = dayjs(date).format("dddd");
  return (
    <div>
      <p>
        Год: {date.year}, месяц: {date.month}, день: {date.day}, день недели: {dayOfWeek}
      </p>
    </div>
  );
}




 


export default App;