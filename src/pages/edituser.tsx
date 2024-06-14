import { useEffect } from "react";
import { Col, Row, Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";


const EditUser = ({userid}: {userid: number}) => {
    const { register, handleSubmit } = useForm();

    const onSubmit = (data: any) => {
        console.log("edit user with data: " + data);
    }


    useEffect(()=>{ 
        console.log("get usuario");
    }, [])


    return <>
        <Row className="justify-content-center align-items-center " style={styles.center}>
            <Col xs={10} md={9} lg={8} xxl={6} style={styles.back}>
                <h2 className="d-flex justify-content-center" style={styles.title}>NEW USER</h2>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextUsername">
                        <Form.Label column md="2">
                            Username
                        </Form.Label>
                        <Col md="10">
                            <Form.Control type="text" placeholder="pececito666" value={"username"} {...register('username')} />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextName">
                        <Form.Label column md="2">
                            Name
                        </Form.Label>
                        <Col md="10">
                            <Form.Control type="text" placeholder="pececito666" value={"name"} {...register('name')} />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextLastname">
                        <Form.Label column md="2">
                            Lastname
                        </Form.Label>
                        <Col md="10">
                            <Form.Control type="text" placeholder="pececito666" value={"lastname"} {...register('lastname')} />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                        <Form.Label column md="2">
                            Email
                        </Form.Label>
                        <Col md="10">
                            <Form.Control type="text" placeholder="email@something.com" value={"email@email.com"} {...register('email')} />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                        <Form.Label column md="2">
                            Password
                        </Form.Label>
                        <Col md="10">
                            <Form.Control type="password" placeholder="Password" value={"pass"} {...register('password')} />
                        </Col>
                    </Form.Group>
                    <div className="d-flex justify-content-end"> <Button variant="outline-dark" style={styles.logButton} type="submit">Edit User</Button> </div>
                </Form>
            </Col>
        </Row>
    </>
}

const styles = {
    center: {
        // margin: "auto",
        // border: "3px",
        padding: "10px",
        // height: "100dvh"
    },
    back: {
        backgroundColor: "#f8f9fa",
        padding: "3em",
        borderRadius: "10px",
    },
    title: {
        marginBottom: "30px"
    },
    logButton: {
        width: "150px",
    }
}


export default EditUser;