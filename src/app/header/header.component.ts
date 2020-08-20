import { Component, Output, EventEmitter } from '@angular/core';


@Component({
    selector : 'app-header',
    templateUrl :'./header.component.html',
    styleUrls: ['./header.component.css']

})
export class HeaderComponent{
 @Output() featureselected = new EventEmitter<string>();


    OnClicked(feature : string){
        this.featureselected.emit(feature);

    }

}