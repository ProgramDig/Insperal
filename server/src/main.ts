import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

async function start() {
  const PORT = process.env.PORT || 5000;
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle("Програмний модуль обліку резерву військово-навчених ресурсів районного територіального центру комплектування та соціальної підтримки для жінок")
    .setDescription("Документація до серверної частини Rest full API додатку")
    .setVersion("1.0.0")
    .addTag("MITIT")
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("/api/docs", app, document);

  await app.listen(PORT, () => console.log(`Server started on PORT:${PORT}`));
}

start();