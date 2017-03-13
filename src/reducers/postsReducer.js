import { posts } from '../rawData/Posts01'

export default function reducer(state = posts
, action) {
    switch (action.type) {
        case 'OPEN_POST':
            state = {...state, activePost: { open: true, content: action.payload.post }}
            break;
        case 'CLOSE_POST':
            state = {...state, activePost: { open: false, content: { body: []}}}
        default:
            break;
    }
    return state;
}
