import {
  require_react
} from "./chunk-ZOIWZPCO.js";
import {
  __commonJS
} from "./chunk-DFKQJ226.js";

// node_modules/react-owl-carousel/umd/OwlCarousel.js
var require_OwlCarousel = __commonJS({
  "node_modules/react-owl-carousel/umd/OwlCarousel.js"(exports, module) {
    (function(global, factory) {
      typeof exports === "object" && typeof module !== "undefined" ? module.exports = factory(require_react()) : typeof define === "function" && define.amd ? define(["react"], factory) : global.ReactOwlCarousel = factory(global.React);
    })(exports, function(React) {
      "use strict";
      var React__default = "default" in React ? React["default"] : React;
      var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d, b) {
        d.__proto__ = b;
      } || function(d, b) {
        for (var p in b)
          if (b.hasOwnProperty(p))
            d[p] = b[p];
      };
      function __extends(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      }
      var __assign = Object.assign || function __assign2(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p))
              t[p] = s[p];
        }
        return t;
      };
      function __rest(s, e) {
        var t = {};
        for (var p in s)
          if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function") {
          for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++)
            if (e.indexOf(p[i]) < 0)
              t[p[i]] = s[p[i]];
        }
        return t;
      }
      (function($2, window2, document2, undefined) {
        function Owl(element, options) {
          this.settings = null;
          this.options = $2.extend({}, Owl.Defaults, options);
          this.$element = $2(element);
          this._handlers = {};
          this._plugins = {};
          this._supress = {};
          this._current = null;
          this._speed = null;
          this._coordinates = [];
          this._breakpoint = null;
          this._width = null;
          this._items = [];
          this._clones = [];
          this._mergers = [];
          this._widths = [];
          this._invalidated = {};
          this._pipe = [];
          this._drag = {
            time: null,
            target: null,
            pointer: null,
            stage: {
              start: null,
              current: null
            },
            direction: null
          };
          this._states = {
            current: {},
            tags: {
              "initializing": ["busy"],
              "animating": ["busy"],
              "dragging": ["interacting"]
            }
          };
          $2.each(["onResize", "onThrottledResize"], $2.proxy(function(i, handler) {
            this._handlers[handler] = $2.proxy(this[handler], this);
          }, this));
          $2.each(Owl.Plugins, $2.proxy(function(key, plugin) {
            this._plugins[key.charAt(0).toLowerCase() + key.slice(1)] = new plugin(this);
          }, this));
          $2.each(Owl.Workers, $2.proxy(function(priority, worker) {
            this._pipe.push({
              "filter": worker.filter,
              "run": $2.proxy(worker.run, this)
            });
          }, this));
          this.setup();
          this.initialize();
        }
        Owl.Defaults = {
          items: 3,
          loop: false,
          center: false,
          rewind: false,
          checkVisibility: true,
          mouseDrag: true,
          touchDrag: true,
          pullDrag: true,
          freeDrag: false,
          margin: 0,
          stagePadding: 0,
          merge: false,
          mergeFit: true,
          autoWidth: false,
          startPosition: 0,
          rtl: false,
          smartSpeed: 250,
          fluidSpeed: false,
          dragEndSpeed: false,
          responsive: {},
          responsiveRefreshRate: 200,
          responsiveBaseElement: window2,
          fallbackEasing: "swing",
          slideTransition: "",
          info: false,
          nestedItemSelector: false,
          itemElement: "div",
          stageElement: "div",
          refreshClass: "owl-refresh",
          loadedClass: "owl-loaded",
          loadingClass: "owl-loading",
          rtlClass: "owl-rtl",
          responsiveClass: "owl-responsive",
          dragClass: "owl-drag",
          itemClass: "owl-item",
          stageClass: "owl-stage",
          stageOuterClass: "owl-stage-outer",
          grabClass: "owl-grab"
        };
        Owl.Width = {
          Default: "default",
          Inner: "inner",
          Outer: "outer"
        };
        Owl.Type = {
          Event: "event",
          State: "state"
        };
        Owl.Plugins = {};
        Owl.Workers = [{
          filter: ["width", "settings"],
          run: function() {
            this._width = this.$element.width();
          }
        }, {
          filter: ["width", "items", "settings"],
          run: function(cache) {
            cache.current = this._items && this._items[this.relative(this._current)];
          }
        }, {
          filter: ["items", "settings"],
          run: function() {
            this.$stage.children(".cloned").remove();
          }
        }, {
          filter: ["width", "items", "settings"],
          run: function(cache) {
            var margin = this.settings.margin || "", grid = !this.settings.autoWidth, rtl = this.settings.rtl, css = {
              "width": "auto",
              "margin-left": rtl ? margin : "",
              "margin-right": rtl ? "" : margin
            };
            !grid && this.$stage.children().css(css);
            cache.css = css;
          }
        }, {
          filter: ["width", "items", "settings"],
          run: function(cache) {
            var width = (this.width() / this.settings.items).toFixed(3) - this.settings.margin, merge = null, iterator = this._items.length, grid = !this.settings.autoWidth, widths = [];
            cache.items = {
              merge: false,
              width
            };
            while (iterator--) {
              merge = this._mergers[iterator];
              merge = this.settings.mergeFit && Math.min(merge, this.settings.items) || merge;
              cache.items.merge = merge > 1 || cache.items.merge;
              widths[iterator] = !grid ? this._items[iterator].width() : width * merge;
            }
            this._widths = widths;
          }
        }, {
          filter: ["items", "settings"],
          run: function() {
            var clones = [], items = this._items, settings = this.settings, view = Math.max(settings.items * 2, 4), size = Math.ceil(items.length / 2) * 2, repeat = settings.loop && items.length ? settings.rewind ? view : Math.max(view, size) : 0, append = "", prepend = "";
            repeat /= 2;
            while (repeat > 0) {
              clones.push(this.normalize(clones.length / 2, true));
              append = append + items[clones[clones.length - 1]][0].outerHTML;
              clones.push(this.normalize(items.length - 1 - (clones.length - 1) / 2, true));
              prepend = items[clones[clones.length - 1]][0].outerHTML + prepend;
              repeat -= 1;
            }
            this._clones = clones;
            $2(append).addClass("cloned").appendTo(this.$stage);
            $2(prepend).addClass("cloned").prependTo(this.$stage);
          }
        }, {
          filter: ["width", "items", "settings"],
          run: function() {
            var rtl = this.settings.rtl ? 1 : -1, size = this._clones.length + this._items.length, iterator = -1, previous = 0, current = 0, coordinates = [];
            while (++iterator < size) {
              previous = coordinates[iterator - 1] || 0;
              current = this._widths[this.relative(iterator)] + this.settings.margin;
              coordinates.push(previous + current * rtl);
            }
            this._coordinates = coordinates;
          }
        }, {
          filter: ["width", "items", "settings"],
          run: function() {
            var padding = this.settings.stagePadding, coordinates = this._coordinates, css = {
              "width": Math.ceil(Math.abs(coordinates[coordinates.length - 1])) + padding * 2,
              "padding-left": padding || "",
              "padding-right": padding || ""
            };
            this.$stage.css(css);
          }
        }, {
          filter: ["width", "items", "settings"],
          run: function(cache) {
            var iterator = this._coordinates.length, grid = !this.settings.autoWidth, items = this.$stage.children();
            if (grid && cache.items.merge) {
              while (iterator--) {
                cache.css.width = this._widths[this.relative(iterator)];
                items.eq(iterator).css(cache.css);
              }
            } else if (grid) {
              cache.css.width = cache.items.width;
              items.css(cache.css);
            }
          }
        }, {
          filter: ["items"],
          run: function() {
            this._coordinates.length < 1 && this.$stage.removeAttr("style");
          }
        }, {
          filter: ["width", "items", "settings"],
          run: function(cache) {
            cache.current = cache.current ? this.$stage.children().index(cache.current) : 0;
            cache.current = Math.max(this.minimum(), Math.min(this.maximum(), cache.current));
            this.reset(cache.current);
          }
        }, {
          filter: ["position"],
          run: function() {
            this.animate(this.coordinates(this._current));
          }
        }, {
          filter: ["width", "position", "items", "settings"],
          run: function() {
            var rtl = this.settings.rtl ? 1 : -1, padding = this.settings.stagePadding * 2, begin = this.coordinates(this.current()) + padding, end = begin + this.width() * rtl, inner, outer, matches = [], i, n;
            for (i = 0, n = this._coordinates.length; i < n; i++) {
              inner = this._coordinates[i - 1] || 0;
              outer = Math.abs(this._coordinates[i]) + padding * rtl;
              if (this.op(inner, "<=", begin) && this.op(inner, ">", end) || this.op(outer, "<", begin) && this.op(outer, ">", end)) {
                matches.push(i);
              }
            }
            this.$stage.children(".active").removeClass("active");
            this.$stage.children(":eq(" + matches.join("), :eq(") + ")").addClass("active");
            this.$stage.children(".center").removeClass("center");
            if (this.settings.center) {
              this.$stage.children().eq(this.current()).addClass("center");
            }
          }
        }];
        Owl.prototype.initializeStage = function() {
          this.$stage = this.$element.find("." + this.settings.stageClass);
          if (this.$stage.length) {
            return;
          }
          this.$element.addClass(this.options.loadingClass);
          this.$stage = $2("<" + this.settings.stageElement + ">", {
            "class": this.settings.stageClass
          }).wrap($2("<div/>", {
            "class": this.settings.stageOuterClass
          }));
          this.$element.append(this.$stage.parent());
        };
        Owl.prototype.initializeItems = function() {
          var $items = this.$element.find(".owl-item");
          if ($items.length) {
            this._items = $items.get().map(function(item) {
              return $2(item);
            });
            this._mergers = this._items.map(function() {
              return 1;
            });
            this.refresh();
            return;
          }
          this.replace(this.$element.children().not(this.$stage.parent()));
          if (this.isVisible()) {
            this.refresh();
          } else {
            this.invalidate("width");
          }
          this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass);
        };
        Owl.prototype.initialize = function() {
          this.enter("initializing");
          this.trigger("initialize");
          this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl);
          if (this.settings.autoWidth && !this.is("pre-loading")) {
            var imgs, nestedSelector, width;
            imgs = this.$element.find("img");
            nestedSelector = this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector : undefined;
            width = this.$element.children(nestedSelector).width();
            if (imgs.length && width <= 0) {
              this.preloadAutoWidthImages(imgs);
            }
          }
          this.initializeStage();
          this.initializeItems();
          this.registerEventHandlers();
          this.leave("initializing");
          this.trigger("initialized");
        };
        Owl.prototype.isVisible = function() {
          return this.settings.checkVisibility ? this.$element.is(":visible") : true;
        };
        Owl.prototype.setup = function() {
          var viewport = this.viewport(), overwrites = this.options.responsive, match = -1, settings = null;
          if (!overwrites) {
            settings = $2.extend({}, this.options);
          } else {
            $2.each(overwrites, function(breakpoint) {
              if (breakpoint <= viewport && breakpoint > match) {
                match = Number(breakpoint);
              }
            });
            settings = $2.extend({}, this.options, overwrites[match]);
            if (typeof settings.stagePadding === "function") {
              settings.stagePadding = settings.stagePadding();
            }
            delete settings.responsive;
            if (settings.responsiveClass) {
              this.$element.attr(
                "class",
                this.$element.attr("class").replace(new RegExp("(" + this.options.responsiveClass + "-)\\S+\\s", "g"), "$1" + match)
              );
            }
          }
          this.trigger("change", { property: { name: "settings", value: settings } });
          this._breakpoint = match;
          this.settings = settings;
          this.invalidate("settings");
          this.trigger("changed", { property: { name: "settings", value: this.settings } });
        };
        Owl.prototype.optionsLogic = function() {
          if (this.settings.autoWidth) {
            this.settings.stagePadding = false;
            this.settings.merge = false;
          }
        };
        Owl.prototype.prepare = function(item) {
          var event = this.trigger("prepare", { content: item });
          if (!event.data) {
            event.data = $2("<" + this.settings.itemElement + "/>").addClass(this.options.itemClass).append(item);
          }
          this.trigger("prepared", { content: event.data });
          return event.data;
        };
        Owl.prototype.update = function() {
          var i = 0, n = this._pipe.length, filter = $2.proxy(function(p) {
            return this[p];
          }, this._invalidated), cache = {};
          while (i < n) {
            if (this._invalidated.all || $2.grep(this._pipe[i].filter, filter).length > 0) {
              this._pipe[i].run(cache);
            }
            i++;
          }
          this._invalidated = {};
          !this.is("valid") && this.enter("valid");
        };
        Owl.prototype.width = function(dimension) {
          dimension = dimension || Owl.Width.Default;
          switch (dimension) {
            case Owl.Width.Inner:
            case Owl.Width.Outer:
              return this._width;
            default:
              return this._width - this.settings.stagePadding * 2 + this.settings.margin;
          }
        };
        Owl.prototype.refresh = function() {
          this.enter("refreshing");
          this.trigger("refresh");
          this.setup();
          this.optionsLogic();
          this.$element.addClass(this.options.refreshClass);
          this.update();
          this.$element.removeClass(this.options.refreshClass);
          this.leave("refreshing");
          this.trigger("refreshed");
        };
        Owl.prototype.onThrottledResize = function() {
          window2.clearTimeout(this.resizeTimer);
          this.resizeTimer = window2.setTimeout(this._handlers.onResize, this.settings.responsiveRefreshRate);
        };
        Owl.prototype.onResize = function() {
          if (!this._items.length) {
            return false;
          }
          if (this._width === this.$element.width()) {
            return false;
          }
          if (!this.isVisible()) {
            return false;
          }
          this.enter("resizing");
          if (this.trigger("resize").isDefaultPrevented()) {
            this.leave("resizing");
            return false;
          }
          this.invalidate("width");
          this.refresh();
          this.leave("resizing");
          this.trigger("resized");
        };
        Owl.prototype.registerEventHandlers = function() {
          if ($2.support.transition) {
            this.$stage.on($2.support.transition.end + ".owl.core", $2.proxy(this.onTransitionEnd, this));
          }
          if (this.settings.responsive !== false) {
            this.on(window2, "resize", this._handlers.onThrottledResize);
          }
          if (this.settings.mouseDrag) {
            this.$element.addClass(this.options.dragClass);
            this.$stage.on("mousedown.owl.core", $2.proxy(this.onDragStart, this));
            this.$stage.on("dragstart.owl.core selectstart.owl.core", function() {
              return false;
            });
          }
          if (this.settings.touchDrag) {
            this.$stage.on("touchstart.owl.core", $2.proxy(this.onDragStart, this));
            this.$stage.on("touchcancel.owl.core", $2.proxy(this.onDragEnd, this));
          }
        };
        Owl.prototype.onDragStart = function(event) {
          var stage = null;
          if (event.which === 3) {
            return;
          }
          if ($2.support.transform) {
            stage = this.$stage.css("transform").replace(/.*\(|\)| /g, "").split(",");
            stage = {
              x: stage[stage.length === 16 ? 12 : 4],
              y: stage[stage.length === 16 ? 13 : 5]
            };
          } else {
            stage = this.$stage.position();
            stage = {
              x: this.settings.rtl ? stage.left + this.$stage.width() - this.width() + this.settings.margin : stage.left,
              y: stage.top
            };
          }
          if (this.is("animating")) {
            $2.support.transform ? this.animate(stage.x) : this.$stage.stop();
            this.invalidate("position");
          }
          this.$element.toggleClass(this.options.grabClass, event.type === "mousedown");
          this.speed(0);
          this._drag.time = (/* @__PURE__ */ new Date()).getTime();
          this._drag.target = $2(event.target);
          this._drag.stage.start = stage;
          this._drag.stage.current = stage;
          this._drag.pointer = this.pointer(event);
          $2(document2).on("mouseup.owl.core touchend.owl.core", $2.proxy(this.onDragEnd, this));
          $2(document2).one("mousemove.owl.core touchmove.owl.core", $2.proxy(function(event2) {
            var delta = this.difference(this._drag.pointer, this.pointer(event2));
            $2(document2).on("mousemove.owl.core touchmove.owl.core", $2.proxy(this.onDragMove, this));
            if (Math.abs(delta.x) < Math.abs(delta.y) && this.is("valid")) {
              return;
            }
            event2.preventDefault();
            this.enter("dragging");
            this.trigger("drag");
          }, this));
        };
        Owl.prototype.onDragMove = function(event) {
          var minimum = null, maximum = null, pull = null, delta = this.difference(this._drag.pointer, this.pointer(event)), stage = this.difference(this._drag.stage.start, delta);
          if (!this.is("dragging")) {
            return;
          }
          event.preventDefault();
          if (this.settings.loop) {
            minimum = this.coordinates(this.minimum());
            maximum = this.coordinates(this.maximum() + 1) - minimum;
            stage.x = ((stage.x - minimum) % maximum + maximum) % maximum + minimum;
          } else {
            minimum = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum());
            maximum = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum());
            pull = this.settings.pullDrag ? -1 * delta.x / 5 : 0;
            stage.x = Math.max(Math.min(stage.x, minimum + pull), maximum + pull);
          }
          this._drag.stage.current = stage;
          this.animate(stage.x);
        };
        Owl.prototype.onDragEnd = function(event) {
          var delta = this.difference(this._drag.pointer, this.pointer(event)), stage = this._drag.stage.current, direction = delta.x > 0 ^ this.settings.rtl ? "left" : "right";
          $2(document2).off(".owl.core");
          this.$element.removeClass(this.options.grabClass);
          if (delta.x !== 0 && this.is("dragging") || !this.is("valid")) {
            this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed);
            this.current(this.closest(stage.x, delta.x !== 0 ? direction : this._drag.direction));
            this.invalidate("position");
            this.update();
            this._drag.direction = direction;
            if (Math.abs(delta.x) > 3 || (/* @__PURE__ */ new Date()).getTime() - this._drag.time > 300) {
              this._drag.target.one("click.owl.core", function() {
                return false;
              });
            }
          }
          if (!this.is("dragging")) {
            return;
          }
          this.leave("dragging");
          this.trigger("dragged");
        };
        Owl.prototype.closest = function(coordinate, direction) {
          var position = -1, pull = 30, width = this.width(), coordinates = this.coordinates();
          if (!this.settings.freeDrag) {
            $2.each(coordinates, $2.proxy(function(index, value) {
              if (direction === "left" && coordinate > value - pull && coordinate < value + pull) {
                position = index;
              } else if (direction === "right" && coordinate > value - width - pull && coordinate < value - width + pull) {
                position = index + 1;
              } else if (this.op(coordinate, "<", value) && this.op(coordinate, ">", coordinates[index + 1] !== undefined ? coordinates[index + 1] : value - width)) {
                position = direction === "left" ? index + 1 : index;
              }
              return position === -1;
            }, this));
          }
          if (!this.settings.loop) {
            if (this.op(coordinate, ">", coordinates[this.minimum()])) {
              position = coordinate = this.minimum();
            } else if (this.op(coordinate, "<", coordinates[this.maximum()])) {
              position = coordinate = this.maximum();
            }
          }
          return position;
        };
        Owl.prototype.animate = function(coordinate) {
          var animate = this.speed() > 0;
          this.is("animating") && this.onTransitionEnd();
          if (animate) {
            this.enter("animating");
            this.trigger("translate");
          }
          if ($2.support.transform3d && $2.support.transition) {
            this.$stage.css({
              transform: "translate3d(" + coordinate + "px,0px,0px)",
              transition: this.speed() / 1e3 + "s" + (this.settings.slideTransition ? " " + this.settings.slideTransition : "")
            });
          } else if (animate) {
            this.$stage.animate({
              left: coordinate + "px"
            }, this.speed(), this.settings.fallbackEasing, $2.proxy(this.onTransitionEnd, this));
          } else {
            this.$stage.css({
              left: coordinate + "px"
            });
          }
        };
        Owl.prototype.is = function(state) {
          return this._states.current[state] && this._states.current[state] > 0;
        };
        Owl.prototype.current = function(position) {
          if (position === undefined) {
            return this._current;
          }
          if (this._items.length === 0) {
            return undefined;
          }
          position = this.normalize(position);
          if (this._current !== position) {
            var event = this.trigger("change", { property: { name: "position", value: position } });
            if (event.data !== undefined) {
              position = this.normalize(event.data);
            }
            this._current = position;
            this.invalidate("position");
            this.trigger("changed", { property: { name: "position", value: this._current } });
          }
          return this._current;
        };
        Owl.prototype.invalidate = function(part) {
          if ($2.type(part) === "string") {
            this._invalidated[part] = true;
            this.is("valid") && this.leave("valid");
          }
          return $2.map(this._invalidated, function(v, i) {
            return i;
          });
        };
        Owl.prototype.reset = function(position) {
          position = this.normalize(position);
          if (position === undefined) {
            return;
          }
          this._speed = 0;
          this._current = position;
          this.suppress(["translate", "translated"]);
          this.animate(this.coordinates(position));
          this.release(["translate", "translated"]);
        };
        Owl.prototype.normalize = function(position, relative) {
          var n = this._items.length, m = relative ? 0 : this._clones.length;
          if (!this.isNumeric(position) || n < 1) {
            position = undefined;
          } else if (position < 0 || position >= n + m) {
            position = ((position - m / 2) % n + n) % n + m / 2;
          }
          return position;
        };
        Owl.prototype.relative = function(position) {
          position -= this._clones.length / 2;
          return this.normalize(position, true);
        };
        Owl.prototype.maximum = function(relative) {
          var settings = this.settings, maximum = this._coordinates.length, iterator, reciprocalItemsWidth, elementWidth;
          if (settings.loop) {
            maximum = this._clones.length / 2 + this._items.length - 1;
          } else if (settings.autoWidth || settings.merge) {
            iterator = this._items.length;
            if (iterator) {
              reciprocalItemsWidth = this._items[--iterator].width();
              elementWidth = this.$element.width();
              while (iterator--) {
                reciprocalItemsWidth += this._items[iterator].width() + this.settings.margin;
                if (reciprocalItemsWidth > elementWidth) {
                  break;
                }
              }
            }
            maximum = iterator + 1;
          } else if (settings.center) {
            maximum = this._items.length - 1;
          } else {
            maximum = this._items.length - settings.items;
          }
          if (relative) {
            maximum -= this._clones.length / 2;
          }
          return Math.max(maximum, 0);
        };
        Owl.prototype.minimum = function(relative) {
          return relative ? 0 : this._clones.length / 2;
        };
        Owl.prototype.items = function(position) {
          if (position === undefined) {
            return this._items.slice();
          }
          position = this.normalize(position, true);
          return this._items[position];
        };
        Owl.prototype.mergers = function(position) {
          if (position === undefined) {
            return this._mergers.slice();
          }
          position = this.normalize(position, true);
          return this._mergers[position];
        };
        Owl.prototype.clones = function(position) {
          var odd = this._clones.length / 2, even = odd + this._items.length, map = function(index) {
            return index % 2 === 0 ? even + index / 2 : odd - (index + 1) / 2;
          };
          if (position === undefined) {
            return $2.map(this._clones, function(v, i) {
              return map(i);
            });
          }
          return $2.map(this._clones, function(v, i) {
            return v === position ? map(i) : null;
          });
        };
        Owl.prototype.speed = function(speed) {
          if (speed !== undefined) {
            this._speed = speed;
          }
          return this._speed;
        };
        Owl.prototype.coordinates = function(position) {
          var multiplier = 1, newPosition = position - 1, coordinate;
          if (position === undefined) {
            return $2.map(this._coordinates, $2.proxy(function(coordinate2, index) {
              return this.coordinates(index);
            }, this));
          }
          if (this.settings.center) {
            if (this.settings.rtl) {
              multiplier = -1;
              newPosition = position + 1;
            }
            coordinate = this._coordinates[position];
            coordinate += (this.width() - coordinate + (this._coordinates[newPosition] || 0)) / 2 * multiplier;
          } else {
            coordinate = this._coordinates[newPosition] || 0;
          }
          coordinate = Math.ceil(coordinate);
          return coordinate;
        };
        Owl.prototype.duration = function(from, to, factor) {
          if (factor === 0) {
            return 0;
          }
          return Math.min(Math.max(Math.abs(to - from), 1), 6) * Math.abs(factor || this.settings.smartSpeed);
        };
        Owl.prototype.to = function(position, speed) {
          var current = this.current(), revert = null, distance = position - this.relative(current), direction = (distance > 0) - (distance < 0), items = this._items.length, minimum = this.minimum(), maximum = this.maximum();
          if (this.settings.loop) {
            if (!this.settings.rewind && Math.abs(distance) > items / 2) {
              distance += direction * -1 * items;
            }
            position = current + distance;
            revert = ((position - minimum) % items + items) % items + minimum;
            if (revert !== position && revert - distance <= maximum && revert - distance > 0) {
              current = revert - distance;
              position = revert;
              this.reset(current);
            }
          } else if (this.settings.rewind) {
            maximum += 1;
            position = (position % maximum + maximum) % maximum;
          } else {
            position = Math.max(minimum, Math.min(maximum, position));
          }
          this.speed(this.duration(current, position, speed));
          this.current(position);
          if (this.isVisible()) {
            this.update();
          }
        };
        Owl.prototype.next = function(speed) {
          speed = speed || false;
          this.to(this.relative(this.current()) + 1, speed);
        };
        Owl.prototype.prev = function(speed) {
          speed = speed || false;
          this.to(this.relative(this.current()) - 1, speed);
        };
        Owl.prototype.onTransitionEnd = function(event) {
          if (event !== undefined) {
            event.stopPropagation();
            if ((event.target || event.srcElement || event.originalTarget) !== this.$stage.get(0)) {
              return false;
            }
          }
          this.leave("animating");
          this.trigger("translated");
        };
        Owl.prototype.viewport = function() {
          var width;
          if (this.options.responsiveBaseElement !== window2) {
            width = $2(this.options.responsiveBaseElement).width();
          } else if (window2.innerWidth) {
            width = window2.innerWidth;
          } else if (document2.documentElement && document2.documentElement.clientWidth) {
            width = document2.documentElement.clientWidth;
          } else {
            console.warn("Can not detect viewport width.");
          }
          return width;
        };
        Owl.prototype.replace = function(content) {
          this.$stage.empty();
          this._items = [];
          if (content) {
            content = content instanceof jQuery ? content : $2(content);
          }
          if (this.settings.nestedItemSelector) {
            content = content.find("." + this.settings.nestedItemSelector);
          }
          content.filter(function() {
            return this.nodeType === 1;
          }).each($2.proxy(function(index, item) {
            item = this.prepare(item);
            this.$stage.append(item);
            this._items.push(item);
            this._mergers.push(item.find("[data-merge]").addBack("[data-merge]").attr("data-merge") * 1 || 1);
          }, this));
          this.reset(this.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0);
          this.invalidate("items");
        };
        Owl.prototype.add = function(content, position) {
          var current = this.relative(this._current);
          position = position === undefined ? this._items.length : this.normalize(position, true);
          content = content instanceof jQuery ? content : $2(content);
          this.trigger("add", { content, position });
          content = this.prepare(content);
          if (this._items.length === 0 || position === this._items.length) {
            this._items.length === 0 && this.$stage.append(content);
            this._items.length !== 0 && this._items[position - 1].after(content);
            this._items.push(content);
            this._mergers.push(content.find("[data-merge]").addBack("[data-merge]").attr("data-merge") * 1 || 1);
          } else {
            this._items[position].before(content);
            this._items.splice(position, 0, content);
            this._mergers.splice(position, 0, content.find("[data-merge]").addBack("[data-merge]").attr("data-merge") * 1 || 1);
          }
          this._items[current] && this.reset(this._items[current].index());
          this.invalidate("items");
          this.trigger("added", { content, position });
        };
        Owl.prototype.remove = function(position) {
          position = this.normalize(position, true);
          if (position === undefined) {
            return;
          }
          this.trigger("remove", { content: this._items[position], position });
          this._items[position].remove();
          this._items.splice(position, 1);
          this._mergers.splice(position, 1);
          this.invalidate("items");
          this.trigger("removed", { content: null, position });
        };
        Owl.prototype.preloadAutoWidthImages = function(images) {
          images.each($2.proxy(function(i, element) {
            this.enter("pre-loading");
            element = $2(element);
            $2(new Image()).one("load", $2.proxy(function(e) {
              element.attr("src", e.target.src);
              element.css("opacity", 1);
              this.leave("pre-loading");
              !this.is("pre-loading") && !this.is("initializing") && this.refresh();
            }, this)).attr("src", element.attr("src") || element.attr("data-src") || element.attr("data-src-retina"));
          }, this));
        };
        Owl.prototype.destroy = function() {
          this.$element.off(".owl.core");
          this.$stage.off(".owl.core");
          $2(document2).off(".owl.core");
          if (this.settings.responsive !== false) {
            window2.clearTimeout(this.resizeTimer);
            this.off(window2, "resize", this._handlers.onThrottledResize);
          }
          for (var i in this._plugins) {
            this._plugins[i].destroy();
          }
          this.$stage.children(".cloned").remove();
          this.$stage.unwrap();
          this.$stage.children().contents().unwrap();
          this.$stage.children().unwrap();
          this.$stage.remove();
          this.$element.removeClass(this.options.refreshClass).removeClass(this.options.loadingClass).removeClass(this.options.loadedClass).removeClass(this.options.rtlClass).removeClass(this.options.dragClass).removeClass(this.options.grabClass).attr("class", this.$element.attr("class").replace(new RegExp(this.options.responsiveClass + "-\\S+\\s", "g"), "")).removeData("owl.carousel");
        };
        Owl.prototype.op = function(a, o, b) {
          var rtl = this.settings.rtl;
          switch (o) {
            case "<":
              return rtl ? a > b : a < b;
            case ">":
              return rtl ? a < b : a > b;
            case ">=":
              return rtl ? a <= b : a >= b;
            case "<=":
              return rtl ? a >= b : a <= b;
            default:
              break;
          }
        };
        Owl.prototype.on = function(element, event, listener, capture) {
          if (element.addEventListener) {
            element.addEventListener(event, listener, capture);
          } else if (element.attachEvent) {
            element.attachEvent("on" + event, listener);
          }
        };
        Owl.prototype.off = function(element, event, listener, capture) {
          if (element.removeEventListener) {
            element.removeEventListener(event, listener, capture);
          } else if (element.detachEvent) {
            element.detachEvent("on" + event, listener);
          }
        };
        Owl.prototype.trigger = function(name, data, namespace, state, enter) {
          var status = {
            item: { count: this._items.length, index: this.current() }
          }, handler = $2.camelCase(
            $2.grep(["on", name, namespace], function(v) {
              return v;
            }).join("-").toLowerCase()
          ), event = $2.Event(
            [name, "owl", namespace || "carousel"].join(".").toLowerCase(),
            $2.extend({ relatedTarget: this }, status, data)
          );
          if (!this._supress[name]) {
            $2.each(this._plugins, function(name2, plugin) {
              if (plugin.onTrigger) {
                plugin.onTrigger(event);
              }
            });
            this.register({ type: Owl.Type.Event, name });
            this.$element.trigger(event);
            if (this.settings && typeof this.settings[handler] === "function") {
              this.settings[handler].call(this, event);
            }
          }
          return event;
        };
        Owl.prototype.enter = function(name) {
          $2.each([name].concat(this._states.tags[name] || []), $2.proxy(function(i, name2) {
            if (this._states.current[name2] === undefined) {
              this._states.current[name2] = 0;
            }
            this._states.current[name2]++;
          }, this));
        };
        Owl.prototype.leave = function(name) {
          $2.each([name].concat(this._states.tags[name] || []), $2.proxy(function(i, name2) {
            this._states.current[name2]--;
          }, this));
        };
        Owl.prototype.register = function(object) {
          if (object.type === Owl.Type.Event) {
            if (!$2.event.special[object.name]) {
              $2.event.special[object.name] = {};
            }
            if (!$2.event.special[object.name].owl) {
              var _default = $2.event.special[object.name]._default;
              $2.event.special[object.name]._default = function(e) {
                if (_default && _default.apply && (!e.namespace || e.namespace.indexOf("owl") === -1)) {
                  return _default.apply(this, arguments);
                }
                return e.namespace && e.namespace.indexOf("owl") > -1;
              };
              $2.event.special[object.name].owl = true;
            }
          } else if (object.type === Owl.Type.State) {
            if (!this._states.tags[object.name]) {
              this._states.tags[object.name] = object.tags;
            } else {
              this._states.tags[object.name] = this._states.tags[object.name].concat(object.tags);
            }
            this._states.tags[object.name] = $2.grep(this._states.tags[object.name], $2.proxy(function(tag, i) {
              return $2.inArray(tag, this._states.tags[object.name]) === i;
            }, this));
          }
        };
        Owl.prototype.suppress = function(events) {
          $2.each(events, $2.proxy(function(index, event) {
            this._supress[event] = true;
          }, this));
        };
        Owl.prototype.release = function(events) {
          $2.each(events, $2.proxy(function(index, event) {
            delete this._supress[event];
          }, this));
        };
        Owl.prototype.pointer = function(event) {
          var result = { x: null, y: null };
          event = event.originalEvent || event || window2.event;
          event = event.touches && event.touches.length ? event.touches[0] : event.changedTouches && event.changedTouches.length ? event.changedTouches[0] : event;
          if (event.pageX) {
            result.x = event.pageX;
            result.y = event.pageY;
          } else {
            result.x = event.clientX;
            result.y = event.clientY;
          }
          return result;
        };
        Owl.prototype.isNumeric = function(number) {
          return !isNaN(parseFloat(number));
        };
        Owl.prototype.difference = function(first, second) {
          return {
            x: first.x - second.x,
            y: first.y - second.y
          };
        };
        $2.fn.owlCarousel = function(option) {
          var args = Array.prototype.slice.call(arguments, 1);
          return this.each(function() {
            var $this = $2(this), data = $this.data("owl.carousel");
            if (!data) {
              data = new Owl(this, typeof option == "object" && option);
              $this.data("owl.carousel", data);
              $2.each([
                "next",
                "prev",
                "to",
                "destroy",
                "refresh",
                "replace",
                "add",
                "remove"
              ], function(i, event) {
                data.register({ type: Owl.Type.Event, name: event });
                data.$element.on(event + ".owl.carousel.core", $2.proxy(function(e) {
                  if (e.namespace && e.relatedTarget !== this) {
                    this.suppress([event]);
                    data[event].apply(this, [].slice.call(arguments, 1));
                    this.release([event]);
                  }
                }, data));
              });
            }
            if (typeof option == "string" && option.charAt(0) !== "_") {
              data[option].apply(data, args);
            }
          });
        };
        $2.fn.owlCarousel.Constructor = Owl;
      })(window.Zepto || window.jQuery, window, document);
      (function($2, window2, document2, undefined) {
        var AutoRefresh = function(carousel) {
          this._core = carousel;
          this._interval = null;
          this._visible = null;
          this._handlers = {
            "initialized.owl.carousel": $2.proxy(function(e) {
              if (e.namespace && this._core.settings.autoRefresh) {
                this.watch();
              }
            }, this)
          };
          this._core.options = $2.extend({}, AutoRefresh.Defaults, this._core.options);
          this._core.$element.on(this._handlers);
        };
        AutoRefresh.Defaults = {
          autoRefresh: true,
          autoRefreshInterval: 500
        };
        AutoRefresh.prototype.watch = function() {
          if (this._interval) {
            return;
          }
          this._visible = this._core.isVisible();
          this._interval = window2.setInterval($2.proxy(this.refresh, this), this._core.settings.autoRefreshInterval);
        };
        AutoRefresh.prototype.refresh = function() {
          if (this._core.isVisible() === this._visible) {
            return;
          }
          this._visible = !this._visible;
          this._core.$element.toggleClass("owl-hidden", !this._visible);
          this._visible && (this._core.invalidate("width") && this._core.refresh());
        };
        AutoRefresh.prototype.destroy = function() {
          var handler, property;
          window2.clearInterval(this._interval);
          for (handler in this._handlers) {
            this._core.$element.off(handler, this._handlers[handler]);
          }
          for (property in Object.getOwnPropertyNames(this)) {
            typeof this[property] != "function" && (this[property] = null);
          }
        };
        $2.fn.owlCarousel.Constructor.Plugins.AutoRefresh = AutoRefresh;
      })(window.Zepto || window.jQuery, window, document);
      (function($2, window2, document2, undefined) {
        var Lazy = function(carousel) {
          this._core = carousel;
          this._loaded = [];
          this._handlers = {
            "initialized.owl.carousel change.owl.carousel resized.owl.carousel": $2.proxy(function(e) {
              if (!e.namespace) {
                return;
              }
              if (!this._core.settings || !this._core.settings.lazyLoad) {
                return;
              }
              if (e.property && e.property.name == "position" || e.type == "initialized") {
                var settings = this._core.settings, n = settings.center && Math.ceil(settings.items / 2) || settings.items, i = settings.center && n * -1 || 0, position = (e.property && e.property.value !== undefined ? e.property.value : this._core.current()) + i, clones = this._core.clones().length, load = $2.proxy(function(i2, v) {
                  this.load(v);
                }, this);
                if (settings.lazyLoadEager > 0) {
                  n += settings.lazyLoadEager;
                  if (settings.loop) {
                    position -= settings.lazyLoadEager;
                    n++;
                  }
                }
                while (i++ < n) {
                  this.load(clones / 2 + this._core.relative(position));
                  clones && $2.each(this._core.clones(this._core.relative(position)), load);
                  position++;
                }
              }
            }, this)
          };
          this._core.options = $2.extend({}, Lazy.Defaults, this._core.options);
          this._core.$element.on(this._handlers);
        };
        Lazy.Defaults = {
          lazyLoad: false,
          lazyLoadEager: 0
        };
        Lazy.prototype.load = function(position) {
          var $item = this._core.$stage.children().eq(position), $elements = $item && $item.find(".owl-lazy");
          if (!$elements || $2.inArray($item.get(0), this._loaded) > -1) {
            return;
          }
          $elements.each($2.proxy(function(index, element) {
            var $element = $2(element), image, url = window2.devicePixelRatio > 1 && $element.attr("data-src-retina") || $element.attr("data-src") || $element.attr("data-srcset");
            this._core.trigger("load", { element: $element, url }, "lazy");
            if ($element.is("img")) {
              $element.one("load.owl.lazy", $2.proxy(function() {
                $element.css("opacity", 1);
                this._core.trigger("loaded", { element: $element, url }, "lazy");
              }, this)).attr("src", url);
            } else if ($element.is("source")) {
              $element.one("load.owl.lazy", $2.proxy(function() {
                this._core.trigger("loaded", { element: $element, url }, "lazy");
              }, this)).attr("srcset", url);
            } else {
              image = new Image();
              image.onload = $2.proxy(function() {
                $element.css({
                  "background-image": 'url("' + url + '")',
                  "opacity": "1"
                });
                this._core.trigger("loaded", { element: $element, url }, "lazy");
              }, this);
              image.src = url;
            }
          }, this));
          this._loaded.push($item.get(0));
        };
        Lazy.prototype.destroy = function() {
          var handler, property;
          for (handler in this.handlers) {
            this._core.$element.off(handler, this.handlers[handler]);
          }
          for (property in Object.getOwnPropertyNames(this)) {
            typeof this[property] != "function" && (this[property] = null);
          }
        };
        $2.fn.owlCarousel.Constructor.Plugins.Lazy = Lazy;
      })(window.Zepto || window.jQuery, window, document);
      (function($2, window2, document2, undefined) {
        var AutoHeight = function(carousel) {
          this._core = carousel;
          this._previousHeight = null;
          this._handlers = {
            "initialized.owl.carousel refreshed.owl.carousel": $2.proxy(function(e) {
              if (e.namespace && this._core.settings.autoHeight) {
                this.update();
              }
            }, this),
            "changed.owl.carousel": $2.proxy(function(e) {
              if (e.namespace && this._core.settings.autoHeight && e.property.name === "position") {
                this.update();
              }
            }, this),
            "loaded.owl.lazy": $2.proxy(function(e) {
              if (e.namespace && this._core.settings.autoHeight && e.element.closest("." + this._core.settings.itemClass).index() === this._core.current()) {
                this.update();
              }
            }, this)
          };
          this._core.options = $2.extend({}, AutoHeight.Defaults, this._core.options);
          this._core.$element.on(this._handlers);
          this._intervalId = null;
          var refThis = this;
          $2(window2).on("load", function() {
            if (refThis._core.settings.autoHeight) {
              refThis.update();
            }
          });
          $2(window2).resize(function() {
            if (refThis._core.settings.autoHeight) {
              if (refThis._intervalId != null) {
                clearTimeout(refThis._intervalId);
              }
              refThis._intervalId = setTimeout(function() {
                refThis.update();
              }, 250);
            }
          });
        };
        AutoHeight.Defaults = {
          autoHeight: false,
          autoHeightClass: "owl-height"
        };
        AutoHeight.prototype.update = function() {
          var start = this._core._current, end = start + this._core.settings.items, lazyLoadEnabled = this._core.settings.lazyLoad, visible = this._core.$stage.children().toArray().slice(start, end), heights = [], maxheight = 0;
          $2.each(visible, function(index, item) {
            heights.push($2(item).height());
          });
          maxheight = Math.max.apply(null, heights);
          if (maxheight <= 1 && lazyLoadEnabled && this._previousHeight) {
            maxheight = this._previousHeight;
          }
          this._previousHeight = maxheight;
          this._core.$stage.parent().height(maxheight).addClass(this._core.settings.autoHeightClass);
        };
        AutoHeight.prototype.destroy = function() {
          var handler, property;
          for (handler in this._handlers) {
            this._core.$element.off(handler, this._handlers[handler]);
          }
          for (property in Object.getOwnPropertyNames(this)) {
            typeof this[property] !== "function" && (this[property] = null);
          }
        };
        $2.fn.owlCarousel.Constructor.Plugins.AutoHeight = AutoHeight;
      })(window.Zepto || window.jQuery, window, document);
      (function($2, window2, document2, undefined) {
        var Video = function(carousel) {
          this._core = carousel;
          this._videos = {};
          this._playing = null;
          this._handlers = {
            "initialized.owl.carousel": $2.proxy(function(e) {
              if (e.namespace) {
                this._core.register({ type: "state", name: "playing", tags: ["interacting"] });
              }
            }, this),
            "resize.owl.carousel": $2.proxy(function(e) {
              if (e.namespace && this._core.settings.video && this.isInFullScreen()) {
                e.preventDefault();
              }
            }, this),
            "refreshed.owl.carousel": $2.proxy(function(e) {
              if (e.namespace && this._core.is("resizing")) {
                this._core.$stage.find(".cloned .owl-video-frame").remove();
              }
            }, this),
            "changed.owl.carousel": $2.proxy(function(e) {
              if (e.namespace && e.property.name === "position" && this._playing) {
                this.stop();
              }
            }, this),
            "prepared.owl.carousel": $2.proxy(function(e) {
              if (!e.namespace) {
                return;
              }
              var $element = $2(e.content).find(".owl-video");
              if ($element.length) {
                $element.css("display", "none");
                this.fetch($element, $2(e.content));
              }
            }, this)
          };
          this._core.options = $2.extend({}, Video.Defaults, this._core.options);
          this._core.$element.on(this._handlers);
          this._core.$element.on("click.owl.video", ".owl-video-play-icon", $2.proxy(function(e) {
            this.play(e);
          }, this));
        };
        Video.Defaults = {
          video: false,
          videoHeight: false,
          videoWidth: false
        };
        Video.prototype.fetch = function(target, item) {
          var type = function() {
            if (target.attr("data-vimeo-id")) {
              return "vimeo";
            } else if (target.attr("data-vzaar-id")) {
              return "vzaar";
            } else {
              return "youtube";
            }
          }(), id = target.attr("data-vimeo-id") || target.attr("data-youtube-id") || target.attr("data-vzaar-id"), width = target.attr("data-width") || this._core.settings.videoWidth, height = target.attr("data-height") || this._core.settings.videoHeight, url = target.attr("href");
          if (url) {
            id = url.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com|be\-nocookie\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/);
            if (id[3].indexOf("youtu") > -1) {
              type = "youtube";
            } else if (id[3].indexOf("vimeo") > -1) {
              type = "vimeo";
            } else if (id[3].indexOf("vzaar") > -1) {
              type = "vzaar";
            } else {
              throw new Error("Video URL not supported.");
            }
            id = id[6];
          } else {
            throw new Error("Missing video URL.");
          }
          this._videos[url] = {
            type,
            id,
            width,
            height
          };
          item.attr("data-video", url);
          this.thumbnail(target, this._videos[url]);
        };
        Video.prototype.thumbnail = function(target, video) {
          var tnLink, icon, path, dimensions = video.width && video.height ? "width:" + video.width + "px;height:" + video.height + "px;" : "", customTn = target.find("img"), srcType = "src", lazyClass = "", settings = this._core.settings, create = function(path2) {
            icon = '<div class="owl-video-play-icon"></div>';
            if (settings.lazyLoad) {
              tnLink = $2("<div/>", {
                "class": "owl-video-tn " + lazyClass,
                "srcType": path2
              });
            } else {
              tnLink = $2("<div/>", {
                "class": "owl-video-tn",
                "style": "opacity:1;background-image:url(" + path2 + ")"
              });
            }
            target.after(tnLink);
            target.after(icon);
          };
          target.wrap($2("<div/>", {
            "class": "owl-video-wrapper",
            "style": dimensions
          }));
          if (this._core.settings.lazyLoad) {
            srcType = "data-src";
            lazyClass = "owl-lazy";
          }
          if (customTn.length) {
            create(customTn.attr(srcType));
            customTn.remove();
            return false;
          }
          if (video.type === "youtube") {
            path = "//img.youtube.com/vi/" + video.id + "/hqdefault.jpg";
            create(path);
          } else if (video.type === "vimeo") {
            $2.ajax({
              type: "GET",
              url: "//vimeo.com/api/v2/video/" + video.id + ".json",
              jsonp: "callback",
              dataType: "jsonp",
              success: function(data) {
                path = data[0].thumbnail_large;
                create(path);
              }
            });
          } else if (video.type === "vzaar") {
            $2.ajax({
              type: "GET",
              url: "//vzaar.com/api/videos/" + video.id + ".json",
              jsonp: "callback",
              dataType: "jsonp",
              success: function(data) {
                path = data.framegrab_url;
                create(path);
              }
            });
          }
        };
        Video.prototype.stop = function() {
          this._core.trigger("stop", null, "video");
          this._playing.find(".owl-video-frame").remove();
          this._playing.removeClass("owl-video-playing");
          this._playing = null;
          this._core.leave("playing");
          this._core.trigger("stopped", null, "video");
        };
        Video.prototype.play = function(event) {
          var target = $2(event.target), item = target.closest("." + this._core.settings.itemClass), video = this._videos[item.attr("data-video")], width = video.width || "100%", height = video.height || this._core.$stage.height(), html, iframe;
          if (this._playing) {
            return;
          }
          this._core.enter("playing");
          this._core.trigger("play", null, "video");
          item = this._core.items(this._core.relative(item.index()));
          this._core.reset(item.index());
          html = $2('<iframe frameborder="0" allowfullscreen mozallowfullscreen webkitAllowFullScreen ></iframe>');
          html.attr("height", height);
          html.attr("width", width);
          if (video.type === "youtube") {
            html.attr("src", "//www.youtube.com/embed/" + video.id + "?autoplay=1&rel=0&v=" + video.id);
          } else if (video.type === "vimeo") {
            html.attr("src", "//player.vimeo.com/video/" + video.id + "?autoplay=1");
          } else if (video.type === "vzaar") {
            html.attr("src", "//view.vzaar.com/" + video.id + "/player?autoplay=true");
          }
          iframe = $2(html).wrap('<div class="owl-video-frame" />').insertAfter(item.find(".owl-video"));
          this._playing = item.addClass("owl-video-playing");
        };
        Video.prototype.isInFullScreen = function() {
          var element = document2.fullscreenElement || document2.mozFullScreenElement || document2.webkitFullscreenElement;
          return element && $2(element).parent().hasClass("owl-video-frame");
        };
        Video.prototype.destroy = function() {
          var handler, property;
          this._core.$element.off("click.owl.video");
          for (handler in this._handlers) {
            this._core.$element.off(handler, this._handlers[handler]);
          }
          for (property in Object.getOwnPropertyNames(this)) {
            typeof this[property] != "function" && (this[property] = null);
          }
        };
        $2.fn.owlCarousel.Constructor.Plugins.Video = Video;
      })(window.Zepto || window.jQuery, window, document);
      (function($2, window2, document2, undefined) {
        var Animate = function(scope) {
          this.core = scope;
          this.core.options = $2.extend({}, Animate.Defaults, this.core.options);
          this.swapping = true;
          this.previous = undefined;
          this.next = undefined;
          this.handlers = {
            "change.owl.carousel": $2.proxy(function(e) {
              if (e.namespace && e.property.name == "position") {
                this.previous = this.core.current();
                this.next = e.property.value;
              }
            }, this),
            "drag.owl.carousel dragged.owl.carousel translated.owl.carousel": $2.proxy(function(e) {
              if (e.namespace) {
                this.swapping = e.type == "translated";
              }
            }, this),
            "translate.owl.carousel": $2.proxy(function(e) {
              if (e.namespace && this.swapping && (this.core.options.animateOut || this.core.options.animateIn)) {
                this.swap();
              }
            }, this)
          };
          this.core.$element.on(this.handlers);
        };
        Animate.Defaults = {
          animateOut: false,
          animateIn: false
        };
        Animate.prototype.swap = function() {
          if (this.core.settings.items !== 1) {
            return;
          }
          if (!$2.support.animation || !$2.support.transition) {
            return;
          }
          this.core.speed(0);
          var left, clear = $2.proxy(this.clear, this), previous = this.core.$stage.children().eq(this.previous), next = this.core.$stage.children().eq(this.next), incoming = this.core.settings.animateIn, outgoing = this.core.settings.animateOut;
          if (this.core.current() === this.previous) {
            return;
          }
          if (outgoing) {
            left = this.core.coordinates(this.previous) - this.core.coordinates(this.next);
            previous.one($2.support.animation.end, clear).css({ "left": left + "px" }).addClass("animated owl-animated-out").addClass(outgoing);
          }
          if (incoming) {
            next.one($2.support.animation.end, clear).addClass("animated owl-animated-in").addClass(incoming);
          }
        };
        Animate.prototype.clear = function(e) {
          $2(e.target).css({ "left": "" }).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut);
          this.core.onTransitionEnd();
        };
        Animate.prototype.destroy = function() {
          var handler, property;
          for (handler in this.handlers) {
            this.core.$element.off(handler, this.handlers[handler]);
          }
          for (property in Object.getOwnPropertyNames(this)) {
            typeof this[property] != "function" && (this[property] = null);
          }
        };
        $2.fn.owlCarousel.Constructor.Plugins.Animate = Animate;
      })(window.Zepto || window.jQuery, window, document);
      (function($2, window2, document2, undefined) {
        var Autoplay = function(carousel) {
          this._core = carousel;
          this._call = null;
          this._time = 0;
          this._timeout = 0;
          this._paused = true;
          this._handlers = {
            "changed.owl.carousel": $2.proxy(function(e) {
              if (e.namespace && e.property.name === "settings") {
                if (this._core.settings.autoplay) {
                  this.play();
                } else {
                  this.stop();
                }
              } else if (e.namespace && e.property.name === "position" && this._paused) {
                this._time = 0;
              }
            }, this),
            "initialized.owl.carousel": $2.proxy(function(e) {
              if (e.namespace && this._core.settings.autoplay) {
                this.play();
              }
            }, this),
            "play.owl.autoplay": $2.proxy(function(e, t, s) {
              if (e.namespace) {
                this.play(t, s);
              }
            }, this),
            "stop.owl.autoplay": $2.proxy(function(e) {
              if (e.namespace) {
                this.stop();
              }
            }, this),
            "mouseover.owl.autoplay": $2.proxy(function() {
              if (this._core.settings.autoplayHoverPause && this._core.is("rotating")) {
                this.pause();
              }
            }, this),
            "mouseleave.owl.autoplay": $2.proxy(function() {
              if (this._core.settings.autoplayHoverPause && this._core.is("rotating")) {
                this.play();
              }
            }, this),
            "touchstart.owl.core": $2.proxy(function() {
              if (this._core.settings.autoplayHoverPause && this._core.is("rotating")) {
                this.pause();
              }
            }, this),
            "touchend.owl.core": $2.proxy(function() {
              if (this._core.settings.autoplayHoverPause) {
                this.play();
              }
            }, this)
          };
          this._core.$element.on(this._handlers);
          this._core.options = $2.extend({}, Autoplay.Defaults, this._core.options);
        };
        Autoplay.Defaults = {
          autoplay: false,
          autoplayTimeout: 5e3,
          autoplayHoverPause: false,
          autoplaySpeed: false
        };
        Autoplay.prototype._next = function(speed) {
          this._call = window2.setTimeout(
            $2.proxy(this._next, this, speed),
            this._timeout * (Math.round(this.read() / this._timeout) + 1) - this.read()
          );
          if (this._core.is("interacting") || document2.hidden) {
            return;
          }
          this._core.next(speed || this._core.settings.autoplaySpeed);
        };
        Autoplay.prototype.read = function() {
          return (/* @__PURE__ */ new Date()).getTime() - this._time;
        };
        Autoplay.prototype.play = function(timeout, speed) {
          var elapsed;
          if (!this._core.is("rotating")) {
            this._core.enter("rotating");
          }
          timeout = timeout || this._core.settings.autoplayTimeout;
          elapsed = Math.min(this._time % (this._timeout || timeout), timeout);
          if (this._paused) {
            this._time = this.read();
            this._paused = false;
          } else {
            window2.clearTimeout(this._call);
          }
          this._time += this.read() % timeout - elapsed;
          this._timeout = timeout;
          this._call = window2.setTimeout($2.proxy(this._next, this, speed), timeout - elapsed);
        };
        Autoplay.prototype.stop = function() {
          if (this._core.is("rotating")) {
            this._time = 0;
            this._paused = true;
            window2.clearTimeout(this._call);
            this._core.leave("rotating");
          }
        };
        Autoplay.prototype.pause = function() {
          if (this._core.is("rotating") && !this._paused) {
            this._time = this.read();
            this._paused = true;
            window2.clearTimeout(this._call);
          }
        };
        Autoplay.prototype.destroy = function() {
          var handler, property;
          this.stop();
          for (handler in this._handlers) {
            this._core.$element.off(handler, this._handlers[handler]);
          }
          for (property in Object.getOwnPropertyNames(this)) {
            typeof this[property] != "function" && (this[property] = null);
          }
        };
        $2.fn.owlCarousel.Constructor.Plugins.autoplay = Autoplay;
      })(window.Zepto || window.jQuery, window, document);
      (function($2, window2, document2, undefined) {
        var Navigation = function(carousel) {
          this._core = carousel;
          this._initialized = false;
          this._pages = [];
          this._controls = {};
          this._templates = [];
          this.$element = this._core.$element;
          this._overrides = {
            next: this._core.next,
            prev: this._core.prev,
            to: this._core.to
          };
          this._handlers = {
            "prepared.owl.carousel": $2.proxy(function(e) {
              if (e.namespace && this._core.settings.dotsData) {
                this._templates.push('<div class="' + this._core.settings.dotClass + '">' + $2(e.content).find("[data-dot]").addBack("[data-dot]").attr("data-dot") + "</div>");
              }
            }, this),
            "added.owl.carousel": $2.proxy(function(e) {
              if (e.namespace && this._core.settings.dotsData) {
                this._templates.splice(e.position, 0, this._templates.pop());
              }
            }, this),
            "remove.owl.carousel": $2.proxy(function(e) {
              if (e.namespace && this._core.settings.dotsData) {
                this._templates.splice(e.position, 1);
              }
            }, this),
            "changed.owl.carousel": $2.proxy(function(e) {
              if (e.namespace && e.property.name == "position") {
                this.draw();
              }
            }, this),
            "initialized.owl.carousel": $2.proxy(function(e) {
              if (e.namespace && !this._initialized) {
                this._core.trigger("initialize", null, "navigation");
                this.initialize();
                this.update();
                this.draw();
                this._initialized = true;
                this._core.trigger("initialized", null, "navigation");
              }
            }, this),
            "refreshed.owl.carousel": $2.proxy(function(e) {
              if (e.namespace && this._initialized) {
                this._core.trigger("refresh", null, "navigation");
                this.update();
                this.draw();
                this._core.trigger("refreshed", null, "navigation");
              }
            }, this)
          };
          this._core.options = $2.extend({}, Navigation.Defaults, this._core.options);
          this.$element.on(this._handlers);
        };
        Navigation.Defaults = {
          nav: false,
          navText: [
            '<span aria-label="Previous">&#x2039;</span>',
            '<span aria-label="Next">&#x203a;</span>'
          ],
          navSpeed: false,
          navElement: 'button type="button" role="presentation"',
          navContainer: false,
          navContainerClass: "owl-nav",
          navClass: [
            "owl-prev",
            "owl-next"
          ],
          slideBy: 1,
          dotClass: "owl-dot",
          dotsClass: "owl-dots",
          dots: true,
          dotsEach: false,
          dotsData: false,
          dotsSpeed: false,
          dotsContainer: false
        };
        Navigation.prototype.initialize = function() {
          var override, settings = this._core.settings;
          this._controls.$relative = (settings.navContainer ? $2(settings.navContainer) : $2("<div>").addClass(settings.navContainerClass).appendTo(this.$element)).addClass("disabled");
          this._controls.$previous = $2("<" + settings.navElement + ">").addClass(settings.navClass[0]).html(settings.navText[0]).prependTo(this._controls.$relative).on("click", $2.proxy(function(e) {
            this.prev(settings.navSpeed);
          }, this));
          this._controls.$next = $2("<" + settings.navElement + ">").addClass(settings.navClass[1]).html(settings.navText[1]).appendTo(this._controls.$relative).on("click", $2.proxy(function(e) {
            this.next(settings.navSpeed);
          }, this));
          if (!settings.dotsData) {
            this._templates = [$2('<button role="button">').addClass(settings.dotClass).append($2("<span>")).prop("outerHTML")];
          }
          this._controls.$absolute = (settings.dotsContainer ? $2(settings.dotsContainer) : $2("<div>").addClass(settings.dotsClass).appendTo(this.$element)).addClass("disabled");
          this._controls.$absolute.on("click", "button", $2.proxy(function(e) {
            var index = $2(e.target).parent().is(this._controls.$absolute) ? $2(e.target).index() : $2(e.target).parent().index();
            e.preventDefault();
            this.to(index, settings.dotsSpeed);
          }, this));
          for (override in this._overrides) {
            this._core[override] = $2.proxy(this[override], this);
          }
        };
        Navigation.prototype.destroy = function() {
          var handler, control, property, override, settings;
          settings = this._core.settings;
          for (handler in this._handlers) {
            this.$element.off(handler, this._handlers[handler]);
          }
          for (control in this._controls) {
            if (control === "$relative" && settings.navContainer) {
              this._controls[control].html("");
            } else {
              this._controls[control].remove();
            }
          }
          for (override in this.overides) {
            this._core[override] = this._overrides[override];
          }
          for (property in Object.getOwnPropertyNames(this)) {
            typeof this[property] != "function" && (this[property] = null);
          }
        };
        Navigation.prototype.update = function() {
          var i, j, k, lower = this._core.clones().length / 2, upper = lower + this._core.items().length, maximum = this._core.maximum(true), settings = this._core.settings, size = settings.center || settings.autoWidth || settings.dotsData ? 1 : settings.dotsEach || settings.items;
          if (settings.slideBy !== "page") {
            settings.slideBy = Math.min(settings.slideBy, settings.items);
          }
          if (settings.dots || settings.slideBy == "page") {
            this._pages = [];
            for (i = lower, j = 0, k = 0; i < upper; i++) {
              if (j >= size || j === 0) {
                this._pages.push({
                  start: Math.min(maximum, i - lower),
                  end: i - lower + size - 1
                });
                if (Math.min(maximum, i - lower) === maximum) {
                  break;
                }
                j = 0, ++k;
              }
              j += this._core.mergers(this._core.relative(i));
            }
          }
        };
        Navigation.prototype.draw = function() {
          var difference, settings = this._core.settings, disabled = this._core.items().length <= settings.items, index = this._core.relative(this._core.current()), loop = settings.loop || settings.rewind;
          this._controls.$relative.toggleClass("disabled", !settings.nav || disabled);
          if (settings.nav) {
            this._controls.$previous.toggleClass("disabled", !loop && index <= this._core.minimum(true));
            this._controls.$next.toggleClass("disabled", !loop && index >= this._core.maximum(true));
          }
          this._controls.$absolute.toggleClass("disabled", !settings.dots || disabled);
          if (settings.dots) {
            difference = this._pages.length - this._controls.$absolute.children().length;
            if (settings.dotsData && difference !== 0) {
              this._controls.$absolute.html(this._templates.join(""));
            } else if (difference > 0) {
              this._controls.$absolute.append(new Array(difference + 1).join(this._templates[0]));
            } else if (difference < 0) {
              this._controls.$absolute.children().slice(difference).remove();
            }
            this._controls.$absolute.find(".active").removeClass("active");
            this._controls.$absolute.children().eq($2.inArray(this.current(), this._pages)).addClass("active");
          }
        };
        Navigation.prototype.onTrigger = function(event) {
          var settings = this._core.settings;
          event.page = {
            index: $2.inArray(this.current(), this._pages),
            count: this._pages.length,
            size: settings && (settings.center || settings.autoWidth || settings.dotsData ? 1 : settings.dotsEach || settings.items)
          };
        };
        Navigation.prototype.current = function() {
          var current = this._core.relative(this._core.current());
          return $2.grep(this._pages, $2.proxy(function(page, index) {
            return page.start <= current && page.end >= current;
          }, this)).pop();
        };
        Navigation.prototype.getPosition = function(successor) {
          var position, length, settings = this._core.settings;
          if (settings.slideBy == "page") {
            position = $2.inArray(this.current(), this._pages);
            length = this._pages.length;
            successor ? ++position : --position;
            position = this._pages[(position % length + length) % length].start;
          } else {
            position = this._core.relative(this._core.current());
            length = this._core.items().length;
            successor ? position += settings.slideBy : position -= settings.slideBy;
          }
          return position;
        };
        Navigation.prototype.next = function(speed) {
          $2.proxy(this._overrides.to, this._core)(this.getPosition(true), speed);
        };
        Navigation.prototype.prev = function(speed) {
          $2.proxy(this._overrides.to, this._core)(this.getPosition(false), speed);
        };
        Navigation.prototype.to = function(position, speed, standard) {
          var length;
          if (!standard && this._pages.length) {
            length = this._pages.length;
            $2.proxy(this._overrides.to, this._core)(this._pages[(position % length + length) % length].start, speed);
          } else {
            $2.proxy(this._overrides.to, this._core)(position, speed);
          }
        };
        $2.fn.owlCarousel.Constructor.Plugins.Navigation = Navigation;
      })(window.Zepto || window.jQuery, window, document);
      (function($2, window2, document2, undefined) {
        var Hash = function(carousel) {
          this._core = carousel;
          this._hashes = {};
          this.$element = this._core.$element;
          this._handlers = {
            "initialized.owl.carousel": $2.proxy(function(e) {
              if (e.namespace && this._core.settings.startPosition === "URLHash") {
                $2(window2).trigger("hashchange.owl.navigation");
              }
            }, this),
            "prepared.owl.carousel": $2.proxy(function(e) {
              if (e.namespace) {
                var hash = $2(e.content).find("[data-hash]").addBack("[data-hash]").attr("data-hash");
                if (!hash) {
                  return;
                }
                this._hashes[hash] = e.content;
              }
            }, this),
            "changed.owl.carousel": $2.proxy(function(e) {
              if (e.namespace && e.property.name === "position") {
                var current = this._core.items(this._core.relative(this._core.current())), hash = $2.map(this._hashes, function(item, hash2) {
                  return item === current ? hash2 : null;
                }).join();
                if (!hash || window2.location.hash.slice(1) === hash) {
                  return;
                }
                window2.location.hash = hash;
              }
            }, this)
          };
          this._core.options = $2.extend({}, Hash.Defaults, this._core.options);
          this.$element.on(this._handlers);
          $2(window2).on("hashchange.owl.navigation", $2.proxy(function(e) {
            var hash = window2.location.hash.substring(1), items = this._core.$stage.children(), position = this._hashes[hash] && items.index(this._hashes[hash]);
            if (position === undefined || position === this._core.current()) {
              return;
            }
            this._core.to(this._core.relative(position), false, true);
          }, this));
        };
        Hash.Defaults = {
          URLhashListener: false
        };
        Hash.prototype.destroy = function() {
          var handler, property;
          $2(window2).off("hashchange.owl.navigation");
          for (handler in this._handlers) {
            this._core.$element.off(handler, this._handlers[handler]);
          }
          for (property in Object.getOwnPropertyNames(this)) {
            typeof this[property] != "function" && (this[property] = null);
          }
        };
        $2.fn.owlCarousel.Constructor.Plugins.Hash = Hash;
      })(window.Zepto || window.jQuery, window, document);
      (function($2, window2, document2, undefined) {
        var style = $2("<support>").get(0).style, prefixes = "Webkit Moz O ms".split(" "), events = {
          transition: {
            end: {
              WebkitTransition: "webkitTransitionEnd",
              MozTransition: "transitionend",
              OTransition: "oTransitionEnd",
              transition: "transitionend"
            }
          },
          animation: {
            end: {
              WebkitAnimation: "webkitAnimationEnd",
              MozAnimation: "animationend",
              OAnimation: "oAnimationEnd",
              animation: "animationend"
            }
          }
        }, tests = {
          csstransforms: function() {
            return !!test("transform");
          },
          csstransforms3d: function() {
            return !!test("perspective");
          },
          csstransitions: function() {
            return !!test("transition");
          },
          cssanimations: function() {
            return !!test("animation");
          }
        };
        function test(property, prefixed2) {
          var result = false, upper = property.charAt(0).toUpperCase() + property.slice(1);
          $2.each((property + " " + prefixes.join(upper + " ") + upper).split(" "), function(i, property2) {
            if (style[property2] !== undefined) {
              result = prefixed2 ? property2 : true;
              return false;
            }
          });
          return result;
        }
        function prefixed(property) {
          return test(property, true);
        }
        if (tests.csstransitions()) {
          $2.support.transition = new String(prefixed("transition"));
          $2.support.transition.end = events.transition.end[$2.support.transition];
        }
        if (tests.cssanimations()) {
          $2.support.animation = new String(prefixed("animation"));
          $2.support.animation.end = events.animation.end[$2.support.animation];
        }
        if (tests.csstransforms()) {
          $2.support.transform = new String(prefixed("transform"));
          $2.support.transform3d = tests.csstransforms3d();
        }
      })(window.Zepto || window.jQuery, window, document);
      var $ = window.jQuery;
      var ReactOwlCarousel = (
        /** @class */
        function(_super) {
          __extends(ReactOwlCarousel2, _super);
          function ReactOwlCarousel2(props) {
            var _this = _super.call(this, props) || this;
            _this.containerRef = function(inst) {
              _this.container = inst;
            };
            var _a = filterOptions(_this.props), options = _a[0], propsWithoutOptions = _a[1];
            _this.options = options;
            _this.propsWithoutOptions = propsWithoutOptions;
            return _this;
          }
          ReactOwlCarousel2.prototype.componentDidMount = function() {
            this.$ele = $(this.container);
            this.create();
          };
          ReactOwlCarousel2.prototype.UNSAFE_componentWillReceiveProps = function() {
            this.destory();
          };
          ReactOwlCarousel2.prototype.componentDidUpdate = function() {
            var _a = filterOptions(this.props), options = _a[0], propsWithoutOptions = _a[1];
            this.options = options;
            this.propsWithoutOptions = propsWithoutOptions;
            this.create();
          };
          ReactOwlCarousel2.prototype.next = function(speed) {
            if (!this.$ele)
              throw new Error("OwlCarousel is not created");
            if (typeof speed === "number") {
              this.$ele.trigger("next.owl.carousel", [speed]);
            } else {
              this.$ele.trigger("next.owl.carousel", speed);
            }
          };
          ReactOwlCarousel2.prototype.prev = function(speed) {
            if (!this.$ele)
              throw new Error("OwlCarousel is not created");
            if (typeof speed === "number") {
              this.$ele.trigger("prev.owl.carousel", [speed]);
            } else {
              this.$ele.trigger("prev.owl.carousel", speed);
            }
          };
          ReactOwlCarousel2.prototype.to = function(position, speed) {
            if (!this.$ele)
              throw new Error("OwlCarousel is not created");
            if (typeof position === "number" && typeof speed === "number") {
              this.$ele.trigger("to.owl.carousel", [position, speed]);
            } else {
              this.$ele.trigger("to.owl.carousel");
            }
          };
          ReactOwlCarousel2.prototype.create = function(options) {
            if (!this.$ele)
              throw new Error("OwlCarousel is not created");
            this.$ele.owlCarousel(options || this.options);
          };
          ReactOwlCarousel2.prototype.destory = function() {
            if (!this.$ele)
              throw new Error("OwlCarousel is not created");
            this.$ele.trigger("destroy.owl.carousel");
          };
          ReactOwlCarousel2.prototype.play = function(timeout, speed) {
            if (!this.$ele)
              throw new Error("OwlCarousel is not created");
            if (typeof timeout === "number" && typeof speed === "number") {
              this.$ele.trigger("play.owl.autoplay", [timeout, speed]);
            } else {
              this.$ele.trigger("play.owl.autoplay");
            }
          };
          ReactOwlCarousel2.prototype.stop = function() {
            if (!this.$ele)
              throw new Error("OwlCarousel is not created");
            this.$ele.trigger("stop.owl.autoplay");
          };
          ReactOwlCarousel2.prototype.render = function() {
            var _a = this.propsWithoutOptions, className = _a.className, props = __rest(_a, ["className"]);
            return React__default.createElement("div", __assign({ className: "owl-carousel " + className, ref: this.containerRef }, props));
          };
          return ReactOwlCarousel2;
        }(React.Component)
      );
      var OPTIONS = /* @__PURE__ */ new Set([
        "items",
        "margin",
        "loop",
        "center",
        "mouseDrag",
        "touchDrag",
        "pullDrag",
        "freeDrag",
        "stagePadding",
        "merge",
        "mergeFit",
        "autoWidth",
        "startPosition",
        "URLhashListener",
        "nav",
        "rewind",
        "navText",
        "navElement",
        "slideBy",
        "dots",
        "dotsEach",
        "dotData",
        "lazyLoad",
        "lazyContent",
        "autoplay",
        "autoplayTimeout",
        "autoplayHoverPause",
        "smartSpeed",
        "fluidSpeed",
        "autoplaySpeed",
        "navSpeed",
        "dotsSpeed",
        "dragEndSpeed",
        "callbacks",
        "responsive",
        "responsiveRefreshRate",
        "responsiveBaseElement",
        "video",
        "videoHeight",
        "videoWidth",
        "animateOut",
        "animateIn",
        "fallbackEasing",
        "info",
        "nestedItemSelector",
        "itemElement",
        "stageElement",
        "navContainer",
        "dotsContainer",
        // 'CLASSES'
        "refreshClass",
        "loadingClass",
        "loadedClass",
        "rtlClass",
        "dragClass",
        "grabClass",
        "stageClass",
        "stageOuterClass",
        "navContainerClass",
        "navClass",
        "controlsClass",
        "dotClass",
        "dotsClass",
        "autoHeightClass",
        "responsiveClass",
        // 'EVENTS'
        "onInitialize",
        "onInitialized",
        "onResize",
        "onResized",
        "onRefresh",
        "onRefreshed",
        "onDrag",
        "onDragged",
        "onTranslate",
        "onTranslated",
        "onChange",
        "onChanged",
        "onLoadLazy",
        "onLoadedLazy",
        "onStopVideo",
        "onPlayVideo"
      ]);
      function filterOptions(item) {
        var options = {};
        var propsWithoutOptions = {};
        Object.keys(item).forEach(function(key) {
          if (OPTIONS.has(key)) {
            options[key] = item[key];
          } else {
            propsWithoutOptions[key] = item[key];
          }
        });
        return [options, propsWithoutOptions];
      }
      return ReactOwlCarousel;
    });
  }
});
export default require_OwlCarousel();
/*! Bundled license information:

react-owl-carousel/umd/OwlCarousel.js:
  (*! *****************************************************************************
      Copyright (c) Microsoft Corporation. All rights reserved.
      Licensed under the Apache License, Version 2.0 (the "License"); you may not use
      this file except in compliance with the License. You may obtain a copy of the
      License at http://www.apache.org/licenses/LICENSE-2.0
  
      THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
      KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
      WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
      MERCHANTABLITY OR NON-INFRINGEMENT.
  
      See the Apache Version 2.0 License for specific language governing permissions
      and limitations under the License.
      ***************************************************************************** *)
*/
//# sourceMappingURL=react-owl-carousel.js.map
