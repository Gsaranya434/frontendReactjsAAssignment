import React from 'react';
import '../css/navbar.css';
import {useState,useRef} from 'react';
// import { Row, Modal, Button, Form, Col } from "react-bootstrap";
import ModalpopupFunc from "./modalPopup.js";

const NavbarPage = () =>{  
  const dragItem = useRef();
  const dragOverItem = useRef();
  const [respData, setRespData] = useState([
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
  
  const [jsonData, setJSON] = useState([
    {
        "id": "58",
        "name": "Mark Hill",
        "designation": "Cheif Executive Officer",
        "team": "Product",
        "manager": null,
        "img": "https://i.imgur.com/uk87y7L.jpg",
        "short": "CEO",
        "childList":[
                      {
                        "id": "59",
                        "name": "Joe Linux",
                        "designation": "Cheif Technology Officer",
                        "team": "Development & IT",
                        "manager": "58",
                        "img": "https://i.imgur.com/I8N6wle.gif",
                        "short": "CTO",
                        "childList":[
                                      {
                                        "id": "62",
                                        "name": "Ron Blomquist",
                                        "designation": "Cheif Information Officer",
                                        "team": "Development & IT",
                                        "manager": "59",
                                        "img": "https://i.imgur.com/Xdx7Ptn.jpeg",
                                        "short": "CIO",
                                        "childList":[]
                                      },
                                      {
                                        "id": "63",
                                        "name": "Michael Rubin",
                                        "designation": "Cheif Innovative Officer",
                                        "team": "Development & IT",
                                        "manager": "59",
                                        "img": "https://i.imgur.com/eX7uYfG.jpeg",
                                        "short": "CIO",
                                        "childList":[]
                                      }
                                    ]
                      },
                      {
                        "id": "60",
                        "name": "Linda May",
                        "designation": "Cheif Bussiness Officer",
                        "team": "Bussiness Flow",
                        "manager": "58",
                        "img": "https://i.imgur.com/Id57NSW.jpg",
                        "short": "CBO",
                        "childList":[
                                      {
                                      "id": "64",
                                      "name": "Allice Lopez",
                                      "designation": "Cheif Communication Officer",
                                      "team": "Bussiness Flow",
                                      "manager": "60",
                                      "img": "https://i.imgur.com/waxFbz6.jpg",
                                      "short": "CCO",
                                      "childList":[]
                                      },
                                      {
                                          "id": "65",
                                          "name": "Marry Johnson",
                                          "designation": "Cheif Brand Officer",
                                          "team": "Bussiness Flow",
                                          "manager": "60",
                                          "img": "https://i.imgur.com/Zi7qqQA.jpg",
                                          "short": "CBO",
                                          "childList":[]
                                      },
                                      {
                                          "id": "66",
                                          "name": "Kirk Douglas",
                                          "designation": "Cheif Bussiness Officer",
                                          "team": "Bussiness Flow",
                                          "manager": "60",
                                          "img": "https://i.imgur.com/0hhtbTn.jpeg",
                                          "short": "CBO",
                                          "childList":[]
                                      },
                                      {
                                          "id": "67",
                                          "name": "Erica Reel",
                                          "designation": "Cheif Bussiness Officer",
                                          "team": "Bussiness Flow",
                                          "manager": "60",
                                          "img": "https://i.imgur.com/I9XFqdd.jpg",
                                          "short": "CBO",
                                          "childList":[]
                                      
                                      }
                        ]
                      },
                      {
                        "id": "61",
                        "name": "John Green",
                        "designation": "Cheif Accounting Officer",
                        "team": "Finance",
                        "manager": "58",
                        "img": "https://i.imgur.com/NRYrB0l.jpeg",
                        "short": "CAO",
                        "childList":[]
                      }
                    ]
    }
    ]);

  // if(!jsonData.length){
  //   fetch('https://jsonplaceholder.typicode.com/users?userId=1')
  //   .then((response) => response.json())
  //   .then((json) => setJSON(json));
    
  // }  
  const [dupData, setDupdata] = useState([...respData]);
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
    setJSON([...copyListItems]);    
  };

  
  const nameFilterFunc = (e) => {
    if(e.target.value.length){
      const filteredData = respData.filter(
        ({ name }) =>
        name.toLowerCase().includes(e.target.value.toLowerCase())
        );
        setDupdata([...filteredData]);      
    }else{      
      setDupdata([...respData]);      
    }

    if(e.target.value.length){      
      const filteredData = jsonData.filter(
        ({ name }) =>
        name.toLowerCase().includes(e.target.value.toLowerCase())
        );
        if(filteredData.length>0){
          setJSON([...filteredData]);          
        }else{
          const filteredData = jsonData[0].childList.filter(
            ({ name }) =>
            name.toLowerCase().includes(e.target.value.toLowerCase())
            );
            if(filteredData.length>0){
              setJSON([...filteredData]);
            }else{
              const filteredData = jsonData[0].childList[0].childList.filter(
                ({ name }) =>
                name.toLowerCase().includes(e.target.value.toLowerCase())
                );
                if(filteredData.length>0){
                  setJSON([...filteredData]);
                }
            }          
        }        
    }else{           
      setJSON([...jsonData]);      
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
    setJSON([...typedata]);    
  }

  return(
    <>
      <div className="col leftMenu">        
        <div>
          <input type="text" placeholder="Search Employee" onChange={(e) => nameFilterFunc(e)}></input>
          <button>Go</button>
        </div>
        <br></br>
        <div>
          {jsonData && jsonData.length && jsonData.map((obj,index) =>(
            <div className="">
              <div className='asideData' key={obj['id']} onClick={() => showNameDetails([obj])}>
                <img className="leftimgSrc" src={obj['img']} style={{"width":"20%","height":"20%"}} />
                <p>{obj['name']}   {obj['short']}-{obj['team']}</p>     
              </div>
              <br></br>         
              {obj && obj.childList.length && obj.childList.map((list,index) => (
                <div>
                  <div className='asideData' key={list['id']} onClick={() => showNameDetails([list])}>               
                  <img className="leftimgSrc" src={list['img']} style={{"width":"20%","height":"20%"}} />
                  <p>{list['name']}   {list['short']}-{list['team']}</p>
                  </div>
                  {list && list.childList.length && list.childList.map((data,index) =>(
                    <div>
                      <div className='asideData' key={data['id']} onClick={() => showNameDetails([data])}>
                        <img className="leftimgSrc" src={data['img']} style={{"width":"20%","height":"20%"}} />
                        <p>{data['name']}   {data['short']}-{data['team']}</p>
                      </div>
                    </div>
                  ))}
                  {!list.childList.length?'':''}
                  </div>
              ))}
              {!obj.childList.length?'':''}
            </div>
          ))}          
        </div>
        {/* {dupData && dupData.length && dupData.map((obj,index) =>(
            <div className="asideData" key={obj['id']} onClick={() => showNameDetails([obj])}>
              <img className="leftimgSrc" src={obj['img']} style={{"width":"20%","height":"20%"}} />
              <p>{obj['name']}   {obj['short']}-{obj['team']}</p>
            <i>{obj['short']}-{obj['team']}</i> 
            </div>
          ))} */}
      </div>
      <h1>User List</h1>      
      <div className="mainRow container">             
        {jsonData && jsonData.length > 0 && jsonData.map((jsonObj, index1) => (
        <li>
          <div className="col" key={jsonObj.id} draggable onDragStart={(e) => dragStart(e, index1)}
          onDragEnter={(e) => dragEnter(e, index1)}
          onDragEnd={(e) =>drop(e,jsonObj,index1)} >
            <div className="card" id={jsonObj.id} onClick={() => getIdFunc(jsonObj)}>
              <div className="card-body">
                <img className="imgSrc" src={jsonObj.img} />
                <h5 className="card-title"> {jsonObj.name}</h5>
                <p className="card-title"> {jsonObj.designation}</p> 
              </div>
            </div>
          </div>  
          <br></br>
          <ul className='flex'>
              {jsonObj.childList.length && jsonObj.childList.map((element,index2)=>(            
                <div className="gridCol" key={element.id} draggable onDragStart={(e) => dragStart(e, [index1,index2])} onDragEnter={(e) => dragEnter(e, [index1,index2])}
                onDragEnd={(e) =>drop(e,element,[index1,index2])}>
                  <div className="card" id={element.id} onClick={() => getIdFunc(element)}>
                    <div className="card-body">
                      <img className="imgSrc" src={element.img} />               
                      <h5 className="card-title"> {element.name}</h5>
                      <p className="card-title"> {element.designation}</p>                      
                    </div>
                  </div>
                  <br></br>                                          
                    <li className="">
                      {element.childList.length>0 && element.childList.map((data,index3)=>(
                        <div className="grid-container row" key={data.id} draggable onDragStart={(e) => dragStart(e, [index1,index2,index3])} onDragEnter={(e) => dragEnter(e, [index1,index2,index3])}
                        onDragEnd={(e) =>drop(e,data,[index1,index2,index3])}>
                          <div className="card" id={data.id} onClick={() => getIdFunc(data)}>
                            <div className="card-body">
                              <img className="imgSrc" src={data.img} />               
                              <h5 className="card-title"> {data.name}</h5>
                              <p className="card-title"> {data.designation}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                      {!element.childList.length?<p></p>:''}
                    </li>
                
            </div>
            
            ))}
          </ul>
        </li>
        ))}
      
      </div>
      { status ? <ModalpopupFunc nameModal={name} imgModal={img} teamModal={team} desigModal={designation} state={setStatus}/> : '' }      
    </>
  );
}

export default NavbarPage;
