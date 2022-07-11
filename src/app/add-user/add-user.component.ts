import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  id: number = 0;
  userform: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private userService: UserService
  ) {
    //**************Create Reactive Form with validation********************* */
    this.userform = this.fb.group({
      name: ['', [Validators.required]],
      mobile: ['', []],
      email: ['', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      gender: ['', [Validators.required]],
      dob: [null, [Validators.required]],
      id: [0, [Validators.required]],
      isActive: [true],
      rating: [0, []],
      userType: ['', [Validators.required]],
    });

  }

  ngOnInit(): void {
    //**************Get User ID On Edit********************* */
    this.route.params.subscribe(params => {
      this.id = params['id'];
      if (params['id'] != null) {
        this.userform.get('Id')?.setValue(params['id']);
        const data = this.userService.getUsersByID(this.id);
        if (data) {
          this.userform.setValue(data);
        }
      }
    });
  }

  save() {
    if (this.userform.invalid) // true if any form validation fail
      return

    if (this.userform.get('id')?.value === 0) {
      // on Create New User
      this.userService.addUser(this.userform.value);
    } else {
      // on Update User info
      this.userService.updateUser(this.userform.value);
    }

    //Redirecting to user List page after save or update 
    this.router.navigate(['/user']);
  }

}
