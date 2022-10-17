import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';
import { StatPlayerAllDto } from '@cha/shared/entities';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'cha-admin-player-mgmt-player-current-edit-form',
  templateUrl: './player-mgmt-player-current-edit-form.component.html',
  styleUrls: ['./player-mgmt-player-current-edit-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlayerMgmtPlayerCurrentEditFormComponent implements OnInit {
  @Input() player!: StatPlayerAllDto | null;

  form = new UntypedFormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};
  fields!: FormlyFieldConfig[];

  ngOnInit(): void {
    if (this.player) {
      this.patchForm();
    }

    this.createFields();
  }

  createFields() {
    this.fields = [
      {
        fieldGroupClassName: 'w-full flex flex-wrap column-gap-2 row-gap-3',
        // fieldGroup: [this.playerIdField()],
      },
      {
        fieldGroupClassName: 'w-full flex flex-wrap column-gap-2 row-gap-2',
        fieldGroup: [
          // this.centerField(),
          // this.leftField(),
          // this.rightField(),
          // this.leftdefenseField(),
          // this.rightdefenseField(),
        ],
      },
    ];
  }

  patchForm() {
    this.model = {
      // player_id: this.player?.player_id,
      // game_fatigue: this.player?.game_fatigue,
      // shift_fatigue: this.player?.shift_fatigue,
      // c_rate: this.player?.c_rate,
      // l_rate: this.player?.l_rate,
      // r_rate: this.player?.r_rate,
      // ld_rate: this.player?.ld_rate,
      // rd_rate: this.player?.rd_rate,
    };
  }
}
