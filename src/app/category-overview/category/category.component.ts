import { animate, keyframes, state, style, transition, trigger } from '@angular/animations';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
  animations: [
    trigger('showHide', [
      state(
        'hide',
        style({
          height: '0px',
          opacity: 0
        })
      ),
      state(
        'show',
        style({
          height: '150px',
          opacity: 0.6
        })
      ),
      transition('hide => show', animate('.35s ease', keyframes([
        style({height: '0px', opacity: 0, offset: 0}),
        style({height: '150px', opacity: 0, offset: 0.6}),
        style({height: '150px', opacity: 0.6, offset: 1})
      ])
      )),
      transition('show => hide', animate('.2s ease'))
  ]
    ),
    trigger('enableViewCategory', [
      state('disabled', style({
        'background-color': 'transparent'
      })),
      state('enabled', style({
        'background-color': '#E4B22B',
        width: '250px',
        height: '56px',
        'border-radius': '28px',
        color: '#222222',
        'letter-spacing': '1.21px',
        'font-size': '18px',
        'font-weight': '600'
      })),
      transition('disabled => enabled', animate('0.2s ease'))
    ])
  ]
})
export class CategoryComponent implements OnInit {

  @Input() category: any;
  @Input() active = false;
  @Output() clickedCategory: EventEmitter<string> = new EventEmitter();

  activeCategory = 'liquor';

  constructor(private router: Router) { }

  ngOnInit() {
  }

  triggerCategory() {
    if (this.active) {
      this.router.navigate(['/gallery']);
    } else {
      this.clickedCategory.emit(this.category.name);
    }
    this.active = !this.active;
  }

}
