// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.

export const environment = {
  production: false,
  auth: {
    url: "https://accounts-dev.artik.cloud/",
    clientId: "ebf1b426ca854ffcb7ccdef90505ee31",
  },
  authPublic: {
    url: "http://localhost:9002/",
  },
  api: {
    rest: "https://api.artik.cloud/v1.1/",
    graphql: "http://localhost/graphql/",
  }
};
