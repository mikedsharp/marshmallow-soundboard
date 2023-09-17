# Changelog

## 0.1.0 (2023-09-17)


### Features

* Add build executable command for mac, make app compatible with pkg. May consider migrating fully to pkg now i've worked out the kinks. ([ac97486](https://github.com/mikedsharp/soundboard/commit/ac97486774cad0cc8d4217ab20594e1a40a38ad2))
* add cleanup to remove resize listener ([95b8c65](https://github.com/mikedsharp/soundboard/commit/95b8c656fbaf606409a479ec6c4c3801b696313b))
* add fallback behaviour is user hasn't built the soundboard-client web app. Standardize port for soundboard-client to use. ([c7035c8](https://github.com/mikedsharp/soundboard/commit/c7035c8c3c8442c9e02b56cae3e832f712312587))
* add pagination logic to soundboard, very WIP but it works! ([f112f35](https://github.com/mikedsharp/soundboard/commit/f112f35048adc2bd594e45e3d1babdad795bfe8c))
* added one-command build tooling using workspaces ([c8b396c](https://github.com/mikedsharp/soundboard/commit/c8b396c8f8590b22693043b65f46b595b556bc0d))
* coming up with a name and branding the app ([57f2747](https://github.com/mikedsharp/soundboard/commit/57f27474049ad457087f2c7f43dc517c4da1e8ff))
* config grid properly ([b9ea9a1](https://github.com/mikedsharp/soundboard/commit/b9ea9a126c03370acf2d88e08a84a6854edbfa05))
* experimenting with optional image thumbnails ([ada361b](https://github.com/mikedsharp/soundboard/commit/ada361b6af5cb913916196f3c7ac5f9e3fd97c70))
* get build system working on mac ([861216c](https://github.com/mikedsharp/soundboard/commit/861216ced305a34e152347e97e19cd0f7fd1385a))
* majorly improved scaling and pagination of tiles based on screen width. Pagination still WIP (only shows first page right now) ([583df29](https://github.com/mikedsharp/soundboard/commit/583df29768dfa4fec551e9560150e16ca85d5110))
* make buttons look and feel more like real buttons ([1bb30fd](https://github.com/mikedsharp/soundboard/commit/1bb30fd1238ef9d6fda11082f5da892940c14caa))
* make page index go back to 0 when user resizes, so avoid showing empty pages if the view got big enough to show all tiles. ([39d6252](https://github.com/mikedsharp/soundboard/commit/39d625226608075bfc535e6066b8bed317a5bf39))
* move pagination into own component and make nicer ([d4c5d50](https://github.com/mikedsharp/soundboard/commit/d4c5d50f70c326deb106d5bdb314fa963be899c4))
* plumb in thumbnail url env var, so you can have thumbnails in dev mode ([54cf4c1](https://github.com/mikedsharp/soundboard/commit/54cf4c14d3703e4716959d6fc8c4536dbcdea79d))
* pretty label text and awesome images ([2759e70](https://github.com/mikedsharp/soundboard/commit/2759e70314e861151365fc2657fdff825d31995a))
* reduce timeout on request-sounds to 500ms ([88d2c86](https://github.com/mikedsharp/soundboard/commit/88d2c86e1cf0037cca4d3fc2ffdd84cab6337ea9))


### Bug Fixes

* add additional poll for sounds if not received automatically ([6d09459](https://github.com/mikedsharp/soundboard/commit/6d0945901aa28845ec0cf3659c410e7d0923aea8))
* corrected incorrect auto-generated environment variable, for when user is running client in dev mode instead of having a build. ([cddafdc](https://github.com/mikedsharp/soundboard/commit/cddafdc2116fcee71eb91faace3e8dbcd849da23))
* disable pinch zooming and scrolling so that soundboard taps are not missed sometimes on tablet devices ([739901a](https://github.com/mikedsharp/soundboard/commit/739901aeff742c23acd3b295c59e9dc2dae1f6ab))
