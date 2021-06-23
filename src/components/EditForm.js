import { Form, Button } from "react-bootstrap"

import {EmployeeContext} from '../contexts/EmployeeContext';
import {useContext, useState} from 'react';

const EditForm = ({theEmployee}) =>{

    const id = theEmployee.id;

    const [employeeid, setemployeeid] = useState(theEmployee.employeeid);
    const [fname, setfname] = useState(theEmployee.fname);
    const [lname, setlname] = useState(theEmployee.lname);
    const [email, setemail] = useState(theEmployee.email);
    const [phone, setphone] = useState(theEmployee.phone);


    const {updateEmployee} = useContext(EmployeeContext);

    const updatedEmployee = {employeeid, fname, lname, email,phone}

    const handleSubmit = (e) => {
        e.preventDefault();
        updateEmployee(id, updatedEmployee)
    }

     return (

        <Form onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="Employee id"
                    name="employeeid"
                    value={employeeid}
                    onChange={(e)=> setemployeeid(e.target.value)}
                    required
                    
                />
                <br></br>
            </Form.Group>
            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="First Name *"
                    name="fname"
                    value={fname}
                    onChange={(e)=> setfname(e.target.value)}
                    required
                    pattern="[A-Za-z]{1,32}"
                />
                <br></br>
            </Form.Group>
            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="Last Name *"
                    name="lname"
                    value={lname}
                    onChange={(e)=> setlname(e.target.value)}
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
                    onChange={(e)=> setemail(e.target.value)}
                    required
                />
            </Form.Group>
            <br></br>
            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="Phone"
                    name="phone"
                    value={phone}
                    onChange={(e)=> setphone(e.target.value)}
                    pattern="[7-9]{1}[0-9]{9}"
                    title="Phone number with 7-9 and remaing 9 digit with 0-9"
                />
            </Form.Group>
            <br></br>
            <Button variant="success" type="submit" block>
                Edit Employee
            </Button>
        </Form>

     )
}

export default EditForm;