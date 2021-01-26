import {Component, OnInit} from '@angular/core';
import {ConsoleService} from '../services/console.service';

@Component({
  selector: 'app-console',
  templateUrl: './console.component.html',
  styleUrls: ['./console.component.css']
})
export class ConsoleComponent implements OnInit {

  /** Angular only binds to public component properties. */
  constructor(public consoleService: ConsoleService) {
  }

  ngOnInit(): void {
  }

}
