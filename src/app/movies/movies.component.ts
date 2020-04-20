import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray,transferArrayItem } from '@angular/cdk/drag-drop';


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // transfer items within 1 list
  // Movies = [
  //   'Blade Runner',
  //   'Cool Hand Luke',
  //   'Heat',
  //   'Juice',
  //   'The Far Side of the World',
  //   'Morituri',
  //   'Napoleon Dynamite',
  //   'Pulp Fiction'
  // ];

  // drop(event: CdkDragDrop<string[]>) {
  //   moveItemInArray(this.Movies, event.previousIndex, event.currentIndex);
  // }

 // Transfer Items Between Lists
 MoviesList = [
  'The Far Side of the World',
  'Morituri',
  'Napoleon Dynamite',
  'Pulp Fiction',
  'Blade Runner',
  'Cool Hand Luke',
  'Heat',
  'Juice'
];
  MoviesWatched = [
  ];

  onDrop(event: CdkDragDrop<string[]>) {
    console.log("event:",event);
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  } 

}
