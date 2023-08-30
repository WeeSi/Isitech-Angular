import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { browser, by, element } from 'protractor';
import { of } from 'rxjs';
import { SupabaseService } from '../../services/supabase.service';
import { ItemsListComponent } from './items-list.component';

describe('ItemsListComponent', () => {
  let component: ItemsListComponent;
  let fixture: ComponentFixture<ItemsListComponent>;
  let supabaseServiceMock: jasmine.SpyObj<SupabaseService>;

  beforeEach(async () => {
    const supabaseServiceSpy = jasmine.createSpyObj('SupabaseService', [
      'createItem',
      'getItems',
    ]);
    TestBed.configureTestingModule({
      declarations: [ItemsListComponent],
      imports: [ReactiveFormsModule],
      providers: [{ provide: SupabaseService, useValue: supabaseServiceSpy }],
    });

    fixture = TestBed.createComponent(ItemsListComponent);
    component = fixture.componentInstance;
    supabaseServiceMock = TestBed.inject(
      SupabaseService
    ) as jasmine.SpyObj<SupabaseService>;
    fixture.detectChanges();
  });

  it('should load items on initialization', async () => {
    const items = [
      { id: 1, name: 'Item 1', created_at: '2023-08-30' },
      { id: 2, name: 'Item 2', created_at: '2023-08-31' },
    ];

    fixture.detectChanges();

    expect(items).toEqual(jasmine.any(Array));
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
