import React from 'react';
import '../css/navbar.css';
import {useState,useRef} from 'react';



const NavbarPage = () =>{  
  const dragItem = useRef();
  const dragOverItem = useRef();
  const [selectOption, setOption] = useState();
  const [jsonData, setJSON] = useState([]);
  const [list, setList] = useState(['Item 1','Item 2','Item 3','Item 4','Item 5','Item 6']);

  fetch('https://jsonplaceholder.typicode.com/users?userId=1')
  .then((response) => response.json())
  .then((json) => setJSON(json));
  
  const dragStart = (e, position) => {
    dragItem.current = position;
    console.log(e.target.innerHTML);
  };
 
  const dragEnter = (e, position) => {
    dragOverItem.current = position;
    console.log(e.target.innerHTML);
  };
 
  const drop = (e) => {
    const copyListItems = [...list];
    const dragItemContent = copyListItems[dragItem.current];
    copyListItems.splice(dragItem.current, 1);
    copyListItems.splice(dragOverItem.current, 0, dragItemContent);
    dragItem.current = null;
    dragOverItem.current = null;
    setList(copyListItems);
  };
  
  return(
    <div className="row container">                      
      <h1>User List</h1>
      <p>Filter based on user name</p>
      <div>
        <select value={selectOption} id="getoption" onChange={(e) => GetIdFunc(e)}>
        {/* <select value={selectOption} onChange={setOption(true)}> */}
        {/* <select value={setOption(true)} onChange={setOpt}> */}
          {jsonData && jsonData.length >0 && jsonData.map((jsonDt,index) =>(
            <option value={index} key={index}>{jsonDt.name}</option>
          )          
          )}
        </select>
        <button>GO{selectOption}</button>
      </div>
      <div></div>
        {jsonData && jsonData.length > 0 && jsonData.map((jsonObj, index) => (
          <div className="col-4" key={jsonObj.id} draggable onDragStart={(e) => dragStart(e, index)}
          onDragEnter={(e) => dragEnter(e, index)}
          onDragEnd={drop}>
                  <div className="card" id={index}>
                    <div className="card-body">
                      <h5 className="card-title" style={{cursor:true}} onClick={() => GetIdFunc(index)}>Card {jsonObj.name}</h5>
                      <h6 className="card-subtitle mb-2 text-muted">Drag and Drop</h6>
                      {/* <p className="card-text">Handpicked illustrations for any mission</p>                               */}
                    </div>
                </div>
          </div>
          ))}
    </div>
  );
}

function GetIdFunc(id){
  // document.getElementById('getoption').value;
  console.log(id.target.value);  
  var id = id.target.value;  
  // fetch('https://jsonplaceholder.typicode.com/users?userId='+id)
  // .then((response) => response.json())
  // .then((json) => setJSON(json));
}



export default NavbarPage;
