import { Injectable, OnInit } from "@angular/core";
import { CanDeactivate } from '@angular/router';
import { MemberEditComponent } from '../members/member-edit/member-edit.component';



@Injectable()

export class PreventUnsavedChanges implements CanDeactivate<MemberEditComponent> {
    canDeactivate(component: MemberEditComponent) {
        if (component.editUserProfile.dirty) {
            return confirm('Are you sure you want to continue? Your changes will be lost')
        }
        return true;
    }

}