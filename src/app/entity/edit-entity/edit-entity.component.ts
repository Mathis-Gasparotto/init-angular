import { Component, OnInit } from '@angular/core'
import { Entity } from '../entity'
import { ActivatedRoute } from '@angular/router'
import { EntityService } from '../entity.service'

@Component({
  selector: 'app-edit-entity',
  template: `
    <div *ngIf="entity" class="center">
      <h2>Edit {{entity.name}}</h2>
      <img [src]="entity.picture">
    </div>
    <app-entity-form *ngIf="entity" [entity]="entity"></app-entity-form>
  `,
  styles: [
  ]
})
export class EditEntityComponent implements OnInit {

  entity: Entity|undefined

  constructor(private route: ActivatedRoute, private entityService: EntityService) { }

  ngOnInit() {
    const entityId: number|null = Number(this.route.snapshot.paramMap.get('id'))
    if (entityId) {
      this.entity = this.entityService.getEntityById(entityId)
    }
  }

}
