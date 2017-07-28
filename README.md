# yeoman webext-typescript

generates a basic firefox webextension with typescript support
 
```
$ npm install -g yo
$ npm install -g generator-webext-typescript
$ mkdir extension
$ cd extension
$ yo webext-typescript myExtensionName myExtension@example.com http://example.com
```
 
for developing, run
 
```
$ npm run watch &
$ npm run firefox:start
```

for packaging, run

```
$ npm run build
```

for more information (signing etc.), see [the Documentation at mozilla](https://developer.mozilla.org/en-US/Add-ons/WebExtensions/Getting_started_with_web-ext)