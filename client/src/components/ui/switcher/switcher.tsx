import { ComponentProps } from "react"
import cl from "./switcher.module.css"

const Switcher = ({...props}: ComponentProps<"input">) => {
	return (
		<label
			className={cl["switcher"]}
			data-checked={props.checked ? "true" : "false"}
		>
			<input className={cl["switcher_input"]} type="checkbox" role="switch" tabIndex={0} {...props} />
			<span className={cl["switcher_slider"]}>
				<span className={cl["switcher_slider-circle"]}></span>
			</span>
		</label>
	)
}

export default Switcher
