import React, { useState, useEffect } from 'react';
import { Modal, ModalHeader, ModalBody,
        ModalFooter, Alert, Button } from 'reactstrap';
import './../App.css';


import { borraProfesor } from '../Crud';

function BorraProfe(props) {
    
const id = props.profesorSel[0].idProfesor

const [ modal, setModal ] = useState(true)

const [ nom, setNom ] = useState();
const [ cognom, setCognom ] = useState();

useEffect(() => {
    setModal(props.showBorra);
    setNom(props.profesorSel[0].Nom);
    setCognom(props.profesorSel[0].Cognom);

}, [props.profesorSel, props.showBorra, id])

async function borraProfe(e) {
    e.preventDefault();
    await borraProfesor(id);
    props.fetchData();
    props.setShowBorra(false);
}

const handleTornar = (modal) => {
    props.setShowBorra(false);
    setModal(!modal);
}

    return (

      <Modal isOpen={modal} toggle={(modal) => handleTornar (modal)}>
        <ModalHeader>Borra el Professor</ModalHeader>
        <ModalBody>
          <Alert>Estàs segur que vols eliminar el professor {nom} {cognom}?</Alert>
            <ModalFooter>
            <Button color="danger" onClick={(e) => borraProfe (e)}>Borra</Button>
            <Button color="secondary" onClick={(modal) => handleTornar (modal)}>Tornar</Button>
            </ModalFooter>
        </ModalBody>
     </Modal>    
        )
}

export default BorraProfe