# Buildless-vuejs

Pretty basic way to develop a vuejs app.

## Running local

Only requirement is an http server.  Here is how I do it:

```bash
# in ~/.bash_profile
function server() {
    local port="${1:-8000}"
    open "http://localhost:${port}/" && python -m SimpleHTTPServer "$port"
}
```

```bash
server
```

Then open [http://localhost:8000](http://localhost:800).

## Running remote

Upload to CDN or AWS S3 hosting bucket.
