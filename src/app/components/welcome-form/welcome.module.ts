import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ButtonModule } from "primeng/button";
import { WelcomeFormComponent } from "./welcome-form.component";
import { InputTextModule } from "primeng/inputtext"
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from "@angular/forms";

export const importModules = [
	ButtonModule,
	InputTextModule,
	HttpClientModule,
	ReactiveFormsModule
];
@NgModule({
	declarations: [WelcomeFormComponent],
	exports: [WelcomeFormComponent],
	imports: [
		...importModules,
		RouterModule.forChild([
			{
				path: '',
				component: WelcomeFormComponent,
			},
		]),
	],
    bootstrap: []
})
export class WelcomeModule {}