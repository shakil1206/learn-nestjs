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





## Stay in touch

- Author - [Md Shakil Ahmed](https://mdshakilahmed.netlify.app/)

## License

Nest is [MIT licensed](LICENSE).
