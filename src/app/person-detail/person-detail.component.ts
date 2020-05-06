import { Component, OnInit } from '@angular/core';
import { Person } from '../interfaces/person';
import { PersonDataService } from '../person-data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-person-detail',
  templateUrl: './person-detail.component.html',
  styleUrls: ['./person-detail.component.css']
})
export class PersonDetailComponent implements OnInit {
  person:Person;
  id:number;

  constructor(private personData:PersonDataService, 
    private route:ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = +params['id']; //converts string to a number
 
      this.person = this.personData.people[this.id];
    });
  }

}
