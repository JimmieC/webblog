var posts = {
    posts: [
        {
            title: "Onsens, the heart of Japan",
            abstract: "Some cool story about onsens, some more description to help people understand this topic",
            date: "0/0/0",
            topic: "leisure",
            body: "Time for onsen text",
            author: "Dr. React"
        },
        {
            title: "Working the Japanese Cities",
            abstract: "Some cool story about Working, some more description ",
            date: "0/0/0",
            topic: "sport",
            body: "time for working text",
            author: "Dr. James"
        },
        {
            title: "Trains, all you need to know",
            abstract: "Some cool story about the trains, some more description to help people understand this topic, It could be about anything and everything",
            date: "0/0/0",
            topic: "general",
            body: "time for trains text",
            author: "Dr. JS"
        }
    ],
    activePost: { open: false,
        content: {}
    }
}

export default function reducer(state = posts
, action) {
    switch (action.type) {
        case 'OPEN_POST':
            state = {...state, activePost: { open: true, content: action.payload.post }}
            break;
        case 'CLOSE_POST':
            state = {...state, activePost: { open: false, content: {}}}
        default:
            break;
    }
    return state;
}
