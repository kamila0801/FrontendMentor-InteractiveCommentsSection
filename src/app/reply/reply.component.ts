import {Component, Input, OnInit} from '@angular/core';
import {Reply} from "../dtos/reply";
import {User} from "../dtos/user";
import {CommentsService} from "../comments.service";

@Component({
  selector: 'app-reply',
  templateUrl: './reply.component.html',
  styleUrls: ['./reply.component.scss']
})
export class ReplyComponent implements OnInit {

  @Input() thisReply: Reply | undefined;
  currentUser: User | undefined;

  constructor(private service: CommentsService) { }

  ngOnInit(): void {
    this.currentUser = this.service.getCurrentUser();
  }

  voteUp() {
    if(this.thisReply) this.thisReply.score++;
  }

  voteDown() {
    if(this.thisReply) this.thisReply.score--;
  }

  deleteReply() {
    if(this.thisReply) this.service.deleteReply(this.thisReply.id)
  }
}
