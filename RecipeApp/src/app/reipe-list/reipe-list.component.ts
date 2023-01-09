import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Post } from '../model/posts.model';
import { AppState } from '../store/app.state';
import { deletePost, updatePost } from './state/post.actions';
import { getPost } from './state/post.selector';

@Component({
  selector: 'app-reipe-list',
  templateUrl: './reipe-list.component.html',
  styleUrls: ['./reipe-list.component.scss']
})
export class ReipeListComponent implements OnInit {

  posts!: Observable<Post[]>;

  postForm!: FormGroup;
  public recipeList:any;
  public recipeData:any;
  constructor(private store: Store<AppState>,private route: Router,private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.recipeData = {}
    this.recipeList = [{id:1, recipeName:'Bun Parotta',description:'something content for bun parotta',image:'assets/bunParotta.jpg'},
    {id:2, recipeName:'Malabar Paratha',description:'something content for Malabar Paratha',image:'assets/malabarParata.jpg'},
    {id:3, recipeName:'Malabar Briyani',description:'something content for Malabar Briyani',image:'assets/malabarbriyani.jpg'},
    {id:4, recipeName:'Banana Peel Thoran',description:'something content for Malabar Peel Thoram',image:'assets/bananapeel.jpg'},

  ]
  this.postForm = new FormGroup({
    name: new FormControl(null,[Validators.required,Validators.minLength(3)]),
    description: new FormControl(null)
    })
  this.posts = this.store.select(getPost)
  }
  onItemSelectRecipe(data:any){

  }
  newItem(){

  }
  addRecipe(){
    console.log("new item clicked");
    this.route.navigateByUrl('/newRecipe')
  }
  updateRecipe(data:any){


    // dispatch action here
    // const post: Post ={
    //   id: this.postForm.value.id,
    //   name: this.postForm.value.name,
    //   description: this.postForm.value.description      
    // }
    const name = this.recipeData.name
    const description = this.recipeData.description
    const post: Post ={
      id: this.recipeData?.id,
      name,
      description      
    }

    this.store.dispatch(updatePost({post}))
  }
  getId(data:any){
    this.recipeData = data
    console.log("edit datas ", this.recipeData)
    this.route.navigateByUrl('recipeList/editRecipe/'+ data.id)
    
  }
  deleteRecipe(id:any){
    console.log("delete this id",id)
    if(confirm('Are you sure you want to delete')){
      this.store.dispatch(deletePost({id}))
    }
  }
}
