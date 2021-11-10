import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home-component.html',
  styleUrls: ['home-component.scss'],
})
export class HomeComponent {
  activeIndex: any;
  images = [
    {
      src: 'https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80',
      name: 'image1',
    },
    {
      src: 'https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80',
      name: 'image2',
    },
    {
      src: 'https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80',
      name: 'image3',
    },
  ];

  setIndex(index) {
    this.activeIndex = index;
  }
}
