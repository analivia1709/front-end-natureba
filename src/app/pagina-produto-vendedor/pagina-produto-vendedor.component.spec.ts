import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaProdutoVendedorComponent } from './pagina-produto-vendedor.component';

describe('PaginaProdutoVendedorComponent', () => {
  let component: PaginaProdutoVendedorComponent;
  let fixture: ComponentFixture<PaginaProdutoVendedorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginaProdutoVendedorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaProdutoVendedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
