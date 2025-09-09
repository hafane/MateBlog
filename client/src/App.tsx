import { Suspense } from "react"
import { Outlet } from "react-router"
import { observer } from "mobx-react-lite"
import useTheme from "@hooks/useTheme"
import Loader from "@components/loader/loader"

const App = observer(() => {
	useTheme()

	return (
		<div className="wrapper">
			<Suspense fallback={<Loader/>}>
				<Outlet />
			</Suspense>
		</div>
	)
})

export default App
