import React from "react";
import { Button } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import {useNavigate} from "react-router-dom";


function Auth(){
    const navigate=useNavigate();
   const Login=()=>{
        navigate("/profile");
    }
    return(
    <div className="Auth">
    <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
         We'll never share your email with anyone else.
        </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Name:</Form.Label>
        <Form.Control as="textarea" rows={1} col={1} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Phone:</Form.Label>
        <Form.Control as="textarea" rows={1} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Batch:</Form.Label>
        <Form.Control as="textarea" rows={1} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Qualification:</Form.Label>
        <Form.Control as="textarea" rows={1} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Year of Passing:</Form.Label>
        <Form.Control as="textarea" rows={1} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Year of Experience:</Form.Label>
        <Form.Control as="textarea" rows={1} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Notice Period:</Form.Label>
        <Form.Control as="textarea" rows={1} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Github Url:</Form.Label>
        <Form.Control as="textarea" rows={1} />
      </Form.Group>
      <Button>Register</Button>
    </Form>
    <p>Already have an account</p>
    <button onClick={()=>Login()}>Login</button>
    </div>
    )
}

export default Auth;