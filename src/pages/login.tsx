import { useEffect } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useLocation } from "react-router-dom";

const Login = () => {
    // const [pathname, setPath] = useState(null);

    useEffect(() => {
        console.log(pathname);
    }, [onsubmit])
    const { register, handleSubmit } = useForm();
    const location = useLocation();

    const { pathname } = location;

    const getLocation = () => {
        console.log(pathname);
    }

    const onSubmit = (data: any) => {
        console.log(data);
        console.log(pathname);
    }


    return (
        <Row className="justify-content-center align-items-center backImg" style={styles.center}>
            <Col xs={10} md={9} lg={8} xxl={6} style={styles.back}>
                <h2 className="d-flex justify-content-center" style={styles.title}>LOGIN</h2>
                <Form onSubmit={handleSubmit(onSubmit)}>
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
                    <div className="d-flex justify-content-end"> <Button variant="outline-dark" style={styles.logButton} type="submit">Iniciar</Button> </div>
                    <div className="d-flex justify-content-end pt-3"> <p>Forgot Password?</p> </div>
                </Form>
            </Col>
        </Row>
    );
}

const styles = {
    center: {
        margin: "auto",
        border: "3px",
        padding: "10px",
        height: "100dvh"
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

export default Login;


/**
    * pathname: the part that comes after the domain name, e.g., /products.
       search: the query string, e.g., ?id=5.
       hash: the hash, e.g., #pricing.
    */