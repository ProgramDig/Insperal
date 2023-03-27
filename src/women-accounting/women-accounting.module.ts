import { Module } from "@nestjs/common";
import { WomenAccountingService } from "./women-accounting.service";
import { WomenAccountingController } from "./women-accounting.controller";
import { SequelizeModule } from "@nestjs/sequelize";
import { WomenAccounting } from "./women-accounting.model";

@Module({
  providers: [WomenAccountingService],
  controllers: [WomenAccountingController],
  imports: [
    SequelizeModule.forFeature([WomenAccounting])
  ]
})
export class WomenAccountingModule {
}
