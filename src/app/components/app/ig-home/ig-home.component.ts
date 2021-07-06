import { Component, OnInit } from '@angular/core';
import { IgService } from 'src/app/services/ig.service';

@Component({
  selector: 'app-ig-home',
  templateUrl: './ig-home.component.html',
  styleUrls: ['./ig-home.component.scss'],
})
export class IgHomeComponent implements OnInit {
  constructor(private igService: IgService) {
    this.igService.getFeeds().subscribe(
      (data) => {
        console.log(data);
        this.feeds = data.posts.reverse();
      },
      (err) => {
        console.log(err);
      }
    );
  }

  feeds: Array<Feed> = [];

  ngOnInit(): void {}
}
interface Feed {
  caption: string;
  media: string;
  user: string;
}
