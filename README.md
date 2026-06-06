<p align="center">
  <img src="ballotlens-logo-v001.png" alt="BallotLens" width="520">
</p>

<p align="center"><b>See who is on your ballot, where they stand, and how they have actually voted.</b></p>

<p align="center"><a href="https://davidfliesen.github.io/BallotLens">https://davidfliesen.github.io/BallotLens</a></p>

-----

## What it is

BallotLens is a nonpartisan voter tool that shows who’s on your ballot, each candidate’s party and background, and how legislators have actually voted versus their own party. A built-in browser AI explains it all in plain English. Real data from official sources, no API key, no signup.

It runs as a single self-contained HTML page, so it can be hosted for free on GitHub Pages.

## What it does

1. **My Ballot** — the offices and candidates up for election this cycle, with party labels and incumbent badges.
1. **Party affiliation** — every candidate is clearly tagged by party, sourced from official filings and nonpartisan references.
1. **Party-Line Voting** — for candidates who hold or held a legislative seat, a meter shows how often they vote with their own party. The same measure is shown for every party, so a Republican who frequently votes with Democrats and a Democrat who frequently votes with Republicans appear exactly the same way. It is information, not a verdict.
1. **Background** — key facts about each candidate, with a source link on every item.

## How it stays trustworthy

BallotLens separates two things on purpose:

- **The data layer** holds every fact about a real person. These come only from official and nonpartisan public sources, and each item links back to its source.
- **The explanations** (what each office does, each candidate’s background) are written in plain English directly from those sources. They are part of the page data, not generated on the fly.

This matters because a wrong fact attached to a real person would be harmful in an election. Everything shown is traceable to a linked source.

## Explanations and voting records

Each race opens with a short plain-English description of what that office does. Each candidate has a short qualifications-and-background blurb plus a voting-record panel. For members of Congress the panel shows real, cited roll-call attendance (from GovTrack) and a deep link to their party-line loyalty table on VoteView. A candidate’s record stays visible even when they are running for a different office (for example, Nancy Mace’s U.S. House record while she runs for governor). No API key, no signup, nothing sent to a server.

## Data sources

|Information                                   |Source                                                       |
|----------------------------------------------|-------------------------------------------------------------|
|What is on the ballot                         |South Carolina Election Commission (scvotes.gov), Ballotpedia|
|Party affiliation and biography               |Ballotpedia, Wikidata, candidate filings                     |
|Congress voting records and party-unity scores|[VoteView](https://voteview.com)                             |
|Roll-call attendance and member profiles      |[GovTrack](https://www.govtrack.us)                          |
|State legislature voting records              |[OpenStates](https://openstates.org)                         |
|Roll-call attendance and member profiles      |[GovTrack](https://www.govtrack.us)                          |

## Running it

It is a single file. Open `ballotlens-v006.html` in a browser, or drop it into a GitHub Pages repo and visit the published URL.

## Roadmap

- Wire VoteView and OpenStates so the voting meters fill automatically from real data instead of placeholders.
- Expand the ballot beyond the starter set, including local and county races.
- Add a voter’s own district lookup.
- Optional nickname mode (RINO / DINO labels) as a user toggle, off by default.

## A note on neutrality

BallotLens is built to inform, not to persuade. It never tells anyone how to vote, applies the same measures to every party, and points to original sources so you can check everything yourself.

## Sharing

The page includes Open Graph and Twitter Card tags so a link preview shows the brand card when the URL is shared. Social images must load over an absolute URL, so keep `ballotlens-social-v001.png`, `ballotlens-icon-square-v001.png`, and `ballotlens-apple-touch-icon-v001.png` in the repo root. After deploying, you can force the preview to refresh with Facebook’s Sharing Debugger or by changing the image filename.

## Files

- `ballotlens-v006.html` — the app
- `ballotlens-logo-v001.png` / `.svg` — horizontal logo lockup
- `ballotlens-icon-v001.svg` — icon only
- `ballotlens-icon-square-v001.png` — square icon for favicons and social cards
- `ballotlens-social-v001.png` — 1200x630 social/link-preview card (Open Graph)
- `ballotlens-apple-touch-icon-v001.png` — iOS home-screen icon