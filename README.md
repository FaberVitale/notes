# Notes 

<img src="./src/images/icons/favicon512.png" width="64">

*Notes, links and thoughts about programming, web etc...*

A statically rendered, progressive web app and personal blog created with:

* [Gatsby](https://www.gatsbyjs.org/)
* [Material-ui](https://material-ui.com/)
* [React](https://reactjs.org/)
* [JSS](https://github.com/cssinjs/jss)
* [Flow](https://flow.org/en/)
* ...and a many other open source projects (peek package.json)

## Scripts

* `develop` | `start`: starts development server
* `build`: build website in `/public`
* `format`: runs prettier
* `deploy`: deploys page to *githubuser.io*/notes
* `clean`: deletes `/public`
### hooks 
* `prebuild`: runs clean
* `precommit`: runs flow eslint and prettier
* `predeploy`: runs build

## To Do

- [x] deploy
- [ ] add tags
- [ ] display post stats
- [ ] tweak prismjs theme
- [ ] add CLI to manage posts
- [ ] add jest and/or cypress
- [x] change drawer content; an accordion maybe?
- [ ] add more posts

## License

[MIT](/LICENSE)