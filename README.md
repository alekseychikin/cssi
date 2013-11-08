# grunt-cssi

> Concat css-files to css-file with @import lines

## Getting Started
This plugin requires Grunt `~0.4.0`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-cssi --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-cssi');
```

## The "cssi" task

### Overview
In your project's Gruntfile, add a section named `cssi` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  cssi: {
    options: {
      // Task-specific options go here.
    },
    files: {
      // Target-specific file lists and/or options go here.
    },
  },
})
```

### Options

#### options.separator
Type: `String`
Default value: `',  '`

A string value that is used to do something with whatever.

#### options.punctuation
Type: `String`
Default value: `'.'`

A string value that is used to do something else with whatever else.

### Usage Examples

```js
grunt.initConfig({
  cssi: {
    default_options: {
      options: {
      },
      files: {
        'tmp/default_options': ['test/fixtures/**/*.css'],
      },
    },
    custom_options: {
      options: {
        prefix: '../',
      },
      files: {
        'tmp/custom_options': ['test/fixtures/**/*.css'],
      },
    },
  },
})
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_
