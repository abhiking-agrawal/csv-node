import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-record-details',
  templateUrl: './record-details.component.html',
  styleUrls: ['./record-details.component.scss']
})
export class RecordDetailsComponent implements OnInit {

  form: FormGroup;
  description:string;
  record: any;
  isReadOnly:boolean;
  
  constructor(
      private dialogRef: MatDialogRef<RecordDetailsComponent>,
      @Inject(MAT_DIALOG_DATA) private data:any ) {
        this.record = data;
        this.isReadOnly = true;
      // this.form = fb.group({
      //   Title: [record["Title"]],
      //   ReleaseYear: [record["Release Year"]],
      //   Origin:[record["Origin/Ethnicity"]],
      //   Director:[record["Director"]],
      //   Cast: [record["Cast"]],
      //   Genre:[record["Genre"]],
      //   Wiki: [record["Wiki Page"]],
      //   Plot:[record["Plot"]] 
      // });

  }

  ngOnInit() {

  }


  save() {
      this.dialogRef.close(this.form.value);
  }

  close() {
      this.dialogRef.close();
  }


}
