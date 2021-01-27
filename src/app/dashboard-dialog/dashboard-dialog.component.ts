import {Component, OnInit} from '@angular/core';
import {Player} from '../interfaces/player';
import {Game} from '../interfaces/game';

@Component({
  selector: 'app-dashboard-dialog',
  templateUrl: './dashboard-dialog.component.html',
  styleUrls: ['./dashboard-dialog.component.css']
})
export class DashboardDialogComponent implements OnInit {

  player: Player = {
    name: 'player123',
    money: 3,
    projects: new Map<string, boolean>(),
    businesses: new Map<string, number>()
  };
  game: Game | undefined;

  constructor() {
  }

  ngOnInit(): void {
  }

}
