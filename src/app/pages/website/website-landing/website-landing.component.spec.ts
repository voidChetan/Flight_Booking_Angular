import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebsiteLandingComponent } from './website-landing.component';

describe('WebsiteLandingComponent', () => {
  let component: WebsiteLandingComponent;
  let fixture: ComponentFixture<WebsiteLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WebsiteLandingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WebsiteLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
