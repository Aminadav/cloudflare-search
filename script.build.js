'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

if ('undefined' == typeof INSTALL_SCOPE.BlockLy) {
    INSTALL_SCOPE.BlockLy = {};
}

(function () {
    var gSearch = function () {
        function gSearch() {
            _classCallCheck(this, gSearch);
        }

        _createClass(gSearch, [{
            key: 'getHost',
            value: function getHost() {
                return BlockLy.gSearch.location.host;
            }
        }, {
            key: 'addSearchToPage',
            value: function addSearchToPage() {
                this.currentSVG = this.SVG.replace(/color/, this.options.color);

                document.getElementsByTagName('blockly-g-search-trigger')[0].innerHTML = this.currentSVG;
            }
        }, {
            key: 'reload',
            value: function reload(options) {
                this.options = options;
                this.reRender();
            }
        }, {
            key: 'reRender',
            value: function reRender() {
                this.searchOuter = document.createElement('blockly-g-search');
                this.searchOuter.innerHTML = '<blockly-g-search-inner>\n                                        <blockly-g-search-visible-on-open>\n                                            <input class="blockly-g-search-input" onblur="BlockLy.gSearch.blur()" onkeypress="BlockLy.gSearch.keyPress(event)" type=\'search\'>\n                                            <button class="blockly-g-search-submit" onclick=\'BlockLy.gSearch.search()\' value=\'search\' onfocus="BlockLy.gSearch.focusOnSubmit()" onblur="BlockLy.gSearch.blur()">Search</button>\n                                        </blockly-g-search-visible-on-open>\n                                        <blockly-g-search-trigger onclick="BlockLy.gSearch.searchTrigger()">\n                                        Trigger\n                                        </blockly-g-search-trigger>\n                                    </blockly-g-search-inner>';

                if (this.options["location type"] == 'element') {
                    INSTALL_SCOPE.BlockLy.gSearch.elm = INSTALL.createElement(this.options.location, INSTALL_SCOPE.BlockLy.gSearch.elm);
                    this.renderInElm();
                } else {
                    this.renderFloated();
                    this.addClass(this.searchOuter, 'blockly-g-floated');
                }

                this.searchInput.setAttribute('placeholder', this.options.placeholder);
                this.searchSubmit.value = this.options.submit_text;
            }
        }, {
            key: 'renderInElm',
            value: function renderInElm() {
                INSTALL_SCOPE.BlockLy.gSearch.elm.appendChild(this.searchOuter);
                //searchOuter.id='searchOuter'
                this.searchInput = document.getElementsByClassName('blockly-g-search-input')[0];
                this.searchSubmit = document.getElementsByClassName('blockly-g-search-submit')[0];
            }
        }, {
            key: 'renderFloated',
            value: function renderFloated() {
                document.body.appendChild(this.searchOuter);
            }
        }, {
            key: 'blur',
            value: function blur() {
                var _this = this;
                this.closeTimeout = setTimeout(function () {
                    _this.closeSearch();
                }, 100);
            }
        }, {
            key: 'focusOnSubmit',
            value: function focusOnSubmit() {
                clearTimeout(this.closeTimeout);
            }
        }, {
            key: 'closeSearch',
            value: function closeSearch() {
                this.removeClass(this.searchOuter, 'blockly-gsearch-opened');
                //document.getElementById('search_open').style.display='none'
                //document.getElementById('search_trigger').style.display='block'
            }
        }, {
            key: 'addClass',
            value: function addClass(elm, className) {
                var classAttr = elm.className,
                    classList = classAttr.split(' ');
                if (classList.indexOf(className) == -1) {
                    classList.push(className);
                }
                elm.className = classList.join(' ');
            }
        }, {
            key: 'removeClass',
            value: function removeClass(elm, className) {
                var classAttr = elm.className,
                    classList = classAttr.split(' ');
                if (classList.indexOf(className) > -1) {
                    classList.splice(classList.indexOf(className), 1);
                }
                elm.className = classList.join(' ');
            }
        }, {
            key: 'searchTrigger',
            value: function searchTrigger() {
                this.openSearch();
            }
        }, {
            key: 'openSearch',
            value: function openSearch() {
                this.addClass(this.searchOuter, 'blockly-gsearch-opened');
                // document.getElementById('search_open').style.display='block'
                // document.getElementById('search_trigger').style.display='none'
                this.searchInput.focus();
            }
        }, {
            key: 'keyPress',
            value: function keyPress(e) {
                if (e.keyCode == 13) {
                    this.search();
                }
            }
        }, {
            key: 'search',
            value: function search() {
                window.open(this.getSearchUrl(), '_blank');
            }
        }, {
            key: 'getSearchUrl',
            value: function getSearchUrl() {
                var searchTerm = this.getSearchTerm();
                return 'https://www.google.com/search?q=' + encodeURIComponent(searchTerm) + ' site:' + this.getHost();
            }
        }, {
            key: 'getSearchTerm',
            value: function getSearchTerm() {
                return this.searchInput.value;
            }
        }]);

        return gSearch;
    }();

    ;
    /*BlockLyGSearch.options = null;
    BlockLyGSearch.location : null;
    */
    INSTALL_SCOPE.BlockLy.gSearch = new gSearch();
    INSTALL_SCOPE.BlockLy.gSearch.SVG = '<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"      width="30" height="30" viewBox="0 0 485.213 485.213" fill="color" style="enable-background:new 0 0 485.213 485.213;"    xml:space="preserve"> <g>  <g>         <path d="M363.909,181.955C363.909,81.473,282.44,0,181.956,0C81.474,0,0.001,81.473,0.001,181.955s81.473,181.951,181.955,181.951          C282.44,363.906,363.909,282.437,363.909,181.955z M181.956,318.416c-75.252,0-136.465-61.208-136.465-136.46           c0-75.252,61.213-136.465,136.465-136.465c75.25,0,136.468,61.213,136.468,136.465             C318.424,257.208,257.206,318.416,181.956,318.416z"/>        <path d="M471.882,407.567L360.567,296.243c-16.586,25.795-38.536,47.734-64.331,64.321l111.324,111.324            c17.772,17.768,46.587,17.768,64.321,0C489.654,454.149,489.654,425.334,471.882,407.567z"/>   </g> </g> </svg>';
    INSTALL_SCOPE.BlockLy.gSearch.elm = null;

    if (window.INSTALL_OPTIONS) {
        INSTALL_SCOPE.BlockLy.gSearch.options = INSTALL_OPTIONS;
        INSTALL_SCOPE.BlockLy.gSearch.location = INSTALL.proxy.originalURL.parsed;
    } else {
        INSTALL_SCOPE.BlockLy.gSearch.options = {
            color: 'blue',
            position: 'top left',
            placeholder: 'Enter search term ...'
        };
        INSTALL_SCOPE.BlockLy.gSearch.location = window.location;
    }
    INSTALL_SCOPE.BlockLy.gSearch.addSearchToPage();
    //console.log('ssss');
})();
