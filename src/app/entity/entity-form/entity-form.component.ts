import { Component, Input, OnInit } from '@angular/core'
import { EntityService } from '../entity.service'
import { Entity } from '../entity'
import { Router } from '@angular/router'

@Component({
  selector: 'app-entity-form',
  templateUrl: './entity-form.component.html',
  styleUrls: ['./entity-form.component.scss']
})
export class EntityFormComponent implements OnInit {
  @Input() entity: Entity
  types: string[]
  isAddForm: boolean

  constructor(private entityService: EntityService, private router: Router) { }

  ngOnInit() {
    this.types = this.entityService.getEntityTypeList()
    this.isAddForm = this.router.url.includes('add')
  }

  hasType(type: string): boolean {
    return this.entity.types.includes(type)
  }

  selectType($envent: Event,type: string) {
    const isChecked = ($envent.target as HTMLInputElement).checked

    if (isChecked && !this.hasType(type)) {
      this.entity.types.push(type)
    } else if (!isChecked) {
      this.entity.types = this.entity.types.filter(t => t !== type)
    }
  }

  onSubmit() {
    if (this.isAddForm) {
      this.entityService.createEntity(this.entity)
        .subscribe((entity: Entity) => this.router.navigate(['/entities', entity.id]))
    } else {
      this.entityService.updateEntity(this.entity)
        .subscribe(() => this.router.navigate(['/entities', this.entity.id]))
    }
  }

  isTypesValid(type: string): boolean {
    if (this.entity.types.length === 1 && this.hasType(type)) {
      return false
    }

    if (this.entity.types.length >=3 && !this.hasType(type)) {
      return false
    }

    return true
  }

}
