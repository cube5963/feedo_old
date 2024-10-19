import { Controller, Get, Param } from '@nestjs/common';
import { CommentService } from './comment.service';

@Controller('comment')
export class CommentController {
    constructor(private commentService: CommentService) {}

    @Get('/postcomment/:text')
    async postcomment(
        @Param('text') text: string,
    ): Promise<any> {
        return await this.commentService.postComment(text);
    }

    @Get('/getcomment/')
    async getcomment(): Promise<any> {
        return await this.commentService.getComments();
    }

    @Get('/deletecomment/')
    async deletecomment(): Promise<any> {
        return await this.commentService.deleteCommentAll();
    }
}
