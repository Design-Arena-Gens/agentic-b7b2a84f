// Question and Answer Data
const questionsData = [
    {
        id: 1,
        question: "What is the main purpose of Angular?",
        explanation: "Angular is a platform and framework for building single-page client applications using HTML and TypeScript. It helps you build fast, reliable web apps.",
        kidExample: "Imagine you're building with LEGO blocks. Angular is like a special LEGO set with instructions that helps you build amazing castles (websites) faster and better!",
        codeExample: `// Simple Angular Component
@Component({
  selector: 'app-hello',
  template: '<h1>Hello {{name}}!</h1>'
})
export class HelloComponent {
  name = 'World';
}`
    },
    {
        id: 2,
        question: "What are directives in Angular and how many types of directives exist?",
        explanation: "Directives are classes that add additional behavior to elements in your Angular applications. There are three types: Component Directives (with templates), Structural Directives (change DOM layout), and Attribute Directives (change appearance or behavior).",
        kidExample: "Think of directives as magic wands! One wand can create new things (Components), another can hide or show things (*ngIf), and another can change colors (*ngStyle).",
        codeExample: `// Structural Directive - *ngIf
<div *ngIf="isVisible">I can appear or disappear!</div>

// Attribute Directive - ngStyle
<div [ngStyle]="{'color': 'red'}">I'm red!</div>

// Component Directive
<app-my-component></app-my-component>`
    },
    {
        id: 3,
        question: "Explain data bindings and the different types.",
        explanation: "Data binding is how Angular connects the component's data to the view. There are four types: Interpolation {{ }}, Property Binding [], Event Binding (), and Two-Way Binding [()].",
        kidExample: "Imagine a walkie-talkie! You can talk (send data from component to view), listen (events from view to component), or have a conversation (two-way binding) where both sides talk and listen!",
        codeExample: `// Interpolation - Component to View
<h1>Hello {{userName}}</h1>

// Property Binding - Component to View
<img [src]="imageUrl">

// Event Binding - View to Component
<button (click)="handleClick()">Click Me</button>

// Two-Way Binding - Both Ways
<input [(ngModel)]="userName">`
    },
    {
        id: 4,
        question: "What are the basic components involved in Angular?",
        explanation: "Angular applications have several core building blocks: Components (control views), Templates (HTML views), Services (business logic), Modules (organize app), Directives (DOM manipulation), and Pipes (data transformation).",
        kidExample: "An Angular app is like a pizza restaurant! Components are the chefs (make the pizza), Templates are the menu (what you see), Services are the recipe books (how to make things), and Modules are the kitchen sections (organize everything).",
        codeExample: `// Component
@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html'
})
export class PizzaComponent {
  pizzaName = 'Margherita';
}

// Service
@Injectable()
export class PizzaService {
  getPizzas() {
    return ['Margherita', 'Pepperoni'];
  }
}`
    },
    {
        id: 5,
        question: "What's the difference between AngularJS and Angular?",
        explanation: "AngularJS (version 1.x) uses JavaScript and is based on MVC architecture. Angular (2+) uses TypeScript, is component-based, faster, and has better mobile support. They're completely different frameworks.",
        kidExample: "AngularJS is like an old flip phone, and Angular is like a new smartphone. Both make calls, but the smartphone is faster, has more features, and works better!",
        codeExample: `// AngularJS (Old)
angular.module('myApp', [])
  .controller('MyCtrl', function($scope) {
    $scope.name = 'World';
  });

// Angular (New)
@Component({
  selector: 'app-root',
  template: '<h1>Hello {{name}}</h1>'
})
export class AppComponent {
  name = 'World';
}`
    },
    {
        id: 6,
        question: "What are components and modules in Angular?",
        explanation: "Components are the basic building blocks that control a part of the screen (view). Modules (NgModules) are containers that group related components, services, and other code files together.",
        kidExample: "Think of a toy box (Module) that contains different toys (Components). Each toy does something fun, and the box keeps them organized together!",
        codeExample: `// Component
@Component({
  selector: 'app-toy',
  template: '<p>I am a toy!</p>'
})
export class ToyComponent { }

// Module
@NgModule({
  declarations: [ToyComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }`
    },
    {
        id: 7,
        question: "What are decorators in Angular?",
        explanation: "Decorators are special functions that add metadata to classes, methods, or properties. They start with @ symbol. Common decorators include @Component, @NgModule, @Injectable, @Input, and @Output.",
        kidExample: "Decorators are like name tags at a party! They tell Angular 'Hey, this is a Component!' or 'This is a Service!' so Angular knows what to do with them.",
        codeExample: `// Class Decorators
@Component({ selector: 'app-root' })
export class AppComponent { }

@Injectable()
export class MyService { }

// Property Decorators
export class ChildComponent {
  @Input() childData: string;
  @Output() childEvent = new EventEmitter();
}`
    },
    {
        id: 8,
        question: "What is metadata or annotations in Angular?",
        explanation: "Metadata is additional information about a class that tells Angular how to process it. It's provided through decorators and includes configuration like selectors, templates, styles, and dependencies.",
        kidExample: "Metadata is like a recipe card for a dish. It tells you what ingredients you need (dependencies), how to cook it (template), and what it's called (selector)!",
        codeExample: `@Component({
  selector: 'app-recipe',        // Name of the dish
  templateUrl: './recipe.html',  // Cooking instructions
  styleUrls: ['./recipe.css'],   // How it looks
  providers: [RecipeService]     // What you need to make it
})
export class RecipeComponent { }`
    },
    {
        id: 9,
        question: "What are templates in Angular?",
        explanation: "Templates are HTML files that define the view for a component. They can include Angular syntax like interpolation, directives, and data binding to make them dynamic.",
        kidExample: "Templates are like coloring books! They have the outline (HTML), and Angular fills in the colors (data) to make beautiful pictures (web pages)!",
        codeExample: `<!-- Template with Angular syntax -->
<div class="user-card">
  <h2>{{userName}}</h2>
  <p *ngIf="isActive">User is active</p>
  <button (click)="logout()">Logout</button>
  <ul>
    <li *ngFor="let item of items">{{item}}</li>
  </ul>
</div>`
    },
    {
        id: 10,
        question: "What is SPA and how do you implement it in Angular?",
        explanation: "SPA (Single Page Application) loads a single HTML page and dynamically updates content without refreshing the page. Angular implements SPA using the Router module to navigate between views.",
        kidExample: "Imagine a magic book where pictures change when you turn the page, but you're always looking at the same book! That's how SPAs work - same page, different content!",
        codeExample: `// app-routing.module.ts
const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }`
    },
    {
        id: 11,
        question: "Explain the importance of routing in Angular & how to implement it.",
        explanation: "Routing enables navigation between different views/components in an SPA without page refresh. It maps URL paths to components and manages browser history.",
        kidExample: "Routing is like a GPS for your website! It knows how to get from the home page to the about page, and helps you find your way around!",
        codeExample: `// Define routes
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'user/:id', component: UserComponent }
];

// Use in template
<a routerLink="/home">Home</a>
<a [routerLink]="['/user', userId]">User</a>
<router-outlet></router-outlet>

// Navigate programmatically
constructor(private router: Router) {}
goToHome() {
  this.router.navigate(['/home']);
}`
    },
    {
        id: 12,
        question: "What is lazy loading in Angular?",
        explanation: "Lazy loading is a technique where modules are loaded only when needed, not at application startup. This reduces initial bundle size and improves loading time.",
        kidExample: "Lazy loading is like having a huge toy box but only taking out the toys you want to play with right now, instead of dumping everything on the floor at once!",
        codeExample: `// Lazy load a module
const routes: Routes = [
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module')
      .then(m => m.AdminModule)
  }
];

// This module loads only when user visits /admin`
    },
    {
        id: 13,
        question: "How do you implement lazy loading in Angular?",
        explanation: "Implement lazy loading by using loadChildren in route configuration instead of component, and creating separate feature modules with their own routing.",
        kidExample: "It's like ordering food delivery! Instead of cooking all meals at once (loading everything), you order (load) only when you're hungry (when you need it)!",
        codeExample: `// Main routing
const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {
    path: 'products',
    loadChildren: () => import('./products/products.module')
      .then(m => m.ProductsModule)
  }
];

// products-routing.module.ts
const routes: Routes = [
  { path: '', component: ProductListComponent },
  { path: ':id', component: ProductDetailComponent }
];`
    },
    {
        id: 14,
        question: "What is Node.js?",
        explanation: "Node.js is a JavaScript runtime built on Chrome's V8 engine. It allows you to run JavaScript on the server side, not just in browsers. Angular development tools run on Node.js.",
        kidExample: "Imagine JavaScript is a toy that only worked in a toy box (browser). Node.js is like making that toy work anywhere in your house - in the kitchen, bedroom, everywhere!",
        codeExample: `// Simple Node.js server
const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('Hello from Node.js!');
});

server.listen(3000);
console.log('Server running at http://localhost:3000/');`
    },
    {
        id: 15,
        question: "What is NPM?",
        explanation: "NPM (Node Package Manager) is a package manager for JavaScript. It helps you install, update, and manage libraries and tools your Angular project needs. It's the world's largest software registry.",
        kidExample: "NPM is like a huge toy store where you can get any toy (library) you need for your project. Just tell it what you want, and it brings it to you!",
        codeExample: `// Install Angular
npm install -g @angular/cli

// Install a package
npm install lodash

// Install dev dependency
npm install --save-dev typescript

// Install from package.json
npm install

// Update packages
npm update`
    },
    {
        id: 16,
        question: "Why is the node_modules folder important?",
        explanation: "node_modules contains all the dependencies (libraries and packages) your project needs. When you run 'npm install', all packages listed in package.json are downloaded here.",
        kidExample: "node_modules is like a backpack for a school trip! It carries all the supplies (packages) you need for your project to work. Without it, your app can't function!",
        codeExample: `// When you run:
npm install express

// NPM downloads express and its dependencies to:
project/
  node_modules/
    express/
    body-parser/
    cookie-parser/
    ... (and many more!)

// Your code can then use it:
import express from 'express';`
    },
    {
        id: 17,
        question: "What is package.json?",
        explanation: "package.json is a configuration file that contains metadata about your project, including name, version, dependencies, scripts, and more. It's like a blueprint for your project.",
        kidExample: "package.json is like a shopping list for your project! It tells NPM what ingredients (packages) to buy and what recipes (scripts) you can make.",
        codeExample: `{
  "name": "my-angular-app",
  "version": "1.0.0",
  "scripts": {
    "start": "ng serve",
    "build": "ng build",
    "test": "ng test"
  },
  "dependencies": {
    "@angular/core": "^17.0.0",
    "rxjs": "^7.8.0"
  },
  "devDependencies": {
    "typescript": "^5.2.0"
  }
}`
    },
    {
        id: 18,
        question: "What is TypeScript?",
        explanation: "TypeScript is a superset of JavaScript that adds static typing and other features. It compiles to plain JavaScript. Angular is built with TypeScript, providing better tooling, error checking, and code organization.",
        kidExample: "TypeScript is like JavaScript with training wheels! It helps you avoid mistakes by checking your code before you run it, like a spelling checker for programming!",
        codeExample: `// JavaScript (no types)
function add(a, b) {
  return a + b;
}
add('5', 3); // Returns '53' - bug!

// TypeScript (with types)
function add(a: number, b: number): number {
  return a + b;
}
add('5', 3); // Error! TypeScript catches this!
add(5, 3);   // Returns 8 - correct!`
    },
    {
        id: 19,
        question: "What is the need for Angular CLI?",
        explanation: "Angular CLI (Command Line Interface) is a powerful tool that helps you create, develop, test, and deploy Angular applications quickly. It automates common tasks and enforces best practices.",
        kidExample: "Angular CLI is like a magic wand for building Angular apps! Instead of doing everything by hand, you wave the wand (type a command) and it does the hard work for you!",
        codeExample: `// Create a new Angular app
ng new my-app

// Create a new component
ng generate component user-profile

// Serve the application
ng serve

// Build for production
ng build --prod

// Run tests
ng test

// Create a service
ng generate service data`
    },
    {
        id: 20,
        question: "What are services in Angular?",
        explanation: "Services are classes that handle business logic, data fetching, and shared functionality. They're singleton objects (one instance shared across app) that can be injected into components using Dependency Injection.",
        kidExample: "Services are like helpers or assistants! If multiple classrooms (components) need a library (data), one librarian (service) can help all of them instead of each having their own!",
        codeExample: `// Define a service
@Injectable({
  providedIn: 'root'
})
export class DataService {
  private data: string[] = [];

  getData() {
    return this.data;
  }

  addData(item: string) {
    this.data.push(item);
  }
}

// Use in component
export class MyComponent {
  constructor(private dataService: DataService) {}

  ngOnInit() {
    const data = this.dataService.getData();
  }
}`
    },
    {
        id: 21,
        question: "When would you use content projection?",
        explanation: "Content projection (ng-content) is used when you want to insert content from a parent component into a child component's template. It's useful for creating reusable wrapper components like cards, modals, or tabs.",
        kidExample: "Content projection is like a picture frame! You have the frame (child component), and you can put any picture (content from parent) inside it!",
        codeExample: `// Child component (card.component.ts)
@Component({
  selector: 'app-card',
  template: \`
    <div class="card">
      <ng-content></ng-content>
    </div>
  \`
})
export class CardComponent {}

// Parent component usage
<app-card>
  <h2>My Title</h2>
  <p>Any content can go here!</p>
</app-card>`
    },
    {
        id: 22,
        question: "Explain content projection slots in Angular.",
        explanation: "Content projection slots use the 'select' attribute in ng-content to project different pieces of content to specific locations in the template. This allows multi-slot content projection.",
        kidExample: "Imagine a sandwich maker with different compartments! One slot for bread (header), one for filling (body), and one for toppings (footer). Each goes to the right place!",
        codeExample: `// Component with multiple slots
@Component({
  selector: 'app-panel',
  template: \`
    <div class="header">
      <ng-content select="[header]"></ng-content>
    </div>
    <div class="body">
      <ng-content select="[body]"></ng-content>
    </div>
    <div class="footer">
      <ng-content select="[footer]"></ng-content>
    </div>
  \`
})

// Usage
<app-panel>
  <div header>Header Content</div>
  <div body>Body Content</div>
  <div footer>Footer Content</div>
</app-panel>`
    },
    {
        id: 23,
        question: "Why do we need ViewChild and ViewChildren in Angular?",
        explanation: "ViewChild and ViewChildren allow you to access child components, directives, or DOM elements from the parent component's TypeScript code. ViewChild returns one element, ViewChildren returns multiple.",
        kidExample: "Imagine you're a teacher (parent) and you need to talk to a specific student (child component). ViewChild is like calling that student's name to get their attention!",
        codeExample: `// Child component
@Component({
  selector: 'app-child',
  template: '<p>Child Component</p>'
})
export class ChildComponent {
  sayHello() { return 'Hello!'; }
}

// Parent component
export class ParentComponent {
  @ViewChild(ChildComponent) child!: ChildComponent;
  @ViewChildren(ChildComponent) children!: QueryList<ChildComponent>;

  ngAfterViewInit() {
    console.log(this.child.sayHello()); // 'Hello!'
  }
}`
    },
    {
        id: 24,
        question: "What is a template reference variable?",
        explanation: "Template reference variables (#variableName) are references to DOM elements or Angular components in the template. They allow you to access element properties and methods directly in the template.",
        kidExample: "It's like giving a nickname to something in your template! Instead of saying 'that input box over there', you can say '#myInput' and use it easily!",
        codeExample: `// Using template reference variable
<input #phoneInput type="text" />
<button (click)="callPhone(phoneInput.value)">Call</button>

// Access element properties
<input #emailInput type="email" />
<p>You typed: {{emailInput.value}}</p>
<p>Valid? {{emailInput.validity.valid}}</p>

// Reference a component
<app-child #childComp></app-child>
<button (click)="childComp.doSomething()">Click</button>`
    },
    {
        id: 25,
        question: "Explain ContentChild and ContentChildren.",
        explanation: "ContentChild and ContentChildren query content projected into the component via ng-content. Similar to ViewChild/ViewChildren but for projected content instead of view children.",
        kidExample: "If ViewChild looks at what the component creates itself, ContentChild looks at what was given to it from outside (like receiving a gift box and peeking inside)!",
        codeExample: `// Child component
@Component({
  selector: 'app-wrapper',
  template: '<ng-content></ng-content>'
})
export class WrapperComponent {
  @ContentChild(ButtonComponent) button!: ButtonComponent;

  ngAfterContentInit() {
    console.log('Button:', this.button);
  }
}

// Usage
<app-wrapper>
  <app-button>Click me</app-button>
</app-wrapper>`
    },
    {
        id: 26,
        question: "Differentiate between ViewChild, ViewChildren, ContentChild, and ContentChildren.",
        explanation: "ViewChild/ViewChildren query elements in the component's own template. ContentChild/ContentChildren query elements projected via ng-content. 'Child' returns single element, 'Children' returns QueryList.",
        kidExample: "ViewChild = toys you made yourself. ContentChild = toys your friends gave you. 'Child' = one toy, 'Children' = multiple toys!",
        codeExample: `export class ParentComponent {
  // Queries component's own template
  @ViewChild(OwnComponent) viewChild!: OwnComponent;
  @ViewChildren(OwnComponent) viewChildren!: QueryList<OwnComponent>;

  // Queries projected content
  @ContentChild(ProjectedComponent) contentChild!: ProjectedComponent;
  @ContentChildren(ProjectedComponent) contentChildren!: QueryList<ProjectedComponent>;

  ngAfterViewInit() {
    // ViewChild/ViewChildren ready here
  }

  ngAfterContentInit() {
    // ContentChild/ContentChildren ready here
  }
}`
    },
    {
        id: 27,
        question: "What is { static: true } in ViewChild?",
        explanation: "The static option determines when the query is resolved. static: true resolves the query before change detection runs (ngOnInit). static: false (default) resolves after (ngAfterViewInit). Use static: true only when the element doesn't depend on *ngIf or *ngFor.",
        kidExample: "static: true is like getting your lunch immediately when you arrive. static: false is like waiting until everyone is seated first. Sometimes you need to wait!",
        codeExample: `export class MyComponent {
  // static: true - Available in ngOnInit
  // Use when element is always in template
  @ViewChild('myDiv', { static: true }) divStatic!: ElementRef;

  // static: false - Available in ngAfterViewInit (default)
  // Use when element might not exist initially (*ngIf)
  @ViewChild('myDiv', { static: false }) divDynamic!: ElementRef;

  ngOnInit() {
    // divStatic is available here
    console.log(this.divStatic); // Works
    // console.log(this.divDynamic); // undefined!
  }

  ngAfterViewInit() {
    // Both available here
    console.log(this.divDynamic); // Works
  }
}`
    },
    {
        id: 28,
        question: "What is the importance of Angular component hooks/life cycles?",
        explanation: "Lifecycle hooks are methods Angular calls at specific moments in a component's life (creation, update, destruction). They let you perform actions at the right time, like fetching data, cleaning up subscriptions, or responding to input changes.",
        kidExample: "Lifecycle hooks are like daily routines! Wake up (ngOnInit), eat lunch (ngOnChanges), do homework (ngDoCheck), and go to sleep (ngOnDestroy). Each happens at the right time!",
        codeExample: `export class MyComponent implements OnInit, OnDestroy {
  subscription: Subscription;

  constructor() {
    // Called first, don't do heavy work here
  }

  ngOnInit() {
    // Initialize component, fetch data
    this.subscription = this.dataService.getData().subscribe();
  }

  ngOnDestroy() {
    // Cleanup before component is destroyed
    this.subscription.unsubscribe();
  }
}`
    },
    {
        id: 29,
        question: "Explain Angular life cycle hooks in detail.",
        explanation: "Angular lifecycle hooks include: ngOnChanges (input changes), ngOnInit (initialization), ngDoCheck (custom change detection), ngAfterContentInit/ngAfterContentChecked (content projection), ngAfterViewInit/ngAfterViewChecked (view ready), ngOnDestroy (cleanup).",
        kidExample: "It's like growing up! Birth (constructor), first day of school (ngOnInit), learning every day (ngDoCheck), making friends (ngAfterContentInit), getting smarter (ngAfterViewInit), and eventually moving away (ngOnDestroy)!",
        codeExample: `export class LifecycleComponent implements OnInit, OnChanges,
  DoCheck, AfterContentInit, AfterViewInit, OnDestroy {

  @Input() data: string;

  constructor() {
    console.log('1. Constructor');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('2. ngOnChanges - Input changed', changes);
  }

  ngOnInit() {
    console.log('3. ngOnInit - Component initialized');
  }

  ngDoCheck() {
    console.log('4. ngDoCheck - Change detection');
  }

  ngAfterContentInit() {
    console.log('5. ngAfterContentInit - Content projected');
  }

  ngAfterViewInit() {
    console.log('6. ngAfterViewInit - View initialized');
  }

  ngOnDestroy() {
    console.log('7. ngOnDestroy - Cleanup');
  }
}`
    },
    {
        id: 30,
        question: "Differentiate between constructor and ngOnInit().",
        explanation: "Constructor is a TypeScript feature called when the class is instantiated. ngOnInit is an Angular lifecycle hook called after Angular initializes inputs and the component is ready. Use constructor for DI, ngOnInit for initialization logic.",
        kidExample: "Constructor is like being born (you exist). ngOnInit is like your first birthday party (you're ready to celebrate and do things)!",
        codeExample: `export class MyComponent implements OnInit {
  @Input() userName: string;

  constructor(private service: DataService) {
    // 1. Called first
    // 2. Only for dependency injection
    // 3. Input properties NOT available yet
    console.log(this.userName); // undefined!
  }

  ngOnInit() {
    // 1. Called after constructor
    // 2. Input properties ARE available
    // 3. Perfect for initialization logic
    console.log(this.userName); // Works!
    this.service.getData(); // Fetch data here
  }
}`
    },
    {
        id: 31,
        question: "How do you implement lazy loading in Angular?",
        explanation: "Lazy loading is implemented using loadChildren in routes and creating feature modules. The module is loaded only when the route is accessed, reducing initial bundle size.",
        kidExample: "Imagine a library where books appear on the shelf only when you ask for them, instead of having all books out all the time. That's lazy loading - bring things when needed!",
        codeExample: `// app-routing.module.ts
const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module')
      .then(m => m.AdminModule)
  },
  {
    path: 'user',
    loadChildren: () => import('./user/user.module')
      .then(m => m.UserModule)
  }
];

// admin.module.ts
@NgModule({
  declarations: [AdminComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: AdminComponent }
    ])
  ]
})
export class AdminModule { }`
    },
    {
        id: 32,
        question: "How do you implement HTTP in Angular?",
        explanation: "Angular's HttpClient module handles HTTP requests. Import HttpClientModule, inject HttpClient service, and use methods like get(), post(), put(), delete(). Returns Observables that you subscribe to.",
        kidExample: "HTTP is like sending letters to a friend (server)! You write a letter (request), mail it (HTTP), and wait for a reply (response)!",
        codeExample: `// app.module.ts
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [HttpClientModule]
})

// data.service.ts
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DataService {
  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get('https://api.example.com/users');
  }

  createUser(user: any) {
    return this.http.post('https://api.example.com/users', user);
  }
}

// component.ts
export class MyComponent {
  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getUsers().subscribe(
      data => console.log(data),
      error => console.error(error)
    );
  }
}`
    },
    {
        id: 33,
        question: "How do you pass data between components?",
        explanation: "Data can be passed using: @Input (parent to child), @Output with EventEmitter (child to parent), Services (any to any), Router state (between routes), or ViewChild/ContentChild (parent accessing child).",
        kidExample: "Passing data is like sharing toys! You can hand a toy to your sibling (@Input), call your parent when you're done (@Output), or put it in a shared toy box (Service)!",
        codeExample: `// 1. Parent to Child with @Input
@Component({
  selector: 'app-child',
  template: '<p>{{childData}}</p>'
})
export class ChildComponent {
  @Input() childData: string;
}
// Usage: <app-child [childData]="parentData"></app-child>

// 2. Child to Parent with @Output
export class ChildComponent {
  @Output() notify = new EventEmitter<string>();

  sendData() {
    this.notify.emit('Hello Parent');
  }
}
// Usage: <app-child (notify)="handleData($event)"></app-child>

// 3. Via Service
@Injectable()
export class DataService {
  private dataSource = new BehaviorSubject<string>('default');
  data$ = this.dataSource.asObservable();

  updateData(data: string) {
    this.dataSource.next(data);
  }
}`
    },
    {
        id: 34,
        question: "What are pipes in Angular?",
        explanation: "Pipes transform data in templates. They take input data and return transformed output. Use the | symbol. Pipes can be chained and accept parameters. They don't change the original data.",
        kidExample: "Pipes are like magic filters! You pour water (data) through a filter, and it comes out clean or flavored (transformed) - but the original water source doesn't change!",
        codeExample: `<!-- Built-in pipes -->
<p>{{ userName | uppercase }}</p>
<!-- 'john' becomes 'JOHN' -->

<p>{{ price | currency:'USD' }}</p>
<!-- 99.99 becomes '$99.99' -->

<p>{{ birthday | date:'MM/dd/yyyy' }}</p>
<!-- Date object becomes '12/25/2024' -->

<p>{{ longText | slice:0:100 }}</p>
<!-- Shows first 100 characters -->

<!-- Chaining pipes -->
<p>{{ name | uppercase | slice:0:3 }}</p>
<!-- 'john' becomes 'JOH' -->`
    },
    {
        id: 35,
        question: "Can you give examples of inbuilt Angular pipes?",
        explanation: "Angular provides many built-in pipes: DatePipe (format dates), CurrencyPipe (format money), UpperCasePipe/LowerCasePipe (change case), DecimalPipe (format numbers), PercentPipe (format percentages), JsonPipe (debug objects), SlicePipe (slice arrays/strings), AsyncPipe (subscribe to observables).",
        kidExample: "Built-in pipes are like different juice makers! One makes orange juice (date formatting), another makes apple juice (currency formatting), each transforms your fruit (data) differently!",
        codeExample: `export class PipeExamplesComponent {
  today = new Date();
  price = 123.456;
  name = 'angular';
  percent = 0.75;
  users = ['Alice', 'Bob', 'Charlie', 'David'];
  data$ = of({ name: 'Angular', version: 17 });
}

<!-- Template -->
<p>{{ today | date:'fullDate' }}</p>
<!-- 'Monday, December 25, 2024' -->

<p>{{ price | currency:'USD':'symbol':'1.2-2' }}</p>
<!-- '$123.46' -->

<p>{{ name | uppercase }}</p>
<!-- 'ANGULAR' -->

<p>{{ percent | percent }}</p>
<!-- '75%' -->

<p>{{ users | slice:0:2 }}</p>
<!-- ['Alice', 'Bob'] -->

<p>{{ data$ | async | json }}</p>
<!-- Auto-subscribes and shows JSON -->`
    },
    {
        id: 36,
        question: "How do you write a custom pipe?",
        explanation: "Create a custom pipe using @Pipe decorator and implementing PipeTransform interface. The transform method takes input value and optional parameters, returns transformed value. Register it in module declarations.",
        kidExample: "Creating a custom pipe is like inventing your own secret code! You decide what goes in, how to change it, and what comes out!",
        codeExample: `// custom-pipe.ts
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverseString'
})
export class ReverseStringPipe implements PipeTransform {
  transform(value: string): string {
    return value.split('').reverse().join('');
  }
}

// Example with parameters
@Pipe({
  name: 'multiply'
})
export class MultiplyPipe implements PipeTransform {
  transform(value: number, multiplier: number = 1): number {
    return value * multiplier;
  }
}

// Register in module
@NgModule({
  declarations: [ReverseStringPipe, MultiplyPipe]
})

// Usage in template
<p>{{ 'hello' | reverseString }}</p>
<!-- 'olleh' -->

<p>{{ 5 | multiply:3 }}</p>
<!-- 15 -->`
    },
    {
        id: 37,
        question: "What is RxJs and why is it needed?",
        explanation: "RxJS (Reactive Extensions for JavaScript) is a library for reactive programming using Observables. It handles asynchronous data streams, events, and async operations. Angular uses RxJS extensively for HTTP, forms, routing, and events.",
        kidExample: "RxJS is like a water pipeline system! Water (data) flows through pipes (streams), and you can filter it, combine it, or control the flow - all automatically!",
        codeExample: `import { Observable, of, from } from 'rxjs';
import { map, filter } from 'rxjs/operators';

// Create an Observable
const numbers$ = of(1, 2, 3, 4, 5);

// Transform data with operators
numbers$.pipe(
  filter(n => n > 2),      // Only numbers > 2
  map(n => n * 10)         // Multiply by 10
).subscribe(result => {
  console.log(result);      // 30, 40, 50
});

// Real Angular example - HTTP
this.http.get('/api/users').pipe(
  map(users => users.filter(u => u.active)),
  catchError(error => of([]))
).subscribe(activeUsers => {
  this.users = activeUsers;
});`
    },
    {
        id: 38,
        question: "What are observables and observers?",
        explanation: "An Observable is a data source that emits values over time. An Observer subscribes to the Observable and receives notifications (next, error, complete). It's like a subscription model - Observable produces, Observer consumes.",
        kidExample: "Observable is like a YouTube channel that uploads videos (emits data). Observer is like you subscribing and watching those videos (receiving data). You watch only when subscribed!",
        codeExample: `import { Observable } from 'rxjs';

// Creating an Observable
const myObservable = new Observable(observer => {
  observer.next('First value');
  observer.next('Second value');

  setTimeout(() => {
    observer.next('Third value');
    observer.complete();
  }, 1000);
});

// Observer subscribing
const observer = {
  next: (value) => console.log('Received:', value),
  error: (err) => console.error('Error:', err),
  complete: () => console.log('Done!')
};

myObservable.subscribe(observer);

// Shorter syntax
myObservable.subscribe(
  value => console.log(value),
  error => console.error(error),
  () => console.log('Complete')
);`
    },
    {
        id: 39,
        question: "What is a stream in RxJs?",
        explanation: "A stream is a sequence of data values over time. It can be events (clicks, inputs), data from HTTP requests, timers, or any async data. RxJS lets you work with streams using Observables and operators.",
        kidExample: "A stream is like a conveyor belt in a factory! Items (data) keep moving on the belt over time, and you can inspect, modify, or grab items as they pass by!",
        codeExample: `import { fromEvent, interval } from 'rxjs';
import { map, throttleTime, scan } from 'rxjs/operators';

// Stream of click events
const clicks$ = fromEvent(document, 'click');
clicks$.subscribe(() => console.log('Clicked!'));

// Stream that emits every second
const timer$ = interval(1000);
timer$.subscribe(count => console.log(count));

// Transform a stream
const mouseMove$ = fromEvent(document, 'mousemove').pipe(
  throttleTime(100),  // Only emit every 100ms
  map(event => ({
    x: event.clientX,
    y: event.clientY
  }))
);

// Count button clicks
const clickCount$ = clicks$.pipe(
  scan(count => count + 1, 0)
);
clickCount$.subscribe(count => console.log(\`Clicks: \${count}\`));`
    },
    {
        id: 40,
        question: "What is the use of subscribe in RxJs?",
        explanation: "subscribe() is the method that starts the Observable execution. It connects the Observer to the Observable, allowing data to flow. Without subscribe(), the Observable does nothing (lazy evaluation).",
        kidExample: "Subscribe is like turning on a TV! The TV show (Observable) is broadcasting, but you see nothing until you turn on your TV (subscribe). Once you subscribe, the show plays!",
        codeExample: `import { of } from 'rxjs';

const numbers$ = of(1, 2, 3);

// Observable created but NOT executing
console.log('Before subscribe');

// Start execution with subscribe
numbers$.subscribe({
  next: (value) => console.log('Value:', value),
  error: (err) => console.error('Error:', err),
  complete: () => console.log('Complete!')
});

// Practical example
this.userService.getUser(id).subscribe(
  user => {
    this.user = user;           // Success
  },
  error => {
    console.error(error);       // Error
    this.showError = true;
  }
);

// Store subscription for cleanup
this.subscription = this.data$.subscribe(data => {
  console.log(data);
});`
    },
    {
        id: 41,
        question: "How do you unsubscribe from a stream?",
        explanation: "Unsubscribe by calling .unsubscribe() on the subscription object, using takeUntil operator with a Subject, using async pipe (auto-unsubscribes), or using take/first operators that auto-complete.",
        kidExample: "Unsubscribing is like hanging up a phone call! If you don't hang up (unsubscribe), the line stays open and wastes resources. Always hang up when you're done!",
        codeExample: `// Method 1: Manual unsubscribe
export class MyComponent implements OnDestroy {
  subscription: Subscription;

  ngOnInit() {
    this.subscription = this.dataService.getData()
      .subscribe(data => console.log(data));
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}

// Method 2: takeUntil pattern
export class MyComponent implements OnDestroy {
  destroy$ = new Subject<void>();

  ngOnInit() {
    this.dataService.getData()
      .pipe(takeUntil(this.destroy$))
      .subscribe(data => console.log(data));
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}

// Method 3: async pipe (best!)
@Component({
  template: '<div>{{ data$ | async }}</div>'
})
export class MyComponent {
  data$ = this.dataService.getData();
  // Auto-unsubscribes when component destroyed
}`
    }
];

