export default {
  name: "component-doc",
  components: {
    "element-demo0": (function() {
      var render = function() {
        var _vm = this;
        var _h = _vm.$createElement;
        var _c = _vm._self._c || _h;
        return _c(
          "div",
          [
            _c(
              "el-row",
              [
                _c("el-button", [_vm._v("默认按钮")]),
                _vm._v(" "),
                _c("el-button", { attrs: { type: "primary" } }, [
                  _vm._v("主要按钮")
                ]),
                _vm._v(" "),
                _c("el-button", { attrs: { type: "success" } }, [
                  _vm._v("成功按钮")
                ]),
                _vm._v(" "),
                _c("el-button", { attrs: { type: "info" } }, [
                  _vm._v("信息按钮")
                ]),
                _vm._v(" "),
                _c("el-button", { attrs: { type: "warning" } }, [
                  _vm._v("警告按钮")
                ]),
                _vm._v(" "),
                _c("el-button", { attrs: { type: "danger" } }, [
                  _vm._v("危险按钮")
                ])
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "el-row",
              [
                _c("el-button", { attrs: { plain: "" } }, [_vm._v("朴素按钮")]),
                _vm._v(" "),
                _c("el-button", { attrs: { type: "primary", plain: "" } }, [
                  _vm._v("主要按钮")
                ]),
                _vm._v(" "),
                _c("el-button", { attrs: { type: "success", plain: "" } }, [
                  _vm._v("成功按钮")
                ]),
                _vm._v(" "),
                _c("el-button", { attrs: { type: "info", plain: "" } }, [
                  _vm._v("信息按钮")
                ]),
                _vm._v(" "),
                _c("el-button", { attrs: { type: "warning", plain: "" } }, [
                  _vm._v("警告按钮")
                ]),
                _vm._v(" "),
                _c("el-button", { attrs: { type: "danger", plain: "" } }, [
                  _vm._v("危险按钮")
                ])
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "el-row",
              [
                _c("el-button", { attrs: { round: "" } }, [_vm._v("圆角按钮")]),
                _vm._v(" "),
                _c("el-button", { attrs: { type: "primary", round: "" } }, [
                  _vm._v("主要按钮")
                ]),
                _vm._v(" "),
                _c("el-button", { attrs: { type: "success", round: "" } }, [
                  _vm._v("成功按钮")
                ]),
                _vm._v(" "),
                _c("el-button", { attrs: { type: "info", round: "" } }, [
                  _vm._v("信息按钮")
                ]),
                _vm._v(" "),
                _c("el-button", { attrs: { type: "warning", round: "" } }, [
                  _vm._v("警告按钮")
                ]),
                _vm._v(" "),
                _c("el-button", { attrs: { type: "danger", round: "" } }, [
                  _vm._v("危险按钮")
                ])
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "el-row",
              [
                _c("el-button", {
                  attrs: { icon: "el-icon-search", circle: "" }
                }),
                _vm._v(" "),
                _c("el-button", {
                  attrs: { type: "primary", icon: "el-icon-edit", circle: "" }
                }),
                _vm._v(" "),
                _c("el-button", {
                  attrs: { type: "success", icon: "el-icon-check", circle: "" }
                }),
                _vm._v(" "),
                _c("el-button", {
                  attrs: { type: "info", icon: "el-icon-message", circle: "" }
                }),
                _vm._v(" "),
                _c("el-button", {
                  attrs: {
                    type: "warning",
                    icon: "el-icon-star-off",
                    circle: ""
                  }
                }),
                _vm._v(" "),
                _c("el-button", {
                  attrs: { type: "danger", icon: "el-icon-delete", circle: "" }
                })
              ],
              1
            )
          ],
          1
        );
      };
      var staticRenderFns = [];

      const democomponentExport = {};
      return {
        render,
        staticRenderFns,
        ...democomponentExport
      };
    })(),
    "element-demo1": (function() {
      var render = function() {
        var _vm = this;
        var _h = _vm.$createElement;
        var _c = _vm._self._c || _h;
        return _c(
          "div",
          [
            _c(
              "el-row",
              [
                _c("el-button", { attrs: { disabled: "" } }, [
                  _vm._v("默认按钮")
                ]),
                _vm._v(" "),
                _c("el-button", { attrs: { type: "primary", disabled: "" } }, [
                  _vm._v("主要按钮")
                ]),
                _vm._v(" "),
                _c("el-button", { attrs: { type: "success", disabled: "" } }, [
                  _vm._v("成功按钮")
                ]),
                _vm._v(" "),
                _c("el-button", { attrs: { type: "info", disabled: "" } }, [
                  _vm._v("信息按钮")
                ]),
                _vm._v(" "),
                _c("el-button", { attrs: { type: "warning", disabled: "" } }, [
                  _vm._v("警告按钮")
                ]),
                _vm._v(" "),
                _c("el-button", { attrs: { type: "danger", disabled: "" } }, [
                  _vm._v("危险按钮")
                ])
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "el-row",
              [
                _c("el-button", { attrs: { plain: "", disabled: "" } }, [
                  _vm._v("朴素按钮")
                ]),
                _vm._v(" "),
                _c(
                  "el-button",
                  { attrs: { type: "primary", plain: "", disabled: "" } },
                  [_vm._v("主要按钮")]
                ),
                _vm._v(" "),
                _c(
                  "el-button",
                  { attrs: { type: "success", plain: "", disabled: "" } },
                  [_vm._v("成功按钮")]
                ),
                _vm._v(" "),
                _c(
                  "el-button",
                  { attrs: { type: "info", plain: "", disabled: "" } },
                  [_vm._v("信息按钮")]
                ),
                _vm._v(" "),
                _c(
                  "el-button",
                  { attrs: { type: "warning", plain: "", disabled: "" } },
                  [_vm._v("警告按钮")]
                ),
                _vm._v(" "),
                _c(
                  "el-button",
                  { attrs: { type: "danger", plain: "", disabled: "" } },
                  [_vm._v("危险按钮")]
                )
              ],
              1
            )
          ],
          1
        );
      };
      var staticRenderFns = [];

      const democomponentExport = {};
      return {
        render,
        staticRenderFns,
        ...democomponentExport
      };
    })(),
    "element-demo2": (function() {
      var render = function() {
        var _vm = this;
        var _h = _vm.$createElement;
        var _c = _vm._self._c || _h;
        return _c(
          "div",
          [
            _c("el-button", { attrs: { type: "text" } }, [_vm._v("文字按钮")]),
            _vm._v(" "),
            _c("el-button", { attrs: { type: "text", disabled: "" } }, [
              _vm._v("文字按钮")
            ])
          ],
          1
        );
      };
      var staticRenderFns = [];

      const democomponentExport = {};
      return {
        render,
        staticRenderFns,
        ...democomponentExport
      };
    })(),
    "element-demo3": (function() {
      var render = function() {
        var _vm = this;
        var _h = _vm.$createElement;
        var _c = _vm._self._c || _h;
        return _c(
          "div",
          [
            _c("el-button", {
              attrs: { type: "primary", icon: "el-icon-edit" }
            }),
            _vm._v(" "),
            _c("el-button", {
              attrs: { type: "primary", icon: "el-icon-share" }
            }),
            _vm._v(" "),
            _c("el-button", {
              attrs: { type: "primary", icon: "el-icon-delete" }
            }),
            _vm._v(" "),
            _c(
              "el-button",
              { attrs: { type: "primary", icon: "el-icon-search" } },
              [_vm._v("搜索")]
            ),
            _vm._v(" "),
            _c("el-button", { attrs: { type: "primary" } }, [
              _vm._v("上传"),
              _c("i", { staticClass: "el-icon-upload el-icon--right" })
            ])
          ],
          1
        );
      };
      var staticRenderFns = [];

      const democomponentExport = {};
      return {
        render,
        staticRenderFns,
        ...democomponentExport
      };
    })(),
    "element-demo4": (function() {
      var render = function() {
        var _vm = this;
        var _h = _vm.$createElement;
        var _c = _vm._self._c || _h;
        return _c(
          "div",
          [
            _c(
              "el-button-group",
              [
                _c(
                  "el-button",
                  { attrs: { type: "primary", icon: "el-icon-arrow-left" } },
                  [_vm._v("上一页")]
                ),
                _vm._v(" "),
                _c("el-button", { attrs: { type: "primary" } }, [
                  _vm._v("下一页"),
                  _c("i", { staticClass: "el-icon-arrow-right el-icon--right" })
                ])
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "el-button-group",
              [
                _c("el-button", {
                  attrs: { type: "primary", icon: "el-icon-edit" }
                }),
                _vm._v(" "),
                _c("el-button", {
                  attrs: { type: "primary", icon: "el-icon-share" }
                }),
                _vm._v(" "),
                _c("el-button", {
                  attrs: { type: "primary", icon: "el-icon-delete" }
                })
              ],
              1
            )
          ],
          1
        );
      };
      var staticRenderFns = [];

      const democomponentExport = {};
      return {
        render,
        staticRenderFns,
        ...democomponentExport
      };
    })(),
    "element-demo5": (function() {
      var render = function() {
        var _vm = this;
        var _h = _vm.$createElement;
        var _c = _vm._self._c || _h;
        return _c(
          "div",
          [
            _c("el-button", { attrs: { type: "primary", loading: true } }, [
              _vm._v("加载中")
            ])
          ],
          1
        );
      };
      var staticRenderFns = [];

      const democomponentExport = {};
      return {
        render,
        staticRenderFns,
        ...democomponentExport
      };
    })(),
    "element-demo6": (function() {
      var render = function() {
        var _vm = this;
        var _h = _vm.$createElement;
        var _c = _vm._self._c || _h;
        return _c(
          "div",
          [
            _c(
              "el-row",
              [
                _c("el-button", [_vm._v("默认按钮")]),
                _vm._v(" "),
                _c("el-button", { attrs: { size: "medium" } }, [
                  _vm._v("中等按钮")
                ]),
                _vm._v(" "),
                _c("el-button", { attrs: { size: "small" } }, [
                  _vm._v("小型按钮")
                ]),
                _vm._v(" "),
                _c("el-button", { attrs: { size: "mini" } }, [
                  _vm._v("超小按钮")
                ])
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "el-row",
              [
                _c("el-button", { attrs: { round: "" } }, [_vm._v("默认按钮")]),
                _vm._v(" "),
                _c("el-button", { attrs: { size: "medium", round: "" } }, [
                  _vm._v("中等按钮")
                ]),
                _vm._v(" "),
                _c("el-button", { attrs: { size: "small", round: "" } }, [
                  _vm._v("小型按钮")
                ]),
                _vm._v(" "),
                _c("el-button", { attrs: { size: "mini", round: "" } }, [
                  _vm._v("超小按钮")
                ])
              ],
              1
            )
          ],
          1
        );
      };
      var staticRenderFns = [];

      const democomponentExport = {};
      return {
        render,
        staticRenderFns,
        ...democomponentExport
      };
    })()
  }
};
