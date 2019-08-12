import { createContext } from "react";

import { StoreItem, CartItem } from "types";

interface CartState {
    items: CartItem[]
}

interface ActionAdd {
    type: 'add'
    item: StoreItem
}

interface ActionRemove {
    type: 'remove'
    id: string
}

interface ActionHide {
    type: 'hide'
    item: CartItem
}

interface ActionShow {
    type: 'show'
    item: CartItem
}

type Action = ActionAdd | ActionRemove | ActionHide | ActionShow;

export const CartReducer = (state : CartState, action : Action) => {
    switch(action.type){
        case 'add':
            return {
                ...state,
                items: [
                    ...state.items,
                    {...action.item, hidden: false}
                ]
            }
        case 'remove':
            return {
                ...state,
                items: state.items.filter(i => i.id !== action.id)
            }
        case 'show':
            action.item.hidden = false;
            return {...state};
        case 'hide':
            action.item.hidden = true;
            return {...state};
    }
};

type ContextType = [CartState, React.Dispatch<Action>];

const initialState : ContextType = [
    {items: []},
    (_a) => {}
]

export default createContext<ContextType>(initialState);
