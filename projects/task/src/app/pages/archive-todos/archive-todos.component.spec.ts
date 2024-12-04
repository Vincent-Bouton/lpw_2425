import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchiveTodosComponent } from './archive-todos.component';

describe('ArchiveTodosComponent', () => {
  let component: ArchiveTodosComponent;
  let fixture: ComponentFixture<ArchiveTodosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArchiveTodosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArchiveTodosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
