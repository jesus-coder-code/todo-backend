import { IsDate, IsEnum, IsNotEmpty, IsOptional, IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";
import { Status } from "src/Domain/Entities/ToDo";
import { Transform } from "class-transformer";

export class TodoDto {
    @ApiProperty({ example: "Aprender NestJS", description: "Nombre del ToDo" })
    @IsNotEmpty()
    @IsString()
    tittle: string;

    @ApiProperty({ example: "Estudiar la documentación oficial", description: "Descripción del ToDo", required: false })
    @IsString()
    @IsOptional()
    description?: string;

    @ApiProperty({ enum: Status, example: Status.PENDING, description: "Estado del ToDo", required: false })
    @IsEnum(Status)
    @IsOptional()
    status: Status;

    @ApiProperty({ example: "2025-03-20T12:00:00.000Z", description: "Fecha de creación" })
    @IsDate()
    @Transform(({ value }) => new Date(value))
    createdAt: Date

    @ApiProperty({ example: "2024-03-20T12:00:00.000Z", description: "Fecha de actualización" })
    @IsDate()
    @Transform(({ value }) => new Date(value))
    updatedAt: Date
}
