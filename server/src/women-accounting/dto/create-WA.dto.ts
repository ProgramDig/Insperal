import { SexEnum } from "../enums/sex.enum";
import { IndexCardEnum } from "../enums/index-card.enum";
import { RankEnum } from "../enums/rank.enum";
import { LocalityEnum } from "../enums/locality.enum";
import { VlkResultEnum } from "../enums/vlk-result.enum";
import { ApiProperty } from "@nestjs/swagger";

export class CreateWADto {
  @ApiProperty({ example: "Олександра", description: "Ім'я облікової особи" })
  readonly firstName: string;

  @ApiProperty({ example: "Поліщук", description: "Прізвище облікової особи" })
  readonly secondName: string;

  @ApiProperty({ example: "Леонідівна", description: "По батькові облікової особи" })
  readonly thirdName: string;

  @ApiProperty({ example: "21.01.2000", description: "Дата народження облікової особи" })
  readonly dateOfBirth: Date;

  @ApiProperty({ example: "Жінка", description: "Стать облікової особи" })
  readonly sex: SexEnum;

  @ApiProperty({ example: "ТРО", description: "Картотека облікової особи" })
  readonly indexСard: IndexCardEnum;

  @ApiProperty({ example: "Сержант", description: "Звання облікової особи" })
  readonly rank: RankEnum;

  @ApiProperty({ example: "1234", description: "Команда облікової особи" })
  readonly team: number;

  @ApiProperty({ example: "100", description: "ВОС облікової особи" })
  readonly vos: number;

  @ApiProperty({ example: "915", description: "КОД облікової особи" })
  readonly code: number;

  @ApiProperty({ example: "А", description: "Група обліку облікової особи" })
  readonly accountGroup: string;

  @ApiProperty({ example: "Біла Церква", description: "Населений пункт облікової особи" })
  readonly locality: LocalityEnum;

  @ApiProperty({ example: "м. Біла Церква, Миру 20", description: "Повна адреса облікової особи" })
  readonly fullAddress: string;

  @ApiProperty({ example: "090-10-789-134", description: "Номер телефону облікової особи" })
  readonly phone: string;

  @ApiProperty({ example: "ТОВ ФС", description: "Місце роботи облікової особи" })
  readonly workplace: string;

  @ApiProperty({ example: "Придатний", description: "Результат ВЛК облікової особи" })
  readonly vlkResult: VlkResultEnum;

  @ApiProperty({ example: "21.03.2023", description: "Дата ВЛК облікової особи" })
  readonly vlkDate: Date;

  @ApiProperty({ example: "Особа спокійна, готова до служби", description: "Примітки облікової особи" })
  readonly description: string;
}