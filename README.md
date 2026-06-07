<p align="center">
  <img src="ballotlens-logo-v001.png" alt="BallotLens" width="520">
</p>

<p align="center"><b>See who is on your ballot, where they stand, and how they have actually voted.</b></p>

<p align="center"><a href="https://davidfliesen.github.io/BallotLens">https://davidfliesen.github.io/BallotLens</a></p>

---

## What it is

BallotLens is a nonpartisan voter-education tool that shows who's on your ballot, each candidate's party and background, and how legislators have actually voted versus their own party. Plain-English explanations throughout. Real data from official and nonpartisan public sources, no API key, no signup, nothing sent to a server.

It runs as a single self-contained HTML page plus a few small data files, so it can be hosted for free on GitHub Pages.

## What it does

Four tabs:

1. **My Ballot** — every statewide office and the U.S. Senate race for the cycle, grouped by primary (Republican / Democratic / other parties), with party labels and incumbent badges. Each race opens with a plain-English note on what the office actually does, and each candidate has a short background blurb with source links.
2. **Party-Line Voting** — for candidates who hold or held a legislative seat, a meter shows how often they vote with their own party. The same measure is applied to every party, so a Republican who often crosses over and a Democrat who often crosses over appear exactly the same way. It is information, not a verdict.
3. **Sample Ballot** — pick your district and the page shows the local races that apply to you alongside the statewide and federal races that are on every ballot. Local races are data-driven (see `local-races.json`).
4. **About the Data** — where every fact comes from, plus the full disclaimer and how to report a correction.

## How it stays trustworthy

BallotLens separates two things on purpose:

- **The data layer** holds every fact about a real person. These come only from official and nonpartisan public sources, and each item links back to its source.
- **The explanations** (what each office does, each candidate's background) are written in plain English directly from those sources. They are part of the page data, not generated on the fly.

A wrong fact attached to a real person would be harmful in an election, so everything shown is traceable to a linked source. The app never invents a number: party-line figures are only shown when a real value is supplied, and headshots are only shown when a verified source exists (otherwise an initials tile).

## Voting records and party-line loyalty

For members of Congress, the record panel shows real, cited roll-call attendance (from GovTrack), a party-line loyalty bar, and a deep link to that member's loyalty table on VoteView. Loyalty figures are read directly from VoteView's "Party Loyalty" row and stored in `loyalty.json`. Current figures (119th Congress): Lindsey Graham 99%, Nancy Mace 95%, Ralph Norman 88%. A candidate's record stays visible even when running for a different office (for example, Nancy Mace's U.S. House record while she runs for governor). State legislators link to their state record (Ballotpedia) rather than a loyalty percentage, because there is no state equivalent of VoteView.

## Candidate photos

Photos load automatically from Wikipedia for candidates with a verified page. For everyone else, drop a verified image URL into `photos.json` (keyed by candidate name) and it appears instantly, overriding the initials fallback. Blind name lookups are avoided on purpose, they return the wrong person for common names.

## Data files (edit these without touching code)

- `loyalty.json` — party-line loyalty by member name. Set `careerPct` and `approx: false` from a VoteView read.
- `photos.json` — headshot URL overrides by candidate name. Blank = Wikipedia, then initials.
- `local-races.json` — local races by district, shown in the Sample Ballot picker. Starter set covers Greenville County; add districts in the same shape.
- `voteview-loyalty-scraper.js` — a console one-liner to pull a member's loyalty numbers from VoteView (instructions inside).

## Data sources

| Information | Source |
|---|---|
| What is on the ballot | South Carolina Election Commission (scvotes.gov), Ballotpedia |
| Party affiliation and biography | Ballotpedia, candidate filings |
| Congress voting records and party-line loyalty | [VoteView](https://voteview.com) |
| Roll-call attendance and member profiles | [GovTrack](https://www.govtrack.us) |
| State legislature voting records | [Ballotpedia](https://ballotpedia.org) |
| Candidate photos | [Wikipedia](https://en.wikipedia.org), or verified URLs in `photos.json` |

## Disclaimer

BallotLens is an independent, nonpartisan, educational project. It is not affiliated with, authorized by, or endorsed by any candidate, campaign, political party, or election authority. Information is compiled from third-party public sources and may contain errors; it is provided "as is" without warranties of any kind and is not legal or voting advice. Always confirm details with official sources such as scvotes.gov before relying on them or voting. Corrections are welcome via the address on the About the Data tab.

## Running it

It is essentially a single file. Open `index.html` (or `ballotlens-v015.html`) in a browser, or drop the files into a GitHub Pages repo and visit the published URL. Keep `index.html`, the three `.json` files, and the image assets in the repo root.

## Roadmap

- Add the seven U.S. House districts (district-specific).
- Add Dorchester County (Summerville) local races so that ballot is complete in the picker.
- Pre-fill `photos.json` for candidates with official portraits (e.g., state legislators on scstatehouse.gov).
- Optional: convert loyalty figures from current-term to a whole-career average.

## A note on neutrality

BallotLens is built to inform, not to persuade. It never tells anyone how to vote, applies the same measures to every party, and points to original sources so you can check everything yourself.

## Sharing

The page includes Open Graph and Twitter Card tags so a link preview shows the brand card when the URL is shared. Social images must load over an absolute URL, so keep `ballotlens-social-v001.png`, `ballotlens-icon-square-v001.png`, and `ballotlens-apple-touch-icon-v001.png` in the repo root. After deploying, force the preview to refresh with Facebook's Sharing Debugger or by changing the image filename.

## Files

- `index.html` — the app (current build: v015)
- `loyalty.json` / `photos.json` / `local-races.json` — editable data files
- `voteview-loyalty-scraper.js` — VoteView loyalty console helper
- `ballotlens-logo-v001.png` / `.svg` — horizontal logo lockup
- `ballotlens-icon-v001.svg` — icon only
- `ballotlens-icon-square-v001.png` — square icon for favicons and social cards
- `ballotlens-social-v001.png` — 1200x630 social/link-preview card (Open Graph)
- `ballotlens-apple-touch-icon-v001.png` — iOS home-screen icon
