import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SvgArrowLeftComponent } from './svg-arrow-left.component';

describe('SvgArrowLeftComponent', () => {
  let component: SvgArrowLeftComponent;
  let fixture: ComponentFixture<SvgArrowLeftComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SvgArrowLeftComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SvgArrowLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
