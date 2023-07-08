import { Component, Output,EventEmitter } from '@angular/core';
import { News } from 'src/app/interfaces/news.interface';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {
  newArticle: News = {title: "", img: "", body: "", date: ""}
  @Output() emittedNews: EventEmitter<News>
  constructor(){
    this.emittedNews = new EventEmitter()
  }

  addNewArticle():void{
    const newArticle:News = {title: this.newArticle.title, img: this.newArticle.img, body: this.newArticle.body, date: this.newArticle.date}
    this.emittedNews.emit(newArticle)
    this.newArticle = {title: "", img: "", body: "", date: ""}
  }
}
