import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocktorSearchComponent } from './docktor-search.component';

describe('DocktorSearchComponent', () => {
  let component: DocktorSearchComponent;
  let fixture: ComponentFixture<DocktorSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocktorSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocktorSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
