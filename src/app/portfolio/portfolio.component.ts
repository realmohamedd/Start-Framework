import { Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule], // Add CommonModule here
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'] // Fix typo
})
export class PortfolioComponent {

   // @ViewChildren('imageElement') myElements!: QueryList<ElementRef>;

  // show(event: Event): void {
  //   const element = (event.target as HTMLElement).closest('.img-container');
  //   if (element) {
  //     element.classList.replace('d-none', 'd-flex');
  //   }
  // }
  


  images = [
    { src: './assets/imgs/poert1.png', alt: 'poert1' },
    { src: './assets/imgs/port2.png', alt: 'port2' },
    { src: './assets/imgs/port3.png', alt: 'port3' },
    { src: './assets/imgs/poert1.png', alt: 'poert1' },
    { src: './assets/imgs/port2.png', alt: 'port2' },
    { src: './assets/imgs/port3.png', alt: 'port3' }
  ];

  
  isClicked:boolean = false;
  imgSrc:string= "";
  
  open(img:string){
    this.isClicked=true;
    this.imgSrc = img;
  }
  close(){
    this.isClicked=false;
  }

  // selectedImage: string | undefined;
  // isModalOpen = false;
  // openModal(imageSrc: string) {
  //   this.selectedImage = imageSrc;
  //   this.isModalOpen = true;
  // }

  // closeModal() {
  //   this.isModalOpen = false;
  // }

  // hello(): void {
  //   console.log("hello");
  // }
}
