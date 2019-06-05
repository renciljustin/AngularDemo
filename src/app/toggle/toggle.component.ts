import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

export interface IToggleEventArgs {
  checked: boolean;
}

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.css']
})
export class ToggleComponent implements OnInit {

  // tslint:disable-next-line:no-input-rename
  @Input('checked') checked: boolean;
  // tslint:disable-next-line:no-output-rename
  @Output('toggle') toggle = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onToggle() {
    this.toggle.emit({ checked: this.checked } as IToggleEventArgs);
  }

}
