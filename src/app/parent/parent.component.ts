import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ChildComponent } from "../child/child.component";

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit, AfterViewInit {
    @ViewChild(ChildComponent) child?: ChildComponent;

    constructor() { }

    ngOnInit(): void {
    }

    ngAfterViewInit(): void {
        console.log(this.child?.message);
    }
}
