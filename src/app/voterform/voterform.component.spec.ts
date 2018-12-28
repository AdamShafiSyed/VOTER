import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoterformComponent } from './voterform.component';

describe('VoterformComponent', () => {
  let component: VoterformComponent;
  let fixture: ComponentFixture<VoterformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoterformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoterformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
