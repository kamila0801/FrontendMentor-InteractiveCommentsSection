import { Injectable } from '@angular/core';

import data from "./data/data.json";
import {User} from "./dtos/user";
import {Comment} from "./dtos/comment";

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  currentUser: User = (<any>data).currentUser;
  comments: Comment[] = (<any>data).comments;

  constructor() { }

  getComments(): Comment[] {
    return this.comments;
  }

  getCurrentUser(): User {
    return this.currentUser;
  }

  addComment(content: string) {
    let comment = {
      id: this.comments.length,
      content: content,
      createdAt: '1 minute ago',
      score: 0,
      user: this.currentUser,
      replies: []
    };
    this.comments.push(comment);
  }

  deleteComment(id: number) {
    this.comments.splice(id, 1);
  }

  deleteReply(id: number) {

  }
}
