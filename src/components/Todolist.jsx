import React,{useEffect} from 'react'
// import tick from '../Images/tick.jpg'



const Todolist = (props) => {

  // const [tickflag,settickflag]=useState("false");

  // upperarrow

  const upperarrow=(ids)=>{
      // if(id===0)
      // {
      //   console.log("nothing");
      // }
      // else{
      //   const item1=props.todoarr[id-1];
      //   console.log(item1);
      // }
      props.todoarr.filter((val,index)=>{
            if(val.id===ids && index!==0)
            {
              // console.log("before");
              // console.log(props.todoarr);
              [props.todoarr[index-1], props.todoarr[index]] = [props.todoarr[index], props.todoarr[index-1]];
              props.settodoarr([...props.todoarr]);
              // console.log("after");
              // console.log(props.todoarr);
              return props.todoarr;
            }
            props.settodoarr([...props.todoarr]);
            return props.todoarr;
      })

      // if(itm.indexs!==0)
      // {
      //     const item1=props.todoarr[itm.indexs-1].name;
      //     const item2=props.todoarr[itm.indexs].name;
      //     console.log("before");
      //     console.log(item1);
      //     console.log(item2);
      //     // const ind1=item2.indexs;
      //     // item2.indexs=item1.indexs;
      //     // item1.indexs=ind1;
      //     props.todoarr[itm.indexs-1].name=item2;
      //     props.todoarr[itm.indexs].name=item1;

      //     console.log("after");
      //     console.log(props.todoarr[itm.indexs-1]);
      //     console.log(props.todoarr[itm.indexs]);
      //     props.todoarr=[{...props.todoarr}];


      // }
      // console.log(itm);
  }

  // downarrow
      const downarrow=(ids)=>{
          // console.log(props.todoarr.length);
          props.todoarr.filter((val,index)=>{
            if(val.id===ids && index!==props.todoarr.length-1)
            {
                [props.todoarr[index],props.todoarr[index+1]]=[props.todoarr[index+1],props.todoarr[index]];
                props.settodoarr([...props.todoarr]);
                return props.todoarr;
            }
            props.settodoarr([...props.todoarr]);
            return props.todoarr;
          })
      }
  // tick
        // const tickarrow=(ids)=>{
        //     const vals=document.querySelector();
        //     // vals.style.backgroundColor="red";
        //     console.log(vals);
        // }
  // cross
          const crossarrow=(ids)=>{
            const updateitems=props.todoarr.filter((val)=>{
              return val.id!==ids
            })
            props.settodoarr(updateitems);
          }

  //edit

  const editarrow=(ids)=>{
    let elem=props.todoarr.find((val,index)=>{
      return val.id===ids;
    });
    if(elem)
    {
      props.editfunc(ids,elem.name,elem);
    }
  }
  const removef=()=>{
    localStorage.removeItem("myitem");
    window.location.reload(false);
  }

  useEffect(()=>{
    localStorage.setItem("myitem",JSON.stringify(props.todoarr))
  },[props.todoarr])
  
  return (
    <>
        <div className="todolist_div d-flex flex-column  my-3 w-100">
        {props.todoarr.map((val,index)=>{
              return <div className={`list d-flex flex-wrap border  justify-content-around w-100 ${val.id} my-2`} key={index}>
                <div className="icon_1" id={val.id}><i className="fa-solid fa-circle-check"
                onClick={()=>crossarrow(val.id)}
                ></i></div>
                <div className="icon_1"><i className="fa-sharp fa-solid fa-circle-arrow-up"
                onClick={()=>upperarrow(val.id)}
                ></i></div>
                <div className="img_icon w-25"><figure><img src={val.imgdata} alt="image1" className='w-25'/></figure></div>
                <div className="texttitle">{val.name}</div>
                <div className="icon_1"><i className="fa-sharp fa-solid fa-pen-to-square"
                onClick={()=>editarrow(val.id)}
                ></i></div>
                <div className="icon_1"><i className="fa-sharp fa-solid fa-circle-arrow-down"
                onClick={()=>downarrow(val.id)}
                ></i></div>
                <div className="icon_1"><i className="fa-solid fa-circle-xmark"
                onClick={()=>crossarrow(val.id)}
                ></i></div>
               </div>
        })
        }
        <div className="tfl">
                <div className="removebtn"
                onClick={removef}
                
                >Remove All</div>
          </div>
        </div>
    </>
  )
}

export default Todolist