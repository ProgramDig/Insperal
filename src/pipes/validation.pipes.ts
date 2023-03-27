import { ArgumentMetadata, Injectable, PipeTransform } from "@nestjs/common";
import { plainToClass } from "class-transformer";
import { validate } from "class-validator";
import { ValidationExeption } from "../exeptions/validation.exeption";

@Injectable()
export class ValidationPipes implements PipeTransform<any> {
  async transform(value: any, metadata: ArgumentMetadata): Promise<any> {
    const obj = plainToClass(metadata.metatype, value);
    const errors: any[] = await validate(obj);

    if (errors.length) {
      let messages = errors.map(err => {
        return `${err.property} - ${Object.values(err.constraints).join(", ")}`;
      });
      throw new ValidationExeption(messages);
    }
    return value;
  }
}