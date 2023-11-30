import { Component, OnInit, signal } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { User } from '../../interfaces/user-request.interface';

@Component({
  selector: 'app-userInfoPage',
  templateUrl: './userInfoPage.component.html',
  styleUrls: ['./userInfoPage.component.css'],
})
export class UserInfoPageComponent implements OnInit {
  public userId = signal(1);
  public currentUser = signal<User | undefined>(undefined);
  public userWasFound = signal(true);

  constructor(private userService: UsersService) {}

  ngOnInit(): void {
    this.loadUser(this.userId());
  }

  loadUser(id: number) {
    if (id <= 0) return;

    this.userId.set(id);
    this.currentUser.set(undefined);
    this.userService.getUserById(id).subscribe((user) => {
      this.currentUser.set(user);
    });
  }
}
