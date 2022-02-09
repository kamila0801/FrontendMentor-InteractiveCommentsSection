import {Component, OnInit} from '@angular/core';
import {CommentsService} from "./comments.service";
import {Comment} from "./dtos/comment";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  comments: Comment[] | undefined;

  constructor(private service: CommentsService) {
  }

  ngOnInit(): void {
    this.comments = this.service.getComments();
  }
}
