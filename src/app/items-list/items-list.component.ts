import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { finalize } from 'rxjs';
import { SupabaseService } from '../../services/supabase.service';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.css'],
})
export class ItemsListComponent {
  canAdd: boolean = false;
  loading: boolean = true;
  items:
    | {
        id: number;
        name: string;
        created_at: string;
      }[]
    | null = null;
  myForm: FormGroup;

  constructor(
    private readonly supabase: SupabaseService,
    private formBuilder: FormBuilder
  ) {
    this.myForm = this.formBuilder.group({
      inputValue: [''], // Initial value for the input
    });
  }

  async ngOnInit(): Promise<void> {
    this.getItems();
  }

  async getItems() {
    try {
      this.loading = true;
      const { data } = await this.supabase.getItems();
      this.items = data;
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      }
    } finally {
      this.loading = false;
    }
  }

  add() {
    this.canAdd = true;
  }

  async saveValue() {
    const valueToSave = this.myForm.get('inputValue')?.value;
    this.supabase
      .createItem(valueToSave)
      .pipe(
        finalize(() => {
          this.myForm.reset();
        })
      )
      .subscribe({
        next: (response) => {
          if (response.data) {
            this.myForm.reset();
            const data = response.data;
            this.items?.push({
              created_at: data.created_at,
              id: data.id,
              name: data.name,
            });
          }
        },
        error: (error) => {
          console.error('Error creating item:', error);
        },
      });
  }

  cancel() {
    this.myForm.reset();
    this.canAdd = false;
  }
}
