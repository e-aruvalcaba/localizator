import { Nav } from 'react-bootstrap';
import MenuItem from './menuItem';
import menuItems from '../interfaces/menuitem.interface';
import items from '../data/items.menu';

const itemsMenu: menuItems[] = items;

export const Sideb = () => {
    return <>

        <Nav className="col-lg-12 d-none d-lg-block bg-light sideMenus"
            activeKey="/home"
            onSelect={selectedKey => alert(`selected ${selectedKey}`)}
        >
            <Nav.Item style={itemStyles} className='navegador' >
                {
                itemsMenu.map(function (object) {
                    return <MenuItem key={object.id} data={object}/>                   
                })}
                
            </Nav.Item>
        </Nav>
    </>
}


let itemStyles = {

    color: "black!important",
    textDecoration: "none!important"

};

export default Sideb;