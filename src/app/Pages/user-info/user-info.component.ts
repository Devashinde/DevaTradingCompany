import { Component } from '@angular/core';
import { User, UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent {
 users: any;
/// users: User[] = [];
  newUser: User = { u_name: '', u_Mobile: '', u_Address: '' };
  editUserId: number | null = null;

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


  addUser() {
    this.userService.addUser(this.newUser).subscribe({
      next: (user) => {
        this.users.push(user);
        this.newUser = { u_name: '', u_Mobile: '', u_Address: '' };
      },
      error: (err) => console.error('Add failed', err)
    });
  }

  editUser(user: User) {
    this.editUserId = user.u_id ?? null;
    this.newUser = { ...user };
  }

updateUser() {
  if (!this.editUserId) return;

  this.userService.updateUser(this.editUserId, this.newUser).subscribe({
    next: (updatedUser) => {
      // Update user in the array
      const index = this.users.findIndex((u:any) => u.u_id === this.editUserId);
      if (index !== -1) this.users[index] = updatedUser;

      // Reset form
      this.newUser = { u_name: '', u_Mobile: '', u_Address: '' };
      this.editUserId = null;
    },
    error: (err) => console.error('Update failed', err)
  });
}

// Delete user
deleteUser(id?: number) {
  if (!id) return;

  this.userService.deleteUser(id).subscribe({
    next: () => this.users = this.users.filter((u:any) => u.u_id !== id),
    error: (err) => console.error('Delete failed', err)
  });
}


  cancelEdit() {
    this.newUser = { u_name: '', u_Mobile: '', u_Address: '' };
    this.editUserId = null;
  }
}
