import { postsReducer } from "../reipe-list/state/post.reducer";
import { postsState } from "../reipe-list/state/post.state";

export interface AppState{
    posts: postsState 
}

export const appReducer ={
    posts: postsReducer
}