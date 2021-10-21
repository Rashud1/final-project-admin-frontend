

import React, {useState} from 'react'
import { Card, Form, InputGroup, Button } from 'react-bootstrap'

const initialState = {
    fname: "",
    lname: "",
    email: "",
    password: "",
    phone: "",
    dob: "",
    address: "",
    gender: "",
}
const Register = () => {
    const [user, setUser] = useState(initialState)

    const handleOnSubmit = e =>{
        //send teh form data to the server
    }

    const handleOnChange = e =>{
        //set input value in the state
    }
    
    return (
        <div className="register-page">
            <Card className= "p-3 reg-form">
                <h2 className="text-center">Register new admin user</h2>
                <hr />
            <Form>
  <Form.Group className="mb-3">
    <Form.Label>First Name</Form.Label>
    <Form.Control name="fname" placeholder="Divyesh" required />
  </Form.Group>
  <Form.Group className="mb-3">
    <Form.Label>Last Name</Form.Label>
    <Form.Control name="lname" placeholder="Shrestha" required />
  </Form.Group>
  <Form.Group className="mb-3">
    <Form.Label>Email</Form.Label>
    <Form.Control name="email" type="email" placeholder="your email, please" required/>
  </Form.Group>
  <Form.Group className="mb-3">
    <Form.Label>Password</Form.Label>
    <Form.Control name="password"  type="password" placeholder="secret" required />
  </Form.Group>
  <Form.Group className="mb-3">
    <Form.Label>DOB</Form.Label>
    <Form.Control name="dob" type="date" />
  </Form.Group>
  <Form.Group className="mb-3">
    <Form.Label>Phone</Form.Label>
    <Form.Control name="phone" placeholder="0450757589" />
  </Form.Group>
  <Form.Group className="mb-3">
    <Form.Label>Address</Form.Label>
    <Form.Control name="address" placeholder="57 eldon street,NSW, 2211" />
  </Form.Group>
  <Form.Group className="mb-3">

    <Form.Label>Gender</Form.Label>
    <Form.Control name="gender" placeholder="0450757589" />
  </Form.Group>
  <Form.Group className="mb-3">
  <InputGroup>
    <InputGroup.Radio name = "gender" aria-label="Male"/>Male
    <InputGroup.Radio name = "gender" aria-label="Female" />Female
    
  </InputGroup>
  </Form.Group>
  <Button variant="success">Register</Button>
 
</Form>
</Card>
            
        </div>
    )
    }
export default Register