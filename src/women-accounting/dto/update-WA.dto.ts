import { SexEnum } from "../enums/sex.enum";
import { IndexCardEnum } from "../enums/index-card.enum";
import { RankEnum } from "../enums/rank.enum";
import { LocalityEnum } from "../enums/locality.enum";
import { VlkResultEnum } from "../enums/vlk-result.enum";

export class UpdateWADto {
  readonly id: number;
  readonly firstName: string;
  readonly secondName: string;
  readonly thirdName: string;
  readonly dateOfBirth: Date;
  readonly sex: SexEnum;
  readonly indexСard: IndexCardEnum;
  readonly rank: RankEnum;
  readonly team: number;
  readonly vos: number;
  readonly code: number;
  readonly accountGroup: string;
  readonly locality: LocalityEnum;
  readonly fullAddress: string;
  readonly phone: string;
  readonly workplace: string;
  readonly vlkResult: VlkResultEnum;
  readonly vlkDate: Date;
  readonly description: string;
}