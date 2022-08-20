import { Component, OnInit } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-animations',
  templateUrl: './animations.component.html',
  styleUrls: ['./animations.component.scss']
})
export class AnimationsComponent implements OnInit {

  options: AnimationOptions = {
    path: '../../../assets/lottie/108347-designer.json'
  };
  constructor() { }

  ngOnInit() {
  }


}
