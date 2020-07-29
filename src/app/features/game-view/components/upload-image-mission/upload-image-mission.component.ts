import {
  Component,
  OnInit,
  ViewChild,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { ConfigService } from 'src/app/core/service/config/config.service';

@Component({
  selector: 'gal-upload-image-mission',
  templateUrl: './upload-image-mission.component.html',
  styleUrls: ['./upload-image-mission.component.less'],
})
export class UploadImageMissionComponent implements OnInit {
  @Input() missionID: string;
  @Input() imageUri: string;
  @Input() isAdmin: boolean = false;
  @Input() isSolved: boolean;
  @Output() onImageUploaded: EventEmitter<string> = new EventEmitter<string>();

  @ViewChild('file') file;

  constructor(private configService: ConfigService, private http: HttpClient) {}

  ngOnInit(): void {}

  imageSelected(fileInputEvent: any) {
    this.imageUri = undefined;
    let arr = [];
    let formData = new FormData();
    arr.push(fileInputEvent.target.files);

    formData.append('file', this.file.nativeElement.files[0], this.missionID);

    this.http
      .post(`${this.configService.config.apiUri}/images/upload`, formData, {
        reportProgress: true,
        observe: 'events',
      })
      .pipe(catchError(this.errorMgmt))
      .subscribe((res: any) => {
        if (res.body && res.body.success) {
          this.imageUri = `${this.configService.config.imagesUri}${res.body.imageUri}`;
          this.onImageUploaded.emit(this.imageUri);
        }
      });
  }

  errorMgmt(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
