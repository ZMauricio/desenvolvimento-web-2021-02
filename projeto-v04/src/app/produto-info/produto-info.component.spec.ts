import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutoInfoComponent } from './produto-info.component';

describe('ProdutoInfoComponent', () => {
  let component: ProdutoInfoComponent;
  let fixture: ComponentFixture<ProdutoInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdutoInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdutoInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
