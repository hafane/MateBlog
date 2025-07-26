import classnames from "classnames"
import cl from "./list.module.css"

const List = ({ children, className, ...props }: React.ComponentProps<"ul">) => {
	return (
		<ul {...props} role="list" className={classnames(cl["list"], className)}>
			{children}
		</ul>
	)
}

export default List
