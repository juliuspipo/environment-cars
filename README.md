# Environment Project

## Environment for scalable Web Apps

### This development environment is thinking for Web Applications that contains a common core and n layers of integration.

Gulp Tasks:

| Task | Command |
|---|---|
| Install all libraries for environment | `npm i`|
| Deploy develop environment | `gulp dev --name=app_name`|
| Deploy production environment | `gulp prod --name=app_name`|
| Build distribution + UT (PhantomJS and SingleRun) | `gulp dist --name=app_name`|
| Execute UT | `gulp test --name=app_name --browser=browser_name --run=single_run_value`|
| Execute CT | `gulp test-complexity --name=app_name`|
| Generate CHANGELOG.md | `gulp changelog`|