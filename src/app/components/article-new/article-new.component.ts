import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import swal from 'sweetalert';
import { Article } from '../../models/article';
import { ArticleService } from '../../services/article.service';
import { Global } from '../../services/global';

@Component({
  selector: 'app-article-new',
  templateUrl: './article-new.component.html',
  styles: [],
  providers: [ArticleService]
})
export class ArticleNewComponent implements OnInit {

  public article: Article;
  public status: string;
  public is_edit: boolean;
  public page_title: string;
  public url: string;

  public afuConfig = {
    multiple: false,
    formatsAllowed: '.jpg, .png, .gif, .jpeg',
    maxSize: '50',
    uploadAPI: {
      url: Global.url + 'upload-image'
    },
    theme: 'attachPin',
    hideProgressBar: true,
    hideResetBtn: true,
    hideSelectBtn: false,
    replaceTexts: {
      selectFileBtn: 'Select Files',
      resetBtn: 'Reset',
      uploadBtn: 'Upload',
      dragNDropBox: 'Drag N Drop',
      attachPinBtn: 'Sube tu imagen para el artículo...',
      afterUploadMsg_success: 'Successfully Uploaded !',
      afterUploadMsg_error: 'Upload Failed !'
    }
  };

  constructor(
    private _router: Router,
    private _route: ActivatedRoute,
    private _articleService: ArticleService
  ) {
    this.article = new Article('', '', '', '', '');
    this.is_edit = false;
    this.page_title = "Crear artículo";
    this.url = Global.url;
  }

  ngOnInit(): void {
  }

  onSubmit(form) {
    this._articleService.create(this.article).subscribe(
      response => {
        if (response.status == 'success') {
          this.status = 'success';
          this.article = response.article;

          // Alerta
          swal(
            'Articulo creado!!!',
            'El articulo se ha creado correctamente',
            'success'
          );


          this._router.navigate(['/blog']);
        } else {
          this.status = 'error';
        }
      },
      error => {
        console.log(<any>error);
        this.status = 'error';
      }
    );
  }

  imageUpload(datos) {
    let data = JSON.parse(datos.response);
    this.article.image = data.image;
  }

}
