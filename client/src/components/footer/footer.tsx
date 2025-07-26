import { Link } from "react-router"
import { SOCIALS } from "@/constants/data"
import classnames from "classnames"
import cl from "./footer.module.css"
import Logo from "../ui/logo/logo"

const Footer = () => {
	return (
		<footer className={cl["footer"]}>
			<div className={classnames(cl["container"], "container")}>
				<Link to="/">
					<Logo className="logo" />
				</Link>
				<div className={cl["footer_socials"]}>
					{SOCIALS.map(social => (
						<Link className={cl["footer_link"]} key={social.name} to={social.link}>
							{social.name}
						</Link>
					))}
				</div>
			</div>
		</footer>
	)
}

export default Footer
