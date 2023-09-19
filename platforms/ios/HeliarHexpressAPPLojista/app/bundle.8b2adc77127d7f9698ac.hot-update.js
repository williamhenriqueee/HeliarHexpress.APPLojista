webpackHotUpdate("bundle",{

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/Pedido.vue?vue&type=template&id=09aa6c40&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "Page",
    [
      _c(
        "ActionBar",
        { attrs: { title: "Detalhe do pedido" } },
        [
          _c(
            "Label",
            {
              staticClass: "h2",
              attrs: { row: "0", horizontalAlignment: "center" }
            },
            [
              _c("Span", { attrs: { text: "Detalhe do pedido: " } }),
              _c("Span", { staticClass: "bold", attrs: { text: _vm.Codigo } })
            ],
            1
          )
        ],
        1
      ),
      _c(
        "StackLayout",
        { staticClass: "form" },
        [
          _c(
            "StackLayout",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: !_vm.isAvaliacao,
                  expression: "!isAvaliacao"
                }
              ]
            },
            [
              _c("HtmlView", {
                staticClass: "telefone",
                attrs: { html: _vm._f("FormataLoja")(_vm.Pedidos.Loja) }
              }),
              _c(
                "Label",
                { staticClass: "h3" },
                [
                  _c(
                    "FormattedString",
                    [
                      _c("Span", { attrs: { text: "Nome do Cliente: " } }),
                      _c("Span", {
                        staticClass: "bold",
                        attrs: { text: _vm.Pedidos.NomeCliente }
                      })
                    ],
                    1
                  )
                ],
                1
              ),
              _c(
                "Label",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: _vm.isAceito && _vm.Pedidos.CPF != null,
                      expression: "isAceito && Pedidos.CPF != null"
                    }
                  ],
                  staticClass: "h3"
                },
                [
                  _c(
                    "FormattedString",
                    [
                      _c("Span", { attrs: { text: "CPF: " } }),
                      _c("Span", {
                        staticClass: "bold",
                        attrs: { text: _vm.Pedidos.CPF }
                      })
                    ],
                    1
                  )
                ],
                1
              ),
              _c(
                "Label",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: _vm.isAceito && _vm.Pedidos.Email != null,
                      expression: "isAceito && Pedidos.Email != null"
                    }
                  ],
                  staticClass: "h3"
                },
                [
                  _c(
                    "FormattedString",
                    [
                      _c("Span", { attrs: { text: "Email: " } }),
                      _c("Span", {
                        staticClass: "bold",
                        attrs: { text: _vm.Pedidos.Email }
                      })
                    ],
                    1
                  )
                ],
                1
              ),
              _c(
                "StackLayout",
                { attrs: { orientation: "horizontal" } },
                [
                  _c("HtmlView", {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: _vm.isAceito && _vm.Pedidos.Telefone != null,
                        expression: "isAceito && Pedidos.Telefone != null"
                      }
                    ],
                    staticClass: "telefone telefone-format",
                    attrs: {
                      html: _vm._f("FormataTelefone")(_vm.Pedidos.Telefone)
                    }
                  })
                ],
                1
              ),
              _c(
                "StackLayout",
                { attrs: { orientation: "horizontal" } },
                [
                  _c("HtmlView", {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: _vm.isAceito && _vm.Pedidos.Telefone != null,
                        expression: "isAceito && Pedidos.Telefone != null"
                      }
                    ],
                    staticClass: "telefone whats-format",
                    attrs: {
                      html: _vm._f("FormataWhats")(_vm.Pedidos.Telefone)
                    }
                  })
                ],
                1
              ),
              _c(
                "Label",
                { staticClass: "h3" },
                [
                  _c(
                    "FormattedString",
                    [
                      _c("Span", { attrs: { text: "Veiculo: " } }),
                      _c("Span", {
                        staticClass: "bold",
                        attrs: { text: _vm.Pedidos.Modelo }
                      })
                    ],
                    1
                  )
                ],
                1
              ),
              _c(
                "Label",
                { staticClass: "h3" },
                [
                  _c(
                    "FormattedString",
                    [
                      _c("Span", { attrs: { text: "Produto: " } }),
                      _c("Span", {
                        staticClass: "bold",
                        attrs: { text: _vm.Pedidos.Bateria }
                      })
                    ],
                    1
                  )
                ],
                1
              ),
              _c(
                "Label",
                { staticClass: "h3" },
                [
                  _c(
                    "FormattedString",
                    [
                      _c("Span", { attrs: { text: "Forma de Pagamento: " } }),
                      _c("Span", {
                        staticClass: "bold",
                        attrs: { text: _vm.Pedidos.FormaDePagamento }
                      })
                    ],
                    1
                  )
                ],
                1
              ),
              _c(
                "Label",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: _vm.Pedidos.Desconto > 0,
                      expression: "Pedidos.Desconto > 0"
                    }
                  ],
                  staticClass: "h3"
                },
                [
                  _c(
                    "FormattedString",
                    [
                      _c("Span", { attrs: { text: "Desconto: " } }),
                      _c("Span", {
                        staticClass: "bold",
                        attrs: {
                          text: _vm._f("FormataValor")(_vm.Pedidos.Desconto)
                        }
                      })
                    ],
                    1
                  )
                ],
                1
              ),
              _c(
                "Label",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: _vm.Pedidos.ValorTotalPedido > 0,
                      expression: "Pedidos.ValorTotalPedido > 0"
                    }
                  ],
                  staticClass: "h3"
                },
                [
                  _c(
                    "FormattedString",
                    [
                      _c("Span", { attrs: { text: "Total: " } }),
                      _c("Span", {
                        staticClass: "bold",
                        attrs: {
                          text: _vm._f("FormataValor")(
                            _vm.Pedidos.ValorTotalPedido
                          )
                        }
                      })
                    ],
                    1
                  )
                ],
                1
              ),
              _c(
                "Label",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: _vm.Pedidos.FormaPagamento != null,
                      expression: "Pedidos.FormaPagamento != null"
                    }
                  ],
                  staticClass: "h3"
                },
                [
                  _c(
                    "FormattedString",
                    [
                      _c("Span", { attrs: { text: "Pagamento: " } }),
                      _c("Span", {
                        staticClass: "bold",
                        attrs: { text: _vm.Pedidos.FormaPagamento }
                      })
                    ],
                    1
                  )
                ],
                1
              ),
              _c(
                "Label",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: _vm.Pedidos.Troco > 0,
                      expression: "Pedidos.Troco > 0"
                    }
                  ],
                  staticClass: "h3"
                },
                [
                  _c(
                    "FormattedString",
                    [
                      _c("Span", { attrs: { text: "Troco: " } }),
                      _c("Span", {
                        staticClass: "bold",
                        attrs: {
                          text: _vm._f("FormataValor")(_vm.Pedidos.Troco)
                        }
                      })
                    ],
                    1
                  )
                ],
                1
              ),
              _c(
                "Label",
                { staticClass: "h3" },
                [
                  _c(
                    "FormattedString",
                    [
                      _c("Span", { attrs: { text: "Data da Entrega: " } }),
                      _c("Span", {
                        staticClass: "bold",
                        attrs: {
                          text: _vm._f("FormataData")(_vm.Pedidos.DataEntrega)
                        }
                      })
                    ],
                    1
                  )
                ],
                1
              ),
              _c(
                "Label",
                { staticClass: "h3" },
                [
                  _c(
                    "FormattedString",
                    [
                      _c("Span", { attrs: { text: "Horário da Entrega: " } }),
                      _c("Span", {
                        staticClass: "bold",
                        attrs: {
                          text: _vm._f("FormataHorario")(
                            _vm.Pedidos.DataEntrega
                          )
                        }
                      })
                    ],
                    1
                  )
                ],
                1
              ),
              _c(
                "Label",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: !_vm.isAceito,
                      expression: "!isAceito"
                    }
                  ],
                  staticClass: "h3"
                },
                [
                  _c(
                    "FormattedString",
                    [
                      _c("Span", { attrs: { text: "Bairro: " } }),
                      _c("Span", {
                        staticClass: "bold",
                        attrs: { text: _vm.Pedidos.Bairro }
                      })
                    ],
                    1
                  )
                ],
                1
              ),
              _c("HtmlView", {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm.isAceito && _vm.Pedidos.Endereco != null,
                    expression: "isAceito && Pedidos.Endereco != null"
                  }
                ],
                staticClass: "telefone",
                attrs: { html: _vm._f("FormataEndereco")(_vm.Pedidos.Endereco) }
              }),
              _c(
                "StackLayout",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: _vm.isAceito && _vm.Pedidos.Endereco != null,
                      expression: "isAceito && Pedidos.Endereco != null"
                    }
                  ],
                  attrs: { orientation: "horizontal" }
                },
                [
                  _c("Image", {
                    staticClass: "img-mapa",
                    attrs: { src: "~/images/mapa.png" },
                    on: { tap: _vm.abrirMapa }
                  }),
                  _c("Image", {
                    staticClass: "img-mapa-compartilhar",
                    attrs: { src: "~/images/share.png" },
                    on: { tap: _vm.compartilharMapa }
                  })
                ],
                1
              ),
              _c(
                "Label",
                { staticClass: "h3" },
                [
                  _c(
                    "FormattedString",
                    [
                      _c("Span", { attrs: { text: "Distância aproximada: " } }),
                      _c("Span", {
                        staticClass: "bold",
                        attrs: {
                          text: _vm._f("FormataDistancia")(
                            _vm.Pedidos.DistanciaAproximada
                          )
                        }
                      })
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          ),
          _c(
            "StackLayout",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.isAvaliacao,
                  expression: "isAvaliacao"
                }
              ]
            },
            [
              _c(
                "Label",
                {
                  staticClass: "h2",
                  attrs: { row: "0", horizontalAlignment: "center" }
                },
                [
                  _c(
                    "FormattedString",
                    [
                      _c("Span", { attrs: { text: "Avaliação do pedido: " } }),
                      _c("Span", {
                        staticClass: "bold",
                        attrs: { text: _vm.Codigo }
                      })
                    ],
                    1
                  )
                ],
                1
              ),
              _c(
                "Label",
                { staticClass: "h3", attrs: { textWrap: "true" } },
                [
                  _c(
                    "FormattedString",
                    [
                      _c("Span", {
                        attrs: { text: "O pedido foi entregue corretamente: " }
                      }),
                      _c("Span", {
                        staticClass: "bold",
                        attrs: {
                          text: _vm._f("FormataBoleano")(
                            _vm.Avaliacao.EntregueCorretamente
                          )
                        }
                      })
                    ],
                    1
                  )
                ],
                1
              ),
              _c(
                "Label",
                { staticClass: "h3", attrs: { textWrap: "true" } },
                [
                  _c(
                    "FormattedString",
                    [
                      _c("Span", {
                        attrs: {
                          text:
                            "O produto foi entregue no local e horário agendado: "
                        }
                      }),
                      _c("Span", {
                        staticClass: "bold",
                        attrs: {
                          text: _vm._f("FormataBoleano")(
                            _vm.Avaliacao.LocalHorario
                          )
                        }
                      })
                    ],
                    1
                  )
                ],
                1
              ),
              _c(
                "Label",
                { staticClass: "h3", attrs: { textWrap: "true" } },
                [
                  _c(
                    "FormattedString",
                    [
                      _c("Span", {
                        attrs: { text: "Ocorreu tudo bem com a instalação: " }
                      }),
                      _c("Span", {
                        staticClass: "bold",
                        attrs: {
                          text: _vm._f("FormataBoleano")(
                            _vm.Avaliacao.Instalacao
                          )
                        }
                      })
                    ],
                    1
                  )
                ],
                1
              ),
              _c(
                "Label",
                { staticClass: "h3", attrs: { textWrap: "true" } },
                [
                  _c(
                    "FormattedString",
                    [
                      _c("Span", {
                        attrs: {
                          text:
                            "Em uma escala de 0 a 10, quanto você recomendaria o Heliar Express: "
                        }
                      }),
                      _c("Span", {
                        staticClass: "bold",
                        attrs: { text: _vm.Avaliacao.Nota }
                      })
                    ],
                    1
                  )
                ],
                1
              ),
              _c(
                "Label",
                { staticClass: "h3", attrs: { textWrap: "true" } },
                [
                  _c(
                    "FormattedString",
                    [
                      _c("Span", {
                        attrs: {
                          text: "Porque escolheu comprar no Heliar Express: "
                        }
                      }),
                      _c("Span", {
                        staticClass: "bold",
                        attrs: { text: _vm.Avaliacao.Mensagem }
                      })
                    ],
                    1
                  )
                ],
                1
              ),
              _c(
                "Label",
                { staticClass: "h3", attrs: { textWrap: "true" } },
                [
                  _c(
                    "FormattedString",
                    [
                      _c("Span", { attrs: { text: "Observação: " } }),
                      _c("Span", {
                        staticClass: "bold",
                        attrs: { text: _vm.Avaliacao.Observacao }
                      })
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          ),
          _c("Button", {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: !_vm.Historico && !_vm.isAceito,
                expression: "!Historico && !isAceito"
              }
            ],
            staticClass: "btn espacamento btn-primary btn-green",
            attrs: { text: "Aceitar" },
            on: { tap: _vm.aceitar }
          }),
          _c("Button", {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: !_vm.Historico && !_vm.isAceito,
                expression: "!Historico && !isAceito"
              }
            ],
            staticClass: "btn espacamento btn-primary btn-red",
            attrs: { text: "recusar" },
            on: { tap: _vm.rejeitar }
          }),
          _c("Button", {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: _vm.Historico && _vm.isEncerrar,
                expression: "Historico && isEncerrar"
              }
            ],
            staticClass: "btn espacamento btn-primary btn-green",
            attrs: { text: "Finalizar Pedido" },
            on: { tap: _vm.encerrar }
          }),
          _c("Button", {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: _vm.Historico && _vm.isCancelar,
                expression: "Historico && isCancelar"
              }
            ],
            staticClass: "btn espacamento btn-primary btn-red",
            attrs: { text: "Cancelar Pedido" },
            on: { tap: _vm.cancelar }
          }),
          _c("Button", {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: _vm.isAvaliacaoBotao,
                expression: "isAvaliacaoBotao"
              }
            ],
            staticClass: "btn espacamento btn-primary btn-orange",
            attrs: { text: "Avaliação" },
            on: { tap: _vm.avaliacao }
          }),
          _c("Button", {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: _vm.isBotaoVoltar,
                expression: "isBotaoVoltar"
              }
            ],
            staticClass: "btn espacamento btn-primary btn-grey",
            attrs: { text: "Voltar" },
            on: { tap: _vm.voltar }
          }),
          _c("Button", {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: _vm.isAvaliacaoBotaoVoltar,
                expression: "isAvaliacaoBotaoVoltar"
              }
            ],
            staticClass: "btn espacamento btn-primary btn-grey",
            attrs: { text: "Voltar ao pedido" },
            on: { tap: _vm.voltarPedido }
          })
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1BlZGlkby52dWU/YjgyMSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLFNBQVMsNkJBQTZCLEVBQUU7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QixhQUFhO0FBQ2I7QUFDQSwwQkFBMEIsU0FBUyw4QkFBOEIsRUFBRTtBQUNuRSwwQkFBMEIsOEJBQThCLG1CQUFtQixFQUFFO0FBQzdFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLHNCQUFzQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCO0FBQ3hCLGVBQWU7QUFDZjtBQUNBO0FBQ0EsaUJBQWlCLG9CQUFvQjtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyxTQUFTLDRCQUE0QixFQUFFO0FBQ3pFO0FBQ0E7QUFDQSxnQ0FBZ0M7QUFDaEMsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyxTQUFTLGdCQUFnQixFQUFFO0FBQzdEO0FBQ0E7QUFDQSxnQ0FBZ0M7QUFDaEMsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtD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NzEyN2Q3Zjk2OThhYy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcIlBhZ2VcIixcbiAgICBbXG4gICAgICBfYyhcbiAgICAgICAgXCJBY3Rpb25CYXJcIixcbiAgICAgICAgeyBhdHRyczogeyB0aXRsZTogXCJEZXRhbGhlIGRvIHBlZGlkb1wiIH0gfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJMYWJlbFwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJoMlwiLFxuICAgICAgICAgICAgICBhdHRyczogeyByb3c6IFwiMFwiLCBob3Jpem9udGFsQWxpZ25tZW50OiBcImNlbnRlclwiIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwiU3BhblwiLCB7IGF0dHJzOiB7IHRleHQ6IFwiRGV0YWxoZSBkbyBwZWRpZG86IFwiIH0gfSksXG4gICAgICAgICAgICAgIF9jKFwiU3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcImJvbGRcIiwgYXR0cnM6IHsgdGV4dDogX3ZtLkNvZGlnbyB9IH0pXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKSxcbiAgICAgIF9jKFxuICAgICAgICBcIlN0YWNrTGF5b3V0XCIsXG4gICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZm9ybVwiIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiU3RhY2tMYXlvdXRcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgICAgICAgICAgICAgIHZhbHVlOiAhX3ZtLmlzQXZhbGlhY2FvLFxuICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCIhaXNBdmFsaWFjYW9cIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJIdG1sVmlld1wiLCB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidGVsZWZvbmVcIixcbiAgICAgICAgICAgICAgICBhdHRyczogeyBodG1sOiBfdm0uX2YoXCJGb3JtYXRhTG9qYVwiKShfdm0uUGVkaWRvcy5Mb2phKSB9XG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcIkxhYmVsXCIsXG4gICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJoM1wiIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiRm9ybWF0dGVkU3RyaW5nXCIsXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcIlNwYW5cIiwgeyBhdHRyczogeyB0ZXh0OiBcIk5vbWUgZG8gQ2xpZW50ZTogXCIgfSB9KSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcIlNwYW5cIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYm9sZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogX3ZtLlBlZGlkb3MuTm9tZUNsaWVudGUgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJMYWJlbFwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5pc0FjZWl0byAmJiBfdm0uUGVkaWRvcy5DUEYgIT0gbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImlzQWNlaXRvICYmIFBlZGlkb3MuQ1BGICE9IG51bGxcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaDNcIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiRm9ybWF0dGVkU3RyaW5nXCIsXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcIlNwYW5cIiwgeyBhdHRyczogeyB0ZXh0OiBcIkNQRjogXCIgfSB9KSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcIlNwYW5cIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYm9sZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogX3ZtLlBlZGlkb3MuQ1BGIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiTGFiZWxcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uaXNBY2VpdG8gJiYgX3ZtLlBlZGlkb3MuRW1haWwgIT0gbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImlzQWNlaXRvICYmIFBlZGlkb3MuRW1haWwgIT0gbnVsbFwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJoM1wiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJGb3JtYXR0ZWRTdHJpbmdcIixcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiU3BhblwiLCB7IGF0dHJzOiB7IHRleHQ6IFwiRW1haWw6IFwiIH0gfSksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJTcGFuXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJvbGRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRleHQ6IF92bS5QZWRpZG9zLkVtYWlsIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiU3RhY2tMYXlvdXRcIixcbiAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IG9yaWVudGF0aW9uOiBcImhvcml6b250YWxcIiB9IH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJIdG1sVmlld1wiLCB7XG4gICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmlzQWNlaXRvICYmIF92bS5QZWRpZG9zLlRlbGVmb25lICE9IG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImlzQWNlaXRvICYmIFBlZGlkb3MuVGVsZWZvbmUgIT0gbnVsbFwiXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ0ZWxlZm9uZSB0ZWxlZm9uZS1mb3JtYXRcIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICBodG1sOiBfdm0uX2YoXCJGb3JtYXRhVGVsZWZvbmVcIikoX3ZtLlBlZGlkb3MuVGVsZWZvbmUpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiU3RhY2tMYXlvdXRcIixcbiAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IG9yaWVudGF0aW9uOiBcImhvcml6b250YWxcIiB9IH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJIdG1sVmlld1wiLCB7XG4gICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmlzQWNlaXRvICYmIF92bS5QZWRpZG9zLlRlbGVmb25lICE9IG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImlzQWNlaXRvICYmIFBlZGlkb3MuVGVsZWZvbmUgIT0gbnVsbFwiXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ0ZWxlZm9uZSB3aGF0cy1mb3JtYXRcIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICBodG1sOiBfdm0uX2YoXCJGb3JtYXRhV2hhdHNcIikoX3ZtLlBlZGlkb3MuVGVsZWZvbmUpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiTGFiZWxcIixcbiAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImgzXCIgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJGb3JtYXR0ZWRTdHJpbmdcIixcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiU3BhblwiLCB7IGF0dHJzOiB7IHRleHQ6IFwiVmVpY3VsbzogXCIgfSB9KSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcIlNwYW5cIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYm9sZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogX3ZtLlBlZGlkb3MuTW9kZWxvIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiTGFiZWxcIixcbiAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImgzXCIgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJGb3JtYXR0ZWRTdHJpbmdcIixcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiU3BhblwiLCB7IGF0dHJzOiB7IHRleHQ6IFwiUHJvZHV0bzogXCIgfSB9KSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcIlNwYW5cIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYm9sZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogX3ZtLlBlZGlkb3MuQmF0ZXJpYSB9XG4gICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcIkxhYmVsXCIsXG4gICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJoM1wiIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiRm9ybWF0dGVkU3RyaW5nXCIsXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcIlNwYW5cIiwgeyBhdHRyczogeyB0ZXh0OiBcIkZvcm1hIGRlIFBhZ2FtZW50bzogXCIgfSB9KSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcIlNwYW5cIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYm9sZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogX3ZtLlBlZGlkb3MuRm9ybWFEZVBhZ2FtZW50byB9XG4gICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcIkxhYmVsXCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLlBlZGlkb3MuRGVzY29udG8gPiAwLFxuICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiUGVkaWRvcy5EZXNjb250byA+IDBcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaDNcIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiRm9ybWF0dGVkU3RyaW5nXCIsXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcIlNwYW5cIiwgeyBhdHRyczogeyB0ZXh0OiBcIkRlc2NvbnRvOiBcIiB9IH0pLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiU3BhblwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJib2xkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBfdm0uX2YoXCJGb3JtYXRhVmFsb3JcIikoX3ZtLlBlZGlkb3MuRGVzY29udG8pXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcIkxhYmVsXCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLlBlZGlkb3MuVmFsb3JUb3RhbFBlZGlkbyA+IDAsXG4gICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJQZWRpZG9zLlZhbG9yVG90YWxQZWRpZG8gPiAwXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImgzXCJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcIkZvcm1hdHRlZFN0cmluZ1wiLFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJTcGFuXCIsIHsgYXR0cnM6IHsgdGV4dDogXCJUb3RhbDogXCIgfSB9KSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcIlNwYW5cIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYm9sZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogX3ZtLl9mKFwiRm9ybWF0YVZhbG9yXCIpKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5QZWRpZG9zLlZhbG9yVG90YWxQZWRpZG9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJMYWJlbFwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5QZWRpZG9zLkZvcm1hUGFnYW1lbnRvICE9IG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJQZWRpZG9zLkZvcm1hUGFnYW1lbnRvICE9IG51bGxcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaDNcIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiRm9ybWF0dGVkU3RyaW5nXCIsXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcIlNwYW5cIiwgeyBhdHRyczogeyB0ZXh0OiBcIlBhZ2FtZW50bzogXCIgfSB9KSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcIlNwYW5cIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYm9sZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogX3ZtLlBlZGlkb3MuRm9ybWFQYWdhbWVudG8gfVxuICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJMYWJlbFwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5QZWRpZG9zLlRyb2NvID4gMCxcbiAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIlBlZGlkb3MuVHJvY28gPiAwXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImgzXCJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcIkZvcm1hdHRlZFN0cmluZ1wiLFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJTcGFuXCIsIHsgYXR0cnM6IHsgdGV4dDogXCJUcm9jbzogXCIgfSB9KSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcIlNwYW5cIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYm9sZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogX3ZtLl9mKFwiRm9ybWF0YVZhbG9yXCIpKF92bS5QZWRpZG9zLlRyb2NvKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJMYWJlbFwiLFxuICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiaDNcIiB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcIkZvcm1hdHRlZFN0cmluZ1wiLFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJTcGFuXCIsIHsgYXR0cnM6IHsgdGV4dDogXCJEYXRhIGRhIEVudHJlZ2E6IFwiIH0gfSksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJTcGFuXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJvbGRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IF92bS5fZihcIkZvcm1hdGFEYXRhXCIpKF92bS5QZWRpZG9zLkRhdGFFbnRyZWdhKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJMYWJlbFwiLFxuICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiaDNcIiB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcIkZvcm1hdHRlZFN0cmluZ1wiLFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJTcGFuXCIsIHsgYXR0cnM6IHsgdGV4dDogXCJIb3LDoXJpbyBkYSBFbnRyZWdhOiBcIiB9IH0pLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiU3BhblwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJib2xkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBfdm0uX2YoXCJGb3JtYXRhSG9yYXJpb1wiKShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uUGVkaWRvcy5EYXRhRW50cmVnYVxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcIkxhYmVsXCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogIV92bS5pc0FjZWl0byxcbiAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIiFpc0FjZWl0b1wiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJoM1wiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJGb3JtYXR0ZWRTdHJpbmdcIixcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiU3BhblwiLCB7IGF0dHJzOiB7IHRleHQ6IFwiQmFpcnJvOiBcIiB9IH0pLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiU3BhblwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJib2xkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBfdm0uUGVkaWRvcy5CYWlycm8gfVxuICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX2MoXCJIdG1sVmlld1wiLCB7XG4gICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5pc0FjZWl0byAmJiBfdm0uUGVkaWRvcy5FbmRlcmVjbyAhPSBudWxsLFxuICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImlzQWNlaXRvICYmIFBlZGlkb3MuRW5kZXJlY28gIT0gbnVsbFwiXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ0ZWxlZm9uZVwiLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7IGh0bWw6IF92bS5fZihcIkZvcm1hdGFFbmRlcmVjb1wiKShfdm0uUGVkaWRvcy5FbmRlcmVjbykgfVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5pc0FjZWl0byAmJiBfdm0uUGVkaWRvcy5FbmRlcmVjbyAhPSBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiaXNBY2VpdG8gJiYgUGVkaWRvcy5FbmRlcmVjbyAhPSBudWxsXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IG9yaWVudGF0aW9uOiBcImhvcml6b250YWxcIiB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcIkltYWdlXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaW1nLW1hcGFcIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgc3JjOiBcIn4vaW1hZ2VzL21hcGEucG5nXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgb246IHsgdGFwOiBfdm0uYWJyaXJNYXBhIH1cbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgX2MoXCJJbWFnZVwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImltZy1tYXBhLWNvbXBhcnRpbGhhclwiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBzcmM6IFwifi9pbWFnZXMvc2hhcmUucG5nXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgb246IHsgdGFwOiBfdm0uY29tcGFydGlsaGFyTWFwYSB9XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcIkxhYmVsXCIsXG4gICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJoM1wiIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiRm9ybWF0dGVkU3RyaW5nXCIsXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcIlNwYW5cIiwgeyBhdHRyczogeyB0ZXh0OiBcIkRpc3TDom5jaWEgYXByb3hpbWFkYTogXCIgfSB9KSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcIlNwYW5cIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYm9sZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogX3ZtLl9mKFwiRm9ybWF0YURpc3RhbmNpYVwiKShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uUGVkaWRvcy5EaXN0YW5jaWFBcHJveGltYWRhXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiU3RhY2tMYXlvdXRcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uaXNBdmFsaWFjYW8sXG4gICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImlzQXZhbGlhY2FvXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiTGFiZWxcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJoMlwiLFxuICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgcm93OiBcIjBcIiwgaG9yaXpvbnRhbEFsaWdubWVudDogXCJjZW50ZXJcIiB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJGb3JtYXR0ZWRTdHJpbmdcIixcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiU3BhblwiLCB7IGF0dHJzOiB7IHRleHQ6IFwiQXZhbGlhw6fDo28gZG8gcGVkaWRvOiBcIiB9IH0pLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiU3BhblwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJib2xkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBfdm0uQ29kaWdvIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiTGFiZWxcIixcbiAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImgzXCIsIGF0dHJzOiB7IHRleHRXcmFwOiBcInRydWVcIiB9IH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiRm9ybWF0dGVkU3RyaW5nXCIsXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcIlNwYW5cIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogXCJPIHBlZGlkbyBmb2kgZW50cmVndWUgY29ycmV0YW1lbnRlOiBcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJTcGFuXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJvbGRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IF92bS5fZihcIkZvcm1hdGFCb2xlYW5vXCIpKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5BdmFsaWFjYW8uRW50cmVndWVDb3JyZXRhbWVudGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJMYWJlbFwiLFxuICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiaDNcIiwgYXR0cnM6IHsgdGV4dFdyYXA6IFwidHJ1ZVwiIH0gfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJGb3JtYXR0ZWRTdHJpbmdcIixcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiU3BhblwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiTyBwcm9kdXRvIGZvaSBlbnRyZWd1ZSBubyBsb2NhbCBlIGhvcsOhcmlvIGFnZW5kYWRvOiBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiU3BhblwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJib2xkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBfdm0uX2YoXCJGb3JtYXRhQm9sZWFub1wiKShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uQXZhbGlhY2FvLkxvY2FsSG9yYXJpb1xuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcIkxhYmVsXCIsXG4gICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJoM1wiLCBhdHRyczogeyB0ZXh0V3JhcDogXCJ0cnVlXCIgfSB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcIkZvcm1hdHRlZFN0cmluZ1wiLFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJTcGFuXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRleHQ6IFwiT2NvcnJldSB0dWRvIGJlbSBjb20gYSBpbnN0YWxhw6fDo286IFwiIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcIlNwYW5cIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYm9sZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogX3ZtLl9mKFwiRm9ybWF0YUJvbGVhbm9cIikoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLkF2YWxpYWNhby5JbnN0YWxhY2FvXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiTGFiZWxcIixcbiAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImgzXCIsIGF0dHJzOiB7IHRleHRXcmFwOiBcInRydWVcIiB9IH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiRm9ybWF0dGVkU3RyaW5nXCIsXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcIlNwYW5cIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkVtIHVtYSBlc2NhbGEgZGUgMCBhIDEwLCBxdWFudG8gdm9jw6ogcmVjb21lbmRhcmlhIG8gSGVsaWFyIEV4cHJlc3M6IFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJTcGFuXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJvbGRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRleHQ6IF92bS5BdmFsaWFjYW8uTm90YSB9XG4gICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcIkxhYmVsXCIsXG4gICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJoM1wiLCBhdHRyczogeyB0ZXh0V3JhcDogXCJ0cnVlXCIgfSB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcIkZvcm1hdHRlZFN0cmluZ1wiLFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJTcGFuXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IFwiUG9ycXVlIGVzY29saGV1IGNvbXByYXIgbm8gSGVsaWFyIEV4cHJlc3M6IFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJTcGFuXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJvbGRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRleHQ6IF92bS5BdmFsaWFjYW8uTWVuc2FnZW0gfVxuICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJMYWJlbFwiLFxuICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiaDNcIiwgYXR0cnM6IHsgdGV4dFdyYXA6IFwidHJ1ZVwiIH0gfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJGb3JtYXR0ZWRTdHJpbmdcIixcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiU3BhblwiLCB7IGF0dHJzOiB7IHRleHQ6IFwiT2JzZXJ2YcOnw6NvOiBcIiB9IH0pLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiU3BhblwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJib2xkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBfdm0uQXZhbGlhY2FvLk9ic2VydmFjYW8gfVxuICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApLFxuICAgICAgICAgIF9jKFwiQnV0dG9uXCIsIHtcbiAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICAgICAgICAgICAgdmFsdWU6ICFfdm0uSGlzdG9yaWNvICYmICFfdm0uaXNBY2VpdG8sXG4gICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCIhSGlzdG9yaWNvICYmICFpc0FjZWl0b1wiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidG4gZXNwYWNhbWVudG8gYnRuLXByaW1hcnkgYnRuLWdyZWVuXCIsXG4gICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBcIkFjZWl0YXJcIiB9LFxuICAgICAgICAgICAgb246IHsgdGFwOiBfdm0uYWNlaXRhciB9XG4gICAgICAgICAgfSksXG4gICAgICAgICAgX2MoXCJCdXR0b25cIiwge1xuICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgICAgICAgICAgICB2YWx1ZTogIV92bS5IaXN0b3JpY28gJiYgIV92bS5pc0FjZWl0byxcbiAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIiFIaXN0b3JpY28gJiYgIWlzQWNlaXRvXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0biBlc3BhY2FtZW50byBidG4tcHJpbWFyeSBidG4tcmVkXCIsXG4gICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBcInJlY3VzYXJcIiB9LFxuICAgICAgICAgICAgb246IHsgdGFwOiBfdm0ucmVqZWl0YXIgfVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIF9jKFwiQnV0dG9uXCIsIHtcbiAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICAgICAgICAgICAgdmFsdWU6IF92bS5IaXN0b3JpY28gJiYgX3ZtLmlzRW5jZXJyYXIsXG4gICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJIaXN0b3JpY28gJiYgaXNFbmNlcnJhclwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidG4gZXNwYWNhbWVudG8gYnRuLXByaW1hcnkgYnRuLWdyZWVuXCIsXG4gICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBcIkZpbmFsaXphciBQZWRpZG9cIiB9LFxuICAgICAgICAgICAgb246IHsgdGFwOiBfdm0uZW5jZXJyYXIgfVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIF9jKFwiQnV0dG9uXCIsIHtcbiAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICAgICAgICAgICAgdmFsdWU6IF92bS5IaXN0b3JpY28gJiYgX3ZtLmlzQ2FuY2VsYXIsXG4gICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJIaXN0b3JpY28gJiYgaXNDYW5jZWxhclwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidG4gZXNwYWNhbWVudG8gYnRuLXByaW1hcnkgYnRuLXJlZFwiLFxuICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogXCJDYW5jZWxhciBQZWRpZG9cIiB9LFxuICAgICAgICAgICAgb246IHsgdGFwOiBfdm0uY2FuY2VsYXIgfVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIF9jKFwiQnV0dG9uXCIsIHtcbiAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICAgICAgICAgICAgdmFsdWU6IF92bS5pc0F2YWxpYWNhb0JvdGFvLFxuICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiaXNBdmFsaWFjYW9Cb3Rhb1wiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidG4gZXNwYWNhbWVudG8gYnRuLXByaW1hcnkgYnRuLW9yYW5nZVwiLFxuICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogXCJBdmFsaWHDp8Ojb1wiIH0sXG4gICAgICAgICAgICBvbjogeyB0YXA6IF92bS5hdmFsaWFjYW8gfVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIF9jKFwiQnV0dG9uXCIsIHtcbiAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICAgICAgICAgICAgdmFsdWU6IF92bS5pc0JvdGFvVm9sdGFyLFxuICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiaXNCb3Rhb1ZvbHRhclwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidG4gZXNwYWNhbWVudG8gYnRuLXByaW1hcnkgYnRuLWdyZXlcIixcbiAgICAgICAgICAgIGF0dHJzOiB7IHRleHQ6IFwiVm9sdGFyXCIgfSxcbiAgICAgICAgICAgIG9uOiB7IHRhcDogX3ZtLnZvbHRhciB9XG4gICAgICAgICAgfSksXG4gICAgICAgICAgX2MoXCJCdXR0b25cIiwge1xuICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmlzQXZhbGlhY2FvQm90YW9Wb2x0YXIsXG4gICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJpc0F2YWxpYWNhb0JvdGFvVm9sdGFyXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0biBlc3BhY2FtZW50byBidG4tcHJpbWFyeSBidG4tZ3JleVwiLFxuICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogXCJWb2x0YXIgYW8gcGVkaWRvXCIgfSxcbiAgICAgICAgICAgIG9uOiB7IHRhcDogX3ZtLnZvbHRhclBlZGlkbyB9XG4gICAgICAgICAgfSlcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9Il0sInNvdXJjZVJvb3QiOiIifQ==