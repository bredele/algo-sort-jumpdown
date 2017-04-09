# Jump down sort
[![Build Status](https://travis-ci.org/bredele/algo-sort-jumpdown.svg?branch=master)](https://travis-ci.org/bredele/algo-sort-jumpdown)
[![NPM](https://img.shields.io/npm/v/algo-sort-jumpdown.svg?style=flat-square)](https://www.npmjs.com/package/algo-sort-jumpdown)
[![Downloads](https://img.shields.io/npm/dm/algo-sort-jumpdown.svg?style=flat-square)](http://npm-stat.com/charts.html?package=algo-sort-jumpdown)
[![pledge](https://bredele.github.io/contributing-guide/community-pledge.svg)](https://github.com/bredele/contributing-guide/blob/master/community.md)

Very similar to [bubble sort](https://github.com/bredele/algo-sort-bubble), the jump down algorithm steps through the list to be sorted, compares each element with the largest adjacent element and swap them if it's larger.


## Usage

```js
const sort = require('algo-sort-jumpdown')
sort([
  0, 67, 7, 34, 54, 3, 2, 54, 1
])
// => [0, 1, 2, 3, 7, 34, 54, 54, 67]

sort([
  'world',
  'foo',
  'olivier',
  'a'
], (prev, next) => prev.length < next.length)
// => ['a', 'foo', 'world', 'olivier']
```

## Rabbits and Turtles

An element that is moving toward the end moves quickly (rabbit) because it takes part in successive swaps. For example, the largest element will be part of all consecutive swap in one pass until it is at the end of the list. On the other hand, an element that must move toward the beginning of the list (turtle) cannot move faster than one step per pass. For example, the smallest element will take n-1 passes (one swap per pass) where n is the element's position.

## Installation

```shell
npm install algo-sort-jumpdown --save
```

[![NPM](https://nodei.co/npm/algo-sort-jumpdown.png)](https://nodei.co/npm/algo-sort-jumpdown/)

## Licence

The MIT License (MIT)

Copyright (c) 2016 Olivier Wietrich

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
