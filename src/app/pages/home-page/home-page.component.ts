import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';  // Add this import
import { RecipeCardComponent } from "../recipe-card/recipe-card.component";
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {

  MatDialog,
 
} from '@angular/material/dialog';
import { CreateRecipeFormComponent } from '../../create-recipe-form/create-recipe-form.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule, RecipeCardComponent, MatIconModule, MatButtonModule],  // Include CommonModule for *ngFor
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']  // Correct to styleUrls
})
export class HomePageComponent {
  recipes = [1, 2, 3, 4, 5];  // Example recipe data
constructor(public dialog : MatDialog){

}
  handleopenCreateRecipeForm(){
    
    this.dialog.open(CreateRecipeFormComponent) //open view
  }
}
