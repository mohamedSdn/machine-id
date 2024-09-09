# Create a .exe to quickly get a machine's unique Id (Uses [node-machine-id](https://github.com/automation-stack/node-machine-id) and [Node's SEA feature](https://nodejs.org/api/single-executable-applications.html))

## Steps

- Compile index.js using your favorive build tool (esbuild, webpack...).
  
    > example using esbuild: `.\node_modules\.bin\esbuild index.js --bundle --outfile=machine-id.js --platform=node`
- Tweak sea-config.json based on your needs.
- Run: `node --experimental-sea-config sea-config.json`.
- Run: `node -e "require('fs').copyFileSync(process.execPath, 'machine-id.exe')"`.
- Run `npx postject machine-id.exe NODE_SEA_BLOB sea-prep.blob --sentinel-fuse NODE_SEA_FUSE_fce680ab2cc467b6e072b8b5df1996b2`.

Now the .exe file should be generated and ready to be used.
