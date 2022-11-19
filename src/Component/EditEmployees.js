import React, { useEffect, useState } from "react";
import { Button, Form } from 'react-bootstrap';
import "../../node_modules/bootstrap/dist/css/bootstrap.css"
import { Link, useNavigate } from 'react-router-dom';
import Employees from "./Employees";
import { v4 as uuid } from "uuid";



function EditEmployees() {

    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [id, setId] = useState('');

    let history = useNavigate();

    var index = Employees.map(function (e) {
        return e.id
    }).indexOf(id);


    const handleSubmit = (e) => {
        e.preeventDefault();

        let a = Employees[index];
        a.name = name;
        a.age = age;
        a.email = email;
        a.mobile = mobile;

        history("/");
    }

    useEffect(() => {
        setId(localStorage.getItem('Id'))
        setName(localStorage.getItem('Name'))
        setAge(localStorage.getItem('Age'))
        setEmail(localStorage.getItem('Email'))
        setMobile(localStorage.getItem('Mobile'))
    }, [])

    return (
        <>
            <div className="text-left" style={{ display: 'flex', justifyContent: 'right' }}>
                <Link className="gap-2 mt-5 mr-5 text-right" to="/">
                    <Button size="lg">Back</Button>
                </Link>
            </div>
            <Form className="d-grid" style={{ margin: "5rem" }}>

                <Form.Group className="mb-3" controlId="formName">
                    <Form.Control type="text" placeholder="Enter Name" value={name} required onChange={(e) => setName(e.target.value)}>
                    </Form.Control>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formAge">
                    <Form.Control type="number" placeholder="Enter Age" value={age} required onChange={(e) => setAge(e.target.value)}>
                    </Form.Control>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formEmail">
                    <Form.Control type="email" placeholder="Enter Email" value={email} required onChange={(e) => setEmail(e.target.value)}>
                    </Form.Control>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formMobile">
                    <Form.Control type="number" placeholder="Enter Mobile" value={mobile} required onChange={(e) => setMobile(e.target.value)}>
                    </Form.Control>
                </Form.Group>
                <Button onClick={(e) => handleSubmit(e)} type="submit">Update</Button>
            </Form>
        </>

    )
}

export default EditEmployees;