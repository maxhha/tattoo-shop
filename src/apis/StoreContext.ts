import {createContext, Context} from 'react';
import { IStore } from 'types';

const StoreContext : Context<IStore> = createContext({} as IStore);

export default StoreContext;
