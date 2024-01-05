import { Injectable } from '@angular/core'
import { Entity } from './entity'
import { ENTITIES } from './mock-entity-list'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable, catchError, of, tap } from 'rxjs'

@Injectable()
export class EntityService {

  constructor(private http: HttpClient) { }

  getEntities(): Observable<Entity[]> {
    return this.http.get<Entity[]>('api/entities').pipe(
      tap((res) => this.log(res)),
      catchError((err) => this.handleError(err, []))
    )
  }

  getEntityById(id: number): Observable<Entity|undefined> {
    return this.http.get<Entity>(`api/entities/${id}`).pipe(
      tap((res) => this.log(res)),
      catchError((err) => this.handleError(err, undefined))
    )
  }

  private log(res: any) {
    if (Array.isArray(res) || typeof res === 'object') {
      console.table(res)
    } else {
      console.log(res)
    }
  }
  
  private handleError(err: Error, errorValue: any): Observable<any> {
    console.error(err)
    return of(errorValue)
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

  updateEntity(entity: Entity): Observable<null> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }
    return this.http.put(`api/entities/${entity.id}`, entity, httpOptions).pipe(
      tap((res) => this.log(res)),
      catchError((err) => this.handleError(err, null))
    )
  }

  deleteEntityById(id: number): Observable<null> {
    return this.http.delete(`api/entities/${id}`).pipe(
      tap((res) => this.log(res)),
      catchError((err) => this.handleError(err, null))
    )
  }

  createEntity(entity: Entity): Observable<Entity> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }
    return this.http.post<Entity>(`api/entities`, entity, httpOptions).pipe(
      tap((res) => this.log(res)),
      catchError((err) => this.handleError(err, null))
    )
  }

  searchEntities(term: string): Observable<Entity[]> {
    term = term.trim()
    if (term.length < 2) {
      return of([])
    }
    return this.http.get<Entity[]>(`api/entities/?name=${term}`).pipe(
      tap((res) => this.log(res)),
      catchError((err) => this.handleError(err, []))
    )
  }
}
