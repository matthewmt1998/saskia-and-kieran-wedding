import { Component } from '@angular/core';
import { RsvpComponent } from '../rsvp/rsvp.component';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [
    RsvpComponent
  ],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

}
