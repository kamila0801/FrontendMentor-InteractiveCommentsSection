import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {User} from "../dtos/user";
import {CommentsService} from "../comments.service";

@Component({
  selector: 'app-add-reply',
  templateUrl: './add-reply.component.html',
  styleUrls: ['./add-reply.component.scss']
})
export class AddReplyComponent implements OnInit {
  @Input() replyingTo: string | undefined;
  @Input() originalCommentId: number | undefined;
  @Output() replying = new EventEmitter<boolean>();
  currentUser: User | undefined;
  content: string = '';

  constructor(private service: CommentsService) { }

  ngOnInit(): void {
    this.currentUser = this.service.getCurrentUser();
    if(this.replyingTo) this.content = '@'+this.replyingTo;
  }

  addReply() {
    if(this.replyingTo && this.originalCommentId) {
      this.service.addReply(
        this.content.substr(this.content.indexOf(' ')+1), this.replyingTo, this.originalCommentId);
      this.replying.emit(false);
    }

  }

}
