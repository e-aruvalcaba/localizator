import { Col, Row, Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";


const AddUser = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = (data: any) => {
        console.log(data);
    }
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
                            <Form.Control type="text" placeholder="pececito666" {...register('username')} />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextName">
                        <Form.Label column md="2">
                            Name
                        </Form.Label>
                        <Col md="10">
                            <Form.Control type="text" placeholder="pececito666" {...register('name')} />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextLastname">
                        <Form.Label column md="2">
                            Lastname
                        </Form.Label>
                        <Col md="10">
                            <Form.Control type="text" placeholder="pececito666" {...register('lastname')} />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                        <Form.Label column md="2">
                            Email
                        </Form.Label>
                        <Col md="10">
                            <Form.Control type="text" placeholder="email@something.com" {...register('email')} />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                        <Form.Label column md="2">
                            Password
                        </Form.Label>
                        <Col md="10">
                            <Form.Control type="password" placeholder="Password" {...register('password')} />
                        </Col>
                    </Form.Group>
                    <div className="d-flex justify-content-end"> <Button variant="outline-dark" style={styles.logButton} type="submit">Add User</Button> </div>
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


export default AddUser;