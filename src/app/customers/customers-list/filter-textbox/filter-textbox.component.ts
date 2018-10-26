import { Component, OnInit, Output, Input } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-filter-textbox',
  templateUrl: './filter-textbox.component.html',
  styleUrls: ['./filter-textbox.component.css']
})
export class FilterTextboxComponent implements OnInit {

  private _filter: string;
  @Input() get filter() {
    return this._filter;
  }
  // Atualizar o valor inserido na textbox
  set filter(value: string) {
    this._filter = value;
    this.changed.emit(this.filter); // Raise changed event
  }
  // Este Emitter é chamado acima no set filter para enviar o evento.
  @Output() changed: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {

  }

}
