import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: '*', // �S�ẴI���W�������i�Z�L�����e�B�㐄������Ȃ����߁A�K�؂ɐ�������̂��ǂ��j
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: 'Content-Type, Accept',
  });

  await app.listen(5000);
}
bootstrap();
