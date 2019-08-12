import { IStore, StoreSection, StoreItem} from "types";
import Unsplash, {toJson} from "unsplash-js";
import { sample, capitalize } from "lodash";

type LocalDatabase = {
    sections: StoreSection[];
    items: {[sectionId: string]: StoreItem[]};
}


const COUNT_ITEMS_PER_SECTION = 25;
const COUNT_SECTIONS = 10;

const sectionNames = "Популярные;Новые;Яркие;Популярные у девушек;Популярные у мужчин;Детские;Черные;Стойкие;Крупные;Со смыслом".split(";");
const tattooAdjective = ";Глубинн ыйай;Высок ийая;Широк ийая;Сильн ыйая;Крепк ийая;Узк ийая;Длинн ыйая;Колюч ийая;Немыслим ыйая;Абстрактн ыйая;Холодн ыйая;Горяч ыйая;Мрачн ыйая;Черн ыйяя;Кровав ыйая;Млечн ыйая;Бесконечн ыйая;Весёл ыйая;Светл ыйая".split(';')
const tattooNoun = "м день;м джек;м путь;м Бог;м конёк;м крест;ж коса;ж головоломка;ж загадка;ж бабочка;м череп;м гроб;м цветок;ж ваза;м маяк;м дракон;м кот;ж птичка;ж пиратка;м пират;м бриллиант".split(';')

function getRandomTattooName(): string{
    const adj = sample(tattooAdjective) as string;
    const noun = sample(tattooNoun) as string;
    return capitalize((adj.replace(/.(..)(..)$/, noun[0] === "м" ? "$1" : "$2")
        + noun.replace(/[мж]/, "")
    ).trim());
}

function getRandomTattooPrice() : number {
    return (Math.floor(Math.random()*60 + 2)*25)
}

class Store implements IStore {
    private __unsplash: any;
    private __database: LocalDatabase | undefined;
    private __databaseLoadPromise: Promise<void>;

    constructor(
        ACCESS_APP_KEY : string | undefined,
        APP_SECRET : string | undefined,
        private __version? : string | undefined
    ) {

        if (ACCESS_APP_KEY === undefined || APP_SECRET === undefined) {
            throw Error('Unsplash key or secret is undefined');
        }

        this.__unsplash = new Unsplash({
            applicationId: ACCESS_APP_KEY as string,
            secret: APP_SECRET as string
        });

        this.__databaseLoadPromise = this.__loadDatabase();
    }

    setVersion = (v:string) => {
        if (this.__version === v)
            return;
        this.__version = v;
        this.__databaseLoadPromise = this.__loadDatabase();
    }

    private async __loadDatabase(){
        let database = this.__getDatabaseFromLocalStorage();
        if (database) {
            console.log('Database was loaded from localStorage.')
            this.__database = database;
            return Promise.resolve();
        } else {
            console.log('Loading database from server...');
            const promise = this.__loadDatabaseFromService();
            promise.then(() => this.__saveDatabaseToLocalStorage())
            return promise;
        }
    }

    private __getDatabaseFromLocalStorage() : LocalDatabase | undefined{
        let db;
        try {
            db = localStorage.getItem('db') || "{}";
            db = JSON.parse(db);
        } catch(e) {
            console.error(e);
            db = {};
        }
        if (!this.__version) {
            this.__version = db.v;
        }
        const isTargetVersion = ("v" in db && db.v === this.__version);
        if ("data" in db && isTargetVersion) {
            return db["data"];
        }
        return undefined;
    }

    private __saveDatabaseToLocalStorage() {
        try {
            let db = JSON.stringify({"data": this.__database, "v": this.__version});
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
                const database : LocalDatabase = {
                    sections: [],
                    items: {},
                }

                for(let i = 0; i < COUNT_SECTIONS; i++) {
                    const sectionId = i.toString()
                    database.sections.push({
                        id: sectionId,
                        title: sectionNames[i]
                    });
                    database.items[sectionId] = [];
                }

                json.results.forEach(
                    ({urls:{raw}, id} : any, i : number) => {
                        const sectionId = database.sections[i % COUNT_SECTIONS].id;

                        database.items[sectionId].push({
                            id,
                            imageUrl: raw,
                            title: getRandomTattooName(),
                            price: getRandomTattooPrice(),
                        });
                    }
                );
                this.__database = database;
                return Promise.resolve();
            }).catch((e : Error) => {
                console.error(e);
                return Promise.resolve();
            });
    }
    // This methods supposed to use as fetch db
    // but unsplash has limits on calls to api
    // so store loades database ones
    // and then returns results from local savings
    getSections = async () => {
        return this.__databaseLoadPromise.then(() =>
            this.__database ? this.__database.sections : []
        );
    }

    findSection = async (id: string) => {
        return  this.__databaseLoadPromise.then(() => {
            const section = this.__database && (
                this.__database.sections
                    .find(section => section.id === id)
            );
            return section || null;
        });
    }

    getItems = async ({id} : StoreSection) => {
        return this.__databaseLoadPromise.then(() =>
            this.__database ? this.__database.items[id] : []
        )
    }

    findItem = async (id:string) => {
        return  this.__databaseLoadPromise.then(() => {
            const item = this.__database && (
                Object.values(this.__database.items)
                    .flat()
                    .find(item => item.id === id)
            );
            return item || null;
        });
    }
}

export default Store;
