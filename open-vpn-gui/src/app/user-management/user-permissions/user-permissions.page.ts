import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-permissions',
  templateUrl: './user-permissions.page.html',
  styleUrls: ['./user-permissions.page.scss'],
})
export class UserPermissionsPage implements OnInit {

  filterTerm: string;

  userRecords = [{
    username: 'openvpn',
    isAdmin: 'true'
  },
  {
    username: 'qnulabs',
    isAdmin: 'false'
  }];

  deleteItem = [];

  constructor() { }

  ngOnInit() {
  }

  //Adds the checkedbox to the array and check if you unchecked it
  addCheckbox(event, checkbox) {
    console.log('checkbox -> ', checkbox);
    if ( event.detail.checked ) {
      this.deleteItem.push(checkbox);
    } else {
      const index = this.removeCheckedFromArray(checkbox);
      this.deleteItem.splice(index,1);
    }
  }

  //Removes checkbox from array when you uncheck it
  removeCheckedFromArray(checkbox) {
    return this.deleteItem.findIndex((category)=> category === checkbox);
  }

  //Empties array with checkedboxes
  emptyCheckedArray() {
    this.deleteItem = [];
  }

  getCheckedBoxes() {
    console.log(this.deleteItem);
  }

  deleteUser(user) {
    console.log('user delete -> ', user);
    
  }

}
