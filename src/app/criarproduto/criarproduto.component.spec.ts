import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarprodutoComponent } from './criarproduto.component';

describe('CriarprodutoComponent', () => {
  let component: CriarprodutoComponent;
  let fixture: ComponentFixture<CriarprodutoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CriarprodutoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CriarprodutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
