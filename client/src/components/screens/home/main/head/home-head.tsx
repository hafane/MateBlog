import { useState } from "react"
import { HOME_TABS } from "@/constants/data"
import classnames from "classnames"
import Button from "@/components/ui/button/button"
import cl from "./home-head.module.css"

const HomeHead = () => {
	const [active, setActive] = useState<string>("latest")

	return (
		<div className={cl["tabs-wrapper"]}>
			<div className={cl["tabs"]} role="tablist">
				{HOME_TABS.map(tab => (
					<Button
						key={tab.id + tab.name}
						role="tab"
						type="button"
						aria-selected={active === tab.name}
						aria-label={`Change Post Tab to ${tab.name}`}
						onClick={() => setActive(tab.name)}
						className={classnames(
							cl["tab"],
							active === tab.name && cl["tab--active"]
						)}
					>
						{tab.name}
					</Button>
				))}
			</div>
		</div>
	)
}

export default HomeHead
