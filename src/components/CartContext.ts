import { createContext } from "react";

import { StoreItem } from "types";

interface CartState {
    items: StoreItem[]
}

interface ActionAdd {
    type: 'add'
    item: StoreItem
}

interface ActionRemove {
    type: 'remove'
    id: string
}

type Action = ActionAdd | ActionRemove;

export const CartReducer = (state : CartState, action : Action) => {
    switch(action.type){
        case 'add':
            return {
                ...state,
                items: [...state.items, action.item]
            }
        case 'remove':
            return {
                ...state,
                items: state.items.filter(i => i.id !== action.id)
            }
    }
};

type ContextType = [CartState, React.Dispatch<Action>];

const initialState : ContextType = [
    {items: []},
    (_a) => {}
]

export default createContext<ContextType>(initialState);
