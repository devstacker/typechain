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
          "module": "commonjs", //nodejs를 평범하게 사용, export/import
          "target": "ES2015",
          "sourceMap": true
      },
      //어떤 파일들이 컴파일 과정에 포함되는지 명시
      "include": ["index.ts"],// //컴파일 과정에서 포함할 파일의 배열을 적으면됨
      "exclude": ["node_modules"],
  }
  ```

  

- 터미널에서 `tsc` 를 입력하면 `index.js` 랑 `index.js.map` 파일이 생김

- `tsc` 대신 `npm start` 사용할 것임

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

    