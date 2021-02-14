import { AccountComponent } from './account.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [AccountComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{path: '', component: AccountComponent}])
  ]
})
export class AccountModule { }
