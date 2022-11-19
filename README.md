# Cordova-Tailwind-Firebase

## Table of Contents

- [About](#about)
- [Getting Started](#getting_started)
- [Usage](#usage)
- [Contributing](../CONTRIBUTING.md)

## About <a name = "about"></a>

Projects created to fulfill platform-based programming lecture assignments. Create a multiplatform application using Cordova. Use Tailwind for styling and Firebase for Back-end.

## Getting Started <a name = "getting_started"></a>

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See [deployment](#deployment) for notes on how to deploy the project on a live system.

### Prerequisites

Download and install Node.js. On installation you should be able to invoke node and npm on your command line.

### Installing

A step by step series of examples that tell you how to get a development env running.

Install the cordova module using npm utility of Node.js. The cordova module will automatically be downloaded by the npm utility.

```
npm install -g cordova
```

Add the platforms that you want to target your app. We will add the 'ios' and 'android' platform and ensure they get saved to config.xml and package.json:

```
cordova platform add android
cordova platform add browser
```

To check your current set of platforms:

```
cordova platform ls
```

Run the following command to build the project for all platforms:

```
cordova build
```

Run the following command to run the project on the browser:

```
cordova run browser
```

Run the following command to run the project on the android:

```
cordova run android
```

## Usage <a name = "usage"></a>

Kerjaan Rifan ntar
