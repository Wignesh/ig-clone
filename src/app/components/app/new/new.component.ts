import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { IgService } from 'src/app/services/ig.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss'],
})
export class NewComponent implements OnInit {
  post: Post = {
    caption: '',
  };

  isLoading: boolean = false;
  isError: boolean = false;
  errorMsg: string = '';

  handleInputChange(e: any) {
    this.isError = false;
    var file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
    this.post.name = file.name;
    this.post.mime = file.type;

    var pattern = /image-*/;
    var reader = new FileReader();
    if (!file.type.match(pattern)) {
      this.isError = true;
      this.errorMsg = 'Invalid image format';
      return;
    }
    if (parseInt((file.size / 1024 / 1024).toFixed(4)) > 5) {
      this.isError = true;
      this.errorMsg = 'Maximum file size limt 5MB';
      return;
    }
    reader.onload = this._handleReaderLoaded.bind(this);
    reader.readAsDataURL(file);
  }

  _handleReaderLoaded(e: any) {
    let reader = e.target;
    this.post.image = reader.result;
  }
  constructor(
    private location: Location,
    private router: Router,
    private igService: IgService
  ) {}

  ngOnInit(): void {}

  navBack() {
    this.location.back();
  }

  postImage() {
    this.isLoading = true;
    this.igService
      .postImage({
        image: this.post.image?.split(';')[1],
        caption: this.post.caption,
        name: this.post.name,
        mime: this.post.mime,
      })
      .subscribe(
        (data) => {
          console.log(data);
          this.isLoading = false;
          this.router.navigateByUrl('/home');
        },
        (err) => {
          console.log(err);
          this.isLoading = false;
        }
      );
    console.log(this.post);
  }
}

interface Post {
  image?: string;
  caption: string;
  name?: string;
  mime?: string;
}
