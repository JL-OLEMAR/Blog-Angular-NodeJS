import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Article } from '../../models/article';
import { ArticleService } from '../../services/article.service';

@Component({
  selector: 'app-article-new',
  templateUrl: './article-new.component.html',
  styles: [],
  providers: [ArticleService]
})
export class ArticleNewComponent implements OnInit {

  public article: Article;
  public status: string;

  constructor(
    private _router: Router,
    private _route: ActivatedRoute,
    private _articleService: ArticleService
  ) {
    this.article = new Article('', '', '', null, null);
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this._articleService.create(this.article).subscribe(
      response => {
        if (response.status == 'success') {
          this.status = 'success';
          this.article = response.article;
          this._router.navigate(['/blog']);
        } else {
          this.status = 'error';
        }
      },
      error => {
        console.log(error);
        this.status = 'error';
      }
    );
  }

}
