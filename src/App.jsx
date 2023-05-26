import Date from "./components/Date";

export default function App() {
  return (
    <div className="App">
      <p className="how-to-use">Use minutes, hours, days, years, seconds, milliseconds for duration, example ={">"} 10days, 2years etc</p>
      <Date />
    </div>
  );
}
