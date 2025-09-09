import { CheckboxProps } from "./checkbox-type"
import classnames from "classnames"
import MaterialIcons from "../icons/material-icons"
import cl from "./checkbox.module.css"

const Checkbox = ({
	label,
	checked,
	onChange,
	boxClassName,
	variant,
	value,
}: CheckboxProps) => {
	const variants = {
		default: cl["checkbox--default"],
		bordered: cl["checkbox--bordered"],
	}

	return (
		<label
			htmlFor={`checkbox-${label}`}
			className={classnames(cl["checkbox"], boxClassName)}
		>
			<span
				className={classnames(
					cl["checkbox-button"],
					variant && variants[variant]
				)}
			>
				<input
					onClick={onChange}
					id={`checkbox-${label}`}
					type="checkbox"
					value={value}
					aria-checked={checked}
					role="checkbox"
				/>
				{checked && (
					<MaterialIcons name="MdLibraryAddCheck" className={cl["checkbox-icon"]} />
				)}
			</span>
			{label}
		</label>
	)
}

export default Checkbox
