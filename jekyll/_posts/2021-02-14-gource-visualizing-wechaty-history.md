---
title: Gource Visualization for Wechaty
author: huan
categories: story
tags:
  - gource
  - visualization
  - news
image: /assets/2021/02-gource-visualizing-wechaty-history/wechaty-gource.webp
---

> Gource is an amazing and flexible tool that can be used to display activity from your repositories using a video visualization that people love.  
> &mdash; [How to use Gource to visualize your code repos](https://opensource.com/business/16/8/intro-to-gource#:~:text=Gource%20is%20an%20amazing%20and,(version%203%20or%20later).)

Wechaty was built from scratch by Huan in May 2016. Let's see what's the first 30 days for the Wechaty Git Repo looks like!

## The Visualization for Wechaty Website Contributors (2016 - 2022)

{% include iframe.html src="https://youtu.be/ZGuwSdWMdjQ" %}

The visualization is amazing, we can see the file tree growth by every git commit/push from Wechaty Contributors with a clear timeline!

## Wechaty Milestones

Wechaty was great improved in the past 5 years, we'd like to thank all our contributors because it definitely is a community effort!

I'd like to list the milestones that Wechaty archived from each year below for summary.

### 2016

- NPM Published the very first version: 0.0.1
- Commits 1,000+
- Line of Code 10,000+
- GitHub Stars 330+

### 2017

- First Pull Request & Meetup
- Testing CI/CD
- DevOps Dockerization
- Document JSDoc
- GitHub Stars 2,000+

### 2018

- Refactoring Modularized
- SLOC 27,630 to 7,817
- Ecosystem Wechaty Puppet
- New Puppet PadChat
- New Puppet PadPro
- Git Commits 4,000+
- Contributors 40+
- Blog Posts 70+
- GitHub Stars 4,000+

### 2019

- NPM Downloads 700K+
- Docker Pulls 30K+
- Contributors 60+
- GitHub Stars 6,000+

### 2020

- Git Commits 6,000+
- Polyglot 6+ Languages
- GitHub Stars 9,000+

### 2021 (Till Feberary)

- Puppet Services 4+
- Puppet Providers 10+
- Contributors 160+
- Blog Posts 254+
- NPM Downloads 1 Million
- Used by 700+
- Issue/PRs 2,100+
- GitHub Stars 10,000+

## The first 30 days of Wechaty

{% include iframe.html src="https://youtu.be/TYGZ3LCpXWQ" %}

The above visualization is to show what I did in the first 30 days (May, 2016) when I built Wechaty from scratch!

## How to Generate Gource Video

I use the following script to generate the gource visualization video:

> Script credit: [Matthias Krüger](https://bugs.archlinux.org/user/10679), <https://bugs.archlinux.org/task/26905>

```sh
$ git clone git@github.com:wechaty/wechaty.js.org.git
$ cd wechaty.js.org
$ gource \
    -1920x1080 \
    --camera-mode overview \
    --highlight-all-users \
    --file-idle-time 0 \
    -auto-skip-seconds 0.001 \
    --seconds-per-day 0.5 \
    --hide progress,mouse \
    --stop-at-end \
    --max-files 99999999999 \
    --max-file-lag 0.00001 \
    --output-ppm-stream - \
    | \
    ffmpeg \
        -f image2pipe \
        -vcodec ppm \
        -i \
        - \
        -y \
        -vcodec libx264 \
        -threads 8 \
        -b 3000k \
        -maxrate 8000k \
        -bufsize 10000k \
        video.mp4
```

Useful Argument Examples:

- `--start-date 2016-05-01`
- `--stop-date 2016-06-01`

## Links

- [Gource](https://gource.io/)