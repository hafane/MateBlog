import { ChangeEvent, useEffect, useState } from "react"
import { CheckboxProps } from "./checkbox-type"
import classnames from "classnames"
import MaterialIcons from "../icons/material-icons"
import cl from "./checkbox.module.css"

const Checkbox = ({
	label,
	checked = false,
	onChange,
	value,
	name,
	inputClassNames,
	labelClassNames,
	checkboxClassNames,
	...props
}: CheckboxProps) => {
	const [isCheck, setIsCheck] = useState<boolean>(false)

	const toggle = (e: ChangeEvent<HTMLInputElement>) => {
		if (props.disabled) return

		setIsCheck(!isCheck)
		onChange && onChange(e)
	}

	useEffect(() => {
		setIsCheck(checked)
	}, [checked])

	return (
		<label
			htmlFor={`checkbox-${name}`}
			className={classnames(cl["checkbox"], props.disabled && cl["disabled"], checkboxClassNames)}
		>
			<span
				className={classnames(cl["checkbox-button"], isCheck && cl["checked"], props.disabled && cl["disabled"])}
			>
				<input
					className={classnames(cl["checkbox-input"], inputClassNames)}
					onChange={toggle}
					checked={isCheck}
					id={`checkbox-${name}`}
					type="checkbox"
					value={value}
					aria-checked={isCheck}
					role="checkbox"
					{...props}
				/>
				{!isCheck && (
					<MaterialIcons
						name="MdCheckBoxOutlineBlank"
						className={cl["checkbox-icon"]}
					/>
				)}
				{isCheck && (
					<MaterialIcons name="MdCheckBox" className={cl["checkbox-icon"]} />
				)}
			</span>
			<span className={classnames(cl["checkbox-label"], props.disabled && cl["disabled"], labelClassNames)}>{label}</span>
		</label>
	)
}

export default Checkbox