// Initialize the application
function initApp() {
    renderQuestions(questionsData);
    setupEventListeners();
    setupScrollProgress();
}

// Render all questions
function renderQuestions(questions) {
    const container = document.getElementById('questionsContainer');
    container.innerHTML = '';

    questions.forEach((q, index) => {
        const card = createQuestionCard(q, index);
        container.appendChild(card);
    });
}

// Create a question card
function createQuestionCard(question, index) {
    const card = document.createElement('div');
    card.className = 'question-card';
    card.style.animationDelay = `${index * 0.05}s`;

    card.innerHTML = `
        <div class="question-header">
            <span class="question-number">Q${question.id}</span>
            <span class="question-text">${question.question}</span>
            <span class="toggle-icon">▼</span>
        </div>
        <div class="answer-content">
            <div class="answer-section">
                <h3>📚 Explanation</h3>
                <p>${question.explanation}</p>
            </div>
            <div class="answer-section">
                <h3>👶 Explain Like I'm 5</h3>
                <div class="example-box">
                    <p>${question.kidExample}</p>
                </div>
            </div>
            ${question.codeExample ? `
                <div class="answer-section">
                    <h3>💻 Code Example</h3>
                    <div class="code-example">
                        <pre>${escapeHtml(question.codeExample)}</pre>
                    </div>
                </div>
            ` : ''}
        </div>
    `;

    // Toggle functionality
    const header = card.querySelector('.question-header');
    header.addEventListener('click', () => {
        card.classList.toggle('active');
    });

    return card;
}

// Escape HTML for code display
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Setup event listeners
function setupEventListeners() {
    // Search functionality
    const searchBox = document.getElementById('searchBox');
    searchBox.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        filterQuestions(searchTerm);
    });

    // Scroll to top button
    const scrollTopBtn = document.getElementById('scrollTop');
    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Show/hide scroll button
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollTopBtn.classList.add('visible');
        } else {
            scrollTopBtn.classList.remove('visible');
        }
    });
}

// Filter questions based on search
function filterQuestions(searchTerm) {
    const cards = document.querySelectorAll('.question-card');

    cards.forEach(card => {
        const text = card.textContent.toLowerCase();
        if (text.includes(searchTerm)) {
            card.style.display = 'block';
            card.style.animation = 'fadeIn 0.3s ease-out';
        } else {
            card.style.display = 'none';
        }
    });
}

// Setup scroll progress bar
function setupScrollProgress() {
    window.addEventListener('scroll', () => {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        document.getElementById('progressFill').style.width = scrolled + '%';
    });
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', initApp);
