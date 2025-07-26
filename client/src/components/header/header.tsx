import { useEffect, useRef } from "react"
import { Link } from "react-router"
import { PagePath } from "@/utils/page-path-config"
import classnames from "classnames"
import Logo from "../ui/logo/logo"
import Search from "./group/search"
import Theme from "./group/theme"
import Write from "./group/write"
import UserMenu from "./group/user_menu/user-menu"
import cl from "./header.module.css"

const Header = () => {
	const ref = useRef<HTMLDivElement>(null)

	useEffect(() => {
		const handleScroll = () => {
			if (ref) {
				if (window.scrollY > ref.current!.offsetHeight) {
					ref.current?.classList.add(cl["scrolled"])
				} else {
					ref.current?.classList.remove(cl["scrolled"])
				}
			}
		}
		window.addEventListener("scroll", handleScroll)
		return () => window.removeEventListener("scroll", handleScroll)
	}, [])

	return (
		<header ref={ref} className={cl["header"]}>
			<div className={classnames(cl["container"], "container")}>
				<div className={cl["header-left"]}>
					<Link aria-label="Logo, back to main page" to={PagePath.home}>
						<Logo className="logo" />
					</Link>
					<Search />
				</div>
				<div className={cl["header-right"]}>
					<Write />
					<UserMenu />
					<Theme />
				</div>
			</div>
		</header>
	)
}

export default Header
