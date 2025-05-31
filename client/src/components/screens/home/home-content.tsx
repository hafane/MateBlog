import HomeAside from "./aside/home-aside"
import cl from "./home-content.module.css"
import HomeMain from "./main/home-main"

const HomeContent = () => {

	return (
		<div className={cl["home-content"]}>
            <HomeMain/>
            <HomeAside/>
        </div>
	)
}

export default HomeContent
