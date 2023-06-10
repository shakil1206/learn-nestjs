# Easy to learn Nest JS with Md Shakil Ahmed!

Hi! I am **Md Shakil Ahmed** (BSc in CSE) and **Software Engineer** (MERN, Laravel and Nest JS) Developer. Today you are going to learn **high level** overview of **Nest JS** JavaScript Web Framework within short time... Thanks for coming here. So, Lets start to explore...


# Introduction of Nest JS

NestJS is a sophisticated framework for crafting server-side applications in a scalable, efficient manner. This powerful tool is built on Node.js, enabling developers to create applications in JavaScript, and is compatible with TypeScript, offering the benefits of static typing and modern language features.

NestJS is designed with a modular architecture, emphasizing the principles of Object-Oriented Programming (OOP), Functional Programming (FP), and Functional Reactive Programming (FRP). These principles provide developers with the flexibility to structure their applications in a manner that suits their specific project needs.

What sets NestJS apart from other frameworks is its first-class support for custom decorators, dependency injection, and its embrace of microservices. With its extensible, plug-in oriented architecture, it provides an out-of-the-box application structure that allows for easy adoption of numerous libraries and tools.

The framework's creator, Kamil Myśliwiec, aimed to address the architectural design issues associated with other Node.js frameworks by offering a framework that provides a level of abstraction above these common issues, but still allows developers to access the underlying Node.js features if needed.

At its core, NestJS integrates some of the most refined solutions in the JavaScript world, like Express (or optionally Fastify), and merges them with distinguished concepts from languages such as Java or C#, such as decorators and modules. This combination creates a comprehensive toolkit for building server-side applications, from simple web apps to complex microservice architectures.

## Project Setup

Setting up a new project is quite simple with the  [Nest CLI](https://docs.nestjs.com/cli/overview). With  [npm](https://www.npmjs.com/)  installed, you can create a new Nest project with the following commands in your OS terminal:

```bash
npm i -g @nestjs/cli
nest new project-name
```
But sometimes it's not work properly so, that you can use different command to create/setup new project. This command always work (Proven) 

```bash
npx @nestjs/cli new project-name
```

## Project Structure

This NestJS project follows a typical structure:
- **src/**: This is where the source code resides. It contains all the modules, controllers, services, etc.
 - **module/**: Each feature has its own module, which includes a module file, a controller file, and a service file.
- **test/**: This directory contains all test files.
- **node_modules/**: All the project dependencies are installed here by npm.
- **package.json**: This file holds various metadata relevant to the project including dependency lists.
- **nest-cli.json**: Nest CLI configuration file for generating components, modules, etc.
- **tsconfig.json**: Configuration for the TypeScript compiler.

## Project Configuration
At first we need to configure our project for development and testing purpose. So, let's start configure our project. 
```bash
npm install --save-dev nodemon
```
**Nodemon** is a utility that automatically restarts your Node.js server when file changes in your project directory are detected, thus aiding in the development process. More details can be found at the [official Nodemon repository](https://github.com/remy/nodemon).

After installing **Nodemon** you need to add **nodemon.json** file in your root directory. After created you need to put below code into **nodemon.json** file.

    {
    "watch": ["src"],
    "ext":"ts",
    "ignore":["src/**/*.spec.ts"],
    "exec":"node --inspect=0.0.0.0:5858 -r ts-node/register ./src/main.ts"
    }

Okay now we need to update **package.json** file go to "script" json and add below code wherever you want.

	"debug": "nodemon",

After adding it we can start the project by using following command 
```bash
npm run debug
```
 Now  automatically restarts our Nest JS server when file changes in our project directory are detected. 

Alternatively you can run your project by using following command, Which is default. But you need to run again and again after file changing so, that I have introduced with **Nodemon** for development purpose. Otherwise we need to run bellow command for production. 
```bash
npm run start
```


## Lets start learning core concept of Nest JS


### main.ts file

