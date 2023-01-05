import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Post } from '../model/posts.model';
import { AppState } from '../store/app.state';
import { getPost } from './state/post.selector';

@Component({
  selector: 'app-reipe-list',
  templateUrl: './reipe-list.component.html',
  styleUrls: ['./reipe-list.component.scss']
})
export class ReipeListComponent implements OnInit {

  posts!: Observable<Post[]>;
  public recipeList:any;
  constructor(private store: Store<AppState>,private route: Router) { }

  ngOnInit(): void {
    this.recipeList = [{id:1, recipeName:'Bun Parotta',description:'something content for bun parotta',image:'assets/bunParotta.jpg'},
    {id:2, recipeName:'Malabar Paratha',description:'something content for Malabar Paratha',image:'assets/malabarParata.jpg'},
    {id:3, recipeName:'Malabar Briyani',description:'something content for Malabar Briyani',image:'assets/malabarbriyani.jpg'},
    {id:4, recipeName:'Banana Peel Thoran',description:'something content for Malabar Peel Thoram',image:'assets/bananapeel.jpg'},

  ]
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
}
