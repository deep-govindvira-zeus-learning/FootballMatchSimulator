# Football Match Simulator

## Initialize Your Project Directory

```bash
mkdir FootballMatchSimulator
cd my-typescript-app
npm init -y
```

## Install TypeScript Dependencies

```bash
npm install --save-dev typescript @types/node
```

## Generate the Compiler Configuration

```
npx tsc --init
```

## Configure Your Project Paths

`tsconfig.json`

```json
{
  "compilerOptions": {
    "target": "ES2022",                          /* Set the compiled output target version */
    "module": "NodeNext",                        /* Specify module code generation */
    "moduleResolution": "NodeNext",              /* Determine how modules get resolved */
    "rootDir": "./src",                          /* Specify the root folder of your source files */
    "outDir": "./dist",                          /* Redirect output structure to the directory */
    "strict": true,                              /* Enable all strict type-checking options */
    "esModuleInterop": true,                     /* Emit additional JavaScript for ease of importing */
    "skipLibCheck": true,                        /* Skip type checking of declaration files */
    "forceConsistentCasingInFileNames": true     /* Disallow inconsistently-cased references to files */
  },
  "include": ["src/**/*"]                        /* Compile only files in the src folder */
}
```

## Add Source Code

```bash
mkdir src
echo "const greeting: string = 'Hello, TypeScript!'; console.log(greeting);" > src/index.ts
```

## Build and Run the App

### Compile the code 

```
npx tsc
```

### Run the compiled script

```
node dist/index.js
```
