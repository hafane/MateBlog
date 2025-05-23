import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter } from "react-router"
import RoutesComponent from "./router/routes-component.tsx"
import "normalize.css"
import "./index.css"

const rootElement = document.getElementById("root")!

const root = createRoot(rootElement)

root.render(
	<StrictMode>
		<BrowserRouter>
			<RoutesComponent/>
		</BrowserRouter>
	</StrictMode>
)
