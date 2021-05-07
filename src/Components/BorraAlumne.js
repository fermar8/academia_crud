import React, { useState, useEffect } from 'react';
import { Modal, ModalHeader, ModalBody,
        ModalFooter, Alert, Button } from 'reactstrap';
import './../App.css';


import { borraAlumno } from '../Crud';

function BorraAlumne(props) {
    
const id = props.alumnoSel[0].idAlumno

const [ modal, setModal ] = useState(true)

const [ nom, setNom ] = useState();
const [ cognom, setCognom ] = useState();

useEffect(() => {
    setModal(props.showBorra);
    setNom(props.alumnoSel[0].Nom);
    setCognom(props.alumnoSel[0].Cognom);

}, [props.alumnoSel, props.showBorra, id])

async function borraLalumne(e) {
    e.preventDefault();
    await borraAlumno(id);
    props.fetchData();
    props.setShowBorra(false);
}

const handleTornar = (modal) => {
    props.setShowBorra(false);
    setModal(!modal);
}

    return (

      <Modal isOpen={modal} toggle={(modal) => handleTornar (modal)}>
        <ModalHeader>Borra l'Alumne</ModalHeader>
        <ModalBody>
          <Alert>Estàs segur que vols eliminar l'alumne {nom} {cognom}?</Alert>
            <ModalFooter>
            <Button color="danger" onClick={(e) => borraLalumne (e)}>Borra</Button>
            <Button color="secondary" onClick={(modal) => handleTornar (modal)}>Tornar</Button>
            </ModalFooter>
        </ModalBody>
     </Modal>    
        )
}

export default BorraAlumne