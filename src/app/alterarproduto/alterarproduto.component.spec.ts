import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlterarprodutoComponent } from './alterarproduto.component';

describe('AlterarprodutoComponent', () => {
  let component: AlterarprodutoComponent;
  let fixture: ComponentFixture<AlterarprodutoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlterarprodutoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlterarprodutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
