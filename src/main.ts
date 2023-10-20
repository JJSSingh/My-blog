import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  


  //config swagger doc
  const swagger_doc_build = new DocumentBuilder()
  .setTitle("MyBlog API")
  .setDescription("Swagger myBlog DOCUMENTATION")
  .setVersion("1.0.0")
  .build();

  const document = SwaggerModule.createDocument(app, swagger_doc_build);
  
  SwaggerModule.setup("docs",app,document);
  await app.listen(3000);
}
bootstrap();
