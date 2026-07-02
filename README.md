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

### Sample output

```bash
==============================================================================================================================
[🎙️  ENG COMMENTARY]: [⌚ 0] 🏁 Kick-off! Match started between Argentina and France! 🏁
==============================================================================================================================
[🎙️  ENG COMMENTARY]: [⌚ 22] France building up play. Dayot Upamecano is running.
[🎙️  ENG COMMENTARY]: [⌚ 22] Dayot Upamecano makes a pass.
[🎙️  ENG COMMENTARY]: [⌚ 22] Aurélien Tchouaméni makes a brilliant long pass!
[🎙️  ENG COMMENTARY]: [⌚ 22] Interception! Nahuel Molina performs a strong tackle!
------------------------------------------------------------------------------------------------------------------------------
[🎙️  ENG COMMENTARY]: [⌚ 45] Argentina building up play. Nicolás Tagliafico is running.
[🎙️  ENG COMMENTARY]: [⌚ 45] Nicolás Tagliafico makes a pass.
[🎙️  ENG COMMENTARY]: [⌚ 45] Enzo Fernández makes a brilliant long pass!
[🎙️  ENG COMMENTARY]: [⌚ 45] Lionel Messi shoots towards the goal!
[🎙️  ENG COMMENTARY]: [⌚ 45] ⚽ GOAL!!! Argentina scores via Lionel Messi! Lionel Messi celebrates!
[🎙️  ENG COMMENTARY]: [⌚ 45] Live Score: Argentina 1 - 0 France
------------------------------------------------------------------------------------------------------------------------------
[🎙️  ENG COMMENTARY]: [⌚ 67] France building up play. Jules Koundé is running.
[🎙️  ENG COMMENTARY]: [⌚ 67] Jules Koundé makes a pass.
[🎙️  ENG COMMENTARY]: [⌚ 67] Aurélien Tchouaméni makes a brilliant long pass!
[🎙️  ENG COMMENTARY]: [⌚ 67] The shot sails over the crossbar.
------------------------------------------------------------------------------------------------------------------------------
[🎙️  ENG COMMENTARY]: [⌚ 90] Argentina building up play. Nicolás Tagliafico is running.
[🎙️  ENG COMMENTARY]: [⌚ 90] Nicolás Tagliafico makes a pass.
[🎙️  ENG COMMENTARY]: [⌚ 90] Enzo Fernández makes a brilliant long pass!
[🎙️  ENG COMMENTARY]: [⌚ 90] Interception! William Saliba performs a strong tackle!
------------------------------------------------------------------------------------------------------------------------------
[🎙️  ENG COMMENTARY]: [⌚ 90] 🏁 Full Time! 🏁
[🎙️  ENG COMMENTARY]: [⌚ 90] Final Score: Argentina [1] vs [0] France
[🎙️  ENG COMMENTARY]: [⌚ 90] Lionel Messi (Argentina)
[🎙️  ENG COMMENTARY]: [⌚ 90] 🏆 Winner: Argentina!
==============================================================================================================================
```