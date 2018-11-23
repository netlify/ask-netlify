# ask.netlify.com

Do you have questions for [Netlify](http://www.netlify.com)? We are gathering questions to find the best things to answer in a series of videos.


## How to ask?

We'll gather questions as [issues in this repo](https://github.com/netlify/ask-netlify/issues). That way you can see other questions and add you support for those questions getting answered.

Why not take a [look at the questions](https://github.com/netlify/ask-netlify/issues) which have already been asked, and [open an issue](https://github.com/netlify/ask-netlify/issues/new) if you'd like to ask a question of your own.

The answers will come in a future video, or perhaps you'll help us decide on a useful tutorial or blog post.


![ask.netlify.com](ask-screenshot.jpg)

## The site

This repo also holds the code for the simple site which lives at [ask.netlify.com](https://ask.netlify.com).


## Local development

To build the site you need:

- [Node](https://nodejs.org) - to run the build
- [Yarn](https://yarnpkg.com) - to install an manage dependencies


### Getting started

```bash

# clone this repository
git clone git@github.com:netlify/ask-netlify.git

# go to the working directory
cd ask-netlify.com

# install dependencies
yarn

# start a local build server with hot reloading
yarn start
```


## Deployment

The build command `yarn run build` will generate a set of static assets in a `dist` folder which can be deployed to any web hosting service.

[Netlify](http://www.netlify.com) runs this build process in a CI environment and then deploys the build automatically to our global CDN. Such deployments are [triggered automatically](https://www.netlify.com/docs/continuous-deployment/) by every git push to the `master` branch of the origin repository.




