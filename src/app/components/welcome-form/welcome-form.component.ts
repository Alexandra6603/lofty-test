import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { WelcomeService, Data } from './welcome.sevice';

@Component({
  selector: 'app-welcome-form',
  templateUrl: './welcome-form.component.html',
  styleUrls: ['./welcome-form.component.css']
})
export class WelcomeFormComponent implements OnInit {

  //@Input() autorizationForm: FormGroup;

  public autorizationForm!: FormGroup;

  constructor(
    private welcomeService: WelcomeService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initForm()
  }

  public initForm() {
    this.autorizationForm = new FormGroup({
      login: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required])
    })
  } 

  public onSubmit() {
    let isValid = true;
    Object.keys(this.autorizationForm.controls).forEach((key) => {
      if (this.autorizationForm.controls.hasOwnProperty(key)) {
        const control = this.autorizationForm.controls[key];
        control.markAsTouched({onlySelf: true});
        control.markAsDirty({onlySelf: true});
      }
      if (this.autorizationForm.controls[key].status === 'INVALID') {
        isValid = false
      }

      if (isValid) {
        let data: Data = {
          email: this.autorizationForm.controls['login'].value,
          password: this.autorizationForm.controls['password'].value,
          rememberMe: true
        }
        this.welcomeService.autorize(data)
          .then(() => {
            this.router.navigateByUrl('/posts');
            this.autorizationForm.reset();
          })
      }
    })
  }

  



}
