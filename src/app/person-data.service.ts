import { Injectable } from '@angular/core';
import { Person } from './interfaces/person';

@Injectable({
  providedIn: 'root'
})

export class PersonDataService {
  people:Person[] =  [
    {
      name: 'Rocchi, Damien',
      title: 'Founder & CEO',
      years: 7,
      email: 'damien@grandcircus.co'
    },
    {
      name: 'Guenther, Peter',
      title: 'Director of Learning',
      years: 3,
      email: 'peter@grandcircus.co'
    },
    {
      name: 'Phillips, Kamesha',
      title: 'Program Manager',
      years: 2,
      email: 'kamesha@grandcircus.co'
    },
    {
      name: 'Kansa, Tiia',
      title: 'Dev.Build Teaching Assistant',
      years: 1,
      email: 'tiia.kansa@grandcircus.co'
    },
  ];

  constructor() { }
}
