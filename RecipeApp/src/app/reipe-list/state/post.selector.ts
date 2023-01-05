import { createFeatureSelector, createSelector } from "@ngrx/store";
import { postsState } from "./post.state";

const getPostsState = createFeatureSelector<postsState>('posts')

export const getPost = createSelector(getPostsState, (state) =>{
    return state.posts
})