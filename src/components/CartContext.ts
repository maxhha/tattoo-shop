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
            let price = state.price;
            if (action.item.hidden) {
                price += action.item.price
                action.item.hidden = false;
            }
            return {
                ...state,
                price
            }
        } case 'hide': {
            let price = state.price;
            if (!action.item.hidden) {
                price -= action.item.price
                action.item.hidden = false;
            }
            action.item.hidden = true;
            return {
                ...state,
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
