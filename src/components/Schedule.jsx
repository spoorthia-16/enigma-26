import {useState} from 'react'
import './styles/Schedule.css'
import Data from './ScheduleData.js'
import ScheduleContent from './ScheduleContent'

const first = [1,0,0,0]
const second = [0,1,0,0]
const third = [0,0,1,0]
const fourth = [0,0,0,1]


const Schedule = () => {
    const [date, setDate] = useState("26");
    const [myClass, setMyClass] = useState(first);

    const handleClick = (date) => {
        setDate(date);
        if(date === "26"){
            setMyClass(first);
        }else if(date === "27"){
            setMyClass(second);
        }else if(date === "28"){
            setMyClass(third);
        }else if(date === "29"){
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
                    <div onClick={()=>{handleClick("26")}} className={myClass === first  ? "activeDiv" : "previous"}>
                        <h1>26<span>TH</span></h1>
                    </div>
                    <div onClick={()=>{handleClick("27")}} className={myClass === second ? "activeDiv" : "previous"}>
                        <h1>27<span>TH</span></h1>
                    </div>
                    <div onClick={()=>{handleClick("28")}} className={myClass === third ? "activeDiv" : "previous"}>
                        <h1>28<span>TH</span></h1>
                    </div>
                    <div onClick={()=>{handleClick("29")}} className={myClass === fourth?  "activeDiv" : "previous"}>
                        <h1>29<span>TH</span></h1>
                    </div>
                </div>
                <div className='scheduleContent'>
                    {date === "26" && <ScheduleContent Data={Data} num={0}/>}
                    {date === "27" && <ScheduleContent Data={Data} num={1}/>}
                    {date === "28" && <ScheduleContent Data={Data} num={2}/>}
                    {date === "29" && <ScheduleContent Data={Data} num={3}/>}
                </div>
            </div>
        </div>
    );
};

export default Schedule;