import { useState, useEffect } from 'react';
import './styles/Schedule.css'

const scheduleContent = ({ Data, num }) => {
    const [windowSize, setWindowSize] = useState([
        window.innerWidth,
        window.innerHeight,
    ]);

    useEffect(() => {
        const handleWindowResize = () => {
            setWindowSize([window.innerWidth, window.innerHeight]);
        };

        window.addEventListener("resize", handleWindowResize);

        return () => {
            window.removeEventListener("resize", handleWindowResize);
        };
    }, []);
    return (
        <ul>{Data[num].map((content, index) => {
            return (
                <li key={index}>{content.timings} {(num === 3 && windowSize[0] > 480) ? " " :<br />} {content.eventName} - {content.eventLoc}</li>
            )
        })}
        </ul>


    )
}

export default scheduleContent
