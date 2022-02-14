# NgxFragmentLinkFaker

Mimics default browser behavior of fragment links in Angular applications.\
Allows applying changes in a scoped manner using a simple directive.\
Supports smooth scroll behavior.

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.0.0.

## Example use case

E.g. you have existing HTML content with a table of contents:

```html
<h2>Table of contents</h2>
<ul>
  <li><a href="#some-headline">Some Headline</a></li>
  <li><a href="#another-headline">Another Headline</a></li>
</ul>

<article>
  <h2 id="some-headline">Some Headline</h2>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
  </p>
</article>

<article>
  <h2>
    <a name="another-headline"></a>
    Another Headline
  </h2>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
  </p>
</article>
```

This table of contents does not work as expected in an Angular app.\
Clicking one of the links would not adjust the scroll position.\
Instead you'd trigger a navigation to the homepage.

Usually the solution requires manual changes to the original HTML content.\
Also you'd typically need to handle click events or fragment changes somehow.\
Probably you want a nice smooth scroll effect that works in all major browser.

This library gets the job done without changing any of the existing HTML contents.

## Setup

1. `npm i @hettiger/ngx-fragment-link-faker --save`
2. Import the `FragmentLinkFakerModule` module

```ts
import { FragmentLinkFakerModule } from '@hettiger/ngx-fragment-link-faker';

@NgModule({
  imports: [
    // …
    FragmentLinkFakerModule,
  ],
  // …
})
// …
```

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

## Brief example

```html
<main mhFakeFragmentLinks [mhScrollTopDelta]="20" mhScrollBehavior="smooth">
  <h2>Table of contents</h2>
  <ul>
    <li>
      <a href="#some-headline">Some Headline</a>
      <a href="#another-headline">Another Headline</a>
    </li>
  </ul>
  
  <!-- … -->
</main>
```

## Demo application

Run `npm run start` to serve the demo application.

## Global configuration

It's possible to provide global defaults for the scroll top delta and scroll behavior:

```ts
import { FAKE_FRAGMENT_LINKS_CONFIG, FakeFragmentLinksConfig } from 'ngx-fragment-link-faker';

@NgModule({
  providers: [
    {
      provide: FAKE_FRAGMENT_LINKS_CONFIG,
      useFactory: (): FakeFragmentLinksConfig => ({ scrollTopDelta: 84, scrollBehavior: 'smooth' })
    }
  ],
  // …
})
export class AppModule {}
```

> Input arguments always take precedence over the global defaults you provide.

## Code scaffolding

Run `ng generate component component-name --project ngx-fragment-link-faker` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module --project ngx-fragment-link-faker`.
> Note: Don't forget to add `--project ngx-fragment-link-faker` or else it will be added to the default project in your `angular.json` file. 

## Build

Run `npm run build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Publishing

Run `npm run publish` to publish the project.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Adheres to / Uses

- [Semantic Versioning 2.0.0](https://semver.org)
- [Changelogger](https://churchtools.github.io/changelogger/)

## License

The NgxFragmentLinkFaker library is open-sourced software licensed under the [MIT license](LICENSE.md).
