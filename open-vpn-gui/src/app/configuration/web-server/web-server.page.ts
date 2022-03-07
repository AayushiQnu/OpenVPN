import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-web-server',
  templateUrl: './web-server.page.html',
  styleUrls: ['./web-server.page.scss'],
})
export class WebServerPage implements OnInit {

  activeCertificateConfiguration = [{
    key: 'Certificate Trust Warning',
    value: 'self signed certificate in certificate chain'
  },
  {
    key: 'Certificate/Hostname',
    value: 'Successful Match'
  },
  {
    key: 'Certificate Subject',
    value: 'CN=192.168.10.168'
  },
  {
    key: 'Certificate Issuer',
    value: 'CN=OpenVPN Web CA 2022.02.10 14:50:56 IST qnu-demo'
  },
  {
    key: 'Certificate subjectAltName DNS Names',
    value: '192.168.10.168'
  },
  {
    key: 'Certificate SHA256 fingerprint',
    value: '75:4e:35:56:3g:75:4e:35:56:3g:75:4e:35:56:3g:75:4e:35:56:3g:75:4e:35:56:3g'
  },
  {
    key: 'Valid From',
    value: '2022-02-09 14:15:03'
  },
  {
    key: 'Valid Until',
    value: '2023-02-09 14:15:03'
  }];

  constructor() { }

  ngOnInit() {
  }

  uploadPhoto(fileChangeEvent) {
    const photo = fileChangeEvent.target.files[0];
  }

}
