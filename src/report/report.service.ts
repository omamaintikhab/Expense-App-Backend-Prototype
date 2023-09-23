import { ReportType, data } from "src/data";
import { Injectable } from "@nestjs/common";
import {v4 as uuid} from 'uuid'
import { ReportResponseDto } from "../dtos/report.dto";

interface ReportBody{
  amount: number;
  source: string;
}

interface UpdateReportBody{
  amount?: number;
  source?: string;
}

@Injectable()
export class ReportService {
  getAllReports(type: ReportType): ReportResponseDto[] {
    return data.report.filter(item=> item.type === type).map(report=>new ReportResponseDto(report));
  }
  getSpecificReport(
    type: ReportType,
    id: string,
  ): ReportResponseDto{
    const report = data.report
    .filter(item=> item.type === type)
    .find(item=> item.id === id);
    if(!report) return;
    return new ReportResponseDto(report)
  }

  createReport(
    type: ReportType,
    {amount, source}: ReportBody
  ): ReportResponseDto{
    const newReport = {
      id: uuid(),
      source,
      amount,
      createdAt: new Date(),
      updatedAt: new Date(),
      type: type === 'income'? ReportType.INCOME :  ReportType.EXPENSE
    }
    data.report.push(newReport)
    return new ReportResponseDto(newReport)
  }

  updateReport(
    type: string,
    id: string,
    body: UpdateReportBody,
  ){
    const itemToBeUpdated = data.report.filter(item=>item.type === type).find(item=>item.id === id)
    if(!itemToBeUpdated) return 'No Item found to be updated!'
    const reportIndex = data.report.findIndex(item=>item.id === id)
    data.report[reportIndex] = {
      ...data.report[reportIndex],
      ...body,
      updatedAt: new Date(),
    }
    return new ReportResponseDto(data.report[reportIndex])
  }

  deleteReport(
    id: string,
  ){
    const reportIndex = data.report.findIndex(item=>item.id === id);
    if(reportIndex === -1) return 'No Item found to be deleted!';
    data.report.splice(reportIndex, 1)
    return 'deleted'
  }
}
