import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { Observable, of, shareReplay, switchMap } from 'rxjs';

const svgCache = new WeakMap<object, Map<string, Observable<SafeHtml>>>();

@Pipe({
  name: 'svgRenderer',
  pure: false,
  standalone: true,
})
export class SvgRendererPipe implements PipeTransform {
  constructor(private http: HttpClient, private sanitizer: DomSanitizer) {}

  transform(url: string, context: object): Observable<SafeHtml> {
    if (!svgCache.has(context)) {
      svgCache.set(context, new Map());
    }

    const instanceCache = svgCache.get(context)!;

    if (!instanceCache.has(url)) {
      const obs$ = this.http.get(url, { responseType: 'text' }).pipe(
        switchMap((svgText) => {
          const safe = this.sanitizer.bypassSecurityTrustHtml(svgText);
          return of(safe);
        }),
        shareReplay(1)
      );
      instanceCache.set(url, obs$);
    }

    return instanceCache.get(url)!;
  }
}
