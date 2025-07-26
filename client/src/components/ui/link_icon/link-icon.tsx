import { Link } from "react-router"
import { TLinkIconProps } from "./link-icon-type"
import MaterialIcons from "../icons/material-icons"
import SocialsIconsFa6 from "../icons/socials/socials-icons"
import cl from "./link-icon.module.css"

const LinkWithIcon = ({
	path,
	iconMaterialName,
	text,
	iconFa6Name,
	...props
}: TLinkIconProps) => {
	return (
		<Link className={cl["link-with-icon"]} to={path} {...props}>
			{iconFa6Name && (
				<SocialsIconsFa6 className={cl["icon"]} name={iconFa6Name} />
			)}
			{iconMaterialName && (
				<MaterialIcons className={cl["icon"]} name={iconMaterialName} />
			)}
			{text && <span className={cl["text"]}>{text}</span>}
		</Link>
	)
}

export default LinkWithIcon
