'use strict';
var Generator = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = Generator.extend({  
  prompting: function() {

    var prompts = [{
      type: 'input',
      name: 'name',
      message: 'Nome do aplicativo',
      default: this.appname
    },{
      type: 'input',
      name: 'second',
      message: 'Segunda pergunta',
      default: 'Segundo'
    },{
      type: 'input',
      name: 'title',
      message: 'Digite o nome do titulo',
      default: 'Meu titulo'
    }];

    return this.prompt(prompts)
    .then(function(answers){
      this.log(JSON.stringify(answers));
      this.props = answers;
    }.bind(this));
  },

  writing: function(){
    this.log(JSON.stringify(this.props));

    this.fs.copyTpl(
      this.templatePath('index.html'),
      this.destinationPath('index.html'),{
        title : this.props.title
      });
  }
});
