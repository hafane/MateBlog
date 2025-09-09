import { Outlet } from "react-router"
import { observer } from "mobx-react-lite"
import useTheme from "./hooks/useTheme"

const App = observer(() => {
	useTheme()

	return (
		<div className="wrapper">
			<Outlet />
		</div>
	)
})

export default App
