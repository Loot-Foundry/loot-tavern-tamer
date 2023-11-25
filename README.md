# Loot Tavern Module Template

This is a FoundryVTT module template made explicitly for Loot Tavern.

## Module Manifest

You need to change the following variables in the `module.json` to match your module:

- `id`
- `title`
- `description`
- `authors`
- `packs`
- `flags.path`
  - It is recommended you use a [Random Hash Generator](https://www.random.org/strings/?num=10&len=20&digits=on&upperalpha=on&loweralpha=on&unique=on&format=html&rnd=new) to spice up the `flags.path` variable, so users can't just guess the URL links.
  - It's also recommended you store that hash in the `flags.hash` variable for easy access.

### Optional / Unusual Changes

- Change `compatibility` if your module works for different versions of FoundryVTT (for example if you built your module on V11 and not on V10, then you should not have "10" as the `compatibility.minimum`).
- Change `relationships` if you are converting for a system other than `dnd5e` or are using a newer version, in which case change the `relationships.systems[<system>].compatibility.minimum`.

### Do Not Change

- `version`
- `manifest`
- `download`

## Optional Media

`type: setup` is an official Foundry image type used inside V11 module lists. It's recommended size is 600x400.

`type: screenshot | cover | video` are [community additions](https://foundryvtt.wiki/en/development/manifest-plus) and are not officially sanctioned types. However, these are still agreed upon and allow for the module to have additional media on websites that allow you to browse modules such as The Forge or FoundryHUB.
- `cover` is `1280px` with aspect ratio of `2:1`. Avoid putting large text on the cover image as it should showcase the package rather than the name of the package.
- `icon` is `512px` with an aspect ratio of `1:1`.
- `screenshot` can be anything that fits into a HTML `<img>` element, and doesn't necessarily have to be a screenshot as much as a preview of the content. Please try to keep the size as small as possible, preferably below 1 MB and no more than 10MB.
- `video` can be anything that fits into a HTML `<video>` element. Some providers may also support embedding video from YouTube. The providers should take care of parsing whether the link is a video file or a YouTube link, so don't worry about it.

```json
"media": [
  {
    "type": "setup",
    "url": "can be inside the module or an URL"
  },
  {
    "type": "screenshot",
    "url": "has to be an URL, not inside the module",
    "caption": "<Insert description of screenshot>"
  },
  {
    "type": "cover",
    "url": "has to be an URL, not inside the module",
    "caption": "<Insert module / system name>"
  },
  {
    "type": "video",
    "url": "has to be an URL, not inside the module",
    "loop": true,
    "thumbnail": "has to be an URL, not inside the module",
    "caption": "<Insert description of a cool feature from the video>"
  }
]
```

## Author Attribution

`name` is a required variable when adding an author to the module. Everything else is optional, which includes: `url`, `email`, `discord`, `ko-fi`, `patreon`, `reddit`, and `twitter`. Each of these additional fields follow the naming convention of the platform. For example with Twitter handles the `@TwitterHandle` format is used.

```json
"authors": [
  {
    "name": "Name of the author",
    "url": "https://website.com/of/the/author",
    "email": "email@example.com",
    "discord": "discordID#0001",
    "ko-fi": "kofiName",
    "patreon": "patreonName",
    "reddit": "u/RedditUsername",
    "twitter": "@TwitterHandle",
  }
]
```