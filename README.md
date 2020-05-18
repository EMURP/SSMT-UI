
# SSMT-UI

We are creating the MOC OPS Dashboard through the React Web App listening to Flask based API's from the backend from where we will be displaying and visualizing the data. 

# What is Nodejs and Why you need for react development?

Node.js is an open-source, cross-platform JavaScript run-time environment that executes JavaScript code outside of a browser. Node.js lets developers use JavaScript to develop wide variety of applications like network applications, command line tools, web api, web applications. You need nodejs for dev tooling (like local web server with live reloading features) and dev experience, you do not need nodejs to run react in production.

# What is npm and Why you need for react development?

Npm stands for node package manager, it is a dependency management tool for javascript applications. This tool will help to install and the libraries and other tools to support react development.

Let’s start with nodejs installation post completion on nodejs we will install create-react-app command line and will create a new react project

# Pre-Requisites and Pre-Conditions

	- Install the latest version of [Node JS](https://nodejs.org/en/download/) to run 


# Installation Steps

**Install Curl**

```sh
$sudo apt-get install curl
```

**Curl the setup files**

```sh
$curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -
```

**Install Node JS**

```sh
$sudo apt-get install -y nodejs**
```

**Check the Version of Node JS and npm Package Manager**

```sh
- $npm -v
- $node -v
```

**Install build-essential package, which is needed for Node to work properly:**

```sh
$sudo apt-get install -y build-essential
```

**Now  create the React app**

```sh
$sudo npm install -g create-react-app
```

**Run this React app Run he Following Command**

```sh
$create-react-app dashboard-app
```


**Run the react app**

```sh
$npm start
```

#### Todo's

- Add the PatternFly code
- Integrate the PatternFly Design


# License 

