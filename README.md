## Typechain

Learning Typescript by making a Blockchain with it



### typescript

- programming language

- javascript superset



### setting

```shell
npm init
npm install -g typescript
```

- tsconfig.json 생성

  - how to compile the javascript

  ```json
  {
      "compilerOptions": {
          "module": "commonjs",
          "target": "ES2015",
          "sourceMap": true
      },
      "include": ["index.ts"],
      "exclude":  ["node_modules"],
  }
  ```

  

- 터미널에서 `tsc` 를 입력하면 `index.js` 랑 `index.js.map` 파일이 생김

- `tsc` 대신 `npm start` 사용

  - package.json

    ```json
    {
      "name": "typechain",
      "version": "1.0.0",
      "description": "Learning Typescript by making a Blockchain with it",
      "main": "index.js",
      "repository": {
        "type": "git",
        "url": "git+https://github.com/devstacker/typechain.git"
      },
      "scripts": {
        "start": "node index.js",
        "prestart": "tsc"
      },
      "author": "devstacker",
      "license": "ISC"
    }
    
    ```

-  watch 모드에서 compile 하기
     - `tsc-watch` 사용

      ```shell
      npm install tsc-watch --save-dev
      ```

     - package.json

       ```json
       {
            "scripts": {
           "start": "tsc-watch --onSuccess \" node dist/index.js \" "
         }
       }
       ```

     - tsconfig.json

       ```json
       {
         "compilerOptions": {
           "outDir": "dist"
         },
         "include": ["src/**/*"],
       }
       ```

  

  > `tsc-watch` 설치하고 json파일 수정후 `npm start` 했는데 "Cannot find module 'typescript/bin/tsc" 오류발생하여  `npm install typescript --save-dev` 로 해결함(?)