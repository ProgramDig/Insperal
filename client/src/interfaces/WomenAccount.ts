import { SexEnum } from "../enums/sex.enum";
import { IndexCardEnum } from "../enums/index-card.enum";
import { RankEnum } from "../enums/rank.enum";
import { LocalityEnum } from "../enums/locality.enum";
import { VlkResultEnum } from "../enums/vlk-result.enum";

export interface WomenAccount {
  id: number;
  firstName: string;
  secondName: string;
  thirdName: string;
  dateOfBirth: Date;
  sex: SexEnum;
  indexСard: IndexCardEnum;
  rank: RankEnum;
  team: number;
  vos: number;
  code: number;
  accountGroup: string;
  locality: LocalityEnum;
  fullAddress: string;
  phone: string;
  workplace: string;
  vlkResult: VlkResultEnum;
  vlkDate: Date;
  description: string;
}