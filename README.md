![Node.js CI](https://github.com/openmrs/openmrs-esm-template-app/workflows/Node.js%20CI/badge.svg)

# OpenMRS ESM System Information Page/MicroFrontend

This repository is created from [this template](https://github.com/openmrs/openmrs-esm-template-app) and it is a small MicroFrontend which just presents the system information.

It is a start project to get familiar with building my own MicroFrontend.

## Prerequisites
- Ensure to have your node version as ^16.2.
- You might run into build errors if you have not upgraded your openmrs version, if that happens run `yarn upgrade @openmrs/esm-framework openmrs`

## Running this code

```sh
yarn  # to install dependencies
yarn start  # to run the dev server
```

Once it is running, a browser window
should open with the OpenMRS 3 application. Log in and then navigate to
`/openmrs/spa/systemInfo`.

## Helpful resources

Check the Frequently Asked Questions(FAQs)[3.0 devs FAQS](https://o3-dev.docs.openmrs.org/#/main/faq?id=im-not-seeing-the-latest-openmrsesm-framework-how-do-i-update-the-dependency)

