# Awesome Hyprland

[![Discord](https://img.shields.io/discord/1055990214411169892?label=discord)](https://discord.gg/zzWqvcKRMy)

Awesome list for Hyprland, that includes useful tools and libraries that either work or are designed for Hyprland!

## Language Bindings

- [Hyprland-rs](https://github.com/hyprland-community/hyprland-rs) ![rust][rs] (events, hyprctl, binds)
- [Hyprland-py](https://github.com/hyprland-community/hyprland-py) ![python][py] (events, hyprctl, binds)
- [Hyprland_nim](https://github.com/xTrayambak/hyprland_ipc) ![nim][nim] (events, hyprctl, binds)
- [Shell Events](https://github.com/hyprwm/contrib/tree/main/shellevents) ![shell][sh] (events)
- [Hypr Events](https://github.com/vilari-mickopf/hyprevents) ![shell][sh] (events)
- [Hyprland IPC Client](https://github.com/labi-le/hyprland-ipc-client) ![go][go] (events, hyprctl)
- [Hyprland_ipc](https://github.com/FlafyDev/hyprland_ipc) ![dart][da] (events, hyprctl)
- [hyprpy](https://github.com/ulinja/hyprpy) ![python][py]  (events)

## Config parsers

- [Hyprparse](https://github.com/hyprland-community/hyprparse) ![rust][rs] (Hypr config file parser, with support for the web)
- [tree-sitter-hyprlang](https://github.com/luckasRanarison/tree-sitter-hyprlang) ![c][c] (tree-sitter grammar for Hyprland config files, made to be used with neovim)

## Plugins

- [hyprload](https://github.com/Duckonaut/hyprload) ![c++][cpp] (Hyprland plugin manager that adds support for reloading plugins)
- [split-monitor-workspaces](https://github.com/Duckonaut/split-monitor-workspaces) ![c++][cpp] (A small Hyprland plugin to provide awesome-like workspace behavior)
- [hyprgrass](https://github.com/horriblename/hyprgrass) ![c++][cpp] (Hyprland plugin for touch gestures)
- [hyprNStack](https://github.com/zakk4223/hyprNStack) ![c++][cpp] (Hyprland plugin for N-stack tiling layout)
- [hyprRiver](https://github.com/zakk4223/hyprRiver) ![c++][cpp] (River layouts for Hyprland)
- [hyprfocus](https://github.com/VortexCoyote/hyprfocus) ![c++][cpp] (Flashfocus-inspired plugin that adds flashing when changing focus, useful for borderless)
- [hyprland-dwindle-autogroup](https://github.com/ItsDrike/hyprland-dwindle-autogroup) ![c++][cpp] (overrides grouping behavior on dwindle layout)
- [hy3](https://github.com/outfoxxed/hy3) ![c++][cpp] (Adds i3-like manual tiling)
- [hyprland-virtual-desktops](https://github.com/levnikmyskin/hyprland-virtual-desktops) ![c++][cpp] (manages multiple screen's workspaces as if they were a single virtual desktop)
- [Hypr-DarkWindow](https://github.com/micha4w/Hypr-DarkWindow) ![c++][cpp] (Hyprland plugin that adds possibility to invert the color of specific windows)
- [grab-workspace](https://github.com/CMurtagh-LGTM/grab-workspace) ![c++][cpp] (plugin that moves a workspace to the current monitor and shows it)
- [hycov](https://github.com/DreamMaoMao/hycov) ![c++][cpp] (Hyprland plugin that displays all open clients in a grid view)
- [hyprkool](https://github.com/thrombe/hyprkool) ![rust][rs] (plugin that adds kde activities and grid layouts. also allows to switch workspaces when cursor touches edges)

### [Official plugins](https://github.com/hyprwm/hyprland-plugins)

- [border++](https://github.com/hyprwm/hyprland-plugins/tree/main/borders-plus-plus) ![c++][cpp] (Adds one or two additional borders to windows)
- [hyprbars](https://github.com/hyprwm/hyprland-plugins/tree/main/hyprbars) ![c++][cpp] (Adds title bars to windows)
- [hyprtrails](https://github.com/hyprwm/hyprland-plugins/tree/main/hyprtrails) ![c++][cpp] (Adds trails behind windows)
- [cs:go vulkan fix](https://github.com/hyprwm/hyprland-plugins/tree/main/csgo-vulkan-fix) ![c++][cpp] (Fixes custom resolutions on CS:GO with -vulkan)
- [hyprwinwrap](https://github.com/hyprwm/hyprland-plugins/tree/main/hyprwinwrap) ![c++][cpp] (Allows you to put any app as a wallpaper)

### IPC plugins

These technically aren't hyprland plugins, but extend hyprland functionality using only IPC

- [pyprland](https://github.com/hyprland-community/pyprland) ![python][py]
    - [expose](https://github.com/hyprland-community/pyprland/wiki/expose) (brings every window to the focused workspace, then allows switching to its workspace)
    - [layout_center](https://github.com/hyprland-community/pyprland/wiki/layout_center) (a layout maximizing one window at a time with a margin around it)
    - [lost_windows](https://github.com/hyprland-community/pyprland/wiki/lost_windows) (attempt to recover windows which are out of reach)
    - [magnify](https://github.com/hyprland-community/pyprland/wiki/magnify) (toggles the magnified state)
    - [scratchpads](https://github.com/hyprland-community/pyprland/wiki/scratchpads) (use your favorite applications as dropdowns)
    - [shortcuts_menu](https://github.com/hyprland-community/pyprland/wiki/shortcuts_menu) (allows making menus with rofi, dmenu & similar apps)
    - [fetch_client_menu](https://github.com/hyprland-community/pyprland/wiki/fetch_client_menu) select a window to be moved to your active workspace (using rofi, dmenu, etc...)
    - [toggle_dpms](https://github.com/hyprland-community/pyprland/wiki/toggle_dpms) (toggles the dpms on every monitor)
    - [toggle_special](https://github.com/hyprland-community/pyprland/wiki/toggle_special) (easier usage of special workspaces to "stash" windows)
    - Multi screen:
        - [monitors](https://github.com/hyprland-community/pyprland/wiki/monitors) (simple and flexible monitor placement)
        - [shift_monitors](https://github.com/hyprland-community/pyprland/wiki/shift_monitors) (swaps monitors' workspaces)
        - [workspaces_follow_focus](https://github.com/hyprland-community/pyprland/wiki/workspaces_follow_focus) (allows using any workspace on any monitor in a natural way)

## Tools

### Official tools

- [Hyprpaper](https://github.com/hyprwm/hyprpaper) ![c++][cpp] (wallpaper daemon)
- [Hyprpicker](https://github.com/hyprwm/hyprpicker)  ![c++][cpp] (colorpicker)
- [hyprlock](https://github.com/hyprwm/hyprlock) ![C++][cpp] (lock screen)
- [hypridle](https://github.com/hyprwm/hypridle) ![C++][cpp] (idle daemon)

### Status Bar/Shell

- [eww](https://github.com/elkowar/eww/) ![rust][rs] (Widget framework built on gtk, that can be used as a statusbar)
- [ags](https://aylur.github.io/ags-docs/) ![typescript][ts] (A customizable and extensible shell for Hyprland)
- [waybar](https://github.com/Alexays/Waybar/) ![c++][cpp] (Like polybar, but for wlroots, very customizable)
- [Hybrid](https://github.com/vars1ty/HybridBar) ![rust][rs] (Featureful bar made for wlroots based compositors)
- [hyprland-autoname-workspaces](https://github.com/cyrinux/hyprland-autoname-workspaces) ![rust][rs] (Workspaces auto renamer, tested with waybar)
- [ironbar](https://github.com/JakeStanger/ironbar) ![rust][rs] (Very customizable bar with gui components)
- [nwg-panel](https://github.com/nwg-piotr/nwg-panel) ![python][py] (GTK3-based panel with good support for Hyprland)
- [nwg-dock-hyprland](https://github.com/nwg-piotr/nwg-dock-hyprland) ![go][go] (GTK3-based dock for Hyprland)
- [gBar](https://github.com/scorpion-26/gBar) ![c++][cpp] (GTK3 based blazingly fast and efficient status bar)

### Notifications

#### Notification Daemons

- [mako](https://github.com/emersion/mako) ![c][c] (Very simple and configurable notification daemon)
- [dunst](https://dunst-project.org/) ![c][c] (Very customizable notification daemon)
- [SwayNotificationCenter](https://github.com/ErikReider/SwayNotificationCenter) ![vala][va] (GNOME like notification daemon, with GUI and all)
- [fnott](https://codeberg.org/dnkl/fnott) ![c][c] (Featureful and configurable notification daemon)

#### OSD

- [SwayOSD](https://github.com/ErikReider/SwayOSD) ![rust][rs] (GNOME like OSD written in gtk)
- [Avizo](https://github.com/misterdanb/avizo) ![vala][va] (macOS like OSD written in gtk, also comes with nice scripts)
- [Wob](https://github.com/francma/wob) ![c][c] (dead simple OSD inspired by xob)

#### Misc

- [Ianny](https://github.com/zefr0x/ianny) ![rust][rs] (Periodically informs user to take breaks by keeping track of usage patterns)

### Runners, Menus, and Application Launchers

- [rofi-wayland](https://github.com/lbonn/rofi) ![c][c] (Rofi fork with support for wlroots)
- [tofi](https://github.com/philj56/tofi) ![c][c] (very tiny rofi inspired menu)
- [bemenu](https://github.com/Cloudef/bemenu) ![c][c] (looks like dmenu, but crossplatform)
- [wofi](https://hg.sr.ht/~scoopta/wofi) ![c][c] (simple menu made in gtk)
- [fuzzel](https://codeberg.org/dnkl/fuzzel) ![c][c] (simple application launcher similar to rofi's drun mode)
- [anyrun](https://github.com/Kirottu/anyrun) ![rust][rs] (A wayland native, highly customizable runner, similar to krunner)
- [hypr-empty](https://github.com/nate-sys/hypr-empty) ![rust][rs] (Open a runner on empty workspaces)
- [nwg-drawer](https://github.com/nwg-piotr/nwg-drawer) ![go][go] (Gnome-ish application drawer)

### Wallpaper

- [Hyprpaper](https://github.com/hyprwm/hyprpaper) ![c++][cpp] (blazing fast wayland wallpaper utility with IPC controls)
- [swww](https://github.com/Horus645/swww) ![rust][rs] (Wallpaper daemon with live switching, awesome animations, and GIF support)
- [mpvpaper](https://github.com/GhostNaN/mpvpaper) ![c][c] (Wallpaper daemon that wraps MPV, useful for videos, and more advanced usage)
- [swaybg](https://github.com/swaywm/swaybg) ![c][c] (Very simple wallpaper daemon used by default on sway)
- [waypaper](https://github.com/anufrievroman/waypaper) ![python][py] (GUI wallpaper setter)
- [waypaper engine](https://github.com/0bCdian/Waypaper-Engine) ![typescript][ts] (GUI wallpaper setter with playlist capabilities)
- [wpaperd](https://github.com/danyspin97/wpaperd) ![rust][rs] (Minimal wallpaper daemon for Wayland)

### Display

- [iio-hyprland](https://github.com/JeanSchoeller/iio-hyprland) ![c][c] (Listen iio-sensor-proxy and auto change Hyprland output orientation)
- [wlr-rander](https://sr.ht/~emersion/wlr-randr/) ![c][c] (An xrandr clone for wlroots compositors)
- [kanshi](https://git.sr.ht/~emersion/kanshi) ![c][c] (Dynamic display configuration)
- [Wayout](https://git.sr.ht/~shinyzenith/wayout) ![rust][rs] (For turning off display, useful for idle) **(can be replicated using hyprctl)**
- [hypract](https://github.com/hyprland-community/hypract) ![rust][rs] (Adds KDE plasma like activities to Hyprland **WIP**)
- [hyprdim](https://github.com/donovanglover/hyprdim) ![rust][rs] (Automatically dim windows when switching between them)
- [hyprnome](https://github.com/donovanglover/hyprnome) ![rust][rs] (GNOME-like workspace switching in Hyprland)
- [monitor-attached](https://github.com/coffebar/hyprland-monitor-attached) ![rust][rs] (Run the user's script when you connect or disconnect monitors)
- [wl-mirror](https://github.com/Ferdi265/wl-mirror) ![c][c] (A simple Wayland output mirror client)
- [hyprshade](https://github.com/loqusion/hyprshade) ![python][py] (Frontend to Hyprland's screen shader feature)
- [wluma](https://github.com/maximbaz/wluma) ![rust][rs] (Automatically adjust screen brightness based on the screen contents and amount of ambient light)
- [Hyprfreeze](https://github.com/Zerodya/hyprfreeze) ![shell][sh] (Utility to suspend a game process and other programs)
- [wlsunset](https://sr.ht/~kennylevinsen/wlsunset/) ![c][c] (Day/night gamma adjustments for Wayland)

### Screenshotting

#### All in one Tools

- [Watershot](https://github.com/Kirottu/watershot) ![rust][rs] (A simple wayland native screenshot tool)
- [Grimblast](https://github.com/hyprwm/contrib/tree/main/grimblast) ![shell][sh] (Port of grimshot, which is an abstraction over grim and slurp)
- [Flameshot](https://github.com/flameshot-org/flameshot) ![c++][cpp] (All in one screenshotting tool with gui, annotation, + more) **(To use make sure you have grim flag enabled)**
- [Hyprshot](https://github.com/Gustash/Hyprshot) ![shell][sh] (Another grimshot-like tool to make things easier)
- [satty](https://github.com/gabm/satty) ![rust][rs] (A screenshot annotation tool inspired by Swappy and Flameshot)
- [swappy](https://github.com/jtheoof/swappy) ![c][c] (A Wayland native snapshot editing tool, inspired by Snappy on macOS)

#### Raw Tools

- [Grim](https://github.com/emersion/grim) ![c][c] (basic screenshot tool)
- [Wayshot](https://git.sr.ht/~shinyzenith/wayshot) ![rust][rs] (basic screenshot tool made for speed and in rust)
- [slurp](https://github.com/emersion/slurp) ![c][c] (basic area selection tool)
- [Hyprpicker](https://github.com/hyprwm/hyprpicker)  ![c++][cpp] (wlroots-compatible Wayland color picker that does not suck)

#### Recording

- [wf-recorder](https://github.com/ammen99/wf-recorder) ![c++][cpp] (Simple screenrecorder, like grim but records video)
- [wl-screenrec](https://github.com/russelltg/wl-screenrec) ![rust][rs] (Simple and efficient screenrecorder for AMD and Intel GPUs)

#### Annotation

- [swappy](https://github.com/jtheoof/swappy) ![c][c] (Annotation gui made in gtk)

### Input

- [Hyprkeys](https://github.com/hyprland-community/Hyprkeys) ![go][go] (Utility for dealing with keybinds in Hyprland)
- [hyprland-per-window-layout](https://github.com/coffebar/hyprland-per-window-layout) ![rust][rs] (Per window keyboard layout, zero-configuration, just works out of the box)
- [hyprland-per-window-layout](https://github.com/MahouShoujoMivutilde/hyprland-per-window-layout) ![shell][sh] (Script to maintain per window keyboard layout) (language)

#### On-screen Keyboards

- [wvkbd](https://github.com/jjsullivan5196/wvkbd) ![c][c] (On-screen keyboard for wlroots)

### Locking, Idle, Clipboard and Login

#### Misc

- [Wlogout](https://github.com/ArtsyMacaw/wlogout) ![c][c] (Logout menu)
- [wayprompt](https://git.sr.ht/~leon_plickat/wayprompt) ![zig][z] (pinentry prompter)
- [nwg-bar](https://github.com/nwg-piotr/nwg-bar) ![go][go] (GTK3-based logout bar)

#### Idle Daemons

- [hypridle](https://github.com/hyprwm/hypridle) ![c++][cpp] (Hyprland's idle daemon)
- [swayidle](https://github.com/swaywm/swayidle) ![c][c] (Idle daemon used by default in sway, also only one I could find for wlroots)
- [wscreensaver-bridge](https://github.com/kelvie/wscreensaver-bridge) ![rust][rs] (Wayland native bridge for apps that use org.freedesktop.ScreenSaver to inhibit idleness)

#### Lockers

- [swaylock](https://github.com/swaywm/swaylock) ![c][c] (Sway's default locker, very configurable, and popular)
- [swaylock-effects](https://github.com/mortie/swaylock-effects) ![c][c] (Fork of swaylock, but with effects ^)
- [waylock](https://codeberg.org/ifreund/waylock) ![zig][z] (A small screenlocker for Wayland compositors)
- [hyprlock](https://github.com/hyprwm/hyprlock) ![c++][cpp] (Hyprland's GPU-accelerated screen locking utility)

#### Clipboard Managers

- [clipman](https://github.com/chmouel/clipman) ![go][go] (A simple clipboard manager for Wayland) 
- [cliphist](https://github.com/sentriz/cliphist) ![go][go] (Wayland clipboard manager)

##### Display Managers

- [GDM](https://wiki.gnome.org/Projects/GDM) ![c][c]
- [SDDM](https://github.com/sddm/sddm) ![c++][cpp]
- [lightdm](https://github.com/canonical/lightdm) ![c][c] (Display manager with a bunch of greeters, more info on gh repo)
- [Greetd](https://sr.ht/~kennylevinsen/greetd/) ![rust][rs] (Login daemon with a couple greeters, bellow are some good ones)
  - [gtkgreet](https://git.sr.ht/~kennylevinsen/gtkgreet) ![c][c] (Very simple gtk greeter)
  - [qtgreet](https://gitlab.com/marcusbritanicus/QtGreet) ![c++][cpp] (Configurable and overall more complicated greeter in QT)
  - [wlgreet](https://git.sr.ht/~kennylevinsen/wlgreet) ![rust][rs] (Very basic greeter in raw wayland and SCTK)
  - [tuigreet](https://github.com/apognu/tuigreet) ![rust][rs] (Graphical console greeter for greetd)

<!-- Links -->

<!-- Languages -->
<!-- Rust -->
[rs]: https://img.shields.io/badge/-rust-orange
<!-- Nim -->
[nim]: https://img.shields.io/badge/-nim-%23ffe953
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
<!-- TypeScript -->
[ts]: https://img.shields.io/badge/-TS-007BCD
