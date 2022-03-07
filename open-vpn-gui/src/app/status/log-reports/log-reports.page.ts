import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-log-reports',
  templateUrl: './log-reports.page.html',
  styleUrls: ['./log-reports.page.scss'],
})
export class LogReportsPage implements OnInit {

  filterTerm: string;

  userRecords = [{
    userName: 'username1',
    startTime: '02/10/22 14:53',
    duration: '',
    service: 'WEB_ADMIN',
    realIP: '10.81.234.11',
    error: 'Authentication failed'
  },
  {
    userName: 'qnulabs',
    startTime: '02/10/22 14:54',
    duration: '',
    service: 'WEB_ADMIN',
    realIP: '10.81.234.11',
    error: 'Authentication failed'
  },
  {
    userName: 'openvpn',
    startTime: '02/10/22 14:54',
    duration: '',
    service: 'WEB_ADMIN',
    realIP: '10.81.234.11',
    error: 'Authentication failed'
  },
  {
    userName: 'username2',
    startTime: '02/10/22 14:53',
    duration: '',
    service: 'WEB_ADMIN',
    realIP: '10.81.234.11',
    error: 'Authentication failed'
  },
  {
    userName: 'qnulabs2',
    startTime: '02/10/22 14:55',
    duration: '',
    service: 'WEB_ADMIN',
    realIP: '10.81.234.11',
    error: 'Authentication failed'
  },
  {
    userName: 'openvpn2',
    startTime: '02/10/22 14:56',
    duration: '',
    service: 'WEB_ADMIN',
    realIP: '10.81.234.11',
    error: 'Authentication failed'
  },
  {
    userName: 'username3',
    startTime: '02/10/22 14:57',
    duration: '',
    service: 'WEB_ADMIN',
    realIP: '10.81.234.11',
    error: 'Authentication failed'
  },
  {
    userName: 'qnulabs3',
    startTime: '02/10/22 14:58',
    duration: '',
    service: 'WEB_ADMIN',
    realIP: '10.81.234.11',
    error: ''
  },
  {
    userName: 'openvpn3',
    startTime: '02/10/22 14:59',
    duration: '',
    service: 'WEB_ADMIN',
    realIP: '10.81.234.11',
    error: 'Authentication failed'
  },
  {
    userName: 'qnulabs4',
    startTime: '02/10/22 15:00',
    duration: '',
    service: 'WEB_ADMIN',
    realIP: '10.81.234.11',
    error: 'Authentication failed'
  }];

  constructor() { }

  ngOnInit() {
  }

}
