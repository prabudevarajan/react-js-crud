import React, { Fragment } from "react";
import { Button, Table } from "react-bootstrap";
import "../../node_modules/react-bootstrap/BootstrapModalManager/package.json"
import "../../node_modules/bootstrap/dist/css/bootstrap.css"
import Employees from "./Employees";
import { Link, useNavigate } from "react-router-dom";

function Index() {
    let history = useNavigate();

    const handEdit = (id, name, age, email, mobile) => {
        localStorage.setItem('id', id);
        localStorage.setItem('Name', name);
        localStorage.setItem('Age', age);
        localStorage.setItem('Email', email);
        localStorage.setItem('Mobile', mobile);
    }

    const handDelete = (id) => {
        var home = Employees.map(function (e) {
            return e.id
        }).indexOf(id);
        Employees.splice(home, 1);

        history('/')
    }


    return (
        <Fragment>
            <div style={{ margin: "5rem" }}>
                <div className="text-left" style={{display: 'flex', justifyContent: 'right'}}>
                    <Link className="gap-2 m-5 text-right" to="/create">
                        <Button size="lg">Create</Button>
                    </Link>
                </div>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <td>Name</td>
                            <td>Age</td>
                            <td>Email</td>
                            <td>Mobile</td>
                            <td>Action</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Employees && Employees.length > 0
                                ?
                                Employees.map((item) => {
                                    return (
                                        <tr>
                                            <td>{item.name}</td>
                                            <td>{item.age}</td>
                                            <td>{item.email}</td>
                                            <td>{item.mobile}</td>
                                            <td>
                                                <Link to={'/edit'}>
                                                    <Button onClick={() => handEdit(item.id, item.name, item.age, item.email, item.mobile)}>Edit</Button>
                                                </Link>
                                                &nbsp;&nbsp;&nbsp;
                                                <Button onClick={() => handDelete(item.id)}>Delete</Button>
                                            </td>
                                        </tr>
                                    )
                                }) : "No data"
                        }

                    </tbody>
                </Table>
            </div>
        </Fragment >
    )
}

export default Index;