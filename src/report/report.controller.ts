import { Controller, Get, Param, Post,Put, Body, Delete, HttpCode,ParseIntPipe, ParseUUIDPipe, ParseEnumPipe } from '@nestjs/common';
import {data, ReportType} from 'src/data'
import { CreateReportDto, UpdateReportDto, ReportResponseDto } from "../dtos/report.dto";
import { ReportService } from './report.service';

@Controller('report/:type')
export class ReportController {
   
  constructor(
    private readonly reportService: ReportService
  ){}

  @Get()
  getAllReports(
    @Param('type', new ParseEnumPipe(ReportType)) type: string
  ): ReportResponseDto[] {
    console.log('type', type)
    const reportType = type === 'income'? ReportType.INCOME :  ReportType.EXPENSE;
    return this.reportService.getAllReports(reportType)
  }

  @Get(':id')
  getSpecificReport(
    @Param('type', new ParseEnumPipe(ReportType)) type: string,
    @Param('id', ParseUUIDPipe) id: string,
  ): ReportResponseDto{
    console.log('type and id', type, id, typeof id)
    const reportType = type === 'income'? ReportType.INCOME :  ReportType.EXPENSE;
    return this.reportService.getSpecificReport(reportType, id)
  }

  @Post()
  createReport(
    @Body() {amount, source}: CreateReportDto,
    @Param('type', new ParseEnumPipe(ReportType)) type: string,
  ): ReportResponseDto{
    const reportType = type === 'income'? ReportType.INCOME :  ReportType.EXPENSE;
    return this.reportService.createReport(reportType, {amount, source})
  }

  @Put(':id')
  updateReport(
    @Body() body: UpdateReportDto,
    @Param('type', new ParseEnumPipe(ReportType)) type: string,
    @Param('id', ParseUUIDPipe) id: string,
  ){
    const reportType = type === 'income'? ReportType.INCOME :  ReportType.EXPENSE;
    return this.reportService.updateReport(reportType, id, body)
  }
  
  @HttpCode(204)
  @Delete(':id')
  deleteReport(
    @Param('id', ParseUUIDPipe) id: string,
  ){
    return this.reportService.deleteReport(id)
  }
}
