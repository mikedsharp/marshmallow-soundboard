# Changelog

## 0.1.0 (2023-09-17)


### Features

* add auto updating of sound list and OS drag and dropping of sounds to media folder ([fe9887b](https://github.com/mikedsharp/marshmallow-soundboard/commit/fe9887bb46414bc43127ccd9c4c25e500ac80b04))
* add build commands for linux ([71729e8](https://github.com/mikedsharp/marshmallow-soundboard/commit/71729e859c78c99ca1a37bee05680b2a426e12ac))
* Add build executable command for mac, make app compatible with pkg. May consider migrating fully to pkg now i've worked out the kinks. ([ac97486](https://github.com/mikedsharp/marshmallow-soundboard/commit/ac97486774cad0cc8d4217ab20594e1a40a38ad2))
* add cleanup to remove resize listener ([95b8c65](https://github.com/mikedsharp/marshmallow-soundboard/commit/95b8c656fbaf606409a479ec6c4c3801b696313b))
* add fallback behaviour is user hasn't built the soundboard-client web app. Standardize port for soundboard-client to use. ([c7035c8](https://github.com/mikedsharp/marshmallow-soundboard/commit/c7035c8c3c8442c9e02b56cae3e832f712312587))
* add logic to remove sound from board when removed from media folder ([88391e9](https://github.com/mikedsharp/marshmallow-soundboard/commit/88391e971653f1e5f049749b0c0168df13fc3f5e))
* add media read and playing functionality for Windows and Mac. Add manifest generation command. ([bc7a605](https://github.com/mikedsharp/marshmallow-soundboard/commit/bc7a605dfbf4ad580042a7dea7b8a2c6d1407097))
* add pagination logic to soundboard, very WIP but it works! ([f112f35](https://github.com/mikedsharp/marshmallow-soundboard/commit/f112f35048adc2bd594e45e3d1babdad795bfe8c))
* add QR code server address in console for easy transfer to a mobile device. ([707804f](https://github.com/mikedsharp/marshmallow-soundboard/commit/707804f3c1f15eb7bdef56ad6218c5e177b32892))
* add release and changelog automation ([5b04b10](https://github.com/mikedsharp/marshmallow-soundboard/commit/5b04b103a24a21eb1f55b95106bede6fcc8064ab))
* add sound caching to allow for very low latency sound playing. Almost immediate now. ([4d08c22](https://github.com/mikedsharp/marshmallow-soundboard/commit/4d08c22da1c495efd15b03bacdeb133888f5ada3))
* add support for ogg,flac,wav,mp4 ([6a64930](https://github.com/mikedsharp/marshmallow-soundboard/commit/6a6493090043baa7a6aa9448c5339b3c7fe9e7bd))
* added one-command build tooling using workspaces ([c8b396c](https://github.com/mikedsharp/marshmallow-soundboard/commit/c8b396c8f8590b22693043b65f46b595b556bc0d))
* autobuild manifest when listener starts (won't overwrite everything now!) ([7876c49](https://github.com/mikedsharp/marshmallow-soundboard/commit/7876c496e313aa800498acccfc0183bc7213c702))
* basic socket.io server to send the client a list of soundboard sounds to select from. ([2b1a555](https://github.com/mikedsharp/marshmallow-soundboard/commit/2b1a5552f5949624c61c6cb19fa7ef872ff2e72f))
* begin plumbing in sound request receiver. ([9d5f337](https://github.com/mikedsharp/marshmallow-soundboard/commit/9d5f337908a4c5ef1c17fa6b3fd6006a4f4646bd))
* coming up with a name and branding the app ([57f2747](https://github.com/mikedsharp/marshmallow-soundboard/commit/57f27474049ad457087f2c7f43dc517c4da1e8ff))
* config grid properly ([b9ea9a1](https://github.com/mikedsharp/marshmallow-soundboard/commit/b9ea9a126c03370acf2d88e08a84a6854edbfa05))
* experimenting with optional image thumbnails ([ada361b](https://github.com/mikedsharp/marshmallow-soundboard/commit/ada361b6af5cb913916196f3c7ac5f9e3fd97c70))
* finally caved and swapped out the pre-loadable sound library with sound-play, because you absolutely cannot get the pre-loadable sound library to bundle node-speaker into the executable. I find having to include node_modules with a .exe totally unacceptable. ([1a32710](https://github.com/mikedsharp/marshmallow-soundboard/commit/1a32710f959734d9b503aa4884acd3888e269e55))
* finish audio preloading ([10791fc](https://github.com/mikedsharp/marshmallow-soundboard/commit/10791fcb1d1184702792cf86f6e34dc75a2f18b3))
* get build system working on mac ([861216c](https://github.com/mikedsharp/marshmallow-soundboard/commit/861216ced305a34e152347e97e19cd0f7fd1385a))
* implement preloading of sounds for reduced latency ([30aa211](https://github.com/mikedsharp/marshmallow-soundboard/commit/30aa211974279e68634dbfe26358d867cb6327b4))
* majorly improved scaling and pagination of tiles based on screen width. Pagination still WIP (only shows first page right now) ([583df29](https://github.com/mikedsharp/marshmallow-soundboard/commit/583df29768dfa4fec551e9560150e16ca85d5110))
* make buttons look and feel more like real buttons ([1bb30fd](https://github.com/mikedsharp/marshmallow-soundboard/commit/1bb30fd1238ef9d6fda11082f5da892940c14caa))
* make manifest builder and listener use same array of allowed file formats ([a44f4a6](https://github.com/mikedsharp/marshmallow-soundboard/commit/a44f4a688046cabff7594a5cf666c434ed6e34b2))
* make manifest builder respect previous entries instead of overwriting everything. ([c873dae](https://github.com/mikedsharp/marshmallow-soundboard/commit/c873daeccb0a2ce0b912e658b39aa4780e287925))
* make manifest builder tolerant of a non-existent manifest json file ([d2052c5](https://github.com/mikedsharp/marshmallow-soundboard/commit/d2052c5fbb642436515052e2e3b7063b132b3cff))
* make manifester builder exportable function ([fd855e1](https://github.com/mikedsharp/marshmallow-soundboard/commit/fd855e11aa94a847e55c97995c90fffc53ad46a1))
* make page index go back to 0 when user resizes, so avoid showing empty pages if the view got big enough to show all tiles. ([39d6252](https://github.com/mikedsharp/marshmallow-soundboard/commit/39d625226608075bfc535e6066b8bed317a5bf39))
* manifest builder is now comptatible with MacOS and distributable as a package. ([3f2c69a](https://github.com/mikedsharp/marshmallow-soundboard/commit/3f2c69ab42f88c7260722066eca3e235cda3e6b7))
* move pagination into own component and make nicer ([d4c5d50](https://github.com/mikedsharp/marshmallow-soundboard/commit/d4c5d50f70c326deb106d5bdb314fa963be899c4))
* plumb in thumbnail url env var, so you can have thumbnails in dev mode ([54cf4c1](https://github.com/mikedsharp/marshmallow-soundboard/commit/54cf4c14d3703e4716959d6fc8c4536dbcdea79d))
* pretty label text and awesome images ([2759e70](https://github.com/mikedsharp/marshmallow-soundboard/commit/2759e70314e861151365fc2657fdff825d31995a))
* reduce timeout on request-sounds to 500ms ([88d2c86](https://github.com/mikedsharp/marshmallow-soundboard/commit/88d2c86e1cf0037cca4d3fc2ffdd84cab6337ea9))
* swap out audio library for symphonia (which apparently works in linux) ([3b5dff5](https://github.com/mikedsharp/marshmallow-soundboard/commit/3b5dff535b5ecffaeb1b62729a754d498b26b72f))


### Bug Fixes

* add additional poll for sounds if not received automatically ([6d09459](https://github.com/mikedsharp/marshmallow-soundboard/commit/6d0945901aa28845ec0cf3659c410e7d0923aea8))
* change mac build from using move command to using  a copy, as was originally intended ([109723c](https://github.com/mikedsharp/marshmallow-soundboard/commit/109723c4e377ccd23f0eb1f8b1b561b2b56cb065))
* check if new sounds path contains double back slashes in order to be windows compatible ([57ca267](https://github.com/mikedsharp/marshmallow-soundboard/commit/57ca26788f067e5cc73899255de327ec4d6ff9fe))
* corrected incorrect auto-generated environment variable, for when user is running client in dev mode instead of having a build. ([cddafdc](https://github.com/mikedsharp/marshmallow-soundboard/commit/cddafdc2116fcee71eb91faace3e8dbcd849da23))
* disable pinch zooming and scrolling so that soundboard taps are not missed sometimes on tablet devices ([739901a](https://github.com/mikedsharp/marshmallow-soundboard/commit/739901aeff742c23acd3b295c59e9dc2dae1f6ab))
* parse backslashes to appease windows ([7e1c9e8](https://github.com/mikedsharp/marshmallow-soundboard/commit/7e1c9e84308f547fe5e249a3c53566f65fc73509))
