import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { Entity } from '../entity'
import { ENTITIES } from '../mock-entity-list'

@Component({
  selector: 'app-details-entity',
  templateUrl: './details-entity.component.html',
  styles: [
  ]
})
export class DetailsEntityComponent implements OnInit {
  entities: Entity[] = ENTITIES
  entity: Entity|undefined

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    const id: number|null = Number(this.route.snapshot.paramMap.get('id'))
    this.entity = this.entities.find(e => e.id === id)
  }

  goToEntityList() {
    this.router.navigate(['/entities'])
  }

}
