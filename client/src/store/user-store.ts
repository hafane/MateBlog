import { makeAutoObservable } from "mobx"

class UserStore {
    private isAuth = false

    constructor() {
        makeAutoObservable(this)
    }

    get isUserAuth() {
        return this.isAuth
    }

    setIsAuth(value: boolean) {
        this.isAuth = value
    }
}

export const userStore = new UserStore()