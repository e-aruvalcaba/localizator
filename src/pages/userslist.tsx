import { Button, Row, Table } from "react-bootstrap";
import { Link } from "react-router-dom";

const UserList = () => {

    return (
        <Row className="p-3">
            <div className="d-flex justify-content-end mb-3">
                <Link to={'/adduser'}>
                    <Button className="btnStandardSize">Agregar Usuario</Button>
                </Link>;
            </div>
            <Table striped>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Username</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td colSpan={2}>Larry the Bird</td>
                        <td>@twitter</td>
                    </tr>
                </tbody>
            </Table>
        </Row>
    );
};

export default UserList;