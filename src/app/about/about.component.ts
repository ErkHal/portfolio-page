import { Component, OnInit, AfterContentInit } from '@angular/core';
import { GithubService } from '../github.service';
import { trigger, state, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  animations: [
    trigger('visibilityChanged', [
      state('shown' , style({ opacity: 1 })),
      state('hidden', style({ opacity: 0 })),
      transition('* => *', animate('.5s'))
    ])
  ]
})
export class AboutComponent implements OnInit {

  constructor(private gitService: GithubService) { }

  profile: any;

  //Loads my GitHub's profile pic for the About Me section
  ngOnInit() {
    this.gitService.getProfile()
      .subscribe( result => {
        this.profile = result;
      }, err => {
        console.log('Oops !');
        console.log(err);
      });
  }

  getAge() {

    const birthday = new Date('1995-02-24');

    const ageDifMs = Date.now() - birthday.getTime();
    const ageDate = new Date(ageDifMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }

}
