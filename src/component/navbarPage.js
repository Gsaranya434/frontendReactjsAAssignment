import React from 'react';
import '../css/navbar.css';
import {useState,useRef} from 'react';
// import { Row, Modal, Button, Form, Col } from "react-bootstrap";
import ModalpopupFunc from "./modalPopup.js";

const NavbarPage = () =>{  
  const dragItem = useRef();
  const dragOverItem = useRef();
  
  const [jsonData, setJSON] = useState([
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
    
}]);

  // if(!jsonData.length){
  //   fetch('https://jsonplaceholder.typicode.com/users?userId=1')
  //   .then((response) => response.json())
  //   .then((json) => setJSON(json));
    
  // }
  const [dupData, setDupdata] = useState([...jsonData]);
  const dragStart = (e, position) => {
    dragItem.current = position;
  };
 
  const dragEnter = (e, position) => {
    dragOverItem.current = position;    
  };
  const drop = (e) => {
    const copyListItems = [...jsonData];
    const dragItemContent = copyListItems[dragItem.current];
    copyListItems.splice(dragItem.current, 1);    
    copyListItems.splice(dragOverItem.current, 0, dragItemContent);    
    setJSON([...copyListItems]);    
  };
  
  const nameFilterFunc = (e) => {
    if(e.target.value.length){
      const filteredData = jsonData.filter(
        ({ name }) =>
        name.toLowerCase().includes(e.target.value.toLowerCase())
        );
        setDupdata([...filteredData]);      
    }else{      
      setDupdata([...jsonData]);      
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
  const showNameDetails = (data) => {    
    setJSON([data]);
  }

  return(
    <>
      <div className="col leftMenu">
        <p>Filter based on user name</p>
        <input type="text" placeholder="Search Employee" onChange={(e) => nameFilterFunc(e)}></input>
        <button onClick={() =>getIdFunc(1)}>Go</button>
          {dupData && dupData.length && dupData.map((obj,index) =>(
            <div className="asideData" key={obj['id']} onClick={() => showNameDetails(obj)}>
              <img className="leftimgSrc" src={obj['img']} style={{"width":"20%","height":"20%"}} />
              <p>{obj['name']} {obj['short']}-{obj['team']}</p>
              {/* <i>{obj['short']}-{obj['team']}</i> */}
            </div>
          ))}
      </div>
      <h1>User List</h1>      
      <div className="row mainRow">                            
        {jsonData && jsonData.length > 0 && jsonData.map((jsonObj, index) => (
          <div className="col-4" key={jsonObj.id} draggable onDragStart={(e) => dragStart(e, index)}
          onDragEnter={(e) => dragEnter(e, index)}
          onDragEnd={drop} onClick={() => getIdFunc(jsonObj)}>
                  <div className="card" id={jsonObj.id}>
                    <div className="card-body">
                      <img className="imgSrc" src={jsonObj.img} />               
                      <h5 className="card-title"> {jsonObj.name}</h5>
                      <p className="card-title"> {jsonObj.designation}</p>                      
                    </div>
                </div>
          </div>
          ))}
      </div>
      { status ? <ModalpopupFunc nameModal={name} imgModal={img} teamModal={team} desigModal={designation} state={setStatus}/> : '' }      
    </>
  );
}

export default NavbarPage;
