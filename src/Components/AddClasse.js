import React, { useState, useEffect } from 'react';
import { Modal, ModalHeader, ModalBody,
        ModalFooter, Button, Form, FormGroup, Label, 
        Input } from 'reactstrap';
import './../App.css';

import { addClases } from '../Crud';

function AddClasse(props) {

const [ modal, setModal ] = useState(true)

const [ nom, setNom ] = useState('');
const [ horari, setHorari] = useState('');


useEffect(() => {
    setModal(props.showAdd)
}, [props.showAdd])

async function addClase(e) {
    e.preventDefault();
    await addClases({
      nom,
      horari
    });
    props.fetchData();
    props.setShowAdd(false);
}

const handleTornar = (modal) => {
    props.setShowAdd(false);
    setModal(!modal);
}
    return (

     <Modal isOpen={modal} toggle={(modal) => handleTornar (modal)}>
        <ModalHeader>Afegeix nova Classe</ModalHeader>
        <ModalBody>
        <Form style={{marginTop: "20px"}}>
            <FormGroup>
                <Label>Nom</Label>
                <Input 
                value={nom}
                onChange={(e)=> setNom(e.target.value)} >
                </Input>
            </FormGroup>
            <FormGroup>
                <Label>Horari (matins o tardes)</Label>
                <Input onChange={(e)=> setHorari(e.target.value)} type="select" name="select"> 
                    <option>Matí</option>
                    <option>Tarda</option>
                </Input>
            </FormGroup>
            <ModalFooter>
            <Button color="success" onClick={(e) => addClase (e)}>Guardar</Button>
            <Button color="secondary" onClick={(modal) => handleTornar (modal)}>Tornar</Button>
            </ModalFooter>
         </Form>
        </ModalBody>
     </Modal>    
        )
}

export default AddClasse