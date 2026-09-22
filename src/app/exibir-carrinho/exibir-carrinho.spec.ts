import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExibirCarrinho } from './exibir-carrinho';

describe('ExibirCarrinho', () => {
  let component: ExibirCarrinho;
  let fixture: ComponentFixture<ExibirCarrinho>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExibirCarrinho]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExibirCarrinho);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
