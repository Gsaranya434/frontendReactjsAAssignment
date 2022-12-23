import React from 'react';
import {useState,useRef} from 'react';


function Child(props){
  var count = 0;
  var list = [];
  
  Object.values(props.jsonDatadup).map((res,num)=>{
    if(res.manager === props.mainId){      
      list.push(res);
    }
  });    
  // list.forEach(element => {
    // debugger
  // });
  // console.log(typeof(list));
  const parentCallback=()=>{    
    props.json(list);
  }
//  return {data:list};
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