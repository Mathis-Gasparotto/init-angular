import { Component, OnInit } from '@angular/core'
import { Entity } from '../entity'
import { Router } from '@angular/router'
import { Observable, Subject, debounceTime, distinctUntilChanged, switchMap } from 'rxjs'
import { EntityService } from '../entity.service'

@Component({
  selector: 'app-search-entity',
  templateUrl: './search-entity.component.html'
})
export class SearchEntityComponent implements OnInit {

  searchTerms = new Subject<string>()
  entities$: Observable<Entity[]>

  constructor(private router: Router, private entityService: EntityService) { }

  ngOnInit() {
    this.entities$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      switchMap((term) => this.entityService.searchEntities(term))
    )
  }

  search(term: string) {
    this.searchTerms.next(term)
  }

  goToDetail(entity: Entity) {
   this.router.navigate(['/entities', entity.id])
  }

}
