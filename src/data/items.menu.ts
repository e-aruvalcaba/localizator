import menuItems from "../interfaces/menuitem.interface";
import { faBarChart, faCalendarDay, faGear, faHamburger, faHouse, faListCheck, faUser } from '@fortawesome/free-solid-svg-icons';

const items: menuItems[] = [{
    id: 1,
    name: "Home",
    path: "/home",
    icon: faHouse
}, {
    id: 2,
    name: "Users",
    path: "/users",
    icon: faUser
}, {
    id: 3,
    name: "Analytics",
    path: "/analytics",
    icon: faBarChart
}, {
    id: 4,
    name: "Eats",
    path: "/eat",
    icon: faHamburger
}, {
    id: 5,
    name: "Calendar",
    path: "/home",
    icon: faCalendarDay
}, {
    id: 6,
    name: "ToDo",
    path: "/todo",
    icon: faListCheck
}, {
    id: 7,
    name: "Settings",
    path: "/settings",
    icon: faGear
}];

export default items;