import { Component, OnInit, ViewChild } from '@angular/core';
import { AppService } from '../app.service';
import { HttpEventType, HttpResponse, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-upload-data',
  templateUrl: './upload-data.component.html',
  styleUrls: ['./upload-data.component.scss']
})
export class UploadDataComponent implements OnInit {

  @ViewChild('fileInput') fileInput;
  selectedFile : any;
  uploadStatus: any;
  uploadStatusMessage: any;
  uploadRequest: any;
  constructor(private appService:AppService) { }

  ngOnInit() {
    this.uploadStatusMessage = "";
  }

  selectAFile(){
    this.uploadStatusMessage = "";
    var fileBrowser = this.fileInput.nativeElement;

    if(fileBrowser.files && fileBrowser.files.length)
      this.selectedFile = fileBrowser.files[0];
  }

  cancelUpload(){
    this.selectedFile = {};
    this.uploadStatusMessage = "";
  }

  uploadFile(){
    this.uploadRequest = this.appService.uploadFile(this.selectAFile).subscribe(
      (event: any) => {
       if (event instanceof HttpResponse) {
          this.uploadComplete(event);
        }
      },
      (err: HttpErrorResponse) => {
          this.uploadFailed(err);
      });
  }

  uploadComplete(event){
    this.uploadStatus = true;
    this.uploadStatusMessage = "Upload Completed Succesfully..!!";
  }

  uploadFailed(err){
    this.uploadStatus = false;

    if(err.error && err.error.message)
      this.uploadStatusMessage = "Upload operation failed, "+ err.error.message;
      else
      this.uploadStatusMessage = "Upload operation failed, Please contact Support";
  }

}
