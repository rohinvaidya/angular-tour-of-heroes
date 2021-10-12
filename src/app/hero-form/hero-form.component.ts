import { Component } from '@angular/core';

import { MyHero } from '../my-hero';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css'],
})
export class HeroFormComponent {
  powers = ['Really Smart', 'Super Flexible', 'Super Hot', 'Weather Changer'];

  model = new MyHero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');

  const myHero =  new MyHero(42, 'SkyDog',
                       'Fetch any object at any distance',
                       'Leslie Rollover');
                       
  console.log('My hero is called ' + myHero.name); // "My hero is called SkyDog"

  submitted = false;

  onSubmit() {
    this.submitted = true;
  }
}
