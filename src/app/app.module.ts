import { NgModule, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CommentComponent } from './comment/comment.component';
import { AddCommentComponent } from './add-comment/add-comment.component';
import { ReplyComponent } from './reply/reply.component';
import {FormsModule} from "@angular/forms";
import { AddReplyComponent } from './add-reply/add-reply.component';

@NgModule({
  declarations: [
    AppComponent,
    CommentComponent,
    AddCommentComponent,
    ReplyComponent,
    AddReplyComponent
  ],
    imports: [
        BrowserModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule{ }
