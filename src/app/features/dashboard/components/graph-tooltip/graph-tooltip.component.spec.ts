import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphTooltipComponent } from './graph-tooltip.component';

import { TimePipe } from '../../../../shared/pipes/time.pipe';

describe('GraphTooltipComponent', () => {
  let component: GraphTooltipComponent;
  let fixture: ComponentFixture<GraphTooltipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GraphTooltipComponent, TimePipe]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphTooltipComponent);
    component = fixture.componentInstance;
  });

  it('Should have name value in name element', () => {
    component.model = {
      name: 'Some Game',
      value: 0
    };
    fixture.detectChanges();

    const nameElement = fixture.nativeElement.querySelector('.name');

    expect(nameElement.innerText).toBe('Some Game');
  });

  it('Should have formatted time in value element', () => {
    component.model = {
      name: 'Some Game',
      value: 180 // value is in seconds
    };
    fixture.detectChanges();

    const nameElement = fixture.nativeElement.querySelector('.value');

    expect(nameElement.innerText).toBe('00:03:00');
  });
});