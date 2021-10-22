import React from 'react'
import { Card, Form, InputGroup, Button } from 'react-bootstrap'

 const Login = () => {
    return (
        <div className="register-page">
        <Card className= "p-3 reg-form">
            <h2 className="text-center">Login new user</h2>
            <hr />
        <Form>

<Form.Group className="mb-3">
<Form.Label>Email</Form.Label>
<Form.Control name="email" type="email" placeholder="your email, please" required/>
</Form.Group>

<Form.Group className="mb-3">
<Form.Label>Password</Form.Label>
<Form.Control name="password"  type="password" placeholder="secret" required />
</Form.Group>

<Form.Group className="mb-3">
<InputGroup>
<InputGroup.Radio name = "gender" aria-label="Male"/>Male
<InputGroup.Radio name = "gender" aria-label="Female" />Female

</InputGroup>
</Form.Group>
<Button variant="success">Login</Button>

</Form>

</Card>
        
    </div>
    )
}
export default Login
