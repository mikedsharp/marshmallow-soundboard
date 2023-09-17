# Changelog

## 0.1.0 (2023-09-17)


### Features

* add auto updating of sound list and OS drag and dropping of sounds to media folder ([fe9887b](https://github.com/mikedsharp/soundboard/commit/fe9887bb46414bc43127ccd9c4c25e500ac80b04))
* add build commands for linux ([71729e8](https://github.com/mikedsharp/soundboard/commit/71729e859c78c99ca1a37bee05680b2a426e12ac))
* Add build executable command for mac, make app compatible with pkg. May consider migrating fully to pkg now i've worked out the kinks. ([ac97486](https://github.com/mikedsharp/soundboard/commit/ac97486774cad0cc8d4217ab20594e1a40a38ad2))
* add fallback behaviour is user hasn't built the soundboard-client web app. Standardize port for soundboard-client to use. ([c7035c8](https://github.com/mikedsharp/soundboard/commit/c7035c8c3c8442c9e02b56cae3e832f712312587))
* add logic to remove sound from board when removed from media folder ([88391e9](https://github.com/mikedsharp/soundboard/commit/88391e971653f1e5f049749b0c0168df13fc3f5e))
* add QR code server address in console for easy transfer to a mobile device. ([707804f](https://github.com/mikedsharp/soundboard/commit/707804f3c1f15eb7bdef56ad6218c5e177b32892))
* add support for ogg,flac,wav,mp4 ([6a64930](https://github.com/mikedsharp/soundboard/commit/6a6493090043baa7a6aa9448c5339b3c7fe9e7bd))
* added one-command build tooling using workspaces ([c8b396c](https://github.com/mikedsharp/soundboard/commit/c8b396c8f8590b22693043b65f46b595b556bc0d))
* autobuild manifest when listener starts (won't overwrite everything now!) ([7876c49](https://github.com/mikedsharp/soundboard/commit/7876c496e313aa800498acccfc0183bc7213c702))
* coming up with a name and branding the app ([57f2747](https://github.com/mikedsharp/soundboard/commit/57f27474049ad457087f2c7f43dc517c4da1e8ff))
* experimenting with optional image thumbnails ([ada361b](https://github.com/mikedsharp/soundboard/commit/ada361b6af5cb913916196f3c7ac5f9e3fd97c70))
* finally caved and swapped out the pre-loadable sound library with sound-play, because you absolutely cannot get the pre-loadable sound library to bundle node-speaker into the executable. I find having to include node_modules with a .exe totally unacceptable. ([1a32710](https://github.com/mikedsharp/soundboard/commit/1a32710f959734d9b503aa4884acd3888e269e55))
* finish audio preloading ([10791fc](https://github.com/mikedsharp/soundboard/commit/10791fcb1d1184702792cf86f6e34dc75a2f18b3))
* get build system working on mac ([861216c](https://github.com/mikedsharp/soundboard/commit/861216ced305a34e152347e97e19cd0f7fd1385a))
* implement preloading of sounds for reduced latency ([30aa211](https://github.com/mikedsharp/soundboard/commit/30aa211974279e68634dbfe26358d867cb6327b4))
* make manifest builder and listener use same array of allowed file formats ([a44f4a6](https://github.com/mikedsharp/soundboard/commit/a44f4a688046cabff7594a5cf666c434ed6e34b2))
* make manifest builder respect previous entries instead of overwriting everything. ([c873dae](https://github.com/mikedsharp/soundboard/commit/c873daeccb0a2ce0b912e658b39aa4780e287925))
* make manifest builder tolerant of a non-existent manifest json file ([d2052c5](https://github.com/mikedsharp/soundboard/commit/d2052c5fbb642436515052e2e3b7063b132b3cff))
* make manifester builder exportable function ([fd855e1](https://github.com/mikedsharp/soundboard/commit/fd855e11aa94a847e55c97995c90fffc53ad46a1))
* manifest builder is now comptatible with MacOS and distributable as a package. ([3f2c69a](https://github.com/mikedsharp/soundboard/commit/3f2c69ab42f88c7260722066eca3e235cda3e6b7))
* plumb in thumbnail url env var, so you can have thumbnails in dev mode ([54cf4c1](https://github.com/mikedsharp/soundboard/commit/54cf4c14d3703e4716959d6fc8c4536dbcdea79d))
* swap out audio library for symphonia (which apparently works in linux) ([3b5dff5](https://github.com/mikedsharp/soundboard/commit/3b5dff535b5ecffaeb1b62729a754d498b26b72f))


### Bug Fixes

* add additional poll for sounds if not received automatically ([6d09459](https://github.com/mikedsharp/soundboard/commit/6d0945901aa28845ec0cf3659c410e7d0923aea8))
* check if new sounds path contains double back slashes in order to be windows compatible ([57ca267](https://github.com/mikedsharp/soundboard/commit/57ca26788f067e5cc73899255de327ec4d6ff9fe))
* corrected incorrect auto-generated environment variable, for when user is running client in dev mode instead of having a build. ([cddafdc](https://github.com/mikedsharp/soundboard/commit/cddafdc2116fcee71eb91faace3e8dbcd849da23))
* parse backslashes to appease windows ([7e1c9e8](https://github.com/mikedsharp/soundboard/commit/7e1c9e84308f547fe5e249a3c53566f65fc73509))
