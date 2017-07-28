const Generator = require('yeoman-generator');

module.exports = class extends Generator {
    constructor(args, opts) {
        super(args, opts);

        this.argument('name', { type: String, required: true });
        this.argument('firefoxExtensionId', { type: String, required: true });
        this.argument('homepage', { type: String, required: true });
        this.argument('license', { type: String, required: false, default: 'MIT' });
        this.argument('author', { type: String, required: false, default: '' });
    }

    copy() {
        this.fs.copy(
            this.templatePath('.npmignore'),
            this.destinationPath('.npmignore')
        );
        this.fs.copy(
            this.templatePath('.npmignore'),
            this.destinationPath('.gitignore')
        );

        this.fs.copy(
            this.templatePath('**/*'),
            this.destinationPath(''),
            {globOptions: {ignore: [
                this.templatePath('package.json'),
                this.templatePath('extension/manifest.json')
            ]}}
        );

        this.fs.copyTpl(
            this.templatePath('package.json'),
            this.destinationPath('package.json'),
            {
                name: this.options.name,
                license: this.options.license,
                author: this.options.author
            }
        );

        this.fs.copyTpl(
            this.templatePath('extension/manifest.json'),
            this.destinationPath('extension/manifest.json'),
            {
                firefoxExtensionId: this.options.firefoxExtensionId,
                name: this.options.name,
                homepage: this.options.homepage,
            }
        );
    }

    install() {
        this.installDependencies({
            npm: true,
            bower: false,
            yarn: false,
        });
    }
};
