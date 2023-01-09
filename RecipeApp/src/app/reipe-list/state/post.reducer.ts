import { createReducer, on } from "@ngrx/store"
import { addRecipe, deletePost, updatePost } from "./post.actions"
import { initialState } from "./post.state"

const _postsReducer = createReducer(initialState, on(addRecipe, (state,action) => {
    let post = {...action.post};

    post.id = (state.posts.length + 1).toString();

    return{
        ...state,
        posts: [...state.posts,post]
    }
}),
on(updatePost, (state,action) =>{
    const updatedPosts = state.posts.map((post) =>{
        
        console.log("action",action.post)
        return action.post.id === post.id ? action.post : post
    });
    console.log("something",updatedPosts,)
    return{
        ...state,
        posts: updatedPosts
    }
}),
on(deletePost, (state,{ id }) =>{
    console.log("delete id", id )
    const updatedPost = state.posts.filter((post => {
        return post.id !== id;
    }));
    return{
        ...state,
        posts: updatedPost
    }
})
);

export function postsReducer(state:any,action:any){
    return _postsReducer(state,action )
}