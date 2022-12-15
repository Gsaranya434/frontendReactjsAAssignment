import React from 'react';
import '../css/navbar.css';
import {useState,useRef} from 'react';
// import { Row, Modal, Button, Form, Col } from "react-bootstrap";
import ModalpopupFunc from "./modalPopup.js";
import { json } from 'react-router-dom';

const NavbarPage = () =>{  
  const dragItem = useRef();
  const dragOverItem = useRef();
  const [jsonData, setJSON] = useState({
    "58": {
        "id": "58",
        "name": "Mark Hill",
        "designation": "Cheif Executive Officer",
        "team": "Product",
        "manager": null,
        "img": "https://i.imgur.com/uk87y7L.jpg",
        "short": "CEO"
    },
    "59": {
        "id": "59",
        "name": "Joe Linux",
        "designation": "Cheif Technology Officer",
        "team": "Development & IT",
        "manager": "58",
        "img": "https://i.imgur.com/I8N6wle.gif",
        "short": "CTO"
    },
    "60": {
        "id": "60",
        "name": "Linda May",
        "designation": "Cheif Bussiness Officer",
        "team": "Bussiness Flow",
        "manager": "58",
        "img": "https://i.imgur.com/Id57NSW.jpg",
        "short": "CBO"
    },
    "61": {
        "id": "61",
        "name": "John Green",
        "designation": "Cheif Accounting Officer",
        "team": "Finance",
        "manager": "58",
        "img": "https://i.imgur.com/NRYrB0l.jpeg",
        "short": "CAO"
    },
    "62": {
        "id": "62",
        "name": "Ron Blomquist",
        "designation": "Cheif Information Officer",
        "team": "Development & IT",
        "manager": "59",
        "img": "https://i.imgur.com/Xdx7Ptn.jpeg",
        "short": "CIO"
    },
    "63": {
        "id": "63",
        "name": "Michael Rubin",
        "designation": "Cheif Innovative Officer",
        "team": "Development & IT",
        "manager": "59",
        "img": "https://i.imgur.com/eX7uYfG.jpeg",
        "short": "CIO"
    },
    "64": {
        "id": "64",
        "name": "Allice Lopez",
        "designation": "Cheif Communication Officer",
        "team": "Bussiness Flow",
        "manager": "60",
        "img": "https://i.imgur.com/waxFbz6.jpg",
        "short": "CCO"
    },
    "65": {
        "id": "65",
        "name": "Marry Johnson",
        "designation": "Cheif Brand Officer",
        "team": "Bussiness Flow",
        "manager": "60",
        "img": "https://i.imgur.com/Zi7qqQA.jpg",
        "short": "CBO"
    },
    "66": {
        "id": "66",
        "name": "Kirk Douglas",
        "designation": "Cheif Bussiness Officer",
        "team": "Bussiness Flow",
        "manager": "60",
        "img": "https://i.imgur.com/0hhtbTn.jpeg",
        "short": "CBO"
    },
    "67": {
        "id": "67",
        "name": "Erica Reel",
        "designation": "Cheif Bussiness Officer",
        "team": "Bussiness Flow",
        "manager": "60",
        "img": "https://i.imgur.com/I9XFqdd.jpg",
        "short": "CBO"
    }
});

const wrap=()=>{
  var newDiv = document.getElementsByClassName('mainRow');
  var res;
  Object.values(jsonData).forEach(function(jsonObj,index1) {
    debugger
    // console.log(jsonObj);
    if(!jsonObj.manager){
      res= jsonObj.manager;
      // console.log(res);
    }else if(res == jsonObj.manager){
      res= jsonObj.manager;
      // console.log(12345);
    }
    // newDiv.innerHTML += `<div className="flex col" key=${index1} draggable onDragStart={(e) => dragStart(e, ${index1})}
    // onDragEnter={(e) => dragEnter(e, ${index1})}
    // onDragEnd={(e)} =>drop(e,${jsonObj},${index1})}>      
    //   <div key={${index1}} className="flex card" onClick={() => getIdFunc(${jsonObj})}>              
    //     <div className="card-body">
    //       <img className="imgSrc" src={${jsonData[jsonObj].img}} />
    //       <h5 className="card-title"> {${jsonData[jsonObj].name}}</h5>                
    //       <p className="card-title"> {${jsonData[jsonObj].designation}}</p>                                 
    //     </div>
    //   </div>`;      
    
    
    
    console.log(document.getElementById('mainRow1'));
      // console.log(jsonData[jsonObj],index1);
  });
  // newDiv.setAttribute("id", "mainRow");
  // document.getElementById('col').appendChild(newDiv);
  // newDiv.appendChild(document.getElementById('cards'));
  // Object.keys(jsonData).map((jsonObj, index1) => (
  //   `<div id=${jsonObj}>SARANYA</div>`
  // ))
}

  const [respData, setrespJSON] = useState();

  // if(!jsonData.length){
  //   fetch('https://jsonplaceholder.typicode.com/users?userId=1')
  //   .then((response) => response.json())
  //   .then((json) => setJSON(json));
    
  // }  
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
      // copyListItems[0].childList.push(data);         
      // copyListItems[0].childList[dragOverItem.current.length].childList.push(data);      
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
    // const dragItemContent = copyListItems[0][position][dragItem.current];
    // if(dragOverItem.current===0){
      // copyListItems[0][dragItem.current[1]].splice(dragItem.current, 1);    
      // copyListItems[0][position].splice(dragOverItem.current, 0, dragItemContent);    
      // copyListItems[0].childList.push(data);
    // }
    // setJSON([...copyListItems]);    
  };

  
  const nameFilterFunc = (e) => {
    // debugger
    if(e.target.value.length){      
      // const filteredData = jsonData.filter(
      //   ({ name }) =>
      //   name.toLowerCase().includes(e.target.value.toLowerCase())
      //   );
      const filteredData = Object.values(jsonData)
        .filter(key => key.name)
        // .filter(key => key.name.toLowerCase()===e.target.value)
        .map((key,index)=>{
          console.log(key.name.toLowerCase().includes(e.target.value.toLowerCase()));
          // console.log(jsonData[key].name.toLowerCase().includes(e.target.value.toLowerCase()));        
        })          
      //   .map((key,index)=>{
      //     debugger
      //   })              
        // setJSON(key);      
        setJSON([...filteredData
        
        
        ]);      
        console.log(filteredData);
    }else{      
      setJSON([...jsonData]);      
    }
    setReset(true);

    if(false){      
      const filteredData = jsonData.filter(
        ({ name }) =>
        name.toLowerCase().includes(e.target.value.toLowerCase())
        );
        if(filteredData.length>0){
          // setJSON([...filteredData]);          
        }else{
          const filteredData = jsonData[0].childList.filter(
            ({ name }) =>
            name.toLowerCase().includes(e.target.value.toLowerCase())
            );
            if(filteredData.length>0){
              // setJSON([...filteredData]);
            }else{
              const filteredData = jsonData[0].childList[0].childList.filter(
                ({ name }) =>
                name.toLowerCase().includes(e.target.value.toLowerCase())
                );
                if(filteredData.length>0){
                  // setJSON([...filteredData]);
                }
            }          
        }        
    }else{           
      // setJSON([...jsonData]);      
    }
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
    window.location.reload();
  }
  const [reset,setReset] = useState(false);
  const [previndex,setIndex] = useState('');

  return(
    <>
      <div className="col leftMenu">        
        <div>
          <input type="text" placeholder="Search Employee" onChange={(e) => nameFilterFunc(e)}></input>
          <button>Go</button>
        </div>        
        <br></br>
        <div>          
          {jsonData && Object.keys(jsonData).map((obj,index) =>(
            <div className="allAside" key={index}>
              <div className='asideData' key={jsonData[obj].id} onClick={() => showNameDetails([obj])}>
                <img className="leftimgSrc" src={jsonData[obj].img} />                
                <p>{jsonData[obj].name}   {jsonData[obj].short}-{jsonData[obj].team}</p>     
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
      <div className="mainRow container" id="mainRow12">        
        {jsonData && Object.values(jsonData).map((jsonObj, index1) => (
      <ul key={index1}>
        <li onLoad={()=>setIndex(jsonObj.manager)}>
          <div className="flex col" key={index1} draggable onDragStart={(e) => dragStart(e, index1)}
          onDragEnter={(e) => dragEnter(e, index1)}
          onDragEnd={(e) =>drop(e,jsonObj,index1)}>
            {jsonObj.manager && jsonObj.id && Number(previndex)===Number(jsonObj.manager)?
            <div key={index1} className="flex card" onClick={() => getIdFunc(jsonObj)}>              
              <div className="card-body">
                <img className="imgSrc" src={jsonObj.img} />
                <h5 className="card-title"> {jsonObj.name}</h5>                
                <h5 className="card-title"> {typeof(Number(previndex))}</h5>                
                <p className="card-title"> {jsonObj.designation}</p>                                 
              </div>
            </div>
            :''}
            {jsonObj.manager===null?
            <div key={index1} className="flex card" onClick={() => getIdFunc(jsonObj)}>
              <div className="card-body">
                <img className="imgSrc" src={jsonObj.img} />
                <h5 className="card-title"> {jsonObj.name}</h5>
                <p className="card-title"> {jsonObj.designation}</p> 
              </div>
            </div>
            :''}
          <br></br>          
          </div>  
        </li>
        </ul>
        ))}
      </div>
      {/* <button onClick={()=>wrap()}>test</button> */}

       {/* {jsonObj.childList.length===0?'':true}       */}
              {/* {jsonObj.id ? */}
      { status ? <ModalpopupFunc nameModal={name} imgModal={img} teamModal={team} desigModal={designation} state={setStatus}/> : '' }      
    </>
  );
}

export default NavbarPage;
