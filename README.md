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
- **The AI layer** is used only to rephrase that real, sourced information into plainer language. The model never supplies who is running, their party, or how they voted. It is told to use only the facts it is handed and to say so when it does not know.

This matters because small AI models can make things up, and a made-up voting record attached to a real person would be harmful in an election. Keeping the model away from the facts is a deliberate design choice.

## The in-browser AI

The plain-English explainer uses [WebLLM](https://github.com/mlc-ai/web-llm) to run Llama 3.2 entirely inside your browser. Nothing is sent to a server and no API key is required. It needs a WebGPU-capable browser (recent Chrome or Edge work best; the model downloads once on first use). If WebGPU is unavailable, the rest of the app still works; only the explainer is disabled.

## Data sources

|Information                                   |Source                                                       |
|----------------------------------------------|-------------------------------------------------------------|
|What is on the ballot                         |South Carolina Election Commission (scvotes.gov), Ballotpedia|
|Party affiliation and biography               |Ballotpedia, Wikidata, candidate filings                     |
|Congress voting records and party-unity scores|[VoteView](https://voteview.com)                             |
|State legislature voting records              |[OpenStates](https://openstates.org)                         |
|Plain-English explanations                    |Llama 3.2 via WebLLM, in your browser                        |

## Running it

It is a single file. Open `ballotlens-v004.html` in a browser, or drop it into a GitHub Pages repo and visit the published URL. To load the AI explainer, use desktop Chrome or Edge and tap **Load the in-browser AI**.

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

- `ballotlens-v004.html` — the app
- `ballotlens-logo-v001.png` / `.svg` — horizontal logo lockup
- `ballotlens-icon-v001.svg` — icon only
- `ballotlens-icon-square-v001.png` — square icon for favicons and social cards
- `ballotlens-social-v001.png` — 1200x630 social/link-preview card (Open Graph)
- `ballotlens-apple-touch-icon-v001.png` — iOS home-screen icon