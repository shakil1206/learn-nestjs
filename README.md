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

**Insert Image1 here**

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





## Stay in touch

- Author - [Md Shakil Ahmed](https://mdshakilahmed.netlify.app/)

## License

Nest is [MIT licensed](LICENSE).
