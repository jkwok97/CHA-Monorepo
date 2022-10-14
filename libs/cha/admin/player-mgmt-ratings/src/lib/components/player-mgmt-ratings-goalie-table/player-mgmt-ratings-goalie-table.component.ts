import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { GoalieRatingDto } from '@cha/shared/entities';
import { Table } from 'primeng/table';
@Component({
  selector: 'cha-admin-player-mgmt-ratings-goalie-table',
  templateUrl: './player-mgmt-ratings-goalie-table.component.html',
  styleUrls: ['./player-mgmt-ratings-goalie-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlayerMgmtRatingsGoalieTableComponent implements OnInit {
  @Input() isMobile!: boolean;
  @Input() goalies!: GoalieRatingDto[];

  @ViewChild('dt') dt: Table | undefined;

  // TODO UPDATE COLUMNS AFTER EVERY SEASON
  tableColumns = [
    { field: 'id', header: 'Salary Id', visible: true },
    { field: 'full_name', header: 'Name', visible: true },
    { field: 'season_2021', header: '2020-21', visible: true },
    { field: 'season_2022', header: '2021-22', visible: true },
    { field: 'season_2023', header: '2022-23', visible: true },
    { field: 'season_2024', header: '2023-24', visible: true },
    { field: 'season_2025', header: '2024-25', visible: true },
    { field: 'action', header: 'Edit', visible: true },
  ];

  mobileTableColumns = [
    { field: 'id', header: 'Salary Id', visible: true },
    { field: 'full_name', header: 'Name', visible: true },
    { field: 'season_2021', header: '2020-21', visible: true },
    { field: 'season_2022', header: '2021-22', visible: true },
    { field: 'action', header: 'Edit', visible: true },
  ];

  first = 0;
  rows = 20;
  totalRecords = 0;
  sortField = 'full_name';
  statsForTable!: any;
  display = false;
  goaliesForTable!: any;
  goalie!: GoalieRatingDto | null;

  ngOnInit(): void {
    this.goaliesForTable = this.mapItems(this.goalies);
  }

  applyFilterGlobal(event: any, stringVal: string) {
    this.dt?.filterGlobal((event.target as HTMLInputElement).value, stringVal);
  }

  mapItems(ratings: GoalieRatingDto[]) {
    return ratings.map((rating: GoalieRatingDto) => ({
      ...rating,
      full_name: `${rating.playerInfo?.firstname} ${rating.playerInfo?.lastname}`,
    }));
  }

  onRatingClick(rating: GoalieRatingDto) {
    this.goalie = rating;
    this.display = true;
  }

  onClose() {
    this.display = false;
    this.goalie = null;
  }
}
