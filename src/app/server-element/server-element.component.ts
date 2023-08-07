import { ViewEncapsulation } from '@angular/compiler';
import { Component , OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  // encapsulation: ViewEncapsulation.Emulated
})
export class ServerElementComponent implements OnInit {
  @Input('srvElement') element: {type:string, name:string, content: string}= {type: '', name: '', content: ''};

  constructor() { }

  ngOnInit(): void {

  }


}
