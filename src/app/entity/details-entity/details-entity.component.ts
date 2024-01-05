import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { Entity } from '../entity'
import { EntityService } from '../entity.service'

@Component({
  selector: 'app-details-entity',
  templateUrl: './details-entity.component.html',
  styles: [
  ]
})
export class DetailsEntityComponent implements OnInit {
  entity: Entity|undefined
  loading: boolean = true

  constructor(private route: ActivatedRoute, private router: Router, private entityService: EntityService) { }

  ngOnInit() {
    const id: number|null = Number(this.route.snapshot.paramMap.get('id'))
    this.entityService.getEntityById(id).subscribe(entity => {
      this.entity = entity
      this.loading = false
    })
  }

  goToEntityList() {
    this.router.navigate(['/entities'])
  }
  
  goToEditEntity(entity: Entity) {
    this.router.navigate(['/entities', entity.id, 'edit'])
  }

  deleteEntity(entity: Entity) {
    this.entityService.deleteEntityById(entity.id).subscribe(() => this.goToEntityList())
  }

}
