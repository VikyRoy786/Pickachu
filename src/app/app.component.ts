import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './app.component.html'
  
})
export class AppComponent {
  title : string = 'PIKACHU';
  names : string[] = ["Vikram", "Raj", "Ravi"];
  addname : string ="";

  remove(a:number):void{
    this.names.splice(a,1)
  }
  add():void{
    this.names.push(this.addname)
    this.addname = ""
  }
 
  sort():void{
   this.names.sort()
  }
}
