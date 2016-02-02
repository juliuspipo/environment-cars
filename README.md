# Environment Project

## Environment for scalable Web Apps

### This development environment is thinking for Web Applications that contains a common core and n layers of integration.

## Getting Started

To get you started you can simply clone the environment-cars repository and install the dependencies:

### Prerequisites

You need git to clone the environment-cars repository. You can get git from
[http://git-scm.com/](http://git-scm.com/).

We also use a number of node.js tools to initialize and test environment-cars. You must have node.js and
its package manager (npm) installed.  You can get them from [http://nodejs.org/](http://nodejs.org/).

### Clone environment-cars

Clone the environment-cars repository using [git][git]:

```
git clone https://github.com/rpinaa/environment-cars.git
cd environment-cars
```

### Install Dependencies

We have two kinds of dependencies in this project: tools and angular framework code.  The tools help
us manage and test the application.

* We get the tools we depend upon via `npm`, the [node package manager][npm].
* We get the angular code via `bower`, a [client-side code package manager][bower].

We have preconfigured `npm` to automatically run `bower` so we can simply do:

```
npm install
```

Behind the scenes this will also call `bower install`.  You should find that you have two new
folders in your project.

* `node_modules` - contains the npm packages for the tools we need
* `vendor` - contains the angular framework files

*Note that the `vendor` folder would normally be installed in the root folder but
environment-cars changes this location through the `.bowerrc` file.  Putting it in the app folder makes
it easier to serve the files by a webserver.*

## Deploy Applications

### Run the Application in DEV environment

We have preconfigured the project with a simple development web server.  The simplest way to start
this server is:

```
gulp dev --name=app_name
```

Where `app_name` is the name of the integration layer (file) into apps folder, by default exist `cars` folder (can be renamed). If exist problems with the port number (by default is 5101), you can change the port number as follow:

```
gulp dev --name=app_name --port=8000
```

Now browse to the app at `http://localhost:5101/index.html`.

### Run the Application in PROD environment

We have preconfigured the project with a simple production web server. The `prod` task execute minify process for compress js and css, concat into one and compress html templates. The simplest way to start this server is:

```
gulp prod --name=app_name
```

Where `app_name` is the name of the integration layer (file) into apps folder, by default exist `cars` folder (can be renamed). If exist problems with the port number (by default is 5101), you can change the port number as follow:

```
gulp prod --name=app_name --port=8000
```

Now browse to the app at `http://localhost:5101/index.html`.

## Directory Layout

```
src/                             --> all of the source files for the environment
  apps/                           --> all of the source files for the integrations layers (complete web apps)
    cars/                           --> default integration project "cars"
      assets/                         --> default assets folder for cars project
      locals/                         --> default locals folder for cars project
        en-US/                          --> default en-US language folder
          translation.json                --> default json for translations
        es-MX/                          --> default es-MX language folder
          translation.json                --> default json for translations
      modules/                        --> default modules folder
        carsConstants.js                --> default carsConstants module
        carsDirectives.js               --> default carsDirective module
        carsFactories.js                --> default carsFactories module
        carsFilters.js                  --> default carsFilters module
        carsServices.js                 --> default carsServices module
      src/                            --> default src folder (contains all the business logic for the cars project)
        login/                          --> default login business operative
          login.html                      --> default login view for login operative
          loginController.js              --> default loginController for login operative
          loginRouter.js                  --> default loginRouter for all the operative routing
          loginService.js                 --> default loginService for login operative
  core/                           --> all of the source files for the core layer
    components/                     --> all app common components (directives)
      loading/                        --> default loading directive (just for example)
        loading.html                    --> default loading template for directive (just for example)
        loading.js                      --> default loading directive config (directive, controller, link, compile; just for example)
    factories/                      --> all app common factories
      patternsFactory.js              --> default pattersFactory (just for example)
    filters/                        --> all app common filters
      fiveMaskFilter.js               --> default fiveMaskFilter (just for example)
    modules/                        --> all app common modules folder for core definition
      coreCommons.js                  --> default coreCommons module, set all the vendors commons módules (this configuration is just for example)
      coreConstants.js                --> default coreConstants module
      coreDirectives.js               --> default coreDirectives module
      coreFactories.js                --> default coreFactories module
      coreFilters.js                  --> default coreFilters module
      coreServices.js                 --> default coreServices module
      coreTemplates.js                --> default coreTemplates module (this module contains all the core directives that will be loaded without lazyLoad)
    providers/                      --> all app common providers folder
      lazyLoaderProvider.js           --> default lazyLoaderProvider (just for example)
      lazyLoaderProvider.spec.js      --> default lazyLoaderProvider.spec (just for UT example)
    services                        --> all app common services folder
      storageService.js               --> default storageService (just for example)
  styles/                        --> default styles folder (can be include "components, includes, layout and layouts" folders not another name for import layouts)
    components/                   --> default components styles folder (contains all the directive styles)
      prueba.less                   --> default prueba less style (just for example)
    includes/                     --> default includes styles folder (contains all the business styles of the integration layers)
      login.less                    --> default login.less style (just for example)
    cars.less                     --> default main style for cars project (just one main style per integration)
    core.less                     --> default main style for core layer (just one main style per core)
  cars.html                      --> default cars index, that contains just the necessary core dependencies, no more, all the others scripts and css styles sheets will inject automatically
  cars.js                        --> default cars module config
  core.html                      --> default core index, that contains just the necessary core dependencies, this index is for test the core base project
  core.js                        --> default core module config
config.js                      --> default config for environment architecture
karma.conf.js                  --> config file for running unit tests with Karma
```

## Testing

There are two kinds of tests in the environment-cars application: Unit tests and Complexity tests.

### Running Unit Tests (UT)

The environment-cars app comes preconfigured with unit tests. These are written in
[Jasmine][jasmine], which we run with the [Karma Test Runner][karma]. We provide a Karma
configuration file to run them.

* the configuration is found at `karma.conf.js`
* the unit tests are found next to the code they are testing and are named as `...spec.js`.

The easiest way to run the unit tests is to use the supplied npm script:

```
gulp test --name=app_name
```
Where `app_name` is the name of the integration layer (file) into apps folder, by default exist `cars` folder (can be renamed). This test task execute with PhantomJS as Browser and singleRun with true value. Can change parameters as follow:

```
gulp test --name=app_name --browser=browser_name --run=single_run_value
```

Where `browser_name` : {Chrome, PhantomJS or Firefox} and `single_run_value` : {true or false}.

This script will start the Karma test runner to execute the unit tests. Moreover, Karma will sit and
watch the source and test files for changes and then re-run the tests whenever any of them change.
This is the recommended strategy; if your unit tests are being run every time you save a file then
you receive instant feedback on any changes that break the expected code functionality.

You can also ask Karma to do a single run of the tests and then exit. This is useful if you want to check that a particular version of the code is operating as expected.

### Running Complexity Test (CT)

The environment-cars app comes preconfigured with complexity test. These are generate with plato library (https://github.com/es-analysis/plato), can execute as follow:

```
gulp test-complexity --name=app_name
```

## Distributing

We have preconfigured the project with a simple `dist` task. This task execute all the life cycle of the `pro` task and add UT for complete the continuos integration, can execute as follow:

```
gulp dist --name=app_name
```

The distribution can find in prod folder of the environment-cars root.

Review Gulp Tasks:

| Task | Command |
|---|---|
| Install all libraries for environment | `npm i`|
| Deploy develop environment | `gulp dev --name=app_name`|
| Deploy production environment | `gulp prod --name=app_name`|
| Build distribution + UT (PhantomJS and SingleRun) | `gulp dist --name=app_name`|
| Execute UT | `gulp test --name=app_name --browser=browser_name --run=single_run_value`|
| Execute CT | `gulp test-complexity --name=app_name`|
| Generate CHANGELOG.md | `gulp changelog`|