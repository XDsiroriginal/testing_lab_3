# Как запустить
## 1. клонировать проект
```bash
git clone https://github.com/XDsiroriginal/testing_lab_3.git
```
## 2. инициализировать Node.js
```bash
npm init -y
```
## 3. установить cypress
```bash
npm install cypress --save-dev
```
## 4. запустить cypress
```bash
npx cypress open
```
> [!WARNING]
> если у вас ошибка cy.visit() failed trying to load: то пропишите 
```bash
npm config delete proxy
npm config delete https-proxy
```
