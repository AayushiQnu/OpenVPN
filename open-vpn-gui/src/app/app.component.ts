import { DataServiceService } from './../providers/data-service.service';
import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  // public pages = [
  //   { title: 'Inbox', url: '/folder/Inbox', icon: 'mail' },
  //   { title: 'Outbox', url: '/folder/Outbox', icon: 'paper-plane' },
  //   { title: 'Favorites', url: '/folder/Favorites', icon: 'heart' },
  //   { title: 'Archived', url: '/folder/Archived', icon: 'archive' },
  //   { title: 'Trash', url: '/folder/Trash', icon: 'trash' },
  //   { title: 'Spam', url: '/folder/Spam', icon: 'warning' },
  // ];
  showLevel1 = null;
  showLevel2 = null;
  public pages;
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

  constructor(public dataService: DataServiceService) {
    this.dataService.getMenus().subscribe((response)=> {
      this.pages = response;
      console.log(this.pages);
    });
  }

  isLevel1Shown(idx) {
    return this.showLevel1 === idx;
  };

  isLevel2Shown(idx) {
    return this.showLevel2 === idx;
  };

  toggleLevel1(idx) {
    if (this.isLevel1Shown(idx)) {
      this.showLevel1 = null;
    } else {
      this.showLevel1 = idx;
    }
  };

  toggleLevel2(idx) {
    if (this.isLevel2Shown(idx)) {
      this.showLevel1 = null;
      this.showLevel2 = null;
    } else {
      this.showLevel1 = idx;
      this.showLevel2 = idx;
    }
  };

}
