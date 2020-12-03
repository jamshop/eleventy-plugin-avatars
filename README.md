# Eleventy Plugin - Avatars

Converts an email or any unique identifier into an SVG avatars using: https://github.com/DiceBear/avatars

Install:

```
npm install @jamshop/eleventy-plugin-avatar
```

## Usage

In config:

```js
const pluginAvatars = require("@jamshop/eleventy-plugin-avatars");

module.exports = (eleventyConfig) => {
  eleventyConfig.addPlugin(pluginAvatars, options);
  // and the rest of your config
};
```
Options can be set for each of the sprite types using the following keys:

{
  avataaars: { ...options },
  bottts: { ...options },
  female: { ...options },
  gridy: { ...options },
  human: { ...options },
  identicon: { ...options },
  initials: { ...options },
  jdenticon: { ...options },
  male: { ...options },
}

See https://avatars.dicebear.com/styles/avataaars#options for examples of options available to the `avataaars` sprite package.

In templates:

```html
<div class="grid">
  {{ "MikeRiethmuller" | avataaarsAvatar | safe }}
  {{ "MikeRiethmuller" | botttsAvatar | safe }}
  {{ "MikeRiethmuller" | femaleAvatar | safe }}
  {{ "MikeRiethmuller" | gridyAvatar | safe }}
  {{ "MikeRiethmuller" | humanAvatar | safe }}
  {{ "MikeRiethmuller" | identiconAvatar | safe }}
  {{ "MikeRiethmuller" | jdenticonAvatar | safe }}
  {{ "MikeRiethmuller" | maleAvatar | safe }}
  {{ "MikeRiethmuller" | avatar | safe }}
</div>
```

A default sprite package can be selected with the `default` option, e.g. `{default: "avataaars" }`. This will allow you to use the `avatar` filter:

```
  {{ "MikeRiethmuller" | avatar | safe }}
  ```

(`avataaars` is the default for the `avatar` filter)

Also included are `gravatar`, `githubAvatar` and `twitterAvatar` options. These work a little differently in that they provide an image src. The value should match username for the platform.

Usage:

```html
<img src="{{ "mike@madebymike.com.au" | gravatar }}"/>
<img src="{{ "MadeByMike" | githubAvatar }}">
<img src="{{ "MikeRiethmuller" | twitterAvatar }}">
```

Github allows a size option however the maximum size is `460`:

```
{
  github: { size: 200 }
}
```

Gravatar options can be seen here: https://github.com/emerleite/node-gravatar#readme


```
{
  gravatar: { ...options }
}
```

Twiter does not provide an official API or any customisation options.
