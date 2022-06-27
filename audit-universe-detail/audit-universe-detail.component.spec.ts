import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuditUniverseDetailComponent } from './audit-universe-detail.component';

describe('AuditUniverseDetailComponent', () => {
  let component: AuditUniverseDetailComponent;
  let fixture: ComponentFixture<AuditUniverseDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuditUniverseDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuditUniverseDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
