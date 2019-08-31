import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list-component',
  templateUrl: './post-list-component.component.html',
  styleUrls: ['./post-list-component.component.scss']
})
export class PostListComponentComponent implements OnInit {

  @Input() postTitle: string;
  @Input() postContent: string;
  @Input() postLoveIts: number;
  @Input() postCreatedAt: Date;

  constructor() { }

  ngOnInit() {
  }

  onAddLike() {
    this.postLoveIts += 1;
  }

  onRemoveLike() {
    this.postLoveIts -= 1;
  }

  getColor() {
    if (this.postLoveIts > 0) {
      return 'green';
    }
    if (this.postLoveIts < 0) {
      return 'red';
    }
    if (this.postLoveIts === 0) {
      return  'black';
    }
  }

}
