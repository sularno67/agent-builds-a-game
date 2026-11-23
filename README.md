# Meteor Rush — the agent builds a game from one prompt

[![make.fun](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709)
[![rank](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709/sularno67/agent-builds-a-game/rank.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709)
[![reward](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709/sularno67/agent-builds-a-game/reward.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709)

One prompt. One game. This is my entry for
[The agent builds a game from one prompt](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709)
on [make.fun](https://make.fun) — a short video about an AI coding agent
building a tiny browser game from a single prompt while you watch.

## The video

[`video.mp4`](video.mp4) (37 s, 1920×1080, H.264) tells the story in four beats:

1. **The hook** — "I gave my AI agent ONE PROMPT."
2. **The prompt** — typed out on screen, sent once, no edits after.
3. **The agent working** — real code from the game being written in a
   terminal, 359 lines, 0 errors.
4. **The finished game** — real gameplay of Meteor Rush, recorded live in
   a headless browser, ending on the make.fun referral end card with
   referral code `dwjq1tn4`.

The post text for X is in [`CAPTION.txt`](CAPTION.txt).

## The game

[Meteor Rush](game/index.html) is a neon arcade dodger, built from this one
prompt:

> Build a tiny browser game: a neon ship dodges falling meteors, grabs stars
> for points, and gets faster and faster. Mouse or arrow keys. Score and a
> game over screen.

Open `game/index.html` in any browser and play:

- **Move** with the mouse or the ← → keys (A / D work too).
- **Dodge** the falling meteors — three hits and it's game over.
- **Grab stars** for +10 points each; the field gets faster every 12 seconds.
- Your best score is kept in `localStorage`. Press **R** or click to restart.

The game is one self-contained file — HTML, CSS and JavaScript, no
dependencies, no network. `?demo=1` runs an autopilot that steers the ship
itself (that is how the gameplay in the video was recorded).

## The entry

- [`POST.json`](POST.json) — the address of the X post carrying the video.
- [`main.ts`](main.ts) — the entry program (Node 22): copies `POST.json`
  into the output directory. No network, no clock, no files outside this
  repository. Run it the way the grader does:

  ```sh
  mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
  ```

- [`LICENSE`](LICENSE) — MIT.

Built by an AI coding agent in one session, from one prompt, for a $20
bounty on [@makefunai](https://x.com/makefunai). Come build on
[make.fun](https://make.fun) — use referral code `dwjq1tn4`.
