import { Component, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { SidebarState } from '../common/type';
import { PostService } from './posts.service';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})

export class PostsComponent implements OnInit {

  public data?: any

  public loading: boolean = false;
  private sortName: string = '';
  private sortDirection: string = ''
  public size: number = 5;
  public page: number = 1;
  public totalElements: number = 0;
  public hasError: boolean = false
  public sidebarVisible: boolean = false;
  public title?: string;
  public body?: string;
  public edit: boolean = false;
  public editForm!: FormGroup;
  public state?: SidebarState;
  public recordId?: number;
  public offset: number = 0
  public postsMenu = [
    {
      label: 'Посты',
      disabled: true,
      sysname: 'post',
      command: (event: any) => this.menuClick(event)
    },
    {
      label: 'Пользователи',
      sysname: 'user',
      command: (event: any) => this.menuClick(event)
    }
  ]

  SidebarState = SidebarState


  constructor(
    private postService: PostService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadPosts();
    this.initEditForm()
  }

  public initEditForm() {
    this.editForm = new FormGroup({
      title: new FormControl('aaaa', [Validators.required]),
      post: new FormControl(null, [Validators.required])
    })
  }

  private loadPosts() {
    this.loading = true;

    this.postService.getAllPosts()
      .then((res: any) => {
          this.loading = false
          this.data = res.content;
          this.totalElements = res.totalElements;
      })
      .catch((err: any) => {
        this.hasError = true;
        this.loading = false;
      })
  }

 public async openEditForm(event: {state?: SidebarState, visible: boolean, item?: any}) {
   this.edit = false;
   this.state = event.state;
    this.sidebarVisible = event.visible
    if (event.visible && event.state === SidebarState.edit) {
      this.recordId = event.item.id;
      await this.postService.getPostById(event.item.id)
        .then((res: any) => {
          this.title = res.title;
          this.body = res.body;
        })
    }

    this.editForm.reset();  
  }

  public editPost() {
    this.edit = true;
    this.editForm.patchValue({
      title: this.title,
      post: this.body
    })
  }

  public onSubmit() {
    let isValid = true;
    Object.keys(this.editForm.controls).forEach((key) => {
      if (this.editForm.controls.hasOwnProperty(key)) {
        const control = this.editForm.controls[key];
        control.markAsTouched({onlySelf: true});
        control.markAsDirty({onlySelf: true});
      }
      if (this.editForm.controls[key].status === 'INVALID') {
        isValid = false
      }
    })

    if (isValid) {
      let data = {
        id: this.recordId ? this.recordId : null,
        title: this.editForm.controls["title"].value,
        body: this.editForm.controls["post"].value,
        user: {
          id: 1,
          login: 'admin'
        }
      }

      if (this.state === SidebarState.add) {
        this.postService.createPost(data)
          .then(() => {
            this.sidebarVisible = false;
            this.editForm.reset();
            this.loadPosts()
          })
      } else if (this.state === SidebarState.edit) {
        this.postService.updatePost(data)
          .then(() => {
            this.sidebarVisible = false;
            this.editForm.reset();
            this.loadPosts();
          })
      }
    }
  }


  public menuClick(event: any) {
    console.log(event)
    if (event.item.sysname === 'user') {
      this.router.navigateByUrl('/users')
    }
  }

  public menuToggle(event: any, menu: any) {
    menu.toggle(event)
  }

  public deletePost(item: any) {
    this.postService.deletePost(item.id)
      .then(() => {
        this.loadPosts();
      })
  }
}