![Main File](https://github.com/shakil1206/learn-nestjs/assets/44937746/6aeb2a5a-2054-41f6-9293-9abd2c8c65ec)

The `main.ts` file is the entry point of a NestJS application. It's where the application gets bootstrapped and the NestJS application instance gets created.

Here's a typical example of a `main.ts` file:

```typescript
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
```

Let's break down what's happening here:

1. `import { NestFactory } from '@nestjs/core';` - This imports the `NestFactory` module from the NestJS core package. The `NestFactory` is responsible for setting up the Nest application.

2. `import { AppModule } from './app.module';` - This line imports the `AppModule`. By convention, the root or main application module is named `AppModule`. This module, typically found in the `app.module.ts` file, organizes the application structure by importing all other necessary modules.

3. The `bootstrap` function is an `async` function that sets up the Nest application. It uses the `NestFactory.create()` method, passing in the `AppModule`, to create the application instance.

4. `await app.listen(3000);` - This line tells the application to listen on port 3000. `app.listen()` is an asynchronous operation, hence the use of `await`. The specified port number can be any valid port number depending on your application's requirements.

5. `bootstrap();` - Finally, the `bootstrap` function is called to start the application.

Note that, as your application grows in complexity, the `main.ts` file can also become more complex. You might include more setup instructions, like middleware, global filters, pipes, and interceptors. Additionally, you might want to configure the application to use different services depending on the environment (e.g., development, production, test), etc.


In a **NestJS** project, the building blocks are mainly **Modules**, **Controllers**, and **Services**. Let's dive into each of these components.

**1. Module**

As mentioned before, a module is a class annotated with a `@Module()` decorator. In the `src` folder, you can find a file named `app.module.ts`. This is the root module of your application.

Here is a sample `app.module.ts` file when you create a new NestJS project:

```typescript
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
```

The `AppModule` imports `AppController` and `AppService`, and then includes them in the `controllers` and `providers` arrays respectively.

**2. Controller**

Controllers are responsible for handling incoming requests and returning responses to the client. In a new NestJS project, the `AppController` is defined in the `app.controller.ts` file.

Here is what `app.controller.ts` looks like initially:

```typescript
import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
```

The `@Controller()` decorator marks the class as a controller, and the `@Get()` decorator defines a handler for GET requests. When a GET request is made to the root path (`/`), the `getHello()` method is called. This method returns a string response that is provided by the `AppService`'s `getHello()` method.

**3. Service**

Services in NestJS are generally responsible for data storage and retrieval, and are used to implement the business logic of your application. In a new NestJS project, the `AppService` is defined in the `app.service.ts` file.

Here is what `app.service.ts` looks like initially:

```typescript
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
```

The `@Injectable()` decorator marks the class as a provider that can be managed by the Nest IoC (Inversion of Control) container. The `getHello()` method returns the string 'Hello World!', and is used by the `AppController`.

Together, the module, controller, and service form the foundation of a NestJS application and adhere to the principles of modular design and separation of concerns.

Congratulations to completed basic NestJS feature also we have lots of feature here. So, all feature will introduce by development APIs step by step. 

So, Lets starts....

## Build NestJs REST APIs

### Create Module, Controller and Service
Now we need to create another module by using our traditional way or open your project terminal and run
```bash
nest g module book
```
Here `book` is a module name. So, you can use any name whatever you want. After run command we can se automatically created `book` directory and inside the `book` directory `book.module.ts` module created successfully. Also imported book module into `app.module.ts` . 
Or If you create without command then you need to create directory and module manually as well. 

Okay, Now our module is ready then we need to create two more file which are controller and service. Run bellow command: 
```bash
nest g controller book
nest g service book
```
After running both command we can create service and controller for book module. And after creating everything need to include/import `app.module.ts` otherwise it's not part of this project service.

### Connect Mongoose Database

![Image2](https://github.com/shakil1206/learn-nestjs/assets/44937746/5f19d3f1-4cd1-408f-ae5a-02adec4c9a59)


This is a NestJS module responsible for configuring the database connection to MongoDB using the Mongoose library.

At first install mongoose by using following commands
```bash
npm i @nestjs/mongoose mongoose
```
And create database module directory / import `app.module.ts` directly. 

```typescript
imports: [
	MongooseModule.forRoot('mongodb://127.0.0.1:27017', { dbName:  'library' })
],
```
So, our database has been done. Now we focused to create route and services. 

### Create Mongoose Schema


![Image3](https://github.com/shakil1206/learn-nestjs/assets/44937746/09a4174a-435f-4e7b-841c-5e88fc3bc0fe)


This code defines a `Book` schema for Mongoose in a NestJS application:

1. `import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";`: This line imports necessary decorators and functions from the `@nestjs/mongoose` package to define a Mongoose schema.

2. `@Schema({ timestamps: true, })`: This `@Schema` decorator marks the `Book` class as a Mongoose schema. The `timestamps` option is set to `true`, which tells Mongoose to automatically manage `createdAt` and `updatedAt` properties on the documents.

3. `@Prop()`: The `@Prop()` decorator marks the following property as a field in the MongoDB document.

4. `export const BookSchema = SchemaFactory.createForClass(Book);`: This line uses the `SchemaFactory`'s `createForClass` method to create a Mongoose schema for the `Book` class. The resulting schema can then be used with the Mongoose model to interact with the MongoDB database.

### Create Book DTO 
![Image4](https://github.com/shakil1206/learn-nestjs/assets/44937746/90626fcb-5d17-49e8-a3d7-ff9e032acc43)

The `BookDto` and `UpdateBookDto` classes are Data Transfer Objects (DTOs) in a NestJS application. These are used to define and validate the structure of data coming into your application. `BookDto` likely handles incoming data for creating a new book, while `UpdateBookDto` likely handles incoming data for updating an existing book. Each has properties `title`, `description`, `author`, and `price`, all of which are read-only and of type `string`, except for `price` which is a `number`.

Also need to validation our data so that add validation by installing class-validator. Run following command in your project terminal 

### Create Book DTO
 
Also need to validation our data so that add validation by installing `class-validator` and `class-transformer`. Run following command in your project terminal 

```bash
npm i --save class-validator class-transformer
```
`book.dto.ts` Codebase:
```Typescript 
import { IsNotEmpty, IsNumber, IsOptional, IsString } from  'class-validator';
 
export  class  BookDto {
	@IsNotEmpty()
	@IsString()
	readonly  title:  string;  

	@IsNotEmpty()
	@IsString()
	readonly  description:  string;  

	@IsNotEmpty()
	@IsString()
	readonly  author:  string;  

	@IsNotEmpty()
	@IsNumber()
	readonly  price:  number;
}  

export  class  UpdateBookDto {
	@IsOptional()
	@IsString()
	readonly  title:  string;

	@IsOptional()
	@IsString()
	readonly  description:  string;  

	@IsOptional()
	@IsString()
	readonly  author:  string;  

	@IsOptional()
	@IsNumber()
	readonly  price:  number;
}
```
Replace your DTO class this code. 

These classes, `BookDto` and `UpdateBookDto`, are Data Transfer Objects (DTOs) used in a NestJS application to validate incoming data when creating or updating a book.

`BookDto` expects all properties (`title`, `description`, `author`, `price`) to be present (`@IsNotEmpty()`) and of specific types (`@IsString()` for text fields, `@IsNumber()` for price).

`UpdateBookDto` makes all properties optional (`@IsOptional()`) for updates, meaning not all fields are required to be present in the incoming data when updating a book. It also validates the types of any provided fields.

All Set! Now try to create CRUD APIs

### Create CRUD APIs inside controller

`book.controller.ts` Codebase:

```Typescript 
import { BookService } from './book.service';
import { Body, Controller, Delete, Get, Param, Post, Put, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { BookDto, UpdateBookDto } from './dto/book.dto';
import { Query as ExpressQuery } from 'express-serve-static-core'
import { Book } from './schema/book.schema';

@Controller('book')
export class BookController {
    constructor(
        private readonly BookService: BookService
    ) { }

    @Get()
    @UsePipes(new ValidationPipe)
    async getAllBook(@Query() query: ExpressQuery): Promise<Book[]> {
        return this.BookService.findAll(query);
    }

    @Post()
    @UsePipes(new ValidationPipe)
    async createBook(@Body() book: BookDto): Promise<Book> {
        return this.BookService.create(book)
    }

    @Get(':id')
    @UsePipes(new ValidationPipe)
    async getBook(@Param('id') id: string): Promise<Book> {
        return this.BookService.findbyId(id)
    }

    @Put(':id')
    @UsePipes(new ValidationPipe)
    async updateBook(@Param('id') id: string, @Body() book: UpdateBookDto): Promise<Book> {
        return this.BookService.updateById(id, book)
    }

    @Delete(':id')
    @UsePipes(new ValidationPipe)
    async deleteBook(@Param('id') id: string,): Promise<Book> {
        return this.BookService.deleteById(id)
    }
}
```

This is a NestJS controller class named `BookController`, which handles HTTP requests related to books. It includes methods for getting all books (`getAllBook`), creating a new book (`createBook`), getting a book by its ID (`getBook`), updating a book (`updateBook`), and deleting a book (`deleteBook`). 

These methods use decorators like `@Get()`, `@Post()`, `@Put()`, `@Delete()`, `@Body()`, `@Param()`, and `@Query()` to map routes, bind parameters, and parse query parameters or request bodies. 

The `BookService` is injected into the `BookController` through the constructor, which is used to perform business logic and interact with the database. 

All methods are asynchronous, returning a `Promise` that resolves with the required book data.

### Create CRUD APIs inside service

`book.service.ts` Codebase:

```Typescript
import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { Model } from 'mongoose';
import { Query } from 'express-serve-static-core'
import { Book } from './schema/book.schema';

@Injectable()
export class BookService {
    constructor(@InjectModel(Book.name)
    private bookModel: Model<Book>,
    ) { }

    async findAll(query: Query): Promise<Book[]> {
        const resPerPage = 2;
        const currentPage = Number(query.page) || 1;
        const skip = resPerPage * (currentPage - 1);
        const keyword = query.keyword ? {
            title: {
                $regex: query.keyword,
                $options: 'i'
            }
        } : {}

        const books = await this.bookModel.find({ ...keyword }).limit(resPerPage).skip(skip);
        return books;
    }

    async create(book: Book): Promise<Book> {
        const bookData = await this.bookModel.create(book);
        return bookData;
    }

    async findbyId(id: string): Promise<Book> {
        const isValidId = mongoose.isValidObjectId(id)
        if (!isValidId) {
            throw new BadRequestException('Please Enter correct Id.')
        }
        const singleBook = await this.bookModel.findById(id)
        if (!singleBook) {
            throw new NotFoundException("Book not found.")
        }
        return singleBook;
    }

    async updateById(id: string, book: Book): Promise<Book> {
        return await this.bookModel.findByIdAndUpdate(id, book, {
            new: true,
            runValidators: true
        })
    }

    async deleteById(id: string): Promise<Book> {
        return await this.bookModel.findByIdAndDelete(id);
    }
}
```

This is a `BookService` class in a NestJS application that handles data interactions for books. 

1. `constructor(@InjectModel(Book.name) private bookModel: Model<Book>, ) { }`: The `@InjectModel` decorator is used to inject the Mongoose model for books into the `BookService`.

2. `async findAll(query: Query): Promise<Book[]>`: This method retrieves all books based on given query parameters. It supports pagination and keyword search.

3. `async create(book: Book): Promise<Book>`: This method creates a new book in the database.

4. `async findbyId(id: string): Promise<Book>`: This method finds a book by its ID. If an invalid ID is provided or if the book is not found, it throws an exception.

5. `async updateById(id: string, book: Book): Promise<Book>`: This method updates a book in the database using the provided ID and book data.

6. `async deleteById(id: string): Promise<Book>`: This method deletes a book from the database using the provided ID. 

All methods are asynchronous and return a `Promise`. This service is then used by the `BookController` to respond to HTTP requests.


Also you need to import in our `book.module.ts` file. Here is our full codebase structure. 

```Typescript 
import { Module } from '@nestjs/common';
import { BookController } from './book.controller';
import { BookService } from './book.service';
import { MongooseModule } from '@nestjs/mongoose';
import { BookSchema } from './schema/book.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: "Book", schema: BookSchema }])],
  controllers: [BookController],
  providers: [BookService]
})
export class BookModule { }
```

So, All set, now our APIs are working... 

### Coming soon (Authorization, Guards, Microservice)


## Stay in touch

- Author - [Md Shakil Ahmed](https://mdshakilahmed.netlify.app/)

## License

Nest is [MIT licensed](LICENSE).
