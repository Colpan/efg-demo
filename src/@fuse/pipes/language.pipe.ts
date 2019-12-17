import { Pipe, PipeTransform, OnDestroy } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';

@Pipe({
	name: 'language',
	pure: false
})
export class LanguagePipe implements PipeTransform, OnDestroy {

	lang: string;
	langSubscription = new Subscription();

	constructor(private translateService: TranslateService) {
		this.lang = this.translateService.currentLang;
		this.langSubscription = this.translateService.onLangChange.subscribe(lang => {
			this.lang = this.translateService.currentLang;
		});
	}

	transform(value: any, propertyName?: string): string {
		if (!value) {
			return '#N/A'
		}
		const prop: string = propertyName + this.lang;
		if (!value[prop] || (value[prop] === '')) {
			return '#N/A'
		}
		return value[prop];
	}

	ngOnDestroy(): void {
		this.langSubscription.unsubscribe();
	}

}
