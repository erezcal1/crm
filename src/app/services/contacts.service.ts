import { Injectable } from '@angular/core';
import { Contacts } from '../shared/interfaces/contacts';

@Injectable({
  providedIn: 'root',
})
export class ContactsService {
  private _contacts: Contacts[] = [
    {
      id: '62a6f36dc07ae441547d2e35',
      name: 'Wilder Rosario',
      email: 'wilderrosario@escenta.com',
      birthDay: new Date('2019-08-24'),
      phone_number: ['+1 (983) 531-2146', '+972 (975) 420-3103'],
    },
    {
      id: '62a6f36d2bdf49a6af078306',
      name: 'Nellie Mathis',
      email: 'nelliemathis@escenta.com',
      birthDay: new Date('2021-08-02'),
      phone_number: ['+1 (993) 490-2420', '+972 (979) 524-3703'],
    },
    {
      id: '62a6f36de790c217f79612c5',
      name: 'Landry Watson',
      email: 'landrywatson@escenta.com',
      birthDay: new Date('2020-03-19'),
      phone_number: ['+1 (914) 597-2129', '+972 (868) 529-2801'],
    },
    {
      id: '62a6f36d0c999af12a5e0559',
      name: 'Casey Mcknight',
      email: 'caseymcknight@escenta.com',
      birthDay: new Date('2019-07-12'),
      phone_number: ['+1 (833) 460-2736', '+972 (843) 468-2983'],
    },
    {
      id: '62a6f36dd4a7234f94fd5f6d',
      name: 'Bolton Holden',
      email: 'boltonholden@escenta.com',
      birthDay: new Date('2015-02-17'),
    },
  ];

  get_All(): Contacts[] {
    return this._contacts;
  }

  constructor() {}
}
