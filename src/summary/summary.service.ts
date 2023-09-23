import { Injectable } from '@nestjs/common';
import { ReportService } from 'src/report/report.service';
import { ReportType } from 'src/data';

@Injectable()
export class SummaryService {
    constructor(
        private readonly reportService: ReportService
    ){

    }
    calculateSummary(){
        const allExpense = this.reportService.getAllReports(ReportType.EXPENSE).reduce((sum, report)=> sum + report.amount, 0);
        const allRevenues = this.reportService.getAllReports(ReportType.INCOME).reduce((sum, report)=> sum + report.amount, 0);
        
        return{
            allExpense,
            allRevenues,
            totalIncome: allRevenues - allExpense
        }
    }

}
