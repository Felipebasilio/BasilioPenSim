import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ButtonComponent } from './button/button.component';
import { InputComponent } from './input/input.component';

@NgModule({
  imports: [CommonModule, HeaderComponent, FooterComponent, ButtonComponent, InputComponent],
  exports: [HeaderComponent, FooterComponent, ButtonComponent, InputComponent],
})
export class GlobalComponentsModule {}