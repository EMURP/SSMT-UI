# SSMT-UI

# Installation Procedure

To install react tooling we need nodejs and npm. First let’s understand what these are and why we need them.

# What is Nodejs and Why you need for react development?

Node.js is an open-source, cross-platform JavaScript run-time environment that executes JavaScript code outside of a browser. Node.js lets developers use JavaScript to develop wide variety of applications like network applications, command line tools, web api, web applications. You need nodejs for dev tooling (like local web server with live reloading features) and dev experience, you do not need nodejs to run react in production.

# What is npm and Why you need for react development?

Npm stands for node package manager, it is a dependency management tool for javascript applications. This tool will help to install and the libraries and other tools to support react development.

Let’s start with nodejs installation post completion on nodejs we will install create-react-app command line and will create a new react project


**sudo apt-get install curl**

**curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -**

**sudo apt-get install -y nodejs**

**Check the Version**

**npm -v**

**node -v**

**Install the Dependencies such as**

**npm fund**

**let’s install build-essential package, which is needed for Node to work properly:**

**sudo apt-get install -y build-essential**

**Now to Create the React App**

**sudo npm install -g create-react-app**

**For Runnig this React App Run he Following Command**

**create-react-app dashboard-app**

Then enter the directory 

**cd dashboard-app*

**Run the react app**

**npm start**


