// a reducer takes in 2 things

// 1. the action, the information about what happened
// 2. Copy of current state


function posts(state = [], action) {
    console.log(state, action);
    return state;
}


export default posts;