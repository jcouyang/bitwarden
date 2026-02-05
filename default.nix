let pkgs = import (fetchTarball "https://github.com/NixOS/nixpkgs/archive/809d16bdf5ab.tar.gz") {};
    armpkgs = import pkgs.path {
      crossSystem = {
        config = "armv7l-unknown-linux-gnueabi"; }; };
in {
  server = armpkgs.pkgsStatic.vaultwarden;
  ui = pkgs.vaultwarden.webvault;
  cloudflared = armpkgs.pkgsStatic.cloudflared;
}
