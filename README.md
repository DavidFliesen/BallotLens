<p align="center">
  <img src="ballotlens-logo-v001.png" alt="BallotLens" width="520">
</p>

<p align="center"><b>See who is on your ballot, where they stand, and how they have actually voted.</b></p>

<p align="center"><a href="https://davidfliesen.github.io/BallotLens">https://davidfliesen.github.io/BallotLens</a></p>

-----

## What it is

BallotLens is a nonpartisan voter-education tool for South Carolina’s 2026 election cycle. It shows who is on your ballot, each candidate’s party and background, and how legislators have actually voted versus their own party. Plain-English explanations throughout. Real data from official and nonpartisan public sources, no API key, no signup, nothing sent to a server.

It runs as a single self-contained HTML page plus two small data files, hosted free on GitHub Pages.

## Current build: v020

**40 candidates** across eight statewide offices and U.S. Senate — Republican primary and Democratic primary only. Minor-party and independent candidates are nominated by convention or petition for the November general election and do not appear on the June 9 primary ballot.

Three tabs:

1. **My Ballot** — every statewide office and the U.S. Senate race, grouped by party (Republican primary / Democratic primary). Incumbents appear first, then everyone else alphabetically. Each race opens with a plain-English note on what the office does, and every candidate has a sourced biography and a link to their official campaign site.
1. **Sample Ballot** — a direct link to South Carolina’s official voter portal (scvotes.sc.gov) which shows your complete, address-specific ballot, plus a compact statewide preview of the races on every ballot.
1. **About the Data** — where every fact comes from, a plain-English explanation of party-line voting scores, the full disclaimer, and links to all sources.

## Candidate photos

Photos are loaded from two sources at page load: a verified URL in `photos.json` (keyed by candidate name) takes priority, then a Wikipedia pageimage for candidates with a verified page, then an initials tile if neither is available. Photos for 22 candidates are currently populated in `photos.json`.

## Voting records and party-line loyalty

For candidates who hold or have held a legislative seat, the card shows a party-line loyalty bar and a roll-call attendance footnote. Current verified figures (119th Congress, read directly from VoteView):

|Member         |Party Loyalty|Period                    |
|---------------|-------------|--------------------------|
|Lindsey Graham |99%          |119th Congress (2025-2027)|
|Nancy Mace     |95%          |119th Congress (2025-2027)|
|Ralph W. Norman|88%          |119th Congress (2025-2027)|

State legislators (Kimbrell, Goldfinch, Johnson) link to their Ballotpedia state record instead, because there is no state equivalent of VoteView.

Figures live in `loyalty.json`. To update or add a member, set `careerPct` to the number from VoteView’s “Party Loyalty” row and set `approx: false`.

## Data files — edit without touching code

- **`loyalty.json`** — party-line loyalty by member name. Add members or update figures here.
- **`photos.json`** — headshot URL overrides by candidate name. Blank = Wikipedia, then initials. Only names that exactly match a candidate in the app take effect.

`local-races.json` and the district picker were removed in v020; local races are address-specific and the official scvotes portal covers them completely.

## Data sources

|Information                                   |Source                                                                  |
|----------------------------------------------|------------------------------------------------------------------------|
|Who is on the ballot                          |South Carolina Election Commission (scvotes.gov), Ballotpedia, Politics1|
|Candidate biographies and campaign sites      |Politics1, Ballotpedia, candidate filings                               |
|Congress voting records and party-line loyalty|VoteView (voteview.com)                                                 |
|Roll-call attendance and member profiles      |GovTrack (govtrack.us)                                                  |
|State legislature voting records              |Ballotpedia (ballotpedia.org)                                           |
|Candidate photos                              |Verified URLs in photos.json, then Wikipedia                            |

## A note on neutrality

BallotLens never tells anyone how to vote. It applies the same party-line measure to every party, sources every claim, and links out so you can check it yourself. Candidates with no legislative record (executives, first-time candidates) simply show no voting-record panel; this is not a judgment, it is just the absence of data.

## Disclaimer

BallotLens is an independent, nonpartisan, educational project. It is not affiliated with, authorized by, or endorsed by any candidate, campaign, political party, or election authority. Information is compiled from third-party public sources and may contain errors; provided “as is” without warranties of any kind and is not legal or voting advice. Always confirm details with official sources such as scvotes.gov before voting. Full disclaimer is on the About the Data tab.

## Running it

Open `index.html` in a browser, or push `index.html`, `loyalty.json`, and `photos.json` to the root of a GitHub Pages repo. All three files must be in the same directory.

## Notable data flags

- **Josh Kimbrell** — suspended his campaign; name remains on the Republican primary ballot.
- **Jacqueline Hicks DuBose** — decertified by the state GOP in May 2026 for an unpaid filing fee; name remains on the ballot but she cannot become the nominee.
- **Bruce K. Cole** — withdrew; name remains on the Democratic Comptroller General primary ballot.
- **Paul Dans** — withdrew April 10, 2026; name is not on the ballot.

## Files

- `index.html` — the app (current build: v020)
- `loyalty.json` — party-line loyalty figures (editable)
- `photos.json` — candidate headshot URL overrides (editable)
- `voteview-loyalty-scraper.js` — browser console helper to extract loyalty figures from VoteView
- `ballotlens-logo-v001.png` / `.svg` — horizontal logo
- `ballotlens-icon-v001.svg` — icon only
- `ballotlens-icon-square-v001.png` — square icon for favicons
- `ballotlens-social-v001.png` — 1200×630 Open Graph social card
- `ballotlens-apple-touch-icon-v001.png` — iOS home-screen icon

## Roadmap

- Add seven U.S. House district races (the remaining gap for federal coverage).
- Fill remaining candidate headshots in `photos.json`.
- Update loyalty figures to whole-career averages once per-Congress figures are available from VoteView.