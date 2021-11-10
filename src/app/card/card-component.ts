import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: 'card-component.html',
  styleUrls: ['card-component.scss'],
})
export class CardComponent {
  cards = [
    {
      imagesrc:
        'https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80',
      title: 'Lens',
      desc: 'Best Lens in the world',
    },
    {
      imagesrc:
        'https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80',
      title: 'Lens',
      desc: 'Best Lens in the world',
    },
    {
      imagesrc:
        'https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80',
      title: 'Lens',
      desc: 'Best Lens in the world',
    },
  ];
}
