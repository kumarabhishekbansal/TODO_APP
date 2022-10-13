import React,{useState,useEffect} from 'react'
const getuserdata=()=>{
    const userr=localStorage.getItem("myuser");
    if(userr)
    {
        return userr;
    }else{
        return "";
    }
}

const getday=()=>{
    const days=localStorage.getItem("day");
    if(days)
    {
        return days;
    }else{
        return "";
    }
}

const getdate=()=>{
    const dates=localStorage.getItem("date");
    if(dates)
    {
        return dates;
    }else{
        return "";
    }
}


const Into = () => {
    const [user,setuser]= useState("");
    const [userdata,setuserdata]= useState(getuserdata);
    const [tdate,settdate]=useState(getdate);
    const [tday,settday]=useState(getday);
    const inputuser1=(e)=>{
        setuser(e.target.value);
    }
    const inputuser=(e)=>{
        if(user==="")
        {
            alert(" Please enter your name. ")
        }
        else{
            const date = new Date();
            let day = date.getDate();
            let month = date.getMonth() + 1;
            let year = date.getFullYear();
            let currentDate = `${day}-${month}-${year}`;
            console.log(currentDate);
            const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
            let nday = weekday[date.getDay()];
            settdate(currentDate);
            settday(nday);
            setuserdata(user);
        }
    }
    useEffect(()=>{
        localStorage.setItem("myuser",userdata);
        localStorage.setItem("date",tdate);
        localStorage.setItem("day",tday);
    },[userdata,tdate,tday])
    
  return (
    <>
        <div className="Intro_div text-center d-flex flex-column">
            {(userdata==="")?<div className="int_div">
                    <h3 className='text-center text-primary'> Please Enter Your Name </h3>
                    <input type="text" placeholder=' Enter Name'
                    className='w-25 text-center'
                        onChange={inputuser1}
                        value={user}
                    />
                    <h4 className="enter_div w-25 my-4"
                    onClick={inputuser}
                    >Enter</h4>
            </div>:
            <div className="succintro_div">
                <h3 className='text-info my-4'> HEY {userdata} , <span style={{color:"red"}}> Here's Your</span>  <span style={{color:"green"}}>Todo List </span> </h3>
                <h3 className='my-4 h3c'> Date: <span style={{color:"orange"}}>{tdate}</span> </h3>
                <h3 className='my-4 h3c'> Day: <span style={{color:"orange"}}>{tday}</span> </h3>
            </div>
            }
        </div>
    </>
  )
}

export default Into