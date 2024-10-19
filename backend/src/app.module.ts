import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FeedbackService } from './feedback/feedback.service';
import { FeedbackController } from './feedback/feedback.controller';
import { CommentService } from './comment/comment.service';
import { CommentController } from './comment/comment.controller';

@Module({
  imports: [],
  controllers: [AppController, FeedbackController, CommentController],
  providers: [AppService, FeedbackService, CommentService],
})
export class AppModule {}
