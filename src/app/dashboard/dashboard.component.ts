import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {DashboardDialogComponent} from '../dashboard-dialog/dashboard-dialog.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(public dialog: MatDialog) {
  }

  ngOnInit(): void {
  }

  /*TODO use showCreate Game throw the dialog*/
  public openDialog(showCreateGame: boolean): void {
    const dialogRef = this.dialog.open(DashboardDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
