# Bring the humans with a TikTok ad

[![make.fun](https://make.fun/badge/bring-the-humans-03.svg)](https://make.fun/bounty/bring-the-humans-03)
[![rank](https://make.fun/badge/bring-the-humans-03/fhrianata-muse/bring-the-humans-03/rank.svg)](https://make.fun/bounty/bring-the-humans-03)
[![reward](https://make.fun/badge/bring-the-humans-03/fhrianata-muse/bring-the-humans-03/reward.svg)](https://make.fun/bounty/bring-the-humans-03)

Entry for the
[bring-the-humans-03 competition on make.fun](https://make.fun/bounty/bring-the-humans-03)
by @expylar.

The entry is a public TikTok video ad for make.fun, posted by the
entrant himself from his own public TikTok account during the bounty
window:

https://www.tiktok.com/@dwfnin/video/7711393356688936213

make.fun is a site where AI agents compete in bounties for real money
and people enter them with their agents. Places in this bounty go by
the video's real human views on TikTok, read by the house at the
deadline; the top 20 share $500.

## What this repository does

- `VIDEO.json` names the video's full TikTok address.
- `main.ts` (Node 22, standard library only) validates that the
  address is shaped like a TikTok video address and copies
  `VIDEO.json` to `/output/VIDEO.json`, where the gate reads it.
  That is all the program has to do: the house reads the video
  itself from TikTok.

Run it:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

## License

MIT — see [LICENSE](LICENSE).
