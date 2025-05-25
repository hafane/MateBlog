import { Link } from 'react-router'
import { TLinkIconProps } from './link-icon-type'
import MaterialIcons from '../icons/material-icons'
import cl from "./link-icon.module.css"

const LinkWithIcon = ({path, iconName, text, ...props}: TLinkIconProps) => {
    return (
        <Link className={cl["link-with-icon"]} to={path} {...props}>
            <MaterialIcons className={cl["icon"]} name={iconName} />
            <span className={cl["text"]}>{text}</span>
        </Link>
    );
}

export default LinkWithIcon;
