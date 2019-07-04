# instrument-builder

## Overview

This repo contains all LORIS-ReproSchema shared React components to be used in the front-end development of an Instrument Builder module that can be plugged in both LORIS and MindLogger.

The React components will include LORIS Core React elements living in the jsx/ directory as well as instrument-builder specific Forms for adding new items to the instrument.

---

## Set up

In order to use `webpack`, we need to install `Node.js`, `NPM` and additional dependencies.

### 1. Get Node.js

To check whether or not `Node.js` is installed on your machine, run the following:
```
node -v
```

If not installed, use one of the following steps to install for your OS:

**Ubuntu**

For this install you will need sudo rights

```
curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -
sudo apt-get install -y nodejs
sudo apt-get install -y build-essential
```
>**Note**: Older LTS version (14.04<=)
```
curl -sL https://deb.nodesource.com/setup_4.x | sudo -E bash -
sudo apt-get install -y nodejs
sudo apt-get install -y build-essential
```

**CentOS**

```
curl --silent --location https://rpm.nodesource.com/setup_6.x | bash -
yum -y install nodejs
yum install gcc-c++ make
```

**MacOS**

Download the `Node.js` package from [here](https://nodejs.org/en/)

### 2. Get NPM

Once `Node.js` is installed, run the following to install `npm`

```
curl -L https://www.npmjs.com/install.sh | sudo sh
```

### 3. Get LORIS dependencies

Once `Node.js` and `npm` are installed, you are ready to install all necessary `Node.js` dependencies. (i.e `webpack`)

Follow these steps in your terminal:

```bash
  cd $loris$ # your LORIS home directory
  npm install --only=dev
```

>**Note**: Permissions might be adjusted using
```bash
sudo chown -R $USER:$(id -gn $USER) ./node_modules
```

>**Note**: to see a list of all dependencies refer to `package.json`

---

## File Structure

**1. Generic `JSX` files (Loris Core)**

Within LORIS we have many React components that can be used throughout the different modules. When adding a new generic file, the `JSX` file should be placed in the `jsx/` directory and its compiled file in the `htdocs/js/components` directory.

**2. instrument-builder specific JSX files**

React components that are designed for this specific instrument_builder module should have its `JSX` file placed in the
`module/jsx/` directory and its compiled file in the `module/js/` directory.


>**Note**: When creating a new JSX file **always** use the `.js` extension or the continuous compilation will not work as expected. The file name of the `JSX` and its compiled file should have the same name.

---

## Transpiling React code

We need to use `webpack` in order to transpile `JSX` and `ES6` syntax used in our React code into `ES5` syntax understood by all browsers.

**Step 1: Update `webpack.config.js`**

When you create a new `ES6/JSX file`, ensure you add it to the ```webpack.config.js``` file under the ```config.entry``` object with the following format:
```
'./desc/file.js' : './src/file.js'
```

**Step 2: Transpiling all files**

To compile all `ES6/JSX` files in LORIS, run the following command:

```
npm run compile
```

which is a short-cut for:

```
./node_modules/.bin/webpack
```

**Step 3: Watch all files (optional)**

You can have webpack watch for changes to all revelant files and compile them on the fly:

```
npm run watch
```

which is a short-cut for:

```
./node_modules/.bin/webpack --watch
```

---

## Coding Guidelines
- All new React components and major updates to existing React components should follow `ES6 standard`
- All new and existing Javascript code should pass `ESLint` validation
- All new components should be compiled using `webpack`
- All new modules and major module updates should use a single javascript entry-point `index.js` and rely on ES6 modules to include additional components

---
