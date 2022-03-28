import { Component, OnInit, Input } from '@angular/core';

interface User {
    name: string,
    avatar: string
};

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
    @Input() users: User[] = [];

    constructor() { }

    ngOnInit(): void {
    }
}