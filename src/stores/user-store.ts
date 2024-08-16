import { makeAutoObservable } from "mobx";

export interface UserStore {
    username?: string;
}

export class UserStoreClass {
    data: UserStore = {};

    constructor() {
        makeAutoObservable(this);
    }

    setData(data: UserStore) {
        this.data = data;
    }
}

export const userStore = new UserStoreClass();
