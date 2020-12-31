import { observable } from "mobx";
import shuffle from 'shuffle-array'
const alphabets = Array.from("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
const maxInt = 20;
const integers = [...Array(maxInt + 1).keys()];
export class AppStore {
    @observable alphabets = alphabets;
    @observable shuffledAlphabets = shuffle(alphabets, {'copy': true});
    @observable indes = [...Array(alphabets.length).keys()];
    @observable currentIndex = 0;
    @observable integers = integers;
    @observable numberIndecs = [...Array(integers.length).keys()];
    @observable currentIntegerIndex = 0;
    @observable minInt = 0;
    @observable maxInt = 20;

    resetAlphabetIndecs(reshuffle) {
        if (reshuffle === true) {
            this.shuffledAlphabets = shuffle(alphabets, {'copy': true});
        }
        this.currentIndex = 0;
    }

    resetIntegerIndecs() {
        this.integers = [...Array(this.maxInt + 1).keys()];
        this.numberIndecs = [...Array(this.integers.length).keys()];
        this.currentIntegerIndex = 0
    }
}