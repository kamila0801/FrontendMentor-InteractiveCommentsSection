import {Injectable} from '@angular/core';

import data from "./data/data.json";
import {User} from "./dtos/user";
import {Comment} from "./dtos/comment";

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  currentUser: User = (<any>data).currentUser;
  comments: Comment[] = (<any>data).comments;

  constructor() {}

  getComments(): Comment[] {
    return this.comments;
  }

  getCurrentUser(): User {
    return this.currentUser;
  }

  addComment(content: string) {
    let lastIndex = this.comments.length - 1;
    let comment = {
      id: this.comments[lastIndex].id + 1,
      content: content,
      createdAt: '1 minute ago',
      score: 0,
      user: this.currentUser,
      replies: []
    };
    this.comments.push(comment);
  }

  deleteComment(id: number) {
    let comment = this.comments.find(c=>c.id==id);
    if (comment) {
      console.log('deleting: ' + comment);
      let index = this.comments.indexOf(comment, 0);
      this.comments.splice(index, 1);
    } else {
      console.log('comment not found');
    }
  }

  deleteReply(replyId: number, commentId: number) {
    console.log(this.comments);

    if(this.comments[commentId].replies) {
      this.comments[commentId].replies.forEach((reply,index)=>{
        if(reply.id == replyId) this.comments[commentId].replies.splice(index,1);
      });
    }
  }

  addReply(content: string, replyingTo: string, commentId: number) {
    let comment = this.comments.find(c => c.id==commentId);

    if(comment) {
      //let lastIndex = 0;
      //if(comment.replies.length>0) lastIndex = comment.replies.length - 1;
      let reply = {
        //id: comment.replies[lastIndex].id + 1,
        id: 8,
        content: content,
        createdAt: '1 minute ago',
        score: 0,
        replyingTo: replyingTo,
        user: this.currentUser
      }
      comment.replies.push(reply);
      console.log("reply added: " + reply);
    } else {
      console.log('comment not found');
    }

  }
}
