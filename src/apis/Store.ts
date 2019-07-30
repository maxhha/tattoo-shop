import { IStore, StoreSection, StoreItem} from "types";
import Unsplash, {toJson} from "unsplash-js";
import { shuffle } from "lodash";


const COUNT_ITEMS_PER_SECTION = 25;
const COUNT_SECTIONS = 10;

const possibleSectionNames = "Нянька для жесткого дракона<br>Моё наглое путешествие<br>Мой личный квест<br>Пепел умирающей тревоги<br>Жена лютого демона<br>Колледж темных некромантов<br>Громадное молчание<br>Мой талантливый обход<br>Университет мятежных стрелков<br>Сломанная кукла<br>Храбрая буря<br>Потрясающий исход<br>Красивая борьба<br>Храбрый закон<br>Седьмая стена<br>Раскрытие вашей храбрости<br>Небо после крови<br>Возлюбленная последнего герцога<br>Душа потерянного лорда<br>Боль моей апатии".split('<br>');

class Store implements IStore {
    private __sections: string[];
    private __unsplash: any;
    private __database: StoreItem[][];
    private __databaseUpdatePromise: Promise<void>;

    constructor(ACCESS_APP_KEY : string | undefined, APP_SECRET : string | undefined) {

        if (ACCESS_APP_KEY === undefined || APP_SECRET === undefined) {
            throw Error('Unsplash key or secret is undefined');
        }

        this.__unsplash = new Unsplash({
            applicationId: ACCESS_APP_KEY as string,
            secret: APP_SECRET as string
        });

        this.__sections = shuffle(possibleSectionNames).slice(0, COUNT_SECTIONS);
        this.__database = [];

        // sets resolved promise like database updated;
        this.__databaseUpdatePromise = Promise.resolve();
    }

    async updateDatabase(){
        console.log('Updating database...');
        const promise = this.__unsplash
            .search.photos("tattoos", 0, COUNT_ITEMS_PER_SECTION * COUNT_SECTIONS)
            .then(toJson)
            .then((json : any) => {
                const database : StoreItem[][] = [];
                for(let i = 0; i < COUNT_SECTIONS; i++)
                    database.push([]);

                json.results.forEach(
                    ({urls:{raw}, id} : any, i : number) =>
                    database[i % COUNT_SECTIONS].push({id, imageUrl: raw})
                );
                this.__database = database;
                return Promise.resolve();
            });
        return this.__databaseUpdatePromise = promise;
    }
    // This methods supposed to use as fetch db
    // but unsplash has limits on calls to api
    // so store loades database ones
    // and then returns results from local savings
    async getSections() {
        return this.__databaseUpdatePromise.then(() =>
            this.__sections.map((title, i) => {
                return {id: i.toString(), title};
            })
        );
    }

    async getItems({ id } : StoreSection) {
        return this.__databaseUpdatePromise.then(() =>
            this.__database[parseInt(id)].slice()
        )
    }
}

export default Store;
