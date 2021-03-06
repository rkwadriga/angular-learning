import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UserComponent} from "./user/user.component";
import {AdminComponent} from "./admin/admin.component";
import {ChildAComponent} from "./child-a/child-a.component";
import {ChildBComponent} from "./child-b/child-b.component";
import {MyGuard} from "./my.guard";

const routes: Routes = [
    {
        path: "user",
        component: UserComponent,
        canActivate: [MyGuard]
    },
    {
        path: 'admin',
        component: AdminComponent,
        children: [
            {
                path: "child-a",
                component: ChildAComponent
            },
            {
                path: "user/:id",
                component: ChildBComponent
            }
        ]
    },
    {
        path: "**",
        component: UserComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
