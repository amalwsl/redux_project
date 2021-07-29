import { useState } from "react";
import { Button,Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import {Edit} from '../js/actions/toDoActions' 

const EditTask=({id})=>{

        const [show, setShow] = useState(false);
      
        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);
        const [text,setText]=useState('')
        const dispatch=useDispatch()
      
        return (
          <>
            <Button variant="outline-secondary" size="sm" style={{marginLeft:"0.5em"}} onClick={handleShow}>
            🖊️
            </Button>
      
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>edit task</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                  <input type="text" onChange={ (e)=>setText(e.target.value) } />
                </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button variant="primary" onClick={ ()=>{dispatch(Edit(id,text));handleClose() } }>
                  Save Changes
                </Button>
              </Modal.Footer>
            </Modal>
          </>
        );
      }
      
export default EditTask