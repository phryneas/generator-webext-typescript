const Generator = require('yeoman-generator');

module.exports = class extends Generator {
    constructor(args, opts) {
        super(args, opts);

        this.argument('name', { type: String, required: true });
        this.argument('license', { type: String, required: false, default: 'MIT' });
        this.argument('author', { type: String, required: false, default: '' });
    }

    copy() {
        this.fs.copy(
            this.templatePath('**/.gitignore'),
            this.destinationPath('')
        );

        this.fs.copy(
            this.templatePath('**/*'),
            this.destinationPath(''),
            {globOptions: {ignore: [this.templatePath('package.json')]}}
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
    }

    install() {
        this.installDependencies({
            npm: true,
            bower: false,
            yarn: false,
        });
    }
};
