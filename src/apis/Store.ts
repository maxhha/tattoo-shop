import { IStore } from "types";
import { shuffle } from "lodash";

const possibleSectionNames = [
    "Могущественные силы полубогов",
    "Возлюбленная мятежного дракона",
    "Черная стена"
];

class Store implements IStore {
    private sections: string[];

    constructor() {
        this.sections = shuffle(possibleSectionNames);
    }

    async getSections() {
        return Promise.resolve(
            this.sections.map((title, i) => {
                return {id: i.toString(), title};
            })
        );
    }
}

export default Store;
