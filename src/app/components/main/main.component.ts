import { Component, OnInit } from '@angular/core'
import { Tasks } from 'app/classes/mappers/tasks'

@Component({
  selector: 'ms-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  protected tasks: Tasks[]
  constructor() {}
  getTasks() {
    // no backend services for tasks, i use a mock.
    // but there is the place to get all tasks.
  }
  ngOnInit() {
    this.tasks = [
      new Tasks(
        'Plomeria',
        'Los mejores plomeros estan disponibles para vos de lunes a sabado.',
        '90$ a 150$ /h',
        'plom1.jpg'
      ),
      new Tasks(
        'Carpinteria',
        'Los mejores carpinteros estan disponibles para vos de lunes a sabado.',
        '90$ a 150$ /h',
        'carp1.jpg'
      ),
      new Tasks(
        'Electricista',
        'Los mejores Electricistas estan disponibles para vos de lunes a sabado.',
        '90$ a 150$ /h',
        'tecnicos2.jpg'
      ),
      new Tasks(
        'Fotografos',
        'Los mejores Fotografos estan disponibles para vos de lunes a sabado.',
        '90$ a 150$ /h',
        'limpieza.jpg'
      ),
      new Tasks(
        'Gasistas',
        'Los mejores Gasistas estan disponibles para vos de lunes a sabado.',
        '90$ a 150$ /h',
        'imgTEC1.jpg'
      ),
      new Tasks(
        'Choferes',
        'Los mejores Conductores estan disponibles para vos de lunes a sabado.',
        '90$ a 150$ /h',
        'electo.jpg'
      ),
      new Tasks(
        'Pintor',
        'Los mejores Pintores estan disponibles para vos de lunes a sabado.',
        '90$ a 150$ /h',
        'fum.jpg'
      ),
      new Tasks(
        'Artista',
        'Los mejores Artitas estan disponibles para vos de lunes a sabado.',
        '90$ a 150$ /h',
        'plom1.jpg'
      ),
      new Tasks(
        'Mecanicos',
        'Los mejores Mecanicos estan disponibles para vos de lunes a sabado.',
        '90$ a 150$ /h',
        'mecanico1.jpg'
      ),
      new Tasks(
        'Personal de eventos',
        'Los mejores Eventualeros estan disponibles para vos de lunes a sabado.',
        '90$ a 150$ /h',
        'tec3.jpg'
      ),
      new Tasks(
        'Profesores',
        'Los mejores Profesores estan disponibles para vos de lunes a sabado.',
        '90$ a 150$ /h',
        'class.jpg'
      ),
    ]
  }
}
