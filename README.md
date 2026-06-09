<p align="center">
  <img src="ballotlens-logo-v001.png" alt="BallotLens" width="520">
</p>

<p align="center"><b>See who is on your ballot, where they stand, and how they have actually voted.</b></p>

<p align="center"><a href="https://davidfliesen.github.io/BallotLens">https://davidfliesen.github.io/BallotLens</a></p>

-----

## What it is

BallotLens is a nonpartisan voter-education tool for South Carolina’s 2026 election cycle. It shows who is on your ballot, each candidate’s party and background, and how legislators have actually voted versus their own party. Plain-English explanations throughout. Real data from official and nonpartisan public sources — no API key, no signup, nothing sent to a server.

It runs as a single self-contained HTML page plus two small companion data files, hosted free on GitHub Pages.

## Current build: v026

**84 candidates** across 15 races — all eight statewide constitutional offices, U.S. Senate, and all seven U.S. House congressional districts. Republican primary and Democratic primary only. Minor-party and independent candidates are nominated by convention or petition for the November general election and do not appear on the June 9 primary ballot.

### Tab navigation

The app uses a per-office tab bar. Top row (left to right):

|Tab        |Office                      |Candidates               |
|-----------|----------------------------|-------------------------|
|Governor   |South Carolina Governor     |10 (7R, 3D)              |
|Senate     |U.S. Senate                 |9 (6R, 3D)               |
|House      |U.S. House (all 7 districts)|44 — select your district|
|Atty. Gen. |Attorney General            |4                        |
|Sec. State |Secretary of State          |3                        |
|Treasurer  |State Treasurer             |3                        |
|Comptroller|Comptroller General         |3                        |
|Supt. Ed.  |Superintendent of Education |3                        |
|Agr.       |Commissioner of Agriculture |5                        |

Three utility tabs follow a visual separator: **Sample Ballot**, **Advisory**, and **About**.

### U.S. House district picker

The House tab shows a dropdown of all seven SC congressional districts with geographic descriptions. Selecting a district loads that district’s candidates. A **Pick on map** button opens an interactive Leaflet map of the seven district boundaries — click your area to select. Your district choice is saved in `localStorage` so you do not have to re-select on return visits.

### Candidate cards

Each race shows candidates grouped by primary (Republican primary first, then Democratic). Incumbents appear first within each group, then alphabetical. All candidate information is displayed by default — biography, campaign site link, and voting record meter where applicable. Cards can be individually collapsed by clicking the chevron.

### Advisory questions tab

Covers the two non-binding Republican advisory questions appearing on the June 9 GOP primary ballot: party registration and partisan school board elections. Democratic primary voters do not see these questions.

## Candidate photos

Photos load from two sources at page load: a verified URL in `photos.json` (keyed by exact candidate name) takes priority, then a Wikipedia pageimage for candidates with a verified Wikipedia page, then an initials tile if neither is available.

## Voting records and party-line loyalty

For candidates holding or having held a federal legislative seat, the card shows a party-line loyalty bar. Current verified figures (119th Congress, from VoteView):

|Member         |Party Loyalty|Period                    |
|---------------|-------------|--------------------------|
|Lindsey Graham |99%          |119th Congress (2025-2027)|
|Nancy Mace     |95%          |119th Congress (2025-2027)|
|Ralph W. Norman|88%          |119th Congress (2025-2027)|

State legislators link to their Ballotpedia state record instead of VoteView, because there is no state equivalent of the VoteView database.

Figures live in `loyalty.json`. To update a member, edit `careerPct` and set `approx: false`.

## Data files — edit without touching app code

- **`loyalty.json`** — party-line loyalty figures by member name. Add or update here; the app merges at load.
- **`photos.json`** — headshot URL overrides by exact candidate name. Blank = Wikipedia, then initials.

Both files must be in the same directory as `index.html`. The app fetches them at load with `fetch()`, so they must be served from a web server (GitHub Pages works; opening `index.html` directly from the file system will not load them).

## Data sources

|Information                                        |Source                                                      |
|---------------------------------------------------|------------------------------------------------------------|
|Who is on the ballot                               |SC Election Commission (scvotes.gov), Ballotpedia, Politics1|
|Candidate biographies and campaign sites           |Politics1, Ballotpedia, candidate filings                   |
|Congressional voting records and party-line loyalty|VoteView (voteview.com)                                     |
|Roll-call attendance and member profiles           |GovTrack (govtrack.us)                                      |
|State legislature voting records                   |Ballotpedia (ballotpedia.org)                               |
|Candidate photos                                   |Verified URLs in photos.json, then Wikipedia pageimage API  |
|Congressional district boundaries (map)            |unitedstates/districts on GitHub (GeoJSON, 2022)            |

## Notable data flags

- **Josh Kimbrell** — suspended his campaign; name remains on the Republican Governor primary ballot.
- **Jacqueline Hicks DuBose** — decertified by the state GOP in May 2026 for an unpaid filing fee; name remains on the ballot but she cannot become the nominee.
- **Bruce K. Cole** — withdrew; name remains on the Democratic Comptroller General primary ballot.
- **Mark Sanford** — withdrew from the Senate race; name remains on the Republican primary ballot.

## Technical notes

- Single-file architecture: all HTML, CSS, and JavaScript in `index.html` (ES5, no build step, no frameworks).
- Two optional companion JSON files: `loyalty.json` and `photos.json`.
- Interactive district map uses Leaflet 1.9.4 (loaded from cdnjs) and GeoJSON boundaries fetched from GitHub on demand (lazy-loaded only when the user opens the map).
- No `type="module"` on the script tag — functions are in global scope to support inline event handlers in dynamically-generated HTML.
- GitHub Pages compatible: zero backend, zero API keys, no cookies.
- Edit safely in GitHub’s web editor: the app uses ES5 JavaScript only (no arrow functions, no template literals, no CSS custom properties). Hardcoded hex colors throughout to avoid em-dash corruption.

## A note on neutrality

BallotLens never tells anyone how to vote. It applies the same party-line measure to every party, sources every claim, and links out so you can verify it yourself. Candidates with no legislative record simply show no voting-record panel — that is the absence of data, not a judgment.

## Disclaimer

BallotLens is an independent, nonpartisan, educational project. It is not affiliated with, authorized by, or endorsed by any candidate, campaign, political party, or election authority. Information is compiled from third-party public sources and may contain errors; provided “as is” without warranties of any kind and is not legal or voting advice. Always confirm details with official sources such as scvotes.gov before voting.

## Running it

Push `index.html`, `loyalty.json`, and `photos.json` to the root of a GitHub Pages repository. All three files must be in the same directory. Or serve locally with any static server (`python3 -m http.server 8000` works fine).

## Files in this repository

|File                                  |Purpose                                                            |
|--------------------------------------|-------------------------------------------------------------------|
|`index.html`                          |The app — current build v026                                       |
|`loyalty.json`                        |Party-line loyalty figures (editable)                              |
|`photos.json`                         |Candidate headshot URL overrides (editable)                        |
|`voteview-loyalty-scraper.js`         |Browser console helper for extracting loyalty figures from VoteView|
|`ballotlens-logo-v001.png` / `.svg`   |Horizontal logo                                                    |
|`ballotlens-icon-v001.svg`            |Icon only                                                          |
|`ballotlens-icon-square-v001.png`     |Square icon for favicons                                           |
|`ballotlens-social-v001.png`          |1200x630 Open Graph social card                                    |
|`ballotlens-apple-touch-icon-v001.png`|iOS home-screen icon                                               |