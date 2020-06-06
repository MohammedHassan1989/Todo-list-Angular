import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import Swal from 'sweetalert2'
import { ScaleRotate } from 'src/app/shared/animations/scale-rotate-animation';
import { hoverItem } from 'src/app/shared/animations/list-animation';
@Component({
  selector: 'app-goals-list',
  templateUrl: './goals-list.component.html',
  styleUrls: ['./goals-list.component.css'],
  animations:[ScaleRotate,hoverItem]
})
export class GoalsListComponent implements OnInit, AfterViewInit  {

  isHover:boolean=false;
  isDeleteButtonHover:boolean=false;
  isListItemHover:boolean=false;
  @ViewChild('scrollframe', {static: false}) scrollFrame: ElementRef;
  @ViewChild('scrollmodal', {static: false}) scrollModal: ElementRef;
  private scrollContainer: any;
  private _scrollModal: any;
  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit() {
    this.scrollContainer = this.scrollFrame.nativeElement;  
    this._scrollModal = this.scrollModal.nativeElement;  
  }
  isBookMaeked: boolean = false;
  IsBookMaeked(): boolean {
    this.isBookMaeked = !this.isBookMaeked;
    return this.isBookMaeked;
  }


  isDone: boolean = false;
  IsDone(): boolean {
    this.isDone = !this.isDone;
    return this.isDone;
  }

  DeleteItem(): void {
    Swal.fire({
      title: 'Are you sure?',
      text: "You want to delete this activity!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.value) {
        Swal.fire({
          icon: 'success',
          title: 'Your activity has been deleted',
          showConfirmButton: false,
          timer: 1000

        })
      }
    });
  }


  toggleButtonOver(){
    this.isHover=true;
  }
  toggleButtonOut(){
    this.isHover=false;
  }
  toggleDeleteButtonOver(){
    this.isDeleteButtonHover=true;
  }
  toggleDeleteButtonOut(){
    this.isDeleteButtonHover=false;
  }
   scrollToBottom(): void {
    console.log(this.scrollContainer)
    this._scrollModal.scroll({ // <- Scroll window instead of scrollContainer
      top: this.scrollContainer.scrollHeight,
      left: 0,
      behavior: 'smooth'
    });
  }


  toggleListItemButtonOver(){
    this.isListItemHover=true;
  }
  toggleListItemButtonOut(){
    this.isListItemHover=false;
  }
}
