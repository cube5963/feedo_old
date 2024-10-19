import { Controller, Get, Param } from '@nestjs/common';
import { FeedbackService } from './feedback.service';

@Controller('feedback')
export class FeedbackController {
    constructor(private feedbackService: FeedbackService) { }

    @Get('/postfeedback/:eva/:type')
    async postfeedback(
        @Param('eva') eva: string,
        @Param('type') type: string
    ): Promise<void> {
        await this.feedbackService.postFeedback(eva, type);
        return;
    }

    @Get('/getfeedback')
    async getfeedback(): Promise<any> {
        return await this.feedbackService.getFeedback();
    }

    @Get('/deletefeedback')
    async deletefeedback(): Promise<void> {
        await this.feedbackService.deleteFeedbackAll();
        return;
    }

}
