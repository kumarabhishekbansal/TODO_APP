import React,{useState,useEffect} from 'react'
import Todolist from './Todolist';
import Empty from './Empty';
import Into from './Into';


const gettodoitems=()=>{
    const datas=localStorage.getItem("myitem");
    if(datas)
    {
        return JSON.parse(datas);
    }else{
        return [];
    }
}

const Todo = () => {
    const [todoarr, settodoarr] = useState(gettodoitems);
    const [plans,setplans]=useState("");
    const [toggleedit,settoggleedit]=useState("false");
    const [ids,setids]=useState(null);
    const imgdata=`https://source.unsplash.com/100x100?${plans}`
    const setplansfunc=(e)=>{
        setplans(e.target.value);
    }
    const addplanfunc=()=>{
        if(plans==="")
        {
            alert(' Please enter any item first. ')
            // setplans("Please enter any item first.")
        }

        else if(toggleedit==="true" && ids!==null)
        {
              settodoarr(
                todoarr.map((elem)=>{
                    if(elem.id===ids)
                    {
                        return ({...elem,name:plans})
                    }
                    return elem;
                })
              )
              setplans("");
              settoggleedit("false");
              setids(null);
        }

        else{

            const myinputdata={
                id:new Date().getTime().toString(),
                name:plans,
                imgdata:imgdata
                
            }           
            settodoarr([...todoarr,myinputdata]);
            setplans("");
        }
    }


    const editfunc=(ids,n,elem)=>{
        setplans(n);
        setids(ids);
        settoggleedit("true");
        setTimeout(()=>{
            addplanfunc();
        },1500)
    }

    useEffect(() => {
        localStorage.setItem("myitem",JSON.stringify(todoarr))
    }, [todoarr])
  return (
    <>
    <Into />
        <div className="todo_div border border-info w-100">
            <div className="input_div border border-warning">
            <i className="fa-sharp fa-solid fa-right-to-bracket icons"
                    onClick={addplanfunc}
                    ></i>   
                <input type="text" placeholder=" Enter Your Item " 
                className='w-100'
                    onChange={setplansfunc}
                    value={plans}
                />
            </div>

            {
                (todoarr.length!==0)?<Todolist todoarr={todoarr}
                    editfunc={editfunc} settodoarr={settodoarr} imgdata={imgdata}
                />:<Empty />
            }

            
        </div>
    </>
  )
}

export default Todo