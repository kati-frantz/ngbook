import { Component, OnInit } from '@angular/core'
import { JokeService } from './../services/jokes.service'
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
@Component({
  selector: 'app-create-joke',
  templateUrl: './create-joke.component.html',
  styleUrls: ['./create-joke.component.css']
})
export class CreateJokeComponent implements OnInit {
  public jokeForm: FormGroup 
  constructor(
    private fb: FormBuilder,
    private jokeService: JokeService
  ) {
    this.createForm()
   }

   createForm() {
     this.jokeForm = this.fb.group({
       title: ['', [
         Validators.required 
       ]], 
       content: ['', [
         Validators.required, 
         Validators.minLength(5)
       ]]
     })
   }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.jokeForm.value )
    this.jokeService.createJoke(this.jokeForm.value)
                    .then(resp => {
                      console.log(resp)
                    })
  }

}
