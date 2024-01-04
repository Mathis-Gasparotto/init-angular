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

  constructor(private route: ActivatedRoute, private router: Router, private entityService: EntityService) { }

  ngOnInit() {
    const id: number|null = Number(this.route.snapshot.paramMap.get('id'))
    this.entity = this.entityService.getEntityById(id)
  }

  goToEntityList() {
    this.router.navigate(['/entities'])
  }
  
  goToEditEntity() {
    this.router.navigate(['/entities', this.entity?.id, 'edit'])
  }

}
