import cl from "./loader.module.css"

const Loader = () => {
    return (
        <div className={cl["squares"]}>
            <div className={cl["square"]} id={cl["square1"]}></div>
            <div className={cl["square"]} id={cl["square2"]}></div>
            <div className={cl["square"]} id={cl["square3"]}></div>
            <div className={cl["square"]} id={cl["square4"]}></div>
            <div className={cl["square"]} id={cl["square5"]}></div>
            <div className={cl["square"]} id={cl["square6"]}></div>
            <div className={cl["square"]} id={cl["square7"]}></div>
            <div className={cl["square"]} id={cl["square8"]}></div>
            <div className={cl["square"]} id={cl["square9"]}></div>
        </div>
    );
}

export default Loader;
