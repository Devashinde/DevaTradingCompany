import { Component } from '@angular/core';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  users:any;
 constructor(private userService: UserService) {}

  ngOnInit() {
    this.loadUsers();
    console.log(this.users);
  }

  loadUsers() {
  this.userService.getUsers().subscribe(res => {
    this.users = res;
    console.log(this.users); // ✅ now it will show the real data
  });
}


}
