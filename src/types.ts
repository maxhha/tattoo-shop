export type StoreSection = {
    id: string;
    title: string;
}

export interface IStore {
    getSections: () => Promise<StoreSection[]>;
}
