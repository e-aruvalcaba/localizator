import { Col } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import menuItems from '../interfaces/menuitem.interface';
import { Link } from "react-router-dom";


// type props = {items: menuItems};

const MenuItem = ({ data }: { data: menuItems }) => {
    return (<>
        <Col key={data.id}>
            <Link to={data.path}>
                <div style={style.link}><FontAwesomeIcon icon={data.icon} style={style.iconMrgn} /> {data.name}</div>
            </Link>
        </Col>
    </>);
}

const style = {
    link: {
        textDecoration: "none",
        color: "black!important",
        display: "block",
        padding: "10px",
        fontSize: "17px",
        fontWeight: "400",
        background: "0 0",
        border: "0",
        transition: "color .5s ease-in-out, background-color .5s ease-in-out, border-color .5s ease-in-out",
    },
    iconMrgn: {
        marginRight: "5px"
    }
}

export default MenuItem;