import { useEffect, useState } from "react";
import "./styles/CountDown.css";

const CountDown = () => {
  const targetDate = new Date("March 26, 2026 00:00:00").getTime();

  const [time, setTime] = useState(targetDate - new Date().getTime());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(targetDate - new Date().getTime());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const days = Math.floor(time / (1000 * 60 * 60 * 24));
  const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((time / (1000 * 60)) % 60);
  const seconds = Math.floor((time / 1000) % 60);

  return (
    <div className="mc-section">
      <h2 className="mc-title">ENIGMA '26 COUNTDOWN</h2>

      <div className="count-grid">
        <div><h1>{days}</h1><p>Days</p></div>
        <div><h1>{hours}</h1><p>Hours</p></div>
        <div><h1>{minutes}</h1><p>Minutes</p></div>
        <div><h1>{seconds}</h1><p>Seconds</p></div>
      </div>
    </div>
  );
};

export default CountDown;