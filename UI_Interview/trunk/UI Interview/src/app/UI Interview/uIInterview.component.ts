import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    templateUrl: 'uIInterview.component.html'
})
export class UIInterviewComponent implements OnInit {

    constructor() {

    }

    //@ViewChild('myCanvas') c: ElementRef;

    ngOnInit() {
        //var ctx = this.c.nativeElement.getContext("2d");

        setTimeout(() => {
            var img = new Image();
            var c1 = <HTMLCanvasElement>document.getElementById('myCanvas');
            var ctx = c1.getContext('2d');
            img.src = 'assets/003_IMAGE_02-300x300.jpg';
            img.onload = function () {
                ctx.drawImage(img,0, 0,170,200);
            }

        }, 300);


    }
    ngAfterViewInit() {

    }
    ngOnDestroy() {

    }
}



