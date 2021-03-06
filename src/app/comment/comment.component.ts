import { Component, Input, OnInit } from '@angular/core';
import { Comment } from "../dtos/comment";
import {User} from "../dtos/user";
import {CommentsService} from "../comments.service";

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {
  @Input() thisComment: Comment | undefined;
  username: string = '';
  currentUser: User | undefined;


  replying: boolean = false;

  constructor(private service: CommentsService) { }

  ngOnInit(): void {
    this.currentUser = this.service.getCurrentUser();
    if(this.thisComment && this.thisComment.user) this.username = this.thisComment.user.username;
  }

  voteUp() {
    if(this.thisComment) this.thisComment.score++;
  }

  voteDown() {
    if(this.thisComment) this.thisComment.score--;
  }

  deleteComment() {
    if(this.thisComment) this.service.deleteComment(this.thisComment.id)
  }

  toggleReplying(isReplying : boolean) {
    this.replying = isReplying;
  }
}
