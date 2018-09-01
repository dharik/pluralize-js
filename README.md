# pluralize-js
Pluralization engine for modern Javascript/Typescript projects. Ultra low footprint (< 3 KB) thanks to its modular design. 

### Features
:point_right: Declarative

:point_right: Functional

:point_right: Composable

:point_right: Isomorphic

:point_right: Typescript

:point_right: ES2018

:point_right: Deterministic

:point_right: Modular

:tada: No dependencies!

## Installation

Yarn 

`yarn add pluralize-js`

NPM

`npm install pluralize-js`

## Usage
```typescript
import pluralize from 'pluralize-js'

pluralize(3, 'library', 'libraries') // "3 libraries"

pluralize(1, 'woman', 'women') // 1 woman

pluralize(794, 'shitty js library', 'shitty js libraries') // 794 shitty js libraries
```

## Contributing
We always looking for contributors to help maintain this library! Feel free to submit a PR and _make sure to tag it_ with an appropriate label. 
