import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogViewProjectComponent } from './dialog-view-project.component';

describe('DialogViewProjectComponent', () => {
  let component: DialogViewProjectComponent;
  let fixture: ComponentFixture<DialogViewProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogViewProjectComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogViewProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
