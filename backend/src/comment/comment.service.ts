import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

@Injectable()
export class CommentService {
    async postComment(comment: string){
        try {
            await prisma.comment.create({
                data: {
                    content: comment,
                }
            })
        } catch (error) {
            console.log(error)
        }
    }

    async getComments() {
        try {
            return await prisma.comment.findMany();
        } catch (error) {
            console.log(error);
        }
    }

    async deleteCommentAll() {
        try {
            await prisma.comment.deleteMany();
        } catch (error) {
            console.log(error);
	}
    }
}
