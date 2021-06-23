import { Form, Button } from "react-bootstrap"

import {EmployeeContext, currentEmployees} from '../contexts/EmployeeContext';
import {useContext, useState} from 'react';

const AddForm = () =>{

    const {addEmployee} = useContext(EmployeeContext);

    const [newEmployee, setNewEmployee] = useState({
        employeeid:"", fname:"", lname:"",email:"",phone:""
    });

    const onInputChange = (e) => {
        setNewEmployee({...newEmployee,[e.target.name]: e.target.value})
    }

    const {employeeid, fname, lname, email, phone} = newEmployee;

    const handleSubmit = (e) => {
        e.preventDefault();
        currentEmployees.map(employee => (
            console.log(employee)
           ))  
        addEmployee(employeeid, fname,lname,email, phone);
    }
    
 return (
            
        <Form onSubmit={handleSubmit}>
            
            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="Employee Id"
                    name="employeeid"
                    value={employeeid}
                    onChange = { (e) => onInputChange(e)}
                    required
                    
                />
                <br></br>
            </Form.Group>
            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="First Name"
                    name="fname"
                    value={fname}
                    onChange = { (e) => onInputChange(e)}
                    required
                    pattern="[A-Za-z]{1,32}"
                />
                <br></br>
            </Form.Group>
            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="Last Name"
                    name="lname"
                    value={lname}
                    onChange = { (e) => onInputChange(e)}
                    required
                    pattern="[A-Za-z]{1,32}"
                />
                <br></br>
            </Form.Group>
            <Form.Group>
                <Form.Control
                    type="email"
                    placeholder="Email"
                    name="email"
                    value={email}
                    onChange = { (e) => onInputChange(e)}
                    required
                />
                <br></br>
            </Form.Group>
            <Form.Group>
                <Form.Control
                    type="tel"
                    placeholder="Phone"
                    name="phone"
                    value={phone}
                    onChange = { (e) => onInputChange(e)}
                    pattern="[7-9]{1}[0-9]{9}"
                    title="Phone number with 7-9 and remaing 9 digit with 0-9"
                    required
                />
                <br></br>
            </Form.Group>
            <Button variant="success" type="submit" block>
                Add New Employee
            </Button>
        </Form>

     )
}

export default AddForm;