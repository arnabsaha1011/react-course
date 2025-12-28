import { useEffect, useState } from "react";
import dayjs from "dayjs";

export function Time() {
  const [currentTime, setCurrentTime] = useState(dayjs().format('HH:mm:ss'));

  useEffect(() => {
    setInterval(() => {
      console.log('Updating time');
      setCurrentTime(dayjs().format('HH:mm:ss'));
    }, 1000);
  }, []);

  return (
    <div>
      <p>Current time: {currentTime}</p>
    </div>
  );
}