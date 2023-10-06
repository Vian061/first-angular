import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrawerMenuItemComponent } from './drawer-menu-item.component';

describe('DrawerMenuItemComponent', () => {
  let component: DrawerMenuItemComponent;
  let fixture: ComponentFixture<DrawerMenuItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DrawerMenuItemComponent]
    });
    fixture = TestBed.createComponent(DrawerMenuItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
