const gravatar = require("gravatar");
const Avatars = require("@dicebear/avatars").default;
const avataaarsSprites = require("@dicebear/avatars-avataaars-sprites").default;
const botttsSprites = require("@dicebear/avatars-bottts-sprites").default;
const femaleSprites = require("@dicebear/avatars-female-sprites").default;
const gridySprites = require("@dicebear/avatars-gridy-sprites").default;
const humanSprites = require("@dicebear/avatars-human-sprites").default;
const identiconSprites = require("@dicebear/avatars-identicon-sprites").default;
const initialsSprites = require("@dicebear/avatars-initials-sprites").default;
const jdenticonSprites = require("@dicebear/avatars-jdenticon-sprites").default;
const maleSprites = require("@dicebear/avatars-male-sprites").default;


const gravatarAvatar = (gravatarOptions) => (value) => {
  return gravatar.url(value, gravatarOptions);
};

const githubAvatar = ({ size }={}) => (value) => {
  return size
    ? `https://github.com/${value}.png?size=${size}`
    : `https://github.com/${value}.png`;
};

const twitterAvatar = (value) => {
  return `https://twitter-avatar.now.sh/${value}`;
};

const diceBearSprites = {
  avataaars: avataaarsSprites,
  bottts: botttsSprites,
  female: femaleSprites,
  gridy: gridySprites,
  human: humanSprites,
  identicon: identiconSprites,
  initials: initialsSprites,
  jdenticon: jdenticonSprites,
  male: maleSprites,
};

const diceBearAvatars = (options, key) => {
  console.log(diceBearSprites[key], {})
  let avatars = new Avatars(diceBearSprites[key], options);
  return (value) => avatars.create(value);
};


module.exports = (eleventyConfig, options={}) => {
  defaultAvatar = options.default ? options.default : "avataaars";
  eleventyConfig.addFilter("gravatar", gravatarAvatar(options.gravatar));
  eleventyConfig.addFilter("githubAvatar", githubAvatar(options.github));
  eleventyConfig.addFilter("twitterAvatar", twitterAvatar);
  eleventyConfig.addFilter(
    "avataaarsAvatar",
    diceBearAvatars(options.avataaars, "avataaars")
  );
  eleventyConfig.addFilter("botttsAvatar", diceBearAvatars(options.bottts, "bottts"));
  eleventyConfig.addFilter("femaleAvatar", diceBearAvatars(options.female, "female"));
  eleventyConfig.addFilter("gridyAvatar", diceBearAvatars(options.gridy, "gridy"));
  eleventyConfig.addFilter("humanAvatar", diceBearAvatars(options.human, "human"));
  eleventyConfig.addFilter(
    "identiconAvatar",
    diceBearAvatars(options.identicon, "identicon")
  );
  eleventyConfig.addFilter(
    "jdenticonAvatar",
    diceBearAvatars(options.jdenticon, "jdenticon")
  );
  eleventyConfig.addFilter("maleAvatar", diceBearAvatars(options.male, "male"));
  eleventyConfig.addFilter("avatar", diceBearAvatars(options[defaultAvatar], defaultAvatar));
};
