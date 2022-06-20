import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  public users: any;
  public loading: boolean = false;
  public totalElements: number = 0;
  public size: number = 5;
  public visible: boolean = false;
  public email: string = '';
  public name: string = ''
  public postsMenu = [
    {
      label: 'Посты',
      sysname: 'post',
      command: (event: any) => this.menuClick(event)
    },
    {
      label: 'Пользователи',
      sysname: 'user',
      disabled: true,
      command: (event: any) => this.menuClick(event)
    }
  ]

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loadUsers()
  }

  public loadUsers() {
    this.loading = true;
    this.userService.getAllUser()
      .then((res: any) => {
        this.loading = false;
        this.users = res.content;
        this.totalElements = res.totalElements
      })
  }

  public menuClick(event: any) {
    console.log(event)
    if (event.item.sysname === 'post') {
      this.router.navigateByUrl('/posts')
    }
  }

  public menuToggle(event: any, menu: any) {
    menu.toggle(event)
  }

  public openEditForm(event: {visible: boolean, item?: any}) {
    this.visible = event.visible
    if (this.visible) {
      this.userService.getUserById(event.item.id)
        .then((res: any) => {
          this.name = res.login;
          this.email = res.email;
        })
    }
  }


}
