# Selfhost Bitwarden on Synology NAS

## Install [vaultwarden](https://github.com/dani-garcia/vaultwarden) server on NAS
vaultwarden is rust implementation perfect NAS where compute resource is limited.

0. check architecture
```
uname -a
Linux SynologyDS 3.10.108 #42661 SMP Mon Jun 27 15:04:06 CST 2022 armv7l GNU/Linux synology_monaco_ds216play
```
1. cross build a binary from a powerful machine, ds216p is arm7l so cross config is `armv7l-unknown-linux-gnueabi`
```
nix-build -A server
```
2. copy binary to some location on NAS `~/Apps/BitWarden/vaultwarden`
```
scp ./result/bin/vaultwarden jcouyang@10.0.4.67:~/Apps/Bitwarden/
```
3. copy glibc to NAS as well
to find the glibc path for th binary
```
nix-store -q --references ./result
```

4. copy `bitwarden.service` to `/etc/systemd/system/bitwarden.service`

5. start the service
```
sudo systemctl enable bitwarden.service
sudo systemctl start bitwarden.service
systemctl status bitwarden.service
```

## Deploy UI
```
nix-build -A ui
cp -r ./result/share/vaultwarden/vault/* gh-pages
```
