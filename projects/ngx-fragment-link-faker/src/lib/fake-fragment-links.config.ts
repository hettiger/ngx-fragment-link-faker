import { InjectionToken } from '@angular/core';

export interface FakeFragmentLinksConfig {
  scrollTopDelta?: number;
  scrollBehavior?: ScrollToOptions['behavior'];
}

export const FAKE_FRAGMENT_LINKS_CONFIG = new InjectionToken<FakeFragmentLinksConfig>(
  'mh.fake.fragment.links.config'
);
