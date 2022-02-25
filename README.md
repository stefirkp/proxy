# PROXY

The cors solution

## CORS PROBLEM 

Because we using redux, we will found CORS. 
There are several ways to solve cors problem
1. Create new project `proxy` to solve the cors problem <br/>
2. For Safari user <br/>set up disable cors <br/> click develop on nav bar and choose `Disable CORS`
3. For Chrome user<br/> Run this in terminal `open -n -a /Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --args --user-data-dir="/tmp/chrome_dev_test" --disable-web-security` [Source](https://alfilatov.com/posts/run-chrome-without-cors/)

***
How to using proxy
1. clone this repo 
2. set up port
3. set up the host endpoint you want to connect, swager or other endpoint 
4. set up the whitelist
5. set up the endpoint 
6. `npm start`

example: <br/>
Full url: https://example/service/v1/login<br/>
Host: https://example/<br/>
endpoint: /service<br/>
url: v1/login

## ADDITIONAL INFO

### NPM & NODE INSTALL

first you need install `Node` and `NPM`. for installation `Node` and `NPM` on your device you can [Open This Link](https://nodejs.org/en/download/) for detail installation `npm` and `Node Js`.<br/><b>We recommend you</b> use `nvm`, `nvm` is  stands for `Node Version Manager`. 
As the name suggests, it helps you manage and switch between different Node versions with ease. It provides a command-line interface where you can install different versions with a single command, set a default, switch between them and much more.

if you went install `nvm` you can [Open This Link](https://github.com/nvm-sh/nvm), and we recommend to install `node version 12`

after install `Node & NPM` you can insert directories project, first you need to insert directories project `TIX-ACCOMMODATION-FE` on your terminal, you can run `npm install` on your terminal

***

before you run the project you need to costume, 
1. `hosts server` on your device. (opsional)
2. run `VPN` (opsional)
3. run proxy server
4. run the project

## HOST SERVER

for change `host server` your device you can open `terminal`, and in `root` dir `terminal` can use

`nano /etc/hosts`

after you run this code, you can see nano editor
if you see `## config` text and you can get `ip` and `server name`

```
## config
127.0.0.1       local.example.com
127.0.0.1       m.example.com
```

that is configuration for `host` on your `local device`.

## NPM START

after you setup host, now we can run `npm start`

after you run project, you can open `local.example.com:8080` 

you can custome the port in index.js
