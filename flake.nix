{
  description = "Frogtown dev";

  outputs = {nixpkgs, ...}: let
    system = "x86_64-linux";
    pkgs = nixpkgs.legacyPackages.${system};
  in {
    devShells.${system}.default = pkgs.mkShell {
      packages = with pkgs; [
        # insert desired packages here
        tmux
        nodejs_22

      ];
    };
  };
}
