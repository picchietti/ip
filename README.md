# ip

A cloudflare worker that responds with the incoming client ip. Why? I need a simple way to get a (router's) public ip address, but don't want to trust/rely on an additional third-party. The ip address is used by a self-hosted, dynamic dns service.

This project is deployed to a staging and production environment that both only listen on a protected url route. It is intended for my internal use only.

Generated using [wrangler](https://github.com/cloudflare/wrangler). The `wrangler.toml` file had to be added to `.gitignore` to hide the account_id, zone_id, and protected url.
