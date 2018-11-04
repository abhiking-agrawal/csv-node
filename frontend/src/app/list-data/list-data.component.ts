import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { AppService } from '../app.service';
import { MatSort, MatTableDataSource, MatPaginator, MatDialog, MatDialogConfig } from '@angular/material';
import { tap } from 'rxjs/operators';
import { RecordDetailsComponent } from '../record-details/record-details.component';


@Component({
  selector: 'app-list-data',
  templateUrl: './list-data.component.html',
  styleUrls: ['./list-data.component.scss']
})

export class ListDataComponent implements OnInit, AfterViewInit {

  records = [];
  dataSource = new MatTableDataSource(this.records);
  displayedColumns: string[] = ["releaseDate", "title", "origin", "director", "genre", "action"];

  constructor(private appService: AppService, private dialog: MatDialog) { }

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {

    this.GetRecords();
  }

  private GetRecords() {
    this.appService.getRecords()
      .subscribe(data => {
        this.records = data.data;
        this.dataSource = new MatTableDataSource(this.records);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      });
  }

  ngAfterViewInit() {
    // reset the paginator after sorting
    this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  viewRecord(recordId) {
    const dialogConfig = new MatDialogConfig();
    var record = this.records.filter(x => x._id == recordId)[0];
    if (record) {
      dialogConfig.data = record;
      this.dialog.open(RecordDetailsComponent, dialogConfig);
    }
  }

  deleteRecord(recordId) {

    var record = this.records.filter(x => x._id == recordId)[0];
    if (record) {
      this.appService.deleteRecord(recordId).subscribe(() => {
        this.records =  this.records.filter(x => x._id != recordId)
        this.dataSource = new MatTableDataSource(this.records);
      });
    }
  }

}
