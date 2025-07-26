import { ButtonPropsType } from "./button-type"
import classnames from "classnames"
import cl from "./button.module.css"

const Button = ({ className, children, variant, ...props }: ButtonPropsType) => {

	const variants = {
		primary: cl["button--primary"],
		secondary: cl["button--secondary"],
	}

	return (
		<button className={classnames(cl["button"], variant && variants[variant], className)} {...props}>
			{children}
		</button>
	)
}

export default Button
