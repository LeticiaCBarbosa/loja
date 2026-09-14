import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConsultaProdutos } from './consulta';

describe('ConsultaProdutos', () => {
  let component: ConsultaProdutos;
  let fixture: ComponentFixture<ConsultaProdutos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultaProdutos],
    }).compileComponents();

    fixture = TestBed.createComponent(ConsultaProdutos);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});