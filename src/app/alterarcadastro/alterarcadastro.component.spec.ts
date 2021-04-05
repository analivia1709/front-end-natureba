import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlterarcadastroComponent } from './alterarcadastro.component';

describe('AlterarcadastroComponent', () => {
  let component: AlterarcadastroComponent;
  let fixture: ComponentFixture<AlterarcadastroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlterarcadastroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlterarcadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
