import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ca-management',
  templateUrl: './ca-management.page.html',
  styleUrls: ['./ca-management.page.scss'],
})
export class CaManagementPage implements OnInit {

  certificateConfig = [{
    type: 'Current CA',
    certificateCN: 'Open VPN CA',
    algorithm: 'rsa2048',
    expires: 'in 9 years',
    userProfiles: '1'
  },
  {
    type: 'Current CA -2',
    certificateCN: 'Open VPN CA',
    algorithm: 'rsa2048',
    expires: 'in 9 years',
    userProfiles: '1'
  }];

  constructor() { }

  ngOnInit() {
  }

}
