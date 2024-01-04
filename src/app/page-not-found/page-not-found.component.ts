import { Component } from '@angular/core'

@Component({
  selector: 'page-404',
  template: `
  <div class='center'>
    <img src="http://assets.pokemon.com/assets/cms2/img/pokedex/full/035.png"/>
    <h1>Page Not Found!</h1>
    <a routerLink="/" class="waves-effect waves-teal btn-flat">
      Back to Home Page
    </a>
  </div>
`
})
export class PageNotFoundComponent {

  constructor() {}

}
