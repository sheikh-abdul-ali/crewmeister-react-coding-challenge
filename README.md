<p align="center">
  <img src="https://crewmeister.com/images/logo_crewmeister_without_text.svg" />
</p>

## Context

I was sent a coding challenge by Crewmeister. The challenge was to create an Absence Manager with the following requirements.

## Product Requirements

- [x] I want to see a list of absences including the names of the employees.
- [x] I want to see the first 10 absences, with the ability to paginate.
- [x] I want to see a total number of absences.
- [x] For each absence I want to see:
  - [x] Member name
  - [x] Type of absence
  - [x] Period
  - [x] Member note (when available)
  - [x] Status (can be 'Requested', 'Confirmed' or 'Rejected')
  - [x] Admitter note (when available)
- [x] I want to filter absences by type.
- [x] I want to filter absences by date.
- [x] I want to see a loading state until the list is available.
- [x] I want to see an error state if the list is unavailable.
- [x] I want to see an empty state if there are no results.
- [x] (Bonus) I can generate an iCal file and import it into outlook.

## Tech Stack

- React (frontend)
- Express.js (backend)
  
## Installation

```bash
# for frontend
$ cd crewmeister-client && yarn 

# for backend
$ cd crewmeister-api && npm install
```

## Running the app

```bash
# head to the client folder 
$ yarn dev

# head to the api folder
$ npm run dev
```

## Setting up env variables

!!! This practice of adding env variables to Readme.md is Not Recommended.

```bash
 VITE_BACKEND_API="http://localhost:3500/api"
```
