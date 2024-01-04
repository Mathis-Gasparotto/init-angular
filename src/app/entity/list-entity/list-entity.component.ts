import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { EntityService } from '../entity.service'
import { Entity } from '../entity'

@Component({
  selector: 'app-list-entity',
  templateUrl: './list-entity.component.html',
  styles: [
  ]
})
export class ListEntityComponent implements OnInit {
  entities: Entity[]

  constructor(private router: Router, private entityService: EntityService) { }

  ngOnInit() {
    this.entities = this.entityService.getEntities()
  }

  goToEntityDetails(id: number) {
    this.router.navigate(['/entities', id])
  }

}
