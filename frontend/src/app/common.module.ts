import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from "@angular/core";
import {
  MatButtonModule,
  MatCardModule,
  MatGridListModule,
  MatListModule,
  MatDividerModule,
  MatExpansionModule,
  MatIconModule,
  MatProgressBarModule,
  MatTooltipModule,
  MatDialogModule,
  MatSidenavModule,
  MatToolbarModule,
  MatAutocompleteModule,
  MatFormFieldModule,
  MatInputModule,
  MatRadioModule,
  MatSortModule,
  MatProgressSpinnerModule,
  MatSnackBarModule,
} from "@angular/material";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    MatListModule,
    MatDividerModule,
    MatExpansionModule,
    MatIconModule,
    MatProgressBarModule,
    MatTooltipModule,
    MatDialogModule,
    MatSidenavModule,
    MatToolbarModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    MatListModule,
    MatDividerModule,
    MatExpansionModule,
    MatIconModule,
    MatProgressBarModule,
    MatTooltipModule,
    MatDialogModule,
    MatSidenavModule,
    MatToolbarModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
  ],
  providers: [],
})
export class AppCommonModule {}
