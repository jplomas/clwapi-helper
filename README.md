# clwapi-helper

> [!IMPORTANT]
> This API seems to have been removed by the vendor, which is a shame.  This repo is, therefore, archived.
>

Helper to do the login/token management for interactions with Rotamap Ltd's CLWrota/Medirota Public API.

This tool is not affiliated with or endorsed by Rotamap Ltd and has been developed to facilitate my own interactions with their API.  It is released 'as is' in the public spirit of open source software with a permissive MIT license.

Needs 3 environment variables set (or will look for a .env file in root of repo) with:

```bash
CLW_URL=https://instance-here.clwrota.com
CLW_USERNAME=username-here
CLW_PASSWORD=password-here
```

Progress/To do:

- [X] env variables/.env configuration
- [X] instatiate a class
- [X] -> test
- [X] login and get a token
- [X] -> test
- [X] set a token expiry date
- [X] -> test
- [X] re-use a token where able
- [X] -> test
- [X] don't reattempt to login if a token is still valid
- [X] -> test
- [X] rate limit API calls to 1/20 sec
- [X] -> test
- [ ] max API call use per token (??superfluous with rate limiting)
- [ ] -> test
- [ ] configure JSON/XML response requested for API calls where this is an option
- [ ] -> test
- [ ] test bundling
- [ ] ?fix axios dependency
- [ ] deploy to NPM
