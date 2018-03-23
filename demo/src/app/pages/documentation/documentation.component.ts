import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'documentation',
  templateUrl: './documentation.component.html',
  styleUrls: ['./documentation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  preserveWhitespaces: false
})
export class DocumentationComponent {

}
