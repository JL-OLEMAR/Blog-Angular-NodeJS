import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ArticleService } from '../../services/article.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  providers: [ArticleService]
})
export class SidebarComponent implements OnInit {

  public searchString: string;

  constructor(
    private _router: Router,
    private _route: ActivatedRoute,
    private _articleService: ArticleService
  ) { }

  ngOnInit(): void {
  }

  goSearch() {
    this._router.navigate(['/buscar', this.searchString]);
  }

}
