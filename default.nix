let pkgs = import (fetchTarball "https://github.com/NixOS/nixpkgs/archive/8623c4c20aa4.tar.gz") {};
    armpkgs = import pkgs.path {
      crossSystem = {
        config = "armv7l-unknown-linux-gnueabi"; }; };
in {
  server = armpkgs.pkgsStatic.vaultwarden;
  ui = pkgs.vaultwarden.webvault;
  cloudflared = armpkgs.pkgsStatic.cloudflared;
}
