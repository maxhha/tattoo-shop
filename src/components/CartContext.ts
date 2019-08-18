import { createContext } from "react";

import { StoreItem, CartItem } from "types";

interface CartState {
    items: CartItem[],
    price: number
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
        case 'add': {
            return {
                ...state,
                items: [
                    ...state.items,
                    {...action.item, hidden: false}
                ],
                price: state.price + action.item.price
            }
        } case 'remove': {
            const item = state.items.find(i => i.id === action.id);
            return {
                ...state,
                items: state.items.filter(i => i !== item),
                price: item ? state.price - item.price : state.price
            }
        } case 'show': {
            const item = action.item;
            const newItem = {...item, hidden: false};
            let price = state.price;
            
            if (item.hidden) {
                price += item.price;
            }
            return {
                ...state,
                items:
                    state.items.map(it => it === item ? newItem : it),
                price
            }
        } case 'hide': {
            const item = action.item;
            const newItem = {...item, hidden: true};
            let price = state.price;

            if (!item.hidden) {
                price -= item.price;
            }
            return {
                ...state,
                items:
                    state.items.map(it => it === item ? newItem : it),
                price
            }
        }
    }
};

type ContextType = [CartState, React.Dispatch<Action>];

const initialState : ContextType = [
    {items: [], price: 0},
    (_a) => {}
]

export default createContext<ContextType>(initialState);
