# Awesome Hyprland
[![Discord](https://img.shields.io/discord/1055990214411169892?label=discord)](https://discord.gg/zzWqvcKRMy)

Awesome list for Hyprland, that includes usefull tools and libraries that either work or are designed for Hyprland!

## Language Bindings
- [Hyprland-rs](https://github.com/hyprland-community/hyprland-rs) ![rust][rs] (events, hyprctl, binds)
- [Hyprland-py](https://github.com/hyprland-community/hyprland-py) ![python][py] (events, hyprctl, binds)
- [Shell Events](https://github.com/hyprwm/contrib/tree/main/shellevents) ![shell][sh] (events)
- [Hypr Events](https://github.com/vilari-mickopf/hyprevents) ![shell][sh] (events)
- [Hyprland IPC Client](https://github.com/labi-le/hyprland-ipc-client) ![go][go] (events)
- [Hyprland_ipc](https://github.com/FlafyDev/hyprland_ipc) ![dart][da] (events, hyprctl)
- ~~[Hyprland_rs](https://github.com/amirography/hyprland_rs) ![rust][rs] (config generation)~~ **(DEPRECATED)**

## Config parsers
- [Hyprparse](https://github.com/hyprland-community/hyprparse) ![rust][rs] (Hypr(land/paper), with support for the web)

## Tools

### Official tools
- [Hyprpaper](https://github.com/hyprwm/hyprpaper) ![c++][cpp] (wallpaper daemon)
- [Hyprpicker](https://github.com/hyprwm/hyprpicker)  ![c++][cpp] (colorpicker)

### Status Bar/Shell
- [eww](https://github.com/elkowar/eww/) ![rust][rs] (Widget framework built on gtk, that can be used as a statusbar)
- [waybar](https://github.com/Alexays/Waybar/) ![c++][cpp] (Like polybar, but for wlroots, very customizable)
- [Hybrid](https://github.com/vars1ty/HybridBar) ![rust][rs] (Feature-full bar made for wlroots based compositors)
- [hyprland-autoname-workspaces](https://github.com/cyrinux/hyprland-autoname-workspaces) ![Made for Hyprland][mfh] ![rust][rs] (Workspaces auto renamer, tested with waybar)
- [ironbar](https://github.com/JakeStanger/ironbar) ![Supports Hyprland][sph] ![rust][rs] (Very customizable bar with gui components)

#### Partial support
- [Yambar](https://codeberg.org/dnkl/yambar) ![c][c] (Modular status panel for X11 and Wayland, inspired by polybar) ([Needs to implement Hyprland workspaces](https://codeberg.org/dnkl/yambar/issues/279))

### Notification Daemons

#### Regular Notifications
- [mako](https://github.com/emersion/mako) ![c][c] (Very simple and configurable notification daemon)
- [dunst](https://dunst-project.org/) ![c][c] (Very customizable notification daemon)
- [SwayNotificationCenter](https://github.com/ErikReider/SwayNotificationCenter) ![vala][va] (GNOME like notification daemon, with GUI and all)
- [fnott](https://codeberg.org/dnkl/fnott) ![c][c] (Feature-full and configurable notification daemon)

#### OSD
- [SwayOSD](https://github.com/ErikReider/SwayOSD) ![rust][rs] (GNOME like OSD written in gtk)
- [Avizo](https://github.com/misterdanb/avizo) ![vala][va] (macOS like OSD written in gtk, also comes with nice scripts)
- [Wob](https://github.com/francma/wob) ![c][c] (dead simple OSD inspired by xob)

### Runners, Menus, and Application Launchers
- [rofi-wayland](https://github.com/lbonn/rofi) ![c][c] (Rofi fork with support for wlroots)
- [tofi](https://github.com/philj56/tofi) ![c][c] (very tiny rofi inspired menu)
- [bemenu](https://github.com/Cloudef/bemenu) ![c][c] (looks like dmenu, but crossplatform)
- [wofi](https://hg.sr.ht/~scoopta/wofi) ![c][c] (simple menu made in gtk)
- [fuzzel](https://codeberg.org/dnkl/fuzzel) ![c][c] (simple application launcher similar to rofi's drun mode)
- [anyrun](https://github.com/Kirottu/anyrun) ![rust][rs] (A wayland native, highly customizable runner, similar to krunner)

### Wallpaper
- [swww](https://github.com/Horus645/swww) ![rust][rs] (Wallpaper daemon with live switching, awesome animations, and GIF support)
- [mpvpaper](https://github.com/GhostNaN/mpvpaper) ![c][c] (Wallpaper daemon that wraps MPV, usefull for videos, and more advanced usage)
- [swaybg](https://github.com/swaywm/swaybg) ![c][c] (Very simple wallpaper daemon used by default on sway)

### Screenshotting

#### All in one Tools
- [Watershot](https://github.com/Kirottu/watershot) ![rust][rs] (A simple wayland native screenshot tool)
- [Grimblast](https://github.com/hyprwm/contrib/tree/main/grimblast) ![shell][sh] (Port of grimshot, which is an abstraction over grim and slurp)
- [Flameshot](https://github.com/flameshot-org/flameshot) ![c++][cpp] (All in one screenshotting tool with gui, annotation, + more) **(To use make sure you have grim flag enabled)**

#### Raw Tools
- [Grim](https://github.com/emersion/grim) ![c][c] (basic screenshot tool)
- [Wayshot](https://git.sr.ht/~shinyzenith/wayshot) ![rust][rs] (basic screenshot tool made for speed and in rust)
- [slurp](https://github.com/emersion/slurp) ![c][c] (basic area selection tool)

#### Recording
- [wf-recorder](https://github.com/ammen99/wf-recorder) ![c++][cpp] (Simple screenrecorder, like grim but records video)

#### Annotation
- [swappy](https://github.com/jtheoof/swappy) ![c][c] (Annotation gui made in gtk)

### Input
- [hyprland-per-window-layout](https://github.com/MahouShoujoMivutilde/hyprland-per-window-layout) ![Made for Hyprland][mfh] ![shell][sh] (Script to maintain per window keyboard layout (language))

#### On-screen Keyboards
- [wvkbd](https://github.com/jjsullivan5196/wvkbd) ![c][c] (On-screen keyboard for wlroots)

### Locking, Idle, Clipboard and Login

#### Misc
- [Wayout](https://git.sr.ht/~shinyzenith/wayout) ![rust][rs] (For turning off display, useful for idle)
- [Wlogout](https://github.com/ArtsyMacaw/wlogout) ![c][c] (Logout menu)
- [wayprompt](https://git.sr.ht/~leon_plickat/wayprompt) ![zig][z] (pinentry prompter)

#### Idle Daemons
- [swayidle](https://github.com/swaywm/swayidle) ![c][c] (Idle daemon used by default in sway, also only one I could find for wlroots)

#### Lockers
- [gtklock](https://github.com/jovanlanik/gtklock) ![c][c] (Fork of gtkgreet, but for locking, also more configurable, and has a its module system)
- [swaylock](https://github.com/swaywm/swaylock) ![c][c] (Sway's default locker, very configurable, and popular)
- [swaylock-effects](https://github.com/mortie/swaylock-effects) ![c][c] (Fork of swaylock, but with effects ^)
- [waylock](https://github.com/ifreund/waylock) ![zig][z] (A small screenlocker for Wayland compositors)

#### Clipboard Managers
- [clipman](https://github.com/yory8/clipman) ![go][go] (A simple clipboard manager for Wayland) 
- [cliphist](https://github.com/sentriz/cliphist) ![go][go] (Wayland clipboard manager)
 
##### Display Managers
- [GDM](https://wiki.gnome.org/Projects/GDM) ![c][c]
- [SDDM](https://github.com/sddm/sddm) ![c++][cpp]
- [lightdm](https://github.com/canonical/lightdm) ![c][c] (Display manager with a bunch of greeters, more info on gh repo)
- [Greetd](https://sr.ht/~kennylevinsen/greetd/) ![rust][rs] (Login daemon with a couple greeters, bellow are some good ones)
  - [gtkgreet](https://git.sr.ht/~kennylevinsen/gtkgreet) ![c][c] (Very simple gtk greeter)
  - [qtgreet](https://gitlab.com/marcusbritanicus/QtGreet) ![c++][cpp] (Configurable and overall more complicated greeter in QT)
  - [wlgreet](https://git.sr.ht/~kennylevinsen/wlgreet) ![rust][rs] (Very basic greeter in raw wayland and SCTK)

<!-- Links -->
[mfh]: https://img.shields.io/badge/-made%20for%20Hyprland-blue
[sph]: https://img.shields.io/badge/-supports%20Hyprland-brightgreen

<!-- Languages -->
<!-- Rust -->
[rs]: https://img.shields.io/badge/-rust-orange
<!-- Shell/Bash -->
[sh]: https://img.shields.io/badge/-shell-green
<!-- Golang -->
[go]: https://img.shields.io/badge/-go-68D7E2
<!-- C++ -->
[cpp]: https://img.shields.io/badge/-c%2B%2B-red
<!-- C -->
[c]: https://img.shields.io/badge/-c-lightgrey
<!-- Zig -->
[z]: https://img.shields.io/badge/-zig-yellow
<!-- Vala -->
[va]: https://img.shields.io/badge/-vala-blueviolet
<!-- Dart -->
[da]: https://img.shields.io/badge/-dart-02D3B3
<!-- Python -->
[py]: https://img.shields.io/badge/-python-blue
