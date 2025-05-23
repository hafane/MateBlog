import cl from "../list.module.css"

const ListItem = ({ children, ...props }: React.ComponentProps<"li">) => {
	return (
		<li className={cl["list-item"]} {...props}>
			<div className={cl["item-content"]}>{children}</div>
		</li>
	)
}

export default ListItem
