{pkgs ? import (fetchTarball "https://github.com/NixOS/nixpkgs/archive/156692232552.tar.gz") {}}:
let armpkgs = import pkgs.path { crossSystem = { config = "armv7l-unknown-linux-gnueabi"; }; };
in {
  server = armpkgs.vaultwarden;
  ui = pkgs.vaultwarden-vault;
}
