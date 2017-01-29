# Milligrid

[![GitHub version](https://badge.fury.io/gh/bencoveney%2FMilligrid.svg)](https://badge.fury.io/gh/bencoveney%2FMilligrid) [![Bower version](https://badge.fury.io/bo/milligrid.svg)](https://badge.fury.io/bo/milligrid) [![Code Climate](https://codeclimate.com/github/bencoveney/Milligrid/badges/gpa.svg)](https://codeclimate.com/github/bencoveney/Milligrid)

Milligrid is a responsive CSS grid system which uses flexbox as a basis for its layout. It is based on the excellent grid built into [Milligram](https://milligram.github.io), which was in turn based on work by [Philip Walton](http://philipwalton.github.io/solved-by-flexbox/demos/grids/). Milligrid aims to take the brilliant Milligram grid and provide it in a standalone package with enhanced configuration options in the form of Sass variables.

[Complete documentation](http://bencoveney.github.io/Milligrid/) is available for information on how best to utilise the grid system.

## Get Milligrid

You can either [download Milligrid](https://github.com/bencoveney/Milligrid/releases) directly or install it via bower:

```bower install milligrid```

## Versions

### Milligrid.css
The core of Milligrid, this stylesheet includes only the grid styling with the default options.

### MilligridExtended.css - Incomplete!
Includes the core Milligram grid system and some additional text styling options. This is under development and should be used with caution.

### *.scss
The .scss Sass source code files. These can be configured using the variables or ripped up and re-used however best suits your needs.

## Release History:

### v1.0.4 - 08/12/2016
+ Actually included `src/` inside NPM package.

### v1.0.3 - 08/12/2016
+ Added some new inline tags to extended CSS.
+ Included `src/` inside NPM package.

### v1.0.2 - 07/09/2016
+ Fixed IE issue where layout would break on small devices.

### v1.0.1 - 07/09/2016
+ Added additional mixins.

### v1.0.0 - 20/02/2016
+ Initial release.
+ Complete grid system.
+ Very basic text styling.

## Planned features:
+ Responsive utility classes (lg, md, sm, xs).
+ A more complete set of text element styles.
+ Configurable vertical rhythm.
+ Grid elements shouldn't rely on global box-sizing.
+ All classes should have prefix and be available through mixin (breaking change).

## Release Procedure
+ Update version number in `package.json`
+ Update release notes in `readme.md`
+ Create GitHub release (this is also a bower publish)
+ Do `npm publish`
