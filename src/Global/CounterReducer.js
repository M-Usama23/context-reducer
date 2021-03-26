export default function counterReducer(state, action)  {
    switch(action){
        case 'INCREMENT':
            return state + 1
    }
}

