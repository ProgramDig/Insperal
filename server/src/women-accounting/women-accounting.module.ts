import { Module } from "@nestjs/common";
import { WomenAccountingService } from "./women-accounting.service";
import { WomenAccountingController } from "./women-accounting.controller";
import { SequelizeModule } from "@nestjs/sequelize";
import { WomenAccounting } from "./women-accounting.model";
import { AuthModule } from "../auth/auth.module";

@Module({
  providers: [WomenAccountingService],
  controllers: [WomenAccountingController],
  imports: [
    SequelizeModule.forFeature([WomenAccounting]),
    AuthModule
  ]
})
export class WomenAccountingModule {
}
