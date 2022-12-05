import { Row, Modal, Button, Form, Col } from "react-bootstrap";
import React from 'react';
import {useState,useRef} from 'react';
import '../css/navbar.css';

function ModalpopupFunc(props){
    const [isShow, invokeModal] = useState(true);    
    const initModal = () => {
        props.state(false);
      return invokeModal(false)
    }
    return (
        <>
            {/* <Button variant="success" onClick={initModal}>
                Open Modal
            </Button> */}
            <Modal show={isShow}>
                <Modal.Header closeButton onClick={initModal}>
                {/* <Modal.Title>React Modal Popover</Modal.Title> */}
                </Modal.Header>
                <Modal.Body>
                    <img className="modalImg" src={props.imgModal}/>
                    <b><h2>{props.nameModal}</h2></b>
                    <p>{props.desigModal}</p>
                    <p>{props.teamModal}</p>
                </Modal.Body>
                {/* <Modal.Footer>
                <Button variant="danger" onClick={initModal}>
                    Close
                </Button>
                <Button variant="dark" onClick={initModal}>
                    Store
                </Button>
                </Modal.Footer> */}
            </Modal>
        </>
    );
}


export default ModalpopupFunc;
