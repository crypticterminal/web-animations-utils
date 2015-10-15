/*
 * Copyright 2015 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not
 * use this file except in compliance with the License. You may obtain a copy of
 * the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 */


/**
 * @fileoverview Basic externs for the Web Animations API. This is not
 * intended to be exhaustive.
 * @externs
 */

/**
 * @param {!Array<!Object>} frames
 * @param {undefined|number|!AnimationEffectTiming} opt_options
 * @return {!Animation}
 */
Element.prototype.animate = function(frames, opt_options) {};

/**
 * @interface
 * @extends {EventTarget}
 */
var Animation = function() {};

/**
 * @return {undefined}
 */
Animation.prototype.cancel = function() {};

/** @type {AnimationEffectReadOnly|undefined} */
Animation.prototype.effect;

/** @type {number} */
Animation.prototype.currentTime;

/** @type {string} */
Animation.prototype.playState;

/**
 * @interface
 */
var AnimationEffectTiming = function() {};

/** @type {number} */
AnimationEffectTiming.prototype.delay;

/** @type {number} */
AnimationEffectTiming.prototype.endDelay;

/** @type {string} */
AnimationEffectTiming.prototype.fillMode;

/** @type {number} */
AnimationEffectTiming.prototype.iterationStart;

/** @type {number} */
AnimationEffectTiming.prototype.iterations;

/** @type {number|string} */
AnimationEffectTiming.prototype.duration;

/** @type {string} */
AnimationEffectTiming.prototype.direction;

/** @type {string} */
AnimationEffectTiming.prototype.easing;
