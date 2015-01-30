//     ScalableLightbox - v1.0.1 - 2015-01-30

//     (c) 2015 Olivier Hug, Bänziger Hug Ltd. <oh@baenziger-hug.com>
//     Licensed under the GPL v3, Commercial license
//     https://scalable-lightbox.com/


;(function(factory) {

  /* jshint strict: false */

  if (typeof define === "function" && define.amd) {

    // AMD. Register as an anonymous module.
    define(["jquery"], factory($, window));

  } else {

    // Browser globals.
    factory(jQuery, window);

  }

}(function($, window, undefined) {

  "use strict";

  // Debugger function to display information in the browser's console.
  function _debug(type, msg) {

    if (window.console) {

      if (type === "error") {

        if (window.console.error) {
          window.console.error(msg);
        } else {
          window.console.log("ERROR: " + msg);
        }

      } else if (type === "warn") {

        if (window.console.warn) {
          window.console.warn(msg);
        } else {
          window.console.log("WARN: " + msg);
        }

      } else if (type === "info") {

        if (window.console.info) {
          window.console.info(msg);
        } else {
          window.console.log("INFO: "+msg);
        }

      } else if (type === "log") {
        window.console.log(msg);
      }

    }

  }


  $.ScalableLightbox = function(options) {

    // Singleton pattern
    // ------------------
    // The `ScalableLightbox` plugin augments the singleton pattern
    // for better performance. After initial configuration via
    // the `options` attribute, the plugin may display one or
    // multiple `decks` in the *index and or lightbox module*.
    var instance = $.data(document.body, "ScalableLightbox"),
        args;

    if (!instance) {

      instance = {

        // Instance Vars
        // -------------
        // **Note:** All instance variables with a affix `$` sign
        // are `jQuery` objects.

        // Container element that holds the whole HTML code of
        // this plugin.
        $container:                 null,

        // These are *index module* related objects.
        $indexWrapper:              null,
        $indexOverlay:              null,
        $indexDecksContainer:       null,

        // The current state of the *index module*. Either `closed`
        // or `opened` (meaning it is displayed).
        indexState:                 "closed",

        // These are *lightbox module* related objects.
        $lightboxWrapper:           null,
        $lightboxOverlay:           null,
        $lightboxDecksContainer:    null,
        $lightboxCaptionContainer:  null,
        $lightboxCaptionLeft:       null,
        $lightboxCaptionCenter:     null,
        $lightboxCaptionRight:      null,

        // The current state of the *lightbox module*. Either `closed`
        // or `opened` (meaning it is displayed).
        lightboxState:              "closed",

        // Current `deck` object, relevant for portrayal in the
        // *lightbox module*.
        currentDeck:                null,
        currentIndex:               0,
        currentBlocking:            false,

        // Event bindings (whether click, touch, keyboard and
        // resize events were previously binded).
        binded: {
          clicks:                   false,
          touch:                    false,
          keys:                     false,
          resize:                   false
        },

        // Move to the previous scroll position. Necessary for the
        // annoying iOS address bar.
        prevScrollPosition:         [],

        // Whether the plugin or the masonry (if activated) has
        // been initialized.
        initPlugin:                 false,
        initMasonry:                false,

        // The `options` object, which is provided by the initial
        // plugin call and overwrites defaults defined in the
        // `settings` object below.
        options:                    null,


        // Settings
        // ========
        settings: {

          // Data Settings
          // -------------
          // The data for the plugin can either be provided directly via the `data` attribute,
          // or via JSON by defining the URL in the `api` attribute below. The data structure is
          // the same for both data sources. It consists of `deck` objects with the following structure:
          //
          //     [
          //       { // deck with id 1
          //         id: 1, items: [
          //           { img: "img/1.jpg", width: 1000, height: 700, caption: "lorem ipsum 1" },
          //           { img: "img/2.jpg", width: 1300, height: 666, caption: "lorem ipsum 2" }
          //         ]
          //       },
          //       { // deck with id 2
          //         id: 2, items: [
          //           { img: "img/1.jpg", width: 1000, height: 700, caption: "lorem ipsum 1", thumb: "img/1-thumb.jpg", thumbcaption: "thumb 1" },
          //           { img: "img/2.jpg", width: 1300, height: 666, caption: "lorem ipsum 2", thumb: "img/2-thumb.jpg", thumbcaption: "thumb 2" }
          //         ]
          //       },
          //       // additional decks ...
          //     ]
          //
          // Each deck needs to have a unique `id` attribute (to later be callable), as well as an
          // `items` array. An item may have the following attributes:
          // * `img` the path to the image (required)
          // * `width` and `height` of the image, necessary to resize
          //    the *lightbox module* according to the image's aspect ratio (required)
          // * `caption` the image description (optional)
          // * `thumb` an image for the *index module*, otherwise `img` is used (optional)
          // * `thumbcaption` a description for the *index module* (optional)
          data:                             [],
          api:                              null,


          // General Settings
          // ----------------
          // *General settings that are not specific to the index or lightbox module.*

          // Whether debug information should be displayed.
          debug:                            false,

          // How the plugin resizes itself. The `resize` attribute may take one
          // of the following values:
          // * `"smartresize"` debounced resizing for better performance
          // * `true` resize the plugin on every window resize event
          // * `false` to deactivate auto-resize, in case you are triggering
          //    the resizing of the plugin within your own code by calling
          //    `$.ScalableLightbox("resize");`
          resize:                           "smartresize",

          // Whether the plugin should react to hashes on pageload and also change the
          // URL accordingly, if the *index or lightbox module* is called.
          hash:                             true,

          // The base path for image URL's. If the variable is set, the `baseImgPath` will
          // be placed in front of all `img` and `thumb` paths of every deck. **Attention:**
          // Please provide a slash at the end of the path.
          baseImgPath:                      "",



          // Index Module Settings
          // ---------------------
          // *Settings related to the functionality of the index module.*
          index: {
            // Whether the *index module* is activated.
            enabled:                        true,

            // If the *index module* is displayed on top of an overlay div.
            overlay:                        true,

            // The layout of the thumbs, valid values are `"float"` and `"masonry"`.
            // For the masonry option, you need to include the masonry plugin.
            layout:                         "float",

            thumb: {
              // Whether thumbs themselves have an overlay.
              overlay:                      true,

              // The width of a thumbnail (the height is calculated automatically
              // out of the `width` and `height` of the corresponding deck item).
              width:                        280,

              // What should be displayed as a caption of the thumb. Valid attributes are:
              // * `"none"` no caption is displayed
              // * `"caption"` the caption of the data item is displayed
              // * `"thumbcaption"` the thumb caption of the data item is used
              // * `"number"` the number of the item is displayed (e.g. 2 / 10)
              //    according to `captionNumberFmt` below
              caption:                      "number",

              // In case `caption` is set to `"number"`, how the number should be
              // displayed. Use `%n%` to display the thumbs position and `%total%`
              // to show the total items in the current deck. For example, `"%n% of %total%"`,
              // will display: *1 of 10*, *2 of 10*, etc.
              captionNumberFmt:             "%n% / %total%",

              // The position of the caption. Valid attributes are:
              // * `"above"` above the thumb (use `captionVerticalMargin` for vertical spacing)
              // * `"top"` at the top border of the thumb
              // * `"center"` at the center of the thumb
              // * `"bottom"` at the bottom of the thumb
              // * `"below"` below the thumb (use `captionVerticalMargin` for vertical spacing)
              captionPosition:              "below",

              // The margin to the thumbnail, in case a caption is positioned
              // `"above"` or `"below"`.
              captionVerticalMargin:        5
            },

            controls: {
              // Whether a click or touch outside an index element as well as
              // ESC key closes the *index module*.
              close:                        true
            }
          },


          // Lightbox Module Settings
          // ------------------------
          // *Settings related to the functionality of the lightbox module.*
          lightbox: {
            // Whether the *lightbox module* is activated.
            enabled:                        true,

            // If the *lightbox module* is displayed on top of an overlay div.
            overlay:                        true,

            // The padding for the lightbox images to the browser window. The values
            // are divided by 2, to have an equal padding on each side.
            padding: {
              horizontal:                   100,
              vertical:                     100,

              // The paddings for window width's below 450 pixel, or window height's
              // below 400 pixel.
              horizontalMobile:             50,
              verticalMobile:               50,
            },

            // There are three caption positions provided (left, center, right)
            // for the lightbox. Valid attributes are:
            // * `"none"` no caption is displayed
            // * `"caption"` the caption of the data item is displayed
            // * `"thumbcaption"` the thumbcaption of the data item is used
            // * `"number"` the number of the item is displayed (e.g. 2 / 10)
            //    according to `captionNumberFmt`
            // * `index` a link to the *index module* (if enabled) is displayed,
            //    change the link text, by changing `captionIndexTxt` accordingly
            img: {
              captionLeft:                  "index",
              captionCenter:                "caption",
              captionRight:                 "number",
              captionNumberFmt:             "%n% / %total%",
              captionIndexTxt:              "Index",

              // The position of the caption. Valid attributes are:
              // * `"above"` above the lightbox (use `captionVerticalMargin` for spacing)
              // * `"top"` at the top border of the lightbox
              // * `"center"` at the center of the lightbox
              // * `"bottom"` at the bottom of the lightbox
              // * `"below"` below the lightbox (use `captionVerticalMargin` for spacing)
              captionPosition:              "below",

              // The margin to the thumbnail, in case a caption is positioned
              // `"above"` or `"below"`.
              captionVerticalMargin:        5
            },

            controls: {
              // Whether a click, touch outside as well as ESC key closes the module.
              close:                        true,

              // Whether click events for moving left and right are enabled.
              clicks:                       true,

              // Whether left and right keyboard arrows are used for navigation.
              keys:                         true
            }
          },


          // Callbacks
          // ---------
          // *General callbacks*. These functions are executed every time when a call to
          // a corresponding public function is finished. In order to use nonrecurring callbacks,
          // you may send them along with the call the corresponding public function.
          callbacks: {
            loaded:                         null,
            open:                           null,
            close:                          null,
            resize:                         null
          },


          // Class Names
          // -----------
          // *The CSS class names that are used for the HTML structure of the plugin.*
          // The attribute names should be self explaining, otherwise please study
          // the HTML structure and class names in your browser.
          classNames: {
            clearfix:                       "clearfix",
            pluginActive:                   "sl-active",
            container:                      "sl-container",

            indexOverlay:                   "sl-index-overlay",
            indexWrapper:                   "sl-index-wrapper",
            indexDecksContainer:            "sl-index-decks-container",
            indexDeck:                      "sl-index-deck",
            indexItem:                      "sl-index-item",
            indexItemImg:                   "sl-index-item-img",
            indexItemIndicator:             "sl-index-item-indicator",
            indexItemOverlay:               "sl-index-item-overlay",
            indexItemCaption:               "sl-index-item-caption",
            indexItemCaptionInner:          "sl-index-item-caption-inner",

            lightboxOverlay:                "sl-lightbox-overlay",
            lightboxWrapper:                "sl-lightbox-wrapper",
            lightboxDecksContainer:         "sl-lightbox-decks-container",
            lightboxDeck:                   "sl-lightbox-deck",
            lightboxItem:                   "sl-lightbox-item",
            lightboxItemIndicator:          "sl-lightbox-item-indicator",
            lightboxItemCaptionContainer:   "sl-lightbox-caption-container",
            lightboxIndexLink:              "sl-lightbox-index-link",
            lightboxCursor:                 "sl-lightbox-cursor"
          },


          // Transitions
          // -----------
          // *Durations of transitions used for the different animations of the plugin.*
          transitions: {
            // Duration to fade the index overlay in or out (if activated, see `overlay`
            // attribute of the index settings above).
            fadeInIndexOverlay:             500,
            fadeOutIndexOverlay:            500,

            // Duration to fade the *index module* in or out by calling the
            // `open()` or `close()` functions.
            fadeInIndex:                    500,
            fadeOutIndex:                   500,

            // Duration to fade in a index item once the img or thumb has been loaded.
            fadeInIndexItemLoaded:          250,

            // Duration to fade the lightbox overlay in or out (if activated, see `overlay`
            // attribute of the lightbox settings above).
            fadeInLightboxOverlay:          500,
            fadeOutLightboxOverlay:         500,

            // Duration to fade the *lightbox module* in or out by calling the
            // `open()` or `close()` functions.
            fadeInLightbox:                 500,
            fadeOutLightbox:                500,

            // Duration to fade in a lightbox item once the img has been loaded.
            fadeInLightboxItemLoaded:       250,

            // Duration for the transition from prev image to the next in the lightbox
            fadeLightboxItem:               250
          }

        },

        // Initialisation
        // ==============

        // Init Method
        // -----------
        // **Private method** which is executed initially, when an
        // `options` object is provided as the first argument of the
        // plugin call.
        _init: function(options, cb) {

          var self = this;

          if (this.initPlugin) {
            self._debug("error", "The plugin has already been " +
              "initialized!");

            return false;
          }

          // Merge user defined `options` with default `settings`.
          this.options = $.extend(true, {}, this.settings, options);

          if (!this.options.index.enabled &&
              !this.options.lightbox.enabled) {

            self._debug("error", "Neither the index module, nor the " +
              "lightbox module is enabled!");

          } else {

            // Create the container element, load data and execute
            // user callback at the end.
            this.$container = $("<div />")
              .addClass(this.options.classNames.container);

            $("body").append(this.$container);
            this._loadData(cb);

          }

        },


        // Load Data Method
        // ----------------
        // **Private method** that loads the data (esp. for JSON
        // URL call), builds up the modules HTML structure and
        // executes the callback.
        _loadData: function(cb) {

          var self = this,
              func = function() {
                if (self.options.index.enabled) {
                  self._tmplIndex();
                }

                if (self.options.lightbox.enabled) {
                  self._tmplLightbox();
                }

                self.initPlugin = true;
                self._loadDecks(cb);
                self._bind();

                return true;
              };


          if (this.options.api !== null) {

            $.ajax({
              type:     "GET",
              dataType: "json",
              url:       this.options.api,
              success:  function(json) {
                self._debug("info", "Inserted JSON Stream: ");
                self._debug("info", json);

                self.options.data = self._normalizeData(json);
                func();
              },
              error: function(bug) {
                self._debug("error", "JSON Error occured!");
                self._debug("error", bug);

                return false;
              }
            });

          } else if (this.options.data.length > 0) {

            this.options.data = this._normalizeData(this.options.data);
            func();

          } else {

            this._debug("error", "The data could not be loaded!");

          }

        },


        // Normalize Data Method
        // ---------------------
        // **Private method** used to normalize incoming data, by removing
        // empty or wrongly defined decks and calculating the items image ratios.
        _normalizeData: function(data) {

          var i = 0, j = 0, k = 0,
              totalDecks  = data.length,
              totalItems  = 0,
              deck        = null,
              item        = null,
              removeDecks = [],
              removeItems = [];

          for (i; i < totalDecks; i++) {

            deck = data[i];

            if (typeof deck.id === "undefined" ||
                typeof deck.items === "undefined" ||
                deck.items.length === 0) {

              removeDecks.push(i);

            } else {

              removeItems = [];
              totalItems = deck.items.length;

              for (j = 0; j < totalItems; j++) {

                item = deck.items[j];

                if (typeof item.img    !== "undefined" &&
                    typeof item.width  !== "undefined" &&
                    typeof item.height !== "undefined") {

                  item.ratio  = item.height / item.width;
                  item.loaded = false;

                  if (typeof item.thumb !== "undefined" &&
                      item.thumb !== null) {
                    item.thumbloaded = false;
                  } else {
                    item.thumbloaded = "same";
                  }

                } else {

                  removeItems.push(j);

                }

              }

              // All items have to be removed, therefore remove the whole deck.
              if (removeItems.length === deck.items.length) {

                removeDecks.push(i);

              // Just remove the badly defined items.
              } else {

                removeItems.reverse();
                for (k = 0; k < removeItems.length; k++) {
                  deck.items.splice(removeItems[k], 1);
                }

              }

            }

          }

          // Remove the wrongly defined decks.
          removeDecks.reverse();

          for (k = 0; k < removeDecks.length; k++) {
            data.splice(removeDecks[k], 1);
          }

          return data;

        },


        // Load Decks Method
        // -----------------
        // **Private method** to load the decks and build up their
        // HTML structure.
        _loadDecks: function(cb) {

          var decks = this.options.data,
              totalDecks = decks.length,
              i = 0;

          cb = typeof cb === "function" ? cb : false;

          // Append decks to *index module*.
          if (this.options.index.enabled) {

            for (i = 0; i < totalDecks; i++) {
              this.$indexDecksContainer.append(
                this._tmplIndexDeck(decks[i])
              );

            }

            this._resizeIndex("all");
            this._createMasonry();

          }

          // Append decks to *lightbox module*.
          if (this.options.lightbox.enabled) {

            for (i = 0; i < totalDecks; i++) {
              this.$lightboxDecksContainer.append(
                this._tmplLightboxDeck(decks[i])
              );
            }

          }

          // Initially set deck to the first one.
          this._setDeck(false);
          this._bindClicks();
          this._hashListener();

          if (cb) {
            cb();
          }

          if (typeof this.options.callbacks.loaded === "function") {
            this.options.callbacks.loaded();
          }

        },


        _loadImgs: function(module) {

          var self        = this,
              $indicators = null,
              classNames  = this.options.classNames,
              transitions = this.options.transitions,
              loader = function(item, $img, $indicator, module, mode, src) {

                $indicator.after($img);
                $indicator.hide();

                if (typeof Modernizr !== "undefined" &&
                    Modernizr.csstransitions) {
                  $img.addClass("loaded");
                } else {
                  $img.fadeIn(transitions["fadeIn" + self._capitalize(module) + "ItemLoaded"]);
                }

                if (mode === 1) {

                  item.thumbloaded = true;
                  item.loaded = true;
                  self._debug("info", "Loading image: " + src);

                } else if (mode === 2) {

                  item.thumbloaded = true;
                  self._debug("info", "Loading thumb image: " + src);

                } else if (mode === 3) {

                  item.loaded = true;
                  self._debug("info", "Loading image: " + src);

                }

              };


          if (this.options[module].enabled) {

            $indicators = this["$" + module + "DecksContainer"]
              .find("#" + classNames[module + "Deck"] +
                    "-" + this.currentDeck.id + " " +
                    "." + classNames[module + "ItemIndicator"]);


            if (module === "index") {

              $.each(this.currentDeck.items, function(i, item) {

                var $indicator = $indicators.eq(i),
                    $img = $("<img />"),
                    src;

                // Do not load again when already in the loading queue.
                if (item.thumbloaded === "loading") {
                  return false;
                }


                if (item.thumbloaded === "same") {

                  src = self.options.baseImgPath + item.img;

                  if (item.loaded === true) {

                    $indicator.after($img.attr("src", src));
                    $indicator.hide();

                    if (typeof Modernizr !== "undefined" &&
                        Modernizr.csstransitions) {
                      $img.addClass("loaded");
                    } else {
                      $img.fadeIn(transitions.fadeInIndexItemLoaded);
                    }

                    item.thumbloaded = true;

                    self._debug("info", "Appended already loaded image: " + src);

                  } else {

                    item.thumbloaded = "loading";
                    $img.one("load", function() {
                      loader(item, $img, $indicator, "index", 1, src);
                    }).attr("src", src);

                  }


                } else if (!item.thumbloaded) {

                  src = self.options.baseImgPath + item.thumb;

                  item.thumbloaded = "loading";
                  $img.one("load", function() {
                    loader(item, $img, $indicator, "index", 2, src);
                  }).attr("src", src);

                } else {
                  return false;
                }

              });

            } else if (module === "lightbox") {

              $.each(this.currentDeck.items, function(i, item) {

                var $indicator = $indicators.eq(i),
                    $img = $("<img />"),
                    src = self.options.baseImgPath + item.img;

                if (item.loaded === "loading") {
                  return false;
                }


                if (!item.loaded) {

                  item.loaded = "loading";
                  $img.one("load", function() {
                    loader(item, $img, $indicator, "lightbox", 3, src);
                  }).attr("src", src);

                } else {

                  if ($indicator.parent().find("img").length > 0) {
                    return false;
                  } else {

                    $indicator.after($img.attr("src", src));
                    $indicator.hide();

                    if (typeof Modernizr !== "undefined" &&
                        Modernizr.csstransitions) {
                      $img.addClass("loaded");
                    } else {
                      $img.fadeIn(transitions.fadeInLightboxItemLoaded);
                    }

                    item.loaded = true;

                    self._debug("info", "Appended already loaded image: " + src);
                  }

                }

              });

            }

          }

        },


        // Set Deck Method
        // ---------------
        // **Private method** to find and set the current deck.
        _setDeck: function(deckID) {

          var found = false,
              deck  = null,
              decks = this.options.data,
              totalDecks = decks.length,
              i = 0;

          if (deckID !== false) {

            for (i; i < totalDecks; i++) {

              deck = decks[i];

              if (deck.id === deckID) {
                found = true;
                this.currentDeck = deck;
                break;
              }

            }

          }

          // Set to first deck, if `deckID` not found.
          if (!found) {
            this.currentDeck  = decks[0];
            this.currentIndex = 0;
          }

        },


        // General Methods
        // ===============

        // Open Method
        // -----------
        // **Public method** to open a module or specific item of the plugin.
        // Invoke by calling `$.ScalableLightbox("open", options, callback);`
        // The `options` object may have the following attributes:
        // * `module` the module that should be opened, either `"index"`
        //    or `"lightbox"` (required)
        // * `deck` the ID of deck that should be displayed (required)
        // * `index` which item of the deck should be displayed, only
        //    if the *lightbox module* is opened (optional)
        open: function(options, cb) {

          var self  = this,
              func  = null,
              other = "",
              classNames  = this.options.classNames,
              transitions = this.options.transitions;

          cb = typeof cb === "function" ? cb : false;

          if (this.currentBlocking) {
            return false;
          }

          this.currentBlocking = true;

          options = $.extend(true, {
            module:   "lightbox",
            deck:     false,
            index:    0
          }, options);


          this._setDeck(options.deck);
          this.currentIndex = options.index;

          func = function() {

            self["$" + options.module + "DecksContainer"]
              .find("." + classNames[options.module + "Deck"])
              .hide();

            self["$" + options.module + "DecksContainer"]
              .find("#" + classNames[options.module + "Deck"] +
                    "-" + self.currentDeck.id)
              .show();


            self["$" + options.module + "Wrapper"]
              .fadeIn(
                transitions["fadeIn" + self._capitalize(options.module)],
                function() {

                  self[options.module + "State"] = "opened";
                  self._loadImgs(options.module);
                  self._bind();
                  self._changeHash(options.module);

                  if (options.module === "index") {
                    self.resize();
                  } else {
                    self.currentBlocking = false;
                    self.goto(options.index);
                  }

                  if (cb) {
                    cb();
                  } else if (typeof self.options.callbacks.open === "function") {
                    self.options.callbacks.open(options.module, self.currentDeck.id);
                  }

                }
              );

              $("body").addClass(classNames.pluginActive);

              self.currentBlocking = false;

          };

          if (options.module === "index") {
            other = "lightbox";
          } else {
            other = "index";
          }


          // The requested module is enabled.
          if (this.options[options.module].enabled) {

            if (this[other + "State"] === "opened") {
              this.close();
            }

            if (options.module === "index") {
              this._resizeIndex("current");
            }

            // The opened module has a overlay.
            if (this.options[options.module].overlay) {

              this["$" + options.module + "Overlay"]
                .fadeIn(
                  transitions["fadeIn" + self._capitalize(options.module)  + "Overlay"],
                  func
                );

            } else {

              func();

            }

          } else {

            this._debug("error", "The " + options.module + " module is not activated and can therefore" +
              " not be displayed!");

          }

        },


        // Close Method
        // ------------
        // **Public method** to close the currently opened module.
        // Invoke by calling `$.ScalableLightbox("close", callback);`
        close: function(cb) {

          var self        = this,
              module      = "index",
              classNames  = this.options.classNames,
              transitions = this.options.transitions,
              func        = null;

          cb = typeof cb === "function" ? cb : false;

          if (this.lightboxState === "opened") {

            module = "lightbox";

          } else if (this.indexState === "closed") {

            if (cb) {
              cb();
            }

            this._debug("info", "Nothing could be closed, as " +
              "everything is already closed.");

            return;
          }

          // Unbind global events (keyboard and resize).
          this._bind(true);
          $("body").removeClass(classNames.pluginActive);

          func = function() {

            self["$" + module + "DecksContainer"]
              .find("#" + classNames[module + "Deck"] +
                    "-" + self.currentDeck.id)
              .hide();

            self[module + "State"] = "closed";
            self._changeHash("close");

            if (module === "lightbox") {

              self.$lightboxDecksContainer.css({
                width:       0,
                height:      0,
                marginLeft:  0,
                marginTop:   0
              });

              self.$lightboxDecksContainer
                .find("#" + classNames.lightboxDeck +
                      "-" + self.currentDeck.id + " " +
                      "." + classNames.lightboxItem)
                .hide()
                .removeClass("fadein");


              self.$lightboxCaptionLeft.html("");
              self.$lightboxCaptionCenter.html("");
              self.$lightboxCaptionRight.html("");

            }

            if (self.prevScrollPosition.length === 2) {

              window.scrollTo(
                self.prevScrollPosition[0],
                self.prevScrollPosition[1]
              );

              self.prevScrollPosition = [];
            }

            if (cb) {
              cb();
            } else if (typeof self.options.callbacks.close === "function") {
              self.options.callbacks.close(module, self.currentDeck.id);
            }

          };


          this["$" + module + "Wrapper"]
            .fadeOut(
              transitions["fadeOut" + self._capitalize(module)],
              function() {

                if (self.options[module].overlay) {

                  self["$" + module + "Overlay"]
                    .fadeOut(
                      transitions["fadeOut" + self._capitalize(module) + "Overlay"],
                      func
                    );

                } else {

                  func();

                }
              }
            );

        },


        // Destroy Method
        // --------------
        // **Public method** to destroy the markup and event bindings
        // generated by the plugin. Invoke by calling
        // `$.ScalableLightbox("destroy", callback);`
        destroy: function(cb) {

          cb = typeof cb === "function" ? cb : false;

          // Unbind all events.
          this._bind(true);

          this._bindClicks(true);
          this._bindIndexLink(true);
          this._bindThumbLinks(true);


          // Destroy masonry if it was previously embedded.
          if ($.fn.masonry &&
              this.options.index.layout === "masonry") {

            this.$indexDecksContainer
              .find("." + this.options.classNames.indexDeck)
              .masonry("destroy");

            this.initMasonry = false;
          }

          // Remove all divs that where constructed.
          this.$container.remove();

          // remove body tag (in case it is still present)
          $("body").removeClass(this.options.classNames.pluginActive);


          if (cb) {
            cb();
          }

          this._debug("info", "Plugin has been successfully removed.");

          // Destroy data and set plugin back to not initialized.
          this.options = null;
          this.initPlugin = false;

        },



        // Navigation Methods
        // ==================

        // Prev Method
        // -----------
        // **Public method**, for navigating to the previous
        // item of the currently displayed lightbox. Invoke
        // by calling `$.ScalableLightbox("prev");`
        prev: function() {
          this._navigateTo("prev");
        },


        // Next Method
        // -----------
        // **Public method**, for navigating to the next
        // item of the currently displayed lightbox. Invoke
        // by calling `$.ScalableLightbox("next");`
        next: function() {
          this._navigateTo("next");
        },


        // Goto Method
        // -----------
        // **Public method**, for navigating to the i-th
        // item (starting at 0) of the currently displayed lightbox.
        // Invoke by calling `$.ScalableLightbox("goto", index);`
        // If the number is higher then the total items in the current
        // deck, it navigates to the last item.
        goto: function(index) {
          this._navigateTo(index);
        },


        // Navigate To Method
        // -----------------
        // **Private method**, that does the heavy lifting
        // for the previously defined, public methods.
        _navigateTo: function(direction) {

          var self = this,
              prev = 0,
              next = 0,
              classNames  = this.options.classNames,
              transitions = this.options.transitions;


          if (this.currentBlocking) {
            return false;
          }

          if (!this.options.lightbox.enabled) {
            return false;
          }

          // if the lightbox is not active, no navigation method can be used
          if (this.lightboxState !== "opened") {
            this._debug("info", "The lightbox module has to be active (displayed) " +
              "when using a navigation method!");

            return false;
          }

          // Prevent navigation left/right if there is only one item.
          if (typeof direction === "string" &&
              this.currentDeck.items.length === 1) {
            return false;
          }

          this.currentBlocking = true;

          if (typeof direction === "number") {

            next = direction;
            prev = this.$lightboxDecksContainer
              .find("#" + classNames.lightboxDeck +
                    "-" + this.currentDeck.id + " " +
                    "." + classNames.lightboxItem +
                    ".fadein")
              .index();

            // if number is below zero or larger then total items
            // go to the last item in the current deck
            if (next >= this.currentDeck.items.length ||
                next < 0) {
              next = this.currentDeck.items.length - 1;
            }

            if (prev === next) {
              prev = -1;
            }

          } else if (direction === "prev") {

            next = this.currentIndex - 1;
            prev = this.currentIndex;


            if (next < 0) {
              next = this.currentDeck.items.length - 1;
              prev = 0;
            }

          } else if (direction === "next") {

            next = this.currentIndex + 1;
            prev = next - 1;

            if (next === this.currentDeck.items.length) {
              prev = this.currentDeck.items.length - 1;
              next = 0;
            }

          }

          this.currentIndex = next;

          if (prev >= 0) {

            this.$lightboxDecksContainer
              .find("#" + classNames.lightboxDeck +
                    "-" + this.currentDeck.id + " " +
                    "." + classNames.lightboxItem)
              .eq(prev)
              .fadeOut(transitions.fadeLightboxItem)
              .removeClass("fadein");

          }


          this.$lightboxDecksContainer
            .find("#" + classNames.lightboxDeck +
                  "-" + this.currentDeck.id + " " +
                  "." + classNames.lightboxItem)
            .eq(next)
            .fadeIn(
              transitions.fadeLightboxItem,
              function() {
                self.currentBlocking = false;
              }
            ).addClass("fadein");

          this._adjustLightboxCaption();
          this.resize();
          this._changeHash("lightbox");

        },


        // Adjust Lightbox Caption Method
        // ------------------------------
        // **Private method**, for changing the lightbox captions according
        // to current item.
        _adjustLightboxCaption: function() {

          var captions = this.options.lightbox.img;

          this.$lightboxCaptionLeft.html(
            this._getCaptionTxt("lightbox", captions.captionLeft)
          );

          this.$lightboxCaptionCenter.html(
            this._getCaptionTxt("lightbox", captions.captionCenter)
          );

          this.$lightboxCaptionRight.html(
            this._getCaptionTxt("lightbox", captions.captionRight)
          );

        },


        // Get Caption Text Method
        // -----------------------
        // **Private method**, for getting the correct caption text
        // displayed.
        _getCaptionTxt: function(module, type, data, i, total) {

          var txt = "", caption, thumbcaption;

          if (module === "lightbox") {
            data = this.currentDeck.items[this.currentIndex];
          }

          caption = (typeof data.caption !== "undefined") ?
            data.caption : "";

          thumbcaption = (typeof data.thumbcaption !== "undefined") ?
            data.thumbcaption : caption;


          switch (type) {
          case "index":
            // No *index module* link, if we are at the *index module* or
            // if we are at the *lightbox module*, but the index is not
            // enabled.
            if (module === "index" ||
                !this.options.index.enabled) {
              break;
            }

            txt  = "<a href=\"#\" class=\"";
            txt += this.options.classNames.lightboxIndexLink;
            txt += "\">" + this.options.lightbox.img.captionIndexTxt;
            txt += "</a>";

            break;

          case "number":
            if (module === "index") {

              txt = this.options.index.thumb.captionNumberFmt
                      .replace(/%n%/gi, i + 1)
                      .replace(/%total%/gi, total);

            } else if (module === "lightbox") {

              txt = this.options.lightbox.img.captionNumberFmt
                      .replace(/%n%/gi, this.currentIndex + 1)
                      .replace(/%total%/gi, this.currentDeck.items.length);

            }

            break;

          case "caption":
            txt = caption;

            break;

          case "thumbcaption":
            txt = thumbcaption;

            break;
          }

          return txt;

        },


        // Hash Listener Method
        // --------------------
        // **Private method**, that listens to the URL hash on page load
        // and loads the corresponding *index or lightbox module*.
        _hashListener: function() {

          var regex1, regex2, match1, match2;

          if (this.options.hash) {

            regex1 = /#lightbox\/index\/(\d*)/;
            regex2 = /#lightbox\/(\d*)\/(\d*)/;
            match1 = regex1.exec(window.location.hash);
            match2 = regex2.exec(window.location.hash);

            if (match1) {

              this.open({
                module:   "index",
                deck:     parseInt(match1[1], 10)
              });

            } else if (match2) {

              this.open({
                module:   "lightbox",
                deck:     parseInt(match2[1], 10),
                index:    parseInt(match2[2], 10)
              });

            }

          }

        },


        // Change Hash Method
        // ------------------
        // **Private method**, for changing the hash of the URL according
        // to the currently opened module.
        _changeHash: function(module) {

          if (this.options.hash) {

            if (module === "index") {

              window.location.hash = "#lightbox/index/" + this.currentDeck.id;

            } else if (module === "lightbox") {

              window.location.hash = "#lightbox/" + this.currentDeck.id + "/" +
                this.currentIndex;

            } else if (module === "close") {

              window.location.hash = "";

            }

          }

        },





        // Resizing Methods
        // ================

        // Resize Method
        // -------------
        // **Public method** that is used to resize the plugin.
        // Whether the *index or lightbox module* is resized, depends on
        // what is currently active (have a look at the `indexState` and
        // `lightboxState` properties).
        resize: function(cb) {

          var self        = this,
              winWidth    = $(window).width(),
              winHeight   = $(window).height(),
              docWidth    = winWidth  -
                ((winWidth < 451 || winHeight < 400) ?
                  this.options.lightbox.padding.horizontalMobile :
                  this.options.lightbox.padding.horizontal),
              docHeight   = winHeight -
                ((winWidth < 451 || winHeight < 400) ?
                  this.options.lightbox.padding.verticalMobile :
                  this.options.lightbox.padding.vertical),
              currentImg, imgWidth, imgHeight;

          cb = typeof cb === "function" ? cb : false;

          // Resize the *index module*, if this module is currently active.
          if (this.indexState === "opened") {

            this._resizeIndex("current");

            // inline or general resize callback
            if (cb) {
              cb();
            } else if (typeof self.options.callbacks.resize === "function") {
              self.options.callbacks.resize();
            }

            this._debug("info", "Index module has been resized.");

          // Resize *lightbox module*, if it is currently active.
          } else if (this.lightboxState === "opened") {

            this.$lightboxCaptionContainer.hide();

            // Obtain the current image of the deck so that everything can
            // be resized according to its properties.
            currentImg  = this.currentDeck.items[this.currentIndex];

            if (currentImg) {

              imgWidth  = currentImg.width;
              imgHeight = currentImg.height;

              // Fix for small devices and full screen mode, as `$(window).height()`
              // calculates a *wrong value*.
              /*if (winWidth < 360) {
                docWidth = 280;

                if (window.innerHeight > winHeight) {
                  docHeight = window.innerHeight -
                    this.options.lightbox.padding.vertical;
                }

                // Annoying iOS address bar (hiding or not).
                if (self.prevScrollPosition.length === 0) {
                  this.prevScrollPosition = [$(document).scrollLeft(), $(document).scrollTop()];
                }

                setTimeout(function() {
                  window.scrollTo(0, 0);
                }, 500);

              }*/


              if (imgWidth > docWidth) {
                imgWidth  = docWidth;
                imgHeight = imgWidth * currentImg.ratio;
              }

              if (imgHeight > docHeight) {
                imgHeight = docHeight;
                imgWidth  = imgHeight * 1 / currentImg.ratio;
              }


              this._resizeLightboxCaptions(imgWidth);

              if (typeof Modernizr !== "undefined" &&
                  Modernizr.csstransitions) {

                this.$lightboxDecksContainer.css({
                  width:         imgWidth,
                  height:        imgHeight,
                  marginLeft:   -imgWidth/2,
                  marginTop:    -imgHeight/2
                });
                this.$lightboxCaptionContainer.show();

                // inline or general resize callback
                if (cb) {
                  cb();
                } else if (typeof self.options.callbacks.resize === "function") {
                  self.options.callbacks.resize();
                }

              } else {

                this.$lightboxDecksContainer.stop(true, false).animate({
                  width:         imgWidth,
                  height:        imgHeight,
                  marginLeft:   -imgWidth/2,
                  marginTop:    -imgHeight/2
                }, this.options.transitions.fadeLightboxItem, function() {
                  self.$lightboxCaptionContainer.show();

                  // inline or general resize callback
                  if (cb) {
                    cb();
                  } else if (typeof self.options.callbacks.resize === "function") {
                    self.options.callbacks.resize();
                  }

                });

              }

              this._debug("info", "Lightbox module has been resized.");

            } else {

              this._debug("error", "The current item of the Lightbox module " +
                "does not exist!");

            }

          }

        },


        // Resize Index Method
        // -------------------
        // **Private method** that is used to resize the *index module*.
        // If the `layout` was set to `"masonry"` and the masonry plugin
        // is available, it also resizes the masonry.
        _resizeIndex: function(type) {

          var self = this,
              wrapperVisible = this.$indexWrapper.is(":visible"),
              classNames     = this.options.classNames,
              func           = function() {
                  var $deck = $(this),
                    visible = $deck.is(":visible");

                if (!visible) {
                  $deck.show();
                }

                self._resizeIndexCaptions($deck);

                if ($.fn.masonry && self.options.index.layout === "masonry" &&
                    self.initMasonry) {
                  $deck.masonry("resize");
                }

                if (!visible) {
                  $deck.hide();
                }
              };


          if (!wrapperVisible) {
            this.$indexWrapper.show();
          }


          if (type === "all") {

            this.$indexDecksContainer
              .find("." + classNames.indexDeck)
              .each(func);

          } else if (type === "current") {

            this.$indexDecksContainer
              .find("#" + classNames.indexDeck + "-" + this.currentDeck.id)
              .each(func);

          }


          if (!wrapperVisible) {
            this.$indexWrapper.hide();
          }

        },


        // Resize Index Captions
        // ---------------------
        // **Private method** that adjusts the index thumb captions
        // according to the defined position.
        _resizeIndexCaptions: function($deck) {

          var self = this,
              position   = this.options.index.thumb.captionPosition,
              classNames = this.options.classNames;


          if (position === "above") {

            $deck
              .find("." + classNames.indexItem)
              .each(function() {

                var $me      = $(this),
                    $caption = $me.find("." + classNames.indexItemCaption),
                    height   = $caption.height() + self.options.index.thumb.captionVerticalMargin;


                $me.css("marginTop", "");
                $me.css({ "marginTop": parseInt($me.css("marginTop")) + height });
                $caption.css({ "top": - height });

              });

          } else if (position === "center") {

            $deck
              .find("." + classNames.indexItemCaption)
              .each(function() {

                var $me = $(this);
                $me.css({ "marginTop": - $me.height() / 2 });

              });

          } else if (position === "below") {

            $deck
              .find("." + classNames.indexItem)
              .each(function() {

                var $me      = $(this),
                    $caption = $me.find("." + classNames.indexItemCaption),
                    height   = $caption.height() + self.options.index.thumb.captionVerticalMargin;


                $me.css("marginBottom", "");
                $me.css({ "marginBottom": parseInt($me.css("marginBottom")) + height });
                $caption.css({ "bottom": - height });

              });

          }

        },


        // Resize Lightbox Captions
        // ------------------------
        // **Private method** that adjusts the lightbox captions
        // according to the defined position.
        _resizeLightboxCaptions: function(imgWidth) {

          var position       = this.options.lightbox.img.captionPosition,
              verticalMargin = this.options.lightbox.img.captionVerticalMargin,
              captionHeight, diffHeight;

          this.$lightboxCaptionContainer
            .css({ "width": imgWidth })
            .show();

          this.$lightboxCaptionLeft.css("height", "auto");
          this.$lightboxCaptionCenter.css("height", "auto");
          this.$lightboxCaptionRight.css("height", "auto");

          captionHeight = Math.max(
            this.$lightboxCaptionLeft.height(),
            this.$lightboxCaptionCenter.height(),
            this.$lightboxCaptionRight.height()
          );

          this.$lightboxCaptionLeft.css("height", "100%");
          this.$lightboxCaptionCenter.css("height", "100%");
          this.$lightboxCaptionRight.css("height", "100%");


          if (position === "above" || position === "below") {

            diffHeight = (captionHeight + 2 * verticalMargin) -
              (this.options.lightbox.padding.vertical / 2);

            if (diffHeight > 0) {
              captionHeight -= diffHeight;
            }

          }

          if (position === "above") {

            this.$lightboxCaptionContainer
              .css({ "top": - (captionHeight + verticalMargin) });

          } else if (position === "center") {

            this.$lightboxCaptionContainer
              .css({ "marginTop": - captionHeight / 2 });

          } else if (position === "below") {

            this.$lightboxCaptionContainer
              .css({ "bottom": - (captionHeight + verticalMargin) });

          }


          this.$lightboxCaptionContainer
            .css({ "width": "", "height": captionHeight })
            .hide();

        },


        // Binding Methods
        // ===============

        // Bind Method
        // -----------
        // **Private method**, wrapper for event binding which has to be
        // deactivated when the plugin is closed again.
        _bind: function(unbind) {

          unbind = (typeof unbind === "undefined") ? false : unbind;

          this._bindKeys(unbind);
          this._bindResize(unbind);
          this._bindCaptionLinks(unbind);

        },


        // Bind Keys Method
        // ----------------
        // **Private method**, for binding keyboard events.
        _bindKeys: function(unbind) {

          var self = this;

          if (unbind) {

            if ((this.options.index.enabled &&
                 this.options.index.controls.close) ||
                (this.options.lightbox.enabled &&
                 this.options.lightbox.controls.keys)) {

              $(window.document).unbind("keydown.scalableLightbox.navi");
              $(window.document).unbind("keydown.scalableLightbox.close");

              this._debug("info", "Unbinding keyboard events.");
              this.binded.keys = false;

            }

          } else if (!this.binded.keys) {

            if ((this.options.lightbox.enabled &&
                 this.options.lightbox.controls.keys)) {

              $(window.document)
                .bind("keydown.scalableLightbox.navi", function(event) {

                  switch (event.keyCode) {

                  case 37: // left arrow
                    if (self.lightboxState === "opened") {
                      self.prev();
                    }
                    break;

                  case 39: // right arrow
                    if (self.lightboxState === "opened") {
                      self.next();
                    }
                    break;

                  }

                });

            }


            if ((this.options.index.enabled &&
                 this.options.index.controls.keys) ||
                (this.options.lightbox.enabled &&
                 this.options.lightbox.controls.keys)) {

              $(window.document)
                .bind("keydown.scalableLightbox.close", function(event) {

                  switch (event.keyCode) {

                  case 27: // esc btn
                    if ((self.indexState === "opened" &&
                         self.options.index.controls.close) ||
                        (self.lightboxState === "opened" &&
                         self.options.lightbox.controls.close)) {

                      self.close();
                    }
                    break;

                  }

                });

              this._debug("info", "Binded key events.");
              this.binded.keys = true;

            }

          }

        },


        // Bind Resize Method
        // ------------------
        // **Private method**, for binding the window resize event.
        _bindResize: function(unbind) {

          var self    = this,
              defined = false,
              resizeTimeout;

          if (unbind) {

            // Unbind regular resize or `"smartresize"`.
            if (this.options.resize) {

              $(window).unbind("resize.scalableLightbox");
              this._debug("info", "Unbinding resize event.");
              this.binded.resize = false;

            }

          } else if (!this.binded.resize) {

            if (this.options.resize === "smartresize") {

              $(window).bind("resize.scalableLightbox", function() {

                if (resizeTimeout) {
                  clearTimeout(resizeTimeout);
                }

                resizeTimeout = setTimeout(function() {
                  self.resize();
                }, 200);
              });

              defined = true;

            } else if (this.options.resize) {

              $(window).bind("resize.scalableLightbox", function() {
                self.resize();
              });

              defined = true;

            }

            if (defined) {

              this.binded.resize = true;
              this._debug("info", "Binded resize event.");

            }

          }

        },


        // Bind Click Method
        // -----------------
        // **Private method**, for binding click events.
        _bindClicks: function(unbind) {

          var self       = this,
              defined    = false,
              classNames = this.options.classNames,
              funcAlt    = function() {

                if (unbind) {

                  if (self.options.index.enabled &&
                      self.options.index.controls.close) {

                    self.$indexWrapper
                      .off("click.scalableLightbox.indexClose");

                    defined = true;

                  }


                  if (self.options.lightbox.enabled &&
                      self.options.lightbox.controls.close) {

                    self.$lightboxWrapper
                      .off("click.scalableLightbox.lightboxClose");

                    defined = true;

                  }

                  if (self.options.lightbox.enabled &&
                      self.options.lightbox.controls.clicks) {

                    self.$lightboxDecksContainer
                      .off("click.scalableLightbox.lightboxItem");

                    self.$lightboxWrapper
                      .off("click.scalableLightbox.leftCursor");

                    self.$lightboxWrapper
                      .off("click.scalableLightbox.rightCursor");

                    defined = true;

                  }

                  if (defined) {

                    self._debug("info", "Unbinding click events.");
                    self.binded.clicks = false;

                  }

                } else if (!self.binded.clicks) {

                  if (self.options.index.enabled &&
                      self.options.index.controls.close) {

                    self.$indexWrapper
                      .on("click.scalableLightbox.indexClose", function() {
                        self.close();
                      });

                    defined = true;

                  }


                  if (self.options.lightbox.enabled &&
                      self.options.lightbox.controls.close) {

                    self.$lightboxWrapper
                      .on("click.scalableLightbox.lightboxClose", function() {
                        self.close();
                      });

                      defined = true;

                  }

                  if (self.options.lightbox.enabled &&
                      self.options.lightbox.controls.clicks) {

                    self.$lightboxDecksContainer
                      .on(
                        "click.scalableLightbox.lightboxItem",
                        "." + classNames.lightboxItem,
                        function(event) {
                          event.stopPropagation();
                        }
                      );

                    self.$lightboxWrapper
                      .on(
                        "click.scalableLightbox.leftCursor",
                        "." + classNames.lightboxCursor + ".left",
                        function(event) {
                          event.stopPropagation();
                          self.prev();
                        }
                      );

                    self.$lightboxWrapper
                      .on(
                        "click.scalableLightbox.rightCursor",
                        "." + classNames.lightboxCursor + ".right",
                        function(event) {
                          event.stopPropagation();
                          self.next();
                        }
                      );

                    defined = true;

                  }

                  if (defined) {

                    self._debug("info", "Binded click events.");
                    self.binded.clicks = true;

                  }

                }

              };


          if (typeof window.define === "function" && window.define.amd &&
              typeof Modernizr !== "undefined" &&
              Modernizr.touch) {

            require(["hammer"], function() {
              self._bindTouch(unbind);
            }, function() {
              funcAlt();
            });

          } else if ($.fn.hammer &&
                     typeof Modernizr !== "undefined" &&
                     Modernizr.touch) {

            this._bindTouch(unbind);

          } else {

            funcAlt();

          }

        },


        // Bind Touch Method
        // -----------------
        // **Private method**, for binding touch events on the *lightbox module*
        // (swipe left or right for displaying previous or next deck item).
        _bindTouch: function(unbind) {

          var self       = this,
              defined    = false,
              classNames = this.options.classNames;


          if (unbind) {

            if (this.options.index.enabled) {

              if(this.options.index.controls.close) {

                this.$indexWrapper
                  .hammer()
                  .off("tap.scalableLightbox.indexClose");

              }

              this.$indexWrapper
                .hammer()
                .off("drag.scalableLightbox.indexInner swipe.scalableLightbox.indexInner");

              this.$indexWrapper
                .hammer()
                .off("drag.scalableLightbox.indexOuter swipe.scalableLightbox.indexOuter");

              defined = true;

            }

            if (this.options.lightbox.enabled) {

              if(this.options.lightbox.controls.close) {

                this.$lightboxWrapper
                  .hammer()
                  .off("tap.scalableLightbox.lightboxClose");

              }

              this.$lightboxWrapper
                .hammer()
                .off("tap.scalableLightbox.leftCursor tap.scalableLightbox.rightCursor");

              this.$lightboxWrapper
                .hammer()
                .off("drag.scalableLightbox.navi");

              this.$lightboxDecksContainer
                .hammer()
                .off("swipe.scalableLightbox.navi");

              defined = true;

            }

            if (defined) {

              this._debug("info", "Unbinding touch events.");
              this.binded.touch = false;

            }

          } else if (!this.binded.touch) {

            if (this.options.index.enabled) {

              if(this.options.index.controls.close) {

                this.$indexWrapper
                  .hammer()
                  .on(
                    "tap.scalableLightbox.indexClose",
                    function(event) {
                      event.gesture.preventDefault();
                      self.close();
                    }
                  );

              }


              // Make index decks container scrollable.
              this.$indexWrapper
                .hammer()
                .on(
                  "drag.scalableLightbox.indexInner swipe.scalableLightbox.indexInner",
                  "." + classNames.indexDecksContainer,
                  function(event) {
                    event.stopPropagation();
                  }
                );

              // But disallow page scrolling of underlying divs in iOS.
              this.$indexWrapper
                .hammer()
                .on(
                  "drag.scalableLightbox.indexOuter swipe.scalableLightbox.indexOuter",
                  function(event) {
                    event.gesture.preventDefault();
                    event.gesture.stopPropagation();
                  }
                );

              defined = true;

            }

            if (this.options.lightbox.enabled) {

              if(this.options.lightbox.controls.close) {

                this.$lightboxWrapper
                  .hammer()
                  .on(
                    "tap.scalableLightbox.lightboxClose",
                    function(event) {
                      event.gesture.preventDefault();
                      self.close();
                    }
                  );

              }

              this.$lightboxWrapper
                .hammer()
                .on(
                  "tap.scalableLightbox.leftCursor",
                  "." + classNames.lightboxCursor + ".left",
                  function(event) {
                    event.stopPropagation();
                    self.prev();
                  }
                );

              this.$lightboxWrapper
                .hammer()
                .on(
                  "tap.scalableLightbox.rightCursor",
                  "." + classNames.lightboxCursor + ".right",
                  function(event) {
                    event.stopPropagation();
                    self.next();
                  }
                );

              this.$lightboxWrapper
                .hammer()
                .on(
                  "drag.scalableLightbox.navi",
                  function(event) {

                    if (event.target.className === "left" ||
                        event.target.className === "center" ||
                        event.target.className === "right") {

                      event.gesture.stopPropagation();

                    } else {

                      event.gesture.stopPropagation();
                      event.gesture.preventDefault();

                    }
                  }
                );

              this.$lightboxDecksContainer
                .hammer({ swipeVelocityX: 0.4 })
                .on(
                  "swipe.scalableLightbox.navi",
                  function(event) {
                    event.gesture.preventDefault();
                    event.gesture.stopPropagation();

                    switch (event.gesture.direction) {

                    case "left":
                      self.next();
                      break;

                    case "right":
                      self.prev();
                      break;

                    }
                  }

                );

              defined = true;

            }


            if (defined) {

              this._debug("info", "Binded touch events.");
              this.binded.touch = true;

            }

          }

        },


        // Bind Index Link Method
        // ----------------------
        // **Private method**, for binding links in the lightbox caption which
        // navigate to the *index module*.
        _bindIndexLink: function(unbind) {

          var self       = this,
              classNames = this.options.classNames,
              func       = function() {

                if (unbind) {

                  self.$lightboxWrapper
                    .hammer()
                    .off("tap.scalableLightbox.indexItem");

                } else {

                  self.$lightboxWrapper
                    .hammer()
                    .on(
                      "tap.scalableLightbox.indexItem",
                      "a." + classNames.lightboxIndexLink,
                      function(event) {
                        event.stopPropagation();

                        self.open({
                          module:   "index",
                          deck:     self.currentDeck.id
                        });
                      }
                    );

                }

              },
              funcAlt    = function() {

                if (unbind) {

                  self.$lightboxWrapper
                    .off("click.scalableLightbox.indexItem");

                } else {

                  self.$lightboxWrapper
                    .on(
                      "click.scalableLightbox.indexItem",
                      "a." + classNames.lightboxIndexLink,
                      function(event) {
                        event.preventDefault();
                        event.stopPropagation();

                        self.open({
                          module:   "index",
                          deck:     self.currentDeck.id
                        });
                      }
                    );

                }

              };


          if (typeof window.define === "function" && window.define.amd &&
              typeof Modernizr !== "undefined" &&
              Modernizr.touch) {

            require(["hammer"], function() {
              func();
            }, function() {
              funcAlt();
            });

          } else if ($.fn.hammer &&
                     typeof Modernizr !== "undefined" &&
                     Modernizr.touch) {

            func();

          } else {

            funcAlt();

          }

        },


        // Bind Index Item Method
        // ----------------------
        // **Private method**, for binding links on the thumbs in the *index module*
        // that navigate to the corresponding item in the *lightbox module*.
        _bindThumbLinks: function(unbind) {

          var self       = this,
              classNames = this.options.classNames,
              func       = function() {

                if (unbind) {

                  self.$indexWrapper
                    .hammer()
                    .off("tap.scalableLightbox.thumbLinks");

                } else {

                  self.$indexWrapper
                    .hammer()
                    .on(
                      "tap.scalableLightbox.thumbLinks",
                      "." + classNames.indexItem,
                      function(event) {
                        event.gesture.stopPropagation();

                        if (self.options.lightbox.enabled) {

                            self.open({
                              module:   "lightbox",
                              deck:     self.currentDeck.id,
                              index:    $(this).index()
                            });

                        } else {

                          self._debug("error", "The lightbox module cannot be opened, because it "+
                            "is not enabled!");

                        }
                      }
                    );

                }

              },

              funcAlt    = function() {

                if (unbind) {

                  self.$indexWrapper.off("click.scalableLightbox.thumbLinks");

                } else {

                  self.$indexWrapper
                    .on(
                      "click.scalableLightbox.thumbLinks",
                      "." + classNames.indexItem,
                      function(event) {
                        event.preventDefault();
                        event.stopPropagation();

                        if (self.options.lightbox.enabled) {

                          self.open({
                            module:   "lightbox",
                            deck:     self.currentDeck.id,
                            index:    $(this).index()
                          });

                        } else {

                          self._debug("error", "The lightbox module cannot be opened, because it "+
                            "is not enabled!");

                        }
                      }
                    );

                }
              };


          if (typeof window.define === "function" && window.define.amd &&
              typeof Modernizr !== "undefined" &&
              Modernizr.touch) {

            require(["hammer"], function() {
              func();
            }, function() {
              funcAlt();
            });

          } else if ($.fn.hammer &&
                     typeof Modernizr !== "undefined" &&
                     Modernizr.touch) {

            func();

          } else {

            funcAlt();

          }

        },


        // Bind Caption Links Method
        // -------------------------
        // **Private method**, for binding links in caption which come from the content
        // and should not bubble up to the parent element (closing the *index* or *lightbox module*).
        _bindCaptionLinks: function(unbind) {

          var self       = this,
              classNames = this.options.classNames,
              func       = function() {

                if (unbind) {

                  if (self.options.index.enabled) {

                    self.$indexDecksContainer
                      .hammer()
                      .off("tap.scalableLightbox.indexCaptionLinks");

                  }

                  if (self.options.lightbox.enabled) {

                    self.$lightboxCaptionContainer
                      .hammer()
                      .off("tap.scalableLightbox.lightboxCaptionLinks");

                  }

                } else {

                  if (self.options.index.enabled) {

                    self.$indexDecksContainer
                      .hammer()
                      .on(
                        "tap.scalableLightbox.indexCaptionLinks",
                        "." + classNames.indexItemCaption + " a",
                        function(event) {
                          event.gesture.stopPropagation();
                        }
                      );

                  }

                  if (self.options.lightbox.enabled) {

                    self.$lightboxCaptionContainer
                      .hammer()
                      .on(
                        "tap.scalableLightbox.lightboxCaptionLinks",
                        "a:not(." + classNames.lightboxIndexLink + ")",
                        function(event) {
                          event.gesture.stopPropagation();
                        }
                      );

                  }

                }

              },
              funcAlt    = function() {

                if (unbind) {

                  if (self.options.index.enabled) {
                    self.$indexDecksContainer
                      .off("click.scalableLightbox.indexCaptionLinks");
                  }

                  if (self.options.lightbox.enabled) {
                    self.$lightboxCaptionContainer
                      .off("click.scalableLightbox.lightboxCaptionLinks");
                  }

                } else {

                  if (self.options.index.enabled) {

                    self.$indexDecksContainer
                      .on(
                        "click.scalableLightbox.indexCaptionLinks",
                        "." + classNames.indexItemCaption + " a",
                        function(event) {
                          event.stopPropagation();
                        }
                      );

                  }

                  if (self.options.lightbox.enabled) {

                    self.$lightboxCaptionContainer
                      .on(
                        "click.scalableLightbox.lightboxCaptionLinks",
                        "a:not(." + classNames.lightboxIndexLink + ")",
                        function(event) {
                          event.stopPropagation();
                        }
                      );

                  }

                }

              };

          if (typeof window.define === "function" && window.define.amd &&
              typeof Modernizr !== "undefined" &&
              Modernizr.touch) {

            require(["hammer"], function() {
              func();
            }, function() {
              funcAlt();
            });

          } else if ($.fn.hammer &&
                     typeof Modernizr !== "undefined" &&
                     Modernizr.touch) {

            func();

          } else {

            funcAlt();

          }
        },



        // Template Methods
        // ================

        // Index Template
        // --------------
        // **Private method**, which creates the *index module* markup.
        _tmplIndex: function() {

          var classNames = this.options.classNames;

          // Add the index overlay div, if activated.
          if (this.options.index.overlay) {

            this.$indexOverlay = $("<div />")
              .addClass(classNames.indexOverlay);

            this.$container.append(this.$indexOverlay);

          }

          // Create index wrapper element.
          this.$indexWrapper = $("<div />")
            .addClass(classNames.indexWrapper);

          // Append decks container element to the index wrapper.
          this.$indexDecksContainer = $("<div />")
            .addClass(classNames.indexDecksContainer);

          if (this.options.index.layout === "float") {
            this.$indexDecksContainer
              .addClass(classNames.clearfix);
          }

          this.$indexWrapper.append(this.$indexDecksContainer);

          // Add everything to plugin's container element.
          this.$container.append(this.$indexWrapper);

          // Bind event delegation for links on the thumbnails.
          this._bindThumbLinks();

        },


        // Index Deck Template
        // -------------------
        // **Private method**, which creates a `deck` for the *index module*.
        _tmplIndexDeck: function(deck) {

          var classNames   = this.options.classNames,
              $div         = $("<div class=\"" + classNames.indexDeck + "\" " +
                               "id=\"" +classNames.indexDeck + "-" + deck.id + "\"></div>"),
              i = 0, total = deck.items.length;

          for (i; i < total; i++) {
            $div.append(this._tmplIndexItem(deck.items[i], i, total));
          }

          return $div;

        },


        // Index Item Template
        // -------------------
        // **Private method**, which adds an item to a `deck` of the *index module*.
        _tmplIndexItem: function(item, i, total) {

          var position   = this.options.index.thumb.captionPosition,
              classNames = this.options.classNames,
              $html      = $("<div class=\"" + classNames.indexItem + "\">" +
                "<div class=\"" + classNames.indexItemOverlay + "\"></div>" +
                "<div class=\"" + classNames.indexItemImg + "\">" +
                  "<div class=\"" + classNames.indexItemIndicator + "\"></div>" +
                "</div>" +
                "<div class=\"" + classNames.indexItemCaption + "\">" +
                  "<div class=\"" + classNames.indexItemCaptionInner + "\"></div>" +
                "</div>" +
              "</div>");


          if (!this.options.index.thumb.overlay) {
            $html.find("." + classNames.indexItemOverlay).remove();
          }

          if (position === "top" || position === "center" || position === "bottom") {
            $html.find("." + classNames.indexItemCaption).addClass(position);
          }

          $html.find("." + classNames.indexItemCaptionInner).html(
            this._getCaptionTxt(
              "index",
              this.options.index.thumb.caption,
              item,
              i,
              total
            )
          );

          $html.css({
            "height": this.options.index.thumb.width * item.ratio,
            "width":  this.options.index.thumb.width
          });

          return $html;

        },


        // Lightbox Template
        // -----------------
        // **Private method**, which creates the *lightbox module* markup.
        _tmplLightbox: function() {

          var position   = this.options.lightbox.img.captionPosition,
              classNames = this.options.classNames,
              $cursorLeft, $cursorRight;

          // Add the lightbox overlay, if activated.
          if (this.options.lightbox.overlay) {

            this.$lightboxOverlay = $("<div />")
              .addClass(classNames.lightboxOverlay);

            this.$container.append(this.$lightboxOverlay);

          }

          // Create lightbox wrapper element.
          this.$lightboxWrapper = $("<div />")
            .addClass(classNames.lightboxWrapper);

          // Append decks container element to the lightbox wrapper.
          this.$lightboxDecksContainer = $("<div />")
            .addClass(classNames.lightboxDecksContainer);

          this.$lightboxWrapper.append(this.$lightboxDecksContainer);


          // Add markup for click events (cursors), if enabled.
          if (this.options.lightbox.controls.clicks) {

            $cursorLeft = $("<div />")
              .addClass(classNames.lightboxCursor)
              .addClass("left");

            $cursorRight = $("<div />")
              .addClass(classNames.lightboxCursor)
              .addClass("right");


            this.$lightboxDecksContainer.append($cursorLeft);
            this.$lightboxDecksContainer.append($cursorRight);

          }


          // Append caption (left, center, right)
          this.$lightboxCaptionContainer = $("<div />")
            .addClass(classNames.lightboxItemCaptionContainer);

          if (position === "top" || position === "center" || position === "bottom") {
            this.$lightboxCaptionContainer.addClass(position);
          }


          this.$lightboxCaptionLeft   = $("<div />").addClass("left");
          this.$lightboxCaptionCenter = $("<div />").addClass("center");
          this.$lightboxCaptionRight  = $("<div />").addClass("right");

          this.$lightboxCaptionContainer.append(this.$lightboxCaptionLeft);
          this.$lightboxCaptionContainer.append(this.$lightboxCaptionCenter);
          this.$lightboxCaptionContainer.append(this.$lightboxCaptionRight);

          this.$lightboxDecksContainer.append(this.$lightboxCaptionContainer);

          // Add everything to plugin's container element.
          this.$container.append(this.$lightboxWrapper);

          // Bind event delegation for links on the index.
          this._bindIndexLink();

        },


        // Lightbox Deck Template
        // ----------------------
        // **Private method**, which creates a `deck` for the *lightbox module*.
        _tmplLightboxDeck: function(deck) {

          var classNames = this.options.classNames,
              $div = $("<div class=\"" + classNames.lightboxDeck + "\" " +
                       "id=\"" +classNames.lightboxDeck + "-" + deck.id + "\"></div>"),
              i = 0, total = deck.items.length;

          for (i; i < total; i++) {
            $div.append(
              "<div class=\"" + classNames.lightboxItem + "\">" +
                "<div class=\"" + classNames.lightboxItemIndicator + "\"></div>" +
              "</div>"
            );
          }

          return $div;

        },



        // Helper Methods
        // ==============

        // Debug Method
        // ------------
        // **Private method**. Internal debug method that augments
        // the closure `_debug` function. Whether information is displayed
        // in the browser's console, depends on `debug` setting.
        _debug: function(type, msg) {

          if (this.options.debug) {
            _debug(type, msg);
          }

        },


        // Capitalize Method
        // -----------------
        // **Private method** to capitalize first char of a string.
        _capitalize: function(string) {
          return string.charAt(0).toUpperCase() + string.slice(1);
        },


        // Create Masonry Method
        // ---------------------
        // **Private method** to create a masonry if `layout` of the
        // *index module* settings is set to `masonry` and the masonry
        // plugin is present.
        _createMasonry: function() {

          var self = this,
              classNames = this.options.classNames,
              func = function() {
                self.$indexDecksContainer
                  .find("." + classNames.indexDeck)
                  .addClass("masonry")
                  .masonry({
                    itemSelector:   "." + classNames.indexItem,
                    isFitWidth:     true,
                    isResizable:    false
                  });

                self.initMasonry = true;
              };

          if (typeof window.define === "function" && window.define.amd) {

            require(["masonry"], function() {
              func();
            }, function() {
              self._debug("error", "Masonry is activated, however the " +
              "jQuery Masonry plugin via requirejs is missing!");
            });

          } else if ($.fn.masonry &&
              this.options.index.layout === "masonry") {

            func();

          } else if (this.options.index.layout === "masonry") {

            this._debug("error", "Masonry is activated, however the " +
              "jQuery Masonry plugin is missing!");

          }

        }
      };

      $.data(document.body, "ScalableLightbox", instance);
    }


    // Plugin Bridge
    // =============

    // Method Call
    // -----------
    // Check if the called method is available and that it is not a private method.
    if (typeof options === "string") {

      args = Array.prototype.slice.call(arguments, 1);


      if (!$.isFunction(instance[options]) || options.charAt(0) === "_") {

        _debug("error", "No such method '" + options + "' exists!");

      } else {

        if (instance.initPlugin) {
          return instance[options].apply(instance, args);
        } else {
          _debug("error", "Method '" + options + "' called prior to plugin initialization!");
        }


      }

    // Initial Call
    // -----------
    // In case the options parameter is an object, it is passed to the `_init` function.
    } else {

      return instance._init(
        options, (typeof arguments[1] !== "undefined") ? arguments[1] : false
      );

    }

  };

}));