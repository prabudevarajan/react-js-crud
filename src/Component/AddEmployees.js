import React, { useState } from "react";
import { Button, Form } from 'react-bootstrap';
import "../../node_modules/bootstrap/dist/css/bootstrap.css"
import { Link, useNavigate } from 'react-router-dom';
import Employees from "./Employees";
import { v4 as uuid } from "uuid";


function AddEmployees() {

    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');

    let history = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const ids = uuid();

        let uniqueId = ids.slice(0, 8);
        let a = name;
        let b = age;
        let c = email;
        let d = mobile;

        Employees.push({ id: uniqueId, name: a, age: b, email: c, mobile: d });
        history("/");
    }

    return (
        <>
            <div className="text-left" style={{ display: 'flex', justifyContent: 'right' }}>
                <Link className="gap-2 mt-5 mr-5 text-right" to="/">
                    <Button size="lg">Back</Button>
                </Link>
            </div>
            <Form className="d-grid" style={{ margin: "5rem" }}>
                <Form.Group className="mb-3" controlId="formName">
                    <Form.Control type="text" placeholder="Enter Name" required onChange={(e) => setName(e.target.value)}>
                    </Form.Control>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formAge">
                    <Form.Control type="number" placeholder="Enter Age" required onChange={(e) => setAge(e.target.value)}>
                    </Form.Control>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formEmail">
                    <Form.Control type="email" placeholder="Enter Email" required onChange={(e) => setEmail(e.target.value)}>
                    </Form.Control>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formMobile">
                    <Form.Control type="number" placeholder="Enter Mobile" required onChange={(e) => setMobile(e.target.value)}>
                    </Form.Control>
                </Form.Group>
                <Button onClick={(e) => handleSubmit(e)} type="submit">Submit</Button>
            </Form>
        </>
    )
}

export default AddEmployees;