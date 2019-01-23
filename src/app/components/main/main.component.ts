import { Component, OnInit } from '@angular/core'
import { Tasks, TasksInterface } from 'app/classes/mappers/tasks'
import { LoggerService } from '@app/utils/logger/logger.service'
import { FirestoreService } from '@app/Services/firestore.service'
import { finalize } from 'rxjs/operators'
import { Observable } from 'rxjs'

@Component({
  selector: 'ms-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  protected tasks: Tasks[]
  protected tas: any
  constructor(
    private _logger: LoggerService,
    private _firestore: FirestoreService
  ) {}
  getTasks() {
    // no backend services for tasks, i use a mock.
    // but there is the place to get all tasks.
    this._firestore.get('tasks').subscribe(
      tasks => {
        this._logger.info(tasks)
        this.tas = tasks
      },
      err => {
        this._logger.error(err)
      }
    )
  }

  set() {
    this.tasks.forEach(task => {
      this._logger.info(task)
      const data: TasksInterface = {
        id: Math.random()
          .toString(36)
          .substring(2),
        name: task.title.toLocaleLowerCase().substr(0, 2),
        title: task.title,
        description: task.description,
        salaryRange: task.salaryRange,
        lastModidyDate: new Date().getTimezoneOffset().toLocaleString(),
        imageUrl: task.imageUrl,
        createdDate: new Date().toISOString(),
      }
      this._firestore
        .post('tasks', data)
        .then(res => this._logger.info(`Saved: ${res.id}`))
        .catch(err => {
          this._logger.error(err)
        })
    })
  }
  ngOnInit() {
    this.getTasks()
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
        'carpinteria.jpg'
      ),
      new Tasks(
        'Electricidad',
        'Los mejores Electricistas estan disponibles para vos de lunes a sabado.',
        '90$ a 150$ /h',
        'electricidad.jpg'
      ),
      new Tasks(
        'Fotografia',
        'Los mejores Fotografos estan disponibles para vos de lunes a sabado.',
        '90$ a 150$ /h',
        'fotografo.jpg'
      ),
      new Tasks(
        'Diseño Grafico',
        'Los mejores Fotografos estan disponibles para vos de lunes a sabado.',
        '90$ a 150$ /h',
        'graficos.jpg'
      ),
      new Tasks(
        'Gas',
        'Los mejores Gasistas estan disponibles para vos de lunes a sabado.',
        '90$ a 150$ /h',
        'gasista.jpg'
      ),
      new Tasks(
        'Conductores',
        'Los mejores Conductores estan disponibles para vos de lunes a sabado.',
        '90$ a 150$ /h',
        'chofer.jpg'
      ),
      new Tasks(
        'Pintureria',
        'Los mejores Pintores estan disponibles para vos de lunes a sabado.',
        '90$ a 150$ /h',
        'pintor.jpg'
      ),
      new Tasks(
        'Arte',
        'Los mejores Artitas estan disponibles para vos de lunes a sabado.',
        '90$ a 150$ /h',
        'artista.jpg'
      ),
      new Tasks(
        'Mecanic',
        'Los mejores Mecanicos estan disponibles para vos de lunes a sabado.',
        '90$ a 150$ /h',
        'mecanico.jpg'
      ),
      new Tasks(
        'Personal de eventos',
        'Los mejores Eventualeros estan disponibles para vos de lunes a sabado.',
        '90$ a 150$ /h',
        'evento.jpg'
      ),
      new Tasks(
        'Profesor particular',
        'Los mejores Profesores estan disponibles para vos de lunes a sabado.',
        '90$ a 150$ /h',
        'profesor.jpg'
      ),
      new Tasks(
        'Maquillaje',
        'Los mejores Profesores estan disponibles para vos de lunes a sabado.',
        '90$ a 150$ /h',
        'maquillador.jpg'
      ),
      new Tasks(
        'Peluqueria',
        'Los mejores Profesores estan disponibles para vos de lunes a sabado.',
        '90$ a 150$ /h',
        'peluquero.jpg'
      ),
      new Tasks(
        'Limpieza',
        'Los mejores Profesores estan disponibles para vos de lunes a sabado.',
        '90$ a 150$ /h',
        'limpieza.jpg'
      ),
    ]
  }

  moreInfo(event, task: Tasks) {
    this._logger.info(`Profession selected is : ${task.title}`)
    const file = event.target.files[0]
    const result = this._firestore.upload(file, task)
  }

  async upload(event, task: Tasks) {
    this._logger.info(`Profession selected is : ${task.title}`)
    const file = event.target.files[0]
    return await this._firestore.upload(file, task)
  }
}
