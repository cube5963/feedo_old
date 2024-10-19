import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

@Injectable()
export class FeedbackService {
    async postFeedback(eva: string, type: string){
        try {
            await prisma.feedback.create({
                data: {
                    eva: parseInt(eva),
                    type: type
                }
            })
        } catch (error) {
            console.log(error)
        }
    }

    async getFeedback(){
        try {
            return await prisma.feedback.findMany()
        } catch (error) {
            console.log(error)
        }
    }

    async deleteFeedbackAll(){
        try {
            await prisma.feedback.deleteMany()
        } catch (error) {
            console.log(error)
        }
    }
}
