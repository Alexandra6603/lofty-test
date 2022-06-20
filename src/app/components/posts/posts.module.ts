import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ButtonModule } from "primeng/button";
import { PostsComponent } from "./posts.component";
import { TableModule } from "primeng/table";
import { CommonModule } from "@angular/common";
import { SidebarModule } from 'primeng/sidebar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MenuModule } from 'primeng/menu';

export const importModules = [
	ButtonModule,
	TableModule,
	CommonModule,
	SidebarModule,
	BrowserAnimationsModule,
	InputTextModule,
	InputTextareaModule,
	FormsModule,
	ReactiveFormsModule,
	MenuModule
];
@NgModule({
	declarations: [PostsComponent],
	exports: [PostsComponent],
	imports: [
		...importModules,
		RouterModule.forChild([
			{
				path: '',
				component: PostsComponent,
			},
		]),
	],
    schemas: [NO_ERRORS_SCHEMA]
})
export class PostsModule {}
