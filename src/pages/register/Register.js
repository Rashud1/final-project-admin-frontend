

import React, {useState} from 'react'
import { Card, Form, InputGroup, Button, Alert } from 'react-bootstrap'

const initialState = {
    fname: "",
    lname: "",
    email: "",
    password: "",
    confirmPassword:"",
    phone: "",
    dob: "",
    address: "",
    gender: "",
}
const Register = () => {
    const [user, setUser] = useState(initialState)
const [passwordError, setPasswordError] = useState("")
    

const handleOnSubmit = e =>{
  e.preventDefault()
  //check for the password confirmation
  const {password, confirmPassword} = user
  password !== confirmPassword && setPasswordError("Password did  not match")
  console.log(user);
  //send teh form data to the server
}


    const handleOnChange = e =>{
        const {name, value} = e.target

        //reset error message
        passwordError && name === "confirmPassword" && setPasswordError("")
        
        
        setUser({
             ...user,
              [name]: value,


        })
        //set input value in the state
    }
    console.log(user)

    
    return (
        <div className="register-page">
            <Card className= "p-3 reg-form">
                <h2 className="text-center">Register new user</h2>
                <hr />
            <Form onSubmit={handleOnSubmit}>
  <Form.Group className="mb-3">
    <Form.Label>First Name</Form.Label>
    <Form.Control 
    name="fname" 
    onChange={handleOnChange}
    placeholder="Divyesh" 
    required />
  </Form.Group>


  <Form.Group className="mb-3">
    <Form.Label>Last Name</Form.Label>
    <Form.Control name="lname"
    onChange={handleOnChange} 
    placeholder="Shrestha" 
    required />
  </Form.Group>


  <Form.Group className="mb-3">
    <Form.Label>Email</Form.Label>
    <Form.Control name="email" 
     onChange={handleOnChange} 
     type="email" placeholder="your email, please" 
     required/>
  </Form.Group>


  <Form.Group className="mb-3">
    <Form.Label>Password</Form.Label>
    <Form.Control
     name="password"
     onChange={handleOnChange}  
     type="password" 
     placeholder="secret" 
     required />
  </Form.Group>


  <Form.Group className="mb-3">
    <Form.Label>Confrm Password</Form.Label>
    <Form.Control 
    name="confirmPassword" 
     onChange={handleOnChange} 
     type="password" required />
     {passwordError && <Alert variant="danger">{passwordError}</Alert>}
  </Form.Group>


  <Form.Group className="mb-3">
    <Form.Label>DOB</Form.Label>
    <Form.Control 
    name="dob"
     onChange={handleOnChange} 
     type="date" />
  </Form.Group>


  <Form.Group className="mb-3">
    <Form.Label>Phone</Form.Label>
    <Form.Control
     name="phone" 
     onChange={handleOnChange} 
     placeholder="0450757589" />
  </Form.Group>


  <Form.Group className="mb-3">
    <Form.Label>Address</Form.Label>
    <Form.Control 
    name="address" 
     onChange={handleOnChange}
      placeholder="57 eldon street,NSW, 2211" />
  </Form.Group>
  


    
  <Form.Group className="mb-3">
      <Form.Label>Gender</Form.Label>
  <InputGroup>
    <InputGroup.Radio name = "gender"  onChange={handleOnChange} aria-label="Male" defaultValue="male"/>Male
    <InputGroup.Radio name = "gender"   onChange={handleOnChange} aria-label="Female" defaultValue="male"/>Female
    
  </InputGroup>
  </Form.Group>
  <Button type="submit" variant="success">Register</Button>
 
</Form>
<a href ="/registration">Login now</a>
</Card>
            
        </div>
    )
    }
export default Register