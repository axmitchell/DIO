# DIO
Centralized platform for indie bands and DIY venues to connect and collaborate.

## Getting Started

This service is supported on Node v12.16.1

Install package dependencies.

`npm install`

------

Install and start postgresql database if not already installed.
https://www.postgresql.org/download/

---
## scripts

`build`:

Builds the webpack bundles of both client modules.

---

`boot`:

Starts and watches the service server locally.

__`nodemon` is required for the script, `boot-dev`, and is not included in the package dependencies. `nodemon` must be installed separately or globally.__ 

---

`seed`:

Creates a postgres database `DIO`

Clears tables in the database.

Seeds tables, `users`
with a band user and venue user

Seeds tables `sets` and `shows`
with two sets and two shows

---