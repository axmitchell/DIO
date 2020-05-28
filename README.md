# DIO
Centralized platform for indie bands and DIY venues to connect and collaborate.

![](https://i.imgur.com/oFGpC0n.png)

## Built With

* [React](https://reactjs.org/docs/getting-started.html) - For the front end
* [Express](https://expressjs.com/en/guide/routing.html) - For the back end
* [PostgreSQL](https://www.postgresql.org/docs/) - For the database

## Getting Started

This service is supported on Node v12.16.1

Install package dependencies.

`npm install`

------

Install and start postgresql database if not already installed:
[https://www.postgresql.org/download/](https://www.postgresql.org/download/)

Fill out .envTemplate and rename to .env

---
## scripts

`build`:

Builds the webpack bundles of both client modules.

---

`boot`:

Starts and watches the service server locally.

__`nodemon` is required for the script, `boot`, and is not included in the package dependencies. `nodemon` must be installed separately or globally.__ 

---

`seed`:

Creates a postgres database, `DIO`

Clears tables in the database.

Seeds tables, `users`,
with a band user and venue user

Seeds tables, `sets` and `shows`,
with two sets and two shows

---

## Switch User Type
Append `/band` to the url to connect as the seeded band user

Append `/venue` to the url to connect as the seeded venue user

---


## API Spec

`GET /users/:id`

### Parameters

| Params | Type |
| --- | --- |
| :id | `Number` |

### Response:

| Field | Type |
| ----- | ---- |
| id| `Number`|
|type| `String`|
| name| `String`|
|link| `String`|
| location| `String`|
|about| `String`|
|photo| `String`|


```
{
    "id": 1,
    "type": "band",
    "name": "Index",
    "link": "https://indexxxband.bandcamp.com/",
    "location": "D.C.",
    "about": "graeme leddy: guitar, vox. nyle leddy: drums, bass on secret, charlotte hodgson: bass, vox, francisco abate: keys",
    "photo": "https://f4.bcbits.com/img/0018959511_10.jpg"
}
```
---

`GET /sets/`

### Optional Parameters

| Params | Type |
| --- | --- |
| :userId | `Number` |

### Response:

| Field | Type |
| ----- | ---- |
| userId | `Number`|
| name | `String`|
| link | `String`|
| userLocation | `String`|
| id | `Number`|
| date | `Date`|
| description | `String`|
| location | `String`|
| photo | `String`|


```
[
    {
        "userId": 1,
        "id": 1,
        "photo": "https://i.imgur.com/thiF7RE.gif",
        "name": "Index",
        "link": "https://indexxxband.bandcamp.com/",
        "location": "D.C.",
        "userLocation": "D.C.",
        "date": "2020-10-31",
        "description": "Got some spooky tunes for your spooky show. Check us out."
    },
    {
        "userId": 1,
        "id": 2,
        "photo": "https://i.imgur.com/RbCKrf8.gif",
        "name": "Index",
        "link": "https://indexxxband.bandcamp.com/",
        "location": "D.C.",
        "userLocation": "D.C.",
        "date": "2020-12-31",
        "description": "Who needs some new year music for their new year show?"
    }
]
```
---

`GET /shows/`

### Optional Parameters

| Params | Type |
| --- | --- |
| :userId | `Number` |

### Response:

| Field | Type |
| ----- | ---- |
| userId | `Number`|
| name | `String`|
| link | `String`|
| id | `Number`|
| date | `Date`|
| description | `String`|
| location | `String`|
| photo | `String`|


```
[
    {
        "userId": 2,
        "id": 1,
        "name": "The Void",
        "link": "https://www.facebook.com/avoidlife/",
        "photo": "https://i.imgur.com/AHA6wLd.gif",
        "date": "2020-10-31",
        "location": "D.C.",
        "description": "Looking for some scary music to make our ears bleed."
    },
    {
        "userId": 2,
        "id": 2,
        "name": "The Void",
        "link": "https://www.facebook.com/avoidlife/",
        "photo": "https://i.imgur.com/5rT9u.gif",
        "date": "2020-12-31",
        "location": "D.C.",
        "description": "Let's put 2020 behind us with some 2021 music. Who's got it?"
    }
]
```
---


