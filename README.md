# Gifinater

**Clone and run for a quick way to search Gifs on your desktop.**

This is a minimal Electron application based on the [Quick Start Guide](http://electron.atom.io/docs/latest/tutorial/quick-start) within the Electron documentation.

## To Use

To clone and run this repository you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```bash
# Clone this repository
git clone https://github.com/natesholland/gifinater.git
# Go into the repository
cd gifinater
# Install dependencies and run the app
npm install && npm start
```


## To Do

Currently working on a better way to compile the handlebars templates. Right now
I have to manually run `handlebars templates/*.hbs -f templates.js` and then go
into the top of `template.js` and add `let Handlebars = require('handlebars');`.
Obviously I'm not very good with JavaScript.

#### License [MIT](LICENSE.md)
