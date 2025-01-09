import { Component } from '@angular/core';
import {ButtonModule} from '@syncfusion/ej2-angular-buttons';
import {Toolbar} from '@syncfusion/ej2-navigations';

@Component({
  selector: 'app-root',
  imports: [ ButtonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  public ngAfterViewInit() {
    let toolbar: Toolbar = new Toolbar({
    });
    toolbar.appendTo('#toolbar');
  }
}
