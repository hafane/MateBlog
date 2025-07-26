import HomeHead from "./head/home-head"
import HomeContent from "./content/home-content"
import BottomTrigger from "@/components/bottom_trigger/bottom-trigger"
import cl from "./home-main.module.css"

const HomeMain = () => {
	return (
		<main className={cl["main"]}>
			<HomeHead />
			<HomeContent/>
			<BottomTrigger/>
		</main>
	)
}

export default HomeMain
