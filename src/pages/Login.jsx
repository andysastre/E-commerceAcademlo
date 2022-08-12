import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useForm } from 'react-hook-form';
import "../style/login.css"
import axios from "axios"
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const { register, handleSubmit, reset } = useForm();
    const navigate = useNavigate();






    const submit = data => {

        axios.post('https://ecommerce-api-react.herokuapp.com/api/v1/users/login', data)
            .then(res => {navigate("/")
            
            localStorage.setItem("token", res.data.data.token)
            console.log(res.data.data.token)
        })

            .catch(error => {
                if (error.response.status === 401, 402, 403, 404) {
                    alert("Credenciales inválidas")
                }

                console.log(error.response)
            })

        reset({
            email: "",
            password: ""

        })
        console.log(data)
    }


    return (
        <section>
            <article className='login_container'>
                <h1>Solo Cogo Company</h1>
                <div className='login'>
                    <Form onSubmit={handleSubmit(submit)}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email"  {...register("email")} />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" {...register("password")} />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </div>
            </article>
        </section>
    );
};

export default Login;