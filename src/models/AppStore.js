import { observable } from "mobx";
const alphabets = Array.from("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
export class AppStore {
    @observable alphabets = alphabets;
    @observable indes = [...Array(alphabets.length).keys()];
    @observable currentIndex = 0;
}