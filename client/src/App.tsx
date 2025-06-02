import { Outlet } from "react-router"
import { observer } from "mobx-react-lite"
import { themeStore } from "./store/theme-store"
import { userStore } from "./store/user-store"
import classnames from "classnames"
import Header from "@/components/header/header"

const App = observer(() => {

	const auth = userStore.isUserAuth

	return (
		<div className={classnames(themeStore.isDark === "dark" ? "dark" : "light", "wrapper")}>
			<Header />
			<div className="container">
				<Outlet context={auth} />
			</div>
		</div>
	)
})

export default App
