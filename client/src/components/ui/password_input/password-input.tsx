import { forwardRef, useState } from "react"
import { TPasswordInputProps } from "./password-input-types"
import classnames from "classnames"
import MaterialIcons from "../icons/material-icons"
import cl from "./password-input.module.css"

const variants = {
	default: cl["input--default"],
	bordered: cl["input--bordered"],
}

const PasswordInput = forwardRef<HTMLInputElement, TPasswordInputProps>(
	(
		{
			InputClassName,
			wrapperClassName,
			labelText,
			variant,
			showPassword,
			...props
		}: TPasswordInputProps,
		ref
	) => {
		const [isShowPassword, setIsShowPassword] = useState<boolean>(false)

		return (
			<fieldset className={classnames(cl["input"], wrapperClassName)}>
				{labelText && (
					<label className={cl["label"]} htmlFor={props.id}>
						{labelText}
					</label>
				)}
				<input
					ref={ref}
					type={isShowPassword ? "text" : "password"}
					className={classnames(
						cl["field"],
						variant && variants[variant],
						InputClassName
					)}
					{...props}
				/>
				<button
					type="button"
					aria-label="show password"
					className={cl["show-password"]}
					onClick={() => setIsShowPassword(!isShowPassword)}
				>
					{isShowPassword ? (
						<MaterialIcons
							name={"MdVisibilityOff"}
							className={cl["icon"]}
						/>
					) : (
						<MaterialIcons
							name={"MdVisibility"}
							className={cl["icon"]}
						/>
					)}
				</button>
			</fieldset>
		)
	}
)

export default PasswordInput
