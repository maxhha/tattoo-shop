export type StoreSection = {
    id: string;
    title: string;
}

export type StoreItem = {
    id: string;
    title: string;
    price: string;
    imageUrl: string;
}

export interface IStore {
    setVersion: (version:string) => void;
    getSections: () => Promise<StoreSection[]>;
    getItems: (arg0: StoreSection) => Promise<StoreItem[]>
}
