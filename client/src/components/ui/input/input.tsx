import MaterialIcons from "../icons/material-icons"
import { TInputProps } from "./input-type"
import classnames from "classnames"
import cl from "./input.module.css"

const Input = ({
	Icon,
	IconClassName,
	InputClassName,
	labelText,
	...props
}: TInputProps) => {
	return (
		<label className={cl["input"]} htmlFor={props.id}>
			{labelText}
			<input
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

export default Input
