import { Menu } from "semantic-ui-react";
import "./Header.scss";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router"


export default function Header() {

    const CurrentPath = useLocation();
    const finalCurrentPath = CurrentPath.pathname.replace("/", "");

    const [activeItem, setActiveItem] = useState(finalCurrentPath);

    const navigate = useNavigate();

    const handleItemClick = (e, { name }) => {
        console.log(finalCurrentPath);
        setActiveItem(name);
        navigate("/" + name);
    }

    return (
        <div className="header-menu">
            <Menu secondary>
                <Menu.Item active={activeItem === 'inicio'} name="inicio" onClick={handleItemClick} />
                <Menu.Item active={activeItem === 'series'} name="series" onClick={handleItemClick} />
                <Menu.Item active={activeItem === 'comics'} name="comics" onClick={handleItemClick} />
            </Menu>
            {/* <p>Header</p> */}
        </div>
    )

}