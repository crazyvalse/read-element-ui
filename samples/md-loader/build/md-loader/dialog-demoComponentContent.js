(function() {
  var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(
      "div",
      [
        _c(
          "el-button",
          {
            attrs: { type: "text" },
            on: {
              click: function($event) {
                _vm.dialogVisible = true;
              }
            }
          },
          [_vm._v("点击打开 Dialog")]
        ),
        _vm._v(" "),
        _c(
          "el-dialog",
          {
            attrs: {
              title: "提示",
              visible: _vm.dialogVisible,
              width: "30%",
              "before-close": _vm.handleClose
            },
            on: {
              "update:visible": function($event) {
                _vm.dialogVisible = $event;
              }
            }
          },
          [
            _c("span", [_vm._v("这是一段信息")]),
            _vm._v(" "),
            _c(
              "span",
              {
                staticClass: "dialog-footer",
                attrs: { slot: "footer" },
                slot: "footer"
              },
              [
                _c(
                  "el-button",
                  {
                    on: {
                      click: function($event) {
                        _vm.dialogVisible = false;
                      }
                    }
                  },
                  [_vm._v("取 消")]
                ),
                _vm._v(" "),
                _c(
                  "el-button",
                  {
                    attrs: { type: "primary" },
                    on: {
                      click: function($event) {
                        _vm.dialogVisible = false;
                      }
                    }
                  },
                  [_vm._v("确 定")]
                )
              ],
              1
            )
          ]
        )
      ],
      1
    );
  };
  var staticRenderFns = [];

  const democomponentExport = {
    data() {
      return {
        dialogVisible: false
      };
    },
    methods: {
      handleClose(done) {
        this.$confirm("确认关闭？")
          .then(_ => {
            done();
          })
          .catch(_ => {});
      }
    }
  };
  return {
    render,
    staticRenderFns,
    ...democomponentExport
  };
})();
