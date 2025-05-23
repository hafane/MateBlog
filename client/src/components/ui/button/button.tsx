import { ButtonPropsType } from "./button-type"
import classnames from "classnames"
import cl from "./button.module.css"

const Button = ({ className, children, ...props }: ButtonPropsType) => {
	return (
		<button className={classnames(cl["button"], className)} {...props}>
			{children}
		</button>
	)
}

export default Button
