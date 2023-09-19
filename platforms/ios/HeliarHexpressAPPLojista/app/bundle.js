require("./runtime.js");require("./vendor.js");module.exports =
(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["bundle"],{

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/Editar.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/Home.vue");
/* harmony import */ var _Pedido__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/Pedido.vue");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./_config/_config.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



var config = new _config_config__WEBPACK_IMPORTED_MODULE_2__["default"]();

var {
  alert,
  confirm,
  prompt,
  login,
  action,
  inputType
} = __webpack_require__("../node_modules/@nativescript/core/ui/dialogs/dialogs.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  data() {
    return {
      Usuario: '',
      Historico: true
    };
  },

  props: ["Historico"],
  created: function created() {
    this.popularDados();
  },
  methods: {
    popularDados() {
      this.$heliarApp.popularDados().then(response => {
        if (response.Status == true) {
          this.Usuario = response.Usuario;
          this.Usuario.Senha = '';
        } else {
          this.alert(response.Mensagem);
        }
      }).catch(() => {
        this.alert("Erro ao encontrar seus pedidos");
      });
    },

    voltar() {
      this.$navigateTo(_Home__WEBPACK_IMPORTED_MODULE_0__["default"], {
        clearHistory: true,
        props: {
          Historico: this.Historico
        }
      });
    },

    salvar() {
      this.$heliarApp.salvarDados(this.Usuario.Codigo, this.Usuario.Nome, this.Usuario.Email, this.Usuario.Senha, this.Usuario.SenhaAtual, this.Usuario.ConfirmarSenha).then(response => {
        if (response.Status == true) {
          this.alert(response.Mensagem);
          this.$navigateTo(_Home__WEBPACK_IMPORTED_MODULE_0__["default"], {
            clearHistory: true
          });
        } else {
          this.alert(response.Mensagem);
        }
      }).catch(() => {
        this.alert("Erro ao encontrar seus pedidos");
      });
    },

    focusPassword() {
      this.$refs.password.nativeView.focus();
    },

    focusConfirmPassword() {
      if (!this.isLoggingIn) {
        this.$refs.confirmPassword.nativeView.focus();
      }
    },

    alert(message) {
      return alert({
        title: "Atenção",
        okButtonText: "OK",
        message: message
      });
    }

  }
});

/***/ }),

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/Home.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Login__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/Login.vue");
/* harmony import */ var _Pedido__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/Pedido.vue");
/* harmony import */ var _Editar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./components/Editar.vue");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./_config/_config.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




var config = new _config_config__WEBPACK_IMPORTED_MODULE_3__["default"]();
/* harmony default export */ __webpack_exports__["default"] = ({
  data() {
    return {
      items: '',
      itemsHistorico: '',
      Historico: false,
      selectedIndex: 0,
      PedidoStatus: null,
      Status: 'Todos Status',
      TextoDataDe: 'Data de',
      TextoDataAte: 'Data Até',
      DataDeVisible: false,
      DataAteVisible: false,
      DataAteSelecionada: new Date(),
      DataDeSelecionada: new Date(),
      ValueDataAte: null,
      ValueDataDe: null
    };
  },

  props: ["Historico", "DataDeFiltro", "DataAteFiltro", "StatusFiltro"],
  created: function created() {
    if (this.DataDeFiltro != '' && this.DataDeFiltro != undefined) {
      this.ValueDataDe = this.DataDeFiltro;
      var d = new Date(this.DataDeFiltro),
          mes = '' + (d.getMonth() + 1),
          dia = '' + d.getDate(),
          ano = d.getFullYear();
      if (mes.length < 2) mes = '0' + mes;
      if (dia.length < 2) dia = '0' + dia;
      this.TextoDataDe = dia + '/' + mes + '/' + ano;
      this.DataDeSelecionada = new Date(this.DataDeFiltro);
    }

    if (this.DataAteFiltro != '' && this.DataAteFiltro != undefined) {
      this.ValueDataAte = this.DataAteFiltro;
      var d = new Date(this.DataAteFiltro),
          mes = '' + (d.getMonth() + 1),
          dia = '' + d.getDate(),
          ano = d.getFullYear();
      if (mes.length < 2) mes = '0' + mes;
      if (dia.length < 2) dia = '0' + dia;
      this.TextoDataAte = dia + '/' + mes + '/' + ano;
      this.DataAteSelecionada = new Date(this.DataAteFiltro);
    }

    if (this.StatusFiltro != '' && this.StatusFiltro != undefined) {
      this.Status = this.StatusFiltro;
      this.PedidoStatus = this.StatusFiltro;

      if (this.StatusFiltro == 5) {
        this.Status = "Cancelado";
      } else if (this.StatusFiltro == 6) {
        this.Status = "Finalizado";
      } else if (this.StatusFiltro == 10) {
        this.Status = "Entregue";
      } else if (this.StatusFiltro == 7) {
        this.Status = "Aceito pela Loja";
      }
    }

    this.pedidos();
    this.pedidosHistorico();
    this.AtualizarAPP();

    if (this.Historico == true) {
      this.selectedIndex = 1;
    }
  },
  filters: {
    FormataData: function FormataData(value) {
      var d = new Date(value),
          mes = '' + (d.getMonth() + 1),
          dia = '' + d.getDate(),
          ano = d.getFullYear(),
          hora = '' + d.getHours(),
          minuto = '' + d.getMinutes();
      if (mes.length < 2) mes = '0' + mes;
      if (dia.length < 2) dia = '0' + dia;
      if (hora.length < 2) hora = '0' + hora;
      if (minuto.length < 2) minuto = '0' + minuto;
      return [dia, mes, ano].join('/') + ' às ' + hora + ":" + minuto;
    }
  },
  methods: {
    logout() {
      this.$heliarApp.desautenticar().then(response => {
        if (response.Status == true) {
          this.$navigateTo(_Login__WEBPACK_IMPORTED_MODULE_0__["default"], {
            clearHistory: false
          });
        } else {
          this.alert(response.Mensagem);
        }
      }).catch(() => {
        alert("Erro ao encontrar seus pedidos");
      });
    },

    dataDe() {
      this.DataDeVisible = true;
      this.DataAteVisible = false;
    },

    dataAte() {
      this.DataDeVisible = false;
      this.DataAteVisible = true;
    },

    confirmarDataDe() {
      var d = new Date(this.DataDeSelecionada),
          mes = '' + (d.getMonth() + 1),
          dia = '' + d.getDate(),
          ano = d.getFullYear();
      if (mes.length < 2) mes = '0' + mes;
      if (dia.length < 2) dia = '0' + dia;
      this.TextoDataDe = dia + '/' + mes + '/' + ano;
      this.ValueDataDe = mes + '/' + dia + '/' + ano;
      this.DataDeVisible = false;
      this.pedidosHistorico();
    },

    confirmarDataAte() {
      var d = new Date(this.DataAteSelecionada),
          mes = '' + (d.getMonth() + 1),
          dia = '' + d.getDate(),
          ano = d.getFullYear();
      if (mes.length < 2) mes = '0' + mes;
      if (dia.length < 2) dia = '0' + dia;
      this.TextoDataAte = dia + '/' + mes + '/' + ano;
      this.ValueDataAte = mes + '/' + dia + '/' + ano;
      this.DataAteVisible = false;
      this.pedidosHistorico();
    },

    LimparDataDe() {
      this.TextoDataDe = 'Data De';
      this.DataDeVisible = false;
      this.ValueDataDe = null;
      this.pedidosHistorico();
    },

    LimparDataAte() {
      this.TextoDataAte = 'Data Até';
      this.DataAteVisible = false;
      this.ValueDataAte = null;
      this.pedidosHistorico();
    },

    statusPedido() {
      this.DataDeVisible = false;
      this.DataAteVisible = false;

      var dialogs = __webpack_require__("../node_modules/@nativescript/core/ui/dialogs/dialogs.js");

      dialogs.action({
        title: "Escolha o status que deseja fazer o filtro",
        cancelButtonText: "Cancelar",
        actions: ['Todos', 'Cancelado', 'Finalizado', 'Entregue', 'Aceito pela Loja']
      }).then(result => {
        var resposta = result;

        if (result == "Cancelar") {
          return false;
        }

        if (result == "Todos") {
          this.PedidoStatus = null;
          this.Status = "Todos Status";
          this.pedidosHistorico();
        } else if (result == "Cancelado") {
          this.PedidoStatus = 5;
          this.Status = "Cancelado";
          this.pedidosHistorico();
        } else if (result == "Finalizado") {
          this.PedidoStatus = 6;
          this.Status = "Finalizado";
          this.pedidosHistorico();
        } else if (result == "Entregue") {
          this.PedidoStatus = 10;
          this.Status = "Entregue";
          this.pedidosHistorico();
        } else if (result == "Aceito pela Loja") {
          this.Status = "Aceito pela Loja";
          this.PedidoStatus = 7;
          this.pedidosHistorico();
        }
      });
    },

    editar(isHistorico) {
      this.$navigateTo(_Editar__WEBPACK_IMPORTED_MODULE_2__["default"], {
        clearHistory: true,
        props: {
          Historico: isHistorico
        }
      });
    },

    pedidos() {
      setTimeout(() => {
        this.$heliarApp.pedidos().then(response => {
          this.items = response.Pedidos;
        }).catch(() => {
          alert("Erro ao encontrar seus pedidos");
        });
      }, 1000);
    },

    pedidosHistorico() {
      setTimeout(() => {
        this.$heliarApp.pedidosHistorico(this.PedidoStatus, this.ValueDataDe, this.ValueDataAte).then(responseHistorico => {
          this.itemsHistorico = responseHistorico.Pedidos;
        }).catch(() => {
          alert("Erro ao encontrar seus pedidos");
        });
      }, 1000);
    },

    visualizar(e, isHistorico) {
      this.$navigateTo(_Pedido__WEBPACK_IMPORTED_MODULE_1__["default"], {
        clearHistory: true,
        props: {
          Codigo: e.Codigo,
          Historico: isHistorico,
          DataDe: this.ValueDataDe,
          DataAte: this.ValueDataAte,
          Status: this.PedidoStatus
        }
      });
    },

    AtualizarAPP() {
      setInterval(() => pedidos(), 600000); //90000

      setInterval(() => pedidosHistorico(this.PedidoStatus, null, this.ValueDataAte), 600000);
    }

  }
});

/***/ }),

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/Login.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/Home.vue");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./_config/_config.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


var config = new _config_config__WEBPACK_IMPORTED_MODULE_1__["default"]();
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "defaultPage",

  data() {
    this.VerificarAutenticado();
    return {
      isLoggingIn: true,
      processing: false,
      //isRecaptcha: false,
      user: {
        email: "",
        password: "",
        confirmPassword: ""
      },
      retornoLogin: ""
    };
  },

  methods: {
    //recaptcha(e) {
    //    if(e.url.indexOf("sucess=true") != -1) {
    //        this.isRecaptcha = true;
    //    }
    //},
    toggleForm() {
      this.isLoggingIn = !this.isLoggingIn;
    },

    VerificarAutenticado() {
      this.$heliarApp.isLoggedIn().then(response => {
        if (response.Status == true) {
          this.$navigateTo(_Home__WEBPACK_IMPORTED_MODULE_0__["default"], {
            clearHistory: false
          });
        }
      }).catch(() => {
        alert("Erro ao verificar autenticação do usuário");
      });
    },

    submit() {
      if (!this.user.email && this.user.password || !this.user.password && this.user.email) {
        this.retornoLogin = 'Por favor, preencher login ou senha!';
        return;
      } //if( !this.isRecaptcha ) {
      //    this.retornoLogin = "Por favor, preencha o captcha!";
      //    return;
      //}


      this.processing = true;

      if (this.isLoggingIn) {
        this.login();
      } else {
        this.register();
      }
    },

    loginAnt() {
      this.$backendService.login(this.user).then(() => {
        this.processing = false;
        this.$navigateTo(_Home__WEBPACK_IMPORTED_MODULE_0__["default"], {
          clearHistory: true
        });
      }).catch(() => {
        this.processing = false;
        this.alert("Unfortunately we could not find your account.");
      });
    },

    login() {
      this.$heliarApp.login(this.user).then(response => {
        this.processing = false;
        config.setToken('f-u5vqcIlfo:APA91bF0D825LoY0rkLJ_bq0ZptGLnO8ShM2zJVnyqDrJMpCgZE3T48AvLwz29oiZTRBmYDI_lV_6lu1JjhKU0PaB9zp5XNrsai31rXE6DdP4964zmQdMLvFb2W3OhVNUGaOAvx_lgnB');
        config.setDeviceId('e9c55bcd-c4c2-4b52-a0d8-c831902e52fd');
        this.$navigateTo(_Home__WEBPACK_IMPORTED_MODULE_0__["default"], {
          clearHistory: true
        });
      });
    },

    forgotPassword() {
      prompt({
        title: "Esqueci minha senha",
        message: "Digite o login que você usou para se registrar no HELIAR EXPRESS para redefinir sua senha.",
        inputType: "email",
        okButtonText: "Enviar",
        cancelButtonText: "Cancelar",
        defaultText: "     " + this.user.email
      }).then(data => {
        if (data.result) {
          this.$heliarApp.resetPassword(data.text.trim()).then(response => {
            this.alert(response.Mensagem);
          }).catch(() => {
            this.alert("Infelizmente, ocorreu um erro ao redefinir sua senha.");
          });
        }
      });
    },

    focusPassword() {
      this.$refs.password.nativeView.focus();
    },

    focusConfirmPassword() {
      if (!this.isLoggingIn) {
        this.$refs.confirmPassword.nativeView.focus();
      }
    },

    alert(message) {
      return alert({
        title: "Atenção",
        okButtonText: "OK",
        message: message
      });
    }

  }
});

/***/ }),

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/Pedido.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/Home.vue");
/* harmony import */ var _Pedido__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/Pedido.vue");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./_config/_config.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




var utilsModule = __webpack_require__("../node_modules/@nativescript/core/utils/utils.js");

var config = new _config_config__WEBPACK_IMPORTED_MODULE_2__["default"]();

var {
  alert,
  confirm,
  prompt,
  login,
  action,
  inputType
} = __webpack_require__("../node_modules/@nativescript/core/ui/dialogs/dialogs.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  data() {
    return {
      Pedidos: '',
      isAceito: false,
      Historico: true,
      Avaliacao: '',
      isAvaliacao: false,
      isAvaliacaoBotao: false,
      isAvaliacaoBotaoVoltar: false,
      isBotaoVoltar: true,
      isEncerrar: false,
      isCancelar: false,
      DataDe: null,
      DataAte: null,
      Status: null
    };
  },

  props: ["Codigo", "Historico", "DataDe", "DataAte", "Status"],

  created() {
    this.detalhePedido(this.Codigo);
  },

  filters: {
    FormataData: function FormataData(value) {
      var d = new Date(value),
          mes = '' + (d.getMonth() + 1),
          dia = '' + d.getDate(),
          ano = d.getFullYear();
      if (mes.length < 2) mes = '0' + mes;
      if (dia.length < 2) dia = '0' + dia;
      return [dia, mes, ano].join('/');
    },
    FormataHorario: function FormataHorario(value) {
      var d = new Date(value),
          hora = '' + d.getHours(),
          minuto = '' + d.getMinutes();
      if (hora.length < 2) hora = '0' + hora;
      if (minuto.length < 2) minuto = '0' + minuto;
      return hora + ":" + minuto;
    },
    FormataBoleano: function FormataBoleano(value) {
      if (value == 'false') {
        value = 'Não';
      } else {
        value = 'Sim';
      }

      return value;
    },
    FormataValor: function FormataValor(value) {
      var valor = parseFloat(value);
      return "R$ " + valor.toFixed(2).replace('.', ',').replace(/(\d)(?=(\d{3})+\,)/g, "$1.");
    },
    FormataTelefone: function FormataTelefone(value) {
      if (value == undefined) {
        return '';
      }

      ;
      var tel = value;
      tel = tel.replace('(', '').replace(')', '');
      return "<label textWrap='true'><span>Tel</span>: " + tel + "<label>";
    },
    FormataWhats: function FormataWhats(value) {
      if (value == undefined) {
        return '';
      }

      ;
      var tel = value.split("#")[0];
      var telFormatado = tel;
      tel = tel.replace('(', '').replace(')', '').replace(' ', '').replace('-', '');
      telFormatado = telFormatado.replace('(', '').replace(')', ' ').replace(' ', '');
      return "<label textWrap='true'><span>Whats</span>: <a class='bold' href='https://api.whatsapp.com/send?phone=55" + tel + " &text=Ol%C3%A1%2C%20tudo%20bem%3F&nbsp;'>" + telFormatado + "</a></label>";
    },
    FormataEndereco: function FormataEndereco(value) {
      if (value == undefined) {
        return '';
      }

      ;
      return "<label textWrap='true'><span>Endereço</span>: <b> " + value + "</b> </label>";
    },
    FormataLoja: function FormataLoja(value) {
      return "<label textWrap='true'><span>Loja</span>: <b> " + value + "</b></label>";
    },
    FormataDistancia: function FormataDistancia(value) {
      return value + " KM";
    }
  },
  methods: {
    detalhePedido(codigo) {
      this.$heliarApp.detalhePedido(codigo).then(response => {
        this.Pedidos = response.Pedidos;
        console.log(this.Status);

        if (this.Historico == true) {
          this.isAceito = true;
        }

        if (this.Pedidos.CodigoStatus == 6 || this.Pedidos.CodigoStatus == 5 || this.Pedidos.CodigoStatus == 10) {
          this.isEncerrar = false; // 6 = pedido finalizado

          this.isCancelar = false; // 5 = pedido cancelado

          this.isAceito = false; // 10 =  pedido entregue
        } else if (this.Historico == true) {
          this.isEncerrar = true; // 6 = pedido finalizado

          this.isCancelar = true; // 5 = pedido cancelado
        } else if (this.Historico == "true") {
          this.isAceito = true;
          this.Historico = true;
          this.isEncerrar = true;
          this.isCancelar = true;
        } else if (this.Historico == "false") {
          this.isAceito = false;
          this.Historico = false;
        }

        if (response.Pedidos.AvaliacoesPedidoMobile != null) {
          this.Avaliacao = response.Pedidos.AvaliacoesPedidoMobile;
          this.isAvaliacaoBotao = true;
        }
      }).catch(() => {
        this.alert("Erro ao encontrar seu pedido");
      });
    },

    abrirMapa() {
      utilsModule.openUrl('https://www.google.com/maps/place/' + this.Pedidos.Endereco.replace('/', '+').replace(' - ', ',').replace(' -', ',').replace('- ', ',').replace('-', ',').replace(' ', '+').replace(' ', '+').replace(' ', '+').replace(' ', '+').replace(' ', '+').replace(' ', '+'));
    },

    compartilharMapa() {
      utilsModule.openUrl('https://api.whatsapp.com/send?text=https://www.google.com/maps/place/' + this.Pedidos.Endereco.replace('/', '.').replace(' - ', ',').replace(' -', ',').replace('- ', ',').replace('-', ',').replace(' ', '.').replace(' ', '.').replace(' ', '.').replace(' ', '.').replace(' ', '.').replace(' ', '.'));
    },

    voltar() {
      console.log(this.Status);
      this.$navigateTo(_Home__WEBPACK_IMPORTED_MODULE_0__["default"], {
        clearHistory: true,
        props: {
          Historico: this.Historico,
          DataDeFiltro: this.DataDe,
          DataAteFiltro: this.DataAte,
          StatusFiltro: this.Status
        }
      });
    },

    voltarPedido() {
      this.isAvaliacao = false;
      this.isAvaliacaoBotaoVoltar = false;
      this.isAvaliacaoBotao = true;
      this.isBotaoVoltar = true;
    },

    avaliacao() {
      this.isAvaliacao = true;
      this.isAvaliacaoBotaoVoltar = true;
      this.isAvaliacaoBotao = false;
      this.isBotaoVoltar = false;
    },

    encerrar() {
      this.$heliarApp.encerrarPedido(this.Codigo).then(response => {
        if (response.Status == true) {
          this.isEncerrar = false;
          this.isCancelar = false;
        }

        this.alert(response.Mensagem);
      }).catch(() => {
        this.alert("Erro ao aceitar o pedido");
      });
    },

    aceitar() {
      this.$heliarApp.aceitarPedido(this.Codigo, true, '', '').then(response => {
        if (response.Status == true) {
          this.isAceito = true;
        }

        this.alert(response.Mensagem);
      }).catch(() => {
        this.alert("Erro ao aceitar o pedido");
      });
    },

    rejeitar() {
      var dialogs = __webpack_require__("../node_modules/@nativescript/core/ui/dialogs/dialogs.js");

      dialogs.action({
        title: "Deseja realmente Recusar? Informe um motivo",
        cancelButtonText: "Cancelar",
        actions: this.Pedidos.JustificativasRejeicoesPedido
      }).then(result => {
        var resposta = result;

        if (result == "Cancelar") {
          return false;
        }

        if (result == "Outro") {
          prompt({
            title: "Deseja realmente Recusar? Descreva o motivo",
            okButtonText: "Recusar",
            cancelButtonText: "Cancelar",
            defaultText: ""
          }).then(result => {
            if (result.result == false) {
              return false;
            }

            this.$heliarApp.recusarPedido(this.Codigo, false, resposta, result.text.trim()).then(response => {
              if (response.Status == true) {
                this.isAceito = false;
                this.Historico = true;
              }

              this.alert(response.Mensagem);
            }).catch(() => {
              this.alert("Erro ao recusar o pedido");
            });
          });
        } else {
          this.$heliarApp.recusarPedido(this.Codigo, false, resposta, '').then(response => {
            if (response.Status == true) {
              this.isAceito = false;
              this.Historico = true;
            }

            this.alert(response.Mensagem);
          }).catch(() => {
            this.alert("Erro ao recusar o pedido");
          });
        }
      });
    },

    cancelar() {
      var dialogs = __webpack_require__("../node_modules/@nativescript/core/ui/dialogs/dialogs.js");

      dialogs.action({
        title: "Deseja realmente cancelar o pedido? Informe um motivo",
        cancelButtonText: "Cancelar",
        actions: this.Pedidos.JustificativasRejeicoesPedido
      }).then(result => {
        var resposta = result;

        if (result == "Cancelar") {
          return false;
        }

        if (result == "Outro") {
          prompt({
            title: "Deseja realmente cancelar o pedido? Informe um motivo",
            okButtonText: "Recusar",
            cancelButtonText: "Cancelar",
            defaultText: ""
          }).then(result => {
            if (result.result == false) {
              return false;
            }

            this.$heliarApp.cancelarPedido(this.Codigo, resposta, result.text.trim()).then(response => {
              if (response.Status == true) {
                this.isEncerrar = false;
                this.isCancelar = false;
                this.isAceito = false;
              }

              this.alert(response.Mensagem);
            }).catch(() => {
              this.alert("Erro ao recusar o pedido");
            });
          });
        } else {
          this.$heliarApp.cancelarPedido(this.Codigo, resposta, '').then(response => {
            if (response.Status == true) {
              this.isEncerrar = false;
              this.isCancelar = false;
              this.isAceito = false;
            }

            this.alert(response.Mensagem);
          }).catch(() => {
            this.alert("Erro ao recusar o pedido");
          });
        }
      });
    },

    alert(message) {
      return alert({
        title: "Atenção",
        okButtonText: "OK",
        message: message
      });
    }

  }
});

/***/ }),

/***/ "../node_modules/nativescript-dev-webpack/style-hot-loader.js!../node_modules/nativescript-dev-webpack/apply-css-loader.js!../node_modules/css-loader/index.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/vue-loader/lib/index.js?!./components/Editar.vue?vue&type=style&index=0&lang=css&":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {exports = module.exports = __webpack_require__("../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.sub-titulo {\n    color: #1e6832;\n    font-size: 18px;\n}\n.input{\n    border-color:red;\n}\n.lbl {\n    color: #FFF;\n    margin-left: 10;\n    margin-right: 10;\n}\n.bold {\n\n    font-weight: bold;\n}\n.form{\n    margin-left:20px;\n}\n.telefone\n{\n    color:#000;\n    font-size: 16px;\n    margin-bottom: 5px;\n}\n", ""]);

// exports

    const application = __webpack_require__("../node_modules/@nativescript/core/application/application.js");
    __webpack_require__("../node_modules/@nativescript/core/ui/styling/style-scope.js");

    if (typeof exports.forEach === "function") {
        exports.forEach(cssExport => {
            if (cssExport.length > 1 && cssExport[1]) {
                // applying the second item of the export as it contains the css contents
                application.addCss(cssExport[1]);
            }
        });
    }
;
    if (true) {
        module.hot.accept();
        module.hot.dispose(() => {
            global.hmrRefresh({ type: 'style', path: './components/Editar.vue' });
        })
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/nativescript-dev-webpack/node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../node_modules/nativescript-dev-webpack/style-hot-loader.js!../node_modules/nativescript-dev-webpack/apply-css-loader.js!../node_modules/css-loader/index.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/vue-loader/lib/index.js?!./components/Home.vue?vue&type=style&index=0&lang=css&":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {exports = module.exports = __webpack_require__("../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.lbl{\n    color:#FFF;\n    margin-left: 10;\n    margin-right: 10;\n}\n.lbl-bold{\n     \n    font-weight: bold;\n}\n.sair {\n    height: 30;\n}\n.edicao {\n    height: 25;\n}\n.btn-tamanho{\n    width: 41%;\n}\n", ""]);

// exports

    const application = __webpack_require__("../node_modules/@nativescript/core/application/application.js");
    __webpack_require__("../node_modules/@nativescript/core/ui/styling/style-scope.js");

    if (typeof exports.forEach === "function") {
        exports.forEach(cssExport => {
            if (cssExport.length > 1 && cssExport[1]) {
                // applying the second item of the export as it contains the css contents
                application.addCss(cssExport[1]);
            }
        });
    }
;
    if (true) {
        module.hot.accept();
        module.hot.dispose(() => {
            global.hmrRefresh({ type: 'style', path: './components/Home.vue' });
        })
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/nativescript-dev-webpack/node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../node_modules/nativescript-dev-webpack/style-hot-loader.js!../node_modules/nativescript-dev-webpack/apply-css-loader.js!../node_modules/css-loader/index.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/vue-loader/lib/index.js?!./components/Login.vue?vue&type=style&index=0&id=c27482c4&scoped=true&lang=css&":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {exports = module.exports = __webpack_require__("../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.page[data-v-c27482c4] {\n    align-items: center;\n    flex-direction: column;\n}\n.form[data-v-c27482c4] {\n    margin-left: 30;\n    margin-right: 30;\n    flex-grow: 2;\n    vertical-align: middle;\n}\n.logo[data-v-c27482c4] {\n    margin-bottom: 12;\n    height: 90;\n    font-weight: bold;\n}\n.header[data-v-c27482c4] {\n    horizontal-align: center;\n    font-size: 25;\n    font-weight: 600;\n    margin-bottom: 70;\n    text-align: center;\n    color: #067A65;\n}\n.mensagem[data-v-c27482c4] {\n    horizontal-align: center;\n    font-size: 16;\n    font-weight: 600;\n    margin-bottom: 30px;\n    text-align: center;\n    color: red;\n}\n.input-field[data-v-c27482c4] {\n    margin-bottom: 25;\n}\n.input[data-v-c27482c4] {\n    font-size: 18;\n    placeholder-color: #A8A8A8;\n}\n.input[data-v-c27482c4]:disabled {\n    background-color: white;\n    opacity: 0.5;\n}\n.btn-primary[data-v-c27482c4] {\n    margin: 30 5 15 5;\n}\n.login-label[data-v-c27482c4] {\n    horizontal-align: center;\n    color: #A8A8A8;\n    font-size: 16;\n}\n.sign-up-label[data-v-c27482c4] {\n    margin-bottom: 20;\n}\n.bold[data-v-c27482c4] {\n    color: #000000;\n}\n", ""]);

// exports

    const application = __webpack_require__("../node_modules/@nativescript/core/application/application.js");
    __webpack_require__("../node_modules/@nativescript/core/ui/styling/style-scope.js");

    if (typeof exports.forEach === "function") {
        exports.forEach(cssExport => {
            if (cssExport.length > 1 && cssExport[1]) {
                // applying the second item of the export as it contains the css contents
                application.addCss(cssExport[1]);
            }
        });
    }
;
    if (true) {
        module.hot.accept();
        module.hot.dispose(() => {
            global.hmrRefresh({ type: 'style', path: './components/Login.vue' });
        })
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/nativescript-dev-webpack/node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../node_modules/nativescript-dev-webpack/style-hot-loader.js!../node_modules/nativescript-dev-webpack/apply-css-loader.js!../node_modules/css-loader/index.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/vue-loader/lib/index.js?!./components/Pedido.vue?vue&type=style&index=0&lang=css&":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {exports = module.exports = __webpack_require__("../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.lbl {\n    color: #FFF;\n    margin-left: 10;\n    margin-right: 10;\n}\n.bold {\n    font-weight: bold;\n}\n.form{\n    margin-left:20px;\n}\n.telefone\n{\n    color:#000;\n    font-size: 16px;\n    margin-bottom: 5px;\n}\n.espacamento{\n    margin-top:8px;\n    margin-bottom:8px;\n}\n.logo-ico{\n     height: 20;\n     width: 40;\n}\n.telefone-format{\n     background-image: url('~/images/ligar.png');\n     background-repeat: no-repeat;\n     background-size: 50px 17px;\n     background-position: right;\n     width: 550px;\n}\n.whats-format{\n     background-image: url('~/images/whats.png');\n     background-repeat: no-repeat;\n     background-size: 17px 17px;\n     background-position: right;\n     width: 510px;\n}\n.img-mapa{\n     width: 190px;\n}\n.img-mapa-compartilhar{\n     width: 380px;\n     margin-left: 15px;\n}\n", ""]);

// exports

    const application = __webpack_require__("../node_modules/@nativescript/core/application/application.js");
    __webpack_require__("../node_modules/@nativescript/core/ui/styling/style-scope.js");

    if (typeof exports.forEach === "function") {
        exports.forEach(cssExport => {
            if (cssExport.length > 1 && cssExport[1]) {
                // applying the second item of the export as it contains the css contents
                application.addCss(cssExport[1]);
            }
        });
    }
;
    if (true) {
        module.hot.accept();
        module.hot.dispose(() => {
            global.hmrRefresh({ type: 'style', path: './components/Pedido.vue' });
        })
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/nativescript-dev-webpack/node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/Editar.vue?vue&type=template&id=3014a756&":
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
        { attrs: { title: "Perfil do Usuário" } },
        [
          _c(
            "Label",
            {
              staticClass: "h2",
              attrs: { row: "0", horizontalAlignment: "center" }
            },
            [
              _c("Span", { attrs: { text: "Perfil do Usuário" } }),
              _c("Span", { staticClass: "bold", attrs: { text: _vm.Codigo } })
            ],
            1
          )
        ],
        1
      ),
      _c(
        "FlexboxLayout",
        { staticClass: "page" },
        [
          _c(
            "StackLayout",
            { staticClass: "form" },
            [
              _c(
                "GridLayout",
                { attrs: { rows: "auto, auto, auto, auto, auto, auto, auto" } },
                [
                  _c(
                    "StackLayout",
                    { staticClass: "input-field", attrs: { row: "0" } },
                    [
                      _c("Label", {
                        staticClass: "sub-titulo",
                        attrs: { text: "Meus dados" }
                      })
                    ],
                    1
                  ),
                  _c(
                    "StackLayout",
                    { staticClass: "input-field", attrs: { row: "1" } },
                    [
                      _c("TextField", {
                        staticClass: "input",
                        attrs: {
                          hint: "Nome",
                          keyboardType: "nome",
                          autocorrect: "false",
                          autocapitalizationType: "none",
                          returnKeyType: "next"
                        },
                        model: {
                          value: _vm.Usuario.Nome,
                          callback: function($event) {
                            _vm.$set(_vm.Usuario, "Nome", $event.object["text"])
                          },
                          expression: "Usuario.Nome"
                        }
                      }),
                      _c("StackLayout", { staticClass: "hr-light" })
                    ],
                    1
                  ),
                  _c(
                    "StackLayout",
                    { staticClass: "input-field", attrs: { row: "2" } },
                    [
                      _c("TextField", {
                        staticClass: "input",
                        attrs: {
                          hint: "E-mail",
                          keyboardType: "email",
                          type: "email",
                          autocorrect: "false",
                          autocapitalizationType: "none",
                          returnKeyType: "next"
                        },
                        model: {
                          value: _vm.Usuario.Email,
                          callback: function($event) {
                            _vm.$set(
                              _vm.Usuario,
                              "Email",
                              $event.object["text"]
                            )
                          },
                          expression: "Usuario.Email"
                        }
                      }),
                      _c("StackLayout", { staticClass: "hr-light" })
                    ],
                    1
                  ),
                  _c(
                    "StackLayout",
                    { staticClass: "input-field", attrs: { row: "3" } },
                    [
                      _c("Label", {
                        staticClass: "sub-titulo",
                        attrs: { text: "Minha Senha" }
                      })
                    ],
                    1
                  ),
                  _c(
                    "StackLayout",
                    { staticClass: "input-field", attrs: { row: "4" } },
                    [
                      _c("TextField", {
                        ref: "password",
                        staticClass: "input",
                        attrs: { hint: "Senha Atual", secure: "true" },
                        model: {
                          value: _vm.Usuario.SenhaAtual,
                          callback: function($event) {
                            _vm.$set(
                              _vm.Usuario,
                              "SenhaAtual",
                              $event.object["text"]
                            )
                          },
                          expression: "Usuario.SenhaAtual"
                        }
                      }),
                      _c("StackLayout", { staticClass: "hr-light" })
                    ],
                    1
                  ),
                  _c(
                    "StackLayout",
                    { staticClass: "input-field", attrs: { row: "5" } },
                    [
                      _c("TextField", {
                        ref: "password",
                        staticClass: "input",
                        attrs: { hint: "Nova senha", secure: "true" },
                        on: { returnPress: _vm.focusPassword },
                        model: {
                          value: _vm.Usuario.Senha,
                          callback: function($event) {
                            _vm.$set(
                              _vm.Usuario,
                              "Senha",
                              $event.object["text"]
                            )
                          },
                          expression: "Usuario.Senha"
                        }
                      }),
                      _c("StackLayout", { staticClass: "hr-light" })
                    ],
                    1
                  ),
                  _c(
                    "StackLayout",
                    { staticClass: "input-field", attrs: { row: "6" } },
                    [
                      _c("TextField", {
                        ref: "confirmPassword",
                        staticClass: "input",
                        attrs: {
                          hint: "Confirmar nova senha",
                          secure: "true",
                          returnKeyType: "done"
                        },
                        on: { returnPress: _vm.focusConfirmPassword },
                        model: {
                          value: _vm.Usuario.ConfirmarSenha,
                          callback: function($event) {
                            _vm.$set(
                              _vm.Usuario,
                              "ConfirmarSenha",
                              $event.object["text"]
                            )
                          },
                          expression: "Usuario.ConfirmarSenha"
                        }
                      }),
                      _c("StackLayout", { staticClass: "hr-light" })
                    ],
                    1
                  )
                ],
                1
              ),
              _c("Button", {
                staticClass: "btn btn-primary btn-green",
                attrs: { text: "Salvar" },
                on: { tap: _vm.salvar }
              }),
              _c("Button", {
                staticClass: "btn btn-primary btn-grey",
                attrs: { text: "Cancelar" },
                on: { tap: _vm.voltar }
              })
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/Home.vue?vue&type=template&id=67410f3a&":
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
    { attrs: { actionBarHidden: "false" } },
    [
      _c(
        "ActionBar",
        { attrs: { flat: "true", title: "" } },
        [
          _c(
            "StackLayout",
            [
              _c("Image", {
                staticStyle: { height: "100px", float: "left" },
                attrs: { src: "~/images/logo.png" }
              })
            ],
            1
          ),
          _c(
            "ActionItem",
            {
              attrs: { "ios.position": "right", width: "50" },
              on: { tap: _vm.editar }
            },
            [
              _c("Image", {
                staticStyle: { float: "right" },
                attrs: { src: "~/images/edicao.png" }
              })
            ],
            1
          ),
          _c(
            "ActionItem",
            {
              attrs: { "ios.position": "right", width: "50" },
              on: { tap: _vm.logout }
            },
            [
              _c("Image", {
                staticStyle: { float: "right" },
                attrs: { src: "~/images/sair.png" }
              })
            ],
            1
          )
        ],
        1
      ),
      _c(
        "StackLayout",
        [
          _c(
            "Tabs",
            { attrs: { selectedIndex: "0" } },
            [
              _c(
                "TabStrip",
                [
                  _c(
                    "TabStripItem",
                    { on: { tap: _vm.pedidos } },
                    [
                      _c("Label", { attrs: { text: "Pedidos" } }),
                      _c("Image", { attrs: { src: "res://home" } })
                    ],
                    1
                  ),
                  _c(
                    "TabStripItem",
                    { on: { tap: _vm.pedidosHistorico } },
                    [
                      _c("Label", { attrs: { text: "Histórico" } }),
                      _c("Image", { attrs: { src: "res://settings" } })
                    ],
                    1
                  )
                ],
                1
              ),
              _c(
                "TabContentItem",
                [
                  _c(
                    "ScrollView",
                    [
                      _c(
                        "ListView",
                        {
                          staticClass: "list-group",
                          staticStyle: { backgroundColor: "#045244" },
                          attrs: { items: _vm.items, "+alias": "item" }
                        },
                        [
                          _c("v-template", {
                            scopedSlots: _vm._u([
                              {
                                key: "default",
                                fn: function(ref) {
                                  var item = ref.item
                                  var $index = ref.$index
                                  var $even = ref.$even
                                  var $odd = ref.$odd
                                  return _c(
                                    "GridLayout",
                                    {
                                      attrs: {
                                        columns: "2/6*, 2/6*",
                                        backgroundColor: "#148A64",
                                        rows: "20,20,20,20,20,20,20,20"
                                      }
                                    },
                                    [
                                      _c("Label", {
                                        staticClass: "lbl",
                                        attrs: {
                                          col: "0",
                                          row: "0",
                                          text: "Código:",
                                          textWrap: "true"
                                        }
                                      }),
                                      _c("Label", {
                                        staticClass: "lbl lbl-bold",
                                        attrs: {
                                          col: "0",
                                          row: "1",
                                          text: item.Codigo,
                                          textWrap: "true"
                                        }
                                      }),
                                      _c("Label", {
                                        staticClass: "lbl",
                                        attrs: {
                                          col: "0",
                                          row: "2",
                                          text: "Loja:",
                                          textWrap: "true"
                                        }
                                      }),
                                      _c("Label", {
                                        staticClass: "lbl lbl-bold",
                                        attrs: {
                                          col: "0",
                                          row: "3",
                                          text: item.Loja
                                        }
                                      }),
                                      _c("Label", {
                                        staticClass: "lbl",
                                        attrs: {
                                          col: "0",
                                          row: "4",
                                          text: "Agendada para:",
                                          textWrap: "true"
                                        }
                                      }),
                                      _c("Label", {
                                        staticClass: "lbl lbl-bold",
                                        attrs: {
                                          col: "0",
                                          row: "5",
                                          text: _vm._f("FormataData")(
                                            item.DataEntrega
                                          ),
                                          textWrap: "true"
                                        }
                                      }),
                                      _c("Label", {
                                        staticClass: "lbl",
                                        attrs: {
                                          col: "0",
                                          row: "6",
                                          text: "Status:",
                                          textWrap: "true"
                                        }
                                      }),
                                      _c("Label", {
                                        staticClass: "lbl lbl-bold",
                                        attrs: {
                                          col: "0",
                                          row: "7",
                                          text: item.Status
                                        }
                                      }),
                                      _c("Button", {
                                        staticClass:
                                          "btn btn-primary btn-orange",
                                        attrs: {
                                          rowSpan: "3",
                                          row: "0",
                                          col: "1",
                                          text: "Visualizar"
                                        },
                                        on: {
                                          tap: function($event) {
                                            return _vm.visualizar(item, false)
                                          }
                                        }
                                      }),
                                      _c("Label", {
                                        staticClass: "lbl",
                                        attrs: {
                                          rowSpan: "3",
                                          col: "1",
                                          row: "3",
                                          text:
                                            "*Clique em Visualizar para Aceitar ou rejeitar o Pedido",
                                          verticalAlignment: "center",
                                          textWrap: "true"
                                        }
                                      })
                                    ],
                                    1
                                  )
                                }
                              }
                            ])
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
                "TabContentItem",
                [
                  _c(
                    "StackLayout",
                    {
                      staticStyle: { background: "#fff" },
                      attrs: { orientation: "vertical" }
                    },
                    [
                      _c(
                        "StackLayout",
                        {
                          staticStyle: { background: "#fff" },
                          attrs: { orientation: "horizontal" }
                        },
                        [
                          _c("Button", {
                            staticClass: "btn btn-tamanho btn-primary btn-grey",
                            attrs: { text: _vm.TextoDataDe },
                            on: { tap: _vm.dataDe }
                          }),
                          _c("Button", {
                            staticClass: "btn btn-tamanho btn-primary btn-grey",
                            attrs: { text: _vm.TextoDataAte },
                            on: { tap: _vm.dataAte }
                          })
                        ],
                        1
                      ),
                      _c("DatePicker", {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: _vm.DataDeVisible,
                            expression: "DataDeVisible"
                          }
                        ],
                        attrs: { verticalAlignment: "center" },
                        model: {
                          value: _vm.DataDeSelecionada,
                          callback: function($event) {
                            _vm.DataDeSelecionada = $event.object["date"]
                          },
                          expression: "DataDeSelecionada"
                        }
                      }),
                      _c("DatePicker", {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: _vm.DataAteVisible,
                            expression: "DataAteVisible"
                          }
                        ],
                        attrs: { verticalAlignment: "center" },
                        model: {
                          value: _vm.DataAteSelecionada,
                          callback: function($event) {
                            _vm.DataAteSelecionada = $event.object["date"]
                          },
                          expression: "DataAteSelecionada"
                        }
                      }),
                      _c(
                        "StackLayout",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: _vm.DataDeVisible,
                              expression: "DataDeVisible"
                            }
                          ],
                          staticStyle: { background: "#fff" },
                          attrs: { orientation: "horizontal" }
                        },
                        [
                          _c("Button", {
                            staticClass: "btn btn-tamanho btn-primary btn-red",
                            attrs: { text: "Limpar" },
                            on: { tap: _vm.LimparDataDe }
                          }),
                          _c("Button", {
                            staticClass:
                              "btn btn-tamanho btn-primary btn-green",
                            attrs: { text: "Confirmar" },
                            on: { tap: _vm.confirmarDataDe }
                          })
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
                              value: _vm.DataAteVisible,
                              expression: "DataAteVisible"
                            }
                          ],
                          staticStyle: { background: "#fff" },
                          attrs: { orientation: "horizontal" }
                        },
                        [
                          _c("Button", {
                            staticClass: "btn btn-tamanho btn-primary btn-red",
                            attrs: { text: "Limpar" },
                            on: { tap: _vm.LimparDataAte }
                          }),
                          _c("Button", {
                            staticClass:
                              "btn btn-tamanho btn-primary btn-green",
                            attrs: { text: "Confirmar" },
                            on: { tap: _vm.confirmarDataAte }
                          })
                        ],
                        1
                      ),
                      _c("Button", {
                        staticClass: "btn btn-primary btn-grey",
                        attrs: { text: _vm.Status },
                        on: { tap: _vm.statusPedido }
                      }),
                      _c("v-template", {
                        scopedSlots: _vm._u([
                          {
                            key: "default",
                            fn: function(ref) {
                              var item = ref.item
                              var $index = ref.$index
                              var $even = ref.$even
                              var $odd = ref.$odd
                              return _c(
                                "GridLayout",
                                {
                                  attrs: {
                                    columns: "2/6*, 2/6*",
                                    backgroundColor: "#888888",
                                    rows: "20,20,20,20,20,20,20,20"
                                  }
                                },
                                [
                                  _c("Label", {
                                    staticClass: "lbl",
                                    attrs: {
                                      col: "0",
                                      row: "0",
                                      text: "Código:",
                                      textWrap: "true"
                                    }
                                  }),
                                  _c("Label", {
                                    staticClass: "lbl lbl-bold",
                                    attrs: {
                                      col: "0",
                                      row: "1",
                                      text: item.Codigo,
                                      textWrap: "true"
                                    }
                                  }),
                                  _c("Label", {
                                    staticClass: "lbl",
                                    attrs: {
                                      col: "0",
                                      row: "2",
                                      text: "Loja:",
                                      textWrap: "true"
                                    }
                                  }),
                                  _c("Label", {
                                    staticClass: "lbl lbl-bold",
                                    attrs: {
                                      col: "0",
                                      row: "3",
                                      text: item.Loja,
                                      textWrap: "true"
                                    }
                                  }),
                                  _c("Label", {
                                    staticClass: "lbl",
                                    attrs: {
                                      col: "0",
                                      row: "4",
                                      text: "Agendada para:",
                                      textWrap: "true"
                                    }
                                  }),
                                  _c("Label", {
                                    staticClass: "lbl lbl-bold",
                                    attrs: {
                                      col: "0",
                                      row: "5",
                                      text: _vm._f("FormataData")(
                                        item.DataEntrega
                                      ),
                                      textWrap: "true"
                                    }
                                  }),
                                  _c("Label", {
                                    staticClass: "lbl",
                                    attrs: {
                                      col: "0",
                                      row: "6",
                                      text: "Status:",
                                      textWrap: "true"
                                    }
                                  }),
                                  _c("Label", {
                                    staticClass: "lbl lbl-bold",
                                    attrs: {
                                      col: "0",
                                      row: "7",
                                      text: item.Status
                                    }
                                  }),
                                  _c("Button", {
                                    staticClass: "btn btn-primary btn-orange",
                                    attrs: {
                                      rowSpan: "6",
                                      row: "0",
                                      col: "1",
                                      text: "Visualizar"
                                    },
                                    on: {
                                      tap: function($event) {
                                        return _vm.visualizar(item, true)
                                      }
                                    }
                                  })
                                ],
                                1
                              )
                            }
                          }
                        ])
                      })
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/Login.vue?vue&type=template&id=c27482c4&scoped=true&":
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
    { attrs: { actionBarHidden: "true" } },
    [
      _c(
        "Scrollview",
        [
          _c(
            "FlexboxLayout",
            { staticClass: "page" },
            [
              _c(
                "StackLayout",
                { staticClass: "form" },
                [
                  _c("Image", {
                    staticClass: "logo",
                    attrs: { src: "~/images/logo.png" }
                  }),
                  _c("Label", {
                    staticClass: "header",
                    attrs: { text: "PEDIDOS" }
                  }),
                  this.retornoLogin != ""
                    ? _c("Label", { staticClass: "mensagem" }, [
                        _vm._v(_vm._s(_vm.retornoLogin))
                      ])
                    : _vm._e(),
                  _c(
                    "GridLayout",
                    { attrs: { rows: "auto, auto, auto" } },
                    [
                      _c(
                        "StackLayout",
                        { staticClass: "input-field", attrs: { row: "0" } },
                        [
                          _c("TextField", {
                            staticClass: "input",
                            attrs: {
                              hint: "Login",
                              isEnabled: !_vm.processing,
                              keyboardType: "email",
                              autocorrect: "false",
                              autocapitalizationType: "none",
                              returnKeyType: "next"
                            },
                            on: { returnPress: _vm.focusPassword },
                            model: {
                              value: _vm.user.email,
                              callback: function($event) {
                                _vm.$set(
                                  _vm.user,
                                  "email",
                                  $event.object["text"]
                                )
                              },
                              expression: "user.email"
                            }
                          }),
                          _c("StackLayout", { staticClass: "hr-light" })
                        ],
                        1
                      ),
                      _c(
                        "StackLayout",
                        { staticClass: "input-field", attrs: { row: "1" } },
                        [
                          _c("TextField", {
                            ref: "password",
                            staticClass: "input",
                            attrs: {
                              isEnabled: !_vm.processing,
                              hint: "Password",
                              secure: "true",
                              returnKeyType: _vm.isLoggingIn ? "done" : "next"
                            },
                            on: { returnPress: _vm.focusConfirmPassword },
                            model: {
                              value: _vm.user.password,
                              callback: function($event) {
                                _vm.$set(
                                  _vm.user,
                                  "password",
                                  $event.object["text"]
                                )
                              },
                              expression: "user.password"
                            }
                          }),
                          _c("StackLayout", { staticClass: "hr-light" })
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
                              value: !_vm.isLoggingIn,
                              expression: "!isLoggingIn"
                            }
                          ],
                          staticClass: "input-field",
                          attrs: { row: "2" }
                        },
                        [
                          _c("TextField", {
                            ref: "confirmPassword",
                            staticClass: "input",
                            attrs: {
                              isEnabled: !_vm.processing,
                              hint: "Confirm password",
                              secure: "true",
                              returnKeyType: "done"
                            },
                            model: {
                              value: _vm.user.confirmPassword,
                              callback: function($event) {
                                _vm.$set(
                                  _vm.user,
                                  "confirmPassword",
                                  $event.object["text"]
                                )
                              },
                              expression: "user.confirmPassword"
                            }
                          }),
                          _c("StackLayout", { staticClass: "hr-light" })
                        ],
                        1
                      ),
                      _c("ActivityIndicator", {
                        attrs: { rowSpan: "3", busy: _vm.processing }
                      }),
                      _c(
                        "StackLayout",
                        { attrs: { row: "3" } },
                        [
                          _c("Button", {
                            staticClass: "btn btn-primary btn-green m-t-20",
                            attrs: {
                              text: _vm.isLoggingIn ? "Entrar" : "Sign Up",
                              isEnabled: !_vm.processing
                            },
                            on: { tap: _vm.submit }
                          }),
                          _c("Label", {
                            staticClass: "login-label",
                            attrs: {
                              "*v-show": "isLoggingIn",
                              text: "Esqueceu sua senha?"
                            },
                            on: {
                              tap: function($event) {
                                return _vm.forgotPassword()
                              }
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
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

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



/***/ }),

/***/ "./ sync ^\\.\\/app\\.(css|scss|less|sass)$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./app.css": "./app.css"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./ sync ^\\.\\/app\\.(css|scss|less|sass)$";

/***/ }),

/***/ "./ sync recursive (?<!\\bApp_Resources\\b.*)(?<!\\.\\/\\btests\\b\\/.*?)\\.(xml|css|js|kt|(?<!\\.d\\.)ts|(?<!\\b_[\\w-]*\\.)scss)$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./_config/_config.js": "./_config/_config.js",
	"./app.css": "./app.css",
	"./app.js": "./app.js",
	"./routes/index.js": "./routes/index.js",
	"./services/backend-service.js": "./services/backend-service.js",
	"./services/heliar-app.js": "./services/heliar-app.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./ sync recursive (?<!\\bApp_Resources\\b.*)(?<!\\.\\/\\btests\\b\\/.*?)\\.(xml|css|js|kt|(?<!\\.d\\.)ts|(?<!\\b_[\\w-]*\\.)scss)$";

/***/ }),

/***/ "./_config/_config.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Config; });
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/node-libs-browser/node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_0__);

var _chaveToken = "device_token";
var _deviceid = "device_id";
var _apiUrl = "https://br-heliarexpress-qa.clarios.com/api/";

var applicationSettings = __webpack_require__("../node_modules/@nativescript/core/application-settings/application-settings.js");

class Config {
  getApiUrl() {
    return _apiUrl;
  }

  getToken() {
    if (applicationSettings.getString(_chaveToken) == null || applicationSettings.getString(_chaveToken) == undefined) return "";
    return applicationSettings.getString(_chaveToken);
  }

  setToken(_token) {
    applicationSettings.setString(_chaveToken, _token);
  }

  getDeviceId() {
    if (Object(util__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(applicationSettings.getString(_deviceid))) return "";
    return applicationSettings.getString(_deviceid);
  }

  setDeviceId(_id) {
    applicationSettings.setString(_deviceid, _id);
  }

}

/***/ }),

/***/ "./app.css":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {global.registerModule("~nativescript-theme-core/css/core.light.css", () => __webpack_require__("../node_modules/nativescript-dev-webpack/css2json-loader.js?useForImports!../node_modules/nativescript-theme-core/css/core.light.css"));
global.registerModule("nativescript-theme-core/css/core.light.css", () => __webpack_require__("../node_modules/nativescript-dev-webpack/css2json-loader.js?useForImports!../node_modules/nativescript-theme-core/css/core.light.css"));module.exports = {"type":"stylesheet","stylesheet":{"rules":[{"type":"import","import":"'~nativescript-theme-core/css/core.light.css'"},{"type":"rule","selectors":[".btn-primary"],"declarations":[{"type":"declaration","property":"height","value":"50"},{"type":"declaration","property":"border-radius","value":"5"},{"type":"declaration","property":"font-size","value":"20"},{"type":"declaration","property":"font-weight","value":"600"}]},{"type":"rule","selectors":[".btn-green"],"declarations":[{"type":"declaration","property":"background-color","value":"#067A65"}]},{"type":"rule","selectors":[".btn-red"],"declarations":[{"type":"declaration","property":"background-color","value":"#D51A1A"}]},{"type":"rule","selectors":[".btn-primary:disabled"],"declarations":[{"type":"declaration","property":"opacity","value":"0.5"}]}],"parsingErrors":[]}};;
    if (true) {
        module.hot.accept();
        module.hot.dispose(() => {
            global.hmrRefresh({ type: 'style', path: './app.css' });
        })
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/nativescript-dev-webpack/node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./app.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var nativescript_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/nativescript-vue/dist/index.js");
/* harmony import */ var nativescript_vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nativescript_vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./routes/index.js");
/* harmony import */ var _services_backend_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./services/backend-service.js");
/* harmony import */ var _services_heliar_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./services/heliar-app.js");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./_config/_config.js");
/* harmony import */ var nativescript_plugin_firebase_messaging__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../node_modules/nativescript-plugin-firebase/messaging/index.js");
/* harmony import */ var nativescript_plugin_firebase_messaging__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(nativescript_plugin_firebase_messaging__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var tns_core_modules_ui_frame__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("../node_modules/@nativescript/core/ui/frame/frame.js");
/* harmony import */ var tns_core_modules_ui_frame__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_ui_frame__WEBPACK_IMPORTED_MODULE_6__);

            __webpack_require__("../node_modules/nativescript-dev-webpack/load-application-css-regular.js")();
            
            
        if (true) {
            const hmrUpdate = __webpack_require__("../node_modules/nativescript-dev-webpack/hmr/index.js").hmrUpdate;
            global.__coreModulesLiveSync = global.__onLiveSync;

            global.__onLiveSync = function () {
                // handle hot updated on LiveSync
                hmrUpdate();
            };

            global.hmrRefresh = function({ type, path } = {}) {
                // the hot updates are applied, ask the modules to apply the changes
                setTimeout(() => {
                    global.__coreModulesLiveSync({ type, path });
                });
            };

            // handle hot updated on initial app start
            hmrUpdate();
        }
        
            const context = __webpack_require__("./ sync recursive (?<!\\bApp_Resources\\b.*)(?<!\\.\\/\\btests\\b\\/.*?)\\.(xml|css|js|kt|(?<!\\.d\\.)ts|(?<!\\b_[\\w-]*\\.)scss)$");
            global.registerWebpackModules(context);
            if (true) {
                module.hot.accept(context.id, () => { 
                    console.log("HMR: Accept module '" + context.id + "' from '" + module.i + "'"); 
                });
            }
            
        __webpack_require__("../node_modules/@nativescript/core/bundle-entry-points.js");
        






nativescript_vue__WEBPACK_IMPORTED_MODULE_0___default.a.config.silent = false;
var config = new _config_config__WEBPACK_IMPORTED_MODULE_4__["default"]();
nativescript_vue__WEBPACK_IMPORTED_MODULE_0___default.a.prototype.$config = config;
var backendService = new _services_backend_service__WEBPACK_IMPORTED_MODULE_2__["default"]();
nativescript_vue__WEBPACK_IMPORTED_MODULE_0___default.a.prototype.$backendService = backendService;
var heliarApp = new _services_heliar_app__WEBPACK_IMPORTED_MODULE_3__["default"]();
nativescript_vue__WEBPACK_IMPORTED_MODULE_0___default.a.prototype.$heliarApp = heliarApp;

var {
  alert,
  confirm,
  prompt,
  login,
  action,
  inputType
} = __webpack_require__("../node_modules/@nativescript/core/ui/dialogs/dialogs.js");

var firebase = __webpack_require__("../node_modules/nativescript-plugin-firebase/firebase.js");

var applicationSettings = __webpack_require__("../node_modules/@nativescript/core/application-settings/application-settings.js");

setTimeout(() => {
  firebase.init().then(instance => {
    nativescript_plugin_firebase_messaging__WEBPACK_IMPORTED_MODULE_5__["messaging"].registerForPushNotifications({
      onPushTokenReceivedCallback: token => {
        console.log("Firebase plugin received a push token: " + token);
        applicationSettings.setString('device_token', token);
        config.setToken(token);
      },
      onMessageReceivedCallback: message => {
        var codigo = message.data.key_1;
        var historico = message.data.key_2;
        alert({
          title: message.data.title,
          message: message.data.body,
          okButtonText: "Visualizar",
          cancelButtonText: "Cancelar"
        }).then(result => {
          nativescript_vue__WEBPACK_IMPORTED_MODULE_0___default.a.prototype.$heliarApp.isLoggedIn().then(response => {
            if (response.Status == false) {
              mensagem("Usuário não autenticado para visualizar o pedido");
              navigateToLogin(_routes__WEBPACK_IMPORTED_MODULE_1__["default"].login);
            } else {
              navigateTo(_routes__WEBPACK_IMPORTED_MODULE_1__["default"].pedido, codigo, historico);
            }
          }).catch(() => {
            alert("Erro ao verificar autenticação do usuário");
          });
        });
      },
      showNotifications: true,
      showNotificationsWhenInForeground: true
    }).then(() => console.log("Registered for push")).catch(error => console.log("registerForPushNotifications error: ".concat(error)));
    setTimeout(() => {
      nativescript_plugin_firebase_messaging__WEBPACK_IMPORTED_MODULE_5__["messaging"].getCurrentPushToken().then(token => {
        undefined.registerFirebase(token);
      }, e => console.log("Error: " + (e.message || e)));
    }, 5000);
  }).catch(error => {
    console.log("firebase.init error: ".concat(error));
    console.log("Prepare get token..");
    setTimeout(() => {
      console.log("Getting token..");
      nativescript_plugin_firebase_messaging__WEBPACK_IMPORTED_MODULE_5__["messaging"].getCurrentPushToken().then(token => {
        console.log("Token found: ", token);
        undefined.registerFirebase(token);
      }).catch(e => {
        console.log("Error getting token: " + (e.message || e));
      });
    }, 5000);
  });
}, 3000), new nativescript_vue__WEBPACK_IMPORTED_MODULE_0___default.a({
  render: h => h("frame", [h(backendService.isLoggedIn() ? _routes__WEBPACK_IMPORTED_MODULE_1__["default"].home : _routes__WEBPACK_IMPORTED_MODULE_1__["default"].login)])
}).$start();

function navigateTo(page, codigo, historico) {
  tns_core_modules_ui_frame__WEBPACK_IMPORTED_MODULE_6__["Frame"].topmost().currentPage.__vuePageRef__.$navigateTo(page, {
    clearHistory: true,
    props: {
      Codigo: codigo,
      Historico: historico
    }
  });
}

function navigateToLogin(page) {
  tns_core_modules_ui_frame__WEBPACK_IMPORTED_MODULE_6__["Frame"].topmost().currentPage.__vuePageRef__.$navigateTo(page, {
    clearHistory: true
  });
}

function mensagem(message) {
  return alert({
    title: "Atenção",
    okButtonText: "OK",
    message: message
  });
}
    
        
        
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/nativescript-dev-webpack/node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./components/Editar.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Editar_vue_vue_type_template_id_3014a756___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/Editar.vue?vue&type=template&id=3014a756&");
/* harmony import */ var _Editar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/Editar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Editar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./components/Editar.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Editar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Editar_vue_vue_type_template_id_3014a756___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Editar_vue_vue_type_template_id_3014a756___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__("../node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__("../node_modules/nativescript-vue/dist/index.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('3014a756')) {
      api.createRecord('3014a756', component.options)
    } else {
      api.reload('3014a756', component.options)
    }
    module.hot.accept("./components/Editar.vue?vue&type=template&id=3014a756&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _Editar_vue_vue_type_template_id_3014a756___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/Editar.vue?vue&type=template&id=3014a756&");
(function () {
      api.rerender('3014a756', {
        render: _Editar_vue_vue_type_template_id_3014a756___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _Editar_vue_vue_type_template_id_3014a756___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))
  }
}
component.options.__file = "components/Editar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./components/Editar.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Editar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/Editar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Editar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./components/Editar.vue?vue&type=style&index=0&lang=css&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Editar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/nativescript-dev-webpack/style-hot-loader.js!../node_modules/nativescript-dev-webpack/apply-css-loader.js!../node_modules/css-loader/index.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/vue-loader/lib/index.js?!./components/Editar.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Editar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Editar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Editar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Editar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Editar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./components/Editar.vue?vue&type=template&id=3014a756&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Editar_vue_vue_type_template_id_3014a756___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/Editar.vue?vue&type=template&id=3014a756&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Editar_vue_vue_type_template_id_3014a756___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Editar_vue_vue_type_template_id_3014a756___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./components/Home.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Home_vue_vue_type_template_id_67410f3a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/Home.vue?vue&type=template&id=67410f3a&");
/* harmony import */ var _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/Home.vue?vue&type=script&lang=js&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _Home_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./components/Home.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Home_vue_vue_type_template_id_67410f3a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Home_vue_vue_type_template_id_67410f3a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__("../node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__("../node_modules/nativescript-vue/dist/index.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('67410f3a')) {
      api.createRecord('67410f3a', component.options)
    } else {
      api.reload('67410f3a', component.options)
    }
    module.hot.accept("./components/Home.vue?vue&type=template&id=67410f3a&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _Home_vue_vue_type_template_id_67410f3a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/Home.vue?vue&type=template&id=67410f3a&");
(function () {
      api.rerender('67410f3a', {
        render: _Home_vue_vue_type_template_id_67410f3a___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _Home_vue_vue_type_template_id_67410f3a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))
  }
}
component.options.__file = "components/Home.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./components/Home.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/Home.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./components/Home.vue?vue&type=style&index=0&lang=css&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/nativescript-dev-webpack/style-hot-loader.js!../node_modules/nativescript-dev-webpack/apply-css-loader.js!../node_modules/css-loader/index.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/vue-loader/lib/index.js?!./components/Home.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./components/Home.vue?vue&type=template&id=67410f3a&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_67410f3a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/Home.vue?vue&type=template&id=67410f3a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_67410f3a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_67410f3a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./components/Login.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Login_vue_vue_type_template_id_c27482c4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/Login.vue?vue&type=template&id=c27482c4&scoped=true&");
/* harmony import */ var _Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/Login.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Login_vue_vue_type_style_index_0_id_c27482c4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./components/Login.vue?vue&type=style&index=0&id=c27482c4&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Login_vue_vue_type_template_id_c27482c4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Login_vue_vue_type_template_id_c27482c4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "c27482c4",
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__("../node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__("../node_modules/nativescript-vue/dist/index.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('c27482c4')) {
      api.createRecord('c27482c4', component.options)
    } else {
      api.reload('c27482c4', component.options)
    }
    module.hot.accept("./components/Login.vue?vue&type=template&id=c27482c4&scoped=true&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _Login_vue_vue_type_template_id_c27482c4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/Login.vue?vue&type=template&id=c27482c4&scoped=true&");
(function () {
      api.rerender('c27482c4', {
        render: _Login_vue_vue_type_template_id_c27482c4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _Login_vue_vue_type_template_id_c27482c4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))
  }
}
component.options.__file = "components/Login.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./components/Login.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/Login.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./components/Login.vue?vue&type=style&index=0&id=c27482c4&scoped=true&lang=css&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_style_index_0_id_c27482c4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/nativescript-dev-webpack/style-hot-loader.js!../node_modules/nativescript-dev-webpack/apply-css-loader.js!../node_modules/css-loader/index.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/vue-loader/lib/index.js?!./components/Login.vue?vue&type=style&index=0&id=c27482c4&scoped=true&lang=css&");
/* harmony import */ var _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_style_index_0_id_c27482c4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_style_index_0_id_c27482c4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_style_index_0_id_c27482c4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_style_index_0_id_c27482c4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_style_index_0_id_c27482c4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./components/Login.vue?vue&type=template&id=c27482c4&scoped=true&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_c27482c4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/Login.vue?vue&type=template&id=c27482c4&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_c27482c4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_c27482c4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./components/Pedido.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Pedido_vue_vue_type_template_id_09aa6c40___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/Pedido.vue?vue&type=template&id=09aa6c40&");
/* harmony import */ var _Pedido_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/Pedido.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Pedido_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./components/Pedido.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Pedido_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Pedido_vue_vue_type_template_id_09aa6c40___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Pedido_vue_vue_type_template_id_09aa6c40___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__("../node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__("../node_modules/nativescript-vue/dist/index.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('09aa6c40')) {
      api.createRecord('09aa6c40', component.options)
    } else {
      api.reload('09aa6c40', component.options)
    }
    module.hot.accept("./components/Pedido.vue?vue&type=template&id=09aa6c40&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _Pedido_vue_vue_type_template_id_09aa6c40___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/Pedido.vue?vue&type=template&id=09aa6c40&");
(function () {
      api.rerender('09aa6c40', {
        render: _Pedido_vue_vue_type_template_id_09aa6c40___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _Pedido_vue_vue_type_template_id_09aa6c40___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))
  }
}
component.options.__file = "components/Pedido.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./components/Pedido.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Pedido_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/Pedido.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Pedido_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./components/Pedido.vue?vue&type=style&index=0&lang=css&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Pedido_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/nativescript-dev-webpack/style-hot-loader.js!../node_modules/nativescript-dev-webpack/apply-css-loader.js!../node_modules/css-loader/index.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/vue-loader/lib/index.js?!./components/Pedido.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Pedido_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Pedido_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Pedido_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Pedido_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Pedido_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./components/Pedido.vue?vue&type=template&id=09aa6c40&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Pedido_vue_vue_type_template_id_09aa6c40___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/Pedido.vue?vue&type=template&id=09aa6c40&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Pedido_vue_vue_type_template_id_09aa6c40___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Pedido_vue_vue_type_template_id_09aa6c40___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./package.json":
/***/ (function(module) {

module.exports = JSON.parse("{\"android\":{\"v8Flags\":\"--expose_gc\",\"forceLog\":true,\"markingMode\":\"none\"},\"main\":\"app.js\",\"name\":\"tns-template-vue\",\"version\":\"3.2.0\",\"discardUncaughtJsExceptions\":true}");

/***/ }),

/***/ "./routes/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Login__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/Login.vue");
/* harmony import */ var _components_Home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/Home.vue");
/* harmony import */ var _components_Pedido__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./components/Pedido.vue");



var routes = {
  login: _components_Login__WEBPACK_IMPORTED_MODULE_0__["default"],
  home: _components_Home__WEBPACK_IMPORTED_MODULE_1__["default"],
  pedido: _components_Pedido__WEBPACK_IMPORTED_MODULE_2__["default"]
};
/* harmony default export */ __webpack_exports__["default"] = (routes);

/***/ }),

/***/ "./services/backend-service.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BackendService; });
/* harmony import */ var kinvey_nativescript_sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/kinvey-nativescript-sdk/lib/nativescript/index.js");
/* harmony import */ var kinvey_nativescript_sdk__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(kinvey_nativescript_sdk__WEBPACK_IMPORTED_MODULE_0__);
// The following is a sample implementation of a backend service using Progress Kinvey (https://www.progress.com/kinvey).
// Feel free to swap in your own service / APIs / etc here for your own apps.

kinvey_nativescript_sdk__WEBPACK_IMPORTED_MODULE_0__["init"]({
  appKey: "kid_SyY8LYO8M",
  appSecret: "09282985d7c540f7b076a9c7fd884c77"
});
class BackendService {
  isLoggedIn() {
    return !!kinvey_nativescript_sdk__WEBPACK_IMPORTED_MODULE_0__["User"].getActiveUser();
  }

  login(user) {
    return kinvey_nativescript_sdk__WEBPACK_IMPORTED_MODULE_0__["User"].login(user.email, user.password);
  }

  resetPassword(user) {
    return kinvey_nativescript_sdk__WEBPACK_IMPORTED_MODULE_0__["User"].resetPassword(user);
  }

  logout() {
    return kinvey_nativescript_sdk__WEBPACK_IMPORTED_MODULE_0__["User"].logout();
  }

  register(user) {
    return kinvey_nativescript_sdk__WEBPACK_IMPORTED_MODULE_0__["User"].signup({
      username: user.email,
      password: user.password
    });
  }

}

/***/ }),

/***/ "./services/heliar-app.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HeliarApp; });
/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@nativescript/core/http/http.js");
/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(http__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var kinvey_nativescript_sdk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/kinvey-nativescript-sdk/lib/nativescript/index.js");
/* harmony import */ var kinvey_nativescript_sdk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(kinvey_nativescript_sdk__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./_config/_config.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/node-libs-browser/node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_3__);




var config = new _config_config__WEBPACK_IMPORTED_MODULE_2__["default"]();
class HeliarApp {
  // tela de autenticacao
  isLoggedIn() {
    return this.requestHeliar("autenticacaomobile/verificarautenticado", JSON.stringify({
      token: config.getToken()
    }), "POST");
  }

  desautenticar() {
    return this.requestHeliar("autenticacaomobile/desautenticar", JSON.stringify({
      dispositivo: config.getDeviceId()
    }), "POST");
  }

  login(user) {
    return this.requestHeliar("autenticacaomobile/autenticar", JSON.stringify({
      email: user.email,
      senha: user.password,
      token: config.getToken(),
      dispositivo: config.getDeviceId()
    }), "POST");
  }

  resetPassword(user) {
    return this.requestHeliar("autenticacaomobile/esquecisenha", JSON.stringify({
      email: user
    }), "POST");
  }

  logout() {
    return kinvey_nativescript_sdk__WEBPACK_IMPORTED_MODULE_1__["User"].logout();
  }

  register(user) {
    return kinvey_nativescript_sdk__WEBPACK_IMPORTED_MODULE_1__["User"].signup({
      username: user.email,
      password: user.password
    });
  } //fim tela de autenticacao
  // tela de pedidos


  pedidos() {
    return this.requestHeliar("pedidomobile/listarpedidos", JSON.stringify({
      dispositivo: config.getDeviceId()
    }), "POST");
  }

  pedidosHistorico(pedidoStatus, dataInicial, dataFinal) {
    return this.requestHeliar("pedidomobile/listarpedidoshistorico", JSON.stringify({
      StatusPedidoFiltro: pedidoStatus,
      DataInicial: dataInicial,
      DataFinal: dataFinal,
      dispositivo: config.getDeviceId()
    }), "POST");
  }

  detalhePedido(codigo) {
    return this.requestHeliar("pedidomobile/detalhepedido", JSON.stringify({
      codigoPedido: codigo
    }), "POST");
  } // fim tela de pedidos
  // aceitar ou recusar pedido


  aceitarPedido(codigo, isAceito) {
    return this.requestHeliar("aceitarpedidomobile/aceitarpedidomobile", JSON.stringify({
      codigoPedido: codigo,
      aceitaPedido: isAceito,
      dispositivo: config.getDeviceId()
    }), "POST");
  }

  recusarPedido(codigo, isAceito, result, outros) {
    return this.requestHeliar("aceitarpedidomobile/aceitarpedidomobile", JSON.stringify({
      codigoPedido: codigo,
      aceitaPedido: isAceito,
      dispositivo: config.getDeviceId(),
      motivo: result,
      MotivoOutros: outros
    }), "POST");
  }

  encerrarPedido(codigo) {
    return this.requestHeliar("alterarpedidomobile/alterarstatuspedidomobile", JSON.stringify({
      codigoPedido: codigo,
      codigoStatus: 10,
      // 10 = entregue
      dispositivo: config.getDeviceId()
    }), "POST");
  }

  cancelarPedido(codigo, result, outros) {
    if (outros != '') {
      result = outros;
    }

    return this.requestHeliar("alterarpedidomobile/alterarstatuspedidomobile", JSON.stringify({
      codigoPedido: codigo,
      codigoStatus: 11,
      //pediodo cancelado pela loja
      dispositivo: config.getDeviceId(),
      motivo: result,
      MotivoOutros: outros
    }), "POST");
  } // fim aceitar ou recusar pedido
  // popular dados


  popularDados() {
    return this.requestHeliar("alterardadosmobile/obterdados", JSON.stringify({
      dispositivo: config.getDeviceId()
    }), "POST");
  } // popular dados
  // salvar dados


  salvarDados(Codigo, Nome, Email, Senha, SenhaAtual, ConfirmarSenha) {
    return this.requestHeliar("alterardadosmobile/AlterarDados", JSON.stringify({
      Codigo: Codigo,
      Nome: Nome,
      Email: Email,
      Senha: Senha,
      SenhaAtual: SenhaAtual,
      ConfirmarSenha: ConfirmarSenha
    }), "POST");
  } // salvar dados


  requestHeliar(url, objeto, metodo) {
    var apiUrl = config.getApiUrl();
    return http__WEBPACK_IMPORTED_MODULE_0__["request"]({
      url: apiUrl + url,
      method: metodo,
      headers: {
        "Content-Type": "application/json"
      },
      content: objeto
    }).then(response => {
      return response.content.toJSON();
    }, error => {
      return error;
    });
  }

}

/***/ })

},[["./app.js","runtime","vendor"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vY29tcG9uZW50cy9FZGl0YXIudnVlIiwid2VicGFjazovLy9jb21wb25lbnRzL0hvbWUudnVlIiwid2VicGFjazovLy9jb21wb25lbnRzL0xvZ2luLnZ1ZSIsIndlYnBhY2s6Ly8vY29tcG9uZW50cy9QZWRpZG8udnVlIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvRWRpdGFyLnZ1ZT8yZjI2Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSG9tZS52dWU/NGY3YiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xvZ2luLnZ1ZT8wMTQ3Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvUGVkaWRvLnZ1ZT9kMGZlIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvRWRpdGFyLnZ1ZT8yZjcxIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSG9tZS52dWU/YjY2YiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xvZ2luLnZ1ZT8zY2U4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvUGVkaWRvLnZ1ZT9iODIxIiwid2VicGFjazovLy8uIHN5bmMgbm9ucmVjdXJzaXZlIF5cXC5cXC9hcHBcXC4oY3NzfHNjc3N8bGVzc3xzYXNzKSQiLCJ3ZWJwYWNrOi8vL1xcYl9bXFx3LV0qXFwuKXNjc3MpJCIsIndlYnBhY2s6Ly8vLi9fY29uZmlnL19jb25maWcuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwLmNzcyIsIndlYnBhY2s6Ly8vLi9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9FZGl0YXIudnVlIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvRWRpdGFyLnZ1ZT8yMWNhIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvRWRpdGFyLnZ1ZT82Mzc5Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvRWRpdGFyLnZ1ZT8zNTFkIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSG9tZS52dWUiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Ib21lLnZ1ZT81NjI1Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSG9tZS52dWU/OWI4NSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hvbWUudnVlPzgzNDIiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Mb2dpbi52dWUiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Mb2dpbi52dWU/ZTYwNiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xvZ2luLnZ1ZT8yMTI0Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTG9naW4udnVlP2ZiNGYiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9QZWRpZG8udnVlIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvUGVkaWRvLnZ1ZT9iMDBhIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvUGVkaWRvLnZ1ZT85M2QzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvUGVkaWRvLnZ1ZT9hMjllIiwid2VicGFjazovLy8uL3JvdXRlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zZXJ2aWNlcy9iYWNrZW5kLXNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vc2VydmljZXMvaGVsaWFyLWFwcC5qcyJdLCJuYW1lcyI6WyJfY2hhdmVUb2tlbiIsIl9kZXZpY2VpZCIsIl9hcGlVcmwiLCJhcHBsaWNhdGlvblNldHRpbmdzIiwicmVxdWlyZSIsIkNvbmZpZyIsImdldEFwaVVybCIsImdldFRva2VuIiwiZ2V0U3RyaW5nIiwidW5kZWZpbmVkIiwic2V0VG9rZW4iLCJfdG9rZW4iLCJzZXRTdHJpbmciLCJnZXREZXZpY2VJZCIsImlzTnVsbE9yVW5kZWZpbmVkIiwic2V0RGV2aWNlSWQiLCJfaWQiLCJyb3V0ZXMiLCJCYWNrZW5kU2VydmljZSIsIkhlbGlhckFwcCIsIm1lc3NhZ2luZyIsIkZyYW1lIiwiY29uZmlnIiwiVnVlIiwicHJvdG90eXBlIiwiJGNvbmZpZyIsImJhY2tlbmRTZXJ2aWNlIiwiJGhlbGlhckFwcCIsImhlbGlhckFwcCIsImFsZXJ0IiwiY29uZmlybSIsInByb21wdCIsImFjdGlvbiIsImlucHV0VHlwZSIsImZpcmViYXNlIiwic2V0VGltZW91dCIsImluaXQiLCJ0aGVuIiwib25QdXNoVG9rZW5SZWNlaXZlZENhbGxiYWNrIiwiY29uc29sZSIsImxvZyIsInRpdGxlIiwibWVzc2FnZSIsImRhdGEiLCJva0J1dHRvblRleHQiLCJjYW5jZWxCdXR0b25UZXh0IiwicmVzdWx0IiwicmVzcG9uc2UiLCJTdGF0dXMiLCJuYXZpZ2F0ZVRvTG9naW4iLCJuYXZpZ2F0ZVRvIiwic2hvd05vdGlmaWNhdGlvbnMiLCJjYXRjaCIsImdldEN1cnJlbnRQdXNoVG9rZW4iLCJyZWdpc3RlckZpcmViYXNlIiwidG9rZW4iLCJlIiwiZXJyb3IiLCJyZW5kZXIiLCJoIiwiJHN0YXJ0IiwidG9wbW9zdCIsImN1cnJlbnRQYWdlIiwiX192dWVQYWdlUmVmX18iLCIkbmF2aWdhdGVUbyIsInBhZ2UiLCJjbGVhckhpc3RvcnkiLCJwcm9wcyIsIkNvZGlnbyIsImNvZGlnbyIsIkhpc3RvcmljbyIsImhpc3RvcmljbyIsIm1lbnNhZ2VtIiwibG9naW4iLCJMb2dpbiIsImhvbWUiLCJIb21lIiwicGVkaWRvIiwiUGVkaWRvIiwiS2ludmV5IiwiYXBwS2V5IiwiYXBwU2VjcmV0IiwiaXNMb2dnZWRJbiIsImdldEFjdGl2ZVVzZXIiLCJ1c2VyIiwiZW1haWwiLCJwYXNzd29yZCIsInJlc2V0UGFzc3dvcmQiLCJsb2dvdXQiLCJyZWdpc3RlciIsInNpZ251cCIsInVzZXJuYW1lIiwicmVxdWVzdEhlbGlhciIsIkpTT04iLCJzdHJpbmdpZnkiLCJkZXNhdXRlbnRpY2FyIiwiZGlzcG9zaXRpdm8iLCJzZW5oYSIsInBlZGlkb3MiLCJwZWRpZG9zSGlzdG9yaWNvIiwicGVkaWRvU3RhdHVzIiwiZGF0YUluaWNpYWwiLCJkYXRhRmluYWwiLCJTdGF0dXNQZWRpZG9GaWx0cm8iLCJEYXRhSW5pY2lhbCIsIkRhdGFGaW5hbCIsImRldGFsaGVQZWRpZG8iLCJjb2RpZ29QZWRpZG8iLCJhY2VpdGFyUGVkaWRvIiwiaXNBY2VpdG8iLCJhY2VpdGFQZWRpZG8iLCJyZWN1c2FyUGVkaWRvIiwib3V0cm9zIiwibW90aXZvIiwiTW90aXZvT3V0cm9zIiwiZW5jZXJyYXJQZWRpZG8iLCJjb2RpZ29TdGF0dXMiLCJjYW5jZWxhclBlZGlkbyIsInBvcHVsYXJEYWRvcyIsInNhbHZhckRhZG9zIiwiTm9tZSIsIkVtYWlsIiwiU2VuaGEiLCJTZW5oYUF0dWFsIiwiQ29uZmlybWFyU2VuaGEiLCJ1cmwiLCJvYmpldG8iLCJtZXRvZG8iLCJhcGlVcmwiLCJodHRwIiwibWV0aG9kIiwiaGVhZGVycyIsImNvbnRlbnQiLCJ0b0pTT04iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF3RUE7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQSxHQUhBOztBQUlBLHNCQUpBO0FBS0E7QUFDQTtBQUNBLEdBUEE7QUFRQTtBQUNBO0FBQ0Esc0JBQ0EsWUFEQSxHQUVBLElBRkEsQ0FFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBSEEsTUFJQTtBQUNBO0FBQ0E7QUFDQSxPQVZBLEVBV0EsS0FYQSxDQVdBO0FBQ0E7QUFDQSxPQWJBO0FBY0EsS0FoQkE7O0FBaUJBO0FBQ0E7QUFDQSwwQkFEQTtBQUVBO0FBQ0E7QUFEQTtBQUZBO0FBTUEsS0F4QkE7O0FBeUJBO0FBQ0Esc0JBQ0EsV0FEQSxDQUNBLG1CQURBLEVBQ0EsaUJBREEsRUFDQSxrQkFEQSxFQUNBLGtCQURBLEVBQ0EsdUJBREEsRUFDQSwyQkFEQSxFQUVBLElBRkEsQ0FFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQSxTQUxBLE1BTUE7QUFDQTtBQUNBO0FBQ0EsT0FaQSxFQWFBLEtBYkEsQ0FhQTtBQUNBO0FBQ0EsT0FmQTtBQWdCQSxLQTFDQTs7QUEyQ0E7QUFDQTtBQUNBLEtBN0NBOztBQThDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBbERBOztBQW1EQTtBQUNBO0FBQ0Esd0JBREE7QUFFQSwwQkFGQTtBQUdBO0FBSEE7QUFLQTs7QUF6REE7QUFSQSxHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1lBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQSxlQURBO0FBRUEsd0JBRkE7QUFHQSxzQkFIQTtBQUlBLHNCQUpBO0FBS0Esd0JBTEE7QUFNQSw0QkFOQTtBQU9BLDRCQVBBO0FBUUEsOEJBUkE7QUFTQSwwQkFUQTtBQVVBLDJCQVZBO0FBV0Esb0NBWEE7QUFZQSxtQ0FaQTtBQWFBLHdCQWJBO0FBY0E7QUFkQTtBQWdCQSxHQWxCQTs7QUFtQkEsdUVBbkJBO0FBb0JBO0FBRUE7QUFDQTtBQUVBO0FBQUEsVUFDQSw2QkFEQTtBQUFBLFVBRUEsc0JBRkE7QUFBQSxVQUdBLHFCQUhBO0FBS0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBRUE7QUFBQSxVQUNBLDZCQURBO0FBQUEsVUFFQSxzQkFGQTtBQUFBLFVBR0EscUJBSEE7QUFLQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FGQSxNQUdBO0FBQ0E7QUFDQSxPQUZBLE1BR0E7QUFDQTtBQUNBLE9BRkEsTUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBRUEsR0E5RUE7QUErRUE7QUFDQTtBQUNBO0FBQUEsVUFDQSw2QkFEQTtBQUFBLFVBRUEsc0JBRkE7QUFBQSxVQUdBLHFCQUhBO0FBQUEsVUFJQSx3QkFKQTtBQUFBLFVBS0EsNEJBTEE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFmQSxHQS9FQTtBQWdHQTtBQUNBO0FBQ0Esc0JBQ0EsYUFEQSxHQUVBLElBRkEsQ0FFQTtBQUNBLHFDQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0EsU0FMQSxNQU1BO0FBQ0E7QUFDQTtBQUNBLE9BWkEsRUFhQSxLQWJBLENBYUE7QUFDQTtBQUNBLE9BZkE7QUFnQkEsS0FsQkE7O0FBbUJBO0FBQ0E7QUFDQTtBQUNBLEtBdEJBOztBQXVCQTtBQUNBO0FBQ0E7QUFDQSxLQTFCQTs7QUEyQkE7QUFDQTtBQUFBLFVBQ0EsNkJBREE7QUFBQSxVQUVBLHNCQUZBO0FBQUEsVUFHQSxxQkFIQTtBQUtBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBeENBOztBQXlDQTtBQUNBO0FBQUEsVUFDQSw2QkFEQTtBQUFBLFVBRUEsc0JBRkE7QUFBQSxVQUdBLHFCQUhBO0FBS0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0F0REE7O0FBdURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQTVEQTs7QUE2REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBbEVBOztBQW1FQTtBQUVBO0FBQ0E7O0FBRUE7O0FBQ0E7QUFDQSwyREFEQTtBQUVBLG9DQUZBO0FBR0E7QUFIQSxTQUlBLElBSkEsQ0FJQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBSkEsTUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBSkEsTUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBSkEsTUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBSkEsTUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FwQ0E7QUFxQ0EsS0E5R0E7O0FBK0dBO0FBQ0E7QUFDQSwwQkFEQTtBQUVBO0FBQ0E7QUFEQTtBQUZBO0FBTUEsS0F0SEE7O0FBdUhBO0FBQ0E7QUFDQSx3QkFDQSxPQURBLEdBRUEsSUFGQSxDQUVBO0FBQ0E7QUFDQSxTQUpBLEVBS0EsS0FMQSxDQUtBO0FBQ0E7QUFDQSxTQVBBO0FBT0EsT0FSQSxFQVNBLElBVEE7QUFVQSxLQWxJQTs7QUFtSUE7QUFDQTtBQUNBLHdCQUNBLGdCQURBLENBQ0EsaUJBREEsRUFDQSxnQkFEQSxFQUNBLGlCQURBLEVBRUEsSUFGQSxDQUVBO0FBQ0E7QUFDQSxTQUpBLEVBS0EsS0FMQSxDQUtBO0FBQ0E7QUFDQSxTQVBBO0FBT0EsT0FSQSxFQVNBLElBVEE7QUFVQSxLQTlJQTs7QUErSUE7QUFDQTtBQUNBLDBCQURBO0FBRUE7QUFDQSwwQkFEQTtBQUVBLGdDQUZBO0FBR0Esa0NBSEE7QUFJQSxvQ0FKQTtBQUtBO0FBTEE7QUFGQTtBQVVBLEtBMUpBOztBQTJKQTtBQUNBLDJDQURBLENBQ0E7O0FBQ0E7QUFDQTs7QUE5SkE7QUFoR0EsRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6Q0E7QUFDQTtBQUVBO0FBRUE7QUFDQSxxQkFEQTs7QUFFQTtBQUVBO0FBRUE7QUFDQSx1QkFEQTtBQUVBLHVCQUZBO0FBR0E7QUFDQTtBQUNBLGlCQURBO0FBRUEsb0JBRkE7QUFHQTtBQUhBLE9BSkE7QUFTQTtBQVRBO0FBV0EsR0FqQkE7O0FBa0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQVJBOztBQVNBO0FBQ0Esc0JBQ0EsVUFEQSxHQUVBLElBRkEsQ0FFQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQSxPQVJBLEVBU0EsS0FUQSxDQVNBO0FBQ0E7QUFDQSxPQVhBO0FBWUEsS0F0QkE7O0FBdUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FKQSxDQU1BO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTs7QUFDQTtBQUNBO0FBQ0EsT0FGQSxNQUVBO0FBQ0E7QUFDQTtBQUNBLEtBeENBOztBQXlDQTtBQUNBLDJCQUNBLEtBREEsQ0FDQSxTQURBLEVBRUEsSUFGQSxDQUVBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQSxPQVBBLEVBUUEsS0FSQSxDQVFBO0FBQ0E7QUFDQSxtQkFDQSwrQ0FEQTtBQUdBLE9BYkE7QUFjQSxLQXhEQTs7QUF5REE7QUFDQSxzQkFDQSxLQURBLENBQ0EsU0FEQSxFQUVBLElBRkEsQ0FFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFEQTtBQUdBLE9BWEE7QUFZQSxLQXRFQTs7QUF1RUE7QUFDQTtBQUNBLG9DQURBO0FBRUEsNkdBRkE7QUFHQSwwQkFIQTtBQUlBLDhCQUpBO0FBS0Esb0NBTEE7QUFNQTtBQU5BLFNBT0EsSUFQQSxDQU9BO0FBQ0E7QUFDQSwwQkFDQSxhQURBLENBQ0EsZ0JBREEsRUFFQSxJQUZBLENBRUE7QUFDQTtBQUNBLFdBSkEsRUFLQSxLQUxBLENBS0E7QUFDQTtBQUNBLFdBUEE7QUFRQTtBQUNBLE9BbEJBO0FBbUJBLEtBM0ZBOztBQTRGQTtBQUNBO0FBQ0EsS0E5RkE7O0FBK0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FuR0E7O0FBb0dBO0FBQ0E7QUFDQSx3QkFEQTtBQUVBLDBCQUZBO0FBR0E7QUFIQTtBQUtBOztBQTFHQTtBQWxCQSxHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOEpBO0FBQ0E7QUFDQTs7QUFDQTs7QUFFQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGlCQURBO0FBRUEscUJBRkE7QUFHQSxxQkFIQTtBQUlBLG1CQUpBO0FBS0Esd0JBTEE7QUFNQSw2QkFOQTtBQU9BLG1DQVBBO0FBUUEseUJBUkE7QUFTQSx1QkFUQTtBQVVBLHVCQVZBO0FBV0Esa0JBWEE7QUFZQSxtQkFaQTtBQWFBO0FBYkE7QUFlQSxHQWpCQTs7QUFrQkEsK0RBbEJBOztBQW1CQTtBQUNBO0FBQ0EsR0FyQkE7O0FBc0JBO0FBQ0E7QUFDQTtBQUFBLFVBQ0EsNkJBREE7QUFBQSxVQUVBLHNCQUZBO0FBQUEsVUFHQSxxQkFIQTtBQUtBO0FBQ0E7QUFFQTtBQUNBLEtBWEE7QUFZQTtBQUNBO0FBQUEsVUFDQSx3QkFEQTtBQUFBLFVBRUEsNEJBRkE7QUFJQTtBQUNBO0FBRUE7QUFDQSxLQXJCQTtBQXNCQTtBQUNBO0FBQ0E7QUFDQSxPQUZBLE1BR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0EvQkE7QUFnQ0E7QUFDQTtBQUNBO0FBQ0EsS0FuQ0E7QUFvQ0E7QUFDQTtBQUFBO0FBQUE7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQTFDQTtBQTJDQTtBQUNBO0FBQUE7QUFBQTs7QUFBQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUEsK0hBQ0EsNENBREEsR0FDQSxZQURBLEdBQ0EsY0FEQTtBQUVBLEtBdERBO0FBdURBO0FBQ0E7QUFBQTtBQUFBOztBQUFBO0FBRUE7QUFDQSxLQTNEQTtBQTREQTtBQUNBO0FBQ0EsS0E5REE7QUErREE7QUFDQTtBQUNBO0FBakVBLEdBdEJBO0FBeUZBO0FBQ0E7QUFDQSxzQkFDQSxhQURBLENBQ0EsTUFEQSxFQUVBLElBRkEsQ0FFQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0NBREEsQ0FDQTs7QUFDQSxrQ0FGQSxDQUVBOztBQUNBLGdDQUhBLENBR0E7QUFDQSxTQUpBLE1BS0E7QUFDQSxpQ0FEQSxDQUNBOztBQUNBLGlDQUZBLENBRUE7QUFDQSxTQUhBLE1BSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBTEEsTUFNQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BbkNBLEVBb0NBLEtBcENBLENBb0NBO0FBQ0E7QUFDQSxPQXRDQTtBQXVDQSxLQXpDQTs7QUEwQ0E7QUFDQSw2SEFDQSxPQURBLENBQ0EsSUFEQSxFQUNBLEdBREEsRUFDQSxPQURBLENBQ0EsSUFEQSxFQUNBLEdBREEsRUFDQSxPQURBLENBQ0EsR0FEQSxFQUNBLEdBREEsRUFDQSxPQURBLENBQ0EsR0FEQSxFQUNBLEdBREEsRUFDQSxPQURBLENBQ0EsR0FEQSxFQUNBLEdBREEsRUFFQSxPQUZBLENBRUEsR0FGQSxFQUVBLEdBRkEsRUFFQSxPQUZBLENBRUEsR0FGQSxFQUVBLEdBRkEsRUFFQSxPQUZBLENBRUEsR0FGQSxFQUVBLEdBRkEsRUFFQSxPQUZBLENBRUEsR0FGQSxFQUVBLEdBRkE7QUFHQSxLQTlDQTs7QUErQ0E7QUFDQSxnS0FDQSxPQURBLENBQ0EsSUFEQSxFQUNBLEdBREEsRUFDQSxPQURBLENBQ0EsSUFEQSxFQUNBLEdBREEsRUFDQSxPQURBLENBQ0EsR0FEQSxFQUNBLEdBREEsRUFDQSxPQURBLENBQ0EsR0FEQSxFQUNBLEdBREEsRUFDQSxPQURBLENBQ0EsR0FEQSxFQUNBLEdBREEsRUFFQSxPQUZBLENBRUEsR0FGQSxFQUVBLEdBRkEsRUFFQSxPQUZBLENBRUEsR0FGQSxFQUVBLEdBRkEsRUFFQSxPQUZBLENBRUEsR0FGQSxFQUVBLEdBRkEsRUFFQSxPQUZBLENBRUEsR0FGQSxFQUVBLEdBRkE7QUFHQSxLQW5EQTs7QUFvREE7QUFDQTtBQUNBO0FBQ0EsMEJBREE7QUFFQTtBQUNBLG1DQURBO0FBRUEsbUNBRkE7QUFHQSxxQ0FIQTtBQUlBO0FBSkE7QUFGQTtBQVNBLEtBL0RBOztBQWdFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FyRUE7O0FBc0VBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQTNFQTs7QUE0RUE7QUFDQSxzQkFDQSxjQURBLENBQ0EsV0FEQSxFQUVBLElBRkEsQ0FFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0EsT0FSQSxFQVNBLEtBVEEsQ0FTQTtBQUNBO0FBQ0EsT0FYQTtBQVlBLEtBekZBOztBQTBGQTtBQUNBLHNCQUNBLGFBREEsQ0FDQSxXQURBLEVBQ0EsSUFEQSxFQUNBLEVBREEsRUFDQSxFQURBLEVBRUEsSUFGQSxDQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0EsT0FQQSxFQVFBLEtBUkEsQ0FRQTtBQUNBO0FBQ0EsT0FWQTtBQVdBLEtBdEdBOztBQXVHQTtBQUNBOztBQUNBO0FBQ0EsNERBREE7QUFFQSxvQ0FGQTtBQUdBO0FBSEEsU0FJQSxJQUpBLENBSUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGdFQURBO0FBRUEsbUNBRkE7QUFHQSx3Q0FIQTtBQUlBO0FBSkEsYUFLQSxJQUxBLENBS0E7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsNEJBQ0EsYUFEQSxDQUNBLFdBREEsRUFDQSxLQURBLEVBQ0EsUUFEQSxFQUNBLGtCQURBLEVBRUEsSUFGQSxDQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQSxhQVJBLEVBU0EsS0FUQSxDQVNBO0FBQ0E7QUFDQSxhQVhBO0FBWUEsV0F2QkE7QUF3QkEsU0F6QkEsTUEwQkE7QUFDQSwwQkFDQSxhQURBLENBQ0EsV0FEQSxFQUNBLEtBREEsRUFDQSxRQURBLEVBQ0EsRUFEQSxFQUVBLElBRkEsQ0FFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0EsV0FSQSxFQVNBLEtBVEEsQ0FTQTtBQUNBO0FBQ0EsV0FYQTtBQVlBO0FBQ0EsT0FuREE7QUFvREEsS0E3SkE7O0FBOEpBO0FBQ0E7O0FBQ0E7QUFDQSxzRUFEQTtBQUVBLG9DQUZBO0FBR0E7QUFIQSxTQUlBLElBSkEsQ0FJQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMEVBREE7QUFFQSxtQ0FGQTtBQUdBLHdDQUhBO0FBSUE7QUFKQSxhQUtBLElBTEEsQ0FLQTtBQUVBO0FBQ0E7QUFDQTs7QUFFQSw0QkFDQSxjQURBLENBQ0EsV0FEQSxFQUNBLFFBREEsRUFDQSxrQkFEQSxFQUVBLElBRkEsQ0FFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQSxhQVRBLEVBVUEsS0FWQSxDQVVBO0FBQ0E7QUFDQSxhQVpBO0FBYUEsV0F4QkE7QUF5QkEsU0ExQkEsTUEyQkE7QUFDQSwwQkFDQSxjQURBLENBQ0EsV0FEQSxFQUNBLFFBREEsRUFDQSxFQURBLEVBRUEsSUFGQSxDQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBLFdBVEEsRUFVQSxLQVZBLENBVUE7QUFDQTtBQUNBLFdBWkE7QUFhQTtBQUNBLE9BckRBO0FBc0RBLEtBdE5BOztBQXVOQTtBQUNBO0FBQ0Esd0JBREE7QUFFQSwwQkFGQTtBQUdBO0FBSEE7QUFLQTs7QUE3TkE7QUF6RkEsRzs7Ozs7OztBQ2xPQSx5RUFBMkIsbUJBQU8sQ0FBQyw0Q0FBK0M7QUFDbEY7OztBQUdBO0FBQ0EsY0FBYyxRQUFTLGtCQUFrQixxQkFBcUIsc0JBQXNCLEdBQUcsU0FBUyx1QkFBdUIsR0FBRyxRQUFRLGtCQUFrQixzQkFBc0IsdUJBQXVCLEdBQUcsU0FBUywwQkFBMEIsR0FBRyxRQUFRLHVCQUF1QixHQUFHLGNBQWMsaUJBQWlCLHNCQUFzQix5QkFBeUIsR0FBRzs7QUFFN1Y7O0FBRUEsd0JBQXdCLG1CQUFPLENBQUMsK0RBQThCO0FBQzlELElBQUksbUJBQU8sQ0FBQyw4REFBeUM7O0FBRXJEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsUUFBUSxJQUFVO0FBQ2xCO0FBQ0E7QUFDQSwrQkFBK0IsaURBQWlEO0FBQ2hGLFNBQVM7QUFDVDs7Ozs7Ozs7O0FDMUJBLHlFQUEyQixtQkFBTyxDQUFDLDRDQUErQztBQUNsRjs7O0FBR0E7QUFDQSxjQUFjLFFBQVMsVUFBVSxpQkFBaUIsc0JBQXNCLHVCQUF1QixHQUFHLFlBQVksK0JBQStCLEdBQUcsU0FBUyxpQkFBaUIsR0FBRyxXQUFXLGlCQUFpQixHQUFHLGVBQWUsaUJBQWlCLEdBQUc7O0FBRS9POztBQUVBLHdCQUF3QixtQkFBTyxDQUFDLCtEQUE4QjtBQUM5RCxJQUFJLG1CQUFPLENBQUMsOERBQXlDOztBQUVyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFFBQVEsSUFBVTtBQUNsQjtBQUNBO0FBQ0EsK0JBQStCLCtDQUErQztBQUM5RSxTQUFTO0FBQ1Q7Ozs7Ozs7OztBQzFCQSx5RUFBMkIsbUJBQU8sQ0FBQyw0Q0FBK0M7QUFDbEY7OztBQUdBO0FBQ0EsY0FBYyxRQUFTLDZCQUE2QiwwQkFBMEIsNkJBQTZCLEdBQUcsMEJBQTBCLHNCQUFzQix1QkFBdUIsbUJBQW1CLDZCQUE2QixHQUFHLDBCQUEwQix3QkFBd0IsaUJBQWlCLHdCQUF3QixHQUFHLDRCQUE0QiwrQkFBK0Isb0JBQW9CLHVCQUF1Qix3QkFBd0IseUJBQXlCLHFCQUFxQixHQUFHLDhCQUE4QiwrQkFBK0Isb0JBQW9CLHVCQUF1QiwwQkFBMEIseUJBQXlCLGlCQUFpQixHQUFHLGlDQUFpQyx3QkFBd0IsR0FBRywyQkFBMkIsb0JBQW9CLGlDQUFpQyxHQUFHLG9DQUFvQyw4QkFBOEIsbUJBQW1CLEdBQUcsaUNBQWlDLHdCQUF3QixHQUFHLGlDQUFpQywrQkFBK0IscUJBQXFCLG9CQUFvQixHQUFHLG1DQUFtQyx3QkFBd0IsR0FBRywwQkFBMEIscUJBQXFCLEdBQUc7O0FBRW5xQzs7QUFFQSx3QkFBd0IsbUJBQU8sQ0FBQywrREFBOEI7QUFDOUQsSUFBSSxtQkFBTyxDQUFDLDhEQUF5Qzs7QUFFckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxRQUFRLElBQVU7QUFDbEI7QUFDQTtBQUNBLCtCQUErQixnREFBZ0Q7QUFDL0UsU0FBUztBQUNUOzs7Ozs7Ozs7QUMxQkEseUVBQTJCLG1CQUFPLENBQUMsNENBQStDO0FBQ2xGOzs7QUFHQTtBQUNBLGNBQWMsUUFBUyxXQUFXLGtCQUFrQixzQkFBc0IsdUJBQXVCLEdBQUcsU0FBUyx3QkFBd0IsR0FBRyxRQUFRLHVCQUF1QixHQUFHLGNBQWMsaUJBQWlCLHNCQUFzQix5QkFBeUIsR0FBRyxlQUFlLHFCQUFxQix3QkFBd0IsR0FBRyxZQUFZLGtCQUFrQixpQkFBaUIsR0FBRyxtQkFBbUIsbURBQW1ELG9DQUFvQyxrQ0FBa0Msa0NBQWtDLG9CQUFvQixHQUFHLGdCQUFnQixtREFBbUQsb0NBQW9DLGtDQUFrQyxrQ0FBa0Msb0JBQW9CLEdBQUcsWUFBWSxvQkFBb0IsR0FBRyx5QkFBeUIsb0JBQW9CLHlCQUF5QixHQUFHOztBQUUvMUI7O0FBRUEsd0JBQXdCLG1CQUFPLENBQUMsK0RBQThCO0FBQzlELElBQUksbUJBQU8sQ0FBQyw4REFBeUM7O0FBRXJEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsUUFBUSxJQUFVO0FBQ2xCO0FBQ0E7QUFDQSwrQkFBK0IsaURBQWlEO0FBQ2hGLFNBQVM7QUFDVDs7Ozs7Ozs7OztBQzFCQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLFNBQVMsNkJBQTZCLEVBQUU7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QixhQUFhO0FBQ2I7QUFDQSwwQkFBMEIsU0FBUyw0QkFBNEIsRUFBRTtBQUNqRSwwQkFBMEIsOEJBQThCLG1CQUFtQixFQUFFO0FBQzdFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLHNCQUFzQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQSxhQUFhLHNCQUFzQjtBQUNuQztBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsU0FBUyxtREFBbUQsRUFBRTtBQUMvRTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIscUNBQXFDLFdBQVcsRUFBRTtBQUN2RTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0M7QUFDaEMsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIscUNBQXFDLFdBQVcsRUFBRTtBQUN2RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBLHVCQUF1QjtBQUN2Qix5Q0FBeUMsMEJBQTBCO0FBQ25FO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIscUNBQXFDLFdBQVcsRUFBRTtBQUN2RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkIseUNBQXlDLDBCQUEwQjtBQUNuRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHFDQUFxQyxXQUFXLEVBQUU7QUFDdkU7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDO0FBQ2hDLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHFDQUFxQyxXQUFXLEVBQUU7QUFDdkU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0Msc0NBQXNDO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBLHVCQUF1QjtBQUN2Qix5Q0FBeUMsMEJBQTBCO0FBQ25FO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIscUNBQXFDLFdBQVcsRUFBRTtBQUN2RTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxxQ0FBcUM7QUFDckUsNkJBQTZCLGlDQUFpQztBQUM5RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkIseUNBQXlDLDBCQUEwQjtBQUNuRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHFDQUFxQyxXQUFXLEVBQUU7QUFDdkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6Qiw2QkFBNkIsd0NBQXdDO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBLHVCQUF1QjtBQUN2Qix5Q0FBeUMsMEJBQTBCO0FBQ25FO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsaUJBQWlCO0FBQ3pDLHFCQUFxQjtBQUNyQixlQUFlO0FBQ2Y7QUFDQTtBQUNBLHdCQUF3QixtQkFBbUI7QUFDM0MscUJBQXFCO0FBQ3JCLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUN6TkE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSyxTQUFTLDJCQUEyQixFQUFFO0FBQzNDO0FBQ0E7QUFDQTtBQUNBLFNBQVMsU0FBUywwQkFBMEIsRUFBRTtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLGlDQUFpQztBQUMvRCx3QkFBd0I7QUFDeEIsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQix1Q0FBdUM7QUFDN0QsbUJBQW1CO0FBQ25CLGFBQWE7QUFDYjtBQUNBO0FBQ0EsOEJBQThCLGlCQUFpQjtBQUMvQyx3QkFBd0I7QUFDeEIsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQix1Q0FBdUM7QUFDN0QsbUJBQW1CO0FBQ25CLGFBQWE7QUFDYjtBQUNBO0FBQ0EsOEJBQThCLGlCQUFpQjtBQUMvQyx3QkFBd0I7QUFDeEIsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLFNBQVMscUJBQXFCLEVBQUU7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLE1BQU0sbUJBQW1CLEVBQUU7QUFDaEQ7QUFDQSxtQ0FBbUMsU0FBUyxrQkFBa0IsRUFBRTtBQUNoRSxtQ0FBbUMsU0FBUyxvQkFBb0IsRUFBRTtBQUNsRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLE1BQU0sNEJBQTRCLEVBQUU7QUFDekQ7QUFDQSxtQ0FBbUMsU0FBUyxvQkFBb0IsRUFBRTtBQUNsRSxtQ0FBbUMsU0FBUyx3QkFBd0IsRUFBRTtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3Qyw2QkFBNkI7QUFDckUsa0NBQWtDO0FBQ2xDLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUM7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUM7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QztBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QztBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUM7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUM7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QztBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUM7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyxxQkFBcUI7QUFDekQsOEJBQThCO0FBQzlCLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QyxxQkFBcUI7QUFDN0Qsa0NBQWtDO0FBQ2xDLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0Msd0JBQXdCO0FBQzVELGlDQUFpQztBQUNqQywyQkFBMkI7QUFDM0I7QUFDQTtBQUNBLG9DQUFvQyx5QkFBeUI7QUFDN0QsaUNBQWlDO0FBQ2pDLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsOEJBQThCO0FBQzlEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLDhCQUE4QjtBQUM5RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0MscUJBQXFCO0FBQzdELGtDQUFrQztBQUNsQyx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLGlCQUFpQjtBQUNyRCxpQ0FBaUM7QUFDakMsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyxvQkFBb0I7QUFDeEQsaUNBQWlDO0FBQ2pDLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLHFCQUFxQjtBQUM3RCxrQ0FBa0M7QUFDbEMseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyxpQkFBaUI7QUFDckQsaUNBQWlDO0FBQ2pDLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0Msb0JBQW9CO0FBQ3hELGlDQUFpQztBQUNqQywyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxtQkFBbUI7QUFDbkQsNkJBQTZCO0FBQzdCLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUM7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUM7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUM7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUM7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDM2VBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUssU0FBUywwQkFBMEIsRUFBRTtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLHNCQUFzQjtBQUNuQztBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsc0JBQXNCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QjtBQUM1QixtQkFBbUI7QUFDbkI7QUFDQTtBQUNBLDRCQUE0QjtBQUM1QixtQkFBbUI7QUFDbkI7QUFDQSxtQ0FBbUMsMEJBQTBCO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsU0FBUywyQkFBMkIsRUFBRTtBQUMzRDtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIscUNBQXFDLFdBQVcsRUFBRTtBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QixpQ0FBaUMsaUNBQWlDO0FBQ2xFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0I7QUFDL0I7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQiw2Q0FBNkMsMEJBQTBCO0FBQ3ZFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIscUNBQXFDLFdBQVcsRUFBRTtBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0IsaUNBQWlDLHdDQUF3QztBQUN6RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCO0FBQy9CO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0IsNkNBQTZDLDBCQUEwQjtBQUN2RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEMseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCO0FBQy9CO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0IsNkNBQTZDLDBCQUEwQjtBQUN2RTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQztBQUNoQyx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBLHlCQUF5QixTQUFTLFdBQVcsRUFBRTtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0IsaUNBQWlDO0FBQ2pDLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDeExBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsU0FBUyw2QkFBNkIsRUFBRTtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCLGFBQWE7QUFDYjtBQUNBLDBCQUEwQixTQUFTLDhCQUE4QixFQUFFO0FBQ25FLDBCQUEwQiw4QkFBOEIsbUJBQW1CLEVBQUU7QUFDN0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsc0JBQXNCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSx3QkFBd0I7QUFDeEIsZUFBZTtBQUNmO0FBQ0E7QUFDQSxpQkFBaUIsb0JBQW9CO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLFNBQVMsNEJBQTRCLEVBQUU7QUFDekU7QUFDQTtBQUNBLGdDQUFnQztBQUNoQyx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLFNBQVMsZ0JBQWdCLEVBQUU7QUFDN0Q7QUFDQTtBQUNBLGdDQUFnQztBQUNoQyx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLFNBQVMsa0JBQWtCLEVBQUU7QUFDL0Q7QUFDQTtBQUNBLGdDQUFnQztBQUNoQyx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixTQUFTLDRCQUE0QixFQUFFO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixTQUFTLDRCQUE0QixFQUFFO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixvQkFBb0I7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0MsU0FBUyxvQkFBb0IsRUFBRTtBQUNqRTtBQUNBO0FBQ0EsZ0NBQWdDO0FBQ2hDLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLG9CQUFvQjtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyxTQUFTLG9CQUFvQixFQUFFO0FBQ2pFO0FBQ0E7QUFDQSxnQ0FBZ0M7QUFDaEMsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsb0JBQW9CO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLFNBQVMsK0JBQStCLEVBQUU7QUFDNUU7QUFDQTtBQUNBLGdDQUFnQztBQUNoQyx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLFNBQVMscUJBQXFCLEVBQUU7QUFDbEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0MsU0FBUyxrQkFBa0IsRUFBRTtBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0MsU0FBUyxzQkFBc0IsRUFBRTtBQUNuRTtBQUNBO0FBQ0EsZ0NBQWdDO0FBQ2hDLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0MsU0FBUyxrQkFBa0IsRUFBRTtBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsb0JBQW9CO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLFNBQVMsNEJBQTRCLEVBQUU7QUFDekU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLG9CQUFvQjtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyxTQUFTLCtCQUErQixFQUFFO0FBQzVFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyxTQUFTLG1CQUFtQixFQUFFO0FBQ2hFO0FBQ0E7QUFDQSxnQ0FBZ0M7QUFDaEMsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCO0FBQ3hCLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCO0FBQzFCLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsMkJBQTJCO0FBQ3ZELHlCQUF5QjtBQUN6QixtQkFBbUI7QUFDbkI7QUFDQTtBQUNBLDRCQUE0Qiw0QkFBNEI7QUFDeEQseUJBQXlCO0FBQ3pCLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLG9CQUFvQjtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyxTQUFTLGlDQUFpQyxFQUFFO0FBQzlFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQjtBQUMxQixpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0MsU0FBUyxnQ0FBZ0MsRUFBRTtBQUM3RTtBQUNBO0FBQ0EsZ0NBQWdDO0FBQ2hDLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLDRCQUE0QixtQkFBbUIsRUFBRTtBQUNsRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDO0FBQ2hDLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLDRCQUE0QixtQkFBbUIsRUFBRTtBQUNsRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQiw0QkFBNEIsbUJBQW1CLEVBQUU7QUFDbEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQztBQUNoQyx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQiw0QkFBNEIsbUJBQW1CLEVBQUU7QUFDbEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQSxnQ0FBZ0M7QUFDaEMsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsNEJBQTRCLG1CQUFtQixFQUFFO0FBQ2xFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBLGdDQUFnQztBQUNoQyx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQiw0QkFBNEIsbUJBQW1CLEVBQUU7QUFDbEU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0MsU0FBUyx1QkFBdUIsRUFBRTtBQUNwRTtBQUNBO0FBQ0EsZ0NBQWdDO0FBQ2hDLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixrQkFBa0I7QUFDdEMsaUJBQWlCO0FBQ2pCLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixrQkFBa0I7QUFDdEMsaUJBQWlCO0FBQ2pCLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiwyQkFBMkI7QUFDL0MsaUJBQWlCO0FBQ2pCLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiwwQkFBMEI7QUFDOUMsaUJBQWlCO0FBQ2pCLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixvQkFBb0I7QUFDeEMsaUJBQWlCO0FBQ2pCLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixpQkFBaUI7QUFDckMsaUJBQWlCO0FBQ2pCLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiwyQkFBMkI7QUFDL0MsaUJBQWlCO0FBQ2pCLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7OztBQ3p1QkE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUU7Ozs7Ozs7QUN0QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlKOzs7Ozs7OztBQzNCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0EsSUFBTUEsV0FBVyxHQUFHLGNBQXBCO0FBQ0EsSUFBTUMsU0FBUyxHQUFHLFdBQWxCO0FBQ0EsSUFBTUMsT0FBTyxHQUFHLDhDQUFoQjs7QUFDQSxJQUFJQyxtQkFBbUIsR0FBR0MsbUJBQU8sQ0FBQyxpRkFBRCxDQUFqQzs7QUFDZSxNQUFNQyxNQUFOLENBQWE7QUFFeEJDLFdBQVMsR0FBRTtBQUNQLFdBQU9KLE9BQVA7QUFDSDs7QUFFREssVUFBUSxHQUFFO0FBQ04sUUFBR0osbUJBQW1CLENBQUNLLFNBQXBCLENBQThCUixXQUE5QixLQUE4QyxJQUE5QyxJQUFzREcsbUJBQW1CLENBQUNLLFNBQXBCLENBQThCUixXQUE5QixLQUE4Q1MsU0FBdkcsRUFDSSxPQUFPLEVBQVA7QUFFSixXQUFPTixtQkFBbUIsQ0FBQ0ssU0FBcEIsQ0FBOEJSLFdBQTlCLENBQVA7QUFDSDs7QUFDRFUsVUFBUSxDQUFDQyxNQUFELEVBQVE7QUFDWlIsdUJBQW1CLENBQUNTLFNBQXBCLENBQThCWixXQUE5QixFQUEyQ1csTUFBM0M7QUFDSDs7QUFFREUsYUFBVyxHQUFFO0FBRVQsUUFBR0MsOERBQWlCLENBQUNYLG1CQUFtQixDQUFDSyxTQUFwQixDQUE4QlAsU0FBOUIsQ0FBRCxDQUFwQixFQUNJLE9BQU8sRUFBUDtBQUVKLFdBQU9FLG1CQUFtQixDQUFDSyxTQUFwQixDQUE4QlAsU0FBOUIsQ0FBUDtBQUNIOztBQUNEYyxhQUFXLENBQUNDLEdBQUQsRUFBSztBQUNaYix1QkFBbUIsQ0FBQ1MsU0FBcEIsQ0FBOEJYLFNBQTlCLEVBQXlDZSxHQUF6QztBQUNIOztBQXpCdUIsQzs7Ozs7OztBQ0w1Qix5SEFBMkUsbUJBQU8sQ0FBQyxzSUFBb0c7QUFDdkwsMEVBQTBFLG1CQUFPLENBQUMsc0lBQW9HLEdBQUcsa0JBQWtCLGtDQUFrQyxVQUFVLHlFQUF5RSxFQUFFLDREQUE0RCxzREFBc0QsRUFBRSw0REFBNEQsRUFBRSx5REFBeUQsRUFBRSw0REFBNEQsRUFBRSxFQUFFLDBEQUEwRCxxRUFBcUUsRUFBRSxFQUFFLHdEQUF3RCxxRUFBcUUsRUFBRSxFQUFFLHFFQUFxRSx3REFBd0QsRUFBRTtBQUNsL0IsUUFBUSxJQUFVO0FBQ2xCO0FBQ0E7QUFDQSwrQkFBK0IsbUNBQW1DO0FBQ2xFLFNBQVM7QUFDVDs7Ozs7Ozs7OztBQ1BBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBLE9BQU9DLHdCQUFZLDJFQUFuQjtBQUNBLE9BQU9DLEtBQVA7QUFDQSxPQUFPQyxLQUFQO0FBQ0EsT0FBT2QsU0FBWSxHQUFuQjtBQUNBLFNBQVNlLFNBQVQsUUFBMEIsK0VBQTFCO0FBQ0EsU0FBU0MsS0FBVCxRQUFzQiwyQkFBdEI7QUFFQTtBQUNBLElBQU1DLE1BQU0sR0FBRyxJQUFJakIsTUFBSixFQUFmO0FBQ0FrQixHQUFHLENBQUNDLFNBQUosQ0FBY0MsT0FBZCxHQUF3QkgsTUFBeEI7QUFFQSxJQUFNSSxjQUFjLEdBQUcsSUFBSVIsR0FBM0I7QUFDQUssR0FBRyxDQUFDQyxTQUFKO0FBRUE7QUFDQUQsR0FBRyxDQUFDQyxTQUFKLENBQWNHLFVBQWQsR0FBMkJDLFNBQTNCOztBQUVBLElBQU07QUFBRUMsT0FBRjtBQUFTQyxTQUFUO0FBQWtCQyxRQUFsQjtBQUFBO0FBQWlDQyxRQUFqQztBQUF5Q0M7QUFBekMsSUFBdUQ3QixLQUE3RDs7QUFDQSxJQUFJOEIsUUFBUSxHQUFHOUIsT0FBTyxDQUFDLDhKQUF2Qjs7QUFDQSxJQUFJRCxnQkFBc0JDLEdBQTFCOztBQUVBK0IsVUFBVSxDQUFDLE1BQUk7QUFDYkQsVUFBUSxDQUFDRSxJQUFULEdBQ0tDLENBQWlCO0FBQ2RqQixhQUF1QztBQUVuQ2tCLFlBQXdDO0FBQ3BDQywyQkFBTyxDQUFDQywyREFBSSxFQUFaO0FBQ0FyQyxRQUFBO0FBQ0E7QUFMK0I7QUFRSztBQUN0QztBQUNBO0FBRU07QUFDRnNDLG1FQUFLLEVBQUVDLE9BQU8sQ0FBQ0MsQ0FEYjtBQUVGRCxpQkFBTyxzREFBRUEsR0FGUDtBQUdGRSwwRUFBWSxFQUFFLE9BSFo7QUFJRkMsMEZBQWtCO0FBSmhCLDZEQUFELENBQUwsQ0FLR1IsSUFMSCxDQUtTUyxNQUFELElBQVk7QUFDaEJ2QixhQUFHLENBQUNDLGtFQUFVRyxHQUVLO0FBQ2Ysb0VBQUdvQixRQUFRLENBQUNDLE1BQVQsSUFBbUIsRUFBTTtBQUN4QjtBQUNBQyxLQUFBO0FBQ0gsUUFDRztBQUNBQyxVQUFBO0FBQ0g7QUFDSixRQUNZO0FBQ1RyQixTQUFBO0FBQ0gsV0FiRDtBQWNILHVCQXBCRDtBQVppQztBQWtDbkNzQixtQ0FBaUIsMERBbENrQjtBQW1DQTtBQW5DQSxLQUF2QyxFQXFDR2QsSUFyQ0gsQ0FxQ1EsTUFBTUUsT0FBTyxDQUFDQyxtQkFBSSxrRkFDdkJZLEVBdENIO0FBd0NlO0FBQ1hoQyxlQUFTLENBQUNpQyxFQUNTO0FBQ1gsYUFBS0MsZ0JBQUwsQ0FBc0JDLEtBQXRCO0FBQ0gsb0ZBQUcsQ0FBSWhCLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLGFBQWFnQixDQUFDLENBQUNkLEdBSHZDO0FBSUgsS0FMUyxFQUtQLElBTE8sQ0FBVjtBQU1ILEdBaERMLEVBaURLVSxLQWpETCxDQWlEV0ssS0FBSyxJQUFJO0FBQ1psQixXQUFPLENBQUNDLEdBQVIsZ0NBQW9DaUIsS0FBcEM7QUFDQWxCLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLGVBQVo7QUFDQUwsUUFBZTtBQUNYSSxhQUFPLENBQUNDLEdBQVIsQ0FBWSxpQkFBWjtBQUNBcEIsZUFBUyxDQUFDaUMsbUJBQVYsR0FDS2hCLEVBQWM7QUFDWEUsZUFBTyxDQUFDQyxHQUFSLENBQVksZUFBWixFQUE2QmUsS0FBN0I7QUFDQSxhQUFLRCxFQUFMO0FBQ0gsT0FKTCxFQUtLRixLQUxMLENBS1dJLENBQUMsSUFBSTtBQUNSakIsZUFBTyxDQUFDQyxHQUFSLENBQVksaUJBQVo7QUFDSCxPQVBMO0FBUUgsS0FWUyxFQVVQLElBVk8sQ0FBVjtBQVdILEdBL0RMO0FBZ0VHLENBakVLLEVBaUVKLElBakVJLENBQVYsRUFtRUEsd0RBQUlqQixHQUFKLENBQVE7QUFDTm1DLFFBQU0sRUFBRUMsQ0FBQyxJQUFJQSxDQUFDLENBQUMsT0FBRCxFQUFVLENBQUNBLENBQUMsQ0FBQ2pDLGNBQWI7QUFEUixDQUFSLEVBRUdrQyxNQUZILEVBbkVBOztBQXVFQSxTQUFTVixVQUFULENBQThDO0FBQzFDN0IsT0FBSyxDQUFDd0MsT0FBTixHQUFnQkMsc0RBQVlDLGFBQTVCLENBQTJDQyxXQUEzQyxDQUF1REMsRUFBTTtBQUN6REMsYUFEeUQ7QUFFeERDLFNBQUssRUFBRTtBQUNIQyxZQUFNLEVBQUVDLE1BREw7QUFFSEMsYUFBV0M7QUFGUjtBQUZpRCxHQUE3RDtBQU9IOztBQUVELFNBQVN0QixlQUFULENBQTBCZ0IsSUFBMUIsRUFBZ0M7QUFDNUI1QyxPQUFLLENBQUN3QyxPQUFOLEdBQWdCQyxJQUE2QztBQUN6REksdUZBQVksRUFBRTtBQUQyQyxHQUE3RDtBQUdIOztBQUVELFNBQVNNLFFBQVQsQ0FBa0I5QixHQUFTO0FBQ3ZCLFNBQU9iLEtBQUssQ0FBQztBQUNUWSxTQUFLLEVBQUUsU0FERTtBQUVURyxnQkFBWSxFQUFFLElBRkw7QUFHVEYsV0FBTyxFQUFFQTtBQUhBLEdBQUQsQ0FBWjtBQUtIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuSEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFxRjtBQUMzQjtBQUNMO0FBQ2E7OztBQUdsRTtBQUMwRjtBQUMxRixnQkFBZ0IsMkdBQVU7QUFDMUIsRUFBRSw0RUFBTTtBQUNSLEVBQUUsaUZBQU07QUFDUixFQUFFLDBGQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsSUFBSSxJQUFVO0FBQ2QsWUFBWSxtQkFBTyxDQUFDLGtEQUFxRztBQUN6SCxjQUFjLG1CQUFPLENBQUMsZ0RBQUs7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLHNCQUFzQix3REFBNkMsRUFBRTtBQUFBO0FBQ3JFO0FBQ0EsZ0JBQWdCLGlGQUFNO0FBQ3RCLHlCQUF5QiwwRkFBZTtBQUN4QyxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNlLGdGOzs7Ozs7OztBQ3ZDZjtBQUFBO0FBQUEsd0NBQXNLLENBQWdCLDBPQUFHLEVBQUMsQzs7Ozs7Ozs7QUNBMUw7QUFBQTtBQUFBO0FBQUE7QUFBK1csQ0FBZ0IsOFpBQUcsRUFBQyxDOzs7Ozs7OztBQ0FuWTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFtRjtBQUMzQjtBQUNMO0FBQ2E7OztBQUdoRTtBQUMwRjtBQUMxRixnQkFBZ0IsMkdBQVU7QUFDMUIsRUFBRSwwRUFBTTtBQUNSLEVBQUUsK0VBQU07QUFDUixFQUFFLHdGQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsSUFBSSxJQUFVO0FBQ2QsWUFBWSxtQkFBTyxDQUFDLGtEQUFxRztBQUN6SCxjQUFjLG1CQUFPLENBQUMsZ0RBQUs7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLHNCQUFzQixzREFBMkMsRUFBRTtBQUFBO0FBQ25FO0FBQ0EsZ0JBQWdCLCtFQUFNO0FBQ3RCLHlCQUF5Qix3RkFBZTtBQUN4QyxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNlLGdGOzs7Ozs7OztBQ3ZDZjtBQUFBO0FBQUEsd0NBQW9LLENBQWdCLHdPQUFHLEVBQUMsQzs7Ozs7Ozs7QUNBeEw7QUFBQTtBQUFBO0FBQUE7QUFBNlcsQ0FBZ0IsNFpBQUcsRUFBQyxDOzs7Ozs7OztBQ0FqWTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBZ0c7QUFDdkM7QUFDTDtBQUNxQzs7O0FBR3pGO0FBQzBGO0FBQzFGLGdCQUFnQiwyR0FBVTtBQUMxQixFQUFFLDJFQUFNO0FBQ1IsRUFBRSw0RkFBTTtBQUNSLEVBQUUscUdBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxJQUFJLElBQVU7QUFDZCxZQUFZLG1CQUFPLENBQUMsa0RBQXFHO0FBQ3pILGNBQWMsbUJBQU8sQ0FBQyxnREFBSztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0Esc0JBQXNCLG1FQUF3RCxFQUFFO0FBQUE7QUFDaEY7QUFDQSxnQkFBZ0IsNEZBQU07QUFDdEIseUJBQXlCLHFHQUFlO0FBQ3hDLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ2UsZ0Y7Ozs7Ozs7O0FDdkNmO0FBQUE7QUFBQSx3Q0FBcUssQ0FBZ0IseU9BQUcsRUFBQyxDOzs7Ozs7OztBQ0F6TDtBQUFBO0FBQUE7QUFBQTtBQUFzWSxDQUFnQixxYkFBRyxFQUFDLEM7Ozs7Ozs7O0FDQTFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFxRjtBQUMzQjtBQUNMO0FBQ2E7OztBQUdsRTtBQUMwRjtBQUMxRixnQkFBZ0IsMkdBQVU7QUFDMUIsRUFBRSw0RUFBTTtBQUNSLEVBQUUsaUZBQU07QUFDUixFQUFFLDBGQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsSUFBSSxJQUFVO0FBQ2QsWUFBWSxtQkFBTyxDQUFDLGtEQUFxRztBQUN6SCxjQUFjLG1CQUFPLENBQUMsZ0RBQUs7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLHNCQUFzQix3REFBNkMsRUFBRTtBQUFBO0FBQ3JFO0FBQ0EsZ0JBQWdCLGlGQUFNO0FBQ3RCLHlCQUF5QiwwRkFBZTtBQUN4QyxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNlLGdGOzs7Ozs7OztBQ3ZDZjtBQUFBO0FBQUEsd0NBQXNLLENBQWdCLDBPQUFHLEVBQUMsQzs7Ozs7Ozs7QUNBMUw7QUFBQTtBQUFBO0FBQUE7QUFBK1csQ0FBZ0IsOFpBQUcsRUFBQyxDOzs7Ozs7OztBQ0FuWTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBLElBQU16QixNQUFNLEdBQUc7QUFDWHdELE9BQUssRUFBRUMseURBREk7QUFFWEMsTUFBSSxFQUFFQyx3REFGSztBQUdYQyxRQUFNLEVBQUdDLDBEQUFNQTtBQUhKLENBQWY7QUFLZTdELHFFQUFmLEU7Ozs7Ozs7O0FDVEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFFQThELDREQUFBLENBQVk7QUFDUkMsUUFBTSxFQUFFLGVBREE7QUFFUkMsV0FBUyxFQUFFO0FBRkgsQ0FBWjtBQUtlLE1BQU0vRCxjQUFOLENBQXFCO0FBRWhDZ0UsWUFBVSxHQUFHO0FBQ1QsV0FBTyxDQUFDLENBQUNILDREQUFBLENBQVlJLGFBQVosRUFBVDtBQUNIOztBQUVEVixPQUFLLENBQUNXLElBQUQsRUFBTztBQUNSLFdBQU9MLDREQUFBLENBQVlOLEtBQVosQ0FBa0JXLElBQUksQ0FBQ0MsS0FBdkIsRUFBOEJELElBQUksQ0FBQ0UsUUFBbkMsQ0FBUDtBQUNIOztBQUVEQyxlQUFhLENBQUNILElBQUQsRUFBTztBQUNoQixXQUFPTCw0REFBQSxDQUFZUSxhQUFaLENBQTBCSCxJQUExQixDQUFQO0FBQ0g7O0FBRURJLFFBQU0sR0FBRztBQUNMLFdBQU9ULDREQUFBLENBQVlTLE1BQVosRUFBUDtBQUNIOztBQUVEQyxVQUFRLENBQUNMLElBQUQsRUFBTztBQUNYLFdBQU9MLDREQUFBLENBQVlXLE1BQVosQ0FBbUI7QUFBRUMsY0FBUSxFQUFFUCxJQUFJLENBQUNDLEtBQWpCO0FBQXdCQyxjQUFRLEVBQUVGLElBQUksQ0FBQ0U7QUFBdkMsS0FBbkIsQ0FBUDtBQUNIOztBQXBCK0IsQzs7Ozs7Ozs7QUNWcEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJaEUsTUFBTSxHQUFHLElBQUlqQixzREFBSixFQUFiO0FBQ2UsTUFBTWMsU0FBTixDQUFnQjtBQUUzQjtBQUNBK0QsWUFBVSxHQUFHO0FBRVQsV0FBTyxLQUFLVSxhQUFMLENBQW1CLHlDQUFuQixFQUNQQyxJQUFJLENBQUNDLFNBQUwsQ0FBZTtBQUNYdkMsV0FBSyxFQUFHakMsTUFBTSxDQUFDZixRQUFQO0FBREcsS0FBZixDQURPLEVBSVAsTUFKTyxDQUFQO0FBS0g7O0FBRUR3RixlQUFhLEdBQUc7QUFDWixXQUFPLEtBQUtILGFBQUwsQ0FBbUIsa0NBQW5CLEVBQ0hDLElBQUksQ0FBQ0MsU0FBTCxDQUFlO0FBQ1hFLGlCQUFXLEVBQUUxRSxNQUFNLENBQUNULFdBQVA7QUFERixLQUFmLENBREcsRUFJSCxNQUpHLENBQVA7QUFNSDs7QUFFRDRELE9BQUssQ0FBQ1csSUFBRCxFQUFPO0FBQ1IsV0FBTyxLQUFLUSxhQUFMLENBQW1CLCtCQUFuQixFQUNIQyxJQUFJLENBQUNDLFNBQUwsQ0FBZTtBQUNYVCxXQUFLLEVBQUVELElBQUksQ0FBQ0MsS0FERDtBQUVYWSxXQUFLLEVBQUViLElBQUksQ0FBQ0UsUUFGRDtBQUdYL0IsV0FBSyxFQUFFakMsTUFBTSxDQUFDZixRQUFQLEVBSEk7QUFJWHlGLGlCQUFXLEVBQUcxRSxNQUFNLENBQUNULFdBQVA7QUFKSCxLQUFmLENBREcsRUFPSCxNQVBHLENBQVA7QUFTSDs7QUFFRDBFLGVBQWEsQ0FBQ0gsSUFBRCxFQUFPO0FBQ2hCLFdBQU8sS0FBS1EsYUFBTCxDQUFtQixpQ0FBbkIsRUFDSEMsSUFBSSxDQUFDQyxTQUFMLENBQWU7QUFDWFQsV0FBSyxFQUFFRDtBQURJLEtBQWYsQ0FERyxFQUlILE1BSkcsQ0FBUDtBQU1IOztBQUVESSxRQUFNLEdBQUc7QUFDTCxXQUFPVCw0REFBQSxDQUFZUyxNQUFaLEVBQVA7QUFDSDs7QUFFREMsVUFBUSxDQUFDTCxJQUFELEVBQU87QUFDWCxXQUFPTCw0REFBQSxDQUFZVyxNQUFaLENBQW1CO0FBQUVDLGNBQVEsRUFBRVAsSUFBSSxDQUFDQyxLQUFqQjtBQUF3QkMsY0FBUSxFQUFFRixJQUFJLENBQUNFO0FBQXZDLEtBQW5CLENBQVA7QUFDSCxHQWhEMEIsQ0FpRDNCO0FBRUE7OztBQUNBWSxTQUFPLEdBQUU7QUFDTCxXQUFPLEtBQUtOLGFBQUwsQ0FBbUIsNEJBQW5CLEVBQ0hDLElBQUksQ0FBQ0MsU0FBTCxDQUFlO0FBQ1hFLGlCQUFXLEVBQUUxRSxNQUFNLENBQUNULFdBQVA7QUFERixLQUFmLENBREcsRUFJSCxNQUpHLENBQVA7QUFNSDs7QUFFRHNGLGtCQUFnQixDQUFDQyxZQUFELEVBQWVDLFdBQWYsRUFBNEJDLFNBQTVCLEVBQXNDO0FBRWxELFdBQU8sS0FBS1YsYUFBTCxDQUFtQixxQ0FBbkIsRUFDSEMsSUFBSSxDQUFDQyxTQUFMLENBQWU7QUFDWFMsd0JBQWtCLEVBQUVILFlBRFQ7QUFFWEksaUJBQVcsRUFBRUgsV0FGRjtBQUdYSSxlQUFTLEVBQUVILFNBSEE7QUFJWE4saUJBQVcsRUFBRTFFLE1BQU0sQ0FBQ1QsV0FBUDtBQUpGLEtBQWYsQ0FERyxFQU9ILE1BUEcsQ0FBUDtBQVNIOztBQUVENkYsZUFBYSxDQUFDckMsTUFBRCxFQUFRO0FBQ2pCLFdBQU8sS0FBS3VCLGFBQUwsQ0FBbUIsNEJBQW5CLEVBQ0hDLElBQUksQ0FBQ0MsU0FBTCxDQUFlO0FBQ1hhLGtCQUFZLEVBQUV0QztBQURILEtBQWYsQ0FERyxFQUlILE1BSkcsQ0FBUDtBQU1ILEdBakYwQixDQWtGM0I7QUFFQTs7O0FBQ0F1QyxlQUFhLENBQUN2QyxNQUFELEVBQVN3QyxRQUFULEVBQWtCO0FBQzNCLFdBQU8sS0FBS2pCLGFBQUwsQ0FBbUIseUNBQW5CLEVBQ0hDLElBQUksQ0FBQ0MsU0FBTCxDQUFlO0FBQ1hhLGtCQUFZLEVBQUV0QyxNQURIO0FBRVh5QyxrQkFBWSxFQUFFRCxRQUZIO0FBR1hiLGlCQUFXLEVBQUUxRSxNQUFNLENBQUNULFdBQVA7QUFIRixLQUFmLENBREcsRUFNSCxNQU5HLENBQVA7QUFRSDs7QUFFRGtHLGVBQWEsQ0FBQzFDLE1BQUQsRUFBU3dDLFFBQVQsRUFBbUIvRCxNQUFuQixFQUEyQmtFLE1BQTNCLEVBQWtDO0FBQzNDLFdBQU8sS0FBS3BCLGFBQUwsQ0FBbUIseUNBQW5CLEVBQ0hDLElBQUksQ0FBQ0MsU0FBTCxDQUFlO0FBQ1hhLGtCQUFZLEVBQUV0QyxNQURIO0FBRVh5QyxrQkFBWSxFQUFFRCxRQUZIO0FBR1hiLGlCQUFXLEVBQUUxRSxNQUFNLENBQUNULFdBQVAsRUFIRjtBQUlYb0csWUFBTSxFQUFFbkUsTUFKRztBQUtYb0Usa0JBQVksRUFBRUY7QUFMSCxLQUFmLENBREcsRUFRSCxNQVJHLENBQVA7QUFVSDs7QUFFREcsZ0JBQWMsQ0FBQzlDLE1BQUQsRUFBUTtBQUNsQixXQUFPLEtBQUt1QixhQUFMLENBQW1CLCtDQUFuQixFQUNIQyxJQUFJLENBQUNDLFNBQUwsQ0FBZTtBQUNYYSxrQkFBWSxFQUFFdEMsTUFESDtBQUVYK0Msa0JBQVksRUFBRSxFQUZIO0FBRU87QUFDbEJwQixpQkFBVyxFQUFFMUUsTUFBTSxDQUFDVCxXQUFQO0FBSEYsS0FBZixDQURHLEVBTUgsTUFORyxDQUFQO0FBUUg7O0FBRUR3RyxnQkFBYyxDQUFDaEQsTUFBRCxFQUFTdkIsTUFBVCxFQUFpQmtFLE1BQWpCLEVBQXdCO0FBQ2xDLFFBQUdBLE1BQU0sSUFBSSxFQUFiLEVBQWlCO0FBQ2JsRSxZQUFNLEdBQUdrRSxNQUFUO0FBQ0g7O0FBRUQsV0FBTyxLQUFLcEIsYUFBTCxDQUFtQiwrQ0FBbkIsRUFDSEMsSUFBSSxDQUFDQyxTQUFMLENBQWU7QUFDWGEsa0JBQVksRUFBRXRDLE1BREg7QUFFWCtDLGtCQUFZLEVBQUUsRUFGSDtBQUVPO0FBQ2xCcEIsaUJBQVcsRUFBRTFFLE1BQU0sQ0FBQ1QsV0FBUCxFQUhGO0FBSVhvRyxZQUFNLEVBQUVuRSxNQUpHO0FBS1hvRSxrQkFBWSxFQUFFRjtBQUxILEtBQWYsQ0FERyxFQVFILE1BUkcsQ0FBUDtBQVVILEdBdkkwQixDQXdJM0I7QUFFQTs7O0FBQ0FNLGNBQVksR0FBRTtBQUNWLFdBQU8sS0FBSzFCLGFBQUwsQ0FBbUIsK0JBQW5CLEVBQ0hDLElBQUksQ0FBQ0MsU0FBTCxDQUFlO0FBQ1hFLGlCQUFXLEVBQUUxRSxNQUFNLENBQUNULFdBQVA7QUFERixLQUFmLENBREcsRUFJSCxNQUpHLENBQVA7QUFNSCxHQWxKMEIsQ0FtSjNCO0FBRUE7OztBQUNBMEcsYUFBVyxDQUFDbkQsTUFBRCxFQUFTb0QsSUFBVCxFQUFlQyxLQUFmLEVBQXNCQyxLQUF0QixFQUE2QkMsVUFBN0IsRUFBeUNDLGNBQXpDLEVBQXdEO0FBQy9ELFdBQU8sS0FBS2hDLGFBQUwsQ0FBbUIsaUNBQW5CLEVBQ0hDLElBQUksQ0FBQ0MsU0FBTCxDQUFlO0FBQ1gxQixZQUFNLEVBQUVBLE1BREc7QUFFWG9ELFVBQUksRUFBRUEsSUFGSztBQUdYQyxXQUFLLEVBQUVBLEtBSEk7QUFJWEMsV0FBSyxFQUFFQSxLQUpJO0FBS1hDLGdCQUFVLEVBQUVBLFVBTEQ7QUFNWEMsb0JBQWMsRUFBRUE7QUFOTCxLQUFmLENBREcsRUFTSCxNQVRHLENBQVA7QUFXSCxHQWxLMEIsQ0FtSzNCOzs7QUFFQWhDLGVBQWEsQ0FBQ2lDLEdBQUQsRUFBTUMsTUFBTixFQUFjQyxNQUFkLEVBQXNCO0FBQy9CLFFBQUlDLE1BQU0sR0FBRzFHLE1BQU0sQ0FBQ2hCLFNBQVAsRUFBYjtBQUVBLFdBQU8ySCw0Q0FBQSxDQUFhO0FBQ2hCSixTQUFHLEVBQUVHLE1BQU0sR0FBQ0gsR0FESTtBQUVoQkssWUFBTSxFQUFFSCxNQUZRO0FBR2hCSSxhQUFPLEVBQUU7QUFBRSx3QkFBZ0I7QUFBbEIsT0FITztBQUloQkMsYUFBTyxFQUFFTjtBQUpPLEtBQWIsRUFLSnpGLElBTEksQ0FLQ1UsUUFBUSxJQUFJO0FBQ2hCLGFBQU9BLFFBQVEsQ0FBQ3FGLE9BQVQsQ0FBaUJDLE1BQWpCLEVBQVA7QUFDSCxLQVBNLEVBT0o1RSxLQUFLLElBQUk7QUFDUixhQUFPQSxLQUFQO0FBQ0gsS0FUTSxDQUFQO0FBVUg7O0FBbEwwQixDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgICAgPFBhZ2U+XG4gICAgICAgICA8QWN0aW9uQmFyIHRpdGxlPVwiUGVyZmlsIGRvIFVzdcOhcmlvXCI+XG4gICAgICAgICAgICA8TGFiZWwgY2xhc3M9XCJoMlwiIHJvdz1cIjBcIiBob3Jpem9udGFsQWxpZ25tZW50PVwiY2VudGVyXCI+XG4gICAgICAgICAgICAgICA8U3BhbiB0ZXh0PVwiUGVyZmlsIGRvIFVzdcOhcmlvXCI+IFxuICAgICAgICAgICAgICAgIDwvU3Bhbj5cbiAgICAgICAgICAgICAgICA8U3BhbiA6dGV4dD1cIkNvZGlnb1wiIGNsYXNzPVwiYm9sZFwiPlxuICAgICAgICAgICAgICAgIDwvU3Bhbj5cbiAgICAgICAgICAgIDwvTGFiZWw+XG4gICAgICAgIDwvQWN0aW9uQmFyPlxuICAgICAgICA8RmxleGJveExheW91dCBjbGFzcz1cInBhZ2VcIj5cbiAgICAgICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cImZvcm1cIj5cblxuICAgICAgICAgICAgICAgIDxHcmlkTGF5b3V0IHJvd3M9XCJhdXRvLCBhdXRvLCBhdXRvLCBhdXRvLCBhdXRvLCBhdXRvLCBhdXRvXCI+XG4gICAgICAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQgcm93PVwiMFwiIGNsYXNzPVwiaW5wdXQtZmllbGRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCBjbGFzcz1cInN1Yi10aXR1bG9cIiB0ZXh0PVwiTWV1cyBkYWRvc1wiPjwvTGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XG5cbiAgICAgICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0IHJvdz1cIjFcIiBjbGFzcz1cImlucHV0LWZpZWxkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkIGNsYXNzPVwiaW5wdXRcIiBoaW50PVwiTm9tZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5Ym9hcmRUeXBlPVwibm9tZVwiICB2LW1vZGVsPVwiVXN1YXJpby5Ob21lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvY29ycmVjdD1cImZhbHNlXCIgYXV0b2NhcGl0YWxpemF0aW9uVHlwZT1cIm5vbmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybktleVR5cGU9XCJuZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9UZXh0RmllbGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XCJoci1saWdodFwiPjwvU3RhY2tMYXlvdXQ+XG4gICAgICAgICAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XG5cbiAgICAgICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0IHJvdz1cIjJcIiBjbGFzcz1cImlucHV0LWZpZWxkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkIGNsYXNzPVwiaW5wdXRcIiBoaW50PVwiRS1tYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5Ym9hcmRUeXBlPVwiZW1haWxcIiB0eXBlPVwiZW1haWxcIiB2LW1vZGVsPVwiVXN1YXJpby5FbWFpbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0b2NvcnJlY3Q9XCJmYWxzZVwiIGF1dG9jYXBpdGFsaXphdGlvblR5cGU9XCJub25lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5LZXlUeXBlPVwibmV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9UZXh0RmllbGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XCJoci1saWdodFwiPjwvU3RhY2tMYXlvdXQ+XG4gICAgICAgICAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIDxTdGFja0xheW91dCByb3c9XCIzXCIgY2xhc3M9XCJpbnB1dC1maWVsZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIGNsYXNzPVwic3ViLXRpdHVsb1wiIHRleHQ9XCJNaW5oYSBTZW5oYVwiPjwvTGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XG5cbiAgICAgICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0IHJvdz1cIjRcIiBjbGFzcz1cImlucHV0LWZpZWxkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkIGNsYXNzPVwiaW5wdXRcIiByZWY9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGludD1cIlNlbmhhIEF0dWFsXCIgdi1tb2RlbD1cIlVzdWFyaW8uU2VuaGFBdHVhbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VjdXJlPVwidHJ1ZVwiPjwvVGV4dEZpZWxkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVwiaHItbGlnaHRcIj48L1N0YWNrTGF5b3V0PlxuICAgICAgICAgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxuXG4gICAgICAgICAgICAgICAgICAgIDxTdGFja0xheW91dCByb3c9XCI1XCIgY2xhc3M9XCJpbnB1dC1maWVsZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZCBjbGFzcz1cImlucHV0XCIgcmVmPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpbnQ9XCJOb3ZhIHNlbmhhXCIgIHYtbW9kZWw9XCJVc3VhcmlvLlNlbmhhXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWN1cmU9XCJ0cnVlXCIgQHJldHVyblByZXNzPVwiZm9jdXNQYXNzd29yZFwiPjwvVGV4dEZpZWxkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVwiaHItbGlnaHRcIj48L1N0YWNrTGF5b3V0PlxuICAgICAgICAgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxuXG4gICAgICAgICAgICAgICAgICAgIDxTdGFja0xheW91dCByb3c9XCI2XCIgY2xhc3M9XCJpbnB1dC1maWVsZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZCBjbGFzcz1cImlucHV0XCIgcmVmPVwiY29uZmlybVBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoaW50PVwiQ29uZmlybWFyIG5vdmEgc2VuaGFcIiB2LW1vZGVsPVwiVXN1YXJpby5Db25maXJtYXJTZW5oYVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VjdXJlPVwidHJ1ZVwiIEByZXR1cm5QcmVzcz1cImZvY3VzQ29uZmlybVBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5LZXlUeXBlPVwiZG9uZVwiPjwvVGV4dEZpZWxkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVwiaHItbGlnaHRcIj48L1N0YWNrTGF5b3V0PlxuICAgICAgICAgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxuICAgICAgICAgICAgICAgIDwvR3JpZExheW91dD5cblxuICAgICAgICAgICAgICAgIDxCdXR0b24gdGV4dD1cIlNhbHZhclwiIEB0YXA9XCJzYWx2YXJcIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeSBidG4tZ3JlZW5cIj48L0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8QnV0dG9uIHRleHQ9XCJDYW5jZWxhclwiIEB0YXA9XCJ2b2x0YXJcIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeSBidG4tZ3JleVwiPjwvQnV0dG9uPlxuICAgICAgICAgICAgPC9TdGFja0xheW91dD5cblxuICAgICAgICA8L0ZsZXhib3hMYXlvdXQ+XG4gICAgPC9QYWdlPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgICBpbXBvcnQgSG9tZSBmcm9tIFwiLi9Ib21lXCI7XG4gICAgaW1wb3J0IFBlZGlkbyBmcm9tIFwiLi9QZWRpZG9cIjtcbiAgICBpbXBvcnQgQ29uZmlnIGZyb20gXCIuLi9fY29uZmlnL19jb25maWdcIjtcbiAgICB2YXIgY29uZmlnID0gbmV3IENvbmZpZygpO1xuICAgIGNvbnN0IHsgYWxlcnQsIGNvbmZpcm0sIHByb21wdCwgbG9naW4sIGFjdGlvbiwgaW5wdXRUeXBlIH0gPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9kaWFsb2dzXCIpO1xuXG4gICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICBkYXRhKCkge1xuICAgICAgICAgICByZXR1cm4geyBVc3VhcmlvOiAnJywgSGlzdG9yaWNvIDogdHJ1ZSB9O1xuICAgICAgICB9LFxuICAgICAgICBwcm9wczogW1wiSGlzdG9yaWNvXCJdLFxuICAgICAgICBjcmVhdGVkOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aGlzLnBvcHVsYXJEYWRvcygpO1xuICAgICAgICB9LFxuICAgICAgICBtZXRob2RzOiB7XG4gICAgICAgICAgICAgcG9wdWxhckRhZG9zKCkge1xuICAgICAgICAgICAgICAgIHRoaXMuJGhlbGlhckFwcFxuICAgICAgICAgICAgICAgIC5wb3B1bGFyRGFkb3MoKVxuICAgICAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSk9PiB7ICAgXG4gICAgICAgICAgICAgICAgICAgIGlmKHJlc3BvbnNlLlN0YXR1cyA9PSB0cnVlKSB7ICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5Vc3VhcmlvID0gcmVzcG9uc2UuVXN1YXJpbztcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuVXN1YXJpby5TZW5oYSA9ICcnO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFsZXJ0KHJlc3BvbnNlLk1lbnNhZ2VtKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLmNhdGNoKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWxlcnQoXCJFcnJvIGFvIGVuY29udHJhciBzZXVzIHBlZGlkb3NcIik7XG4gICAgICAgICAgICAgICAgfSk7ICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdm9sdGFyKCkge1xuICAgICAgICAgICAgICAgIHRoaXMuJG5hdmlnYXRlVG8oSG9tZSwge1xuICAgICAgICAgICAgICAgICAgICBjbGVhckhpc3Rvcnk6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgSGlzdG9yaWNvOiB0aGlzLkhpc3Rvcmljb1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2FsdmFyKCkge1xuICAgICAgICAgICAgICAgIHRoaXMuJGhlbGlhckFwcFxuICAgICAgICAgICAgICAgIC5zYWx2YXJEYWRvcyh0aGlzLlVzdWFyaW8uQ29kaWdvLCB0aGlzLlVzdWFyaW8uTm9tZSwgdGhpcy5Vc3VhcmlvLkVtYWlsLCB0aGlzLlVzdWFyaW8uU2VuaGEsIHRoaXMuVXN1YXJpby5TZW5oYUF0dWFsLCB0aGlzLlVzdWFyaW8uQ29uZmlybWFyU2VuaGEpXG4gICAgICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKT0+IHsgICBcbiAgICAgICAgICAgICAgICAgICAgaWYocmVzcG9uc2UuU3RhdHVzID09IHRydWUpIHsgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFsZXJ0KHJlc3BvbnNlLk1lbnNhZ2VtKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRuYXZpZ2F0ZVRvKEhvbWUsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXJIaXN0b3J5OiB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWxlcnQocmVzcG9uc2UuTWVuc2FnZW0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuY2F0Y2goKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgdGhpcy5hbGVydChcIkVycm8gYW8gZW5jb250cmFyIHNldXMgcGVkaWRvc1wiKTtcbiAgICAgICAgICAgICAgICB9KTsgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBmb2N1c1Bhc3N3b3JkKCkge1xuICAgICAgICAgICAgICAgIHRoaXMuJHJlZnMucGFzc3dvcmQubmF0aXZlVmlldy5mb2N1cygpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGZvY3VzQ29uZmlybVBhc3N3b3JkKCkge1xuICAgICAgICAgICAgICAgIGlmICghdGhpcy5pc0xvZ2dpbmdJbikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRyZWZzLmNvbmZpcm1QYXNzd29yZC5uYXRpdmVWaWV3LmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGFsZXJ0KG1lc3NhZ2UpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYWxlcnQoe1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJBdGVuw6fDo29cIixcbiAgICAgICAgICAgICAgICAgICAgb2tCdXR0b25UZXh0OiBcIk9LXCIsXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IG1lc3NhZ2VcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG48L3NjcmlwdD5cblxuPHN0eWxlPlxuICAgIC5zdWItdGl0dWxvIHtcbiAgICAgICAgY29sb3I6ICMxZTY4MzI7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICB9XG4gICAgLmlucHV0e1xuICAgICAgICBib3JkZXItY29sb3I6cmVkO1xuICAgIH1cbiAgICAubGJsIHtcbiAgICAgICAgY29sb3I6ICNGRkY7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMDtcbiAgICB9XG5cbiAgICAuYm9sZCB7XG5cbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgfVxuXG4gICAgLmZvcm17XG4gICAgICAgIG1hcmdpbi1sZWZ0OjIwcHg7XG4gICAgfVxuICAgIC50ZWxlZm9uZVxuICAgIHtcbiAgICAgICAgY29sb3I6IzAwMDtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgfVxuPC9zdHlsZT4iLCI8dGVtcGxhdGU+XG4gICAgPFBhZ2UgYWN0aW9uQmFySGlkZGVuPVwiZmFsc2VcIj5cbiAgICAgICAgPEFjdGlvbkJhciBmbGF0PVwidHJ1ZVwiIHRpdGxlPVwiXCI+XG4gICAgICAgICAgICA8U3RhY2tMYXlvdXQ+XG4gICAgICAgICAgICAgICAgPEltYWdlIHNyYz1cIn4vaW1hZ2VzL2xvZ28ucG5nXCIgc3R5bGU9XCJoZWlnaHQ6MTAwcHg7IGZsb2F0OmxlZnQ7XCI+PC9JbWFnZT4gICAgICAgICAgICAgICBcbiAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+ICBcbiAgICAgICAgICAgIDxBY3Rpb25JdGVtIGlvcy5wb3NpdGlvbj1cInJpZ2h0XCIgd2lkdGg9XCI1MFwiIEB0YXA9XCJlZGl0YXJcIj5cbiAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPVwifi9pbWFnZXMvZWRpY2FvLnBuZ1wiIHN0eWxlPVwiZmxvYXQ6cmlnaHQ7XCI+PC9JbWFnZT5cbiAgICAgICAgICAgIDwvQWN0aW9uSXRlbT5cbiAgICAgICAgICAgIDxBY3Rpb25JdGVtIGlvcy5wb3NpdGlvbj1cInJpZ2h0XCIgd2lkdGg9XCI1MFwiIEB0YXA9XCJsb2dvdXRcIj5cbiAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPVwifi9pbWFnZXMvc2Fpci5wbmdcIiBzdHlsZT1cImZsb2F0OnJpZ2h0O1wiPjwvSW1hZ2U+XG4gICAgICAgICAgICA8L0FjdGlvbkl0ZW0+ICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgPC9BY3Rpb25CYXI+IFxuICAgICAgICA8U3RhY2tMYXlvdXQ+IFxuICAgICAgICAgPFRhYnMgc2VsZWN0ZWRJbmRleD1cIjBcIj5cbiAgICAgICAgICAgIDxUYWJTdHJpcD5cbiAgICAgICAgICAgICAgICA8VGFiU3RyaXBJdGVtIEB0YXA9XCJwZWRpZG9zXCI+XG4gICAgICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVwiUGVkaWRvc1wiPjwvTGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9XCJyZXM6Ly9ob21lXCI+PC9JbWFnZT5cbiAgICAgICAgICAgICAgICA8L1RhYlN0cmlwSXRlbT5cbiAgICAgICAgICAgICAgICA8VGFiU3RyaXBJdGVtIEB0YXA9XCJwZWRpZG9zSGlzdG9yaWNvXCI+IFxuICAgICAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cIkhpc3TDs3JpY29cIj48L0xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPVwicmVzOi8vc2V0dGluZ3NcIj48L0ltYWdlPlxuICAgICAgICAgICAgICAgIDwvVGFiU3RyaXBJdGVtPlxuICAgICAgICAgICAgPC9UYWJTdHJpcD5cbiAgICAgICAgICAgIDxUYWJDb250ZW50SXRlbSA+XG4gICAgICAgICAgICAgICAgPFNjcm9sbFZpZXcgPlxuICAgICAgICAgICAgICAgICAgICA8TGlzdFZpZXcgZm9yPVwiaXRlbSBpbiBpdGVtc1wiIGNsYXNzPVwibGlzdC1ncm91cFwiIHN0eWxlPVwiYmFja2dyb3VuZENvbG9yOiMwNDUyNDRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx2LXRlbXBsYXRlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkTGF5b3V0IGNvbHVtbnM9XCIyLzYqLCAyLzYqXCIgYmFja2dyb3VuZENvbG9yPVwiIzE0OEE2NFwiIHJvd3M9XCIyMCwyMCwyMCwyMCwyMCwyMCwyMCwyMFwiID5cdFx0XHRcdFx0XHRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIGNsYXNzPVwibGJsXCIgY29sPVwiMFwiIHJvdz1cIjBcIiAgdGV4dD1cIkPDs2RpZ286XCIgdGV4dFdyYXA9XCJ0cnVlXCI+PC9MYWJlbD4gICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgY2xhc3M9XCJsYmwgbGJsLWJvbGRcIiBjb2w9XCIwXCIgcm93PVwiMVwiICA6dGV4dD1cIml0ZW0uQ29kaWdvXCIgdGV4dFdyYXA9XCJ0cnVlXCI+PC9MYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIGNsYXNzPVwibGJsXCIgY29sPVwiMFwiIHJvdz1cIjJcIiAgdGV4dD1cIkxvamE6XCIgdGV4dFdyYXA9XCJ0cnVlXCI+PC9MYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIGNsYXNzPVwibGJsIGxibC1ib2xkXCIgY29sPVwiMFwiIHJvdz1cIjNcIiAgOnRleHQ9XCJpdGVtLkxvamFcIj48L0xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgY2xhc3M9XCJsYmxcIiBjb2w9XCIwXCIgcm93PVwiNFwiICB0ZXh0PVwiQWdlbmRhZGEgcGFyYTpcIiB0ZXh0V3JhcD1cInRydWVcIj48L0xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgY2xhc3M9XCJsYmwgbGJsLWJvbGRcIiBjb2w9XCIwXCIgcm93PVwiNVwiICA6dGV4dD1cIml0ZW0uRGF0YUVudHJlZ2F8Rm9ybWF0YURhdGFcIiB0ZXh0V3JhcD1cInRydWVcIj48L0xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgY2xhc3M9XCJsYmxcIiBjb2w9XCIwXCIgcm93PVwiNlwiICB0ZXh0PVwiU3RhdHVzOlwiIHRleHRXcmFwPVwidHJ1ZVwiPjwvTGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCBjbGFzcz1cImxibCBsYmwtYm9sZFwiIGNvbD1cIjBcIiByb3c9XCI3XCIgIDp0ZXh0PVwiaXRlbS5TdGF0dXNcIiA+PC9MYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiAgcm93U3Bhbj1cIjNcIiByb3c9XCIwXCIgY29sPVwiMVwiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1vcmFuZ2VcIiB0ZXh0PVwiVmlzdWFsaXphclwiIEB0YXA9XCJ2aXN1YWxpemFyKGl0ZW0sIGZhbHNlKVwiPjwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgY2xhc3M9XCJsYmxcIiAgcm93U3Bhbj1cIjNcIiBjb2w9XCIxXCIgcm93PVwiM1wiICB0ZXh0PVwiKkNsaXF1ZSBlbSBWaXN1YWxpemFyIHBhcmEgQWNlaXRhciBvdSByZWplaXRhciBvIFBlZGlkb1wiICB2ZXJ0aWNhbEFsaWdubWVudD1cImNlbnRlclwiIHRleHRXcmFwPVwidHJ1ZVwiPjwvTGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkTGF5b3V0PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC92LXRlbXBsYXRlPlxuICAgICAgICAgICAgICAgICAgICA8L0xpc3RWaWV3PlxuICAgICAgICAgICAgICAgIDwvU2Nyb2xsVmlldz4gXG4gICAgICAgICAgICA8L1RhYkNvbnRlbnRJdGVtPlxuICAgICAgICAgICAgPFRhYkNvbnRlbnRJdGVtPlxuICAgICAgICAgICAgICAgIDxTdGFja0xheW91dCBvcmllbnRhdGlvbj1cInZlcnRpY2FsXCIgc3R5bGU9XCJiYWNrZ3JvdW5kOiNmZmZcIj5cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIDxTdGFja0xheW91dCBvcmllbnRhdGlvbj1cImhvcml6b250YWxcIiBzdHlsZT1cImJhY2tncm91bmQ6I2ZmZlwiPiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBjbGFzcz1cImJ0biBidG4tdGFtYW5obyBidG4tcHJpbWFyeSBidG4tZ3JleVwiIDp0ZXh0PVwiVGV4dG9EYXRhRGVcIiBAdGFwPVwiZGF0YURlXCIgLz4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gY2xhc3M9XCJidG4gYnRuLXRhbWFuaG8gYnRuLXByaW1hcnkgYnRuLWdyZXlcIiA6dGV4dD1cIlRleHRvRGF0YUF0ZVwiIEB0YXA9XCJkYXRhQXRlXCIgLz4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxuICAgICAgICAgICAgICAgICAgICA8RGF0ZVBpY2tlciB2LXNob3c9XCJEYXRhRGVWaXNpYmxlXCIgdmVydGljYWxBbGlnbm1lbnQ9XCJjZW50ZXJcIiB2LW1vZGVsPVwiRGF0YURlU2VsZWNpb25hZGFcIj48L0RhdGVQaWNrZXI+XG4gICAgICAgICAgICAgICAgICAgIDxEYXRlUGlja2VyIHYtc2hvdz1cIkRhdGFBdGVWaXNpYmxlXCIgdmVydGljYWxBbGlnbm1lbnQ9XCJjZW50ZXJcIiB2LW1vZGVsPVwiRGF0YUF0ZVNlbGVjaW9uYWRhXCI+PC9EYXRlUGlja2VyPlxuICAgICAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQgb3JpZW50YXRpb249XCJob3Jpem9udGFsXCIgc3R5bGU9XCJiYWNrZ3JvdW5kOiNmZmZcIiB2LXNob3c9XCJEYXRhRGVWaXNpYmxlXCI+ICAgXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi10YW1hbmhvIGJ0bi1wcmltYXJ5IGJ0bi1yZWRcIiAgdGV4dD1cIkxpbXBhclwiIEB0YXA9XCJMaW1wYXJEYXRhRGVcIiAvPiAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBjbGFzcz1cImJ0biBidG4tdGFtYW5obyBidG4tcHJpbWFyeSBidG4tZ3JlZW5cIiAgdGV4dD1cIkNvbmZpcm1hclwiIEB0YXA9XCJjb25maXJtYXJEYXRhRGVcIiAvPiAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPC9TdGFja0xheW91dD5cbiAgICAgICAgICAgICAgICAgICAgIDxTdGFja0xheW91dCBvcmllbnRhdGlvbj1cImhvcml6b250YWxcIiBzdHlsZT1cImJhY2tncm91bmQ6I2ZmZlwiIHYtc2hvdz1cIkRhdGFBdGVWaXNpYmxlXCI+ICAgXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi10YW1hbmhvIGJ0bi1wcmltYXJ5IGJ0bi1yZWRcIiAgdGV4dD1cIkxpbXBhclwiIEB0YXA9XCJMaW1wYXJEYXRhQXRlXCIgLz4gICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gY2xhc3M9XCJidG4gYnRuLXRhbWFuaG8gYnRuLXByaW1hcnkgYnRuLWdyZWVuXCIgIHRleHQ9XCJDb25maXJtYXJcIiBAdGFwPVwiY29uZmlybWFyRGF0YUF0ZVwiIC8+ICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1ncmV5XCIgOnRleHQ9XCJTdGF0dXNcIiBAdGFwPVwic3RhdHVzUGVkaWRvXCIgLz5cblxuICAgICAgICAgICAgICAgICAgICA8TGlzdFZpZXcgZm9yPVwiaXRlbSBpbiBpdGVtc0hpc3Rvcmljb1wiIGNsYXNzPVwibGlzdC1ncm91cFwiIHN0eWxlPVwiYmFja2dyb3VuZENvbG9yOiMwNDUyNDQ+XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx2LXRlbXBsYXRlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkTGF5b3V0IGNvbHVtbnM9XCIyLzYqLCAyLzYqXCIgYmFja2dyb3VuZENvbG9yPVwiIzg4ODg4OFwiIHJvd3M9XCIyMCwyMCwyMCwyMCwyMCwyMCwyMCwyMFwiID5cdFx0XHRcdFx0XHRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIGNsYXNzPVwibGJsXCIgY29sPVwiMFwiIHJvdz1cIjBcIiAgdGV4dD1cIkPDs2RpZ286XCIgdGV4dFdyYXA9XCJ0cnVlXCI+PC9MYWJlbD4gICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgIGNsYXNzPVwibGJsIGxibC1ib2xkXCIgY29sPVwiMFwiIHJvdz1cIjFcIiAgOnRleHQ9XCJpdGVtLkNvZGlnb1wiIHRleHRXcmFwPVwidHJ1ZVwiPjwvTGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCBjbGFzcz1cImxibFwiIGNvbD1cIjBcIiByb3c9XCIyXCIgIHRleHQ9XCJMb2phOlwiIHRleHRXcmFwPVwidHJ1ZVwiPjwvTGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCAgY2xhc3M9XCJsYmwgbGJsLWJvbGRcIiBjb2w9XCIwXCIgcm93PVwiM1wiICA6dGV4dD1cIml0ZW0uTG9qYVwiIHRleHRXcmFwPVwidHJ1ZVwiPjwvTGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCBjbGFzcz1cImxibFwiIGNvbD1cIjBcIiByb3c9XCI0XCIgIHRleHQ9XCJBZ2VuZGFkYSBwYXJhOlwiIHRleHRXcmFwPVwidHJ1ZVwiPjwvTGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCBjbGFzcz1cImxibCBsYmwtYm9sZFwiIGNvbD1cIjBcIiByb3c9XCI1XCIgIDp0ZXh0PVwiaXRlbS5EYXRhRW50cmVnYXxGb3JtYXRhRGF0YVwiIHRleHRXcmFwPVwidHJ1ZVwiPjwvTGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCBjbGFzcz1cImxibFwiIGNvbD1cIjBcIiByb3c9XCI2XCIgIHRleHQ9XCJTdGF0dXM6XCIgdGV4dFdyYXA9XCJ0cnVlXCI+PC9MYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIGNsYXNzPVwibGJsIGxibC1ib2xkXCIgY29sPVwiMFwiIHJvdz1cIjdcIiAgOnRleHQ9XCJpdGVtLlN0YXR1c1wiID48L0xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiAgcm93U3Bhbj1cIjZcIiByb3c9XCIwXCIgY29sPVwiMVwiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1vcmFuZ2VcIiB0ZXh0PVwiVmlzdWFsaXphclwiIEB0YXA9XCJ2aXN1YWxpemFyKGl0ZW0sIHRydWUpXCI+PC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkTGF5b3V0PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC92LXRlbXBsYXRlPlxuICAgICAgICAgICAgICAgICAgICA8L0xpc3RWaWV3PlxuICAgICAgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxuICAgICAgICAgICAgPC9UYWJDb250ZW50SXRlbT5cbiAgICAgICAgPC9UYWJzPlxuICAgIDwvU3RhY2tMYXlvdXQ+XG4gICAgPC9QYWdlPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cblxuICAgIGltcG9ydCBMb2dpbiBmcm9tIFwiLi9Mb2dpblwiO1xuICAgIGltcG9ydCBQZWRpZG8gZnJvbSBcIi4vUGVkaWRvXCI7XG4gICAgaW1wb3J0IEVkaXRhciBmcm9tIFwiLi9FZGl0YXJcIjtcbiAgICBpbXBvcnQgQ29uZmlnIGZyb20gXCIuLi9fY29uZmlnL19jb25maWdcIjtcbiAgICB2YXIgY29uZmlnID0gbmV3IENvbmZpZygpO1xuXG4gICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICBkYXRhKCkge1xuICAgICAgICAgICAgcmV0dXJuIHsgXG4gICAgICAgICAgICAgICAgaXRlbXMgOiAnJywgXG4gICAgICAgICAgICAgICAgaXRlbXNIaXN0b3JpY28gOiAnJyxcbiAgICAgICAgICAgICAgICBIaXN0b3JpY28gOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBzZWxlY3RlZEluZGV4OiAwLFxuICAgICAgICAgICAgICAgIFBlZGlkb1N0YXR1czogbnVsbCxcbiAgICAgICAgICAgICAgICBTdGF0dXM6ICdUb2RvcyBTdGF0dXMnLFxuICAgICAgICAgICAgICAgIFRleHRvRGF0YURlOiAnRGF0YSBkZScsXG4gICAgICAgICAgICAgICAgVGV4dG9EYXRhQXRlOiAnRGF0YSBBdMOpJyxcbiAgICAgICAgICAgICAgICBEYXRhRGVWaXNpYmxlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBEYXRhQXRlVmlzaWJsZTogZmFsc2UsICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgRGF0YUF0ZVNlbGVjaW9uYWRhOiBuZXcgRGF0ZSgpLFxuICAgICAgICAgICAgICAgIERhdGFEZVNlbGVjaW9uYWRhOiBuZXcgRGF0ZSgpLFxuICAgICAgICAgICAgICAgIFZhbHVlRGF0YUF0ZTogbnVsbCxcbiAgICAgICAgICAgICAgICBWYWx1ZURhdGFEZTogbnVsbFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICAgICAgcHJvcHM6IFtcIkhpc3Rvcmljb1wiLCBcIkRhdGFEZUZpbHRyb1wiLCBcIkRhdGFBdGVGaWx0cm9cIiwgXCJTdGF0dXNGaWx0cm9cIl0sXG4gICAgICAgIGNyZWF0ZWQ6IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICAgICAgaWYodGhpcy5EYXRhRGVGaWx0cm8gIT0gJycgJiYgdGhpcy5EYXRhRGVGaWx0cm8gIT0gdW5kZWZpbmVkKXsgICAgICAgXG4gICAgICAgICAgICAgICAgdGhpcy5WYWx1ZURhdGFEZSA9IHRoaXMuRGF0YURlRmlsdHJvO1xuXG4gICAgICAgICAgICAgICAgdmFyIGQgPSBuZXcgRGF0ZSh0aGlzLkRhdGFEZUZpbHRybyksXG4gICAgICAgICAgICAgICAgbWVzID0gJycgKyAoZC5nZXRNb250aCgpICsgMSksXG4gICAgICAgICAgICAgICAgZGlhID0gJycgKyBkLmdldERhdGUoKSxcbiAgICAgICAgICAgICAgICBhbm8gPSBkLmdldEZ1bGxZZWFyKCk7XG4gICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBpZiAobWVzLmxlbmd0aCA8IDIpIG1lcyA9ICcwJyArIG1lcztcbiAgICAgICAgICAgICAgICBpZiAoZGlhLmxlbmd0aCA8IDIpIGRpYSA9ICcwJyArIGRpYTtcblxuICAgICAgICAgICAgICAgIHRoaXMuVGV4dG9EYXRhRGUgPSBkaWEgKyAnLycgKyAgbWVzICsgJy8nICsgIGFubzsgIFxuICAgICAgICAgICAgICAgIHRoaXMuRGF0YURlU2VsZWNpb25hZGEgPSAgbmV3IERhdGUodGhpcy5EYXRhRGVGaWx0cm8pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZih0aGlzLkRhdGFBdGVGaWx0cm8gIT0gJycgJiYgdGhpcy5EYXRhQXRlRmlsdHJvICE9IHVuZGVmaW5lZCl7XG4gICAgICAgICAgICAgICAgdGhpcy5WYWx1ZURhdGFBdGUgPSB0aGlzLkRhdGFBdGVGaWx0cm87XG5cbiAgICAgICAgICAgICAgICB2YXIgZCA9IG5ldyBEYXRlKHRoaXMuRGF0YUF0ZUZpbHRybyksXG4gICAgICAgICAgICAgICAgbWVzID0gJycgKyAoZC5nZXRNb250aCgpICsgMSksXG4gICAgICAgICAgICAgICAgZGlhID0gJycgKyBkLmdldERhdGUoKSxcbiAgICAgICAgICAgICAgICBhbm8gPSBkLmdldEZ1bGxZZWFyKCk7XG4gICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBpZiAobWVzLmxlbmd0aCA8IDIpIG1lcyA9ICcwJyArIG1lcztcbiAgICAgICAgICAgICAgICBpZiAoZGlhLmxlbmd0aCA8IDIpIGRpYSA9ICcwJyArIGRpYTtcblxuICAgICAgICAgICAgICAgIHRoaXMuVGV4dG9EYXRhQXRlID0gZGlhICsgJy8nICsgIG1lcyArICcvJyArICBhbm87ICBcbiAgICAgICAgICAgICAgICB0aGlzLkRhdGFBdGVTZWxlY2lvbmFkYSA9ICBuZXcgRGF0ZSh0aGlzLkRhdGFBdGVGaWx0cm8pOyAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmKHRoaXMuU3RhdHVzRmlsdHJvICE9ICcnICYmIHRoaXMuU3RhdHVzRmlsdHJvICE9IHVuZGVmaW5lZCl7XG4gICAgICAgICAgICAgICAgdGhpcy5TdGF0dXMgPSB0aGlzLlN0YXR1c0ZpbHRybztcbiAgICAgICAgICAgICAgICB0aGlzLlBlZGlkb1N0YXR1cyA9IHRoaXMuU3RhdHVzRmlsdHJvO1xuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuU3RhdHVzRmlsdHJvID09IDUpe1xuICAgICAgICAgICAgICAgICAgICB0aGlzLlN0YXR1cyA9IFwiQ2FuY2VsYWRvXCI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuU3RhdHVzRmlsdHJvID09IDYpe1xuICAgICAgICAgICAgICAgICAgICB0aGlzLlN0YXR1cyA9IFwiRmluYWxpemFkb1wiO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmICh0aGlzLlN0YXR1c0ZpbHRybyA9PSAxMCl7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuU3RhdHVzID0gXCJFbnRyZWd1ZVwiO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmICh0aGlzLlN0YXR1c0ZpbHRybyA9PSA3KXtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5TdGF0dXMgPSBcIkFjZWl0byBwZWxhIExvamFcIjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMucGVkaWRvcygpO1xuICAgICAgICAgICAgdGhpcy5wZWRpZG9zSGlzdG9yaWNvKCk7XG4gICAgICAgICAgICB0aGlzLkF0dWFsaXphckFQUCgpO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5IaXN0b3JpY28gPT0gdHJ1ZSl7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZEluZGV4ID0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICB9LFxuICAgICAgICBmaWx0ZXJzOiB7XG4gICAgICAgICAgICBGb3JtYXRhRGF0YTogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgdmFyIGQgPSBuZXcgRGF0ZSh2YWx1ZSksXG4gICAgICAgICAgICAgICAgbWVzID0gJycgKyAoZC5nZXRNb250aCgpICsgMSksXG4gICAgICAgICAgICAgICAgZGlhID0gJycgKyBkLmdldERhdGUoKSxcbiAgICAgICAgICAgICAgICBhbm8gPSBkLmdldEZ1bGxZZWFyKCksXG4gICAgICAgICAgICAgICAgaG9yYSA9ICcnICsgKGQuZ2V0SG91cnMoKSksXG4gICAgICAgICAgICAgICAgbWludXRvID0gJycgKyBkLmdldE1pbnV0ZXMoKTtcblxuICAgICAgICAgICAgICAgIGlmIChtZXMubGVuZ3RoIDwgMikgbWVzID0gJzAnICsgbWVzO1xuICAgICAgICAgICAgICAgIGlmIChkaWEubGVuZ3RoIDwgMikgZGlhID0gJzAnICsgZGlhO1xuICAgICAgICAgICAgICAgIGlmIChob3JhLmxlbmd0aCA8IDIpIGhvcmEgPSAnMCcgKyBob3JhO1xuICAgICAgICAgICAgICAgIGlmIChtaW51dG8ubGVuZ3RoIDwgMikgbWludXRvID0gJzAnICsgbWludXRvO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIFtkaWEsIG1lcywgYW5vXS5qb2luKCcvJykgKyAnIMOgcyAnICsgaG9yYSArIFwiOlwiICsgbWludXRvO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgbWV0aG9kczoge1xuICAgICAgICAgICAgbG9nb3V0KCkge1xuICAgICAgICAgICAgICAgIHRoaXMuJGhlbGlhckFwcFxuICAgICAgICAgICAgICAgIC5kZXNhdXRlbnRpY2FyKClcbiAgICAgICAgICAgICAgICAudGhlbigocmVzcG9uc2UpPT4geyAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGlmKHJlc3BvbnNlLlN0YXR1cyA9PSB0cnVlKVxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRuYXZpZ2F0ZVRvKExvZ2luLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXJIaXN0b3J5OiBmYWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWxlcnQocmVzcG9uc2UuTWVuc2FnZW0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuY2F0Y2goKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBhbGVydChcIkVycm8gYW8gZW5jb250cmFyIHNldXMgcGVkaWRvc1wiKTtcbiAgICAgICAgICAgICAgICB9KTsgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkYXRhRGUoKXtcbiAgICAgICAgICAgICAgICB0aGlzLkRhdGFEZVZpc2libGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMuRGF0YUF0ZVZpc2libGUgPSBmYWxzZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkYXRhQXRlKCl7XG4gICAgICAgICAgICAgICAgdGhpcy5EYXRhRGVWaXNpYmxlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5EYXRhQXRlVmlzaWJsZSA9IHRydWU7XG4gICAgICAgICAgICB9LCAgICAgIFxuICAgICAgICAgICAgY29uZmlybWFyRGF0YURlKCl7XG4gICAgICAgICAgICAgICAgdmFyIGQgPSBuZXcgRGF0ZSh0aGlzLkRhdGFEZVNlbGVjaW9uYWRhKSxcbiAgICAgICAgICAgICAgICBtZXMgPSAnJyArIChkLmdldE1vbnRoKCkgKyAxKSxcbiAgICAgICAgICAgICAgICBkaWEgPSAnJyArIGQuZ2V0RGF0ZSgpLFxuICAgICAgICAgICAgICAgIGFubyA9IGQuZ2V0RnVsbFllYXIoKTtcbiAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGlmIChtZXMubGVuZ3RoIDwgMikgbWVzID0gJzAnICsgbWVzO1xuICAgICAgICAgICAgICAgIGlmIChkaWEubGVuZ3RoIDwgMikgZGlhID0gJzAnICsgZGlhO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5UZXh0b0RhdGFEZSA9IGRpYSArICcvJyArICBtZXMgKyAnLycgKyAgYW5vOyAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB0aGlzLlZhbHVlRGF0YURlID0gbWVzICsgJy8nICsgZGlhICArICcvJyArICBhbm87XG4gICAgICAgICAgICAgICAgdGhpcy5EYXRhRGVWaXNpYmxlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5wZWRpZG9zSGlzdG9yaWNvKCk7XG4gICAgICAgICAgICB9LCAgIFxuICAgICAgICAgICAgY29uZmlybWFyRGF0YUF0ZSgpe1xuICAgICAgICAgICAgICAgIHZhciBkID0gbmV3IERhdGUodGhpcy5EYXRhQXRlU2VsZWNpb25hZGEpLFxuICAgICAgICAgICAgICAgIG1lcyA9ICcnICsgKGQuZ2V0TW9udGgoKSArIDEpLFxuICAgICAgICAgICAgICAgIGRpYSA9ICcnICsgZC5nZXREYXRlKCksXG4gICAgICAgICAgICAgICAgYW5vID0gZC5nZXRGdWxsWWVhcigpO1xuICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgaWYgKG1lcy5sZW5ndGggPCAyKSBtZXMgPSAnMCcgKyBtZXM7XG4gICAgICAgICAgICAgICAgaWYgKGRpYS5sZW5ndGggPCAyKSBkaWEgPSAnMCcgKyBkaWE7XG5cbiAgICAgICAgICAgICAgICB0aGlzLlRleHRvRGF0YUF0ZSA9IGRpYSArICcvJyArICBtZXMgKyAnLycgKyAgYW5vOyAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB0aGlzLlZhbHVlRGF0YUF0ZSA9IG1lcyArICcvJyArIGRpYSAgKyAnLycgKyAgYW5vO1xuICAgICAgICAgICAgICAgIHRoaXMuRGF0YUF0ZVZpc2libGUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLnBlZGlkb3NIaXN0b3JpY28oKTtcbiAgICAgICAgICAgIH0sICAgXG4gICAgICAgICAgICBMaW1wYXJEYXRhRGUoKXtcbiAgICAgICAgICAgICAgICB0aGlzLlRleHRvRGF0YURlID0gJ0RhdGEgRGUnO1xuICAgICAgICAgICAgICAgIHRoaXMuRGF0YURlVmlzaWJsZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMuVmFsdWVEYXRhRGUgPSBudWxsO1xuICAgICAgICAgICAgICAgIHRoaXMucGVkaWRvc0hpc3RvcmljbygpO1xuICAgICAgICAgICAgfSwgICAgICAgICBcbiAgICAgICAgICAgIExpbXBhckRhdGFBdGUoKXtcbiAgICAgICAgICAgICAgICB0aGlzLlRleHRvRGF0YUF0ZSA9ICdEYXRhIEF0w6knO1xuICAgICAgICAgICAgICAgIHRoaXMuRGF0YUF0ZVZpc2libGUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLlZhbHVlRGF0YUF0ZSA9IG51bGw7XG4gICAgICAgICAgICAgICAgdGhpcy5wZWRpZG9zSGlzdG9yaWNvKCk7XG4gICAgICAgICAgICB9LCAgICAgICAgICBcbiAgICAgICAgICAgIHN0YXR1c1BlZGlkbygpIHtcblxuICAgICAgICAgICAgICAgIHRoaXMuRGF0YURlVmlzaWJsZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMuRGF0YUF0ZVZpc2libGUgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgIHZhciBkaWFsb2dzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvZGlhbG9nc1wiKTtcbiAgICAgICAgICAgICAgICBkaWFsb2dzLmFjdGlvbih7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIkVzY29saGEgbyBzdGF0dXMgcXVlIGRlc2VqYSBmYXplciBvIGZpbHRyb1wiLFxuICAgICAgICAgICAgICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiBcIkNhbmNlbGFyXCIsXG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbnM6IFsnVG9kb3MnLCdDYW5jZWxhZG8nLCdGaW5hbGl6YWRvJywgJ0VudHJlZ3VlJywgJ0FjZWl0byBwZWxhIExvamEnXVxuICAgICAgICAgICAgICAgIH0pLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB2YXIgcmVzcG9zdGEgPSByZXN1bHQ7XG5cbiAgICAgICAgICAgICAgICAgICAgIGlmKHJlc3VsdCA9PSBcIkNhbmNlbGFyXCIpe1xuICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0ID09IFwiVG9kb3NcIil7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLlBlZGlkb1N0YXR1cyA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLlN0YXR1cyA9IFwiVG9kb3MgU3RhdHVzXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBlZGlkb3NIaXN0b3JpY28oKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChyZXN1bHQgPT0gXCJDYW5jZWxhZG9cIil7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLlBlZGlkb1N0YXR1cyA9IDU7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLlN0YXR1cyA9IFwiQ2FuY2VsYWRvXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBlZGlkb3NIaXN0b3JpY28oKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChyZXN1bHQgPT0gXCJGaW5hbGl6YWRvXCIpe1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5QZWRpZG9TdGF0dXMgPSA2O1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5TdGF0dXMgPSBcIkZpbmFsaXphZG9cIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGVkaWRvc0hpc3RvcmljbygpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChyZXN1bHQgPT0gXCJFbnRyZWd1ZVwiKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuUGVkaWRvU3RhdHVzID0gMTA7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLlN0YXR1cyA9IFwiRW50cmVndWVcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGVkaWRvc0hpc3RvcmljbygpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChyZXN1bHQgPT0gXCJBY2VpdG8gcGVsYSBMb2phXCIpe1xuICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuU3RhdHVzID0gXCJBY2VpdG8gcGVsYSBMb2phXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLlBlZGlkb1N0YXR1cyA9IDc7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBlZGlkb3NIaXN0b3JpY28oKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVkaXRhcihpc0hpc3Rvcmljbykge1xuICAgICAgICAgICAgICAgIHRoaXMuJG5hdmlnYXRlVG8oRWRpdGFyLCB7XG4gICAgICAgICAgICAgICAgICAgIGNsZWFySGlzdG9yeTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIEhpc3RvcmljbzogaXNIaXN0b3JpY29cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pOyBcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwZWRpZG9zKCl7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgIHRoaXMuJGhlbGlhckFwcFxuICAgICAgICAgICAgICAgICAgICAucGVkaWRvcygpIFxuICAgICAgICAgICAgICAgICAgICAudGhlbigocmVzcG9uc2UpPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pdGVtcyA9IHJlc3BvbnNlLlBlZGlkb3M7XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbGVydChcIkVycm8gYW8gZW5jb250cmFyIHNldXMgcGVkaWRvc1wiKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7IH1cbiAgICAgICAgICAgICAgICAgICAgLCAxMDAwKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwZWRpZG9zSGlzdG9yaWNvKCl7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiAge1xuICAgICAgICAgICAgICAgIHRoaXMuJGhlbGlhckFwcFxuICAgICAgICAgICAgICAgICAgICAucGVkaWRvc0hpc3Rvcmljbyh0aGlzLlBlZGlkb1N0YXR1cywgIHRoaXMuVmFsdWVEYXRhRGUsIHRoaXMuVmFsdWVEYXRhQXRlKVxuICAgICAgICAgICAgICAgICAgICAudGhlbigocmVzcG9uc2VIaXN0b3JpY28pPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pdGVtc0hpc3RvcmljbyA9IHJlc3BvbnNlSGlzdG9yaWNvLlBlZGlkb3M7XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbGVydChcIkVycm8gYW8gZW5jb250cmFyIHNldXMgcGVkaWRvc1wiKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7fVxuICAgICAgICAgICAgICAgICAgICAsIDEwMDApO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHZpc3VhbGl6YXIoZSwgaXNIaXN0b3JpY28pIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRuYXZpZ2F0ZVRvKFBlZGlkbywge1xuICAgICAgICAgICAgICAgICAgICBjbGVhckhpc3Rvcnk6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBDb2RpZ286IGUuQ29kaWdvLFxuICAgICAgICAgICAgICAgICAgICAgICAgSGlzdG9yaWNvOiBpc0hpc3RvcmljbyxcbiAgICAgICAgICAgICAgICAgICAgICAgIERhdGFEZTogdGhpcy5WYWx1ZURhdGFEZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIERhdGFBdGU6IHRoaXMuVmFsdWVEYXRhQXRlLFxuICAgICAgICAgICAgICAgICAgICAgICAgU3RhdHVzOiB0aGlzLlBlZGlkb1N0YXR1c1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgQXR1YWxpemFyQVBQKCl7XG4gICAgICAgICAgICAgIHNldEludGVydmFsKCgpID0+IHBlZGlkb3MoKSwgNjAwMDAwKTsgLy85MDAwMFxuICAgICAgICAgICAgICBzZXRJbnRlcnZhbCgoKSA9PiBwZWRpZG9zSGlzdG9yaWNvKHRoaXMuUGVkaWRvU3RhdHVzLCBudWxsLCB0aGlzLlZhbHVlRGF0YUF0ZSksIDYwMDAwMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuPC9zY3JpcHQ+XG5cbjxzdHlsZT5cbiAgICAubGJse1xuICAgICAgICBjb2xvcjojRkZGO1xuICAgICAgICBtYXJnaW4tbGVmdDogMTA7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMTA7XG4gICAgfVxuICAgIC5sYmwtYm9sZHtcbiAgICAgICAgIFxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB9XG4gICAgLnNhaXIge1xuICAgICAgICBoZWlnaHQ6IDMwO1xuICAgIH1cblxuICAgIC5lZGljYW8ge1xuICAgICAgICBoZWlnaHQ6IDI1O1xuICAgIH1cbiAgICAuYnRuLXRhbWFuaG97XG4gICAgICAgIHdpZHRoOiA0MSU7XG4gICAgfVxuPC9zdHlsZT4iLCI8dGVtcGxhdGU+XG4gICAgPFBhZ2UgYWN0aW9uQmFySGlkZGVuPVwidHJ1ZVwiPlxuICAgICAgICA8U2Nyb2xsdmlldz5cbiAgICAgICAgICAgIDxGbGV4Ym94TGF5b3V0IGNsYXNzPVwicGFnZVwiPlxuICAgICAgICAgICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cImZvcm1cIj5cbiAgICAgICAgICAgICAgICAgICAgPEltYWdlIGNsYXNzPVwibG9nb1wiIHNyYz1cIn4vaW1hZ2VzL2xvZ28ucG5nXCI+PC9JbWFnZT5cbiAgICAgICAgICAgICAgICAgICAgPExhYmVsIGNsYXNzPVwiaGVhZGVyXCIgdGV4dD1cIlBFRElET1NcIj48L0xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8TGFiZWwgY2xhc3M9XCJtZW5zYWdlbVwiIHYtaWY9XCJ0aGlzLnJldG9ybm9Mb2dpbiAhPSAnJ1wiPnt7cmV0b3Jub0xvZ2lufX08L0xhYmVsPlxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPEdyaWRMYXlvdXQgcm93cz1cImF1dG8sIGF1dG8sIGF1dG9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxTdGFja0xheW91dCByb3c9XCIwXCIgY2xhc3M9XCJpbnB1dC1maWVsZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGQgY2xhc3M9XCJpbnB1dFwiIGhpbnQ9XCJMb2dpblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDppc0VuYWJsZWQ9XCIhcHJvY2Vzc2luZ1wiIGtleWJvYXJkVHlwZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0b2NvcnJlY3Q9XCJmYWxzZVwiIGF1dG9jYXBpdGFsaXphdGlvblR5cGU9XCJub25lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cInVzZXIuZW1haWxcIiByZXR1cm5LZXlUeXBlPVwibmV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEByZXR1cm5QcmVzcz1cImZvY3VzUGFzc3dvcmRcIj48L1RleHRGaWVsZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XCJoci1saWdodFwiPjwvU3RhY2tMYXlvdXQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQgcm93PVwiMVwiIGNsYXNzPVwiaW5wdXQtZmllbGRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkIGNsYXNzPVwiaW5wdXRcIiByZWY9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDppc0VuYWJsZWQ9XCIhcHJvY2Vzc2luZ1wiIGhpbnQ9XCJQYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlY3VyZT1cInRydWVcIiB2LW1vZGVsPVwidXNlci5wYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpyZXR1cm5LZXlUeXBlPVwiaXNMb2dnaW5nSW4gPyAnZG9uZScgOiAnbmV4dCdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAcmV0dXJuUHJlc3M9XCJmb2N1c0NvbmZpcm1QYXNzd29yZFwiPjwvVGV4dEZpZWxkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cImhyLWxpZ2h0XCI+PC9TdGFja0xheW91dD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxTdGFja0xheW91dCByb3c9XCIyXCIgdi1zaG93PVwiIWlzTG9nZ2luZ0luXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImlucHV0LWZpZWxkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZCBjbGFzcz1cImlucHV0XCIgcmVmPVwiY29uZmlybVBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmlzRW5hYmxlZD1cIiFwcm9jZXNzaW5nXCIgaGludD1cIkNvbmZpcm0gcGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWN1cmU9XCJ0cnVlXCIgdi1tb2RlbD1cInVzZXIuY29uZmlybVBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuS2V5VHlwZT1cImRvbmVcIj48L1RleHRGaWVsZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XCJoci1saWdodFwiPjwvU3RhY2tMYXlvdXQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxuICAgICAgICAgICAgICAgICAgICAgICAgPEFjdGl2aXR5SW5kaWNhdG9yIHJvd1NwYW49XCIzXCIgOmJ1c3k9XCJwcm9jZXNzaW5nXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0FjdGl2aXR5SW5kaWNhdG9yPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0IHJvdz1cIjNcIj5cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiA6dGV4dD1cImlzTG9nZ2luZ0luID8gJ0VudHJhcicgOiAnU2lnbiBVcCdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgOmlzRW5hYmxlZD1cIiFwcm9jZXNzaW5nXCIgQHRhcD1cInN1Ym1pdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImJ0biBidG4tcHJpbWFyeSBidG4tZ3JlZW4gbS10LTIwXCI+PC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxMYWJlbCAqdi1zaG93PVwiaXNMb2dnaW5nSW5cIiB0ZXh0PVwiRXNxdWVjZXUgc3VhIHNlbmhhP1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImxvZ2luLWxhYmVsXCIgQHRhcD1cImZvcmdvdFBhc3N3b3JkKClcIj48L0xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8IS0tPFdlYlZpZXcgdi1pZj1cIiF0aGlzLmlzUmVjYXB0Y2hhXCIgc3JjPVwiaHR0cHM6Ly93d3cuaGVsaWFyZXhwcmVzcy5jb20uYnIvcmVjYXB0Y2hhLmh0bWxcIiBAbG9hZEZpbmlzaGVkPScoZSk9PiB7dGhpcy5yZWNhcHRjaGEoZSl9JyAvPi0tPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9TdGFja0xheW91dD5cbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkTGF5b3V0PlxuICAgICAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XG5cbiAgICAgICAgICAgIDwvRmxleGJveExheW91dD5cbiAgICAgICAgPC9TY3JvbGx2aWV3PlxuICAgIDwvUGFnZT5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gICAgaW1wb3J0IEhvbWUgZnJvbSBcIi4vSG9tZVwiO1xuICAgIGltcG9ydCBDb25maWcgZnJvbSBcIi4uL19jb25maWcvX2NvbmZpZ1wiO1xuXG4gICAgdmFyIGNvbmZpZyA9IG5ldyBDb25maWcoKTtcblxuICAgIGV4cG9ydCBkZWZhdWx0IHtcbiAgICAgICAgbmFtZTogXCJkZWZhdWx0UGFnZVwiLFxuICAgICAgICBkYXRhKCkge1xuICAgICAgICAgICAgXG4gICAgICAgICAgICB0aGlzLlZlcmlmaWNhckF1dGVudGljYWRvKCk7XG5cbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgaXNMb2dnaW5nSW46IHRydWUsXG4gICAgICAgICAgICAgICAgcHJvY2Vzc2luZzogZmFsc2UsXG4gICAgICAgICAgICAgICAgLy9pc1JlY2FwdGNoYTogZmFsc2UsXG4gICAgICAgICAgICAgICAgdXNlcjoge1xuICAgICAgICAgICAgICAgICAgICBlbWFpbDogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgcGFzc3dvcmQ6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIGNvbmZpcm1QYXNzd29yZDogXCJcIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgcmV0b3Jub0xvZ2luOiBcIlwiXG4gICAgICAgICAgICB9OyAgICAgICAgICAgIFxuICAgICAgICB9LFxuICAgICAgICBtZXRob2RzOiB7XG4gICAgICAgICAgICAvL3JlY2FwdGNoYShlKSB7XG4gICAgICAgICAgICAvLyAgICBpZihlLnVybC5pbmRleE9mKFwic3VjZXNzPXRydWVcIikgIT0gLTEpIHtcbiAgICAgICAgICAgIC8vICAgICAgICB0aGlzLmlzUmVjYXB0Y2hhID0gdHJ1ZTtcbiAgICAgICAgICAgIC8vICAgIH1cbiAgICAgICAgICAgIC8vfSxcbiAgICAgICAgICAgIHRvZ2dsZUZvcm0oKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pc0xvZ2dpbmdJbiA9ICF0aGlzLmlzTG9nZ2luZ0luO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFZlcmlmaWNhckF1dGVudGljYWRvKCl7XG4gICAgICAgICAgICAgICAgIHRoaXMuJGhlbGlhckFwcFxuICAgICAgICAgICAgICAgICAgICAuaXNMb2dnZWRJbigpXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSk9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZihyZXNwb25zZS5TdGF0dXMgPT0gdHJ1ZSkgeyBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRuYXZpZ2F0ZVRvKEhvbWUsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXJIaXN0b3J5OiBmYWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQoXCJFcnJvIGFvIHZlcmlmaWNhciBhdXRlbnRpY2HDp8OjbyBkbyB1c3XDoXJpb1wiKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc3VibWl0KCkge1xuICAgICAgICAgICAgICAgIGlmICghdGhpcy51c2VyLmVtYWlsICYmIHRoaXMudXNlci5wYXNzd29yZHx8ICF0aGlzLnVzZXIucGFzc3dvcmQgJiYgdGhpcy51c2VyLmVtYWlsKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmV0b3Jub0xvZ2luID0gJ1BvciBmYXZvciwgcHJlZW5jaGVyIGxvZ2luIG91IHNlbmhhISc7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvL2lmKCAhdGhpcy5pc1JlY2FwdGNoYSApIHtcbiAgICAgICAgICAgICAgICAvLyAgICB0aGlzLnJldG9ybm9Mb2dpbiA9IFwiUG9yIGZhdm9yLCBwcmVlbmNoYSBvIGNhcHRjaGEhXCI7XG4gICAgICAgICAgICAgICAgLy8gICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIC8vfVxuXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9jZXNzaW5nID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pc0xvZ2dpbmdJbikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvZ2luKCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWdpc3RlcigpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBsb2dpbkFudCgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRiYWNrZW5kU2VydmljZVxuICAgICAgICAgICAgICAgICAgICAubG9naW4odGhpcy51c2VyKVxuICAgICAgICAgICAgICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb2Nlc3NpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJG5hdmlnYXRlVG8oSG9tZSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFySGlzdG9yeTogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb2Nlc3NpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWxlcnQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJVbmZvcnR1bmF0ZWx5IHdlIGNvdWxkIG5vdCBmaW5kIHlvdXIgYWNjb3VudC5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGxvZ2luKCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRoZWxpYXJBcHBcbiAgICAgICAgICAgICAgICAgICAgLmxvZ2luKHRoaXMudXNlcilcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKT0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvY2Vzc2luZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25maWcuc2V0VG9rZW4oJ2YtdTV2cWNJbGZvOkFQQTkxYkYwRDgyNUxvWTBya0xKX2JxMFpwdEdMbk84U2hNMnpKVm55cURySk1wQ2daRTNUNDhBdkx3ejI5b2laVFJCbVlESV9sVl82bHUxSmpoS1UwUGFCOXpwNVhOcnNhaTMxclhFNkRkUDQ5NjR6bVFkTUx2RmIyVzNPaFZOVUdhT0F2eF9sZ25CJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25maWcuc2V0RGV2aWNlSWQoJ2U5YzU1YmNkLWM0YzItNGI1Mi1hMGQ4LWM4MzE5MDJlNTJmZCcpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRuYXZpZ2F0ZVRvKEhvbWUsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGVhckhpc3Rvcnk6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBmb3Jnb3RQYXNzd29yZCgpIHtcbiAgICAgICAgICAgICAgICBwcm9tcHQoe1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJFc3F1ZWNpIG1pbmhhIHNlbmhhXCIsXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiRGlnaXRlIG8gbG9naW4gcXVlIHZvY8OqIHVzb3UgcGFyYSBzZSByZWdpc3RyYXIgbm8gSEVMSUFSIEVYUFJFU1MgcGFyYSByZWRlZmluaXIgc3VhIHNlbmhhLlwiLFxuICAgICAgICAgICAgICAgICAgICBpbnB1dFR5cGU6IFwiZW1haWxcIiwgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBva0J1dHRvblRleHQ6IFwiRW52aWFyXCIsXG4gICAgICAgICAgICAgICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6IFwiQ2FuY2VsYXJcIixcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFRleHQ6IFwiICAgICBcIiArIHRoaXMudXNlci5lbWFpbCxcbiAgICAgICAgICAgICAgICB9KS50aGVuKGRhdGEgPT4geyAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YS5yZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJGhlbGlhckFwcFxuICAgICAgICAgICAgICAgICAgICAgICAgLnJlc2V0UGFzc3dvcmQoZGF0YS50ZXh0LnRyaW0oKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSk9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hbGVydChyZXNwb25zZS5NZW5zYWdlbSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgLmNhdGNoKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFsZXJ0KFwiSW5mZWxpem1lbnRlLCBvY29ycmV1IHVtIGVycm8gYW8gcmVkZWZpbmlyIHN1YSBzZW5oYS5cIik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBmb2N1c1Bhc3N3b3JkKCkge1xuICAgICAgICAgICAgICAgIHRoaXMuJHJlZnMucGFzc3dvcmQubmF0aXZlVmlldy5mb2N1cygpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGZvY3VzQ29uZmlybVBhc3N3b3JkKCkge1xuICAgICAgICAgICAgICAgIGlmICghdGhpcy5pc0xvZ2dpbmdJbikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRyZWZzLmNvbmZpcm1QYXNzd29yZC5uYXRpdmVWaWV3LmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGFsZXJ0KG1lc3NhZ2UpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYWxlcnQoe1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJBdGVuw6fDo29cIixcbiAgICAgICAgICAgICAgICAgICAgb2tCdXR0b25UZXh0OiBcIk9LXCIsXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IG1lc3NhZ2VcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG48L3NjcmlwdD5cblxuXG48c3R5bGUgc2NvcGVkPlxuICAgIC5wYWdlIHtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB9XG5cbiAgICAuZm9ybSB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAzMDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAzMDtcbiAgICAgICAgZmxleC1ncm93OiAyO1xuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIH1cblxuICAgIC5sb2dvIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTI7XG4gICAgICAgIGhlaWdodDogOTA7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIH1cblxuICAgIC5oZWFkZXIge1xuICAgICAgICBob3Jpem9udGFsLWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGZvbnQtc2l6ZTogMjU7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDcwO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGNvbG9yOiAjMDY3QTY1O1xuICAgIH1cblxuICAgICAubWVuc2FnZW0ge1xuICAgICAgICBob3Jpem9udGFsLWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGZvbnQtc2l6ZTogMTY7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgY29sb3I6IHJlZDtcbiAgICB9XG5cbiAgICAuaW5wdXQtZmllbGQge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAyNTtcbiAgICB9XG5cbiAgICAuaW5wdXQge1xuICAgICAgICBmb250LXNpemU6IDE4O1xuICAgICAgICBwbGFjZWhvbGRlci1jb2xvcjogI0E4QThBODtcbiAgICB9XG5cbiAgICAuaW5wdXQ6ZGlzYWJsZWQge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgb3BhY2l0eTogMC41O1xuICAgIH1cblxuICAgIC5idG4tcHJpbWFyeSB7XG4gICAgICAgIG1hcmdpbjogMzAgNSAxNSA1O1xuICAgIH1cblxuICAgIC5sb2dpbi1sYWJlbCB7XG4gICAgICAgIGhvcml6b250YWwtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgY29sb3I6ICNBOEE4QTg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTY7XG4gICAgfVxuXG4gICAgLnNpZ24tdXAtbGFiZWwge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMDtcbiAgICB9XG5cbiAgICAuYm9sZCB7XG4gICAgICAgIGNvbG9yOiAjMDAwMDAwO1xuICAgIH1cbjwvc3R5bGU+IiwiPHRlbXBsYXRlPlxuICAgIDxQYWdlPlxuICAgICAgICA8QWN0aW9uQmFyIHRpdGxlPVwiRGV0YWxoZSBkbyBwZWRpZG9cIj5cbiAgICAgICAgICAgIDxMYWJlbCBjbGFzcz1cImgyXCIgcm93PVwiMFwiIGhvcml6b250YWxBbGlnbm1lbnQ9XCJjZW50ZXJcIj5cbiAgICAgICAgICAgICAgIDxTcGFuIHRleHQ9XCJEZXRhbGhlIGRvIHBlZGlkbzogXCI+IFxuICAgICAgICAgICAgICAgIDwvU3Bhbj5cbiAgICAgICAgICAgICAgICA8U3BhbiA6dGV4dD1cIkNvZGlnb1wiIGNsYXNzPVwiYm9sZFwiPlxuICAgICAgICAgICAgICAgIDwvU3Bhbj5cbiAgICAgICAgICAgIDwvTGFiZWw+XG4gICAgICAgIDwvQWN0aW9uQmFyPlxuICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XCJmb3JtXCI+XG4gICAgICAgICAgICA8U3RhY2tMYXlvdXQgdi1zaG93PVwiIWlzQXZhbGlhY2FvXCI+XG4gICAgICAgICAgICAgICAgPEh0bWxWaWV3IGNsYXNzPVwidGVsZWZvbmVcIlxuICAgICAgICAgICAgICAgICAgICA6aHRtbD1cIlBlZGlkb3MuTG9qYXxGb3JtYXRhTG9qYVwiID4gXG4gICAgICAgICAgICAgICAgPC9IdG1sVmlldz5cbiAgICAgICAgICAgICAgICA8TGFiZWwgY2xhc3M9XCJoM1wiID5cbiAgICAgICAgICAgICAgICAgICAgPEZvcm1hdHRlZFN0cmluZz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxTcGFuIHRleHQ9XCJOb21lIGRvIENsaWVudGU6IFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9TcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFNwYW4gOnRleHQ9XCJQZWRpZG9zLk5vbWVDbGllbnRlXCIgY2xhc3M9XCJib2xkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybWF0dGVkU3RyaW5nPlxuICAgICAgICAgICAgICAgIDwvTGFiZWw+XG4gICAgICAgICAgICAgICAgPExhYmVsIGNsYXNzPVwiaDNcIiB2LXNob3c9XCJpc0FjZWl0byAmJiBQZWRpZG9zLkNQRiAhPSBudWxsXCI+XG4gICAgICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRTdHJpbmc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8U3BhbiB0ZXh0PVwiQ1BGOiBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvU3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxTcGFuIDp0ZXh0PVwiUGVkaWRvcy5DUEZcIiBjbGFzcz1cImJvbGRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvU3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtYXR0ZWRTdHJpbmc+XG4gICAgICAgICAgICAgICAgPC9MYWJlbD5cbiAgICAgICAgICAgICAgICA8TGFiZWwgY2xhc3M9XCJoM1wiIHYtc2hvdz1cImlzQWNlaXRvICYmIFBlZGlkb3MuRW1haWwgIT0gbnVsbFwiPlxuICAgICAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkU3RyaW5nPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFNwYW4gdGV4dD1cIkVtYWlsOiBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvU3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxTcGFuIDp0ZXh0PVwiUGVkaWRvcy5FbWFpbFwiIGNsYXNzPVwiYm9sZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9TcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm1hdHRlZFN0cmluZz5cbiAgICAgICAgICAgICAgICA8L0xhYmVsPlxuICAgICAgICAgICAgICAgIDxTdGFja0xheW91dCBvcmllbnRhdGlvbj1cImhvcml6b250YWxcIj5cbiAgICAgICAgICAgICAgICAgICAgPEh0bWxWaWV3IHYtc2hvdz1cImlzQWNlaXRvICYmIFBlZGlkb3MuVGVsZWZvbmUgIT0gbnVsbFwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgOmh0bWw9XCJQZWRpZG9zLlRlbGVmb25lfEZvcm1hdGFUZWxlZm9uZVwiIGNsYXNzPVwidGVsZWZvbmUgdGVsZWZvbmUtZm9ybWF0XCI+ICBcbiAgICAgICAgICAgICAgICAgICAgPC9IdG1sVmlldz5cbiAgICAgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxuICAgICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0IG9yaWVudGF0aW9uPVwiaG9yaXpvbnRhbFwiPlxuICAgICAgICAgICAgICAgICAgICA8SHRtbFZpZXcgdi1zaG93PVwiaXNBY2VpdG8gJiYgUGVkaWRvcy5UZWxlZm9uZSAhPSBudWxsXCIgXG4gICAgICAgICAgICAgICAgICAgICAgICA6aHRtbD1cIlBlZGlkb3MuVGVsZWZvbmV8Rm9ybWF0YVdoYXRzXCIgY2xhc3M9XCJ0ZWxlZm9uZSB3aGF0cy1mb3JtYXRcIj4gIFxuICAgICAgICAgICAgICAgICAgICA8L0h0bWxWaWV3PlxuICAgICAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XG4gICAgICAgICAgICAgICAgPExhYmVsIGNsYXNzPVwiaDNcIj5cbiAgICAgICAgICAgICAgICAgICAgPEZvcm1hdHRlZFN0cmluZz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxTcGFuIHRleHQ9XCJWZWljdWxvOiBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvU3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxTcGFuIDp0ZXh0PVwiUGVkaWRvcy5Nb2RlbG9cIiBjbGFzcz1cImJvbGRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvU3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtYXR0ZWRTdHJpbmc+XG4gICAgICAgICAgICAgICAgPC9MYWJlbD5cbiAgICAgICAgICAgICAgICA8TGFiZWwgY2xhc3M9XCJoM1wiPlxuICAgICAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkU3RyaW5nPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFNwYW4gdGV4dD1cIlByb2R1dG86IFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9TcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFNwYW4gOnRleHQ9XCJQZWRpZG9zLkJhdGVyaWFcIiBjbGFzcz1cImJvbGRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvU3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtYXR0ZWRTdHJpbmc+XG4gICAgICAgICAgICAgICAgPC9MYWJlbD5cbiAgICAgICAgICAgICAgICA8TGFiZWwgY2xhc3M9XCJoM1wiPlxuICAgICAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkU3RyaW5nPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFNwYW4gdGV4dD1cIkZvcm1hIGRlIFBhZ2FtZW50bzogXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8U3BhbiA6dGV4dD1cIlBlZGlkb3MuRm9ybWFEZVBhZ2FtZW50b1wiIGNsYXNzPVwiYm9sZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9TcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm1hdHRlZFN0cmluZz5cbiAgICAgICAgICAgICAgICA8L0xhYmVsPlxuICAgICAgICAgICAgICAgIDxMYWJlbCBjbGFzcz1cImgzXCIgdi1zaG93PVwiUGVkaWRvcy5EZXNjb250byA+IDBcIj5cbiAgICAgICAgICAgICAgICAgICAgPEZvcm1hdHRlZFN0cmluZz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxTcGFuIHRleHQ9XCJEZXNjb250bzogXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8U3BhbiA6dGV4dD1cIlBlZGlkb3MuRGVzY29udG98Rm9ybWF0YVZhbG9yXCIgY2xhc3M9XCJib2xkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybWF0dGVkU3RyaW5nPlxuICAgICAgICAgICAgICAgIDwvTGFiZWw+XG4gICAgICAgICAgICAgICAgPExhYmVsIGNsYXNzPVwiaDNcIiB2LXNob3c9XCJQZWRpZG9zLlZhbG9yVG90YWxQZWRpZG8gPiAwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRTdHJpbmc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8U3BhbiB0ZXh0PVwiVG90YWw6IFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9TcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFNwYW4gOnRleHQ9XCJQZWRpZG9zLlZhbG9yVG90YWxQZWRpZG98Rm9ybWF0YVZhbG9yXCIgY2xhc3M9XCJib2xkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybWF0dGVkU3RyaW5nPlxuICAgICAgICAgICAgICAgIDwvTGFiZWw+XG4gICAgICAgICAgICAgICAgPExhYmVsIGNsYXNzPVwiaDNcIiB2LXNob3c9XCJQZWRpZG9zLkZvcm1hUGFnYW1lbnRvICE9IG51bGxcIj5cbiAgICAgICAgICAgICAgICAgICAgPEZvcm1hdHRlZFN0cmluZz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxTcGFuIHRleHQ9XCJQYWdhbWVudG86IFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9TcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFNwYW4gOnRleHQ9XCJQZWRpZG9zLkZvcm1hUGFnYW1lbnRvXCIgY2xhc3M9XCJib2xkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybWF0dGVkU3RyaW5nPlxuICAgICAgICAgICAgICAgIDwvTGFiZWw+XG4gICAgICAgICAgICAgICAgPExhYmVsIGNsYXNzPVwiaDNcIiB2LXNob3c9XCJQZWRpZG9zLlRyb2NvID4gMFwiPlxuICAgICAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkU3RyaW5nPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFNwYW4gdGV4dD1cIlRyb2NvOiBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvU3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxTcGFuIDp0ZXh0PVwiUGVkaWRvcy5Ucm9jb3xGb3JtYXRhVmFsb3JcIiBjbGFzcz1cImJvbGRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvU3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtYXR0ZWRTdHJpbmc+XG4gICAgICAgICAgICAgICAgPC9MYWJlbD5cbiAgICAgICAgICAgICAgICA8TGFiZWwgY2xhc3M9XCJoM1wiPlxuICAgICAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkU3RyaW5nPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFNwYW4gdGV4dD1cIkRhdGEgZGEgRW50cmVnYTogXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8U3BhbiA6dGV4dD1cIlBlZGlkb3MuRGF0YUVudHJlZ2F8Rm9ybWF0YURhdGFcIiBjbGFzcz1cImJvbGRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvU3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtYXR0ZWRTdHJpbmc+XG4gICAgICAgICAgICAgICAgPC9MYWJlbD5cbiAgICAgICAgICAgICAgICA8TGFiZWwgY2xhc3M9XCJoM1wiPlxuICAgICAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkU3RyaW5nPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFNwYW4gdGV4dD1cIkhvcsOhcmlvIGRhIEVudHJlZ2E6IFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9TcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFNwYW4gOnRleHQ9XCJQZWRpZG9zLkRhdGFFbnRyZWdhfEZvcm1hdGFIb3JhcmlvXCIgY2xhc3M9XCJib2xkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybWF0dGVkU3RyaW5nPlxuICAgICAgICAgICAgICAgIDwvTGFiZWw+XG4gICAgICAgICAgICAgICAgPExhYmVsIGNsYXNzPVwiaDNcIiB2LXNob3c9XCIhaXNBY2VpdG9cIj5cbiAgICAgICAgICAgICAgICAgICAgPEZvcm1hdHRlZFN0cmluZz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxTcGFuIHRleHQ9XCJCYWlycm86IFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9TcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFNwYW4gOnRleHQ9XCJQZWRpZG9zLkJhaXJyb1wiIGNsYXNzPVwiYm9sZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9TcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm1hdHRlZFN0cmluZz5cbiAgICAgICAgICAgICAgICA8L0xhYmVsPlxuICAgICAgICAgICAgICAgIDxIdG1sVmlldyB2LXNob3c9XCJpc0FjZWl0byAmJiBQZWRpZG9zLkVuZGVyZWNvICE9IG51bGxcIlxuICAgICAgICAgICAgICAgICAgICA6aHRtbD1cIlBlZGlkb3MuRW5kZXJlY298Rm9ybWF0YUVuZGVyZWNvXCIgY2xhc3M9XCJ0ZWxlZm9uZVwiPiBcbiAgICAgICAgICAgICAgICA8L0h0bWxWaWV3PlxuICAgICAgICAgICAgICAgIDxTdGFja0xheW91dCBvcmllbnRhdGlvbj1cImhvcml6b250YWxcIiB2LXNob3c9XCJpc0FjZWl0byAmJiBQZWRpZG9zLkVuZGVyZWNvICE9IG51bGxcIj5cbiAgICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz1cIn4vaW1hZ2VzL21hcGEucG5nXCIgY2xhc3M9XCJpbWctbWFwYVwiIEB0YXA9XCJhYnJpck1hcGFcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPVwifi9pbWFnZXMvc2hhcmUucG5nXCIgY2xhc3M9XCJpbWctbWFwYS1jb21wYXJ0aWxoYXJcIiBAdGFwPVwiY29tcGFydGlsaGFyTWFwYVwiIC8+XG4gICAgICAgICAgICAgICAgPC9TdGFja0xheW91dD5cbiAgICAgICAgICAgICAgICA8TGFiZWwgY2xhc3M9XCJoM1wiPlxuICAgICAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkU3RyaW5nPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFNwYW4gdGV4dD1cIkRpc3TDom5jaWEgYXByb3hpbWFkYTogXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8U3BhbiA6dGV4dD1cIlBlZGlkb3MuRGlzdGFuY2lhQXByb3hpbWFkYXxGb3JtYXRhRGlzdGFuY2lhXCIgY2xhc3M9XCJib2xkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybWF0dGVkU3RyaW5nPlxuICAgICAgICAgICAgICAgIDwvTGFiZWw+XG4gICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxuXG4gICAgICAgICAgICA8U3RhY2tMYXlvdXQgdi1zaG93PVwiaXNBdmFsaWFjYW9cIj5cbiAgICAgICAgICAgICAgICA8TGFiZWwgY2xhc3M9XCJoMlwiIHJvdz1cIjBcIiBob3Jpem9udGFsQWxpZ25tZW50PVwiY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRTdHJpbmc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8U3BhbiB0ZXh0PVwiQXZhbGlhw6fDo28gZG8gcGVkaWRvOiBcIj4gXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8U3BhbiA6dGV4dD1cIkNvZGlnb1wiIGNsYXNzPVwiYm9sZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9TcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm1hdHRlZFN0cmluZz5cbiAgICAgICAgICAgICAgICA8L0xhYmVsPlxuICAgICAgICAgICAgICAgIDxMYWJlbCBjbGFzcz1cImgzXCIgdGV4dFdyYXA9XCJ0cnVlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRTdHJpbmc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8U3BhbiB0ZXh0PVwiTyBwZWRpZG8gZm9pIGVudHJlZ3VlIGNvcnJldGFtZW50ZTogXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8U3BhbiA6dGV4dD1cIkF2YWxpYWNhby5FbnRyZWd1ZUNvcnJldGFtZW50ZXxGb3JtYXRhQm9sZWFub1wiIGNsYXNzPVwiYm9sZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9TcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm1hdHRlZFN0cmluZz5cbiAgICAgICAgICAgICAgICA8L0xhYmVsPlxuICAgICAgICAgICAgICAgIDxMYWJlbCBjbGFzcz1cImgzXCIgdGV4dFdyYXA9XCJ0cnVlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRTdHJpbmc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8U3BhbiB0ZXh0PVwiTyBwcm9kdXRvIGZvaSBlbnRyZWd1ZSBubyBsb2NhbCBlIGhvcsOhcmlvIGFnZW5kYWRvOiBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvU3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxTcGFuIDp0ZXh0PVwiQXZhbGlhY2FvLkxvY2FsSG9yYXJpb3xGb3JtYXRhQm9sZWFub1wiIGNsYXNzPVwiYm9sZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9TcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm1hdHRlZFN0cmluZz5cbiAgICAgICAgICAgICAgICA8L0xhYmVsPlxuICAgICAgICAgICAgICAgIDxMYWJlbCBjbGFzcz1cImgzXCIgdGV4dFdyYXA9XCJ0cnVlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRTdHJpbmc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8U3BhbiB0ZXh0PVwiT2NvcnJldSB0dWRvIGJlbSBjb20gYSBpbnN0YWxhw6fDo286IFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9TcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFNwYW4gOnRleHQ9XCJBdmFsaWFjYW8uSW5zdGFsYWNhb3xGb3JtYXRhQm9sZWFub1wiIGNsYXNzPVwiYm9sZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9TcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm1hdHRlZFN0cmluZz5cbiAgICAgICAgICAgICAgICA8L0xhYmVsPlxuICAgICAgICAgICAgICAgIDxMYWJlbCBjbGFzcz1cImgzXCIgdGV4dFdyYXA9XCJ0cnVlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRTdHJpbmc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8U3BhbiB0ZXh0PVwiRW0gdW1hIGVzY2FsYSBkZSAwIGEgMTAsIHF1YW50byB2b2PDqiByZWNvbWVuZGFyaWEgbyBIZWxpYXIgRXhwcmVzczogXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8U3BhbiA6dGV4dD1cIkF2YWxpYWNhby5Ob3RhXCIgY2xhc3M9XCJib2xkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybWF0dGVkU3RyaW5nPlxuICAgICAgICAgICAgICAgIDwvTGFiZWw+XG4gICAgICAgICAgICAgICAgPExhYmVsIGNsYXNzPVwiaDNcIiB0ZXh0V3JhcD1cInRydWVcIj5cbiAgICAgICAgICAgICAgICAgICAgPEZvcm1hdHRlZFN0cmluZz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxTcGFuIHRleHQ9XCJQb3JxdWUgZXNjb2xoZXUgY29tcHJhciBubyBIZWxpYXIgRXhwcmVzczogXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8U3BhbiA6dGV4dD1cIkF2YWxpYWNhby5NZW5zYWdlbVwiIGNsYXNzPVwiYm9sZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9TcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm1hdHRlZFN0cmluZz5cbiAgICAgICAgICAgICAgICA8L0xhYmVsPlxuICAgICAgICAgICAgICAgIDxMYWJlbCBjbGFzcz1cImgzXCIgdGV4dFdyYXA9XCJ0cnVlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRTdHJpbmc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8U3BhbiB0ZXh0PVwiT2JzZXJ2YcOnw6NvOiBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvU3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxTcGFuIDp0ZXh0PVwiQXZhbGlhY2FvLk9ic2VydmFjYW9cIiBjbGFzcz1cImJvbGRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvU3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtYXR0ZWRTdHJpbmc+XG4gICAgICAgICAgICAgICAgPC9MYWJlbD5cbiAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XG5cbiAgICAgICAgICAgIDxCdXR0b24gY2xhc3M9XCJidG4gZXNwYWNhbWVudG8gYnRuLXByaW1hcnkgYnRuLWdyZWVuXCIgdi1zaG93PVwiIUhpc3RvcmljbyAmJiAhaXNBY2VpdG9cIiB0ZXh0PVwiQWNlaXRhclwiIEB0YXA9XCJhY2VpdGFyXCI+PC9CdXR0b24+XG4gICAgICAgICAgICA8QnV0dG9uIGNsYXNzPVwiYnRuIGVzcGFjYW1lbnRvIGJ0bi1wcmltYXJ5IGJ0bi1yZWRcIiAgdi1zaG93PVwiIUhpc3RvcmljbyAmJiAhaXNBY2VpdG9cIiB0ZXh0PVwicmVjdXNhclwiIEB0YXA9XCJyZWplaXRhclwiPjwvQnV0dG9uPlxuXG4gICAgICAgICAgICA8QnV0dG9uIGNsYXNzPVwiYnRuIGVzcGFjYW1lbnRvIGJ0bi1wcmltYXJ5IGJ0bi1ncmVlblwiIHYtc2hvdz1cIkhpc3RvcmljbyAmJiBpc0VuY2VycmFyXCIgdGV4dD1cIkZpbmFsaXphciBQZWRpZG9cIiBAdGFwPVwiZW5jZXJyYXJcIj48L0J1dHRvbj5cbiAgICAgICAgICAgIDxCdXR0b24gY2xhc3M9XCJidG4gZXNwYWNhbWVudG8gYnRuLXByaW1hcnkgYnRuLXJlZFwiICB2LXNob3c9XCJIaXN0b3JpY28gJiYgaXNDYW5jZWxhclwiIHRleHQ9XCJDYW5jZWxhciBQZWRpZG9cIiBAdGFwPVwiY2FuY2VsYXJcIj48L0J1dHRvbj5cbiAgICAgICAgICAgIDxCdXR0b24gY2xhc3M9XCJidG4gZXNwYWNhbWVudG8gYnRuLXByaW1hcnkgYnRuLW9yYW5nZVwiIHYtc2hvdz1cImlzQXZhbGlhY2FvQm90YW9cIiB0ZXh0PVwiQXZhbGlhw6fDo29cIiBAdGFwPVwiYXZhbGlhY2FvXCI+PC9CdXR0b24+XG4gICAgICAgICAgICA8QnV0dG9uIGNsYXNzPVwiYnRuIGVzcGFjYW1lbnRvIGJ0bi1wcmltYXJ5IGJ0bi1ncmV5XCIgdi1zaG93PVwiaXNCb3Rhb1ZvbHRhclwiIHRleHQ9XCJWb2x0YXJcIiBAdGFwPVwidm9sdGFyXCI+PC9CdXR0b24+XG4gICAgICAgICAgICA8QnV0dG9uIGNsYXNzPVwiYnRuIGVzcGFjYW1lbnRvIGJ0bi1wcmltYXJ5IGJ0bi1ncmV5XCIgdi1zaG93PVwiaXNBdmFsaWFjYW9Cb3Rhb1ZvbHRhclwiIHRleHQ9XCJWb2x0YXIgYW8gcGVkaWRvXCIgQHRhcD1cInZvbHRhclBlZGlkb1wiPjwvQnV0dG9uPlxuICAgICAgICA8L1N0YWNrTGF5b3V0PlxuICAgIDwvUGFnZT5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gICAgaW1wb3J0IEhvbWUgZnJvbSBcIi4vSG9tZVwiO1xuICAgIGltcG9ydCBQZWRpZG8gZnJvbSBcIi4vUGVkaWRvXCI7XG4gICAgaW1wb3J0IENvbmZpZyBmcm9tIFwiLi4vX2NvbmZpZy9fY29uZmlnXCI7XG4gICAgY29uc3QgdXRpbHNNb2R1bGUgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91dGlscy91dGlsc1wiKTtcblxuICAgIHZhciBjb25maWcgPSBuZXcgQ29uZmlnKCk7XG4gICAgY29uc3QgeyBhbGVydCwgY29uZmlybSwgcHJvbXB0LCBsb2dpbiwgYWN0aW9uLCBpbnB1dFR5cGUgfSA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2RpYWxvZ3NcIik7XG5cbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIGRhdGEoKSB7XG4gICAgICAgICAgIHJldHVybiB7IFxuICAgICAgICAgICAgICAgIFBlZGlkb3MgOiAnJywgXG4gICAgICAgICAgICAgICAgaXNBY2VpdG8gOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBIaXN0b3JpY28gOiB0cnVlLFxuICAgICAgICAgICAgICAgIEF2YWxpYWNhbyA6ICcnLCBcbiAgICAgICAgICAgICAgICBpc0F2YWxpYWNhbyA6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGlzQXZhbGlhY2FvQm90YW8gOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBpc0F2YWxpYWNhb0JvdGFvVm9sdGFyIDogZmFsc2UsXG4gICAgICAgICAgICAgICAgaXNCb3Rhb1ZvbHRhciA6IHRydWUsXG4gICAgICAgICAgICAgICAgaXNFbmNlcnJhciA6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGlzQ2FuY2VsYXIgOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBEYXRhRGU6IG51bGwsXG4gICAgICAgICAgICAgICAgRGF0YUF0ZTogbnVsbCxcbiAgICAgICAgICAgICAgICBTdGF0dXM6IG51bGxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICAgIHByb3BzOiBbXCJDb2RpZ29cIiwgXCJIaXN0b3JpY29cIiwgXCJEYXRhRGVcIiwgXCJEYXRhQXRlXCIsIFwiU3RhdHVzXCJdLFxuICAgICAgICBjcmVhdGVkKCkgeyAgIFxuICAgICAgICAgICAgdGhpcy5kZXRhbGhlUGVkaWRvKHRoaXMuQ29kaWdvKTtcbiAgICAgICAgfSxcbiAgICAgICAgZmlsdGVyczoge1xuICAgICAgICAgICAgRm9ybWF0YURhdGE6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHZhciBkID0gbmV3IERhdGUodmFsdWUpLFxuICAgICAgICAgICAgICAgIG1lcyA9ICcnICsgKGQuZ2V0TW9udGgoKSArIDEpLFxuICAgICAgICAgICAgICAgIGRpYSA9ICcnICsgZC5nZXREYXRlKCksXG4gICAgICAgICAgICAgICAgYW5vID0gZC5nZXRGdWxsWWVhcigpO1xuXG4gICAgICAgICAgICAgICAgaWYgKG1lcy5sZW5ndGggPCAyKSBtZXMgPSAnMCcgKyBtZXM7XG4gICAgICAgICAgICAgICAgaWYgKGRpYS5sZW5ndGggPCAyKSBkaWEgPSAnMCcgKyBkaWE7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gW2RpYSwgbWVzLCBhbm9dLmpvaW4oJy8nKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBGb3JtYXRhSG9yYXJpbzogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgdmFyIGQgPSBuZXcgRGF0ZSh2YWx1ZSksXG4gICAgICAgICAgICAgICAgaG9yYSA9ICcnICsgKGQuZ2V0SG91cnMoKSksXG4gICAgICAgICAgICAgICAgbWludXRvID0gJycgKyBkLmdldE1pbnV0ZXMoKTtcblxuICAgICAgICAgICAgICAgIGlmIChob3JhLmxlbmd0aCA8IDIpIGhvcmEgPSAnMCcgKyBob3JhO1xuICAgICAgICAgICAgICAgIGlmIChtaW51dG8ubGVuZ3RoIDwgMikgbWludXRvID0gJzAnICsgbWludXRvO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHJldHVybiBob3JhICsgXCI6XCIgKyBtaW51dG87XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgRm9ybWF0YUJvbGVhbm86IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIGlmKHZhbHVlID09ICdmYWxzZScpe1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9ICdOw6NvJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gJ1NpbSc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBGb3JtYXRhVmFsb3I6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHZhciB2YWxvciA9IHBhcnNlRmxvYXQodmFsdWUpO1xuICAgICAgICAgICAgICAgIHJldHVybiBcIlIkIFwiICsgdmFsb3IudG9GaXhlZCgyKS5yZXBsYWNlKCcuJywgJywnKS5yZXBsYWNlKC8oXFxkKSg/PShcXGR7M30pK1xcLCkvZywgXCIkMS5cIik7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgRm9ybWF0YVRlbGVmb25lOiBmdW5jdGlvbiAodmFsdWUpe1xuICAgICAgICAgICAgICAgIGlmKHZhbHVlID09IHVuZGVmaW5lZCkgeyByZXR1cm4gJycgfTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB2YXIgdGVsID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgdGVsID0gdGVsLnJlcGxhY2UoJygnLCAnJykucmVwbGFjZSgnKScsICcnKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gXCI8bGFiZWwgdGV4dFdyYXA9J3RydWUnPjxzcGFuPlRlbDwvc3Bhbj46IFwiICsgdGVsICsgXCI8bGFiZWw+XCI7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgRm9ybWF0YVdoYXRzOiBmdW5jdGlvbiAodmFsdWUpe1xuICAgICAgICAgICAgICAgIGlmKHZhbHVlID09IHVuZGVmaW5lZCkgeyByZXR1cm4gJycgfTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB2YXIgdGVsID0gdmFsdWUuc3BsaXQoXCIjXCIpWzBdO1xuXG4gICAgICAgICAgICAgICAgdmFyIHRlbEZvcm1hdGFkbyA9IHRlbDtcbiAgICAgICAgICAgICAgICB0ZWwgPSB0ZWwucmVwbGFjZSgnKCcsICcnKS5yZXBsYWNlKCcpJywgJycpLnJlcGxhY2UoJyAnLCAnJykucmVwbGFjZSgnLScsICcnKTtcbiAgICAgICAgICAgICAgICB0ZWxGb3JtYXRhZG8gPSB0ZWxGb3JtYXRhZG8ucmVwbGFjZSgnKCcsICcnKS5yZXBsYWNlKCcpJywgJyAnKS5yZXBsYWNlKCcgJywgJycpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHJldHVybiAgXCI8bGFiZWwgdGV4dFdyYXA9J3RydWUnPjxzcGFuPldoYXRzPC9zcGFuPjogPGEgY2xhc3M9J2JvbGQnIGhyZWY9J2h0dHBzOi8vYXBpLndoYXRzYXBwLmNvbS9zZW5kP3Bob25lPTU1XCIgKyB0ZWwgK1xuICAgICAgICAgICAgICAgICAgXCIgJnRleHQ9T2wlQzMlQTElMkMlMjB0dWRvJTIwYmVtJTNGJm5ic3A7Jz5cIiArIHRlbEZvcm1hdGFkbyArIFwiPC9hPjwvbGFiZWw+XCI7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgRm9ybWF0YUVuZGVyZWNvOiBmdW5jdGlvbiAodmFsdWUpe1xuICAgICAgICAgICAgICAgIGlmKHZhbHVlID09IHVuZGVmaW5lZCkgeyByZXR1cm4gJycgfTtcblxuICAgICAgICAgICAgICAgIHJldHVybiBcIjxsYWJlbCB0ZXh0V3JhcD0ndHJ1ZSc+PHNwYW4+RW5kZXJlw6dvPC9zcGFuPjogPGI+IFwiICsgdmFsdWUgKyBcIjwvYj4gPC9sYWJlbD5cIjtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgRm9ybWF0YUxvamE6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBcIjxsYWJlbCB0ZXh0V3JhcD0ndHJ1ZSc+PHNwYW4+TG9qYTwvc3Bhbj46IDxiPiBcIiArIHZhbHVlICsgXCI8L2I+PC9sYWJlbD5cIjtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBGb3JtYXRhRGlzdGFuY2lhOiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWUgKyBcIiBLTVwiO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgbWV0aG9kczoge1xuICAgICAgICAgICAgZGV0YWxoZVBlZGlkbyhjb2RpZ28pIHtcbiAgICAgICAgICAgICAgIHRoaXMuJGhlbGlhckFwcFxuICAgICAgICAgICAgICAgICAgICAuZGV0YWxoZVBlZGlkbyhjb2RpZ28pXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSk9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgIHRoaXMuUGVkaWRvcyA9IHJlc3BvbnNlLlBlZGlkb3M7XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuU3RhdHVzKTtcblxuICAgICAgICAgICAgICAgICAgICAgICBpZih0aGlzLkhpc3RvcmljbyA9PSB0cnVlKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlzQWNlaXRvID0gdHJ1ZTsgIFxuICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgaWYodGhpcy5QZWRpZG9zLkNvZGlnb1N0YXR1cyA9PSA2IHx8IHRoaXMuUGVkaWRvcy5Db2RpZ29TdGF0dXMgPT0gNSB8fCB0aGlzLlBlZGlkb3MuQ29kaWdvU3RhdHVzID09IDEwKXsgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pc0VuY2VycmFyID0gZmFsc2U7IC8vIDYgPSBwZWRpZG8gZmluYWxpemFkb1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXNDYW5jZWxhciA9IGZhbHNlOyAvLyA1ID0gcGVkaWRvIGNhbmNlbGFkb1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXNBY2VpdG8gPSBmYWxzZTsgLy8gMTAgPSAgcGVkaWRvIGVudHJlZ3VlXG4gICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZih0aGlzLkhpc3RvcmljbyA9PSB0cnVlKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlzRW5jZXJyYXIgPSB0cnVlOyAvLyA2ID0gcGVkaWRvIGZpbmFsaXphZG9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlzQ2FuY2VsYXIgPSB0cnVlOyAvLyA1ID0gcGVkaWRvIGNhbmNlbGFkb1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZih0aGlzLkhpc3RvcmljbyA9PSBcInRydWVcIil7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlzQWNlaXRvID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuSGlzdG9yaWNvID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXNFbmNlcnJhciA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlzQ2FuY2VsYXIgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYodGhpcy5IaXN0b3JpY28gPT0gXCJmYWxzZVwiKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXNBY2VpdG8gPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuSGlzdG9yaWNvID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICBpZihyZXNwb25zZS5QZWRpZG9zLkF2YWxpYWNvZXNQZWRpZG9Nb2JpbGUgIT0gbnVsbCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5BdmFsaWFjYW8gPSByZXNwb25zZS5QZWRpZG9zLkF2YWxpYWNvZXNQZWRpZG9Nb2JpbGU7ICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlzQXZhbGlhY2FvQm90YW8gPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFsZXJ0KFwiRXJybyBhbyBlbmNvbnRyYXIgc2V1IHBlZGlkb1wiKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYWJyaXJNYXBhKCl7XG4gICAgICAgICAgICAgICAgdXRpbHNNb2R1bGUub3BlblVybCgnaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9tYXBzL3BsYWNlLycgKyB0aGlzLlBlZGlkb3MuRW5kZXJlY28ucmVwbGFjZSgnLycsICcrJykucmVwbGFjZSgnIC0gJywgJywnKVxuICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgnIC0nLCAnLCcpLnJlcGxhY2UoJy0gJywgJywnKS5yZXBsYWNlKCctJywgJywnKS5yZXBsYWNlKCcgJywgJysnKS5yZXBsYWNlKCcgJywgJysnKVxuICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgnICcsICcrJykucmVwbGFjZSgnICcsICcrJykucmVwbGFjZSgnICcsICcrJykucmVwbGFjZSgnICcsICcrJykpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNvbXBhcnRpbGhhck1hcGEoKXtcbiAgICAgICAgICAgICAgICB1dGlsc01vZHVsZS5vcGVuVXJsKCdodHRwczovL2FwaS53aGF0c2FwcC5jb20vc2VuZD90ZXh0PWh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vbWFwcy9wbGFjZS8nICsgdGhpcy5QZWRpZG9zLkVuZGVyZWNvLnJlcGxhY2UoJy8nLCAnLicpLnJlcGxhY2UoJyAtICcsICcsJylcbiAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoJyAtJywgJywnKS5yZXBsYWNlKCctICcsICcsJykucmVwbGFjZSgnLScsICcsJykucmVwbGFjZSgnICcsICcuJykucmVwbGFjZSgnICcsICcuJylcbiAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoJyAnLCAnLicpLnJlcGxhY2UoJyAnLCAnLicpLnJlcGxhY2UoJyAnLCAnLicpLnJlcGxhY2UoJyAnLCAnLicpKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB2b2x0YXIoKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5TdGF0dXMpO1xuICAgICAgICAgICAgICAgIHRoaXMuJG5hdmlnYXRlVG8oSG9tZSwge1xuICAgICAgICAgICAgICAgICAgICBjbGVhckhpc3Rvcnk6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgSGlzdG9yaWNvOiB0aGlzLkhpc3RvcmljbyxcbiAgICAgICAgICAgICAgICAgICAgICAgIERhdGFEZUZpbHRybzogdGhpcy5EYXRhRGUsXG4gICAgICAgICAgICAgICAgICAgICAgICBEYXRhQXRlRmlsdHJvOiB0aGlzLkRhdGFBdGUsXG4gICAgICAgICAgICAgICAgICAgICAgICBTdGF0dXNGaWx0cm86IHRoaXMuU3RhdHVzXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB2b2x0YXJQZWRpZG8oKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pc0F2YWxpYWNhbyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMuaXNBdmFsaWFjYW9Cb3Rhb1ZvbHRhciA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMuaXNBdmFsaWFjYW9Cb3RhbyA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5pc0JvdGFvVm9sdGFyID0gdHJ1ZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBhdmFsaWFjYW8oKSB7XG4gICAgICAgICAgICAgICB0aGlzLmlzQXZhbGlhY2FvID0gdHJ1ZTtcbiAgICAgICAgICAgICAgIHRoaXMuaXNBdmFsaWFjYW9Cb3Rhb1ZvbHRhciA9IHRydWU7XG4gICAgICAgICAgICAgICB0aGlzLmlzQXZhbGlhY2FvQm90YW8gPSBmYWxzZTsgXG4gICAgICAgICAgICAgICB0aGlzLmlzQm90YW9Wb2x0YXIgPSBmYWxzZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlbmNlcnJhcigpIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRoZWxpYXJBcHBcbiAgICAgICAgICAgICAgICAuZW5jZXJyYXJQZWRpZG8odGhpcy5Db2RpZ28pXG4gICAgICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKT0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYocmVzcG9uc2UuU3RhdHVzID09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXNFbmNlcnJhciA9IGZhbHNlOyBcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXNDYW5jZWxhciA9IGZhbHNlOyAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hbGVydChyZXNwb25zZS5NZW5zYWdlbSk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuY2F0Y2goKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFsZXJ0KFwiRXJybyBhbyBhY2VpdGFyIG8gcGVkaWRvXCIpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGFjZWl0YXIoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kaGVsaWFyQXBwXG4gICAgICAgICAgICAgICAgLmFjZWl0YXJQZWRpZG8odGhpcy5Db2RpZ28sIHRydWUsICcnLCAnJylcbiAgICAgICAgICAgICAgICAudGhlbigocmVzcG9uc2UpPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZihyZXNwb25zZS5TdGF0dXMgPT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pc0FjZWl0byA9IHRydWU7ICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hbGVydChyZXNwb25zZS5NZW5zYWdlbSk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuY2F0Y2goKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFsZXJ0KFwiRXJybyBhbyBhY2VpdGFyIG8gcGVkaWRvXCIpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSwgICAgICAgICAgIFxuICAgICAgICAgICAgcmVqZWl0YXIoKSB7XG4gICAgICAgICAgICAgICAgdmFyIGRpYWxvZ3MgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9kaWFsb2dzXCIpOyAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGRpYWxvZ3MuYWN0aW9uKHtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiRGVzZWphIHJlYWxtZW50ZSBSZWN1c2FyPyBJbmZvcm1lIHVtIG1vdGl2b1wiLFxuICAgICAgICAgICAgICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiBcIkNhbmNlbGFyXCIsXG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbnM6IHRoaXMuUGVkaWRvcy5KdXN0aWZpY2F0aXZhc1JlamVpY29lc1BlZGlkb1xuICAgICAgICAgICAgICAgIH0pLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB2YXIgcmVzcG9zdGEgPSByZXN1bHQ7XG5cbiAgICAgICAgICAgICAgICAgICAgIGlmKHJlc3VsdCA9PSBcIkNhbmNlbGFyXCIpe1xuICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgIH0gXG5cbiAgICAgICAgICAgICAgICAgICAgaWYocmVzdWx0ID09IFwiT3V0cm9cIil7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9tcHQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIkRlc2VqYSByZWFsbWVudGUgUmVjdXNhcj8gRGVzY3JldmEgbyBtb3Rpdm9cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBva0J1dHRvblRleHQ6IFwiUmVjdXNhclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6IFwiQ2FuY2VsYXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VGV4dDogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHJlc3VsdC5yZXN1bHQgPT0gZmFsc2Upe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRoZWxpYXJBcHBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVjdXNhclBlZGlkbyh0aGlzLkNvZGlnbywgZmFsc2UsIHJlc3Bvc3RhLCByZXN1bHQudGV4dC50cmltKCkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKT0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYocmVzcG9uc2UuU3RhdHVzID09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXNBY2VpdG8gPSBmYWxzZTsgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLkhpc3RvcmljbyA9IHRydWU7ICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFsZXJ0KHJlc3BvbnNlLk1lbnNhZ2VtKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jYXRjaCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWxlcnQoXCJFcnJvIGFvIHJlY3VzYXIgbyBwZWRpZG9cIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kaGVsaWFyQXBwXG4gICAgICAgICAgICAgICAgICAgICAgICAucmVjdXNhclBlZGlkbyh0aGlzLkNvZGlnbywgZmFsc2UsIHJlc3Bvc3RhLCcnKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKT0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihyZXNwb25zZS5TdGF0dXMgPT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlzQWNlaXRvID0gZmFsc2U7ICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuSGlzdG9yaWNvID0gdHJ1ZTsgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hbGVydChyZXNwb25zZS5NZW5zYWdlbSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgLmNhdGNoKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFsZXJ0KFwiRXJybyBhbyByZWN1c2FyIG8gcGVkaWRvXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sICAgXG4gICAgICAgICAgICBjYW5jZWxhcigpIHtcbiAgICAgICAgICAgICAgICB2YXIgZGlhbG9ncyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2RpYWxvZ3NcIik7XG4gICAgICAgICAgICAgICAgZGlhbG9ncy5hY3Rpb24oe1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJEZXNlamEgcmVhbG1lbnRlIGNhbmNlbGFyIG8gcGVkaWRvPyBJbmZvcm1lIHVtIG1vdGl2b1wiLFxuICAgICAgICAgICAgICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiBcIkNhbmNlbGFyXCIsXG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbnM6IHRoaXMuUGVkaWRvcy5KdXN0aWZpY2F0aXZhc1JlamVpY29lc1BlZGlkb1xuICAgICAgICAgICAgICAgIH0pLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB2YXIgcmVzcG9zdGEgPSByZXN1bHQ7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBpZihyZXN1bHQgPT0gXCJDYW5jZWxhclwiKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmKHJlc3VsdCA9PSBcIk91dHJvXCIpe1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvbXB0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJEZXNlamEgcmVhbG1lbnRlIGNhbmNlbGFyIG8gcGVkaWRvPyBJbmZvcm1lIHVtIG1vdGl2b1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJSZWN1c2FyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FuY2VsQnV0dG9uVGV4dDogXCJDYW5jZWxhclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRUZXh0OiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSkudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYocmVzdWx0LnJlc3VsdCA9PSBmYWxzZSl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IFxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJGhlbGlhckFwcFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jYW5jZWxhclBlZGlkbyh0aGlzLkNvZGlnbywgcmVzcG9zdGEsIHJlc3VsdC50ZXh0LnRyaW0oKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAudGhlbigocmVzcG9uc2UpPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihyZXNwb25zZS5TdGF0dXMgPT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pc0VuY2VycmFyID0gZmFsc2U7IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pc0NhbmNlbGFyID0gZmFsc2U7ICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXNBY2VpdG8gPSBmYWxzZTsgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWxlcnQocmVzcG9uc2UuTWVuc2FnZW0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNhdGNoKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hbGVydChcIkVycm8gYW8gcmVjdXNhciBvIHBlZGlkb1wiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRoZWxpYXJBcHBcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jYW5jZWxhclBlZGlkbyh0aGlzLkNvZGlnbywgcmVzcG9zdGEsJycpXG4gICAgICAgICAgICAgICAgICAgICAgICAudGhlbigocmVzcG9uc2UpPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHJlc3BvbnNlLlN0YXR1cyA9PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXNFbmNlcnJhciA9IGZhbHNlOyBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pc0NhbmNlbGFyID0gZmFsc2U7ICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pc0FjZWl0byA9IGZhbHNlOyAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFsZXJ0KHJlc3BvbnNlLk1lbnNhZ2VtKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAuY2F0Y2goKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWxlcnQoXCJFcnJvIGFvIHJlY3VzYXIgbyBwZWRpZG9cIik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSwgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIGFsZXJ0KG1lc3NhZ2UpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYWxlcnQoe1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJBdGVuw6fDo29cIixcbiAgICAgICAgICAgICAgICAgICAgb2tCdXR0b25UZXh0OiBcIk9LXCIsXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IG1lc3NhZ2VcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gICAgICAgICAgICBcbiAgICAgICAgfVxuICAgIH07XG48L3NjcmlwdD5cblxuPHN0eWxlPlxuICAgIC5sYmwge1xuICAgICAgICBjb2xvcjogI0ZGRjtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEwO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwO1xuICAgIH1cbiAgICAuYm9sZCB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIH1cbiAgICAuZm9ybXtcbiAgICAgICAgbWFyZ2luLWxlZnQ6MjBweDtcbiAgICB9XG4gICAgLnRlbGVmb25lXG4gICAge1xuICAgICAgICBjb2xvcjojMDAwO1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICB9XG4gICAgLmVzcGFjYW1lbnRve1xuICAgICAgICBtYXJnaW4tdG9wOjhweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTo4cHg7XG4gICAgfVxuICAgIC5sb2dvLWljb3tcbiAgICAgICAgIGhlaWdodDogMjA7XG4gICAgICAgICB3aWR0aDogNDA7XG4gICAgfVxuICAgIC50ZWxlZm9uZS1mb3JtYXR7XG4gICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ34vaW1hZ2VzL2xpZ2FyLnBuZycpO1xuICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogNTBweCAxN3B4O1xuICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogcmlnaHQ7XG4gICAgICAgICB3aWR0aDogNTUwcHg7XG4gICAgfVxuICAgIC53aGF0cy1mb3JtYXR7XG4gICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ34vaW1hZ2VzL3doYXRzLnBuZycpO1xuICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogMTdweCAxN3B4O1xuICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogcmlnaHQ7XG4gICAgICAgICB3aWR0aDogNTEwcHg7ICAgIFxuICAgIH1cbiAgICAuaW1nLW1hcGF7XG4gICAgICAgICB3aWR0aDogMTkwcHg7XG4gICAgfVxuICAgIC5pbWctbWFwYS1jb21wYXJ0aWxoYXJ7XG4gICAgICAgICB3aWR0aDogMzgwcHg7XG4gICAgICAgICBtYXJnaW4tbGVmdDogMTVweDtcbiAgICB9XG48L3N0eWxlPiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLnN1Yi10aXR1bG8ge1xcbiAgICBjb2xvcjogIzFlNjgzMjtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbn1cXG4uaW5wdXR7XFxuICAgIGJvcmRlci1jb2xvcjpyZWQ7XFxufVxcbi5sYmwge1xcbiAgICBjb2xvcjogI0ZGRjtcXG4gICAgbWFyZ2luLWxlZnQ6IDEwO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDEwO1xcbn1cXG4uYm9sZCB7XFxuXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG4uZm9ybXtcXG4gICAgbWFyZ2luLWxlZnQ6MjBweDtcXG59XFxuLnRlbGVmb25lXFxue1xcbiAgICBjb2xvcjojMDAwO1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcXG59XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG4gICAgY29uc3QgYXBwbGljYXRpb24gPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvblwiKTtcbiAgICByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9zdHlsaW5nL3N0eWxlLXNjb3BlXCIpO1xuXG4gICAgaWYgKHR5cGVvZiBleHBvcnRzLmZvckVhY2ggPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICBleHBvcnRzLmZvckVhY2goY3NzRXhwb3J0ID0+IHtcbiAgICAgICAgICAgIGlmIChjc3NFeHBvcnQubGVuZ3RoID4gMSAmJiBjc3NFeHBvcnRbMV0pIHtcbiAgICAgICAgICAgICAgICAvLyBhcHBseWluZyB0aGUgc2Vjb25kIGl0ZW0gb2YgdGhlIGV4cG9ydCBhcyBpdCBjb250YWlucyB0aGUgY3NzIGNvbnRlbnRzXG4gICAgICAgICAgICAgICAgYXBwbGljYXRpb24uYWRkQ3NzKGNzc0V4cG9ydFsxXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbjtcbiAgICBpZiAobW9kdWxlLmhvdCkge1xuICAgICAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoKCkgPT4ge1xuICAgICAgICAgICAgZ2xvYmFsLmhtclJlZnJlc2goeyB0eXBlOiAnc3R5bGUnLCBwYXRoOiAnLi9jb21wb25lbnRzL0VkaXRhci52dWUnIH0pO1xuICAgICAgICB9KVxuICAgIH1cbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLmxibHtcXG4gICAgY29sb3I6I0ZGRjtcXG4gICAgbWFyZ2luLWxlZnQ6IDEwO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDEwO1xcbn1cXG4ubGJsLWJvbGR7XFxuICAgICBcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcbi5zYWlyIHtcXG4gICAgaGVpZ2h0OiAzMDtcXG59XFxuLmVkaWNhbyB7XFxuICAgIGhlaWdodDogMjU7XFxufVxcbi5idG4tdGFtYW5ob3tcXG4gICAgd2lkdGg6IDQxJTtcXG59XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG4gICAgY29uc3QgYXBwbGljYXRpb24gPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvblwiKTtcbiAgICByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9zdHlsaW5nL3N0eWxlLXNjb3BlXCIpO1xuXG4gICAgaWYgKHR5cGVvZiBleHBvcnRzLmZvckVhY2ggPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICBleHBvcnRzLmZvckVhY2goY3NzRXhwb3J0ID0+IHtcbiAgICAgICAgICAgIGlmIChjc3NFeHBvcnQubGVuZ3RoID4gMSAmJiBjc3NFeHBvcnRbMV0pIHtcbiAgICAgICAgICAgICAgICAvLyBhcHBseWluZyB0aGUgc2Vjb25kIGl0ZW0gb2YgdGhlIGV4cG9ydCBhcyBpdCBjb250YWlucyB0aGUgY3NzIGNvbnRlbnRzXG4gICAgICAgICAgICAgICAgYXBwbGljYXRpb24uYWRkQ3NzKGNzc0V4cG9ydFsxXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbjtcbiAgICBpZiAobW9kdWxlLmhvdCkge1xuICAgICAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoKCkgPT4ge1xuICAgICAgICAgICAgZ2xvYmFsLmhtclJlZnJlc2goeyB0eXBlOiAnc3R5bGUnLCBwYXRoOiAnLi9jb21wb25lbnRzL0hvbWUudnVlJyB9KTtcbiAgICAgICAgfSlcbiAgICB9XG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbi5wYWdlW2RhdGEtdi1jMjc0ODJjNF0ge1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG4uZm9ybVtkYXRhLXYtYzI3NDgyYzRdIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDMwO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDMwO1xcbiAgICBmbGV4LWdyb3c6IDI7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxufVxcbi5sb2dvW2RhdGEtdi1jMjc0ODJjNF0ge1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMjtcXG4gICAgaGVpZ2h0OiA5MDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcbi5oZWFkZXJbZGF0YS12LWMyNzQ4MmM0XSB7XFxuICAgIGhvcml6b250YWwtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAyNTtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgbWFyZ2luLWJvdHRvbTogNzA7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgY29sb3I6ICMwNjdBNjU7XFxufVxcbi5tZW5zYWdlbVtkYXRhLXYtYzI3NDgyYzRdIHtcXG4gICAgaG9yaXpvbnRhbC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDE2O1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGNvbG9yOiByZWQ7XFxufVxcbi5pbnB1dC1maWVsZFtkYXRhLXYtYzI3NDgyYzRdIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMjU7XFxufVxcbi5pbnB1dFtkYXRhLXYtYzI3NDgyYzRdIHtcXG4gICAgZm9udC1zaXplOiAxODtcXG4gICAgcGxhY2Vob2xkZXItY29sb3I6ICNBOEE4QTg7XFxufVxcbi5pbnB1dFtkYXRhLXYtYzI3NDgyYzRdOmRpc2FibGVkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIG9wYWNpdHk6IDAuNTtcXG59XFxuLmJ0bi1wcmltYXJ5W2RhdGEtdi1jMjc0ODJjNF0ge1xcbiAgICBtYXJnaW46IDMwIDUgMTUgNTtcXG59XFxuLmxvZ2luLWxhYmVsW2RhdGEtdi1jMjc0ODJjNF0ge1xcbiAgICBob3Jpem9udGFsLWFsaWduOiBjZW50ZXI7XFxuICAgIGNvbG9yOiAjQThBOEE4O1xcbiAgICBmb250LXNpemU6IDE2O1xcbn1cXG4uc2lnbi11cC1sYWJlbFtkYXRhLXYtYzI3NDgyYzRdIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMjA7XFxufVxcbi5ib2xkW2RhdGEtdi1jMjc0ODJjNF0ge1xcbiAgICBjb2xvcjogIzAwMDAwMDtcXG59XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG4gICAgY29uc3QgYXBwbGljYXRpb24gPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvblwiKTtcbiAgICByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9zdHlsaW5nL3N0eWxlLXNjb3BlXCIpO1xuXG4gICAgaWYgKHR5cGVvZiBleHBvcnRzLmZvckVhY2ggPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICBleHBvcnRzLmZvckVhY2goY3NzRXhwb3J0ID0+IHtcbiAgICAgICAgICAgIGlmIChjc3NFeHBvcnQubGVuZ3RoID4gMSAmJiBjc3NFeHBvcnRbMV0pIHtcbiAgICAgICAgICAgICAgICAvLyBhcHBseWluZyB0aGUgc2Vjb25kIGl0ZW0gb2YgdGhlIGV4cG9ydCBhcyBpdCBjb250YWlucyB0aGUgY3NzIGNvbnRlbnRzXG4gICAgICAgICAgICAgICAgYXBwbGljYXRpb24uYWRkQ3NzKGNzc0V4cG9ydFsxXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbjtcbiAgICBpZiAobW9kdWxlLmhvdCkge1xuICAgICAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoKCkgPT4ge1xuICAgICAgICAgICAgZ2xvYmFsLmhtclJlZnJlc2goeyB0eXBlOiAnc3R5bGUnLCBwYXRoOiAnLi9jb21wb25lbnRzL0xvZ2luLnZ1ZScgfSk7XG4gICAgICAgIH0pXG4gICAgfVxuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG4ubGJsIHtcXG4gICAgY29sb3I6ICNGRkY7XFxuICAgIG1hcmdpbi1sZWZ0OiAxMDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxMDtcXG59XFxuLmJvbGQge1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuLmZvcm17XFxuICAgIG1hcmdpbi1sZWZ0OjIwcHg7XFxufVxcbi50ZWxlZm9uZVxcbntcXG4gICAgY29sb3I6IzAwMDtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XFxufVxcbi5lc3BhY2FtZW50b3tcXG4gICAgbWFyZ2luLXRvcDo4cHg7XFxuICAgIG1hcmdpbi1ib3R0b206OHB4O1xcbn1cXG4ubG9nby1pY297XFxuICAgICBoZWlnaHQ6IDIwO1xcbiAgICAgd2lkdGg6IDQwO1xcbn1cXG4udGVsZWZvbmUtZm9ybWF0e1xcbiAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCd+L2ltYWdlcy9saWdhci5wbmcnKTtcXG4gICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgICBiYWNrZ3JvdW5kLXNpemU6IDUwcHggMTdweDtcXG4gICAgIGJhY2tncm91bmQtcG9zaXRpb246IHJpZ2h0O1xcbiAgICAgd2lkdGg6IDU1MHB4O1xcbn1cXG4ud2hhdHMtZm9ybWF0e1xcbiAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCd+L2ltYWdlcy93aGF0cy5wbmcnKTtcXG4gICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgICBiYWNrZ3JvdW5kLXNpemU6IDE3cHggMTdweDtcXG4gICAgIGJhY2tncm91bmQtcG9zaXRpb246IHJpZ2h0O1xcbiAgICAgd2lkdGg6IDUxMHB4O1xcbn1cXG4uaW1nLW1hcGF7XFxuICAgICB3aWR0aDogMTkwcHg7XFxufVxcbi5pbWctbWFwYS1jb21wYXJ0aWxoYXJ7XFxuICAgICB3aWR0aDogMzgwcHg7XFxuICAgICBtYXJnaW4tbGVmdDogMTVweDtcXG59XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG4gICAgY29uc3QgYXBwbGljYXRpb24gPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvblwiKTtcbiAgICByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9zdHlsaW5nL3N0eWxlLXNjb3BlXCIpO1xuXG4gICAgaWYgKHR5cGVvZiBleHBvcnRzLmZvckVhY2ggPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICBleHBvcnRzLmZvckVhY2goY3NzRXhwb3J0ID0+IHtcbiAgICAgICAgICAgIGlmIChjc3NFeHBvcnQubGVuZ3RoID4gMSAmJiBjc3NFeHBvcnRbMV0pIHtcbiAgICAgICAgICAgICAgICAvLyBhcHBseWluZyB0aGUgc2Vjb25kIGl0ZW0gb2YgdGhlIGV4cG9ydCBhcyBpdCBjb250YWlucyB0aGUgY3NzIGNvbnRlbnRzXG4gICAgICAgICAgICAgICAgYXBwbGljYXRpb24uYWRkQ3NzKGNzc0V4cG9ydFsxXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbjtcbiAgICBpZiAobW9kdWxlLmhvdCkge1xuICAgICAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoKCkgPT4ge1xuICAgICAgICAgICAgZ2xvYmFsLmhtclJlZnJlc2goeyB0eXBlOiAnc3R5bGUnLCBwYXRoOiAnLi9jb21wb25lbnRzL1BlZGlkby52dWUnIH0pO1xuICAgICAgICB9KVxuICAgIH1cbiIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJQYWdlXCIsXG4gICAgW1xuICAgICAgX2MoXG4gICAgICAgIFwiQWN0aW9uQmFyXCIsXG4gICAgICAgIHsgYXR0cnM6IHsgdGl0bGU6IFwiUGVyZmlsIGRvIFVzdcOhcmlvXCIgfSB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcIkxhYmVsXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImgyXCIsXG4gICAgICAgICAgICAgIGF0dHJzOiB7IHJvdzogXCIwXCIsIGhvcml6b250YWxBbGlnbm1lbnQ6IFwiY2VudGVyXCIgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJTcGFuXCIsIHsgYXR0cnM6IHsgdGV4dDogXCJQZXJmaWwgZG8gVXN1w6FyaW9cIiB9IH0pLFxuICAgICAgICAgICAgICBfYyhcIlNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJib2xkXCIsIGF0dHJzOiB7IHRleHQ6IF92bS5Db2RpZ28gfSB9KVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgICksXG4gICAgICBfYyhcbiAgICAgICAgXCJGbGV4Ym94TGF5b3V0XCIsXG4gICAgICAgIHsgc3RhdGljQ2xhc3M6IFwicGFnZVwiIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiU3RhY2tMYXlvdXRcIixcbiAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZm9ybVwiIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiR3JpZExheW91dFwiLFxuICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgcm93czogXCJhdXRvLCBhdXRvLCBhdXRvLCBhdXRvLCBhdXRvLCBhdXRvLCBhdXRvXCIgfSB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcIlN0YWNrTGF5b3V0XCIsXG4gICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiaW5wdXQtZmllbGRcIiwgYXR0cnM6IHsgcm93OiBcIjBcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInN1Yi10aXR1bG9cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRleHQ6IFwiTWV1cyBkYWRvc1wiIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiU3RhY2tMYXlvdXRcIixcbiAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJpbnB1dC1maWVsZFwiLCBhdHRyczogeyByb3c6IFwiMVwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiVGV4dEZpZWxkXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImlucHV0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBoaW50OiBcIk5vbWVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAga2V5Ym9hcmRUeXBlOiBcIm5vbWVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0b2NvcnJlY3Q6IFwiZmFsc2VcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0b2NhcGl0YWxpemF0aW9uVHlwZTogXCJub25lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybktleVR5cGU6IFwibmV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5Vc3VhcmlvLk5vbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uVXN1YXJpbywgXCJOb21lXCIsICRldmVudC5vYmplY3RbXCJ0ZXh0XCJdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIlVzdWFyaW8uTm9tZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJTdGFja0xheW91dFwiLCB7IHN0YXRpY0NsYXNzOiBcImhyLWxpZ2h0XCIgfSlcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcIlN0YWNrTGF5b3V0XCIsXG4gICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiaW5wdXQtZmllbGRcIiwgYXR0cnM6IHsgcm93OiBcIjJcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcIlRleHRGaWVsZFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpbnB1dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaGludDogXCJFLW1haWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAga2V5Ym9hcmRUeXBlOiBcImVtYWlsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiZW1haWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0b2NvcnJlY3Q6IFwiZmFsc2VcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0b2NhcGl0YWxpemF0aW9uVHlwZTogXCJub25lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybktleVR5cGU6IFwibmV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5Vc3VhcmlvLkVtYWlsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uVXN1YXJpbyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiRW1haWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC5vYmplY3RbXCJ0ZXh0XCJdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIlVzdWFyaW8uRW1haWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiU3RhY2tMYXlvdXRcIiwgeyBzdGF0aWNDbGFzczogXCJoci1saWdodFwiIH0pXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImlucHV0LWZpZWxkXCIsIGF0dHJzOiB7IHJvdzogXCIzXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJzdWItdGl0dWxvXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBcIk1pbmhhIFNlbmhhXCIgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImlucHV0LWZpZWxkXCIsIGF0dHJzOiB7IHJvdzogXCI0XCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJUZXh0RmllbGRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVmOiBcInBhc3N3b3JkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpbnB1dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaGludDogXCJTZW5oYSBBdHVhbFwiLCBzZWN1cmU6IFwidHJ1ZVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLlVzdWFyaW8uU2VuaGFBdHVhbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLlVzdWFyaW8sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlNlbmhhQXR1YWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC5vYmplY3RbXCJ0ZXh0XCJdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIlVzdWFyaW8uU2VuaGFBdHVhbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJTdGFja0xheW91dFwiLCB7IHN0YXRpY0NsYXNzOiBcImhyLWxpZ2h0XCIgfSlcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcIlN0YWNrTGF5b3V0XCIsXG4gICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiaW5wdXQtZmllbGRcIiwgYXR0cnM6IHsgcm93OiBcIjVcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcIlRleHRGaWVsZFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWY6IFwicGFzc3dvcmRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImlucHV0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBoaW50OiBcIk5vdmEgc2VuaGFcIiwgc2VjdXJlOiBcInRydWVcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgb246IHsgcmV0dXJuUHJlc3M6IF92bS5mb2N1c1Bhc3N3b3JkIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLlVzdWFyaW8uU2VuaGEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5Vc3VhcmlvLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJTZW5oYVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50Lm9iamVjdFtcInRleHRcIl1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiVXN1YXJpby5TZW5oYVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJTdGFja0xheW91dFwiLCB7IHN0YXRpY0NsYXNzOiBcImhyLWxpZ2h0XCIgfSlcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcIlN0YWNrTGF5b3V0XCIsXG4gICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiaW5wdXQtZmllbGRcIiwgYXR0cnM6IHsgcm93OiBcIjZcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcIlRleHRGaWVsZFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWY6IFwiY29uZmlybVBhc3N3b3JkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpbnB1dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaGludDogXCJDb25maXJtYXIgbm92YSBzZW5oYVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBzZWN1cmU6IFwidHJ1ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5LZXlUeXBlOiBcImRvbmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7IHJldHVyblByZXNzOiBfdm0uZm9jdXNDb25maXJtUGFzc3dvcmQgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uVXN1YXJpby5Db25maXJtYXJTZW5oYSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLlVzdWFyaW8sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkNvbmZpcm1hclNlbmhhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQub2JqZWN0W1widGV4dFwiXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJVc3VhcmlvLkNvbmZpcm1hclNlbmhhXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcIlN0YWNrTGF5b3V0XCIsIHsgc3RhdGljQ2xhc3M6IFwiaHItbGlnaHRcIiB9KVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF9jKFwiQnV0dG9uXCIsIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLXByaW1hcnkgYnRuLWdyZWVuXCIsXG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogXCJTYWx2YXJcIiB9LFxuICAgICAgICAgICAgICAgIG9uOiB7IHRhcDogX3ZtLnNhbHZhciB9XG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBfYyhcIkJ1dHRvblwiLCB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1ncmV5XCIsXG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogXCJDYW5jZWxhclwiIH0sXG4gICAgICAgICAgICAgICAgb246IHsgdGFwOiBfdm0udm9sdGFyIH1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiUGFnZVwiLFxuICAgIHsgYXR0cnM6IHsgYWN0aW9uQmFySGlkZGVuOiBcImZhbHNlXCIgfSB9LFxuICAgIFtcbiAgICAgIF9jKFxuICAgICAgICBcIkFjdGlvbkJhclwiLFxuICAgICAgICB7IGF0dHJzOiB7IGZsYXQ6IFwidHJ1ZVwiLCB0aXRsZTogXCJcIiB9IH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiU3RhY2tMYXlvdXRcIixcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJJbWFnZVwiLCB7XG4gICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgaGVpZ2h0OiBcIjEwMHB4XCIsIGZsb2F0OiBcImxlZnRcIiB9LFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7IHNyYzogXCJ+L2ltYWdlcy9sb2dvLnBuZ1wiIH1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiQWN0aW9uSXRlbVwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBhdHRyczogeyBcImlvcy5wb3NpdGlvblwiOiBcInJpZ2h0XCIsIHdpZHRoOiBcIjUwXCIgfSxcbiAgICAgICAgICAgICAgb246IHsgdGFwOiBfdm0uZWRpdGFyIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwiSW1hZ2VcIiwge1xuICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IGZsb2F0OiBcInJpZ2h0XCIgfSxcbiAgICAgICAgICAgICAgICBhdHRyczogeyBzcmM6IFwifi9pbWFnZXMvZWRpY2FvLnBuZ1wiIH1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiQWN0aW9uSXRlbVwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBhdHRyczogeyBcImlvcy5wb3NpdGlvblwiOiBcInJpZ2h0XCIsIHdpZHRoOiBcIjUwXCIgfSxcbiAgICAgICAgICAgICAgb246IHsgdGFwOiBfdm0ubG9nb3V0IH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwiSW1hZ2VcIiwge1xuICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IGZsb2F0OiBcInJpZ2h0XCIgfSxcbiAgICAgICAgICAgICAgICBhdHRyczogeyBzcmM6IFwifi9pbWFnZXMvc2Fpci5wbmdcIiB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKSxcbiAgICAgIF9jKFxuICAgICAgICBcIlN0YWNrTGF5b3V0XCIsXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiVGFic1wiLFxuICAgICAgICAgICAgeyBhdHRyczogeyBzZWxlY3RlZEluZGV4OiBcIjBcIiB9IH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiVGFiU3RyaXBcIixcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJUYWJTdHJpcEl0ZW1cIixcbiAgICAgICAgICAgICAgICAgICAgeyBvbjogeyB0YXA6IF92bS5wZWRpZG9zIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwgeyBhdHRyczogeyB0ZXh0OiBcIlBlZGlkb3NcIiB9IH0pLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiSW1hZ2VcIiwgeyBhdHRyczogeyBzcmM6IFwicmVzOi8vaG9tZVwiIH0gfSlcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcIlRhYlN0cmlwSXRlbVwiLFxuICAgICAgICAgICAgICAgICAgICB7IG9uOiB7IHRhcDogX3ZtLnBlZGlkb3NIaXN0b3JpY28gfSB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7IGF0dHJzOiB7IHRleHQ6IFwiSGlzdMOzcmljb1wiIH0gfSksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJJbWFnZVwiLCB7IGF0dHJzOiB7IHNyYzogXCJyZXM6Ly9zZXR0aW5nc1wiIH0gfSlcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcIlRhYkNvbnRlbnRJdGVtXCIsXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiU2Nyb2xsVmlld1wiLFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcIkxpc3RWaWV3XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImxpc3QtZ3JvdXBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgYmFja2dyb3VuZENvbG9yOiBcIiMwNDUyNDRcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBpdGVtczogX3ZtLml0ZW1zLCBcIithbGlhc1wiOiBcIml0ZW1cIiB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInYtdGVtcGxhdGVcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjb3BlZFNsb3RzOiBfdm0uX3UoW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IFwiZGVmYXVsdFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbjogZnVuY3Rpb24ocmVmKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGl0ZW0gPSByZWYuaXRlbVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciAkaW5kZXggPSByZWYuJGluZGV4XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyICRldmVuID0gcmVmLiRldmVuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyICRvZGQgPSByZWYuJG9kZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiR3JpZExheW91dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbHVtbnM6IFwiMi82KiwgMi82KlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjMTQ4QTY0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93czogXCIyMCwyMCwyMCwyMCwyMCwyMCwyMCwyMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImxibFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2w6IFwiMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93OiBcIjBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IFwiQ8OzZGlnbzpcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRXcmFwOiBcInRydWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImxibCBsYmwtYm9sZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2w6IFwiMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93OiBcIjFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IGl0ZW0uQ29kaWdvLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dFdyYXA6IFwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibGJsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbDogXCIwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3c6IFwiMlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogXCJMb2phOlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dFdyYXA6IFwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibGJsIGxibC1ib2xkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbDogXCIwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3c6IFwiM1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogaXRlbS5Mb2phXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibGJsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbDogXCIwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3c6IFwiNFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogXCJBZ2VuZGFkYSBwYXJhOlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dFdyYXA6IFwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibGJsIGxibC1ib2xkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbDogXCIwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3c6IFwiNVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogX3ZtLl9mKFwiRm9ybWF0YURhdGFcIikoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uRGF0YUVudHJlZ2FcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0V3JhcDogXCJ0cnVlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJsYmxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sOiBcIjBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdzogXCI2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBcIlN0YXR1czpcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRXcmFwOiBcInRydWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImxibCBsYmwtYm9sZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2w6IFwiMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93OiBcIjdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IGl0ZW0uU3RhdHVzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJCdXR0b25cIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJidG4gYnRuLXByaW1hcnkgYnRuLW9yYW5nZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3dTcGFuOiBcIjNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdzogXCIwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2w6IFwiMVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogXCJWaXN1YWxpemFyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXA6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnZpc3VhbGl6YXIoaXRlbSwgZmFsc2UpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibGJsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvd1NwYW46IFwiM1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sOiBcIjFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdzogXCIzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIipDbGlxdWUgZW0gVmlzdWFsaXphciBwYXJhIEFjZWl0YXIgb3UgcmVqZWl0YXIgbyBQZWRpZG9cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsQWxpZ25tZW50OiBcImNlbnRlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dFdyYXA6IFwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJUYWJDb250ZW50SXRlbVwiLFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcIlN0YWNrTGF5b3V0XCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZTogeyBiYWNrZ3JvdW5kOiBcIiNmZmZcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IG9yaWVudGF0aW9uOiBcInZlcnRpY2FsXCIgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlN0YWNrTGF5b3V0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IGJhY2tncm91bmQ6IFwiI2ZmZlwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IG9yaWVudGF0aW9uOiBcImhvcml6b250YWxcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIkJ1dHRvblwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi10YW1hbmhvIGJ0bi1wcmltYXJ5IGJ0bi1ncmV5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogX3ZtLlRleHRvRGF0YURlIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHsgdGFwOiBfdm0uZGF0YURlIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiQnV0dG9uXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLXRhbWFuaG8gYnRuLXByaW1hcnkgYnRuLWdyZXlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBfdm0uVGV4dG9EYXRhQXRlIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHsgdGFwOiBfdm0uZGF0YUF0ZSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJEYXRlUGlja2VyXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5EYXRhRGVWaXNpYmxlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiRGF0YURlVmlzaWJsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB2ZXJ0aWNhbEFsaWdubWVudDogXCJjZW50ZXJcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5EYXRhRGVTZWxlY2lvbmFkYSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5EYXRhRGVTZWxlY2lvbmFkYSA9ICRldmVudC5vYmplY3RbXCJkYXRlXCJdXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiRGF0YURlU2VsZWNpb25hZGFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiRGF0ZVBpY2tlclwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uRGF0YUF0ZVZpc2libGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJEYXRhQXRlVmlzaWJsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB2ZXJ0aWNhbEFsaWdubWVudDogXCJjZW50ZXJcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5EYXRhQXRlU2VsZWNpb25hZGEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uRGF0YUF0ZVNlbGVjaW9uYWRhID0gJGV2ZW50Lm9iamVjdFtcImRhdGVcIl1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJEYXRhQXRlU2VsZWNpb25hZGFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5EYXRhRGVWaXNpYmxlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJEYXRhRGVWaXNpYmxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IGJhY2tncm91bmQ6IFwiI2ZmZlwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IG9yaWVudGF0aW9uOiBcImhvcml6b250YWxcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIkJ1dHRvblwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi10YW1hbmhvIGJ0bi1wcmltYXJ5IGJ0bi1yZWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBcIkxpbXBhclwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHsgdGFwOiBfdm0uTGltcGFyRGF0YURlIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiQnV0dG9uXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYnRuIGJ0bi10YW1hbmhvIGJ0bi1wcmltYXJ5IGJ0bi1ncmVlblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRleHQ6IFwiQ29uZmlybWFyXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjogeyB0YXA6IF92bS5jb25maXJtYXJEYXRhRGUgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5EYXRhQXRlVmlzaWJsZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiRGF0YUF0ZVZpc2libGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgYmFja2dyb3VuZDogXCIjZmZmXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgb3JpZW50YXRpb246IFwiaG9yaXpvbnRhbFwiIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiQnV0dG9uXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLXRhbWFuaG8gYnRuLXByaW1hcnkgYnRuLXJlZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRleHQ6IFwiTGltcGFyXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjogeyB0YXA6IF92bS5MaW1wYXJEYXRhQXRlIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiQnV0dG9uXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYnRuIGJ0bi10YW1hbmhvIGJ0bi1wcmltYXJ5IGJ0bi1ncmVlblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRleHQ6IFwiQ29uZmlybWFyXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjogeyB0YXA6IF92bS5jb25maXJtYXJEYXRhQXRlIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcIkJ1dHRvblwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLXByaW1hcnkgYnRuLWdyZXlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRleHQ6IF92bS5TdGF0dXMgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7IHRhcDogX3ZtLnN0YXR1c1BlZGlkbyB9XG4gICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJ2LXRlbXBsYXRlXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjb3BlZFNsb3RzOiBfdm0uX3UoW1xuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBcImRlZmF1bHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbjogZnVuY3Rpb24ocmVmKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgaXRlbSA9IHJlZi5pdGVtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgJGluZGV4ID0gcmVmLiRpbmRleFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyICRldmVuID0gcmVmLiRldmVuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgJG9kZCA9IHJlZi4kb2RkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiR3JpZExheW91dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbHVtbnM6IFwiMi82KiwgMi82KlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiM4ODg4ODhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvd3M6IFwiMjAsMjAsMjAsMjAsMjAsMjAsMjAsMjBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibGJsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2w6IFwiMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3c6IFwiMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBcIkPDs2RpZ286XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRXcmFwOiBcInRydWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibGJsIGxibC1ib2xkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2w6IFwiMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3c6IFwiMVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBpdGVtLkNvZGlnbyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dFdyYXA6IFwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJsYmxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbDogXCIwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdzogXCIyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IFwiTG9qYTpcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dFdyYXA6IFwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJsYmwgbGJsLWJvbGRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbDogXCIwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdzogXCIzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IGl0ZW0uTG9qYSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dFdyYXA6IFwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJsYmxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbDogXCIwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdzogXCI0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IFwiQWdlbmRhZGEgcGFyYTpcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dFdyYXA6IFwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJsYmwgbGJsLWJvbGRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbDogXCIwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdzogXCI1XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IF92bS5fZihcIkZvcm1hdGFEYXRhXCIpKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uRGF0YUVudHJlZ2FcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dFdyYXA6IFwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJsYmxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbDogXCIwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdzogXCI2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IFwiU3RhdHVzOlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0V3JhcDogXCJ0cnVlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImxibCBsYmwtYm9sZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sOiBcIjBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93OiBcIjdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogaXRlbS5TdGF0dXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIkJ1dHRvblwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLXByaW1hcnkgYnRuLW9yYW5nZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93U3BhbjogXCI2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdzogXCIwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbDogXCIxXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IFwiVmlzdWFsaXphclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFwOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnZpc3VhbGl6YXIoaXRlbSwgdHJ1ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcIlBhZ2VcIixcbiAgICB7IGF0dHJzOiB7IGFjdGlvbkJhckhpZGRlbjogXCJ0cnVlXCIgfSB9LFxuICAgIFtcbiAgICAgIF9jKFxuICAgICAgICBcIlNjcm9sbHZpZXdcIixcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJGbGV4Ym94TGF5b3V0XCIsXG4gICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInBhZ2VcIiB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcIlN0YWNrTGF5b3V0XCIsXG4gICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJmb3JtXCIgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcIkltYWdlXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibG9nb1wiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBzcmM6IFwifi9pbWFnZXMvbG9nby5wbmdcIiB9XG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJoZWFkZXJcIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogXCJQRURJRE9TXCIgfVxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICB0aGlzLnJldG9ybm9Mb2dpbiAhPSBcIlwiXG4gICAgICAgICAgICAgICAgICAgID8gX2MoXCJMYWJlbFwiLCB7IHN0YXRpY0NsYXNzOiBcIm1lbnNhZ2VtXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0ucmV0b3Jub0xvZ2luKSlcbiAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiR3JpZExheW91dFwiLFxuICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHJvd3M6IFwiYXV0bywgYXV0bywgYXV0b1wiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJpbnB1dC1maWVsZFwiLCBhdHRyczogeyByb3c6IFwiMFwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJUZXh0RmllbGRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImlucHV0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpbnQ6IFwiTG9naW5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzRW5hYmxlZDogIV92bS5wcm9jZXNzaW5nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5Ym9hcmRUeXBlOiBcImVtYWlsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvY29ycmVjdDogXCJmYWxzZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0b2NhcGl0YWxpemF0aW9uVHlwZTogXCJub25lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5LZXlUeXBlOiBcIm5leHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHsgcmV0dXJuUHJlc3M6IF92bS5mb2N1c1Bhc3N3b3JkIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0udXNlci5lbWFpbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnVzZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJlbWFpbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC5vYmplY3RbXCJ0ZXh0XCJdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInVzZXIuZW1haWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiU3RhY2tMYXlvdXRcIiwgeyBzdGF0aWNDbGFzczogXCJoci1saWdodFwiIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlN0YWNrTGF5b3V0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImlucHV0LWZpZWxkXCIsIGF0dHJzOiB7IHJvdzogXCIxXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIlRleHRGaWVsZFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmOiBcInBhc3N3b3JkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaW5wdXRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNFbmFibGVkOiAhX3ZtLnByb2Nlc3NpbmcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoaW50OiBcIlBhc3N3b3JkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWN1cmU6IFwidHJ1ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuS2V5VHlwZTogX3ZtLmlzTG9nZ2luZ0luID8gXCJkb25lXCIgOiBcIm5leHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHsgcmV0dXJuUHJlc3M6IF92bS5mb2N1c0NvbmZpcm1QYXNzd29yZCB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnVzZXIucGFzc3dvcmQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS51c2VyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicGFzc3dvcmRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQub2JqZWN0W1widGV4dFwiXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJ1c2VyLnBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIlN0YWNrTGF5b3V0XCIsIHsgc3RhdGljQ2xhc3M6IFwiaHItbGlnaHRcIiB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6ICFfdm0uaXNMb2dnaW5nSW4sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIiFpc0xvZ2dpbmdJblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpbnB1dC1maWVsZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyByb3c6IFwiMlwiIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiVGV4dEZpZWxkXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY6IFwiY29uZmlybVBhc3N3b3JkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaW5wdXRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNFbmFibGVkOiAhX3ZtLnByb2Nlc3NpbmcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoaW50OiBcIkNvbmZpcm0gcGFzc3dvcmRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlY3VyZTogXCJ0cnVlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5LZXlUeXBlOiBcImRvbmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0udXNlci5jb25maXJtUGFzc3dvcmQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS51c2VyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY29uZmlybVBhc3N3b3JkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50Lm9iamVjdFtcInRleHRcIl1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwidXNlci5jb25maXJtUGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiU3RhY2tMYXlvdXRcIiwgeyBzdGF0aWNDbGFzczogXCJoci1saWdodFwiIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJBY3Rpdml0eUluZGljYXRvclwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyByb3dTcGFuOiBcIjNcIiwgYnVzeTogX3ZtLnByb2Nlc3NpbmcgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyByb3c6IFwiM1wiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJCdXR0b25cIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tcHJpbWFyeSBidG4tZ3JlZW4gbS10LTIwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IF92bS5pc0xvZ2dpbmdJbiA/IFwiRW50cmFyXCIgOiBcIlNpZ24gVXBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzRW5hYmxlZDogIV92bS5wcm9jZXNzaW5nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjogeyB0YXA6IF92bS5zdWJtaXQgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibG9naW4tbGFiZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIqdi1zaG93XCI6IFwiaXNMb2dnaW5nSW5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IFwiRXNxdWVjZXUgc3VhIHNlbmhhP1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFwOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5mb3Jnb3RQYXNzd29yZCgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgIClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJQYWdlXCIsXG4gICAgW1xuICAgICAgX2MoXG4gICAgICAgIFwiQWN0aW9uQmFyXCIsXG4gICAgICAgIHsgYXR0cnM6IHsgdGl0bGU6IFwiRGV0YWxoZSBkbyBwZWRpZG9cIiB9IH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiTGFiZWxcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaDJcIixcbiAgICAgICAgICAgICAgYXR0cnM6IHsgcm93OiBcIjBcIiwgaG9yaXpvbnRhbEFsaWdubWVudDogXCJjZW50ZXJcIiB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcIlNwYW5cIiwgeyBhdHRyczogeyB0ZXh0OiBcIkRldGFsaGUgZG8gcGVkaWRvOiBcIiB9IH0pLFxuICAgICAgICAgICAgICBfYyhcIlNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJib2xkXCIsIGF0dHJzOiB7IHRleHQ6IF92bS5Db2RpZ28gfSB9KVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgICksXG4gICAgICBfYyhcbiAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImZvcm1cIiB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcIlN0YWNrTGF5b3V0XCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICAgICAgICAgICAgICB2YWx1ZTogIV92bS5pc0F2YWxpYWNhbyxcbiAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiIWlzQXZhbGlhY2FvXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwiSHRtbFZpZXdcIiwge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInRlbGVmb25lXCIsXG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgaHRtbDogX3ZtLl9mKFwiRm9ybWF0YUxvamFcIikoX3ZtLlBlZGlkb3MuTG9qYSkgfVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJMYWJlbFwiLFxuICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiaDNcIiB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcIkZvcm1hdHRlZFN0cmluZ1wiLFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJTcGFuXCIsIHsgYXR0cnM6IHsgdGV4dDogXCJOb21lIGRvIENsaWVudGU6IFwiIH0gfSksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJTcGFuXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJvbGRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRleHQ6IF92bS5QZWRpZG9zLk5vbWVDbGllbnRlIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiTGFiZWxcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uaXNBY2VpdG8gJiYgX3ZtLlBlZGlkb3MuQ1BGICE9IG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJpc0FjZWl0byAmJiBQZWRpZG9zLkNQRiAhPSBudWxsXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImgzXCJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcIkZvcm1hdHRlZFN0cmluZ1wiLFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJTcGFuXCIsIHsgYXR0cnM6IHsgdGV4dDogXCJDUEY6IFwiIH0gfSksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJTcGFuXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJvbGRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRleHQ6IF92bS5QZWRpZG9zLkNQRiB9XG4gICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcIkxhYmVsXCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmlzQWNlaXRvICYmIF92bS5QZWRpZG9zLkVtYWlsICE9IG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJpc0FjZWl0byAmJiBQZWRpZG9zLkVtYWlsICE9IG51bGxcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaDNcIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiRm9ybWF0dGVkU3RyaW5nXCIsXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcIlNwYW5cIiwgeyBhdHRyczogeyB0ZXh0OiBcIkVtYWlsOiBcIiB9IH0pLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiU3BhblwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJib2xkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBfdm0uUGVkaWRvcy5FbWFpbCB9XG4gICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcIlN0YWNrTGF5b3V0XCIsXG4gICAgICAgICAgICAgICAgeyBhdHRyczogeyBvcmllbnRhdGlvbjogXCJob3Jpem9udGFsXCIgfSB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiSHRtbFZpZXdcIiwge1xuICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5pc0FjZWl0byAmJiBfdm0uUGVkaWRvcy5UZWxlZm9uZSAhPSBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJpc0FjZWl0byAmJiBQZWRpZG9zLlRlbGVmb25lICE9IG51bGxcIlxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidGVsZWZvbmUgdGVsZWZvbmUtZm9ybWF0XCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgaHRtbDogX3ZtLl9mKFwiRm9ybWF0YVRlbGVmb25lXCIpKF92bS5QZWRpZG9zLlRlbGVmb25lKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcIlN0YWNrTGF5b3V0XCIsXG4gICAgICAgICAgICAgICAgeyBhdHRyczogeyBvcmllbnRhdGlvbjogXCJob3Jpem9udGFsXCIgfSB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiSHRtbFZpZXdcIiwge1xuICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5pc0FjZWl0byAmJiBfdm0uUGVkaWRvcy5UZWxlZm9uZSAhPSBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJpc0FjZWl0byAmJiBQZWRpZG9zLlRlbGVmb25lICE9IG51bGxcIlxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidGVsZWZvbmUgd2hhdHMtZm9ybWF0XCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgaHRtbDogX3ZtLl9mKFwiRm9ybWF0YVdoYXRzXCIpKF92bS5QZWRpZG9zLlRlbGVmb25lKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcIkxhYmVsXCIsXG4gICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJoM1wiIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiRm9ybWF0dGVkU3RyaW5nXCIsXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcIlNwYW5cIiwgeyBhdHRyczogeyB0ZXh0OiBcIlZlaWN1bG86IFwiIH0gfSksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJTcGFuXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJvbGRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRleHQ6IF92bS5QZWRpZG9zLk1vZGVsbyB9XG4gICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcIkxhYmVsXCIsXG4gICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJoM1wiIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiRm9ybWF0dGVkU3RyaW5nXCIsXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcIlNwYW5cIiwgeyBhdHRyczogeyB0ZXh0OiBcIlByb2R1dG86IFwiIH0gfSksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJTcGFuXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJvbGRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRleHQ6IF92bS5QZWRpZG9zLkJhdGVyaWEgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJMYWJlbFwiLFxuICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiaDNcIiB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcIkZvcm1hdHRlZFN0cmluZ1wiLFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJTcGFuXCIsIHsgYXR0cnM6IHsgdGV4dDogXCJGb3JtYSBkZSBQYWdhbWVudG86IFwiIH0gfSksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJTcGFuXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJvbGRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRleHQ6IF92bS5QZWRpZG9zLkZvcm1hRGVQYWdhbWVudG8gfVxuICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJMYWJlbFwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5QZWRpZG9zLkRlc2NvbnRvID4gMCxcbiAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIlBlZGlkb3MuRGVzY29udG8gPiAwXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImgzXCJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcIkZvcm1hdHRlZFN0cmluZ1wiLFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJTcGFuXCIsIHsgYXR0cnM6IHsgdGV4dDogXCJEZXNjb250bzogXCIgfSB9KSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcIlNwYW5cIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYm9sZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogX3ZtLl9mKFwiRm9ybWF0YVZhbG9yXCIpKF92bS5QZWRpZG9zLkRlc2NvbnRvKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJMYWJlbFwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5QZWRpZG9zLlZhbG9yVG90YWxQZWRpZG8gPiAwLFxuICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiUGVkaWRvcy5WYWxvclRvdGFsUGVkaWRvID4gMFwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJoM1wiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJGb3JtYXR0ZWRTdHJpbmdcIixcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiU3BhblwiLCB7IGF0dHJzOiB7IHRleHQ6IFwiVG90YWw6IFwiIH0gfSksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJTcGFuXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJvbGRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IF92bS5fZihcIkZvcm1hdGFWYWxvclwiKShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uUGVkaWRvcy5WYWxvclRvdGFsUGVkaWRvXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiTGFiZWxcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uUGVkaWRvcy5Gb3JtYVBhZ2FtZW50byAhPSBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiUGVkaWRvcy5Gb3JtYVBhZ2FtZW50byAhPSBudWxsXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImgzXCJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcIkZvcm1hdHRlZFN0cmluZ1wiLFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJTcGFuXCIsIHsgYXR0cnM6IHsgdGV4dDogXCJQYWdhbWVudG86IFwiIH0gfSksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJTcGFuXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJvbGRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRleHQ6IF92bS5QZWRpZG9zLkZvcm1hUGFnYW1lbnRvIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiTGFiZWxcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uUGVkaWRvcy5Ucm9jbyA+IDAsXG4gICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJQZWRpZG9zLlRyb2NvID4gMFwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJoM1wiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJGb3JtYXR0ZWRTdHJpbmdcIixcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiU3BhblwiLCB7IGF0dHJzOiB7IHRleHQ6IFwiVHJvY286IFwiIH0gfSksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJTcGFuXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJvbGRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IF92bS5fZihcIkZvcm1hdGFWYWxvclwiKShfdm0uUGVkaWRvcy5Ucm9jbylcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiTGFiZWxcIixcbiAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImgzXCIgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJGb3JtYXR0ZWRTdHJpbmdcIixcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiU3BhblwiLCB7IGF0dHJzOiB7IHRleHQ6IFwiRGF0YSBkYSBFbnRyZWdhOiBcIiB9IH0pLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiU3BhblwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJib2xkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBfdm0uX2YoXCJGb3JtYXRhRGF0YVwiKShfdm0uUGVkaWRvcy5EYXRhRW50cmVnYSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiTGFiZWxcIixcbiAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImgzXCIgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJGb3JtYXR0ZWRTdHJpbmdcIixcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiU3BhblwiLCB7IGF0dHJzOiB7IHRleHQ6IFwiSG9yw6FyaW8gZGEgRW50cmVnYTogXCIgfSB9KSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcIlNwYW5cIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYm9sZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogX3ZtLl9mKFwiRm9ybWF0YUhvcmFyaW9cIikoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLlBlZGlkb3MuRGF0YUVudHJlZ2FcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJMYWJlbFwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU6ICFfdm0uaXNBY2VpdG8sXG4gICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCIhaXNBY2VpdG9cIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaDNcIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiRm9ybWF0dGVkU3RyaW5nXCIsXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcIlNwYW5cIiwgeyBhdHRyczogeyB0ZXh0OiBcIkJhaXJybzogXCIgfSB9KSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcIlNwYW5cIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYm9sZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogX3ZtLlBlZGlkb3MuQmFpcnJvIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF9jKFwiSHRtbFZpZXdcIiwge1xuICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uaXNBY2VpdG8gJiYgX3ZtLlBlZGlkb3MuRW5kZXJlY28gIT0gbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJpc0FjZWl0byAmJiBQZWRpZG9zLkVuZGVyZWNvICE9IG51bGxcIlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidGVsZWZvbmVcIixcbiAgICAgICAgICAgICAgICBhdHRyczogeyBodG1sOiBfdm0uX2YoXCJGb3JtYXRhRW5kZXJlY29cIikoX3ZtLlBlZGlkb3MuRW5kZXJlY28pIH1cbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiU3RhY2tMYXlvdXRcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uaXNBY2VpdG8gJiYgX3ZtLlBlZGlkb3MuRW5kZXJlY28gIT0gbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImlzQWNlaXRvICYmIFBlZGlkb3MuRW5kZXJlY28gIT0gbnVsbFwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICBhdHRyczogeyBvcmllbnRhdGlvbjogXCJob3Jpem9udGFsXCIgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJJbWFnZVwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImltZy1tYXBhXCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHNyYzogXCJ+L2ltYWdlcy9tYXBhLnBuZ1wiIH0sXG4gICAgICAgICAgICAgICAgICAgIG9uOiB7IHRhcDogX3ZtLmFicmlyTWFwYSB9XG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiSW1hZ2VcIiwge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpbWctbWFwYS1jb21wYXJ0aWxoYXJcIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgc3JjOiBcIn4vaW1hZ2VzL3NoYXJlLnBuZ1wiIH0sXG4gICAgICAgICAgICAgICAgICAgIG9uOiB7IHRhcDogX3ZtLmNvbXBhcnRpbGhhck1hcGEgfVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJMYWJlbFwiLFxuICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiaDNcIiB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcIkZvcm1hdHRlZFN0cmluZ1wiLFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJTcGFuXCIsIHsgYXR0cnM6IHsgdGV4dDogXCJEaXN0w6JuY2lhIGFwcm94aW1hZGE6IFwiIH0gfSksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJTcGFuXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJvbGRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IF92bS5fZihcIkZvcm1hdGFEaXN0YW5jaWFcIikoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLlBlZGlkb3MuRGlzdGFuY2lhQXByb3hpbWFkYVxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgICksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcIlN0YWNrTGF5b3V0XCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmlzQXZhbGlhY2FvLFxuICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJpc0F2YWxpYWNhb1wiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcIkxhYmVsXCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaDJcIixcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHJvdzogXCIwXCIsIGhvcml6b250YWxBbGlnbm1lbnQ6IFwiY2VudGVyXCIgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiRm9ybWF0dGVkU3RyaW5nXCIsXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcIlNwYW5cIiwgeyBhdHRyczogeyB0ZXh0OiBcIkF2YWxpYcOnw6NvIGRvIHBlZGlkbzogXCIgfSB9KSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcIlNwYW5cIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYm9sZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogX3ZtLkNvZGlnbyB9XG4gICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcIkxhYmVsXCIsXG4gICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJoM1wiLCBhdHRyczogeyB0ZXh0V3JhcDogXCJ0cnVlXCIgfSB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcIkZvcm1hdHRlZFN0cmluZ1wiLFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJTcGFuXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRleHQ6IFwiTyBwZWRpZG8gZm9pIGVudHJlZ3VlIGNvcnJldGFtZW50ZTogXCIgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiU3BhblwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJib2xkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBfdm0uX2YoXCJGb3JtYXRhQm9sZWFub1wiKShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uQXZhbGlhY2FvLkVudHJlZ3VlQ29ycmV0YW1lbnRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiTGFiZWxcIixcbiAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImgzXCIsIGF0dHJzOiB7IHRleHRXcmFwOiBcInRydWVcIiB9IH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiRm9ybWF0dGVkU3RyaW5nXCIsXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcIlNwYW5cIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIk8gcHJvZHV0byBmb2kgZW50cmVndWUgbm8gbG9jYWwgZSBob3LDoXJpbyBhZ2VuZGFkbzogXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcIlNwYW5cIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYm9sZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogX3ZtLl9mKFwiRm9ybWF0YUJvbGVhbm9cIikoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLkF2YWxpYWNhby5Mb2NhbEhvcmFyaW9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJMYWJlbFwiLFxuICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiaDNcIiwgYXR0cnM6IHsgdGV4dFdyYXA6IFwidHJ1ZVwiIH0gfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJGb3JtYXR0ZWRTdHJpbmdcIixcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiU3BhblwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBcIk9jb3JyZXUgdHVkbyBiZW0gY29tIGEgaW5zdGFsYcOnw6NvOiBcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJTcGFuXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJvbGRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IF92bS5fZihcIkZvcm1hdGFCb2xlYW5vXCIpKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5BdmFsaWFjYW8uSW5zdGFsYWNhb1xuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcIkxhYmVsXCIsXG4gICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJoM1wiLCBhdHRyczogeyB0ZXh0V3JhcDogXCJ0cnVlXCIgfSB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcIkZvcm1hdHRlZFN0cmluZ1wiLFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJTcGFuXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJFbSB1bWEgZXNjYWxhIGRlIDAgYSAxMCwgcXVhbnRvIHZvY8OqIHJlY29tZW5kYXJpYSBvIEhlbGlhciBFeHByZXNzOiBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiU3BhblwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJib2xkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBfdm0uQXZhbGlhY2FvLk5vdGEgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJMYWJlbFwiLFxuICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiaDNcIiwgYXR0cnM6IHsgdGV4dFdyYXA6IFwidHJ1ZVwiIH0gfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJGb3JtYXR0ZWRTdHJpbmdcIixcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiU3BhblwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBcIlBvcnF1ZSBlc2NvbGhldSBjb21wcmFyIG5vIEhlbGlhciBFeHByZXNzOiBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiU3BhblwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJib2xkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBfdm0uQXZhbGlhY2FvLk1lbnNhZ2VtIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiTGFiZWxcIixcbiAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImgzXCIsIGF0dHJzOiB7IHRleHRXcmFwOiBcInRydWVcIiB9IH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiRm9ybWF0dGVkU3RyaW5nXCIsXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcIlNwYW5cIiwgeyBhdHRyczogeyB0ZXh0OiBcIk9ic2VydmHDp8OjbzogXCIgfSB9KSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcIlNwYW5cIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYm9sZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogX3ZtLkF2YWxpYWNhby5PYnNlcnZhY2FvIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfYyhcIkJ1dHRvblwiLCB7XG4gICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgICAgICAgICAgIHZhbHVlOiAhX3ZtLkhpc3RvcmljbyAmJiAhX3ZtLmlzQWNlaXRvLFxuICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiIUhpc3RvcmljbyAmJiAhaXNBY2VpdG9cIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuIGVzcGFjYW1lbnRvIGJ0bi1wcmltYXJ5IGJ0bi1ncmVlblwiLFxuICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogXCJBY2VpdGFyXCIgfSxcbiAgICAgICAgICAgIG9uOiB7IHRhcDogX3ZtLmFjZWl0YXIgfVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIF9jKFwiQnV0dG9uXCIsIHtcbiAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICAgICAgICAgICAgdmFsdWU6ICFfdm0uSGlzdG9yaWNvICYmICFfdm0uaXNBY2VpdG8sXG4gICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCIhSGlzdG9yaWNvICYmICFpc0FjZWl0b1wiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidG4gZXNwYWNhbWVudG8gYnRuLXByaW1hcnkgYnRuLXJlZFwiLFxuICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogXCJyZWN1c2FyXCIgfSxcbiAgICAgICAgICAgIG9uOiB7IHRhcDogX3ZtLnJlamVpdGFyIH1cbiAgICAgICAgICB9KSxcbiAgICAgICAgICBfYyhcIkJ1dHRvblwiLCB7XG4gICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uSGlzdG9yaWNvICYmIF92bS5pc0VuY2VycmFyLFxuICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiSGlzdG9yaWNvICYmIGlzRW5jZXJyYXJcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuIGVzcGFjYW1lbnRvIGJ0bi1wcmltYXJ5IGJ0bi1ncmVlblwiLFxuICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogXCJGaW5hbGl6YXIgUGVkaWRvXCIgfSxcbiAgICAgICAgICAgIG9uOiB7IHRhcDogX3ZtLmVuY2VycmFyIH1cbiAgICAgICAgICB9KSxcbiAgICAgICAgICBfYyhcIkJ1dHRvblwiLCB7XG4gICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uSGlzdG9yaWNvICYmIF92bS5pc0NhbmNlbGFyLFxuICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiSGlzdG9yaWNvICYmIGlzQ2FuY2VsYXJcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuIGVzcGFjYW1lbnRvIGJ0bi1wcmltYXJ5IGJ0bi1yZWRcIixcbiAgICAgICAgICAgIGF0dHJzOiB7IHRleHQ6IFwiQ2FuY2VsYXIgUGVkaWRvXCIgfSxcbiAgICAgICAgICAgIG9uOiB7IHRhcDogX3ZtLmNhbmNlbGFyIH1cbiAgICAgICAgICB9KSxcbiAgICAgICAgICBfYyhcIkJ1dHRvblwiLCB7XG4gICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uaXNBdmFsaWFjYW9Cb3RhbyxcbiAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImlzQXZhbGlhY2FvQm90YW9cIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuIGVzcGFjYW1lbnRvIGJ0bi1wcmltYXJ5IGJ0bi1vcmFuZ2VcIixcbiAgICAgICAgICAgIGF0dHJzOiB7IHRleHQ6IFwiQXZhbGlhw6fDo29cIiB9LFxuICAgICAgICAgICAgb246IHsgdGFwOiBfdm0uYXZhbGlhY2FvIH1cbiAgICAgICAgICB9KSxcbiAgICAgICAgICBfYyhcIkJ1dHRvblwiLCB7XG4gICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uaXNCb3Rhb1ZvbHRhcixcbiAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImlzQm90YW9Wb2x0YXJcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuIGVzcGFjYW1lbnRvIGJ0bi1wcmltYXJ5IGJ0bi1ncmV5XCIsXG4gICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBcIlZvbHRhclwiIH0sXG4gICAgICAgICAgICBvbjogeyB0YXA6IF92bS52b2x0YXIgfVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIF9jKFwiQnV0dG9uXCIsIHtcbiAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICAgICAgICAgICAgdmFsdWU6IF92bS5pc0F2YWxpYWNhb0JvdGFvVm9sdGFyLFxuICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiaXNBdmFsaWFjYW9Cb3Rhb1ZvbHRhclwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidG4gZXNwYWNhbWVudG8gYnRuLXByaW1hcnkgYnRuLWdyZXlcIixcbiAgICAgICAgICAgIGF0dHJzOiB7IHRleHQ6IFwiVm9sdGFyIGFvIHBlZGlkb1wiIH0sXG4gICAgICAgICAgICBvbjogeyB0YXA6IF92bS52b2x0YXJQZWRpZG8gfVxuICAgICAgICAgIH0pXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgIClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciBtYXAgPSB7XG5cdFwiLi9hcHAuY3NzXCI6IFwiLi9hcHAuY3NzXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vIHN5bmMgXlxcXFwuXFxcXC9hcHBcXFxcLihjc3N8c2Nzc3xsZXNzfHNhc3MpJFwiOyIsInZhciBtYXAgPSB7XG5cdFwiLi9fY29uZmlnL19jb25maWcuanNcIjogXCIuL19jb25maWcvX2NvbmZpZy5qc1wiLFxuXHRcIi4vYXBwLmNzc1wiOiBcIi4vYXBwLmNzc1wiLFxuXHRcIi4vYXBwLmpzXCI6IFwiLi9hcHAuanNcIixcblx0XCIuL3JvdXRlcy9pbmRleC5qc1wiOiBcIi4vcm91dGVzL2luZGV4LmpzXCIsXG5cdFwiLi9zZXJ2aWNlcy9iYWNrZW5kLXNlcnZpY2UuanNcIjogXCIuL3NlcnZpY2VzL2JhY2tlbmQtc2VydmljZS5qc1wiLFxuXHRcIi4vc2VydmljZXMvaGVsaWFyLWFwcC5qc1wiOiBcIi4vc2VydmljZXMvaGVsaWFyLWFwcC5qc1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuLyBzeW5jIHJlY3Vyc2l2ZSAoPzwhXFxcXGJBcHBfUmVzb3VyY2VzXFxcXGIuKikoPzwhXFxcXC5cXFxcL1xcXFxidGVzdHNcXFxcYlxcXFwvLio/KVxcXFwuKHhtbHxjc3N8anN8a3R8KD88IVxcXFwuZFxcXFwuKXRzfCg/PCFcXFxcYl9bXFxcXHctXSpcXFxcLilzY3NzKSRcIjsiLCJpbXBvcnQgeyBpc051bGxPclVuZGVmaW5lZCB9IGZyb20gXCJ1dGlsXCI7XG5jb25zdCBfY2hhdmVUb2tlbiA9IFwiZGV2aWNlX3Rva2VuXCI7XG5jb25zdCBfZGV2aWNlaWQgPSBcImRldmljZV9pZFwiXG5jb25zdCBfYXBpVXJsID0gXCJodHRwczovL2JyLWhlbGlhcmV4cHJlc3MtcWEuY2xhcmlvcy5jb20vYXBpL1wiO1xudmFyIGFwcGxpY2F0aW9uU2V0dGluZ3MgPSByZXF1aXJlKFwiYXBwbGljYXRpb24tc2V0dGluZ3NcIik7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb25maWcgeyAgICBcblxuICAgIGdldEFwaVVybCgpe1xuICAgICAgICByZXR1cm4gX2FwaVVybDtcbiAgICB9XG5cbiAgICBnZXRUb2tlbigpe1xuICAgICAgICBpZihhcHBsaWNhdGlvblNldHRpbmdzLmdldFN0cmluZyhfY2hhdmVUb2tlbikgPT0gbnVsbCB8fCBhcHBsaWNhdGlvblNldHRpbmdzLmdldFN0cmluZyhfY2hhdmVUb2tlbikgPT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgcmV0dXJuIFwiXCI7XG4gICAgICAgICAgICBcbiAgICAgICAgcmV0dXJuIGFwcGxpY2F0aW9uU2V0dGluZ3MuZ2V0U3RyaW5nKF9jaGF2ZVRva2VuKTtcbiAgICB9XG4gICAgc2V0VG9rZW4oX3Rva2VuKXtcbiAgICAgICAgYXBwbGljYXRpb25TZXR0aW5ncy5zZXRTdHJpbmcoX2NoYXZlVG9rZW4sIF90b2tlbik7XG4gICAgfVxuXG4gICAgZ2V0RGV2aWNlSWQoKXtcblxuICAgICAgICBpZihpc051bGxPclVuZGVmaW5lZChhcHBsaWNhdGlvblNldHRpbmdzLmdldFN0cmluZyhfZGV2aWNlaWQpKSlcbiAgICAgICAgICAgIHJldHVybiBcIlwiO1xuXG4gICAgICAgIHJldHVybiBhcHBsaWNhdGlvblNldHRpbmdzLmdldFN0cmluZyhfZGV2aWNlaWQpO1xuICAgIH1cbiAgICBzZXREZXZpY2VJZChfaWQpe1xuICAgICAgICBhcHBsaWNhdGlvblNldHRpbmdzLnNldFN0cmluZyhfZGV2aWNlaWQsIF9pZCk7XG4gICAgfVxuXG5cbn0iLCJnbG9iYWwucmVnaXN0ZXJNb2R1bGUoXCJ+bmF0aXZlc2NyaXB0LXRoZW1lLWNvcmUvY3NzL2NvcmUubGlnaHQuY3NzXCIsICgpID0+IHJlcXVpcmUoXCIhbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL2NzczJqc29uLWxvYWRlcj91c2VGb3JJbXBvcnRzIW5hdGl2ZXNjcmlwdC10aGVtZS1jb3JlL2Nzcy9jb3JlLmxpZ2h0LmNzc1wiKSk7XG5nbG9iYWwucmVnaXN0ZXJNb2R1bGUoXCJuYXRpdmVzY3JpcHQtdGhlbWUtY29yZS9jc3MvY29yZS5saWdodC5jc3NcIiwgKCkgPT4gcmVxdWlyZShcIiFuYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svY3NzMmpzb24tbG9hZGVyP3VzZUZvckltcG9ydHMhbmF0aXZlc2NyaXB0LXRoZW1lLWNvcmUvY3NzL2NvcmUubGlnaHQuY3NzXCIpKTttb2R1bGUuZXhwb3J0cyA9IHtcInR5cGVcIjpcInN0eWxlc2hlZXRcIixcInN0eWxlc2hlZXRcIjp7XCJydWxlc1wiOlt7XCJ0eXBlXCI6XCJpbXBvcnRcIixcImltcG9ydFwiOlwiJ35uYXRpdmVzY3JpcHQtdGhlbWUtY29yZS9jc3MvY29yZS5saWdodC5jc3MnXCJ9LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5idG4tcHJpbWFyeVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImhlaWdodFwiLFwidmFsdWVcIjpcIjUwXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYm9yZGVyLXJhZGl1c1wiLFwidmFsdWVcIjpcIjVcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJmb250LXNpemVcIixcInZhbHVlXCI6XCIyMFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImZvbnQtd2VpZ2h0XCIsXCJ2YWx1ZVwiOlwiNjAwXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLmJ0bi1ncmVlblwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJhY2tncm91bmQtY29sb3JcIixcInZhbHVlXCI6XCIjMDY3QTY1XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLmJ0bi1yZWRcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJ2YWx1ZVwiOlwiI0Q1MUExQVwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5idG4tcHJpbWFyeTpkaXNhYmxlZFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm9wYWNpdHlcIixcInZhbHVlXCI6XCIwLjVcIn1dfV0sXCJwYXJzaW5nRXJyb3JzXCI6W119fTs7XG4gICAgaWYgKG1vZHVsZS5ob3QpIHtcbiAgICAgICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHtcbiAgICAgICAgICAgIGdsb2JhbC5obXJSZWZyZXNoKHsgdHlwZTogJ3N0eWxlJywgcGF0aDogJy4vYXBwLmNzcycgfSk7XG4gICAgICAgIH0pXG4gICAgfVxuIiwiaW1wb3J0IFZ1ZSBmcm9tIFwibmF0aXZlc2NyaXB0LXZ1ZVwiO1xuaW1wb3J0IHJvdXRlcyBmcm9tIFwiLi9yb3V0ZXNcIjtcbmltcG9ydCBCYWNrZW5kU2VydmljZSBmcm9tIFwiLi9zZXJ2aWNlcy9iYWNrZW5kLXNlcnZpY2VcIjtcbmltcG9ydCBIZWxpYXJBcHAgZnJvbSBcIi4vc2VydmljZXMvaGVsaWFyLWFwcFwiO1xuaW1wb3J0IENvbmZpZyBmcm9tIFwiLi9fY29uZmlnL19jb25maWdcIjtcbmltcG9ydCB7IG1lc3NhZ2luZyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtcGx1Z2luLWZpcmViYXNlL21lc3NhZ2luZ1wiO1xuaW1wb3J0IHsgRnJhbWUgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL2ZyYW1lJztcblxuVnVlLmNvbmZpZy5zaWxlbnQgPSBmYWxzZTtcbmNvbnN0IGNvbmZpZyA9IG5ldyBDb25maWcoKTtcblZ1ZS5wcm90b3R5cGUuJGNvbmZpZyA9IGNvbmZpZztcblxuY29uc3QgYmFja2VuZFNlcnZpY2UgPSBuZXcgQmFja2VuZFNlcnZpY2UoKTtcblZ1ZS5wcm90b3R5cGUuJGJhY2tlbmRTZXJ2aWNlID0gYmFja2VuZFNlcnZpY2U7XG5cbmNvbnN0IGhlbGlhckFwcCA9IG5ldyBIZWxpYXJBcHAoKTtcblZ1ZS5wcm90b3R5cGUuJGhlbGlhckFwcCA9IGhlbGlhckFwcDtcblxuY29uc3QgeyBhbGVydCwgY29uZmlybSwgcHJvbXB0LCBsb2dpbiwgYWN0aW9uLCBpbnB1dFR5cGUgfSA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2RpYWxvZ3NcIik7XG52YXIgZmlyZWJhc2UgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LXBsdWdpbi1maXJlYmFzZVwiKTtcbnZhciBhcHBsaWNhdGlvblNldHRpbmdzID0gcmVxdWlyZShcImFwcGxpY2F0aW9uLXNldHRpbmdzXCIpO1xuXG5zZXRUaW1lb3V0KCgpPT57XG4gIGZpcmViYXNlLmluaXQoKVxuICAgICAgLnRoZW4oaW5zdGFuY2UgPT4ge1xuICAgICAgICAgIG1lc3NhZ2luZy5yZWdpc3RlckZvclB1c2hOb3RpZmljYXRpb25zKHtcblxuICAgICAgICAgICAgICBvblB1c2hUb2tlblJlY2VpdmVkQ2FsbGJhY2s6ICh0b2tlbikgPT4ge1xuICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJGaXJlYmFzZSBwbHVnaW4gcmVjZWl2ZWQgYSBwdXNoIHRva2VuOiBcIiArIHRva2VuKTtcbiAgICAgICAgICAgICAgICAgIGFwcGxpY2F0aW9uU2V0dGluZ3Muc2V0U3RyaW5nKCdkZXZpY2VfdG9rZW4nLCB0b2tlbik7XG4gICAgICAgICAgICAgICAgICBjb25maWcuc2V0VG9rZW4odG9rZW4pO1xuICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgIG9uTWVzc2FnZVJlY2VpdmVkQ2FsbGJhY2s6IChtZXNzYWdlKSA9PiB7XG4gICAgICAgICAgICAgICAgdmFyIGNvZGlnbyA9IG1lc3NhZ2UuZGF0YS5rZXlfMTtcbiAgICAgICAgICAgICAgICB2YXIgaGlzdG9yaWNvID0gbWVzc2FnZS5kYXRhLmtleV8yO1xuXG4gICAgICAgICAgICAgICAgYWxlcnQoe1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTogbWVzc2FnZS5kYXRhLnRpdGxlLFxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBtZXNzYWdlLmRhdGEuYm9keSxcbiAgICAgICAgICAgICAgICAgICAgb2tCdXR0b25UZXh0OiBcIlZpc3VhbGl6YXJcIixcbiAgICAgICAgICAgICAgICAgICAgY2FuY2VsQnV0dG9uVGV4dDogXCJDYW5jZWxhclwiXG4gICAgICAgICAgICAgICAgfSkudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIFZ1ZS5wcm90b3R5cGUuJGhlbGlhckFwcCBcbiAgICAgICAgICAgICAgICAgICAgLmlzTG9nZ2VkSW4oKVxuICAgICAgICAgICAgICAgICAgICAudGhlbigocmVzcG9uc2UpPT4geyAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihyZXNwb25zZS5TdGF0dXMgPT0gZmFsc2Upe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lbnNhZ2VtKFwiVXN1w6FyaW8gbsOjbyBhdXRlbnRpY2FkbyBwYXJhIHZpc3VhbGl6YXIgbyBwZWRpZG9cIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmF2aWdhdGVUb0xvZ2luKHJvdXRlcy5sb2dpbik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hdmlnYXRlVG8ocm91dGVzLnBlZGlkbywgY29kaWdvLCBoaXN0b3JpY28pOyAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQoXCJFcnJvIGFvIHZlcmlmaWNhciBhdXRlbnRpY2HDp8OjbyBkbyB1c3XDoXJpb1wiKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHNob3dOb3RpZmljYXRpb25zOiB0cnVlLFxuICAgICAgICAgICAgICBzaG93Tm90aWZpY2F0aW9uc1doZW5JbkZvcmVncm91bmQ6IHRydWVcbiAgICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oKCkgPT4gY29uc29sZS5sb2coXCJSZWdpc3RlcmVkIGZvciBwdXNoXCIpKVxuICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUubG9nKGByZWdpc3RlckZvclB1c2hOb3RpZmljYXRpb25zIGVycm9yOiAke2Vycm9yfWApKTtcblxuICAgICAgICAgIHNldFRpbWVvdXQoKCk9PntcbiAgICAgICAgICAgICAgbWVzc2FnaW5nLmdldEN1cnJlbnRQdXNoVG9rZW4oKVxuICAgICAgICAgICAgICAgICAgLnRoZW4odG9rZW4gPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVnaXN0ZXJGaXJlYmFzZSh0b2tlbik7XG4gICAgICAgICAgICAgICAgICB9LCBlID0+IGNvbnNvbGUubG9nKFwiRXJyb3I6IFwiICsgKGUubWVzc2FnZSB8fCBlKSkpO1xuICAgICAgICAgIH0sIDUwMDApO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coYGZpcmViYXNlLmluaXQgZXJyb3I6ICR7ZXJyb3J9YCk7XG4gICAgICAgICAgY29uc29sZS5sb2coXCJQcmVwYXJlIGdldCB0b2tlbi4uXCIpO1xuICAgICAgICAgIHNldFRpbWVvdXQoKCk9PntcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJHZXR0aW5nIHRva2VuLi5cIik7XG4gICAgICAgICAgICAgIG1lc3NhZ2luZy5nZXRDdXJyZW50UHVzaFRva2VuKClcbiAgICAgICAgICAgICAgICAgIC50aGVuKHRva2VuID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlRva2VuIGZvdW5kOiBcIiwgdG9rZW4pO1xuICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVnaXN0ZXJGaXJlYmFzZSh0b2tlbik7XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgLmNhdGNoKGUgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3IgZ2V0dGluZyB0b2tlbjogXCIgKyAoZS5tZXNzYWdlIHx8IGUpKTtcbiAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0sIDUwMDApO1xuICAgICAgfSk7XG4gICAgfSwzMDAwKSxcblxubmV3IFZ1ZSh7XG4gIHJlbmRlcjogaCA9PiBoKFwiZnJhbWVcIiwgW2goYmFja2VuZFNlcnZpY2UuaXNMb2dnZWRJbigpID8gcm91dGVzLmhvbWUgOiByb3V0ZXMubG9naW4pXSlcbn0pLiRzdGFydCgpO1xuXG5mdW5jdGlvbiBuYXZpZ2F0ZVRvIChwYWdlLCBjb2RpZ28sIGhpc3Rvcmljbykge1xuICAgIEZyYW1lLnRvcG1vc3QoKS5jdXJyZW50UGFnZS5fX3Z1ZVBhZ2VSZWZfXy4kbmF2aWdhdGVUbyhwYWdlLCB7XG4gICAgICAgIGNsZWFySGlzdG9yeTogdHJ1ZSxcbiAgICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICAgQ29kaWdvOiBjb2RpZ28sXG4gICAgICAgICAgICAgSGlzdG9yaWNvOiBoaXN0b3JpY29cbiAgICAgICAgIH1cbiAgICB9KVxufVxuXG5mdW5jdGlvbiBuYXZpZ2F0ZVRvTG9naW4gKHBhZ2UpIHtcbiAgICBGcmFtZS50b3Btb3N0KCkuY3VycmVudFBhZ2UuX192dWVQYWdlUmVmX18uJG5hdmlnYXRlVG8ocGFnZSwge1xuICAgICAgICBjbGVhckhpc3Rvcnk6IHRydWVcbiAgICB9KVxufVxuXG5mdW5jdGlvbiBtZW5zYWdlbShtZXNzYWdlKSB7XG4gICAgcmV0dXJuIGFsZXJ0KHtcbiAgICAgICAgdGl0bGU6IFwiQXRlbsOnw6NvXCIsXG4gICAgICAgIG9rQnV0dG9uVGV4dDogXCJPS1wiLFxuICAgICAgICBtZXNzYWdlOiBtZXNzYWdlXG4gICAgfSk7XG59XG4iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0VkaXRhci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MzAxNGE3NTYmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vRWRpdGFyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vRWRpdGFyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9FZGl0YXIudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9Vc2Vycy91c2VyOTM0NDkxL0RvY3VtZW50cy9IZWxpYXJIZXhwcmVzcy5BUFBMb2ppc3RhL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzMwMTRhNzU2JykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzMwMTRhNzU2JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzMwMTRhNzU2JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9FZGl0YXIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTMwMTRhNzU2JlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzMwMTRhNzU2Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJjb21wb25lbnRzL0VkaXRhci52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRWRpdGFyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0VkaXRhci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svc3R5bGUtaG90LWxvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL2FwcGx5LWNzcy1sb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMy0yIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0VkaXRhci52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL3N0eWxlLWhvdC1sb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9hcHBseS1jc3MtbG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTMtMiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9FZGl0YXIudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRWRpdGFyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zMDE0YTc1NiZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vSG9tZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9Njc0MTBmM2EmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vSG9tZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0hvbWUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL0hvbWUudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9Vc2Vycy91c2VyOTM0NDkxL0RvY3VtZW50cy9IZWxpYXJIZXhwcmVzcy5BUFBMb2ppc3RhL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzY3NDEwZjNhJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzY3NDEwZjNhJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzY3NDEwZjNhJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9Ib21lLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02NzQxMGYzYSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc2NzQxMGYzYScsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiY29tcG9uZW50cy9Ib21lLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Ib21lLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0hvbWUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL3N0eWxlLWhvdC1sb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9hcHBseS1jc3MtbG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTMtMiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Ib21lLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svc3R5bGUtaG90LWxvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL2FwcGx5LWNzcy1sb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMy0yIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0hvbWUudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vSG9tZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9Njc0MTBmM2EmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0xvZ2luLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1jMjc0ODJjNCZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9Mb2dpbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0xvZ2luLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9Mb2dpbi52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1jMjc0ODJjNCZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiYzI3NDgyYzRcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMvdXNlcjkzNDQ5MS9Eb2N1bWVudHMvSGVsaWFySGV4cHJlc3MuQVBQTG9qaXN0YS9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCdjMjc0ODJjNCcpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCdjMjc0ODJjNCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCdjMjc0ODJjNCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vTG9naW4udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWMyNzQ4MmM0JnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJ2MyNzQ4MmM0Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJjb21wb25lbnRzL0xvZ2luLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Mb2dpbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Mb2dpbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svc3R5bGUtaG90LWxvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL2FwcGx5LWNzcy1sb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMy0yIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0xvZ2luLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWMyNzQ4MmM0JnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svc3R5bGUtaG90LWxvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL2FwcGx5LWNzcy1sb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMy0yIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0xvZ2luLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWMyNzQ4MmM0JnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0xvZ2luLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1jMjc0ODJjNCZzY29wZWQ9dHJ1ZSZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vUGVkaWRvLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wOWFhNmM0MCZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9QZWRpZG8udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9QZWRpZG8udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL1BlZGlkby52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL3VzZXI5MzQ0OTEvRG9jdW1lbnRzL0hlbGlhckhleHByZXNzLkFQUExvamlzdGEvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnMDlhYTZjNDAnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMDlhYTZjNDAnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMDlhYTZjNDAnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1BlZGlkby52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MDlhYTZjNDAmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMDlhYTZjNDAnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImNvbXBvbmVudHMvUGVkaWRvLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9QZWRpZG8udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vUGVkaWRvLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9zdHlsZS1ob3QtbG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svYXBwbHktY3NzLWxvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0zLTIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vUGVkaWRvLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svc3R5bGUtaG90LWxvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL2FwcGx5LWNzcy1sb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMy0yIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1BlZGlkby52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9QZWRpZG8udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTA5YWE2YzQwJlwiIiwiaW1wb3J0IExvZ2luIGZyb20gXCIuLi9jb21wb25lbnRzL0xvZ2luXCI7XG5pbXBvcnQgSG9tZSBmcm9tIFwiLi4vY29tcG9uZW50cy9Ib21lXCI7XG5pbXBvcnQgUGVkaWRvIGZyb20gXCIuLi9jb21wb25lbnRzL1BlZGlkb1wiO1xuXG5jb25zdCByb3V0ZXMgPSB7XG4gICAgbG9naW46IExvZ2luLFxuICAgIGhvbWU6IEhvbWUsXG4gICAgcGVkaWRvIDogUGVkaWRvXG59XG5leHBvcnQgZGVmYXVsdCByb3V0ZXM7IiwiLy8gVGhlIGZvbGxvd2luZyBpcyBhIHNhbXBsZSBpbXBsZW1lbnRhdGlvbiBvZiBhIGJhY2tlbmQgc2VydmljZSB1c2luZyBQcm9ncmVzcyBLaW52ZXkgKGh0dHBzOi8vd3d3LnByb2dyZXNzLmNvbS9raW52ZXkpLlxuLy8gRmVlbCBmcmVlIHRvIHN3YXAgaW4geW91ciBvd24gc2VydmljZSAvIEFQSXMgLyBldGMgaGVyZSBmb3IgeW91ciBvd24gYXBwcy5cblxuaW1wb3J0ICogYXMgS2ludmV5IGZyb20gXCJraW52ZXktbmF0aXZlc2NyaXB0LXNka1wiO1xuXG5LaW52ZXkuaW5pdCh7XG4gICAgYXBwS2V5OiBcImtpZF9TeVk4TFlPOE1cIixcbiAgICBhcHBTZWNyZXQ6IFwiMDkyODI5ODVkN2M1NDBmN2IwNzZhOWM3ZmQ4ODRjNzdcIlxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhY2tlbmRTZXJ2aWNlIHtcblxuICAgIGlzTG9nZ2VkSW4oKSB7XG4gICAgICAgIHJldHVybiAhIUtpbnZleS5Vc2VyLmdldEFjdGl2ZVVzZXIoKTtcbiAgICB9XG5cbiAgICBsb2dpbih1c2VyKSB7XG4gICAgICAgIHJldHVybiBLaW52ZXkuVXNlci5sb2dpbih1c2VyLmVtYWlsLCB1c2VyLnBhc3N3b3JkKTtcbiAgICB9XG5cbiAgICByZXNldFBhc3N3b3JkKHVzZXIpIHtcbiAgICAgICAgcmV0dXJuIEtpbnZleS5Vc2VyLnJlc2V0UGFzc3dvcmQodXNlcik7XG4gICAgfVxuXG4gICAgbG9nb3V0KCkge1xuICAgICAgICByZXR1cm4gS2ludmV5LlVzZXIubG9nb3V0KCk7XG4gICAgfVxuXG4gICAgcmVnaXN0ZXIodXNlcikge1xuICAgICAgICByZXR1cm4gS2ludmV5LlVzZXIuc2lnbnVwKHsgdXNlcm5hbWU6IHVzZXIuZW1haWwsIHBhc3N3b3JkOiB1c2VyLnBhc3N3b3JkIH0pO1xuICAgIH1cbn1cblxuIiwiaW1wb3J0ICogYXMgaHR0cCBmcm9tIFwiaHR0cFwiO1xuaW1wb3J0ICogYXMgS2ludmV5IGZyb20gXCJraW52ZXktbmF0aXZlc2NyaXB0LXNka1wiO1xuaW1wb3J0IENvbmZpZyBmcm9tIFwiLi4vX2NvbmZpZy9fY29uZmlnXCI7XG5pbXBvcnQgeyBpc051bGxPclVuZGVmaW5lZCB9IGZyb20gXCJ1dGlsXCI7XG52YXIgY29uZmlnID0gbmV3IENvbmZpZygpO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGVsaWFyQXBwIHtcblxuICAgIC8vIHRlbGEgZGUgYXV0ZW50aWNhY2FvXG4gICAgaXNMb2dnZWRJbigpIHsgIFxuICAgICAgICBcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdEhlbGlhcihcImF1dGVudGljYWNhb21vYmlsZS92ZXJpZmljYXJhdXRlbnRpY2Fkb1wiLFxuICAgICAgICBKU09OLnN0cmluZ2lmeSh7ICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB0b2tlbiA6IGNvbmZpZy5nZXRUb2tlbigpXG4gICAgICAgIH0pLFxuICAgICAgICBcIlBPU1RcIilcbiAgICB9XG5cbiAgICBkZXNhdXRlbnRpY2FyKCkgeyBcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdEhlbGlhcihcImF1dGVudGljYWNhb21vYmlsZS9kZXNhdXRlbnRpY2FyXCIsXG4gICAgICAgICAgICBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgICAgZGlzcG9zaXRpdm86IGNvbmZpZy5nZXREZXZpY2VJZCgpLFxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBcIlBPU1RcIlxuICAgICAgICApXG4gICAgfVxuXG4gICAgbG9naW4odXNlcikgeyBcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdEhlbGlhcihcImF1dGVudGljYWNhb21vYmlsZS9hdXRlbnRpY2FyXCIsXG4gICAgICAgICAgICBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgICAgZW1haWw6IHVzZXIuZW1haWwsXG4gICAgICAgICAgICAgICAgc2VuaGE6IHVzZXIucGFzc3dvcmQsXG4gICAgICAgICAgICAgICAgdG9rZW46IGNvbmZpZy5nZXRUb2tlbigpLFxuICAgICAgICAgICAgICAgIGRpc3Bvc2l0aXZvIDogY29uZmlnLmdldERldmljZUlkKClcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgXCJQT1NUXCJcbiAgICAgICAgKVxuICAgIH1cblxuICAgIHJlc2V0UGFzc3dvcmQodXNlcikgeyBcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdEhlbGlhcihcImF1dGVudGljYWNhb21vYmlsZS9lc3F1ZWNpc2VuaGFcIixcbiAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICBlbWFpbDogdXNlcixcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgXCJQT1NUXCJcbiAgICAgICAgKVxuICAgIH1cblxuICAgIGxvZ291dCgpIHtcbiAgICAgICAgcmV0dXJuIEtpbnZleS5Vc2VyLmxvZ291dCgpO1xuICAgIH1cblxuICAgIHJlZ2lzdGVyKHVzZXIpIHtcbiAgICAgICAgcmV0dXJuIEtpbnZleS5Vc2VyLnNpZ251cCh7IHVzZXJuYW1lOiB1c2VyLmVtYWlsLCBwYXNzd29yZDogdXNlci5wYXNzd29yZCB9KTtcbiAgICB9XG4gICAgLy9maW0gdGVsYSBkZSBhdXRlbnRpY2FjYW9cblxuICAgIC8vIHRlbGEgZGUgcGVkaWRvc1xuICAgIHBlZGlkb3MoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdEhlbGlhcihcInBlZGlkb21vYmlsZS9saXN0YXJwZWRpZG9zXCIsXG4gICAgICAgICAgICBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgICAgZGlzcG9zaXRpdm86IGNvbmZpZy5nZXREZXZpY2VJZCgpLFxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBcIlBPU1RcIlxuICAgICAgICApXG4gICAgfTtcblxuICAgIHBlZGlkb3NIaXN0b3JpY28ocGVkaWRvU3RhdHVzLCBkYXRhSW5pY2lhbCwgZGF0YUZpbmFsKXtcblxuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0SGVsaWFyKFwicGVkaWRvbW9iaWxlL2xpc3RhcnBlZGlkb3NoaXN0b3JpY29cIixcbiAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KHsgICAgXG4gICAgICAgICAgICAgICAgU3RhdHVzUGVkaWRvRmlsdHJvOiBwZWRpZG9TdGF0dXMsXG4gICAgICAgICAgICAgICAgRGF0YUluaWNpYWw6IGRhdGFJbmljaWFsLFxuICAgICAgICAgICAgICAgIERhdGFGaW5hbDogZGF0YUZpbmFsLFxuICAgICAgICAgICAgICAgIGRpc3Bvc2l0aXZvOiBjb25maWcuZ2V0RGV2aWNlSWQoKSxcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgXCJQT1NUXCJcbiAgICAgICAgKVxuICAgIH07XG5cbiAgICBkZXRhbGhlUGVkaWRvKGNvZGlnbyl7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RIZWxpYXIoXCJwZWRpZG9tb2JpbGUvZGV0YWxoZXBlZGlkb1wiLFxuICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgIGNvZGlnb1BlZGlkbzogY29kaWdvLFxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBcIlBPU1RcIlxuICAgICAgICApICAgXG4gICAgfVxuICAgIC8vIGZpbSB0ZWxhIGRlIHBlZGlkb3NcblxuICAgIC8vIGFjZWl0YXIgb3UgcmVjdXNhciBwZWRpZG9cbiAgICBhY2VpdGFyUGVkaWRvKGNvZGlnbywgaXNBY2VpdG8pe1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0SGVsaWFyKFwiYWNlaXRhcnBlZGlkb21vYmlsZS9hY2VpdGFycGVkaWRvbW9iaWxlXCIsXG4gICAgICAgICAgICBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgICAgY29kaWdvUGVkaWRvOiBjb2RpZ28sXG4gICAgICAgICAgICAgICAgYWNlaXRhUGVkaWRvOiBpc0FjZWl0byxcbiAgICAgICAgICAgICAgICBkaXNwb3NpdGl2bzogY29uZmlnLmdldERldmljZUlkKClcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgXCJQT1NUXCJcbiAgICAgICAgKSAgIFxuICAgIH1cblxuICAgIHJlY3VzYXJQZWRpZG8oY29kaWdvLCBpc0FjZWl0bywgcmVzdWx0LCBvdXRyb3Mpe1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0SGVsaWFyKFwiYWNlaXRhcnBlZGlkb21vYmlsZS9hY2VpdGFycGVkaWRvbW9iaWxlXCIsXG4gICAgICAgICAgICBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgICAgY29kaWdvUGVkaWRvOiBjb2RpZ28sXG4gICAgICAgICAgICAgICAgYWNlaXRhUGVkaWRvOiBpc0FjZWl0byxcbiAgICAgICAgICAgICAgICBkaXNwb3NpdGl2bzogY29uZmlnLmdldERldmljZUlkKCksXG4gICAgICAgICAgICAgICAgbW90aXZvOiByZXN1bHQsXG4gICAgICAgICAgICAgICAgTW90aXZvT3V0cm9zOiBvdXRyb3NcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgXCJQT1NUXCJcbiAgICAgICAgKSAgIFxuICAgIH1cblxuICAgIGVuY2VycmFyUGVkaWRvKGNvZGlnbyl7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RIZWxpYXIoXCJhbHRlcmFycGVkaWRvbW9iaWxlL2FsdGVyYXJzdGF0dXNwZWRpZG9tb2JpbGVcIixcbiAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICBjb2RpZ29QZWRpZG86IGNvZGlnbyxcbiAgICAgICAgICAgICAgICBjb2RpZ29TdGF0dXM6IDEwLCAvLyAxMCA9IGVudHJlZ3VlXG4gICAgICAgICAgICAgICAgZGlzcG9zaXRpdm86IGNvbmZpZy5nZXREZXZpY2VJZCgpXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIFwiUE9TVFwiXG4gICAgICAgICkgICBcbiAgICB9XG5cbiAgICBjYW5jZWxhclBlZGlkbyhjb2RpZ28sIHJlc3VsdCwgb3V0cm9zKXtcbiAgICAgICAgaWYob3V0cm9zICE9ICcnKSB7XG4gICAgICAgICAgICByZXN1bHQgPSBvdXRyb3M7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0SGVsaWFyKFwiYWx0ZXJhcnBlZGlkb21vYmlsZS9hbHRlcmFyc3RhdHVzcGVkaWRvbW9iaWxlXCIsXG4gICAgICAgICAgICBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgICAgY29kaWdvUGVkaWRvOiBjb2RpZ28sXG4gICAgICAgICAgICAgICAgY29kaWdvU3RhdHVzOiAxMSwgLy9wZWRpb2RvIGNhbmNlbGFkbyBwZWxhIGxvamFcbiAgICAgICAgICAgICAgICBkaXNwb3NpdGl2bzogY29uZmlnLmdldERldmljZUlkKCksXG4gICAgICAgICAgICAgICAgbW90aXZvOiByZXN1bHQsXG4gICAgICAgICAgICAgICAgTW90aXZvT3V0cm9zOiBvdXRyb3NcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgXCJQT1NUXCJcbiAgICAgICAgKSAgIFxuICAgIH1cbiAgICAvLyBmaW0gYWNlaXRhciBvdSByZWN1c2FyIHBlZGlkb1xuICAgIFxuICAgIC8vIHBvcHVsYXIgZGFkb3NcbiAgICBwb3B1bGFyRGFkb3MoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdEhlbGlhcihcImFsdGVyYXJkYWRvc21vYmlsZS9vYnRlcmRhZG9zXCIsXG4gICAgICAgICAgICBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgICAgZGlzcG9zaXRpdm86IGNvbmZpZy5nZXREZXZpY2VJZCgpXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIFwiUE9TVFwiXG4gICAgICAgICkgICBcbiAgICB9XG4gICAgLy8gcG9wdWxhciBkYWRvc1xuXG4gICAgLy8gc2FsdmFyIGRhZG9zXG4gICAgc2FsdmFyRGFkb3MoQ29kaWdvLCBOb21lLCBFbWFpbCwgU2VuaGEsIFNlbmhhQXR1YWwsIENvbmZpcm1hclNlbmhhKXtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdEhlbGlhcihcImFsdGVyYXJkYWRvc21vYmlsZS9BbHRlcmFyRGFkb3NcIixcbiAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICBDb2RpZ286IENvZGlnbyxcbiAgICAgICAgICAgICAgICBOb21lOiBOb21lLFxuICAgICAgICAgICAgICAgIEVtYWlsOiBFbWFpbCxcbiAgICAgICAgICAgICAgICBTZW5oYTogU2VuaGEsXG4gICAgICAgICAgICAgICAgU2VuaGFBdHVhbDogU2VuaGFBdHVhbCxcbiAgICAgICAgICAgICAgICBDb25maXJtYXJTZW5oYTogQ29uZmlybWFyU2VuaGFcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgXCJQT1NUXCJcbiAgICAgICAgKSAgIFxuICAgIH1cbiAgICAvLyBzYWx2YXIgZGFkb3NcblxuICAgIHJlcXVlc3RIZWxpYXIodXJsLCBvYmpldG8sIG1ldG9kbykge1xuICAgICAgICB2YXIgYXBpVXJsID0gY29uZmlnLmdldEFwaVVybCgpO1xuXG4gICAgICAgIHJldHVybiBodHRwLnJlcXVlc3Qoe1xuICAgICAgICAgICAgdXJsOiBhcGlVcmwrdXJsLFxuICAgICAgICAgICAgbWV0aG9kOiBtZXRvZG8sXG4gICAgICAgICAgICBoZWFkZXJzOiB7IFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiIH0sXG4gICAgICAgICAgICBjb250ZW50OiBvYmpldG9cbiAgICAgICAgfSkudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuY29udGVudC50b0pTT04oKTtcbiAgICAgICAgfSwgZXJyb3IgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGVycm9yO1xuICAgICAgICB9KTtcbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ==