import { createAction, props } from "@ngrx/store"
import { Post } from "src/app/model/posts.model"

export const ADD_POST_ACTION = '[Posts page] add post'

export const addRecipe = createAction(ADD_POST_ACTION, props<{post:Post}>())