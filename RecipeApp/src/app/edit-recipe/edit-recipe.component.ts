import { Component, OnInit } from '@angular/core';
import { FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Post } from '../model/posts.model';
import { updatePost } from '../reipe-list/state/post.actions';
import { getPostbyId } from '../reipe-list/state/post.selector';
import { AppState } from '../store/app.state';

@Component({
  selector: 'app-edit-recipe',
  templateUrl: './edit-recipe.component.html',
  styleUrls: ['./edit-recipe.component.scss']
})
export class EditRecipeComponent implements OnInit {
  editPostForm!: FormGroup; 
  post!: Post;
  constructor(private route: ActivatedRoute,private store: Store<AppState>,private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(data => {
      console.log("something", data)
      const id = data.get('id')
      this.store.select(getPostbyId,{ id }).subscribe(data => {
        this.post = data;
        console.log("got something", this.post)
        this.generateForm();
      })
    })
  }
  onUpdate(){
    const name = this.editPostForm.value.name
    const description = this.editPostForm.value.description
    const post: Post ={
      id: this.post.id,
      name,
      description      
    }
    console.log("data",post)
    this.store.dispatch(updatePost({post}))
    this.router.navigateByUrl('recipelist')
  }
  generateForm(){
    this.editPostForm = new FormGroup({
      name: new FormControl(this.post.name,[Validators.required,Validators.minLength(3)]),
      description: new FormControl(this.post.description)})
  }
}
