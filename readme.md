## Project Status
Working In Progress, beta version should be released before Mid-September.



## Introduction

xdebug is a helpful and powerful tool in php development, but setting up xdebug in your server and your IDE/editor is sometimes confusing/frustrating. 

[This website](https://xdebug.huzhongyuan.com) tries to make your life easier by offering an intuitive, step-by-step gui that goes through xdebug's Introduction, Configuration ,Trouble Shooting ,Tookits and more.



##  Installation

**Requirements:** [PHP](https://php.net/) >= 7.0  , [Composer](https://getcomposer.org/) ,  [npm](https://nodejs.org/)

#### 1. Grab the code 

run `git clone https://github.com/coolseven/xdebug-wizard` or `composer create-project coolseven/xdebug-wizard --prefer-dist`

#### 2. Install PHP Dependency

-   open a command line from the folder


-   run `composer install`
-   run `cp .evn.example .env`
-   run `php artisan key:generate`

#### 3. Install JavaScript Dependency

-   run `npm install`
-   or run `SET SASS_BINARY_SITE=https://npm.taobao.org/mirrors/node-sass&& npm install --verbose --registry=https://registry.npm.taobao.org` when you are behind The Wall.
-   run `npm run prod` 
-   try it in your browser.