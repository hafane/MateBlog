import HomeAside from "./aside/home-aside"
import HomeMain from "./main/home-main"
import cl from "./home-content.module.css"

const HomeContent = () => {

	return (
		<div className={cl["home-content"]}>
            <HomeMain/>
            <HomeAside/>
        </div>
	)
}

export default HomeContent
