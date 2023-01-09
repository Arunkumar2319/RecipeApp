import { createAction, props } from "@ngrx/store"
import { Post } from "src/app/model/posts.model"

export const ADD_POST_ACTION = '[Posts page] add post';
export const UPDATE_POST_ACTION = '[Posts Page] update post';
export const DELETE_POST_ACTION = '[Posts delete] delete post';

export const addRecipe = createAction(ADD_POST_ACTION, props<{post:Post}>())
export const updatePost = createAction(UPDATE_POST_ACTION, props<{post:Post}>())
export const deletePost = createAction(DELETE_POST_ACTION, props<{ id: string}>())