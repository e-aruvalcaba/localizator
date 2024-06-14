import menuItems from "../interfaces/menuitem.interface";
import { faBarChart, faCalendarDay, faGear, faHamburger, faListCheck, faUser } from '@fortawesome/free-solid-svg-icons';

const items: menuItems[] = [{
    id: 1,
    name: "Users",
    path: "/users",
    icon: faUser
}, {
    id: 2,
    name: "Analytics",
    path: "/analytics",
    icon: faBarChart
}, {
    id: 3,
    name: "Calendar",
    path: "/calendar",
    icon: faCalendarDay
}, {
    id: 4,
    name: "ToDo",
    path: "/todo",
    icon: faListCheck
}, {
    id: 5,
    name: "Settings",
    path: "/settings",
    icon: faGear
}];

export default items;