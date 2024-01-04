import { Injectable } from '@angular/core';
import { Entity } from './entity';
import { ENTITIES } from './mock-entity-list';

@Injectable()
export class EntityService {

  getEntities(): Entity[] {
    return ENTITIES
  }

  getEntityById(id: number): Entity|undefined {
    return ENTITIES.find(entity => entity.id == id)
  }

  getEntityTypeList(): string[] {
    let entityTypeList: string[] = []
    ENTITIES.forEach(entity => {
      entity.types.forEach(type => {
        if (!entityTypeList.includes(type)) {
          entityTypeList.push(type)
        }
      }
    )})
    return entityTypeList
  }
}
