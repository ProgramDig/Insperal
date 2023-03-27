import { Column, DataType, Model, Table } from "sequelize-typescript";
import { SexEnum } from "./enums/sex.enum";
import { IndexCardEnum } from "./enums/index-card.enum";
import { RankEnum } from "./enums/rank.enum";
import { LocalityEnum } from "./enums/locality.enum";
import { ApiProperty } from "@nestjs/swagger";
import { VlkResultEnum } from "./enums/vlk-result.enum";

interface CreateWomenAccounting {
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

@Table({ tableName: "women_accounting" })
export class WomenAccounting extends Model<WomenAccounting, CreateWomenAccounting> {
  @ApiProperty({ example: "1", description: "Унікальний ідентифікатор" })
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number;

  @ApiProperty({ example: "Олександра", description: "Ім'я облікової особи" })
  @Column({ type: DataType.STRING })
  firstName: string;

  @ApiProperty({ example: "Поліщук", description: "Прізвище облікової особи" })
  @Column({ type: DataType.STRING })
  secondName: string;

  @ApiProperty({ example: "Леонідівна", description: "По батькові облікової особи" })
  @Column({ type: DataType.STRING })
  thirdName: string;

  @ApiProperty({ example: "21.01.2000", description: "Дата народження облікової особи" })
  @Column({ type: DataType.DATE })
  dateOfBirth: Date;

  @ApiProperty({ example: "Жінка", description: "Стать облікової особи" })
  @Column({ type: DataType.ENUM(...Object.values(SexEnum)), defaultValue: SexEnum.women })
  sex!: SexEnum;

  @ApiProperty({ example: "ТРО", description: "Картотека облікової особи" })
  @Column({ type: DataType.ENUM(...Object.values(IndexCardEnum)), defaultValue: IndexCardEnum.NGU })
  indexСard!: IndexCardEnum;

  @ApiProperty({ example: "Сержант", description: "Звання облікової особи" })
  @Column({ type: DataType.ENUM(...Object.values(RankEnum)), defaultValue: RankEnum.captain })
  rank!: RankEnum;

  @ApiProperty({ example: "1234", description: "Команда облікової особи" })
  @Column({ type: DataType.INTEGER })
  team: number;

  @ApiProperty({ example: "100", description: "ВОС облікової особи" })
  @Column({ type: DataType.INTEGER })
  vos: number;

  @ApiProperty({ example: "915", description: "КОД облікової особи" })
  @Column({ type: DataType.INTEGER })
  code: number;

  @ApiProperty({ example: "А", description: "Група обліку облікової особи" })
  @Column({ type: DataType.STRING })
  accountGroup: string;

  @ApiProperty({ example: "Біла Церква", description: "Населений пункт облікової особи" })
  @Column({ type: DataType.ENUM(...Object.values(LocalityEnum)), defaultValue: LocalityEnum.Kyiv })
  locality!: LocalityEnum;

  @ApiProperty({ example: "м. Біла Церква, Миру 20", description: "Повна адреса облікової особи" })
  @Column({ type: DataType.STRING })
  fullAddress: string;

  @ApiProperty({ example: "090-10-789-134", description: "Номер телефону облікової особи" })
  @Column({ type: DataType.STRING })
  phone: string;

  @ApiProperty({ example: "ТОВ ФС", description: "Місце роботи облікової особи" })
  @Column({ type: DataType.STRING })
  workplace: string;

  @ApiProperty({ example: "Придатний", description: "Результат ВЛК облікової особи" })
  @Column({ type: DataType.ENUM(...Object.values(VlkResultEnum)), defaultValue: VlkResultEnum.false })
  vlkResult!: VlkResultEnum;

  @ApiProperty({ example: "21.03.2023", description: "Дата ВЛК облікової особи" })
  @Column({ type: DataType.DATE })
  vlkDate: Date;

  @ApiProperty({ example: "Особа спокійна, готова до служби", description: "Примітки облікової особи" })
  @Column({ type: DataType.STRING })
  description: string;
}