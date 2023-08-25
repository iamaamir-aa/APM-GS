import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from "@angular/core";


@Component({
selector:"pm-star",
templateUrl:"./star.component.html",
styleUrls:["./star.component.css"]
})

export class StarComponent implements OnChanges{
    @Input() ratings=0;
    cropWidth=75;
@Output() notifyClicked:EventEmitter<string>= new EventEmitter<string>();
    ngOnChanges(): void {
        this.cropWidth=75/5 * this.ratings;
    }
onClicked(){
this.notifyClicked.emit("HELLo");
}

}

