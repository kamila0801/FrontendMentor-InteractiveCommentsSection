import {Component, Input, OnInit} from '@angular/core';
import {User} from "../dtos/user";
import {CommentsService} from "../comments.service";

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.scss']
})
export class AddCommentComponent implements OnInit {

  currentUser: User | undefined;
  content: string = "";

  constructor(private service: CommentsService) { }

  ngOnInit(): void {
    this.currentUser = this.service.getCurrentUser();
  }

  addComment() {
    if (this.content.length>0) this.service.addComment(this.content);
    this.content = '';
  }
}
