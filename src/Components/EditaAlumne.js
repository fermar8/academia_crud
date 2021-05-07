import React, { useState, useEffect } from 'react';
import { Modal, ModalHeader, ModalBody,
        ModalFooter, Button, Form, FormGroup, Label, 
        Input } from 'reactstrap';
import './../App.css';


import { patchAlumnos } from '../Crud';

function EditaAlumne(props) {
    
const id = props.alumnoSel[0].idAlumno

const [ modal, setModal ] = useState(true);

const [ clases, setClases ] = useState([]);

const [ nom, setNom ] = useState();
const [ cognom, setCognom ] = useState();
const [ nSegSoc, setNSegSoc ] = useState();
const [ NIE, setNIE ] = useState();
const [ telefon, setTelefon ] = useState();
const [ dataNaixement, setDataNaixement ] = useState();
const [ correu, setCorreu ] = useState();

const [ idClase, setIdClase ] = useState('');

function canviarData(data) {
    let strToArray = data.split('');
    let handleDate = strToArray.splice(0, 10);
    return handleDate.join('');
}

useEffect(() => {
    setModal(props.showEdita);
    setNom(props.alumnoSel[0].Nom);
    setCognom(props.alumnoSel[0].Cognom);
    setNSegSoc(props.alumnoSel[0].NumSeguretatSocial);
    setNIE(props.alumnoSel[0].NIE);
    setTelefon(props.alumnoSel[0].Telefon);
    setDataNaixement(canviarData(props.alumnoSel[0].DataNaixement));
    setCorreu(props.alumnoSel[0].CorreuElectronic);
    setIdClase(props.alumnoSel[0].clase_idClase);

    setClases(props.clases)

}, [props.alumnoSel, props.showEdita, props.clases, id])

async function guardaAlumno(e) {
    e.preventDefault();
    await patchAlumnos({
      id,
      nom,
      cognom,
      nSegSoc,
      NIE,
      telefon,
      dataNaixement,
      correu,
      idClase
    });
    props.fetchData();
    props.setShowEdita(false);
}

const handleTornar = (modal) => {
    props.setShowEdita(false);
    setModal(!modal);
}

    return (

        <Modal isOpen={modal} toggle={(modal) => handleTornar (modal)}>
        <ModalHeader>Edita l'Alumne</ModalHeader>
        <ModalBody>
        <Form style={{marginTop: "20px"}}>
            <FormGroup>
                <Label>Nom</Label>
                <Input 
                placeholder={nom}
                value={nom}
                onChange={(e)=> setNom(e.target.value)} >
                </Input>
            </FormGroup>
            <FormGroup>
                <Label>Cognom</Label>
                <Input 
                placeholder={cognom}
                value={cognom}
                onChange={(e)=> setCognom(e.target.value)} >
                </Input>
            </FormGroup>
            <FormGroup>
                <Label>Núm. Seguretat Social </Label>
                <Input 
                placeholder={nSegSoc}
                value={nSegSoc}
                onChange={(e)=> setNSegSoc(e.target.value)} >
                </Input>
            </FormGroup>
            <FormGroup>
                <Label>NIE</Label>
                <Input 
                placeholder={NIE}
                value={NIE}
                onChange={(e)=> setNIE(e.target.value)}>
                </Input>
            </FormGroup>
            <FormGroup>
                <Label>Telèfon</Label>
                <Input 
                placeholder={telefon}
                value={telefon}
                onChange={(e)=> setTelefon(e.target.value)}>
                </Input>
            </FormGroup>
            <FormGroup>
                <Label>Data Naixement (YYYY-MM-DD) </Label>
                <Input 
                placeholder={dataNaixement}
                value={dataNaixement}
                onChange={(e)=> setDataNaixement(e.target.value)}>
                </Input>
            </FormGroup>
            <FormGroup>
                <Label>Correu Electrònic</Label>
                <Input placeholder={correu}
                value={correu}
                onChange={(e)=> setCorreu(e.target.value)}>
                </Input>
            </FormGroup>
            <FormGroup>
                <Label>Nom de la classe</Label>
                <Input onChange={(e)=> setIdClase(e.target.value)} type="select" name="select"> 
                           <option value={idClase}>Tria nova classe</option>
                {clases.map((cl) => {
                    return <option key={cl.idClase} value={cl.idClase}>{cl.Nom}</option>
                })}
                </Input>
            </FormGroup>
            <ModalFooter>
            <Button color="success" onClick={(e) => guardaAlumno (e)}>Guardar</Button>
            <Button color="secondary" onClick={(modal) => handleTornar (modal)}>Tornar</Button>
            </ModalFooter>
         </Form>
        </ModalBody>
     </Modal>    
        )
}

export default EditaAlumne