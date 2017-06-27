**Project Status: Work In Progress**



## Introduction

xdebug is a very helpful tool in php development, but setting up xdebug in your server and your IDE/editor is sometimes painful and confusing. 

This website tries to make your life easier by offering an intuitive, step-by-step gui that goes through xdebug's Introduction, Configuration ,Trouble Shooting and more.



##  Installation

**Requirements:** [PHP](https://php.net/) >= 7.0  , [Composer](https://getcomposer.org/) ,  [npm](https://nodejs.org/)

#### 1. Grab the code 

run `git clone https://github.com/coolseven/xdebug-wizard` or `composer create-project coolseven/xdebug-wizard --prefer-dist`

#### 2. Install PHP Dependency

-   open a command line from the folder


-   run `composer install`
-   run `cp .evn.example .env`

#### 3. Install JavaScript Dependency

-   run `npm install`
-   or run `SET SASS_BINARY_SITE=https://npm.taobao.org/mirrors/node-sass&& npm install --verbose --registry=https://registry.npm.taobao.org` when you are behind The Wall.
-   run `npm run prod` 
-   try it in your browser.