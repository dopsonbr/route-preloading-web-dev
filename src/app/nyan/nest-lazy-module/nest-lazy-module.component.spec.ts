import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NestLazyModuleComponent } from './nest-lazy-module.component';

describe('NestLazyModuleComponent', () => {
  let component: NestLazyModuleComponent;
  let fixture: ComponentFixture<NestLazyModuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NestLazyModuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NestLazyModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
