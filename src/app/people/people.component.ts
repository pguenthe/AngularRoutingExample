import { Component, OnInit } from '@angular/core';
import { Person } from '../interfaces/person';
import { PersonDataService } from '../person-data.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {
  people:Person[];

  constructor(private personData:PersonDataService) {
    this.people = personData.people;
   }

  ngOnInit(): void {
  }

}
