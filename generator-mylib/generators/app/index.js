'use strict'

const Generator = require('yeoman-generator');
module.exports = class extends Generator {

    async prompting() {
        const answers = await this.prompt([
            {
                type    : 'input',
                name    : 'name',
                message : 'Your project name',
                default : this.appname // Default to current folder name
            }, {
                type    : 'confirm',
                name    : 'cool',
                message : 'Would you like to add a magic module?'
            }
        ]);

        this.log('app name', answers.name);
        this.log('cool feature', answers.cool);
        this.appname = answers.name;
        this.cool = answers.cool;
    }

    writing() {
        const pkgJson = {
            devDependencies: {
              eslint: '^3.15.0'
            },
            dependencies: {
              react: '^16.2.0'
            }
          };

        // Extend or create package.json file in destination path
        this.fs.extendJSON(this.destinationRoot()+'/'+this.appname+'/'+'/package.json', pkgJson);
        this.fs.write(this.destinationRoot()+'/'+this.appname+'/'+'/index.js', `let test = 'Hello i am magic!'; console.log(test); console.log('${this.appname}');`);
    }

    install() {
        this.npmInstall(null, [],{cwd: this.destinationRoot()+'/'+this.appname+'/'});
    }

    installingLodash() {
        this.npmInstall(['lodash'], { 'save-dev': true }, {cwd: this.destinationRoot()+'/'+this.appname+'/'});
    }
}