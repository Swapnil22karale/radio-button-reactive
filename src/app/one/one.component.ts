import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent {
 isHidden : boolean = true;
  isHidden2 : boolean = true;
  @ViewChild('phone')phone : ElementRef | any;
  @ViewChild('email')email : ElementRef | any; 
  handleRadioClick1(){
    if(this.phone.nativeElement.value){
      this.isHidden = false;
      this.isHidden2 = true;
      this.phone.checked = true;
      this.email.checked = false;
    }
  }
  handleRadioClick2(){
    if(this.email.nativeElement.value){
      this.isHidden2 = false;
      this.isHidden = true;
      this.email.checked = true;
      this.phone.checked = false;
    }
  }
}
