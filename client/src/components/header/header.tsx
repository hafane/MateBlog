import { Link } from "react-router"
import classnames from "classnames"
import Logo from "../ui/logo/logo"
import Search from "./group/search"
import Theme from "./group/theme"
import cl from "./header.module.css"

const Header = () => {
	return (
		<header className={cl["header-wrapper"]}>
			<div className={classnames(cl["container"], "container")}>
				<Link aria-label="Logo, back to main page" to="/">
					<Logo className="logo" />
				</Link>
				<div className={cl["header-wrapper_content"]}>
					<div className={cl["header-wrapper_group"]}>
						<Search/>
						<Theme/>
					</div>
				</div>
			</div>
		</header>
	)
}

export default Header
