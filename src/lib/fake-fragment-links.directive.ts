import { AfterViewInit, Directive, ElementRef, Input, OnDestroy } from '@angular/core';
import { filter, fromEvent, map, Observable, Subject, takeUntil } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Directive({
  selector: '[mhFakeFragmentLinks]'
})
export class FakeFragmentLinksDirective implements AfterViewInit, OnDestroy {

  @Input('mhScrollTopDelta') scrollTopDelta: number = 0;
  @Input('mhScrollBehavior') scrollBehavior: ScrollToOptions['behavior'] = 'auto';

  private destroy$ = new Subject();
  private click$?: Observable<MouseEvent>;

  constructor(
    private elementRef: ElementRef,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnDestroy() {
    this.destroy$.next(true);
  }

  ngAfterViewInit() {
    this.click$ = fromEvent(this.elementRef.nativeElement.querySelectorAll('a[href^="#"]'), 'click');
    this.fakeAngularFragmentLinks();
    this.scrollToFragmentTargetElements();
  }

  private fakeAngularFragmentLinks() {
    this.click$?.pipe(
      takeUntil(this.destroy$),
    )
      .subscribe(
        event => {
          event.preventDefault();
          const fragment = ((<HTMLAnchorElement | null>event.currentTarget)?.href.match(/#.*$/) ?? [''])[0].slice(1);
          this.router.navigate([], { fragment, replaceUrl: true });
        }
      );
  }

  private scrollToFragmentTargetElements() {
    this.activatedRoute.fragment.pipe(
      filter((fragment): fragment is string => !!fragment),
      map(fragment => decodeURIComponent(fragment)),
      map(fragment => document.querySelector(`[id="${fragment}"], [name="${fragment}"]`)),
      filter((scrollTarget): scrollTarget is HTMLElement => !!scrollTarget)
    )
      .subscribe(
        scrollTarget => window.scroll({
          top: scrollTarget.offsetTop - this.scrollTopDelta,
          behavior: this.scrollBehavior
        })
      );
  }

}
