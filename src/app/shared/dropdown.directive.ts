import { Directive , HostListener, HostBinding} from '@angular/core'

@Directive({
    selector: '[appDropDown]'
})

export class dropdown{
@HostBinding('class.open') isopen = false;

    @HostListener('click') opentoggle(){
        this.isopen = !this.isopen;
    }

}