import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';



const modal = () => {
  
  return (
    <div
    className="modal show"
    style={{ display: 'block', position: 'initial' }}
  >
    <Modal.Dialog>
      <Modal.Header closeButton>
        <Modal.Title>Editar</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <input type="text" placeholder='nombre' />
        <input type="text" placeholder='categoria'/>
        <input type="text" placeholder='precio'/>
        <input type="text" placeholder='descripcion'/>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary">Cancelar</Button>
        <Button variant="primary">Actualizar Datos</Button>
      </Modal.Footer>
    </Modal.Dialog>
  </div>
  )
}

export default modal