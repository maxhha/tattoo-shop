export type StoreSection = {
    id: string;
    title: string;
}

export type StoreItem = {
    id: string;
    imageUrl: string;
}

export interface IStore {
    getSections: () => Promise<StoreSection[]>;
    getItems: (arg0: StoreSection) => Promise<StoreItem[]>
}
