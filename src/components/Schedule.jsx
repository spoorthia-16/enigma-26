import {useState} from 'react'
import './styles/Schedule.css'
import Data from './ScheduleData.js'
import ScheduleContent from './ScheduleContent'

const first = [1,0,0,0]
const second = [0,1,0,0]
const third = [0,0,1,0]
const fourth = [0,0,0,1]


const Schedule = () => {
    const [date, setDate] = useState("18");
    const [myClass, setMyClass] = useState(first);

    const handleClick = (date) => {
        setDate(date);
        if(date === "18"){
            setMyClass(first);
        }else if(date === "19"){
            setMyClass(second);
        }else if(date === "20"){
            setMyClass(third);
        }else if(date === "21"){
            setMyClass(fourth);
        }
    };

    return (
        <div className='schedule'>
            <div className='scheduleHeading'>
                <h1>SCHEDULE</h1>
            </div>
            <div className='schedule-container'>
                <div className='scheduleDates'>
                    <div onClick={()=>{handleClick("18")}} className={myClass === first  ? "activeDiv" : "previous"}>
                        <h1>18<span>TH</span></h1>
                    </div>
                    <div onClick={()=>{handleClick("19")}} className={myClass === second ? "activeDiv" : "previous"}>
                        <h1>19<span>TH</span></h1>
                    </div>
                    <div onClick={()=>{handleClick("20")}} className={myClass === third ? "activeDiv" : "previous"}>
                        <h1>20<span>TH</span></h1>
                    </div>
                    <div onClick={()=>{handleClick("21")}} className={myClass === fourth?  "activeDiv" : "previous"}>
                        <h1>21<span>ST</span></h1>
                    </div>
                </div>
                <div className='scheduleContent'>
                    {date === "18" && <ScheduleContent Data={Data} num={0}/>}
                    {date === "19" && <ScheduleContent Data={Data} num={1}/>}
                    {date === "20" && <ScheduleContent Data={Data} num={2}/>}
                    {date === "21" && <ScheduleContent Data={Data} num={3}/>}
                </div>
            </div>
        </div>
    );
};

export default Schedule;