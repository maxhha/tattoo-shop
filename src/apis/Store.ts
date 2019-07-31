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
    private __databaseLoadPromise: Promise<void>;

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

        // sets resolved promise like database was updated;
        this.__databaseLoadPromise = Promise.resolve();
    }

    async updateDatabase(){

        let database = this.__getDatabaseFromLocalStorage();
        if (database.length > 0) {
            console.log('Database was loaded from localStorage.')
            this.__database = database;
            return this.__databaseLoadPromise = Promise.resolve();
        } else {
            console.log('Loading database from server...');
            const promise = this.__loadDatabaseFromService();
            promise.then(() => this.__saveDatabaseToLocalStorage())
            return this.__databaseLoadPromise = promise;
        }
    }

    private __getDatabaseFromLocalStorage() : StoreItem[][]{
        let db;
        try {
            db = localStorage.getItem('db') || "{}";
            db = JSON.parse(db);
        } catch(e) {
            console.error(e);
            db = {};
        }

        if ("data" in db) {
            return db["data"];
        }
        return [];
    }

    private __saveDatabaseToLocalStorage() {
        try {
            let db = JSON.stringify({"data": this.__database});
            localStorage.setItem('db', db);
        } catch (e) {
            console.error(e);
        }
    }

    private async __loadDatabaseFromService() : Promise<void> {
        return this.__unsplash
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
    }
    // This methods supposed to use as fetch db
    // but unsplash has limits on calls to api
    // so store loades database ones
    // and then returns results from local savings
    async getSections() {
        return this.__databaseLoadPromise.then(() =>
            this.__sections.map((title, i) => {
                return {id: i.toString(), title};
            })
        );
    }

    async getItems({ id } : StoreSection) {
        return this.__databaseLoadPromise.then(() =>
            this.__database[parseInt(id)].slice()
        )
    }
}

export default Store;
