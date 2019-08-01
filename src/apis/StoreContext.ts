import {createContext, Context} from 'react';
import { IStore, StoreSection, StoreItem } from 'types';

const StoreContext : Context<IStore> = createContext({
    setVersion: (_v:string) => {},
    getSections: () => Promise.resolve([] as StoreSection[]),
    getItems: (_s : StoreSection) => Promise.resolve([] as StoreItem[])
});

export default StoreContext;
