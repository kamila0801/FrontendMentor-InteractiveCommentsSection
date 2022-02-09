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

  public getComments(): Comment[] {
    return this.comments;
  }

  public getCurrentUser(): User {
    return this.currentUser;
  }
}
