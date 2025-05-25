import cl from "./menu.module.css"

const Menu = ({
	children,
	isOpen,
}: {
	children: React.ReactNode
	isOpen: boolean
}) => {
	if (!isOpen) return null

	return (
		<div className={cl["menu"]}>
			<div className={cl["menu-body"]}>
				<ul role="menu" className={cl["menu-list"]}>
					{children}
				</ul>
			</div>
		</div>
	)
}

export default Menu
