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
    findSection: (sectionId: string) => Promise<StoreSection | null>;
    getItems: (section: StoreSection) => Promise<StoreItem[]>;
    findItem: (itemId: string) => Promise<StoreItem | null>;
}
