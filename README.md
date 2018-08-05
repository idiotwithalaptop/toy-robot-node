# toy-robot-node
A Toy Robot code test implemented using NodeJS

By Ryan Brown

## Setting Up An Environment

This section describes the steps involved to setup an environment to execute the toy-robot-node application.
 

### Prerequisites

In order to run the toy-robot-node app, you need the following pre-requisites:

- GIT (You need to also have SSH keys registered with Github, see https://help.github.com/articles/connecting-to-github-with-ssh/)
- Docker (Simplest option, recommended)
- Node 10.8 (Only for those who prefer non-docker based environment)

 

### Getting Started

Once you have installed the pre-requisites, the next step is to clone the toy-robot-node repository using your preferred git utility.  For example, to clone this using the command line git command:

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
> git clone git@github.com:idiotwithalaptop/rea-robot-java.git
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


### Running the tests

Open a command prompt window and change to the directory where you cloned the
toy-robot-node package.  From there, you have a couple of options:
- If using bash and have docker installed, simply run the `run-tests` in the `auto` directory.
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
> ./auto/run-tests
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
- If you're using docker but not a bash shell, simply run the docker-compose command like below:
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
> docker-compose run --rm dev npm test
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
- Otherwise, use npm directly to install all the dependencies and run tests locally:
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
> npm install
> npm test
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
**(NOTE: If this is the first time you are using the toy-robot-node app, be sure to have a
working internet connection in order to allow NPM to download the
dependencies)**
 

### Running toy-robot-node

When you're ready to run the robot, you have some options based on your environment

#### Bash shell + Docker
We've made it easy for you.  Simply use the scripts available in the `/auto` directory.
To run the app, run this command from the toy-robot-node directory:
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
> ./auto/run
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
This will read commands from the keyboard and write errors to `err.log`, use Ctrl+C to quit.

If you want to run the robot using a predefined command file, much like the ones in `/examples`, 
simply provide the file name using the `-f` argument:
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
> ./auto/run -f examples/spiral.txt
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

#### Docker
Using docker without bash is pretty simple too.  To start the application, simply run the docker-compose cmd as below:
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
> docker-compose run --rm dev bin/runSimulator
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
This will read commands from the keyboard and write errors to `err.log`, use Ctrl+C to quit.

If you want to run the robot using a predefined command file, much like the ones in `/examples`, 
simply provide the file name using the `-f` argument:
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
> docker-compose run --rm dev bin/runSimulator -f examples/spiral.txt
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

#### Executing using node
Using node is fairly straightforward also. To start the application, simply run using the npm cmd as below:
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
> npm install
> npm run app 2> err.log
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
This will read commands from the keyboard and write errors to `err.log`, use Ctrl+C to quit.

If you want to run the robot using a predefined command file, much like the ones in `/examples`, 
simply provide the file name while redirecting STDIN such as below:
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
> npm install
> npm run app < examples/spiral.txt 2> err.log
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 

## Debugging REA-ROBOT

For the sake of debugging, the rea robot application will write all errors to the STDERR.  To avoid
having these messages output onto your screen while using the app, please be sure to redirect
the STDERR using `2>`.  All examples given above have already taken this into account.