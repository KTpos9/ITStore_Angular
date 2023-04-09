import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateMemberComponent } from './update-member.component';

describe('UpdateMemberComponent', () => {
  let component: UpdateMemberComponent;
  let fixture: ComponentFixture<UpdateMemberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateMemberComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
