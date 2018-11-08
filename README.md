# Planning Poker Application
A simple planning poker app with user accounts and groups to organize planning sessions.


## Necessary Variables
You will need the following environmental variables defined in order for this application to work properly:

* `PRISMA_ENDPOINT`: The endpoint to your Prisma instance. If using the demo Prisma setup, this is provided when the instance is created, upon initial deploy.
* `APP_DEFAULT_ENDPOINT`: Used in the `.graphqlconfig.yml` file to set a default endpoint for the project.

## Commands
* `prisma deploy` to deploy any changes that occurred with the datamodel to the Prisma instance.
