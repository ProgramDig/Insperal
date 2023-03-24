import { Column, DataType, Model, Table } from "sequelize-typescript";
import { ApiProperty } from "@nestjs/swagger";

interface UserCreationAttrs {
  email: string,
  login: string,
  password: string
}

@Table({tableName:"users"})
export class User extends Model<User, UserCreationAttrs>{
  @ApiProperty({example: "1", description: "Унікальний ідентифікатор"})
  @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
  id:number;

  @ApiProperty({example: "vladick@mail.com", description: "Пошта користувача"})
  @Column({type: DataType.STRING, unique: true, allowNull: false})
  email:string;

  @ApiProperty({example: "vladick", description: "Логін користувача"})
  @Column({type: DataType.STRING, unique: true, allowNull: false})
  login:string;

  @ApiProperty({example: "D@3274he38nk3OQ", description: "Пароль користувача"})
  @Column({type: DataType.STRING, allowNull: false})
  password:string;

  @ApiProperty({example: "false", description: "Стан бану користувача"})
  @Column({type: DataType.BOOLEAN, defaultValue: false})
  banned:boolean;

  @ApiProperty({example: "false", description: "Причина блокування"})
  @Column({type: DataType.STRING, allowNull: true})
  banReason:string;
}