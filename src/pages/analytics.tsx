import { Col, Container, Row } from "react-bootstrap";
import LineCharts from "../components/lineChart";
import PieCharts from "../components/pieChart";
import AreaCharts from "../components/areaChart";
import ComposedCharts from "../components/composedChart";
import RadarCharts from "../components/radarChart";
import BiaxialCharts from "../components/biaxialChart";

const Analitycs = () => {
    return <ComposedCharts/>;
    
    // <Container>
    
    //     <Col xs={12} lg={12}> <AreaCharts/></Col>
    //     <Col xs={12} lg={12}> <LineCharts/></Col>
    //     <Col xs={12} lg={12}> <ComposedCharts/></Col>
    //     <Col xs={12} lg={12}> <RadarCharts/></Col>
    //     <Col xs={12} lg={12}> <BiaxialCharts/></Col>
    // </Container>
}

export default Analitycs;