import React from 'react';
import '../css/navbar.css';
import {useState,useRef} from 'react';
import $ from 'jquery';
// import { Row, Modal, Button, Form, Col } from "react-bootstrap";
import ModalpopupFunc from "./modalPopup.js";
import Child from "./card.js";
import { json } from 'react-router-dom';

const NavbarPage = () =>{  
  const dragItem = useRef();
  const dragOverItem = useRef();
  const bindHTML = useRef();
  const [jsonData, setJSON] = useState(
//     {
//     "58": {
//         "id": "58",
//         "name": "Mark Hill",
//         "designation": "Cheif Executive Officer",
//         "team": "Product",
//         "manager": null,
//         "img": "https://i.imgur.com/uk87y7L.jpg",
//         "short": "CEO"
//     },
//     "59": {
//         "id": "59",
//         "name": "Joe Linux",
//         "designation": "Cheif Technology Officer",
//         "team": "Development & IT",
//         "manager": "58",
//         "img": "https://i.imgur.com/I8N6wle.gif",
//         "short": "CTO"
//     },
//     "60": {
//         "id": "60",
//         "name": "Linda May",
//         "designation": "Cheif Bussiness Officer",
//         "team": "Bussiness Flow",
//         "manager": "58",
//         "img": "https://i.imgur.com/Id57NSW.jpg",
//         "short": "CBO"
//     },
//     "61": {
//         "id": "61",
//         "name": "John Green",
//         "designation": "Cheif Accounting Officer",
//         "team": "Finance",
//         "manager": "58",
//         "img": "https://i.imgur.com/NRYrB0l.jpeg",
//         "short": "CAO"
//     },
//     "62": {
//         "id": "62",
//         "name": "Ron Blomquist",
//         "designation": "Cheif Information Officer",
//         "team": "Development & IT",
//         "manager": "59",
//         "img": "https://i.imgur.com/Xdx7Ptn.jpeg",
//         "short": "CIO"
//     },
//     "63": {
//         "id": "63",
//         "name": "Michael Rubin",
//         "designation": "Cheif Innovative Officer",
//         "team": "Development & IT",
//         "manager": "59",
//         "img": "https://i.imgur.com/eX7uYfG.jpeg",
//         "short": "CIO"
//     },
//     "64": {
//         "id": "64",
//         "name": "Allice Lopez",
//         "designation": "Cheif Communication Officer",
//         "team": "Bussiness Flow",
//         "manager": "60",
//         "img": "https://i.imgur.com/waxFbz6.jpg",
//         "short": "CCO"
//     },
//     "65": {
//         "id": "65",
//         "name": "Marry Johnson",
//         "designation": "Cheif Brand Officer",
//         "team": "Bussiness Flow",
//         "manager": "60",
//         "img": "https://i.imgur.com/Zi7qqQA.jpg",
//         "short": "CBO"
//     },
//     "66": {
//         "id": "66",
//         "name": "Kirk Douglas",
//         "designation": "Cheif Bussiness Officer",
//         "team": "Bussiness Flow",
//         "manager": "60",
//         "img": "https://i.imgur.com/0hhtbTn.jpeg",
//         "short": "CBO"
//     },
//     "67": {
//         "id": "67",
//         "name": "Erica Reel",
//         "designation": "Cheif Bussiness Officer",
//         "team": "Bussiness Flow",
//         "manager": "60",
//         "img": "https://i.imgur.com/I9XFqdd.jpg",
//         "short": "CBO"
//     }
// }
);

const [mainJSON, setmainJSON] = useState([
  {
      "id": "58",
      "name": "Mark Hill",
      "designation": "Cheif Executive Officer",
      "team": "Product",
      "manager": null,
      "img": "https://i.imgur.com/uk87y7L.jpg",
      "short": "CEO"
  },
  {
      "id": "59",
      "name": "Joe Linux",
      "designation": "Cheif Technology Officer",
      "team": "Development & IT",
      "manager": "58",
      "img": "https://i.imgur.com/I8N6wle.gif",
      "short": "CTO"
  },
  {
      "id": "60",
      "name": "Linda May",
      "designation": "Cheif Bussiness Officer",
      "team": "Bussiness Flow",
      "manager": "58",
      "img": "https://i.imgur.com/Id57NSW.jpg",
      "short": "CBO"
  },
  {
      "id": "61",
      "name": "John Green",
      "designation": "Cheif Accounting Officer",
      "team": "Finance",
      "manager": "58",
      "img": "https://i.imgur.com/NRYrB0l.jpeg",
      "short": "CAO"
  },
  {
      "id": "62",
      "name": "Ron Blomquist",
      "designation": "Cheif Information Officer",
      "team": "Development & IT",
      "manager": "59",
      "img": "https://i.imgur.com/Xdx7Ptn.jpeg",
      "short": "CIO"
  },
  {
      "id": "63",
      "name": "Michael Rubin",
      "designation": "Cheif Innovative Officer",
      "team": "Development & IT",
      "manager": "59",
      "img": "https://i.imgur.com/eX7uYfG.jpeg",
      "short": "CIO"
  },
  {
      "id": "64",
      "name": "Allice Lopez",
      "designation": "Cheif Communication Officer",
      "team": "Bussiness Flow",
      "manager": "60",
      "img": "https://i.imgur.com/waxFbz6.jpg",
      "short": "CCO"
  },
  {
      "id": "65",
      "name": "Marry Johnson",
      "designation": "Cheif Brand Officer",
      "team": "Bussiness Flow",
      "manager": "60",
      "img": "https://i.imgur.com/Zi7qqQA.jpg",
      "short": "CBO"
  },
  {
      "id": "66",
      "name": "Kirk Douglas",
      "designation": "Cheif Bussiness Officer",
      "team": "Bussiness Flow",
      "manager": "60",
      "img": "https://i.imgur.com/0hhtbTn.jpeg",
      "short": "CBO"
  },
  {
      "id": "67",
      "name": "Erica Reel",
      "designation": "Cheif Bussiness Officer",
      "team": "Bussiness Flow",
      "manager": "60",
      "img": "https://i.imgur.com/I9XFqdd.jpg",
      "short": "CBO"
  }
]);
var jsonDatadup = [...mainJSON];

  const [respData, setrespJSON] = useState();

  const [dupData, setDupdata] = useState();
  const [prevID, setprevID] = useState('');
  const dragStart = (e, posit) => {    
    dragItem.current = posit;
  };
  
  const dragEnter = (e, posi) => {        
    dragOverItem.current = posi;    
  };
  var count =0;
  const drop = (e,data,position) => {
    count = count + 1;    
    const copyListItems = [...jsonData];  
    if(position.length===2 && count === 1){    
      copyListItems[0].childList.splice(dragItem.current[1],1);
      copyListItems[0].childList[dragOverItem.current[0]].childList.push(data);      
    }else if(position.length===3 && count === 1){
      if(dragItem.current.length && dragOverItem.current.length){
        copyListItems[0].childList[dragItem.current[1]].childList.splice([position[2]],1);
        copyListItems[0].childList[dragOverItem.current[1]].childList.push(data);      
      }else if(dragOverItem.current===0){
        copyListItems[0].childList.push(data);
      }
    }else if(position===0 && count === 1){
      alert('oops....you cant able to move');
    }    
  };

  
  const nameFilterFunc = (e) => {    
    if(e.target.value.length){      
      const filteredData = mainJSON.filter(
        (data) =>
        data.name.toLowerCase().includes(e.target.value.toLowerCase())        
        );
        setmainJSON([...filteredData]);                        
      }else{                   
        setmainJSON([...mainJSON]);                        
    }
    setReset(true);
  };
  
  
  const [name, setName] = useState('');  
  const [img, setImage] = useState('');  
  const [status, setStatus] = useState(false);
  const [team, setTeam] = useState('');
  const [designation, setDesignation] = useState('');
  const getIdFunc = (data) => {    
    setName(data.name);    
    setImage(data.img);    
    setTeam(data.team);    
    setDesignation(data.designation);
    setStatus(true);
  }
  const showNameDetails = (typedata) => {
    // setDupdata([...typedata]);      
    setReset(true);
    // setJSON([...typedata]);    
  }
  function reloadFunc(){    
    // setJSONdup(Object.values(jsonData));
    window.location.reload();
  }
  const [reset,setReset] = useState(false);
  const [previndex,setIndex] = useState();
  var mainId = null;
  var count = 0;
  
  const mainIdFunc=()=>{    
    // mainId = obj.id;    
    var newList = [];
    var asignNum = null;
    if(true){
      var findData = mainJSON.find((res,num)=>{
        // debugger
        if(res.manager && asignNum && asignNum===res.manager){
          count=count+1;          
          bindHTML.current = `<h1>saranya</h1>`;
          // debugger
          // jsonDatadup.splice(index,1);
          // mainIdFunc();
          // console.log(res);
          return res;
        }else{          
          asignNum = res.id;
          // debugger 
          // console.log('count '+count);
        }
        // newList.push(res);
      });
      // console.log(count);
    }
    console.log(findData);
    // debugger
    // setJSONdup(findData);
    // debugger
    
    // setJSONdup(obj);
    
    // jsonDatadup.map((res,index)=>{      
    //   console.log(count);
    // })
    console.log(findData);


  }
  const comFunc=(data)=>{
    jsonDatadup = data;
    console.log(jsonDatadup);    
  }
  // debugger;
  
  return(
    <>
      <div className="col leftMenu">        
        <div>
          <input type="text" placeholder="Search Employee" onChange={(e) => nameFilterFunc(e)}></input>
          <button>Go</button>
        </div>        
        <br></br>
        <div>          
          {mainJSON.length && mainJSON.map((obj,index) =>(
            <div className="allAside" key={index}>
              <div className='asideData' key={obj.id} onClick={() => showNameDetails([obj])}>
                <img className="leftimgSrc" src={obj.img} />                
                <p>{obj.name}   {obj.short}-{obj.team}</p>     
              </div>
              <br></br>                      
            </div>
          ))}
          <br></br>          
          <br></br>          
          <br></br>          
        </div>        
      </div>
      <h1>User List</h1>      
      {reset?
        <div>        
          <button onClick={() => reloadFunc()}>Reset</button>
        </div>:''
        }
        {jsonDatadup && jsonDatadup.length?
      <div className={mainId?"":"root container"} id="mainRow12">
        {jsonDatadup.map((obj,index)=>(           
          <ul key={index}>
            <li className='' key={index} id={obj.id}>                     
              <div id={obj.id} className="grid card" onClick={() => getIdFunc(obj)} draggable onDragStart={(e) => dragStart(e, index)} onDragEnter={(e) => dragEnter(e, index)} onDragEnd={(e) =>drop(e,obj,index)}>
                <div className="card-body">
                  <img className="imgSrc" src={obj.img} />
                  <h5 className="card-title"> {obj.name}</h5>
                  <p className="card-title"> {obj.designation}</p> 
                </div>
              </div>  
              <Child jsonDatadup = {jsonDatadup} json={comFunc} mainId={obj.id} />
              {/* <Child onLoad={mainIdFunc()}/> */}
            </li>
          </ul>
        ))}  
      </div>:''}
      { status ? <ModalpopupFunc nameModal={name} imgModal={img} teamModal={team} desigModal={designation} state={setStatus}/> : '' }      
    </>
  );
}

export default NavbarPage;
