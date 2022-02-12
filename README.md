# NgxFragmentLinkFaker

Mimics default browser behavior of fragment links in Angular applications.\
Allows applying changes in a scoped manner using a simple directive.\
Supports smooth scroll behavior.

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.0.0.

## Usage

Simply add the `mhFakeFragmentLinks` directive to a wrapper element in your template.\
In case you need to account for e.g. a fixed navbar simply provide a delta in px.

Example: `<main mhFakeFragmentLinks [mhScrollTopDelta]="64"> … </main>`

You might as well configure the scroll behavior to enable smooth scrolling:

Example: `<main mhFakeFragmentLinks mhScrollBehavior="smooth"> … </main>`

> Smooth scroll behavior is not supported in all browsers at the time of writing.\
> However, you may simply add a polyfill for now:
> 
> `npm i seamless-scroll-polyfill --save`
> 
> ```ts
> // src/polyfills.ts
> 
> import { polyfill as polyfillSeamlessScroll } from "seamless-scroll-polyfill";
> polyfillSeamlessScroll();
> ```

## Code scaffolding

Run `ng generate component component-name --project ngx-fragment-link-faker` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module --project ngx-fragment-link-faker`.
> Note: Don't forget to add `--project ngx-fragment-link-faker` or else it will be added to the default project in your `angular.json` file. 

## Build

Run `ng build ngx-fragment-link-faker` to build the project. The build artifacts will be stored in the `dist/` directory.

## Publishing

After building your library with `ng build ngx-fragment-link-faker`, go to the dist folder `cd dist/ngx-fragment-link-faker` and run `npm publish`.

## Running unit tests

Run `ng test ngx-fragment-link-faker` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
