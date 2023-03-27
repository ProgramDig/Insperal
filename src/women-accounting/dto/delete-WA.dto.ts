import { ApiProperty } from "@nestjs/swagger";

export class DeleteWADto {
  @ApiProperty({ example: "1", description: "Унікальний ідентифікатор" })
  id: number;
}