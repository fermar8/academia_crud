import React, { useState, useEffect } from 'react';
import { Modal, ModalHeader, ModalBody,
        ModalFooter, Button, Form, FormGroup, Label, 
        Input } from 'reactstrap';
import './../App.css';

import { addAlumnos } from '../Crud';

function AddAlumno(props) {

const [ modal, setModal ] = useState(true);

const [ clases, setClases ] = useState([]);

const [ nom, setNom ] = useState('');
const [ cognom, setCognom ] = useState('');
const [ nSegSoc, setNSegSoc ] = useState('');
const [ NIE, setNIE ] = useState('');
const [ telefon, setTelefon ] = useState('');
const [ dataNaixement, setDataNaixement ] = useState('');
const [ correu, setCorreu ] = useState('');

const [ id, setId ] = useState('');

useEffect(() => {
    setModal(props.showAdd);
    setClases(props.clases);
}, [props.showAdd, props.clases])

async function addAlumno(e) {
    e.preventDefault();
    await addAlumnos({
      nom,
      cognom,
      nSegSoc,
      NIE,
      telefon,
      dataNaixement,
      correu,
      id
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
        <ModalHeader>Afegeix un nou Alumne</ModalHeader>
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
                <Label>Cognom</Label>
                <Input 
                value={cognom}
                onChange={(e)=> setCognom(e.target.value)} >
                </Input>
            </FormGroup>
            <FormGroup>
                <Label>Núm. Seguretat Social </Label>
                <Input 
                value={nSegSoc}
                onChange={(e)=> setNSegSoc(e.target.value)} >
                </Input>
            </FormGroup>
            <FormGroup>
                <Label>NIE</Label>
                <Input 
                value={NIE}
                onChange={(e)=> setNIE(e.target.value)}>
                </Input>
            </FormGroup>
            <FormGroup>
                <Label>Telèfon</Label>
                <Input 
                value={telefon}
                onChange={(e)=> setTelefon(e.target.value)}>
                </Input>
            </FormGroup>
            <FormGroup>
                <Label>Data Naixement (YYYY-MM-DD) </Label>
                <Input 
                value={dataNaixement}
                onChange={(e)=> setDataNaixement(e.target.value)}>
                </Input>
            </FormGroup>
            <FormGroup>
                <Label>Correu Electrònic</Label>
                <Input
                value={correu}
                onChange={(e)=> setCorreu(e.target.value)}>
                </Input>
            </FormGroup>
            <FormGroup>
                <Label>Nom de la classe</Label>
                <Input onChange={(e)=> setId(e.target.value)} type="select" name="select"> 
                           <option>Selecciona una classe</option>
                {clases.map((cl) => {
                    return <option key={cl.idClase} value={cl.idClase}>{cl.Nom}</option>
                })}
                </Input>
            </FormGroup>
            <ModalFooter>
            <Button color="success" onClick={(e) => addAlumno (e)}>Guardar</Button>
            <Button color="secondary" onClick={(modal) => handleTornar (modal)}>Tornar</Button>
            </ModalFooter>
         </Form>
        </ModalBody>
     </Modal>    
        )
}

export default AddAlumno