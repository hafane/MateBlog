import { forwardRef } from "react"
import { TInputProps } from "./input-type"
import MaterialIcons from "../icons/material-icons"
import classnames from "classnames"
import cl from "./input.module.css"

const Input = forwardRef<HTMLInputElement, TInputProps>(
	({ Icon, IconClassName, InputClassName, labelText, ...props }, ref) => {
		return (
			<label className={cl["input"]} htmlFor={props.id}>
				{labelText}
				<input
					ref={ref}
					type="text"
					className={classnames(cl["field"], InputClassName)}
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
			</label>
		)
	}
)

export default Input
