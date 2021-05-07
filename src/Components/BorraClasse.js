import React, { useState, useEffect } from 'react';
import { Modal, ModalHeader, ModalBody,
        ModalFooter, Alert, Button } from 'reactstrap';
import './../App.css';

import { borraClase } from '../Crud';

function BorraClasse(props) {
    
const id = props.claseSel[0].idClase

const [ modal, setModal ] = useState(true)
const [ nom, setNom ] = useState ('');

useEffect(() => {
    setModal(props.showBorra);
    setNom(props.claseSel[0].Nom)
}, [props.claseSel, props.showBorra, id])

async function borraLaClasse(e) {
    e.preventDefault();
    await borraClase(id);
    props.fetchData();
    props.setShowBorra(false);
}

const handleTornar = (modal) => {
    props.setShowBorra(false);
    setModal(!modal);
}

    return (

      <Modal isOpen={modal} toggle={(modal) => handleTornar (modal)}>
        <ModalHeader>Borra la Classe</ModalHeader>
        <ModalBody>
          <Alert>Estàs segur que vols eliminar la classe {nom}?</Alert>
            <ModalFooter>
            <Button color="danger" onClick={(e) => borraLaClasse (e)}>Borra</Button>
            <Button color="secondary" onClick={(modal) => handleTornar (modal)}>Tornar</Button>
            </ModalFooter>
        </ModalBody>
     </Modal>    
        )
}

export default BorraClasse