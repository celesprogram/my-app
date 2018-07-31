import { INCREMENT, DECREMENT } from '../constants';

const initialState = {
    valor: 0
};

export const operaciones = (state = initialState , action) =>{
    switch (action.type) {
        case INCREMENT:
            return  {
                ...state, 
                valor: state.valor +1 
            }
        case DECREMENT:
            return  {
                ...state, 
                valor: state.valor -1 
            }
        default:
            return state    
    }

    
}