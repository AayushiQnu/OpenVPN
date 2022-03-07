import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-current-users',
  templateUrl: './current-users.page.html',
  styleUrls: ['./current-users.page.scss'],
})
export class CurrentUsersPage implements OnInit {

  filterTerm: string;

  userRecords = [{
    commonName: 'Common Name',
    realAddress: '10.81.234.11',
    vpnAddress: '192.81.234.11',
    bytes: '260/s',
    duration: '10 minutes'
  },
  {
    commonName: 'Common Name1',
    realAddress: '10.81.234.11',
    vpnAddress: '192.81.234.11',
    bytes: '260/s',
    duration: '10 minutes'
  },
  {
    commonName: 'Common Name2',
    realAddress: '10.81.234.11',
    vpnAddress: '192.81.234.11',
    bytes: '260/s',
    duration: '10 minutes'
  },
  {
    commonName: 'Common Name3',
    realAddress: '10.81.234.11',
    vpnAddress: '192.81.234.11',
    bytes: '260/s',
    duration: '10 minutes'
  },
  {
    commonName: 'Common Name4',
    realAddress: '10.81.234.11',
    vpnAddress: '192.81.234.11',
    bytes: '260/s',
    duration: '10 minutes'
  },
  {
    commonName: 'Common Name5',
    realAddress: '10.81.234.11',
    vpnAddress: '192.81.234.11',
    bytes: '260/s',
    duration: '10 minutes'
  },
  {
    commonName: 'Common Name6',
    realAddress: '10.81.234.11',
    vpnAddress: '192.81.234.11',
    bytes: '260/s',
    duration: '10 minutes'
  },
  {
    commonName: 'Common Name7',
    realAddress: '10.81.234.11',
    vpnAddress: '192.81.234.11',
    bytes: '260/s',
    duration: '10 minutes'
  },
  {
    commonName: 'Common Name8',
    realAddress: '10.81.234.11',
    vpnAddress: '192.81.234.11',
    bytes: '260/s',
    duration: '10 minutes'
  },
  {
    commonName: 'Common Name9',
    realAddress: '10.81.234.11',
    vpnAddress: '192.81.234.11',
    bytes: '260/s',
    duration: '10 minutes'
  }];

  constructor() { }

  ngOnInit() {
  }

}
