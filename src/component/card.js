import React from 'react';
import {useState,useRef} from 'react';


function Child(props){
  // debugger
  var count = 0;
  var list = [];  
  props.datadup.map((res,num)=>{    
    if(res.manager === props.mainId){      
      list.push(res);
    }
  });
  props.json(list);
  
  // list.forEach(element => {
    // debugger
  // });
  // console.log(typeof(list));
  const parentCallback=()=>{ 
    props.json(list);
  }
//  return {data:list};

return (
  <>
  <h1>Child Array length {list.length}</h1>
  {list.length && list.map((res,ind)=>{
  <ul key={ind} className="grid">
    <li id={res.id}>
      <div id={res.id} className="grid card" onClick={() => props.getIdFunc(res)} draggable onDragStart={(e) => props.dragStart(e, ind)} onDragEnter={(e) => props.dragEnter(e, ind)} onDragEnd={(e) => props.drop(e,res,ind)}>
        <div className="card-body">
          <img className="imgSrc" src={res.img} />
          <h5 className="card-title"> {res.name}</h5>
          <p className="card-title"> {res.designation}</p>
        </div>
      </div>
    </li>
  </ul>;
  })}
</>
)
  return (props.json(list));
  <>
      <ul onLoad={parentCallback()}>
    {/* {list.length && list.map((element,ind) => {   */}
        {/* <li className='mainRow' key={element.id} id={element.id}>
          <div id={element.id} className="flex card">
            <div className="card-body">
              <img className="imgSrc" src={element.img} />
              <h5 className="card-title"> {element.name}</h5>
              <p className="card-title"> {element.designation}</p> 
            </div>
          </div>                       
        </li> */}
    {/* }) */}
      </ul>
    </> 
  
    
}

export default Child;