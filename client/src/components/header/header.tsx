import { Link } from "react-router"
import { PAGE_PATHS } from "@/utils/constants/consts"
import classnames from "classnames"
import Logo from "../ui/logo/logo"
import Search from "./group/search"
import Theme from "./group/theme"
import Write from "./group/write"
import UserMenu from "./group/user_menu/user-menu"
import cl from "./header.module.css"

const Header = () => {
	return (
		<header className={cl["header"]}>
			<div className={classnames(cl["container"], "container")}>
				<div className={cl["header-left"]}>
					<Link aria-label="Logo, back to main page" to={PAGE_PATHS.home}>
						<Logo className="logo" />
					</Link>
					<Search />
				</div>
				<div className={cl["header-right"]}>
					<Write/>
					<UserMenu/>
					<Theme />
				</div>
			</div>
		</header>
	)
}

export default Header
