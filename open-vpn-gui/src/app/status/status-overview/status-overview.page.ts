import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/providers/data-service.service';

@Component({
  selector: 'app-status-overview',
  templateUrl: './status-overview.page.html',
  styleUrls: ['./status-overview.page.scss'],
})
export class StatusOverviewPage implements OnInit {

  constructor(public dataService: DataServiceService) { }

  ngOnInit() {
    this.getAllCurrentUsers();
  }

  getAllCurrentUsers() {
    this.dataService.getCurrentUsers().subscribe((response)=> {
      console.log('response  current users -> ', response);
    });
  }

}
