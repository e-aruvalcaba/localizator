import { Outlet } from 'react-router-dom';
import { Col, Row } from 'react-bootstrap';
import Navigation from '../components/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Sideb from '../components/sideb';


function Home() {
    // const [count, setCount] = useState(0)

    return (
        <>
            <Row >
                <Navigation />
            </Row>
            <Row>
                <Col style={styles.sidebar} className="d-none d-lg-flex" lg="2" xl="1">
                    <Sideb></Sideb>
                </Col>
                <Col>
                    <Outlet />
                </Col>
            </Row>
        </>
    )
}

let styles = {
    sidebar: {
        width: "220px",
        padding: "0%",
        minHeight: "93dvh"
    }
}

export default Home;