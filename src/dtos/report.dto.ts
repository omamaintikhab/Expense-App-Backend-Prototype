import { IsNumber, IsString, IsPositive, IsNotEmpty, IsOptional } from "class-validator";
import { ReportType } from "src/data";
import {Exclude, Expose} from 'class-transformer'

export class CreateReportDto{
    @IsNumber()
    @IsPositive()
    amount: number;

    @IsString()
    @IsNotEmpty()
    source: string;
}

export class UpdateReportDto{
    @IsOptional()
    @IsNumber()
    @IsPositive()
    amount: number;
    
    @IsOptional()
    @IsString()
    @IsNotEmpty()
    source: string;
}

export class ReportResponseDto {
        constructor(partial: Partial<ReportResponseDto>){
            Object.assign(this, partial)
        }
        id: string;
        source: string;
        amount: number;

        @Exclude()
        createdAt: Date;

        @Exclude()
        updatedAt: Date;

        @Expose({name: 'created_at'})
        transformCreatedAt(){
            return this.createdAt;
        }

        type: ReportType; 
        
}
