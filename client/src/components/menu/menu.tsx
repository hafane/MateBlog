import { useEffect } from "react"
import cl from "./menu.module.css"

const Menu = ({
	children,
	isOpen,
	onClose,
}: {
	children: React.ReactNode
	isOpen: boolean
	onClose: (isOpen: boolean) => void
}) => {
	useEffect(() => {
		if(isOpen) {
			document.body.style.overflow = "hidden"	
		} else {
			document.body.style.overflow = "auto"
		}
	}, [isOpen])

	if (!isOpen) return null

	return (
		<div className={cl["menu"]}>
			<div
				onClick={() => onClose(false)}
				className={cl["menu-background"]}
			></div>
			<div className={cl["menu-body"]}>
				<ul role="menu" className={cl["menu-list"]}>
					{children}
				</ul>
			</div>
		</div>
	)
}

export default Menu
