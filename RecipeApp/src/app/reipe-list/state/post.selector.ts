import { createFeatureSelector, createSelector } from "@ngrx/store";
import { postsState } from "./post.state";

const getPostsState = createFeatureSelector<postsState>('posts')

export const getPost = createSelector(getPostsState, (state) =>{
    return state.posts
})

export const getPostbyId = createSelector(getPostsState,(state:any, props:any) => {
    return state.posts.find((post:any) => post.id === props.id)
}) 