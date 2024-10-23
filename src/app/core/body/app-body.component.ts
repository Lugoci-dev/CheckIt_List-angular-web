import { Component } from "@angular/core";
import { ProjectComponent } from "../../shared/projects/project.component";

@Component({
  standalone: true,
  selector: 'app-body',
  templateUrl: './app-body.component.html',
  styleUrl: './app-body.component.css',
  imports: [
    ProjectComponent
  ]
})
export class AppBodyComponent{

}
