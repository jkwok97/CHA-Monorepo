import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { LeagueDataFacade } from '@cha/domain/core';
import { SelectItemGroup } from 'primeng/api';
import { Observable } from 'rxjs';
import { TransactionsTradesFacade } from '../../+state/transactions-trades.facade';

interface City {
  name: string;
  code: string;
}

interface Country {
  name: string;
  code: string;
}

@Component({
  selector: 'cha-admin-transactions-trades-list-box',
  templateUrl: './transactions-trades-list-box.component.html',
  styleUrls: ['./transactions-trades-list-box.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TransactionsTradesListBoxComponent {
  @Input() isMobile!: boolean;
  @Input() team!: 'teamOne' | 'teamTwo';
  @Input() options!: any[];

  @Output() optionChanged = new EventEmitter<string>();

  teamOneLoading$: Observable<boolean>;
  teamTwoLoading$: Observable<boolean>;

  groupedCities: SelectItemGroup[];

  cities: City[];

  countries: Country[];

  selectedCity!: City;

  selectedCountries!: Country[];

  constructor(
    private leagueDataFacade: LeagueDataFacade,
    private transactionsTradesFacade: TransactionsTradesFacade
  ) {
    this.teamOneLoading$ = this.transactionsTradesFacade.teamOneLoading$;
    this.teamTwoLoading$ = this.transactionsTradesFacade.teamTwoLoading$;

    this.cities = [
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'London', code: 'LDN' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'Paris', code: 'PRS' },
    ];

    this.countries = [
      { name: 'Australia', code: 'AU' },
      { name: 'Brazil', code: 'BR' },
      { name: 'China', code: 'CN' },
      { name: 'Egypt', code: 'EG' },
      { name: 'France', code: 'FR' },
      { name: 'Germany', code: 'DE' },
      { name: 'India', code: 'IN' },
      { name: 'Japan', code: 'JP' },
      { name: 'Spain', code: 'ES' },
      { name: 'United States', code: 'US' },
    ];

    this.groupedCities = [
      {
        label: 'Germany',
        value: 'de',
        items: [
          { label: 'Berlin', value: 'Berlin' },
          { label: 'Frankfurt', value: 'Frankfurt' },
          { label: 'Hamburg', value: 'Hamburg' },
          { label: 'Munich', value: 'Munich' },
        ],
      },
      {
        label: 'USA',
        value: 'us',
        items: [
          { label: 'Chicago', value: 'Chicago' },
          { label: 'Los Angeles', value: 'Los Angeles' },
          { label: 'New York', value: 'New York' },
          { label: 'San Francisco', value: 'San Francisco' },
        ],
      },
      {
        label: 'Japan',
        value: 'jp',
        items: [
          { label: 'Kyoto', value: 'Kyoto' },
          { label: 'Osaka', value: 'Osaka' },
          { label: 'Tokyo', value: 'Tokyo' },
          { label: 'Yokohama', value: 'Yokohama' },
        ],
      },
    ];
  }

  onSelectTeam(event: any) {
    this.optionChanged.emit(event.value);

    if (this.team === 'teamOne') {
      this.transactionsTradesFacade.getTeamOne(event.value);
    } else {
      this.transactionsTradesFacade.getTeamTwo(event.value);
    }
  }
}
