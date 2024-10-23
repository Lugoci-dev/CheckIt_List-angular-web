import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";

@Component({
  standalone: true,
  selector: 'shared-project',
  templateUrl: './project.component.html',
  styleUrl: './project.component.css',
  imports: [CommonModule]
})
export class ProjectComponent{

  public listProject: any = [
    {
      folderName: 'Proyecto A',
      projectTitle: 'Desarrollo de Aplicación Móvil',
      taskCount: 10,
      resolvedTaskCount: 5,
      importantTaskCount: 3,
      importance: 'important',
      expirationStatus: 'inTime',
      deadline: '2023-12-01',
      tags: ['móvil', 'desarrollo', 'importante']
  },
  {
      folderName: 'Proyecto B',
      projectTitle: 'Rediseño de Sitio Web',
      taskCount: 8,
      resolvedTaskCount: 8,
      importantTaskCount: 2,
      importance: 'middle',
      expirationStatus: 'completed',
      deadline: '2023-10-15',
      tags: ['web', 'diseño', 'rediseño']
  },
  {
      folderName: 'Proyecto C',
      projectTitle: 'Investigación de Mercado',
      taskCount: 5,
      resolvedTaskCount: 2,
      importantTaskCount: 1,
      importance: 'normal',
      expirationStatus: 'warning',
      deadline: '2024-01-30',
      tags: ['investigación', 'mercado']
  },
  {
    folderName: 'Proyecto C',
    projectTitle: 'Investigación de Mercado',
    taskCount: 5,
    resolvedTaskCount: 2,
    importantTaskCount: 1,
    importance: 'normal',
    expirationStatus: 'expired',
    deadline: '2024-01-30',
    tags: ['investigación', 'mercado']
}
  ]

}
