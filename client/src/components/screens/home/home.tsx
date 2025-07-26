import HomeAside from "./aside/home-aside"
import HomeMain from "./main/home-main"
import cl from "./home.module.css"

const Home = () => {

	return (
		<div className={cl["home"]}>
            <HomeMain/>
            <HomeAside/>
        </div>
	)
}

export default Home
