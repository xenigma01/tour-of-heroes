import { FormControl } from '@angular/forms';
import { Component } from '@angular/core';
import { User } from './user';


@Component({
  selector: 'my-app',
  template: `
  <h2>{{ selectedUser?.firstname }}</h2>
  <p *ngIf="!selectedUser">Select a user</p>
  <ul>
    <li>
      <bc-user
        [user]="user1"
        [offline]="true"
        (onSelect)="changeSelected($event)"></bc-user>
    </li>
    <li>
      <bc-user
      [user]="user2"
      (onSelect)="changeSelected($event)">Coucou</bc-user>
    </li>
  </ul>

<form #myForm="ngForm" (ngSubmit)="save(myForm)">

  <input
    type="text"
    #info="ngModel"
    name="information"
    minlength="10"
    ngModel>

  <span *ngIf="info.errors?.minlength">
    Size error ( {{ myForm.controls.information.errors.minlength.actualLength }} / {{ myForm.controls.information.errors.minlength.requiredLength }} )
  </span>

<br>

  <input type="text" required name="obligatoire" ngModel>

<br>

<input type="submit" value="ok">

</form>

<pre>{{ myForm.valid }}</pre>

  `,
})
export class AppComponent  {
  user1 = {
    firstname: 'Thomas',
    lastname: 'Moyse',
  };

  user2 = {
    firstname: 'Nicolas',
    lastname: 'Chambrier',
  };

  selectedUser: User;

  changeSelected(user: User) {
    this.selectedUser = user;
  }

  save(control: FormControl) {
    console.log(control);
  }

}