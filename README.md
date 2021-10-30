## Deploy Instructions

Install firebase cli

```
npm i -g firebase-tools
```
Get firebase token for project 

```
firebase login:ci
```

Follow prompt to login to firebase.

A token will be printed in the terminal on login.

set `FIREBASE_TOKEN` in repo Settings > Secrets to value returned by running `firebase login:ci` above.

Pushing changes to `master` branch will now automate deployments to `Firebase Hosting` through `Github Actions` CI/CD.

configuration for the pipeline is in `.github/workflows/deploy.yaml`
