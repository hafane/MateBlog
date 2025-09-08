import { forwardRef } from "react"
import { TInputProps } from "./input-type"
import MaterialIcons from "../icons/material-icons"
import classnames from "classnames"
import cl from "./input.module.css"

const Input = forwardRef<HTMLInputElement, TInputProps>(
	({ Icon, variant, IconClassName, InputClassName, labelText, wrapperClassName, ...props }, ref) => {

		const variants = {
			default: cl["input--default"],
			bordered: cl["input--bordered"],
		}
		

		return (
			<fieldset className={classnames(cl["input"], wrapperClassName)} >
				{labelText && <label htmlFor={props.id}>{labelText}</label>}
				<input
					id={props.id}
					ref={ref}
					type="text"
					className={classnames(cl["field"], variant && variants[variant], InputClassName)}
					{...props}
				/>
				{Icon && (
					<span className={cl["icon-wrapper"]}>
						<MaterialIcons
							name={Icon}
							className={classnames(cl["icon"], IconClassName)}
						/>
					</span>
				)}
			</fieldset>
		)
	}
)

export default Input
