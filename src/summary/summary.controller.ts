import { Controller, Get } from '@nestjs/common';
import { SummaryService } from './summary.service';

@Controller('summary')
export class SummaryController {
constructor(private readonly summaryService: SummaryService){}
@Get()
getReportSummay(){
    return this.summaryService.calculateSummary()
}

}
