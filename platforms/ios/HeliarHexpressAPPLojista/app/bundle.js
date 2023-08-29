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
      this.$heliarApp.pedidos().then(response => {
        this.items = response.Pedidos;
      }).catch(() => {
        alert("Erro ao encontrar seus pedidos");
      });
    },

    pedidosHistorico() {
      this.$heliarApp.pedidosHistorico(this.PedidoStatus, this.ValueDataDe, this.ValueDataAte).then(responseHistorico => {
        this.itemsHistorico = responseHistorico.Pedidos;
      }).catch(() => {
        alert("Erro ao encontrar seus pedidos");
      });
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
      isRecaptcha: false,
      user: {
        email: "",
        password: "",
        confirmPassword: ""
      },
      retornoLogin: ""
    };
  },

  methods: {
    recaptcha(e) {
      if (e.url.indexOf("sucess=true") != -1) {
        this.isRecaptcha = true;
      }
    },

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
      }

      if (!this.isRecaptcha) {
        this.retornoLogin = "Por favor, preencha o captcha!";
        return;
      }

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

        if (response == null || response.Status == false) {
          this.retornoLogin = response.Mensagem;
          return;
        }

        config.setToken(response.Token);
        config.setDeviceId(response.Dispositivo);
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

exports = module.exports = __webpack_require__("../node_modules/css-loader/lib/css-base.js")(false);
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
    if (false) {}


/***/ }),

/***/ "../node_modules/nativescript-dev-webpack/style-hot-loader.js!../node_modules/nativescript-dev-webpack/apply-css-loader.js!../node_modules/css-loader/index.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/vue-loader/lib/index.js?!./components/Home.vue?vue&type=style&index=0&lang=css&":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../node_modules/css-loader/lib/css-base.js")(false);
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
    if (false) {}


/***/ }),

/***/ "../node_modules/nativescript-dev-webpack/style-hot-loader.js!../node_modules/nativescript-dev-webpack/apply-css-loader.js!../node_modules/css-loader/index.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/vue-loader/lib/index.js?!./components/Login.vue?vue&type=style&index=0&id=c27482c4&scoped=true&lang=css&":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../node_modules/css-loader/lib/css-base.js")(false);
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
    if (false) {}


/***/ }),

/***/ "../node_modules/nativescript-dev-webpack/style-hot-loader.js!../node_modules/nativescript-dev-webpack/apply-css-loader.js!../node_modules/css-loader/index.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/vue-loader/lib/index.js?!./components/Pedido.vue?vue&type=style&index=0&lang=css&":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.lbl {\n    color: #FFF;\n    margin-left: 10;\n    margin-right: 10;\n}\n.bold {\n    font-weight: bold;\n}\n.form{\n    margin-left:20px;\n}\n.telefone\n{\n    color:#000;\n    font-size: 16px;\n    margin-bottom: 5px;\n}\n.espacamento{\n    margin-top:8px;\n    margin-bottom:8px;\n}\n.logo-ico{\n     height: 20;\n     width: 40;\n}\n.telefone-format{\n     background-image: url('~/images/ligar.png');\n     background-repeat: no-repeat;\n     background-size: 150px 70px;\n     background-position: right;\n     padding: 0 180px 0 0;\n}\n.whats-format{\n     background-image: url('~/images/whats.png');\n     background-repeat: no-repeat;\n     background-size: 50px 50px;\n     background-position: right;\n     padding: 0 80px 0 0;\n}\n.img-mapa{\n     width: 190px;\n}\n.img-mapa-compartilhar{\n     width: 380px;\n     margin-left: 15px;\n}\n", ""]);

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
    if (false) {}


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
        { attrs: { title: "" } },
        [
          _c(
            "StackLayout",
            {
              attrs: {
                orientation: "horizontal",
                "ios:horizontalAlignment": "left",
                "android:horizontalAlignment": "left"
              }
            },
            [
              _c("Image", {
                staticStyle: { height: "100px", float: "right" },
                attrs: { src: "~/images/logo.png" }
              })
            ],
            1
          ),
          _c(
            "ActionItem",
            { attrs: { "ios.position": "right" }, on: { tap: _vm.editar } },
            [
              _c("Image", { attrs: { src: "~/images/logo-topo.png" } }),
              _c("Image", {
                staticClass: "edicao",
                attrs: { src: "res://edicao" }
              })
            ],
            1
          ),
          _c(
            "ActionItem",
            { attrs: { "ios.position": "right" }, on: { tap: _vm.logout } },
            [
              _c("Image", { attrs: { src: "~/images/logo-topo.png" } }),
              _c("Image", { staticClass: "sair", attrs: { src: "res://sair" } })
            ],
            1
          )
        ],
        1
      ),
      _c(
        "StackLayout",
        { attrs: { backgroundColor: "#045244" } },
        [
          _c(
            "Tabs",
            { attrs: { selectedIndex: _vm.selectedIndex } },
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
                      _c(
                        "ListView",
                        {
                          staticClass: "list-group",
                          attrs: { items: _vm.itemsHistorico, "+alias": "item" }
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
                                        staticClass:
                                          "btn btn-primary btn-orange",
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
  var this$1 = this
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
                          }),
                          !this.isRecaptcha
                            ? _c("WebView", {
                                attrs: {
                                  src:
                                    "https://www.heliarexpress.com.br/recaptcha.html"
                                },
                                on: {
                                  loadFinished: function(e) {
                                    this$1.recaptcha(e)
                                  }
                                }
                              })
                            : _vm._e()
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
var _apiUrl = "https://www.heliarexpress.com.br/api/";

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
    if (false) {}

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
            
            
        if (false) {}
        
            const context = __webpack_require__("./ sync recursive (?<!\\bApp_Resources\\b.*)(?<!\\.\\/\\btests\\b\\/.*?)\\.(xml|css|js|kt|(?<!\\.d\\.)ts|(?<!\\b_[\\w-]*\\.)scss)$");
            global.registerWebpackModules(context);
            if (false) {}
            
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
if (false) { var api; }
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
/* empty/unused harmony star reexport *//* harmony import */ var _Home_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./components/Home.vue?vue&type=style&index=0&lang=css&");
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
if (false) { var api; }
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
if (false) { var api; }
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
if (false) { var api; }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vY29tcG9uZW50cy9FZGl0YXIudnVlIiwid2VicGFjazovLy9jb21wb25lbnRzL0hvbWUudnVlIiwid2VicGFjazovLy9jb21wb25lbnRzL0xvZ2luLnZ1ZSIsIndlYnBhY2s6Ly8vY29tcG9uZW50cy9QZWRpZG8udnVlIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvRWRpdGFyLnZ1ZT8yZjI2Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSG9tZS52dWU/NGY3YiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xvZ2luLnZ1ZT8wMTQ3Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvUGVkaWRvLnZ1ZT9kMGZlIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvRWRpdGFyLnZ1ZT8yZjcxIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSG9tZS52dWU/YjY2YiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xvZ2luLnZ1ZT8zY2U4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvUGVkaWRvLnZ1ZT9iODIxIiwid2VicGFjazovLy8uIHN5bmMgbm9ucmVjdXJzaXZlIF5cXC5cXC9hcHBcXC4oY3NzfHNjc3N8bGVzc3xzYXNzKSQiLCJ3ZWJwYWNrOi8vL1xcYl9bXFx3LV0qXFwuKXNjc3MpJCIsIndlYnBhY2s6Ly8vLi9fY29uZmlnL19jb25maWcuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwLmNzcyIsIndlYnBhY2s6Ly8vLi9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9FZGl0YXIudnVlIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvRWRpdGFyLnZ1ZT8yMWNhIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvRWRpdGFyLnZ1ZT82Mzc5Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvRWRpdGFyLnZ1ZT8zNTFkIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSG9tZS52dWUiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Ib21lLnZ1ZT81NjI1Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSG9tZS52dWU/OWI4NSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hvbWUudnVlPzgzNDIiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Mb2dpbi52dWUiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Mb2dpbi52dWU/ZTYwNiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xvZ2luLnZ1ZT8yMTI0Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTG9naW4udnVlP2ZiNGYiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9QZWRpZG8udnVlIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvUGVkaWRvLnZ1ZT9iMDBhIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvUGVkaWRvLnZ1ZT85M2QzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvUGVkaWRvLnZ1ZT9hMjllIiwid2VicGFjazovLy8uL3JvdXRlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zZXJ2aWNlcy9iYWNrZW5kLXNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vc2VydmljZXMvaGVsaWFyLWFwcC5qcyJdLCJuYW1lcyI6WyJfY2hhdmVUb2tlbiIsIl9kZXZpY2VpZCIsIl9hcGlVcmwiLCJhcHBsaWNhdGlvblNldHRpbmdzIiwicmVxdWlyZSIsIkNvbmZpZyIsImdldEFwaVVybCIsImdldFRva2VuIiwiZ2V0U3RyaW5nIiwidW5kZWZpbmVkIiwic2V0VG9rZW4iLCJfdG9rZW4iLCJzZXRTdHJpbmciLCJnZXREZXZpY2VJZCIsImlzTnVsbE9yVW5kZWZpbmVkIiwic2V0RGV2aWNlSWQiLCJfaWQiLCJyb3V0ZXMiLCJCYWNrZW5kU2VydmljZSIsIkhlbGlhckFwcCIsImZpcmViYXNlIiwib25QdXNoVG9rZW5SZWNlaXZlZENhbGxiYWNrIiwiY29uc29sZSIsImxvZyIsInRpdGxlIiwibWVzc2FnZSIsImRhdGEiLCJva0J1dHRvblRleHQiLCJjYW5jZWxCdXR0b25UZXh0IiwidGhlbiIsInJlc3VsdCIsIlZ1ZSIsInByb3RvdHlwZSIsIiRoZWxpYXJBcHAiLCJyZXNwb25zZSIsIlN0YXR1cyIsIm5hdmlnYXRlVG9Mb2dpbiIsIm5hdmlnYXRlVG8iLCJhbGVydCIsInNob3dOb3RpZmljYXRpb25zIiwiY2F0Y2giLCJtZXNzYWdpbmciLCJnZXRDdXJyZW50UHVzaFRva2VuIiwicmVnaXN0ZXJGaXJlYmFzZSIsInRva2VuIiwiZSIsImVycm9yIiwic2V0VGltZW91dCIsInJlbmRlciIsImgiLCJiYWNrZW5kU2VydmljZSIsIiRzdGFydCIsIkZyYW1lIiwidG9wbW9zdCIsImN1cnJlbnRQYWdlIiwiX192dWVQYWdlUmVmX18iLCIkbmF2aWdhdGVUbyIsInBhZ2UiLCJjbGVhckhpc3RvcnkiLCJwcm9wcyIsIkNvZGlnbyIsImNvZGlnbyIsIkhpc3RvcmljbyIsImhpc3RvcmljbyIsIm1lbnNhZ2VtIiwibG9naW4iLCJMb2dpbiIsImhvbWUiLCJIb21lIiwicGVkaWRvIiwiUGVkaWRvIiwiS2ludmV5IiwiYXBwS2V5IiwiYXBwU2VjcmV0IiwiaXNMb2dnZWRJbiIsImdldEFjdGl2ZVVzZXIiLCJ1c2VyIiwiZW1haWwiLCJwYXNzd29yZCIsInJlc2V0UGFzc3dvcmQiLCJsb2dvdXQiLCJyZWdpc3RlciIsInNpZ251cCIsInVzZXJuYW1lIiwiY29uZmlnIiwicmVxdWVzdEhlbGlhciIsIkpTT04iLCJzdHJpbmdpZnkiLCJkZXNhdXRlbnRpY2FyIiwiZGlzcG9zaXRpdm8iLCJzZW5oYSIsInBlZGlkb3MiLCJwZWRpZG9zSGlzdG9yaWNvIiwicGVkaWRvU3RhdHVzIiwiZGF0YUluaWNpYWwiLCJkYXRhRmluYWwiLCJTdGF0dXNQZWRpZG9GaWx0cm8iLCJEYXRhSW5pY2lhbCIsIkRhdGFGaW5hbCIsImRldGFsaGVQZWRpZG8iLCJjb2RpZ29QZWRpZG8iLCJhY2VpdGFyUGVkaWRvIiwiaXNBY2VpdG8iLCJhY2VpdGFQZWRpZG8iLCJyZWN1c2FyUGVkaWRvIiwib3V0cm9zIiwibW90aXZvIiwiTW90aXZvT3V0cm9zIiwiZW5jZXJyYXJQZWRpZG8iLCJjb2RpZ29TdGF0dXMiLCJjYW5jZWxhclBlZGlkbyIsInBvcHVsYXJEYWRvcyIsInNhbHZhckRhZG9zIiwiTm9tZSIsIkVtYWlsIiwiU2VuaGEiLCJTZW5oYUF0dWFsIiwiQ29uZmlybWFyU2VuaGEiLCJ1cmwiLCJvYmpldG8iLCJtZXRvZG8iLCJhcGlVcmwiLCJodHRwIiwibWV0aG9kIiwiaGVhZGVycyIsImNvbnRlbnQiLCJ0b0pTT04iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF3RUE7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQSxHQUhBOztBQUlBLHNCQUpBO0FBS0E7QUFDQTtBQUNBLEdBUEE7QUFRQTtBQUNBO0FBQ0Esc0JBQ0EsWUFEQSxHQUVBLElBRkEsQ0FFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBSEEsTUFJQTtBQUNBO0FBQ0E7QUFDQSxPQVZBLEVBV0EsS0FYQSxDQVdBO0FBQ0E7QUFDQSxPQWJBO0FBY0EsS0FoQkE7O0FBaUJBO0FBQ0E7QUFDQSwwQkFEQTtBQUVBO0FBQ0E7QUFEQTtBQUZBO0FBTUEsS0F4QkE7O0FBeUJBO0FBQ0Esc0JBQ0EsV0FEQSxDQUNBLG1CQURBLEVBQ0EsaUJBREEsRUFDQSxrQkFEQSxFQUNBLGtCQURBLEVBQ0EsdUJBREEsRUFDQSwyQkFEQSxFQUVBLElBRkEsQ0FFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQSxTQUxBLE1BTUE7QUFDQTtBQUNBO0FBQ0EsT0FaQSxFQWFBLEtBYkEsQ0FhQTtBQUNBO0FBQ0EsT0FmQTtBQWdCQSxLQTFDQTs7QUEyQ0E7QUFDQTtBQUNBLEtBN0NBOztBQThDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBbERB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QUNsRSxtQ0FBbUMsU0FBUyx3QkFBd0IsRUFBRTtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQyx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QztBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUM7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUM7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QztBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QztBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUM7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QztBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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TCxLQUFmLENBREcsRUFTSCxNQVRHLENBQVA7QUFXSCxHQWxLMEIsQ0FtSzNCOzs7QUFFQWhDLGVBQWEsQ0FBQ2lDLEdBQUQsRUFBTUMsTUFBTixFQUFjQyxNQUFkLEVBQXNCO0FBQy9CLFFBQUlDLE1BQU0sR0FBR3JDLE1BQU0sQ0FBQzlFLFNBQVAsRUFBYjtBQUVBLFdBQU9vSCw0Q0FBQSxDQUFhO0FBQ2hCSixTQUFHLEVBQUVHLE1BQU0sR0FBQ0gsR0FESTtBQUVoQkssWUFBTSxFQUFFSCxNQUZRO0FBR2hCSSxhQUFPLEVBQUU7QUFBRSx3QkFBZ0I7QUFBbEIsT0FITztBQUloQkMsYUFBTyxFQUFFTjtBQUpPLEtBQWIsRUFLSjFGLElBTEksQ0FLQ0ssUUFBUSxJQUFJO0FBQ2hCLGFBQU9BLFFBQVEsQ0FBQzJGLE9BQVQsQ0FBaUJDLE1BQWpCLEVBQVA7QUFDSCxLQVBNLEVBT0poRixLQUFLLElBQUk7QUFDUixhQUFPQSxLQUFQO0FBQ0gsS0FUTSxDQUFQO0FBVUg7O0FBbEwwQixDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgICAgPFBhZ2U+XG4gICAgICAgICA8QWN0aW9uQmFyIHRpdGxlPVwiUGVyZmlsIGRvIFVzdcOhcmlvXCI+XG4gICAgICAgICAgICA8TGFiZWwgY2xhc3M9XCJoMlwiIHJvdz1cIjBcIiBob3Jpem9udGFsQWxpZ25tZW50PVwiY2VudGVyXCI+XG4gICAgICAgICAgICAgICA8U3BhbiB0ZXh0PVwiUGVyZmlsIGRvIFVzdcOhcmlvXCI+IFxuICAgICAgICAgICAgICAgIDwvU3Bhbj5cbiAgICAgICAgICAgICAgICA8U3BhbiA6dGV4dD1cIkNvZGlnb1wiIGNsYXNzPVwiYm9sZFwiPlxuICAgICAgICAgICAgICAgIDwvU3Bhbj5cbiAgICAgICAgICAgIDwvTGFiZWw+XG4gICAgICAgIDwvQWN0aW9uQmFyPlxuICAgICAgICA8RmxleGJveExheW91dCBjbGFzcz1cInBhZ2VcIj5cbiAgICAgICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cImZvcm1cIj5cblxuICAgICAgICAgICAgICAgIDxHcmlkTGF5b3V0IHJvd3M9XCJhdXRvLCBhdXRvLCBhdXRvLCBhdXRvLCBhdXRvLCBhdXRvLCBhdXRvXCI+XG4gICAgICAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQgcm93PVwiMFwiIGNsYXNzPVwiaW5wdXQtZmllbGRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCBjbGFzcz1cInN1Yi10aXR1bG9cIiB0ZXh0PVwiTWV1cyBkYWRvc1wiPjwvTGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XG5cbiAgICAgICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0IHJvdz1cIjFcIiBjbGFzcz1cImlucHV0LWZpZWxkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkIGNsYXNzPVwiaW5wdXRcIiBoaW50PVwiTm9tZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5Ym9hcmRUeXBlPVwibm9tZVwiICB2LW1vZGVsPVwiVXN1YXJpby5Ob21lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvY29ycmVjdD1cImZhbHNlXCIgYXV0b2NhcGl0YWxpemF0aW9uVHlwZT1cIm5vbmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybktleVR5cGU9XCJuZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9UZXh0RmllbGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XCJoci1saWdodFwiPjwvU3RhY2tMYXlvdXQ+XG4gICAgICAgICAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XG5cbiAgICAgICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0IHJvdz1cIjJcIiBjbGFzcz1cImlucHV0LWZpZWxkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkIGNsYXNzPVwiaW5wdXRcIiBoaW50PVwiRS1tYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5Ym9hcmRUeXBlPVwiZW1haWxcIiB0eXBlPVwiZW1haWxcIiB2LW1vZGVsPVwiVXN1YXJpby5FbWFpbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0b2NvcnJlY3Q9XCJmYWxzZVwiIGF1dG9jYXBpdGFsaXphdGlvblR5cGU9XCJub25lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5LZXlUeXBlPVwibmV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9UZXh0RmllbGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XCJoci1saWdodFwiPjwvU3RhY2tMYXlvdXQ+XG4gICAgICAgICAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIDxTdGFja0xheW91dCByb3c9XCIzXCIgY2xhc3M9XCJpbnB1dC1maWVsZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIGNsYXNzPVwic3ViLXRpdHVsb1wiIHRleHQ9XCJNaW5oYSBTZW5oYVwiPjwvTGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XG5cbiAgICAgICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0IHJvdz1cIjRcIiBjbGFzcz1cImlucHV0LWZpZWxkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkIGNsYXNzPVwiaW5wdXRcIiByZWY9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGludD1cIlNlbmhhIEF0dWFsXCIgdi1tb2RlbD1cIlVzdWFyaW8uU2VuaGFBdHVhbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VjdXJlPVwidHJ1ZVwiPjwvVGV4dEZpZWxkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVwiaHItbGlnaHRcIj48L1N0YWNrTGF5b3V0PlxuICAgICAgICAgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxuXG4gICAgICAgICAgICAgICAgICAgIDxTdGFja0xheW91dCByb3c9XCI1XCIgY2xhc3M9XCJpbnB1dC1maWVsZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZCBjbGFzcz1cImlucHV0XCIgcmVmPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpbnQ9XCJOb3ZhIHNlbmhhXCIgIHYtbW9kZWw9XCJVc3VhcmlvLlNlbmhhXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWN1cmU9XCJ0cnVlXCIgQHJldHVyblByZXNzPVwiZm9jdXNQYXNzd29yZFwiPjwvVGV4dEZpZWxkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVwiaHItbGlnaHRcIj48L1N0YWNrTGF5b3V0PlxuICAgICAgICAgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxuXG4gICAgICAgICAgICAgICAgICAgIDxTdGFja0xheW91dCByb3c9XCI2XCIgY2xhc3M9XCJpbnB1dC1maWVsZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZCBjbGFzcz1cImlucHV0XCIgcmVmPVwiY29uZmlybVBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoaW50PVwiQ29uZmlybWFyIG5vdmEgc2VuaGFcIiB2LW1vZGVsPVwiVXN1YXJpby5Db25maXJtYXJTZW5oYVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VjdXJlPVwidHJ1ZVwiIEByZXR1cm5QcmVzcz1cImZvY3VzQ29uZmlybVBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5LZXlUeXBlPVwiZG9uZVwiPjwvVGV4dEZpZWxkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVwiaHItbGlnaHRcIj48L1N0YWNrTGF5b3V0PlxuICAgICAgICAgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxuICAgICAgICAgICAgICAgIDwvR3JpZExheW91dD5cblxuICAgICAgICAgICAgICAgIDxCdXR0b24gdGV4dD1cIlNhbHZhclwiIEB0YXA9XCJzYWx2YXJcIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeSBidG4tZ3JlZW5cIj48L0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8QnV0dG9uIHRleHQ9XCJDYW5jZWxhclwiIEB0YXA9XCJ2b2x0YXJcIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeSBidG4tZ3JleVwiPjwvQnV0dG9uPlxuICAgICAgICAgICAgPC9TdGFja0xheW91dD5cblxuICAgICAgICA8L0ZsZXhib3hMYXlvdXQ+XG4gICAgPC9QYWdlPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgICBpbXBvcnQgSG9tZSBmcm9tIFwiLi9Ib21lXCI7XG4gICAgaW1wb3J0IFBlZGlkbyBmcm9tIFwiLi9QZWRpZG9cIjtcbiAgICBpbXBvcnQgQ29uZmlnIGZyb20gXCIuLi9fY29uZmlnL19jb25maWdcIjtcbiAgICB2YXIgY29uZmlnID0gbmV3IENvbmZpZygpO1xuICAgIGNvbnN0IHsgYWxlcnQsIGNvbmZpcm0sIHByb21wdCwgbG9naW4sIGFjdGlvbiwgaW5wdXRUeXBlIH0gPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9kaWFsb2dzXCIpO1xuXG4gICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICBkYXRhKCkge1xuICAgICAgICAgICByZXR1cm4geyBVc3VhcmlvOiAnJywgSGlzdG9yaWNvIDogdHJ1ZSB9O1xuICAgICAgICB9LFxuICAgICAgICBwcm9wczogW1wiSGlzdG9yaWNvXCJdLFxuICAgICAgICBjcmVhdGVkOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aGlzLnBvcHVsYXJEYWRvcygpO1xuICAgICAgICB9LFxuICAgICAgICBtZXRob2RzOiB7XG4gICAgICAgICAgICAgcG9wdWxhckRhZG9zKCkge1xuICAgICAgICAgICAgICAgIHRoaXMuJGhlbGlhckFwcFxuICAgICAgICAgICAgICAgIC5wb3B1bGFyRGFkb3MoKVxuICAgICAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSk9PiB7ICAgXG4gICAgICAgICAgICAgICAgICAgIGlmKHJlc3BvbnNlLlN0YXR1cyA9PSB0cnVlKSB7ICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5Vc3VhcmlvID0gcmVzcG9uc2UuVXN1YXJpbztcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuVXN1YXJpby5TZW5oYSA9ICcnO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFsZXJ0KHJlc3BvbnNlLk1lbnNhZ2VtKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLmNhdGNoKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWxlcnQoXCJFcnJvIGFvIGVuY29udHJhciBzZXVzIHBlZGlkb3NcIik7XG4gICAgICAgICAgICAgICAgfSk7ICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdm9sdGFyKCkge1xuICAgICAgICAgICAgICAgIHRoaXMuJG5hdmlnYXRlVG8oSG9tZSwge1xuICAgICAgICAgICAgICAgICAgICBjbGVhckhpc3Rvcnk6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgSGlzdG9yaWNvOiB0aGlzLkhpc3Rvcmljb1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2FsdmFyKCkge1xuICAgICAgICAgICAgICAgIHRoaXMuJGhlbGlhckFwcFxuICAgICAgICAgICAgICAgIC5zYWx2YXJEYWRvcyh0aGlzLlVzdWFyaW8uQ29kaWdvLCB0aGlzLlVzdWFyaW8uTm9tZSwgdGhpcy5Vc3VhcmlvLkVtYWlsLCB0aGlzLlVzdWFyaW8uU2VuaGEsIHRoaXMuVXN1YXJpby5TZW5oYUF0dWFsLCB0aGlzLlVzdWFyaW8uQ29uZmlybWFyU2VuaGEpXG4gICAgICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKT0+IHsgICBcbiAgICAgICAgICAgICAgICAgICAgaWYocmVzcG9uc2UuU3RhdHVzID09IHRydWUpIHsgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFsZXJ0KHJlc3BvbnNlLk1lbnNhZ2VtKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRuYXZpZ2F0ZVRvKEhvbWUsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXJIaXN0b3J5OiB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWxlcnQocmVzcG9uc2UuTWVuc2FnZW0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuY2F0Y2goKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgdGhpcy5hbGVydChcIkVycm8gYW8gZW5jb250cmFyIHNldXMgcGVkaWRvc1wiKTtcbiAgICAgICAgICAgICAgICB9KTsgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBmb2N1c1Bhc3N3b3JkKCkge1xuICAgICAgICAgICAgICAgIHRoaXMuJHJlZnMucGFzc3dvcmQubmF0aXZlVmlldy5mb2N1cygpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGZvY3VzQ29uZmlybVBhc3N3b3JkKCkge1xuICAgICAgICAgICAgICAgIGlmICghdGhpcy5pc0xvZ2dpbmdJbikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRyZWZzLmNvbmZpcm1QYXNzd29yZC5uYXRpdmVWaWV3LmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGFsZXJ0KG1lc3NhZ2UpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYWxlcnQoe1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJBdGVuw6fDo29cIixcbiAgICAgICAgICAgICAgICAgICAgb2tCdXR0b25UZXh0OiBcIk9LXCIsXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IG1lc3NhZ2VcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG48L3NjcmlwdD5cblxuPHN0eWxlPlxuICAgIC5zdWItdGl0dWxvIHtcbiAgICAgICAgY29sb3I6ICMxZTY4MzI7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICB9XG4gICAgLmlucHV0e1xuICAgICAgICBib3JkZXItY29sb3I6cmVkO1xuICAgIH1cbiAgICAubGJsIHtcbiAgICAgICAgY29sb3I6ICNGRkY7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMDtcbiAgICB9XG5cbiAgICAuYm9sZCB7XG5cbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgfVxuXG4gICAgLmZvcm17XG4gICAgICAgIG1hcmdpbi1sZWZ0OjIwcHg7XG4gICAgfVxuICAgIC50ZWxlZm9uZVxuICAgIHtcbiAgICAgICAgY29sb3I6IzAwMDtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgfVxuPC9zdHlsZT4iLCI8dGVtcGxhdGU+XG4gICAgPFBhZ2UgYWN0aW9uQmFySGlkZGVuPVwiZmFsc2VcIj5cbiAgICAgICAgPEFjdGlvbkJhciB0aXRsZT1cIlwiPlxuICAgICAgICAgICAgPFN0YWNrTGF5b3V0IG9yaWVudGF0aW9uPVwiaG9yaXpvbnRhbFwiXG4gICAgICAgICAgICAgICAgaW9zOmhvcml6b250YWxBbGlnbm1lbnQ9XCJsZWZ0XCJcbiAgICAgICAgICAgICAgICBhbmRyb2lkOmhvcml6b250YWxBbGlnbm1lbnQ9XCJsZWZ0XCI+XG4gICAgICAgICAgICAgICAgPEltYWdlIHNyYz1cIn4vaW1hZ2VzL2xvZ28ucG5nXCIgc3R5bGU9XCJoZWlnaHQ6MTAwcHg7IGZsb2F0OnJpZ2h0O1wiPjwvSW1hZ2U+XG4gICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxuICAgICAgICAgICAgPEFjdGlvbkl0ZW0gIGlvcy5wb3NpdGlvbj1cInJpZ2h0XCIgQHRhcD1cImVkaXRhclwiPlxuICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9XCJ+L2ltYWdlcy9sb2dvLXRvcG8ucG5nXCI+PC9JbWFnZT5cbiAgICAgICAgICAgICAgICA8SW1hZ2UgY2xhc3M9XCJlZGljYW9cIiBzcmM9XCJyZXM6Ly9lZGljYW9cIj48L0ltYWdlPlxuICAgICAgICAgICAgPC9BY3Rpb25JdGVtPlxuICAgICAgICAgICAgPEFjdGlvbkl0ZW0gIGlvcy5wb3NpdGlvbj1cInJpZ2h0XCIgQHRhcD1cImxvZ291dFwiPlxuICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9XCJ+L2ltYWdlcy9sb2dvLXRvcG8ucG5nXCI+PC9JbWFnZT5cbiAgICAgICAgICAgICAgICA8SW1hZ2UgY2xhc3M9XCJzYWlyXCIgc3JjPVwicmVzOi8vc2FpclwiPjwvSW1hZ2U+XG4gICAgICAgICAgICA8L0FjdGlvbkl0ZW0+ICAgICAgICAgICAgXG4gICAgICAgIDwvQWN0aW9uQmFyPiBcbiAgICAgICAgPFN0YWNrTGF5b3V0IGJhY2tncm91bmRDb2xvcj1cIiMwNDUyNDRcIj4gXG4gICAgICAgICA8VGFicyA6c2VsZWN0ZWRJbmRleD1cInNlbGVjdGVkSW5kZXhcIj5cbiAgICAgICAgICAgIDxUYWJTdHJpcD5cbiAgICAgICAgICAgICAgICA8VGFiU3RyaXBJdGVtIEB0YXA9XCJwZWRpZG9zXCI+XG4gICAgICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVwiUGVkaWRvc1wiPjwvTGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9XCJyZXM6Ly9ob21lXCI+PC9JbWFnZT5cbiAgICAgICAgICAgICAgICA8L1RhYlN0cmlwSXRlbT5cbiAgICAgICAgICAgICAgICA8VGFiU3RyaXBJdGVtIEB0YXA9XCJwZWRpZG9zSGlzdG9yaWNvXCI+IFxuICAgICAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cIkhpc3TDs3JpY29cIj48L0xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPVwicmVzOi8vc2V0dGluZ3NcIj48L0ltYWdlPlxuICAgICAgICAgICAgICAgIDwvVGFiU3RyaXBJdGVtPlxuICAgICAgICAgICAgPC9UYWJTdHJpcD5cbiAgICAgICAgICAgIDxUYWJDb250ZW50SXRlbT5cbiAgICAgICAgICAgICAgICA8U2Nyb2xsVmlldz5cbiAgICAgICAgICAgICAgICAgICAgPExpc3RWaWV3IGZvcj1cIml0ZW0gaW4gaXRlbXNcIiBjbGFzcz1cImxpc3QtZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx2LXRlbXBsYXRlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkTGF5b3V0IGNvbHVtbnM9XCIyLzYqLCAyLzYqXCIgYmFja2dyb3VuZENvbG9yPVwiIzE0OEE2NFwiIHJvd3M9XCIyMCwyMCwyMCwyMCwyMCwyMCwyMCwyMFwiID5cdFx0XHRcdFx0XHRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIGNsYXNzPVwibGJsXCIgY29sPVwiMFwiIHJvdz1cIjBcIiAgdGV4dD1cIkPDs2RpZ286XCIgdGV4dFdyYXA9XCJ0cnVlXCI+PC9MYWJlbD4gICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgY2xhc3M9XCJsYmwgbGJsLWJvbGRcIiBjb2w9XCIwXCIgcm93PVwiMVwiICA6dGV4dD1cIml0ZW0uQ29kaWdvXCIgdGV4dFdyYXA9XCJ0cnVlXCI+PC9MYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIGNsYXNzPVwibGJsXCIgY29sPVwiMFwiIHJvdz1cIjJcIiAgdGV4dD1cIkxvamE6XCIgdGV4dFdyYXA9XCJ0cnVlXCI+PC9MYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIGNsYXNzPVwibGJsIGxibC1ib2xkXCIgY29sPVwiMFwiIHJvdz1cIjNcIiAgOnRleHQ9XCJpdGVtLkxvamFcIj48L0xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgY2xhc3M9XCJsYmxcIiBjb2w9XCIwXCIgcm93PVwiNFwiICB0ZXh0PVwiQWdlbmRhZGEgcGFyYTpcIiB0ZXh0V3JhcD1cInRydWVcIj48L0xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgY2xhc3M9XCJsYmwgbGJsLWJvbGRcIiBjb2w9XCIwXCIgcm93PVwiNVwiICA6dGV4dD1cIml0ZW0uRGF0YUVudHJlZ2F8Rm9ybWF0YURhdGFcIiB0ZXh0V3JhcD1cInRydWVcIj48L0xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgY2xhc3M9XCJsYmxcIiBjb2w9XCIwXCIgcm93PVwiNlwiICB0ZXh0PVwiU3RhdHVzOlwiIHRleHRXcmFwPVwidHJ1ZVwiPjwvTGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCBjbGFzcz1cImxibCBsYmwtYm9sZFwiIGNvbD1cIjBcIiByb3c9XCI3XCIgIDp0ZXh0PVwiaXRlbS5TdGF0dXNcIiA+PC9MYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiAgcm93U3Bhbj1cIjNcIiByb3c9XCIwXCIgY29sPVwiMVwiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1vcmFuZ2VcIiB0ZXh0PVwiVmlzdWFsaXphclwiIEB0YXA9XCJ2aXN1YWxpemFyKGl0ZW0sIGZhbHNlKVwiPjwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgY2xhc3M9XCJsYmxcIiAgcm93U3Bhbj1cIjNcIiBjb2w9XCIxXCIgcm93PVwiM1wiICB0ZXh0PVwiKkNsaXF1ZSBlbSBWaXN1YWxpemFyIHBhcmEgQWNlaXRhciBvdSByZWplaXRhciBvIFBlZGlkb1wiICB2ZXJ0aWNhbEFsaWdubWVudD1cImNlbnRlclwiIHRleHRXcmFwPVwidHJ1ZVwiPjwvTGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkTGF5b3V0PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC92LXRlbXBsYXRlPlxuICAgICAgICAgICAgICAgICAgICA8L0xpc3RWaWV3PlxuICAgICAgICAgICAgICAgIDwvU2Nyb2xsVmlldz4gXG4gICAgICAgICAgICA8L1RhYkNvbnRlbnRJdGVtPlxuICAgICAgICAgICAgPFRhYkNvbnRlbnRJdGVtPlxuICAgICAgICAgICAgICAgIDxTdGFja0xheW91dCBvcmllbnRhdGlvbj1cInZlcnRpY2FsXCIgc3R5bGU9XCJiYWNrZ3JvdW5kOiNmZmZcIj5cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIDxTdGFja0xheW91dCBvcmllbnRhdGlvbj1cImhvcml6b250YWxcIiBzdHlsZT1cImJhY2tncm91bmQ6I2ZmZlwiPiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBjbGFzcz1cImJ0biBidG4tdGFtYW5obyBidG4tcHJpbWFyeSBidG4tZ3JleVwiIDp0ZXh0PVwiVGV4dG9EYXRhRGVcIiBAdGFwPVwiZGF0YURlXCIgLz4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gY2xhc3M9XCJidG4gYnRuLXRhbWFuaG8gYnRuLXByaW1hcnkgYnRuLWdyZXlcIiA6dGV4dD1cIlRleHRvRGF0YUF0ZVwiIEB0YXA9XCJkYXRhQXRlXCIgLz4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxuICAgICAgICAgICAgICAgICAgICA8RGF0ZVBpY2tlciB2LXNob3c9XCJEYXRhRGVWaXNpYmxlXCIgdmVydGljYWxBbGlnbm1lbnQ9XCJjZW50ZXJcIiB2LW1vZGVsPVwiRGF0YURlU2VsZWNpb25hZGFcIj48L0RhdGVQaWNrZXI+XG4gICAgICAgICAgICAgICAgICAgIDxEYXRlUGlja2VyIHYtc2hvdz1cIkRhdGFBdGVWaXNpYmxlXCIgdmVydGljYWxBbGlnbm1lbnQ9XCJjZW50ZXJcIiB2LW1vZGVsPVwiRGF0YUF0ZVNlbGVjaW9uYWRhXCI+PC9EYXRlUGlja2VyPlxuICAgICAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQgb3JpZW50YXRpb249XCJob3Jpem9udGFsXCIgc3R5bGU9XCJiYWNrZ3JvdW5kOiNmZmZcIiB2LXNob3c9XCJEYXRhRGVWaXNpYmxlXCI+ICAgXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi10YW1hbmhvIGJ0bi1wcmltYXJ5IGJ0bi1yZWRcIiAgdGV4dD1cIkxpbXBhclwiIEB0YXA9XCJMaW1wYXJEYXRhRGVcIiAvPiAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBjbGFzcz1cImJ0biBidG4tdGFtYW5obyBidG4tcHJpbWFyeSBidG4tZ3JlZW5cIiAgdGV4dD1cIkNvbmZpcm1hclwiIEB0YXA9XCJjb25maXJtYXJEYXRhRGVcIiAvPiAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPC9TdGFja0xheW91dD5cbiAgICAgICAgICAgICAgICAgICAgIDxTdGFja0xheW91dCBvcmllbnRhdGlvbj1cImhvcml6b250YWxcIiBzdHlsZT1cImJhY2tncm91bmQ6I2ZmZlwiIHYtc2hvdz1cIkRhdGFBdGVWaXNpYmxlXCI+ICAgXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi10YW1hbmhvIGJ0bi1wcmltYXJ5IGJ0bi1yZWRcIiAgdGV4dD1cIkxpbXBhclwiIEB0YXA9XCJMaW1wYXJEYXRhQXRlXCIgLz4gICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gY2xhc3M9XCJidG4gYnRuLXRhbWFuaG8gYnRuLXByaW1hcnkgYnRuLWdyZWVuXCIgIHRleHQ9XCJDb25maXJtYXJcIiBAdGFwPVwiY29uZmlybWFyRGF0YUF0ZVwiIC8+ICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1ncmV5XCIgOnRleHQ9XCJTdGF0dXNcIiBAdGFwPVwic3RhdHVzUGVkaWRvXCIgLz5cblxuICAgICAgICAgICAgICAgICAgICA8TGlzdFZpZXcgZm9yPVwiaXRlbSBpbiBpdGVtc0hpc3Rvcmljb1wiIGNsYXNzPVwibGlzdC1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHYtdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWRMYXlvdXQgY29sdW1ucz1cIjIvNiosIDIvNipcIiBiYWNrZ3JvdW5kQ29sb3I9XCIjODg4ODg4XCIgcm93cz1cIjIwLDIwLDIwLDIwLDIwLDIwLDIwLDIwXCIgPlx0XHRcdFx0XHRcdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgY2xhc3M9XCJsYmxcIiBjb2w9XCIwXCIgcm93PVwiMFwiICB0ZXh0PVwiQ8OzZGlnbzpcIiB0ZXh0V3JhcD1cInRydWVcIj48L0xhYmVsPiAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCAgY2xhc3M9XCJsYmwgbGJsLWJvbGRcIiBjb2w9XCIwXCIgcm93PVwiMVwiICA6dGV4dD1cIml0ZW0uQ29kaWdvXCIgdGV4dFdyYXA9XCJ0cnVlXCI+PC9MYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIGNsYXNzPVwibGJsXCIgY29sPVwiMFwiIHJvdz1cIjJcIiAgdGV4dD1cIkxvamE6XCIgdGV4dFdyYXA9XCJ0cnVlXCI+PC9MYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsICBjbGFzcz1cImxibCBsYmwtYm9sZFwiIGNvbD1cIjBcIiByb3c9XCIzXCIgIDp0ZXh0PVwiaXRlbS5Mb2phXCIgdGV4dFdyYXA9XCJ0cnVlXCI+PC9MYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIGNsYXNzPVwibGJsXCIgY29sPVwiMFwiIHJvdz1cIjRcIiAgdGV4dD1cIkFnZW5kYWRhIHBhcmE6XCIgdGV4dFdyYXA9XCJ0cnVlXCI+PC9MYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIGNsYXNzPVwibGJsIGxibC1ib2xkXCIgY29sPVwiMFwiIHJvdz1cIjVcIiAgOnRleHQ9XCJpdGVtLkRhdGFFbnRyZWdhfEZvcm1hdGFEYXRhXCIgdGV4dFdyYXA9XCJ0cnVlXCI+PC9MYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIGNsYXNzPVwibGJsXCIgY29sPVwiMFwiIHJvdz1cIjZcIiAgdGV4dD1cIlN0YXR1czpcIiB0ZXh0V3JhcD1cInRydWVcIj48L0xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgY2xhc3M9XCJsYmwgbGJsLWJvbGRcIiBjb2w9XCIwXCIgcm93PVwiN1wiICA6dGV4dD1cIml0ZW0uU3RhdHVzXCIgPjwvTGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uICByb3dTcGFuPVwiNlwiIHJvdz1cIjBcIiBjb2w9XCIxXCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnkgYnRuLW9yYW5nZVwiIHRleHQ9XCJWaXN1YWxpemFyXCIgQHRhcD1cInZpc3VhbGl6YXIoaXRlbSwgdHJ1ZSlcIj48L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWRMYXlvdXQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3YtdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgICAgIDwvTGlzdFZpZXc+XG4gICAgICAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XG4gICAgICAgICAgICA8L1RhYkNvbnRlbnRJdGVtPlxuICAgICAgICA8L1RhYnM+XG4gICAgPC9TdGFja0xheW91dD5cbiAgICA8L1BhZ2U+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICAgIGltcG9ydCBMb2dpbiBmcm9tIFwiLi9Mb2dpblwiO1xuICAgIGltcG9ydCBQZWRpZG8gZnJvbSBcIi4vUGVkaWRvXCI7XG4gICAgaW1wb3J0IEVkaXRhciBmcm9tIFwiLi9FZGl0YXJcIjtcbiAgICBpbXBvcnQgQ29uZmlnIGZyb20gXCIuLi9fY29uZmlnL19jb25maWdcIjtcbiAgICB2YXIgY29uZmlnID0gbmV3IENvbmZpZygpO1xuXG4gICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICBkYXRhKCkge1xuICAgICAgICAgICAgcmV0dXJuIHsgXG4gICAgICAgICAgICAgICAgaXRlbXMgOiAnJywgXG4gICAgICAgICAgICAgICAgaXRlbXNIaXN0b3JpY28gOiAnJyxcbiAgICAgICAgICAgICAgICBIaXN0b3JpY28gOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBzZWxlY3RlZEluZGV4OiAwLFxuICAgICAgICAgICAgICAgIFBlZGlkb1N0YXR1czogbnVsbCxcbiAgICAgICAgICAgICAgICBTdGF0dXM6ICdUb2RvcyBTdGF0dXMnLFxuICAgICAgICAgICAgICAgIFRleHRvRGF0YURlOiAnRGF0YSBkZScsXG4gICAgICAgICAgICAgICAgVGV4dG9EYXRhQXRlOiAnRGF0YSBBdMOpJyxcbiAgICAgICAgICAgICAgICBEYXRhRGVWaXNpYmxlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBEYXRhQXRlVmlzaWJsZTogZmFsc2UsICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgRGF0YUF0ZVNlbGVjaW9uYWRhOiBuZXcgRGF0ZSgpLFxuICAgICAgICAgICAgICAgIERhdGFEZVNlbGVjaW9uYWRhOiBuZXcgRGF0ZSgpLFxuICAgICAgICAgICAgICAgIFZhbHVlRGF0YUF0ZTogbnVsbCxcbiAgICAgICAgICAgICAgICBWYWx1ZURhdGFEZTogbnVsbFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICAgICAgcHJvcHM6IFtcIkhpc3Rvcmljb1wiLCBcIkRhdGFEZUZpbHRyb1wiLCBcIkRhdGFBdGVGaWx0cm9cIiwgXCJTdGF0dXNGaWx0cm9cIl0sXG4gICAgICAgIGNyZWF0ZWQ6IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICAgICAgaWYodGhpcy5EYXRhRGVGaWx0cm8gIT0gJycgJiYgdGhpcy5EYXRhRGVGaWx0cm8gIT0gdW5kZWZpbmVkKXsgICAgICAgXG4gICAgICAgICAgICAgICAgdGhpcy5WYWx1ZURhdGFEZSA9IHRoaXMuRGF0YURlRmlsdHJvO1xuXG4gICAgICAgICAgICAgICAgdmFyIGQgPSBuZXcgRGF0ZSh0aGlzLkRhdGFEZUZpbHRybyksXG4gICAgICAgICAgICAgICAgbWVzID0gJycgKyAoZC5nZXRNb250aCgpICsgMSksXG4gICAgICAgICAgICAgICAgZGlhID0gJycgKyBkLmdldERhdGUoKSxcbiAgICAgICAgICAgICAgICBhbm8gPSBkLmdldEZ1bGxZZWFyKCk7XG4gICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBpZiAobWVzLmxlbmd0aCA8IDIpIG1lcyA9ICcwJyArIG1lcztcbiAgICAgICAgICAgICAgICBpZiAoZGlhLmxlbmd0aCA8IDIpIGRpYSA9ICcwJyArIGRpYTtcblxuICAgICAgICAgICAgICAgIHRoaXMuVGV4dG9EYXRhRGUgPSBkaWEgKyAnLycgKyAgbWVzICsgJy8nICsgIGFubzsgIFxuICAgICAgICAgICAgICAgIHRoaXMuRGF0YURlU2VsZWNpb25hZGEgPSAgbmV3IERhdGUodGhpcy5EYXRhRGVGaWx0cm8pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZih0aGlzLkRhdGFBdGVGaWx0cm8gIT0gJycgJiYgdGhpcy5EYXRhQXRlRmlsdHJvICE9IHVuZGVmaW5lZCl7XG4gICAgICAgICAgICAgICAgdGhpcy5WYWx1ZURhdGFBdGUgPSB0aGlzLkRhdGFBdGVGaWx0cm87XG5cbiAgICAgICAgICAgICAgICB2YXIgZCA9IG5ldyBEYXRlKHRoaXMuRGF0YUF0ZUZpbHRybyksXG4gICAgICAgICAgICAgICAgbWVzID0gJycgKyAoZC5nZXRNb250aCgpICsgMSksXG4gICAgICAgICAgICAgICAgZGlhID0gJycgKyBkLmdldERhdGUoKSxcbiAgICAgICAgICAgICAgICBhbm8gPSBkLmdldEZ1bGxZZWFyKCk7XG4gICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBpZiAobWVzLmxlbmd0aCA8IDIpIG1lcyA9ICcwJyArIG1lcztcbiAgICAgICAgICAgICAgICBpZiAoZGlhLmxlbmd0aCA8IDIpIGRpYSA9ICcwJyArIGRpYTtcblxuICAgICAgICAgICAgICAgIHRoaXMuVGV4dG9EYXRhQXRlID0gZGlhICsgJy8nICsgIG1lcyArICcvJyArICBhbm87ICBcbiAgICAgICAgICAgICAgICB0aGlzLkRhdGFBdGVTZWxlY2lvbmFkYSA9ICBuZXcgRGF0ZSh0aGlzLkRhdGFBdGVGaWx0cm8pOyAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmKHRoaXMuU3RhdHVzRmlsdHJvICE9ICcnICYmIHRoaXMuU3RhdHVzRmlsdHJvICE9IHVuZGVmaW5lZCl7XG4gICAgICAgICAgICAgICAgdGhpcy5TdGF0dXMgPSB0aGlzLlN0YXR1c0ZpbHRybztcbiAgICAgICAgICAgICAgICB0aGlzLlBlZGlkb1N0YXR1cyA9IHRoaXMuU3RhdHVzRmlsdHJvO1xuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuU3RhdHVzRmlsdHJvID09IDUpe1xuICAgICAgICAgICAgICAgICAgICB0aGlzLlN0YXR1cyA9IFwiQ2FuY2VsYWRvXCI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuU3RhdHVzRmlsdHJvID09IDYpe1xuICAgICAgICAgICAgICAgICAgICB0aGlzLlN0YXR1cyA9IFwiRmluYWxpemFkb1wiO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmICh0aGlzLlN0YXR1c0ZpbHRybyA9PSAxMCl7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuU3RhdHVzID0gXCJFbnRyZWd1ZVwiO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmICh0aGlzLlN0YXR1c0ZpbHRybyA9PSA3KXtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5TdGF0dXMgPSBcIkFjZWl0byBwZWxhIExvamFcIjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMucGVkaWRvcygpO1xuICAgICAgICAgICAgdGhpcy5wZWRpZG9zSGlzdG9yaWNvKCk7XG4gICAgICAgICAgICB0aGlzLkF0dWFsaXphckFQUCgpO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5IaXN0b3JpY28gPT0gdHJ1ZSl7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZEluZGV4ID0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZmlsdGVyczoge1xuICAgICAgICAgICAgRm9ybWF0YURhdGE6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHZhciBkID0gbmV3IERhdGUodmFsdWUpLFxuICAgICAgICAgICAgICAgIG1lcyA9ICcnICsgKGQuZ2V0TW9udGgoKSArIDEpLFxuICAgICAgICAgICAgICAgIGRpYSA9ICcnICsgZC5nZXREYXRlKCksXG4gICAgICAgICAgICAgICAgYW5vID0gZC5nZXRGdWxsWWVhcigpLFxuICAgICAgICAgICAgICAgIGhvcmEgPSAnJyArIChkLmdldEhvdXJzKCkpLFxuICAgICAgICAgICAgICAgIG1pbnV0byA9ICcnICsgZC5nZXRNaW51dGVzKCk7XG5cbiAgICAgICAgICAgICAgICBpZiAobWVzLmxlbmd0aCA8IDIpIG1lcyA9ICcwJyArIG1lcztcbiAgICAgICAgICAgICAgICBpZiAoZGlhLmxlbmd0aCA8IDIpIGRpYSA9ICcwJyArIGRpYTtcbiAgICAgICAgICAgICAgICBpZiAoaG9yYS5sZW5ndGggPCAyKSBob3JhID0gJzAnICsgaG9yYTtcbiAgICAgICAgICAgICAgICBpZiAobWludXRvLmxlbmd0aCA8IDIpIG1pbnV0byA9ICcwJyArIG1pbnV0bztcblxuICAgICAgICAgICAgICAgIHJldHVybiBbZGlhLCBtZXMsIGFub10uam9pbignLycpICsgJyDDoHMgJyArIGhvcmEgKyBcIjpcIiArIG1pbnV0bztcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgICAgIGxvZ291dCgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRoZWxpYXJBcHBcbiAgICAgICAgICAgICAgICAuZGVzYXV0ZW50aWNhcigpXG4gICAgICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKT0+IHsgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBpZihyZXNwb25zZS5TdGF0dXMgPT0gdHJ1ZSlcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kbmF2aWdhdGVUbyhMb2dpbiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFySGlzdG9yeTogZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFsZXJ0KHJlc3BvbnNlLk1lbnNhZ2VtKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLmNhdGNoKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQoXCJFcnJvIGFvIGVuY29udHJhciBzZXVzIHBlZGlkb3NcIik7XG4gICAgICAgICAgICAgICAgfSk7ICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZGF0YURlKCl7XG4gICAgICAgICAgICAgICAgdGhpcy5EYXRhRGVWaXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLkRhdGFBdGVWaXNpYmxlID0gZmFsc2U7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZGF0YUF0ZSgpe1xuICAgICAgICAgICAgICAgIHRoaXMuRGF0YURlVmlzaWJsZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMuRGF0YUF0ZVZpc2libGUgPSB0cnVlO1xuICAgICAgICAgICAgfSwgICAgICBcbiAgICAgICAgICAgIGNvbmZpcm1hckRhdGFEZSgpe1xuICAgICAgICAgICAgICAgIHZhciBkID0gbmV3IERhdGUodGhpcy5EYXRhRGVTZWxlY2lvbmFkYSksXG4gICAgICAgICAgICAgICAgbWVzID0gJycgKyAoZC5nZXRNb250aCgpICsgMSksXG4gICAgICAgICAgICAgICAgZGlhID0gJycgKyBkLmdldERhdGUoKSxcbiAgICAgICAgICAgICAgICBhbm8gPSBkLmdldEZ1bGxZZWFyKCk7XG4gICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBpZiAobWVzLmxlbmd0aCA8IDIpIG1lcyA9ICcwJyArIG1lcztcbiAgICAgICAgICAgICAgICBpZiAoZGlhLmxlbmd0aCA8IDIpIGRpYSA9ICcwJyArIGRpYTtcblxuICAgICAgICAgICAgICAgIHRoaXMuVGV4dG9EYXRhRGUgPSBkaWEgKyAnLycgKyAgbWVzICsgJy8nICsgIGFubzsgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgdGhpcy5WYWx1ZURhdGFEZSA9IG1lcyArICcvJyArIGRpYSAgKyAnLycgKyAgYW5vO1xuICAgICAgICAgICAgICAgIHRoaXMuRGF0YURlVmlzaWJsZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMucGVkaWRvc0hpc3RvcmljbygpO1xuICAgICAgICAgICAgfSwgICBcbiAgICAgICAgICAgIGNvbmZpcm1hckRhdGFBdGUoKXtcbiAgICAgICAgICAgICAgICB2YXIgZCA9IG5ldyBEYXRlKHRoaXMuRGF0YUF0ZVNlbGVjaW9uYWRhKSxcbiAgICAgICAgICAgICAgICBtZXMgPSAnJyArIChkLmdldE1vbnRoKCkgKyAxKSxcbiAgICAgICAgICAgICAgICBkaWEgPSAnJyArIGQuZ2V0RGF0ZSgpLFxuICAgICAgICAgICAgICAgIGFubyA9IGQuZ2V0RnVsbFllYXIoKTtcbiAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGlmIChtZXMubGVuZ3RoIDwgMikgbWVzID0gJzAnICsgbWVzO1xuICAgICAgICAgICAgICAgIGlmIChkaWEubGVuZ3RoIDwgMikgZGlhID0gJzAnICsgZGlhO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5UZXh0b0RhdGFBdGUgPSBkaWEgKyAnLycgKyAgbWVzICsgJy8nICsgIGFubzsgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgdGhpcy5WYWx1ZURhdGFBdGUgPSBtZXMgKyAnLycgKyBkaWEgICsgJy8nICsgIGFubztcbiAgICAgICAgICAgICAgICB0aGlzLkRhdGFBdGVWaXNpYmxlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5wZWRpZG9zSGlzdG9yaWNvKCk7XG4gICAgICAgICAgICB9LCAgIFxuICAgICAgICAgICAgTGltcGFyRGF0YURlKCl7XG4gICAgICAgICAgICAgICAgdGhpcy5UZXh0b0RhdGFEZSA9ICdEYXRhIERlJztcbiAgICAgICAgICAgICAgICB0aGlzLkRhdGFEZVZpc2libGUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLlZhbHVlRGF0YURlID0gbnVsbDtcbiAgICAgICAgICAgICAgICB0aGlzLnBlZGlkb3NIaXN0b3JpY28oKTtcbiAgICAgICAgICAgIH0sICAgICAgICAgXG4gICAgICAgICAgICBMaW1wYXJEYXRhQXRlKCl7XG4gICAgICAgICAgICAgICAgdGhpcy5UZXh0b0RhdGFBdGUgPSAnRGF0YSBBdMOpJztcbiAgICAgICAgICAgICAgICB0aGlzLkRhdGFBdGVWaXNpYmxlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5WYWx1ZURhdGFBdGUgPSBudWxsO1xuICAgICAgICAgICAgICAgIHRoaXMucGVkaWRvc0hpc3RvcmljbygpO1xuICAgICAgICAgICAgfSwgICAgICAgICAgXG4gICAgICAgICAgICBzdGF0dXNQZWRpZG8oKSB7XG5cbiAgICAgICAgICAgICAgICB0aGlzLkRhdGFEZVZpc2libGUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLkRhdGFBdGVWaXNpYmxlID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICB2YXIgZGlhbG9ncyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2RpYWxvZ3NcIik7XG4gICAgICAgICAgICAgICAgZGlhbG9ncy5hY3Rpb24oe1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJFc2NvbGhhIG8gc3RhdHVzIHF1ZSBkZXNlamEgZmF6ZXIgbyBmaWx0cm9cIixcbiAgICAgICAgICAgICAgICAgICAgY2FuY2VsQnV0dG9uVGV4dDogXCJDYW5jZWxhclwiLFxuICAgICAgICAgICAgICAgICAgICBhY3Rpb25zOiBbJ1RvZG9zJywnQ2FuY2VsYWRvJywnRmluYWxpemFkbycsICdFbnRyZWd1ZScsICdBY2VpdG8gcGVsYSBMb2phJ11cbiAgICAgICAgICAgICAgICB9KS50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJlc3Bvc3RhID0gcmVzdWx0O1xuXG4gICAgICAgICAgICAgICAgICAgICBpZihyZXN1bHQgPT0gXCJDYW5jZWxhclwiKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdCA9PSBcIlRvZG9zXCIpe1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5QZWRpZG9TdGF0dXMgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5TdGF0dXMgPSBcIlRvZG9zIFN0YXR1c1wiO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wZWRpZG9zSGlzdG9yaWNvKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAocmVzdWx0ID09IFwiQ2FuY2VsYWRvXCIpe1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5QZWRpZG9TdGF0dXMgPSA1O1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5TdGF0dXMgPSBcIkNhbmNlbGFkb1wiO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wZWRpZG9zSGlzdG9yaWNvKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAocmVzdWx0ID09IFwiRmluYWxpemFkb1wiKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuUGVkaWRvU3RhdHVzID0gNjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuU3RhdHVzID0gXCJGaW5hbGl6YWRvXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBlZGlkb3NIaXN0b3JpY28oKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAocmVzdWx0ID09IFwiRW50cmVndWVcIil7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLlBlZGlkb1N0YXR1cyA9IDEwO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5TdGF0dXMgPSBcIkVudHJlZ3VlXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBlZGlkb3NIaXN0b3JpY28oKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAocmVzdWx0ID09IFwiQWNlaXRvIHBlbGEgTG9qYVwiKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLlN0YXR1cyA9IFwiQWNlaXRvIHBlbGEgTG9qYVwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5QZWRpZG9TdGF0dXMgPSA3O1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wZWRpZG9zSGlzdG9yaWNvKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlZGl0YXIoaXNIaXN0b3JpY28pIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRuYXZpZ2F0ZVRvKEVkaXRhciwge1xuICAgICAgICAgICAgICAgICAgICBjbGVhckhpc3Rvcnk6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBIaXN0b3JpY286IGlzSGlzdG9yaWNvXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTsgXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcGVkaWRvcygpe1xuICAgICAgICAgICAgICAgICB0aGlzLiRoZWxpYXJBcHBcbiAgICAgICAgICAgICAgICAgICAgLnBlZGlkb3MoKVxuICAgICAgICAgICAgICAgICAgICAudGhlbigocmVzcG9uc2UpPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pdGVtcyA9IHJlc3BvbnNlLlBlZGlkb3M7XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbGVydChcIkVycm8gYW8gZW5jb250cmFyIHNldXMgcGVkaWRvc1wiKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcGVkaWRvc0hpc3Rvcmljbygpe1xuICAgICAgICAgICAgICAgIHRoaXMuJGhlbGlhckFwcFxuICAgICAgICAgICAgICAgICAgICAucGVkaWRvc0hpc3Rvcmljbyh0aGlzLlBlZGlkb1N0YXR1cywgIHRoaXMuVmFsdWVEYXRhRGUsIHRoaXMuVmFsdWVEYXRhQXRlKVxuICAgICAgICAgICAgICAgICAgICAudGhlbigocmVzcG9uc2VIaXN0b3JpY28pPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pdGVtc0hpc3RvcmljbyA9IHJlc3BvbnNlSGlzdG9yaWNvLlBlZGlkb3M7XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbGVydChcIkVycm8gYW8gZW5jb250cmFyIHNldXMgcGVkaWRvc1wiKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdmlzdWFsaXphcihlLCBpc0hpc3Rvcmljbykge1xuICAgICAgICAgICAgICAgIHRoaXMuJG5hdmlnYXRlVG8oUGVkaWRvLCB7XG4gICAgICAgICAgICAgICAgICAgIGNsZWFySGlzdG9yeTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIENvZGlnbzogZS5Db2RpZ28sXG4gICAgICAgICAgICAgICAgICAgICAgICBIaXN0b3JpY286IGlzSGlzdG9yaWNvLFxuICAgICAgICAgICAgICAgICAgICAgICAgRGF0YURlOiB0aGlzLlZhbHVlRGF0YURlLFxuICAgICAgICAgICAgICAgICAgICAgICAgRGF0YUF0ZTogdGhpcy5WYWx1ZURhdGFBdGUsXG4gICAgICAgICAgICAgICAgICAgICAgICBTdGF0dXM6IHRoaXMuUGVkaWRvU3RhdHVzXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBBdHVhbGl6YXJBUFAoKXtcbiAgICAgICAgICAgICAgc2V0SW50ZXJ2YWwoKCkgPT4gcGVkaWRvcygpLCA2MDAwMDApOyAvLzkwMDAwXG4gICAgICAgICAgICAgIHNldEludGVydmFsKCgpID0+IHBlZGlkb3NIaXN0b3JpY28odGhpcy5QZWRpZG9TdGF0dXMsIG51bGwsIHRoaXMuVmFsdWVEYXRhQXRlKSwgNjAwMDAwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG48L3NjcmlwdD5cblxuPHN0eWxlPlxuICAgIC5sYmx7XG4gICAgICAgIGNvbG9yOiNGRkY7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMDtcbiAgICB9XG4gICAgLmxibC1ib2xke1xuICAgICAgICAgXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIH1cbiAgICAuc2FpciB7XG4gICAgICAgIGhlaWdodDogMzA7XG4gICAgfVxuXG4gICAgLmVkaWNhbyB7XG4gICAgICAgIGhlaWdodDogMjU7XG4gICAgfVxuICAgIC5idG4tdGFtYW5ob3tcbiAgICAgICAgd2lkdGg6IDQxJTtcbiAgICB9XG48L3N0eWxlPiIsIjx0ZW1wbGF0ZT5cbiAgICA8UGFnZSBhY3Rpb25CYXJIaWRkZW49XCJ0cnVlXCI+XG4gICAgICAgIDxTY3JvbGx2aWV3PlxuICAgICAgICAgICAgPEZsZXhib3hMYXlvdXQgY2xhc3M9XCJwYWdlXCI+XG4gICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVwiZm9ybVwiPlxuICAgICAgICAgICAgICAgICAgICA8SW1hZ2UgY2xhc3M9XCJsb2dvXCIgc3JjPVwifi9pbWFnZXMvbG9nby5wbmdcIj48L0ltYWdlPlxuICAgICAgICAgICAgICAgICAgICA8TGFiZWwgY2xhc3M9XCJoZWFkZXJcIiB0ZXh0PVwiUEVESURPU1wiPjwvTGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxMYWJlbCBjbGFzcz1cIm1lbnNhZ2VtXCIgdi1pZj1cInRoaXMucmV0b3Jub0xvZ2luICE9ICcnXCI+e3tyZXRvcm5vTG9naW59fTwvTGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICA8R3JpZExheW91dCByb3dzPVwiYXV0bywgYXV0bywgYXV0b1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0IHJvdz1cIjBcIiBjbGFzcz1cImlucHV0LWZpZWxkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZCBjbGFzcz1cImlucHV0XCIgaGludD1cIkxvZ2luXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmlzRW5hYmxlZD1cIiFwcm9jZXNzaW5nXCIga2V5Ym9hcmRUeXBlPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvY29ycmVjdD1cImZhbHNlXCIgYXV0b2NhcGl0YWxpemF0aW9uVHlwZT1cIm5vbmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwidXNlci5lbWFpbFwiIHJldHVybktleVR5cGU9XCJuZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQHJldHVyblByZXNzPVwiZm9jdXNQYXNzd29yZFwiPjwvVGV4dEZpZWxkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cImhyLWxpZ2h0XCI+PC9TdGFja0xheW91dD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxTdGFja0xheW91dCByb3c9XCIxXCIgY2xhc3M9XCJpbnB1dC1maWVsZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGQgY2xhc3M9XCJpbnB1dFwiIHJlZj1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmlzRW5hYmxlZD1cIiFwcm9jZXNzaW5nXCIgaGludD1cIlBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VjdXJlPVwidHJ1ZVwiIHYtbW9kZWw9XCJ1c2VyLnBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOnJldHVybktleVR5cGU9XCJpc0xvZ2dpbmdJbiA/ICdkb25lJyA6ICduZXh0J1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEByZXR1cm5QcmVzcz1cImZvY3VzQ29uZmlybVBhc3N3b3JkXCI+PC9UZXh0RmllbGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVwiaHItbGlnaHRcIj48L1N0YWNrTGF5b3V0PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9TdGFja0xheW91dD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0IHJvdz1cIjJcIiB2LXNob3c9XCIhaXNMb2dnaW5nSW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiaW5wdXQtZmllbGRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkIGNsYXNzPVwiaW5wdXRcIiByZWY9XCJjb25maXJtUGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6aXNFbmFibGVkPVwiIXByb2Nlc3NpbmdcIiBoaW50PVwiQ29uZmlybSBwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlY3VyZT1cInRydWVcIiB2LW1vZGVsPVwidXNlci5jb25maXJtUGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5LZXlUeXBlPVwiZG9uZVwiPjwvVGV4dEZpZWxkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cImhyLWxpZ2h0XCI+PC9TdGFja0xheW91dD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QWN0aXZpdHlJbmRpY2F0b3Igcm93U3Bhbj1cIjNcIiA6YnVzeT1cInByb2Nlc3NpbmdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQWN0aXZpdHlJbmRpY2F0b3I+XG4gICAgICAgICAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQgcm93PVwiM1wiPlxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIDp0ZXh0PVwiaXNMb2dnaW5nSW4gPyAnRW50cmFyJyA6ICdTaWduIFVwJ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICA6aXNFbmFibGVkPVwiIXByb2Nlc3NpbmdcIiBAdGFwPVwic3VibWl0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1ncmVlbiBtLXQtMjBcIj48L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPExhYmVsICp2LXNob3c9XCJpc0xvZ2dpbmdJblwiIHRleHQ9XCJFc3F1ZWNldSBzdWEgc2VuaGE/XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwibG9naW4tbGFiZWxcIiBAdGFwPVwiZm9yZ290UGFzc3dvcmQoKVwiPjwvTGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxXZWJWaWV3IHYtaWY9XCIhdGhpcy5pc1JlY2FwdGNoYVwiIHNyYz1cImh0dHBzOi8vd3d3LmhlbGlhcmV4cHJlc3MuY29tLmJyL3JlY2FwdGNoYS5odG1sXCIgQGxvYWRGaW5pc2hlZD0nKGUpPT4ge3RoaXMucmVjYXB0Y2hhKGUpfScgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZExheW91dD5cbiAgICAgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxuXG4gICAgICAgICAgICA8L0ZsZXhib3hMYXlvdXQ+XG4gICAgICAgIDwvU2Nyb2xsdmlldz5cbiAgICA8L1BhZ2U+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICAgIGltcG9ydCBIb21lIGZyb20gXCIuL0hvbWVcIjtcbiAgICBpbXBvcnQgQ29uZmlnIGZyb20gXCIuLi9fY29uZmlnL19jb25maWdcIjtcblxuICAgIHZhciBjb25maWcgPSBuZXcgQ29uZmlnKCk7XG5cbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIG5hbWU6IFwiZGVmYXVsdFBhZ2VcIixcbiAgICAgICAgZGF0YSgpIHtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdGhpcy5WZXJpZmljYXJBdXRlbnRpY2FkbygpO1xuXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGlzTG9nZ2luZ0luOiB0cnVlLFxuICAgICAgICAgICAgICAgIHByb2Nlc3Npbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGlzUmVjYXB0Y2hhOiBmYWxzZSxcbiAgICAgICAgICAgICAgICB1c2VyOiB7XG4gICAgICAgICAgICAgICAgICAgIGVtYWlsOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICBwYXNzd29yZDogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgY29uZmlybVBhc3N3b3JkOiBcIlwiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICByZXRvcm5vTG9naW46IFwiXCJcbiAgICAgICAgICAgIH07ICAgICAgICAgICAgXG4gICAgICAgIH0sXG4gICAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgICAgIHJlY2FwdGNoYShlKSB7XG4gICAgICAgICAgICAgICAgaWYoZS51cmwuaW5kZXhPZihcInN1Y2Vzcz10cnVlXCIpICE9IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXNSZWNhcHRjaGEgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0b2dnbGVGb3JtKCkge1xuICAgICAgICAgICAgICAgIHRoaXMuaXNMb2dnaW5nSW4gPSAhdGhpcy5pc0xvZ2dpbmdJbjtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBWZXJpZmljYXJBdXRlbnRpY2Fkbygpe1xuICAgICAgICAgICAgICAgICB0aGlzLiRoZWxpYXJBcHBcbiAgICAgICAgICAgICAgICAgICAgLmlzTG9nZ2VkSW4oKVxuICAgICAgICAgICAgICAgICAgICAudGhlbigocmVzcG9uc2UpPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYocmVzcG9uc2UuU3RhdHVzID09IHRydWUpIHsgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kbmF2aWdhdGVUbyhIb21lLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFySGlzdG9yeTogZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLmNhdGNoKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0KFwiRXJybyBhbyB2ZXJpZmljYXIgYXV0ZW50aWNhw6fDo28gZG8gdXN1w6FyaW9cIik7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHN1Ym1pdCgpIHtcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMudXNlci5lbWFpbCAmJiB0aGlzLnVzZXIucGFzc3dvcmR8fCAhdGhpcy51c2VyLnBhc3N3b3JkICYmIHRoaXMudXNlci5lbWFpbCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJldG9ybm9Mb2dpbiA9ICdQb3IgZmF2b3IsIHByZWVuY2hlciBsb2dpbiBvdSBzZW5oYSEnO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYoICF0aGlzLmlzUmVjYXB0Y2hhICkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJldG9ybm9Mb2dpbiA9IFwiUG9yIGZhdm9yLCBwcmVlbmNoYSBvIGNhcHRjaGEhXCI7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0aGlzLnByb2Nlc3NpbmcgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzTG9nZ2luZ0luKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9naW4oKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlZ2lzdGVyKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGxvZ2luQW50KCkge1xuICAgICAgICAgICAgICAgIHRoaXMuJGJhY2tlbmRTZXJ2aWNlXG4gICAgICAgICAgICAgICAgICAgIC5sb2dpbih0aGlzLnVzZXIpXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvY2Vzc2luZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kbmF2aWdhdGVUbyhIb21lLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXJIaXN0b3J5OiB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLmNhdGNoKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvY2Vzc2luZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hbGVydChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlVuZm9ydHVuYXRlbHkgd2UgY291bGQgbm90IGZpbmQgeW91ciBhY2NvdW50LlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbG9naW4oKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJGhlbGlhckFwcFxuICAgICAgICAgICAgICAgICAgICAubG9naW4odGhpcy51c2VyKVxuICAgICAgICAgICAgICAgICAgICAudGhlbigocmVzcG9uc2UpPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9jZXNzaW5nID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHJlc3BvbnNlID09IG51bGwgfHwgcmVzcG9uc2UuU3RhdHVzID09IGZhbHNlKVxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmV0b3Jub0xvZ2luID0gcmVzcG9uc2UuTWVuc2FnZW07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25maWcuc2V0VG9rZW4ocmVzcG9uc2UuVG9rZW4pO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlnLnNldERldmljZUlkKHJlc3BvbnNlLkRpc3Bvc2l0aXZvKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kbmF2aWdhdGVUbyhIb21lLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXJIaXN0b3J5OiB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZm9yZ290UGFzc3dvcmQoKSB7XG4gICAgICAgICAgICAgICAgcHJvbXB0KHtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiRXNxdWVjaSBtaW5oYSBzZW5oYVwiLFxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIkRpZ2l0ZSBvIGxvZ2luIHF1ZSB2b2PDqiB1c291IHBhcmEgc2UgcmVnaXN0cmFyIG5vIEhFTElBUiBFWFBSRVNTIHBhcmEgcmVkZWZpbmlyIHN1YSBzZW5oYS5cIixcbiAgICAgICAgICAgICAgICAgICAgaW5wdXRUeXBlOiBcImVtYWlsXCIsICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgb2tCdXR0b25UZXh0OiBcIkVudmlhclwiLFxuICAgICAgICAgICAgICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiBcIkNhbmNlbGFyXCIsXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHRUZXh0OiBcIiAgICAgXCIgKyB0aGlzLnVzZXIuZW1haWwsXG4gICAgICAgICAgICAgICAgfSkudGhlbihkYXRhID0+IHsgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEucmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRoZWxpYXJBcHBcbiAgICAgICAgICAgICAgICAgICAgICAgIC5yZXNldFBhc3N3b3JkKGRhdGEudGV4dC50cmltKCkpXG4gICAgICAgICAgICAgICAgICAgICAgICAudGhlbigocmVzcG9uc2UpPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWxlcnQocmVzcG9uc2UuTWVuc2FnZW0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jYXRjaCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hbGVydChcIkluZmVsaXptZW50ZSwgb2NvcnJldSB1bSBlcnJvIGFvIHJlZGVmaW5pciBzdWEgc2VuaGEuXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZm9jdXNQYXNzd29yZCgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRyZWZzLnBhc3N3b3JkLm5hdGl2ZVZpZXcuZm9jdXMoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBmb2N1c0NvbmZpcm1QYXNzd29yZCgpIHtcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuaXNMb2dnaW5nSW4pIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kcmVmcy5jb25maXJtUGFzc3dvcmQubmF0aXZlVmlldy5mb2N1cygpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBhbGVydChtZXNzYWdlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGFsZXJ0KHtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiQXRlbsOnw6NvXCIsXG4gICAgICAgICAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJPS1wiLFxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBtZXNzYWdlXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuPC9zY3JpcHQ+XG5cblxuPHN0eWxlIHNjb3BlZD5cbiAgICAucGFnZSB7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgfVxuXG4gICAgLmZvcm0ge1xuICAgICAgICBtYXJnaW4tbGVmdDogMzA7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMzA7XG4gICAgICAgIGZsZXgtZ3JvdzogMjtcbiAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICB9XG5cbiAgICAubG9nbyB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEyO1xuICAgICAgICBoZWlnaHQ6IDkwO1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB9XG5cbiAgICAuaGVhZGVyIHtcbiAgICAgICAgaG9yaXpvbnRhbC1hbGlnbjogY2VudGVyO1xuICAgICAgICBmb250LXNpemU6IDI1O1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA3MDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBjb2xvcjogIzA2N0E2NTtcbiAgICB9XG5cbiAgICAgLm1lbnNhZ2VtIHtcbiAgICAgICAgaG9yaXpvbnRhbC1hbGlnbjogY2VudGVyO1xuICAgICAgICBmb250LXNpemU6IDE2O1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGNvbG9yOiByZWQ7XG4gICAgfVxuXG4gICAgLmlucHV0LWZpZWxkIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjU7XG4gICAgfVxuXG4gICAgLmlucHV0IHtcbiAgICAgICAgZm9udC1zaXplOiAxODtcbiAgICAgICAgcGxhY2Vob2xkZXItY29sb3I6ICNBOEE4QTg7XG4gICAgfVxuXG4gICAgLmlucHV0OmRpc2FibGVkIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgIG9wYWNpdHk6IDAuNTtcbiAgICB9XG5cbiAgICAuYnRuLXByaW1hcnkge1xuICAgICAgICBtYXJnaW46IDMwIDUgMTUgNTtcbiAgICB9XG5cbiAgICAubG9naW4tbGFiZWwge1xuICAgICAgICBob3Jpem9udGFsLWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGNvbG9yOiAjQThBOEE4O1xuICAgICAgICBmb250LXNpemU6IDE2O1xuICAgIH1cblxuICAgIC5zaWduLXVwLWxhYmVsIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjA7XG4gICAgfVxuXG4gICAgLmJvbGQge1xuICAgICAgICBjb2xvcjogIzAwMDAwMDtcbiAgICB9XG48L3N0eWxlPiIsIjx0ZW1wbGF0ZT5cbiAgICA8UGFnZT5cbiAgICAgICAgPEFjdGlvbkJhciB0aXRsZT1cIkRldGFsaGUgZG8gcGVkaWRvXCI+XG4gICAgICAgICAgICA8TGFiZWwgY2xhc3M9XCJoMlwiIHJvdz1cIjBcIiBob3Jpem9udGFsQWxpZ25tZW50PVwiY2VudGVyXCI+XG4gICAgICAgICAgICAgICA8U3BhbiB0ZXh0PVwiRGV0YWxoZSBkbyBwZWRpZG86IFwiPiBcbiAgICAgICAgICAgICAgICA8L1NwYW4+XG4gICAgICAgICAgICAgICAgPFNwYW4gOnRleHQ9XCJDb2RpZ29cIiBjbGFzcz1cImJvbGRcIj5cbiAgICAgICAgICAgICAgICA8L1NwYW4+XG4gICAgICAgICAgICA8L0xhYmVsPlxuICAgICAgICA8L0FjdGlvbkJhcj5cbiAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVwiZm9ybVwiPlxuICAgICAgICAgICAgPFN0YWNrTGF5b3V0IHYtc2hvdz1cIiFpc0F2YWxpYWNhb1wiPlxuICAgICAgICAgICAgICAgIDxIdG1sVmlldyBjbGFzcz1cInRlbGVmb25lXCJcbiAgICAgICAgICAgICAgICAgICAgOmh0bWw9XCJQZWRpZG9zLkxvamF8Rm9ybWF0YUxvamFcIiA+IFxuICAgICAgICAgICAgICAgIDwvSHRtbFZpZXc+XG4gICAgICAgICAgICAgICAgPExhYmVsIGNsYXNzPVwiaDNcIiA+XG4gICAgICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRTdHJpbmc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8U3BhbiB0ZXh0PVwiTm9tZSBkbyBDbGllbnRlOiBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvU3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxTcGFuIDp0ZXh0PVwiUGVkaWRvcy5Ob21lQ2xpZW50ZVwiIGNsYXNzPVwiYm9sZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9TcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm1hdHRlZFN0cmluZz5cbiAgICAgICAgICAgICAgICA8L0xhYmVsPlxuICAgICAgICAgICAgICAgIDxMYWJlbCBjbGFzcz1cImgzXCIgdi1zaG93PVwiaXNBY2VpdG8gJiYgUGVkaWRvcy5DUEYgIT0gbnVsbFwiPlxuICAgICAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkU3RyaW5nPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFNwYW4gdGV4dD1cIkNQRjogXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8U3BhbiA6dGV4dD1cIlBlZGlkb3MuQ1BGXCIgY2xhc3M9XCJib2xkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybWF0dGVkU3RyaW5nPlxuICAgICAgICAgICAgICAgIDwvTGFiZWw+XG4gICAgICAgICAgICAgICAgPExhYmVsIGNsYXNzPVwiaDNcIiB2LXNob3c9XCJpc0FjZWl0byAmJiBQZWRpZG9zLkVtYWlsICE9IG51bGxcIj5cbiAgICAgICAgICAgICAgICAgICAgPEZvcm1hdHRlZFN0cmluZz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxTcGFuIHRleHQ9XCJFbWFpbDogXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8U3BhbiA6dGV4dD1cIlBlZGlkb3MuRW1haWxcIiBjbGFzcz1cImJvbGRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvU3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtYXR0ZWRTdHJpbmc+XG4gICAgICAgICAgICAgICAgPC9MYWJlbD5cbiAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQgb3JpZW50YXRpb249XCJob3Jpem9udGFsXCI+XG4gICAgICAgICAgICAgICAgICAgIDxIdG1sVmlldyB2LXNob3c9XCJpc0FjZWl0byAmJiBQZWRpZG9zLlRlbGVmb25lICE9IG51bGxcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgIDpodG1sPVwiUGVkaWRvcy5UZWxlZm9uZXxGb3JtYXRhVGVsZWZvbmVcIiBjbGFzcz1cInRlbGVmb25lIHRlbGVmb25lLWZvcm1hdFwiPiAgXG4gICAgICAgICAgICAgICAgICAgIDwvSHRtbFZpZXc+XG4gICAgICAgICAgICAgICAgPC9TdGFja0xheW91dD5cbiAgICAgICAgICAgICAgICAgIDxTdGFja0xheW91dCBvcmllbnRhdGlvbj1cImhvcml6b250YWxcIj5cbiAgICAgICAgICAgICAgICAgICAgPEh0bWxWaWV3IHYtc2hvdz1cImlzQWNlaXRvICYmIFBlZGlkb3MuVGVsZWZvbmUgIT0gbnVsbFwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgOmh0bWw9XCJQZWRpZG9zLlRlbGVmb25lfEZvcm1hdGFXaGF0c1wiIGNsYXNzPVwidGVsZWZvbmUgd2hhdHMtZm9ybWF0XCI+ICBcbiAgICAgICAgICAgICAgICAgICAgPC9IdG1sVmlldz5cbiAgICAgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxuICAgICAgICAgICAgICAgIDxMYWJlbCBjbGFzcz1cImgzXCI+XG4gICAgICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRTdHJpbmc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8U3BhbiB0ZXh0PVwiVmVpY3VsbzogXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8U3BhbiA6dGV4dD1cIlBlZGlkb3MuTW9kZWxvXCIgY2xhc3M9XCJib2xkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybWF0dGVkU3RyaW5nPlxuICAgICAgICAgICAgICAgIDwvTGFiZWw+XG4gICAgICAgICAgICAgICAgPExhYmVsIGNsYXNzPVwiaDNcIj5cbiAgICAgICAgICAgICAgICAgICAgPEZvcm1hdHRlZFN0cmluZz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxTcGFuIHRleHQ9XCJQcm9kdXRvOiBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvU3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxTcGFuIDp0ZXh0PVwiUGVkaWRvcy5CYXRlcmlhXCIgY2xhc3M9XCJib2xkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybWF0dGVkU3RyaW5nPlxuICAgICAgICAgICAgICAgIDwvTGFiZWw+XG4gICAgICAgICAgICAgICAgPExhYmVsIGNsYXNzPVwiaDNcIj5cbiAgICAgICAgICAgICAgICAgICAgPEZvcm1hdHRlZFN0cmluZz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxTcGFuIHRleHQ9XCJGb3JtYSBkZSBQYWdhbWVudG86IFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9TcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFNwYW4gOnRleHQ9XCJQZWRpZG9zLkZvcm1hRGVQYWdhbWVudG9cIiBjbGFzcz1cImJvbGRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvU3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtYXR0ZWRTdHJpbmc+XG4gICAgICAgICAgICAgICAgPC9MYWJlbD5cbiAgICAgICAgICAgICAgICA8TGFiZWwgY2xhc3M9XCJoM1wiIHYtc2hvdz1cIlBlZGlkb3MuRGVzY29udG8gPiAwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRTdHJpbmc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8U3BhbiB0ZXh0PVwiRGVzY29udG86IFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9TcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFNwYW4gOnRleHQ9XCJQZWRpZG9zLkRlc2NvbnRvfEZvcm1hdGFWYWxvclwiIGNsYXNzPVwiYm9sZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9TcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm1hdHRlZFN0cmluZz5cbiAgICAgICAgICAgICAgICA8L0xhYmVsPlxuICAgICAgICAgICAgICAgIDxMYWJlbCBjbGFzcz1cImgzXCIgdi1zaG93PVwiUGVkaWRvcy5WYWxvclRvdGFsUGVkaWRvID4gMFwiPlxuICAgICAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkU3RyaW5nPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFNwYW4gdGV4dD1cIlRvdGFsOiBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvU3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxTcGFuIDp0ZXh0PVwiUGVkaWRvcy5WYWxvclRvdGFsUGVkaWRvfEZvcm1hdGFWYWxvclwiIGNsYXNzPVwiYm9sZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9TcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm1hdHRlZFN0cmluZz5cbiAgICAgICAgICAgICAgICA8L0xhYmVsPlxuICAgICAgICAgICAgICAgIDxMYWJlbCBjbGFzcz1cImgzXCIgdi1zaG93PVwiUGVkaWRvcy5Gb3JtYVBhZ2FtZW50byAhPSBudWxsXCI+XG4gICAgICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRTdHJpbmc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8U3BhbiB0ZXh0PVwiUGFnYW1lbnRvOiBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvU3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxTcGFuIDp0ZXh0PVwiUGVkaWRvcy5Gb3JtYVBhZ2FtZW50b1wiIGNsYXNzPVwiYm9sZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9TcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm1hdHRlZFN0cmluZz5cbiAgICAgICAgICAgICAgICA8L0xhYmVsPlxuICAgICAgICAgICAgICAgIDxMYWJlbCBjbGFzcz1cImgzXCIgdi1zaG93PVwiUGVkaWRvcy5Ucm9jbyA+IDBcIj5cbiAgICAgICAgICAgICAgICAgICAgPEZvcm1hdHRlZFN0cmluZz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxTcGFuIHRleHQ9XCJUcm9jbzogXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8U3BhbiA6dGV4dD1cIlBlZGlkb3MuVHJvY298Rm9ybWF0YVZhbG9yXCIgY2xhc3M9XCJib2xkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybWF0dGVkU3RyaW5nPlxuICAgICAgICAgICAgICAgIDwvTGFiZWw+XG4gICAgICAgICAgICAgICAgPExhYmVsIGNsYXNzPVwiaDNcIj5cbiAgICAgICAgICAgICAgICAgICAgPEZvcm1hdHRlZFN0cmluZz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxTcGFuIHRleHQ9XCJEYXRhIGRhIEVudHJlZ2E6IFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9TcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFNwYW4gOnRleHQ9XCJQZWRpZG9zLkRhdGFFbnRyZWdhfEZvcm1hdGFEYXRhXCIgY2xhc3M9XCJib2xkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybWF0dGVkU3RyaW5nPlxuICAgICAgICAgICAgICAgIDwvTGFiZWw+XG4gICAgICAgICAgICAgICAgPExhYmVsIGNsYXNzPVwiaDNcIj5cbiAgICAgICAgICAgICAgICAgICAgPEZvcm1hdHRlZFN0cmluZz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxTcGFuIHRleHQ9XCJIb3LDoXJpbyBkYSBFbnRyZWdhOiBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvU3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxTcGFuIDp0ZXh0PVwiUGVkaWRvcy5EYXRhRW50cmVnYXxGb3JtYXRhSG9yYXJpb1wiIGNsYXNzPVwiYm9sZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9TcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm1hdHRlZFN0cmluZz5cbiAgICAgICAgICAgICAgICA8L0xhYmVsPlxuICAgICAgICAgICAgICAgIDxMYWJlbCBjbGFzcz1cImgzXCIgdi1zaG93PVwiIWlzQWNlaXRvXCI+XG4gICAgICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRTdHJpbmc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8U3BhbiB0ZXh0PVwiQmFpcnJvOiBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvU3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxTcGFuIDp0ZXh0PVwiUGVkaWRvcy5CYWlycm9cIiBjbGFzcz1cImJvbGRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvU3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtYXR0ZWRTdHJpbmc+XG4gICAgICAgICAgICAgICAgPC9MYWJlbD5cbiAgICAgICAgICAgICAgICA8SHRtbFZpZXcgdi1zaG93PVwiaXNBY2VpdG8gJiYgUGVkaWRvcy5FbmRlcmVjbyAhPSBudWxsXCJcbiAgICAgICAgICAgICAgICAgICAgOmh0bWw9XCJQZWRpZG9zLkVuZGVyZWNvfEZvcm1hdGFFbmRlcmVjb1wiIGNsYXNzPVwidGVsZWZvbmVcIj4gXG4gICAgICAgICAgICAgICAgPC9IdG1sVmlldz5cbiAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQgb3JpZW50YXRpb249XCJob3Jpem9udGFsXCIgdi1zaG93PVwiaXNBY2VpdG8gJiYgUGVkaWRvcy5FbmRlcmVjbyAhPSBudWxsXCI+XG4gICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9XCJ+L2ltYWdlcy9tYXBhLnBuZ1wiIGNsYXNzPVwiaW1nLW1hcGFcIiBAdGFwPVwiYWJyaXJNYXBhXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz1cIn4vaW1hZ2VzL3NoYXJlLnBuZ1wiIGNsYXNzPVwiaW1nLW1hcGEtY29tcGFydGlsaGFyXCIgQHRhcD1cImNvbXBhcnRpbGhhck1hcGFcIiAvPlxuICAgICAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XG4gICAgICAgICAgICAgICAgPExhYmVsIGNsYXNzPVwiaDNcIj5cbiAgICAgICAgICAgICAgICAgICAgPEZvcm1hdHRlZFN0cmluZz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxTcGFuIHRleHQ9XCJEaXN0w6JuY2lhIGFwcm94aW1hZGE6IFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9TcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFNwYW4gOnRleHQ9XCJQZWRpZG9zLkRpc3RhbmNpYUFwcm94aW1hZGF8Rm9ybWF0YURpc3RhbmNpYVwiIGNsYXNzPVwiYm9sZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9TcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm1hdHRlZFN0cmluZz5cbiAgICAgICAgICAgICAgICA8L0xhYmVsPlxuICAgICAgICAgICAgPC9TdGFja0xheW91dD5cblxuICAgICAgICAgICAgPFN0YWNrTGF5b3V0IHYtc2hvdz1cImlzQXZhbGlhY2FvXCI+XG4gICAgICAgICAgICAgICAgPExhYmVsIGNsYXNzPVwiaDJcIiByb3c9XCIwXCIgaG9yaXpvbnRhbEFsaWdubWVudD1cImNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkU3RyaW5nPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFNwYW4gdGV4dD1cIkF2YWxpYcOnw6NvIGRvIHBlZGlkbzogXCI+IFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9TcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFNwYW4gOnRleHQ9XCJDb2RpZ29cIiBjbGFzcz1cImJvbGRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvU3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtYXR0ZWRTdHJpbmc+XG4gICAgICAgICAgICAgICAgPC9MYWJlbD5cbiAgICAgICAgICAgICAgICA8TGFiZWwgY2xhc3M9XCJoM1wiIHRleHRXcmFwPVwidHJ1ZVwiPlxuICAgICAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkU3RyaW5nPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFNwYW4gdGV4dD1cIk8gcGVkaWRvIGZvaSBlbnRyZWd1ZSBjb3JyZXRhbWVudGU6IFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9TcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFNwYW4gOnRleHQ9XCJBdmFsaWFjYW8uRW50cmVndWVDb3JyZXRhbWVudGV8Rm9ybWF0YUJvbGVhbm9cIiBjbGFzcz1cImJvbGRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvU3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtYXR0ZWRTdHJpbmc+XG4gICAgICAgICAgICAgICAgPC9MYWJlbD5cbiAgICAgICAgICAgICAgICA8TGFiZWwgY2xhc3M9XCJoM1wiIHRleHRXcmFwPVwidHJ1ZVwiPlxuICAgICAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkU3RyaW5nPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFNwYW4gdGV4dD1cIk8gcHJvZHV0byBmb2kgZW50cmVndWUgbm8gbG9jYWwgZSBob3LDoXJpbyBhZ2VuZGFkbzogXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8U3BhbiA6dGV4dD1cIkF2YWxpYWNhby5Mb2NhbEhvcmFyaW98Rm9ybWF0YUJvbGVhbm9cIiBjbGFzcz1cImJvbGRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvU3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtYXR0ZWRTdHJpbmc+XG4gICAgICAgICAgICAgICAgPC9MYWJlbD5cbiAgICAgICAgICAgICAgICA8TGFiZWwgY2xhc3M9XCJoM1wiIHRleHRXcmFwPVwidHJ1ZVwiPlxuICAgICAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkU3RyaW5nPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFNwYW4gdGV4dD1cIk9jb3JyZXUgdHVkbyBiZW0gY29tIGEgaW5zdGFsYcOnw6NvOiBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvU3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxTcGFuIDp0ZXh0PVwiQXZhbGlhY2FvLkluc3RhbGFjYW98Rm9ybWF0YUJvbGVhbm9cIiBjbGFzcz1cImJvbGRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvU3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtYXR0ZWRTdHJpbmc+XG4gICAgICAgICAgICAgICAgPC9MYWJlbD5cbiAgICAgICAgICAgICAgICA8TGFiZWwgY2xhc3M9XCJoM1wiIHRleHRXcmFwPVwidHJ1ZVwiPlxuICAgICAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkU3RyaW5nPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFNwYW4gdGV4dD1cIkVtIHVtYSBlc2NhbGEgZGUgMCBhIDEwLCBxdWFudG8gdm9jw6ogcmVjb21lbmRhcmlhIG8gSGVsaWFyIEV4cHJlc3M6IFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9TcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFNwYW4gOnRleHQ9XCJBdmFsaWFjYW8uTm90YVwiIGNsYXNzPVwiYm9sZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9TcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm1hdHRlZFN0cmluZz5cbiAgICAgICAgICAgICAgICA8L0xhYmVsPlxuICAgICAgICAgICAgICAgIDxMYWJlbCBjbGFzcz1cImgzXCIgdGV4dFdyYXA9XCJ0cnVlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRTdHJpbmc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8U3BhbiB0ZXh0PVwiUG9ycXVlIGVzY29saGV1IGNvbXByYXIgbm8gSGVsaWFyIEV4cHJlc3M6IFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9TcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFNwYW4gOnRleHQ9XCJBdmFsaWFjYW8uTWVuc2FnZW1cIiBjbGFzcz1cImJvbGRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvU3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtYXR0ZWRTdHJpbmc+XG4gICAgICAgICAgICAgICAgPC9MYWJlbD5cbiAgICAgICAgICAgICAgICA8TGFiZWwgY2xhc3M9XCJoM1wiIHRleHRXcmFwPVwidHJ1ZVwiPlxuICAgICAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkU3RyaW5nPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFNwYW4gdGV4dD1cIk9ic2VydmHDp8OjbzogXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8U3BhbiA6dGV4dD1cIkF2YWxpYWNhby5PYnNlcnZhY2FvXCIgY2xhc3M9XCJib2xkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybWF0dGVkU3RyaW5nPlxuICAgICAgICAgICAgICAgIDwvTGFiZWw+XG4gICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxuXG4gICAgICAgICAgICA8QnV0dG9uIGNsYXNzPVwiYnRuIGVzcGFjYW1lbnRvIGJ0bi1wcmltYXJ5IGJ0bi1ncmVlblwiIHYtc2hvdz1cIiFIaXN0b3JpY28gJiYgIWlzQWNlaXRvXCIgdGV4dD1cIkFjZWl0YXJcIiBAdGFwPVwiYWNlaXRhclwiPjwvQnV0dG9uPlxuICAgICAgICAgICAgPEJ1dHRvbiBjbGFzcz1cImJ0biBlc3BhY2FtZW50byBidG4tcHJpbWFyeSBidG4tcmVkXCIgIHYtc2hvdz1cIiFIaXN0b3JpY28gJiYgIWlzQWNlaXRvXCIgdGV4dD1cInJlY3VzYXJcIiBAdGFwPVwicmVqZWl0YXJcIj48L0J1dHRvbj5cblxuICAgICAgICAgICAgPEJ1dHRvbiBjbGFzcz1cImJ0biBlc3BhY2FtZW50byBidG4tcHJpbWFyeSBidG4tZ3JlZW5cIiB2LXNob3c9XCJIaXN0b3JpY28gJiYgaXNFbmNlcnJhclwiIHRleHQ9XCJGaW5hbGl6YXIgUGVkaWRvXCIgQHRhcD1cImVuY2VycmFyXCI+PC9CdXR0b24+XG4gICAgICAgICAgICA8QnV0dG9uIGNsYXNzPVwiYnRuIGVzcGFjYW1lbnRvIGJ0bi1wcmltYXJ5IGJ0bi1yZWRcIiAgdi1zaG93PVwiSGlzdG9yaWNvICYmIGlzQ2FuY2VsYXJcIiB0ZXh0PVwiQ2FuY2VsYXIgUGVkaWRvXCIgQHRhcD1cImNhbmNlbGFyXCI+PC9CdXR0b24+XG4gICAgICAgICAgICA8QnV0dG9uIGNsYXNzPVwiYnRuIGVzcGFjYW1lbnRvIGJ0bi1wcmltYXJ5IGJ0bi1vcmFuZ2VcIiB2LXNob3c9XCJpc0F2YWxpYWNhb0JvdGFvXCIgdGV4dD1cIkF2YWxpYcOnw6NvXCIgQHRhcD1cImF2YWxpYWNhb1wiPjwvQnV0dG9uPlxuICAgICAgICAgICAgPEJ1dHRvbiBjbGFzcz1cImJ0biBlc3BhY2FtZW50byBidG4tcHJpbWFyeSBidG4tZ3JleVwiIHYtc2hvdz1cImlzQm90YW9Wb2x0YXJcIiB0ZXh0PVwiVm9sdGFyXCIgQHRhcD1cInZvbHRhclwiPjwvQnV0dG9uPlxuICAgICAgICAgICAgPEJ1dHRvbiBjbGFzcz1cImJ0biBlc3BhY2FtZW50byBidG4tcHJpbWFyeSBidG4tZ3JleVwiIHYtc2hvdz1cImlzQXZhbGlhY2FvQm90YW9Wb2x0YXJcIiB0ZXh0PVwiVm9sdGFyIGFvIHBlZGlkb1wiIEB0YXA9XCJ2b2x0YXJQZWRpZG9cIj48L0J1dHRvbj5cbiAgICAgICAgPC9TdGFja0xheW91dD5cbiAgICA8L1BhZ2U+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICAgIGltcG9ydCBIb21lIGZyb20gXCIuL0hvbWVcIjtcbiAgICBpbXBvcnQgUGVkaWRvIGZyb20gXCIuL1BlZGlkb1wiO1xuICAgIGltcG9ydCBDb25maWcgZnJvbSBcIi4uL19jb25maWcvX2NvbmZpZ1wiO1xuICAgIGNvbnN0IHV0aWxzTW9kdWxlID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdXRpbHMvdXRpbHNcIik7XG5cbiAgICB2YXIgY29uZmlnID0gbmV3IENvbmZpZygpO1xuICAgIGNvbnN0IHsgYWxlcnQsIGNvbmZpcm0sIHByb21wdCwgbG9naW4sIGFjdGlvbiwgaW5wdXRUeXBlIH0gPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9kaWFsb2dzXCIpO1xuXG4gICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICBkYXRhKCkge1xuICAgICAgICAgICByZXR1cm4geyBcbiAgICAgICAgICAgICAgICBQZWRpZG9zIDogJycsIFxuICAgICAgICAgICAgICAgIGlzQWNlaXRvIDogZmFsc2UsXG4gICAgICAgICAgICAgICAgSGlzdG9yaWNvIDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBBdmFsaWFjYW8gOiAnJywgXG4gICAgICAgICAgICAgICAgaXNBdmFsaWFjYW8gOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBpc0F2YWxpYWNhb0JvdGFvIDogZmFsc2UsXG4gICAgICAgICAgICAgICAgaXNBdmFsaWFjYW9Cb3Rhb1ZvbHRhciA6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGlzQm90YW9Wb2x0YXIgOiB0cnVlLFxuICAgICAgICAgICAgICAgIGlzRW5jZXJyYXIgOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBpc0NhbmNlbGFyIDogZmFsc2UsXG4gICAgICAgICAgICAgICAgRGF0YURlOiBudWxsLFxuICAgICAgICAgICAgICAgIERhdGFBdGU6IG51bGwsXG4gICAgICAgICAgICAgICAgU3RhdHVzOiBudWxsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgICAgICBwcm9wczogW1wiQ29kaWdvXCIsIFwiSGlzdG9yaWNvXCIsIFwiRGF0YURlXCIsIFwiRGF0YUF0ZVwiLCBcIlN0YXR1c1wiXSxcbiAgICAgICAgY3JlYXRlZCgpIHsgICBcbiAgICAgICAgICAgIHRoaXMuZGV0YWxoZVBlZGlkbyh0aGlzLkNvZGlnbyk7XG4gICAgICAgIH0sXG4gICAgICAgIGZpbHRlcnM6IHtcbiAgICAgICAgICAgIEZvcm1hdGFEYXRhOiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICB2YXIgZCA9IG5ldyBEYXRlKHZhbHVlKSxcbiAgICAgICAgICAgICAgICBtZXMgPSAnJyArIChkLmdldE1vbnRoKCkgKyAxKSxcbiAgICAgICAgICAgICAgICBkaWEgPSAnJyArIGQuZ2V0RGF0ZSgpLFxuICAgICAgICAgICAgICAgIGFubyA9IGQuZ2V0RnVsbFllYXIoKTtcblxuICAgICAgICAgICAgICAgIGlmIChtZXMubGVuZ3RoIDwgMikgbWVzID0gJzAnICsgbWVzO1xuICAgICAgICAgICAgICAgIGlmIChkaWEubGVuZ3RoIDwgMikgZGlhID0gJzAnICsgZGlhO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIFtkaWEsIG1lcywgYW5vXS5qb2luKCcvJyk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgRm9ybWF0YUhvcmFyaW86IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHZhciBkID0gbmV3IERhdGUodmFsdWUpLFxuICAgICAgICAgICAgICAgIGhvcmEgPSAnJyArIChkLmdldEhvdXJzKCkpLFxuICAgICAgICAgICAgICAgIG1pbnV0byA9ICcnICsgZC5nZXRNaW51dGVzKCk7XG5cbiAgICAgICAgICAgICAgICBpZiAoaG9yYS5sZW5ndGggPCAyKSBob3JhID0gJzAnICsgaG9yYTtcbiAgICAgICAgICAgICAgICBpZiAobWludXRvLmxlbmd0aCA8IDIpIG1pbnV0byA9ICcwJyArIG1pbnV0bztcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICByZXR1cm4gaG9yYSArIFwiOlwiICsgbWludXRvO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIEZvcm1hdGFCb2xlYW5vOiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICBpZih2YWx1ZSA9PSAnZmFsc2UnKXtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSAnTsOjbyc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9ICdTaW0nO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgRm9ybWF0YVZhbG9yOiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICB2YXIgdmFsb3IgPSBwYXJzZUZsb2F0KHZhbHVlKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJSJCBcIiArIHZhbG9yLnRvRml4ZWQoMikucmVwbGFjZSgnLicsICcsJykucmVwbGFjZSgvKFxcZCkoPz0oXFxkezN9KStcXCwpL2csIFwiJDEuXCIpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIEZvcm1hdGFUZWxlZm9uZTogZnVuY3Rpb24gKHZhbHVlKXtcbiAgICAgICAgICAgICAgICBpZih2YWx1ZSA9PSB1bmRlZmluZWQpIHsgcmV0dXJuICcnIH07XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgdmFyIHRlbCA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIHRlbCA9IHRlbC5yZXBsYWNlKCcoJywgJycpLnJlcGxhY2UoJyknLCAnJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiPGxhYmVsIHRleHRXcmFwPSd0cnVlJz48c3Bhbj5UZWw8L3NwYW4+OiBcIiArIHRlbCArIFwiPGxhYmVsPlwiO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIEZvcm1hdGFXaGF0czogZnVuY3Rpb24gKHZhbHVlKXtcbiAgICAgICAgICAgICAgICBpZih2YWx1ZSA9PSB1bmRlZmluZWQpIHsgcmV0dXJuICcnIH07XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgdmFyIHRlbCA9IHZhbHVlLnNwbGl0KFwiI1wiKVswXTtcblxuICAgICAgICAgICAgICAgIHZhciB0ZWxGb3JtYXRhZG8gPSB0ZWw7XG4gICAgICAgICAgICAgICAgdGVsID0gdGVsLnJlcGxhY2UoJygnLCAnJykucmVwbGFjZSgnKScsICcnKS5yZXBsYWNlKCcgJywgJycpLnJlcGxhY2UoJy0nLCAnJyk7XG4gICAgICAgICAgICAgICAgdGVsRm9ybWF0YWRvID0gdGVsRm9ybWF0YWRvLnJlcGxhY2UoJygnLCAnJykucmVwbGFjZSgnKScsICcgJykucmVwbGFjZSgnICcsICcnKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICByZXR1cm4gIFwiPGxhYmVsIHRleHRXcmFwPSd0cnVlJz48c3Bhbj5XaGF0czwvc3Bhbj46IDxhIGNsYXNzPSdib2xkJyBocmVmPSdodHRwczovL2FwaS53aGF0c2FwcC5jb20vc2VuZD9waG9uZT01NVwiICsgdGVsICtcbiAgICAgICAgICAgICAgICAgIFwiICZ0ZXh0PU9sJUMzJUExJTJDJTIwdHVkbyUyMGJlbSUzRiZuYnNwOyc+XCIgKyB0ZWxGb3JtYXRhZG8gKyBcIjwvYT48L2xhYmVsPlwiO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIEZvcm1hdGFFbmRlcmVjbzogZnVuY3Rpb24gKHZhbHVlKXtcbiAgICAgICAgICAgICAgICBpZih2YWx1ZSA9PSB1bmRlZmluZWQpIHsgcmV0dXJuICcnIH07XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gXCI8bGFiZWwgdGV4dFdyYXA9J3RydWUnPjxzcGFuPkVuZGVyZcOnbzwvc3Bhbj46IDxiPiBcIiArIHZhbHVlICsgXCI8L2I+IDwvbGFiZWw+XCI7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgIEZvcm1hdGFMb2phOiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gXCI8bGFiZWwgdGV4dFdyYXA9J3RydWUnPjxzcGFuPkxvamE8L3NwYW4+OiA8Yj4gXCIgKyB2YWx1ZSArIFwiPC9iPjwvbGFiZWw+XCI7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgRm9ybWF0YURpc3RhbmNpYTogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlICsgXCIgS01cIjtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgICAgIGRldGFsaGVQZWRpZG8oY29kaWdvKSB7XG4gICAgICAgICAgICAgICB0aGlzLiRoZWxpYXJBcHBcbiAgICAgICAgICAgICAgICAgICAgLmRldGFsaGVQZWRpZG8oY29kaWdvKVxuICAgICAgICAgICAgICAgICAgICAudGhlbigocmVzcG9uc2UpPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICB0aGlzLlBlZGlkb3MgPSByZXNwb25zZS5QZWRpZG9zO1xuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLlN0YXR1cyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgaWYodGhpcy5IaXN0b3JpY28gPT0gdHJ1ZSl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pc0FjZWl0byA9IHRydWU7ICBcbiAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgIGlmKHRoaXMuUGVkaWRvcy5Db2RpZ29TdGF0dXMgPT0gNiB8fCB0aGlzLlBlZGlkb3MuQ29kaWdvU3RhdHVzID09IDUgfHwgdGhpcy5QZWRpZG9zLkNvZGlnb1N0YXR1cyA9PSAxMCl7IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXNFbmNlcnJhciA9IGZhbHNlOyAvLyA2ID0gcGVkaWRvIGZpbmFsaXphZG9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlzQ2FuY2VsYXIgPSBmYWxzZTsgLy8gNSA9IHBlZGlkbyBjYW5jZWxhZG9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlzQWNlaXRvID0gZmFsc2U7IC8vIDEwID0gIHBlZGlkbyBlbnRyZWd1ZVxuICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYodGhpcy5IaXN0b3JpY28gPT0gdHJ1ZSl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pc0VuY2VycmFyID0gdHJ1ZTsgLy8gNiA9IHBlZGlkbyBmaW5hbGl6YWRvXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pc0NhbmNlbGFyID0gdHJ1ZTsgLy8gNSA9IHBlZGlkbyBjYW5jZWxhZG9cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYodGhpcy5IaXN0b3JpY28gPT0gXCJ0cnVlXCIpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pc0FjZWl0byA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLkhpc3RvcmljbyA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlzRW5jZXJyYXIgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pc0NhbmNlbGFyID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmKHRoaXMuSGlzdG9yaWNvID09IFwiZmFsc2VcIil7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlzQWNlaXRvID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLkhpc3RvcmljbyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgaWYocmVzcG9uc2UuUGVkaWRvcy5BdmFsaWFjb2VzUGVkaWRvTW9iaWxlICE9IG51bGwpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuQXZhbGlhY2FvID0gcmVzcG9uc2UuUGVkaWRvcy5BdmFsaWFjb2VzUGVkaWRvTW9iaWxlOyAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pc0F2YWxpYWNhb0JvdGFvID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hbGVydChcIkVycm8gYW8gZW5jb250cmFyIHNldSBwZWRpZG9cIik7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGFicmlyTWFwYSgpe1xuICAgICAgICAgICAgICAgIHV0aWxzTW9kdWxlLm9wZW5VcmwoJ2h0dHBzOi8vd3d3Lmdvb2dsZS5jb20vbWFwcy9wbGFjZS8nICsgdGhpcy5QZWRpZG9zLkVuZGVyZWNvLnJlcGxhY2UoJy8nLCAnKycpLnJlcGxhY2UoJyAtICcsICcsJylcbiAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoJyAtJywgJywnKS5yZXBsYWNlKCctICcsICcsJykucmVwbGFjZSgnLScsICcsJykucmVwbGFjZSgnICcsICcrJykucmVwbGFjZSgnICcsICcrJylcbiAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoJyAnLCAnKycpLnJlcGxhY2UoJyAnLCAnKycpLnJlcGxhY2UoJyAnLCAnKycpLnJlcGxhY2UoJyAnLCAnKycpKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjb21wYXJ0aWxoYXJNYXBhKCl7XG4gICAgICAgICAgICAgICAgdXRpbHNNb2R1bGUub3BlblVybCgnaHR0cHM6Ly9hcGkud2hhdHNhcHAuY29tL3NlbmQ/dGV4dD1odHRwczovL3d3dy5nb29nbGUuY29tL21hcHMvcGxhY2UvJyArIHRoaXMuUGVkaWRvcy5FbmRlcmVjby5yZXBsYWNlKCcvJywgJy4nKS5yZXBsYWNlKCcgLSAnLCAnLCcpXG4gICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKCcgLScsICcsJykucmVwbGFjZSgnLSAnLCAnLCcpLnJlcGxhY2UoJy0nLCAnLCcpLnJlcGxhY2UoJyAnLCAnLicpLnJlcGxhY2UoJyAnLCAnLicpXG4gICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKCcgJywgJy4nKS5yZXBsYWNlKCcgJywgJy4nKS5yZXBsYWNlKCcgJywgJy4nKS5yZXBsYWNlKCcgJywgJy4nKSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdm9sdGFyKCkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuU3RhdHVzKTtcbiAgICAgICAgICAgICAgICB0aGlzLiRuYXZpZ2F0ZVRvKEhvbWUsIHtcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJIaXN0b3J5OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIEhpc3RvcmljbzogdGhpcy5IaXN0b3JpY28sXG4gICAgICAgICAgICAgICAgICAgICAgICBEYXRhRGVGaWx0cm86IHRoaXMuRGF0YURlLFxuICAgICAgICAgICAgICAgICAgICAgICAgRGF0YUF0ZUZpbHRybzogdGhpcy5EYXRhQXRlLFxuICAgICAgICAgICAgICAgICAgICAgICAgU3RhdHVzRmlsdHJvOiB0aGlzLlN0YXR1c1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdm9sdGFyUGVkaWRvKCkge1xuICAgICAgICAgICAgICAgIHRoaXMuaXNBdmFsaWFjYW8gPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLmlzQXZhbGlhY2FvQm90YW9Wb2x0YXIgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLmlzQXZhbGlhY2FvQm90YW8gPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMuaXNCb3Rhb1ZvbHRhciA9IHRydWU7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYXZhbGlhY2FvKCkge1xuICAgICAgICAgICAgICAgdGhpcy5pc0F2YWxpYWNhbyA9IHRydWU7XG4gICAgICAgICAgICAgICB0aGlzLmlzQXZhbGlhY2FvQm90YW9Wb2x0YXIgPSB0cnVlO1xuICAgICAgICAgICAgICAgdGhpcy5pc0F2YWxpYWNhb0JvdGFvID0gZmFsc2U7IFxuICAgICAgICAgICAgICAgdGhpcy5pc0JvdGFvVm9sdGFyID0gZmFsc2U7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZW5jZXJyYXIoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kaGVsaWFyQXBwXG4gICAgICAgICAgICAgICAgLmVuY2VycmFyUGVkaWRvKHRoaXMuQ29kaWdvKVxuICAgICAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSk9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmKHJlc3BvbnNlLlN0YXR1cyA9PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlzRW5jZXJyYXIgPSBmYWxzZTsgXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlzQ2FuY2VsYXIgPSBmYWxzZTsgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWxlcnQocmVzcG9uc2UuTWVuc2FnZW0pO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLmNhdGNoKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hbGVydChcIkVycm8gYW8gYWNlaXRhciBvIHBlZGlkb1wiKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBhY2VpdGFyKCkge1xuICAgICAgICAgICAgICAgIHRoaXMuJGhlbGlhckFwcFxuICAgICAgICAgICAgICAgIC5hY2VpdGFyUGVkaWRvKHRoaXMuQ29kaWdvLCB0cnVlLCAnJywgJycpXG4gICAgICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKT0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYocmVzcG9uc2UuU3RhdHVzID09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXNBY2VpdG8gPSB0cnVlOyAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWxlcnQocmVzcG9uc2UuTWVuc2FnZW0pO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLmNhdGNoKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hbGVydChcIkVycm8gYW8gYWNlaXRhciBvIHBlZGlkb1wiKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sICAgICAgICAgICBcbiAgICAgICAgICAgIHJlamVpdGFyKCkge1xuICAgICAgICAgICAgICAgIHZhciBkaWFsb2dzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvZGlhbG9nc1wiKTsgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBkaWFsb2dzLmFjdGlvbih7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIkRlc2VqYSByZWFsbWVudGUgUmVjdXNhcj8gSW5mb3JtZSB1bSBtb3Rpdm9cIixcbiAgICAgICAgICAgICAgICAgICAgY2FuY2VsQnV0dG9uVGV4dDogXCJDYW5jZWxhclwiLFxuICAgICAgICAgICAgICAgICAgICBhY3Rpb25zOiB0aGlzLlBlZGlkb3MuSnVzdGlmaWNhdGl2YXNSZWplaWNvZXNQZWRpZG9cbiAgICAgICAgICAgICAgICB9KS50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJlc3Bvc3RhID0gcmVzdWx0O1xuXG4gICAgICAgICAgICAgICAgICAgICBpZihyZXN1bHQgPT0gXCJDYW5jZWxhclwiKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICB9IFxuXG4gICAgICAgICAgICAgICAgICAgIGlmKHJlc3VsdCA9PSBcIk91dHJvXCIpe1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvbXB0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJEZXNlamEgcmVhbG1lbnRlIFJlY3VzYXI/IERlc2NyZXZhIG8gbW90aXZvXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb2tCdXR0b25UZXh0OiBcIlJlY3VzYXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiBcIkNhbmNlbGFyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFRleHQ6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB9KS50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihyZXN1bHQucmVzdWx0ID09IGZhbHNlKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kaGVsaWFyQXBwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlY3VzYXJQZWRpZG8odGhpcy5Db2RpZ28sIGZhbHNlLCByZXNwb3N0YSwgcmVzdWx0LnRleHQudHJpbSgpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSk9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHJlc3BvbnNlLlN0YXR1cyA9PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlzQWNlaXRvID0gZmFsc2U7IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5IaXN0b3JpY28gPSB0cnVlOyAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hbGVydChyZXNwb25zZS5NZW5zYWdlbSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuY2F0Y2goKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFsZXJ0KFwiRXJybyBhbyByZWN1c2FyIG8gcGVkaWRvXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJGhlbGlhckFwcFxuICAgICAgICAgICAgICAgICAgICAgICAgLnJlY3VzYXJQZWRpZG8odGhpcy5Db2RpZ28sIGZhbHNlLCByZXNwb3N0YSwnJylcbiAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSk9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYocmVzcG9uc2UuU3RhdHVzID09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pc0FjZWl0byA9IGZhbHNlOyAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLkhpc3RvcmljbyA9IHRydWU7ICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWxlcnQocmVzcG9uc2UuTWVuc2FnZW0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jYXRjaCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hbGVydChcIkVycm8gYW8gcmVjdXNhciBvIHBlZGlkb1wiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LCAgIFxuICAgICAgICAgICAgY2FuY2VsYXIoKSB7XG4gICAgICAgICAgICAgICAgdmFyIGRpYWxvZ3MgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9kaWFsb2dzXCIpO1xuICAgICAgICAgICAgICAgIGRpYWxvZ3MuYWN0aW9uKHtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiRGVzZWphIHJlYWxtZW50ZSBjYW5jZWxhciBvIHBlZGlkbz8gSW5mb3JtZSB1bSBtb3Rpdm9cIixcbiAgICAgICAgICAgICAgICAgICAgY2FuY2VsQnV0dG9uVGV4dDogXCJDYW5jZWxhclwiLFxuICAgICAgICAgICAgICAgICAgICBhY3Rpb25zOiB0aGlzLlBlZGlkb3MuSnVzdGlmaWNhdGl2YXNSZWplaWNvZXNQZWRpZG9cbiAgICAgICAgICAgICAgICB9KS50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJlc3Bvc3RhID0gcmVzdWx0O1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgaWYocmVzdWx0ID09IFwiQ2FuY2VsYXJcIil7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpZihyZXN1bHQgPT0gXCJPdXRyb1wiKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb21wdCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiRGVzZWphIHJlYWxtZW50ZSBjYW5jZWxhciBvIHBlZGlkbz8gSW5mb3JtZSB1bSBtb3Rpdm9cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBva0J1dHRvblRleHQ6IFwiUmVjdXNhclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6IFwiQ2FuY2VsYXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VGV4dDogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHJlc3VsdC5yZXN1bHQgPT0gZmFsc2Upe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRoZWxpYXJBcHBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuY2FuY2VsYXJQZWRpZG8odGhpcy5Db2RpZ28sIHJlc3Bvc3RhLCByZXN1bHQudGV4dC50cmltKCkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKT0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYocmVzcG9uc2UuU3RhdHVzID09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXNFbmNlcnJhciA9IGZhbHNlOyBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXNDYW5jZWxhciA9IGZhbHNlOyAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlzQWNlaXRvID0gZmFsc2U7ICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFsZXJ0KHJlc3BvbnNlLk1lbnNhZ2VtKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jYXRjaCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWxlcnQoXCJFcnJvIGFvIHJlY3VzYXIgbyBwZWRpZG9cIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kaGVsaWFyQXBwXG4gICAgICAgICAgICAgICAgICAgICAgICAuY2FuY2VsYXJQZWRpZG8odGhpcy5Db2RpZ28sIHJlc3Bvc3RhLCcnKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKT0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihyZXNwb25zZS5TdGF0dXMgPT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlzRW5jZXJyYXIgPSBmYWxzZTsgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXNDYW5jZWxhciA9IGZhbHNlOyAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXNBY2VpdG8gPSBmYWxzZTsgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hbGVydChyZXNwb25zZS5NZW5zYWdlbSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgLmNhdGNoKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFsZXJ0KFwiRXJybyBhbyByZWN1c2FyIG8gcGVkaWRvXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICBhbGVydChtZXNzYWdlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGFsZXJ0KHtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiQXRlbsOnw6NvXCIsXG4gICAgICAgICAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJPS1wiLFxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBtZXNzYWdlXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9ICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICB9O1xuPC9zY3JpcHQ+XG5cbjxzdHlsZT5cbiAgICAubGJsIHtcbiAgICAgICAgY29sb3I6ICNGRkY7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMDtcbiAgICB9XG4gICAgLmJvbGQge1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB9XG4gICAgLmZvcm17XG4gICAgICAgIG1hcmdpbi1sZWZ0OjIwcHg7XG4gICAgfVxuICAgIC50ZWxlZm9uZVxuICAgIHtcbiAgICAgICAgY29sb3I6IzAwMDtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgfVxuICAgIC5lc3BhY2FtZW50b3tcbiAgICAgICAgbWFyZ2luLXRvcDo4cHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206OHB4O1xuICAgIH1cbiAgICAubG9nby1pY297XG4gICAgICAgICBoZWlnaHQ6IDIwO1xuICAgICAgICAgd2lkdGg6IDQwO1xuICAgIH1cbiAgICAudGVsZWZvbmUtZm9ybWF0e1xuICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCd+L2ltYWdlcy9saWdhci5wbmcnKTtcbiAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDE1MHB4IDcwcHg7XG4gICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiByaWdodDtcbiAgICAgICAgIHBhZGRpbmc6IDAgMTgwcHggMCAwOyAgICAgICAgIFxuICAgIH1cbiAgICAud2hhdHMtZm9ybWF0e1xuICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCd+L2ltYWdlcy93aGF0cy5wbmcnKTtcbiAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDUwcHggNTBweDtcbiAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IHJpZ2h0O1xuICAgICAgICAgcGFkZGluZzogMCA4MHB4IDAgMDsgICAgICAgICBcbiAgICB9XG4gICAgLmltZy1tYXBhe1xuICAgICAgICAgd2lkdGg6IDE5MHB4O1xuICAgIH1cbiAgICAuaW1nLW1hcGEtY29tcGFydGlsaGFye1xuICAgICAgICAgd2lkdGg6IDM4MHB4O1xuICAgICAgICAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gICAgfVxuPC9zdHlsZT4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbi5zdWItdGl0dWxvIHtcXG4gICAgY29sb3I6ICMxZTY4MzI7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG59XFxuLmlucHV0e1xcbiAgICBib3JkZXItY29sb3I6cmVkO1xcbn1cXG4ubGJsIHtcXG4gICAgY29sb3I6ICNGRkY7XFxuICAgIG1hcmdpbi1sZWZ0OiAxMDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxMDtcXG59XFxuLmJvbGQge1xcblxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuLmZvcm17XFxuICAgIG1hcmdpbi1sZWZ0OjIwcHg7XFxufVxcbi50ZWxlZm9uZVxcbntcXG4gICAgY29sb3I6IzAwMDtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XFxufVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuICAgIGNvbnN0IGFwcGxpY2F0aW9uID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb25cIik7XG4gICAgcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvc3R5bGluZy9zdHlsZS1zY29wZVwiKTtcblxuICAgIGlmICh0eXBlb2YgZXhwb3J0cy5mb3JFYWNoID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgZXhwb3J0cy5mb3JFYWNoKGNzc0V4cG9ydCA9PiB7XG4gICAgICAgICAgICBpZiAoY3NzRXhwb3J0Lmxlbmd0aCA+IDEgJiYgY3NzRXhwb3J0WzFdKSB7XG4gICAgICAgICAgICAgICAgLy8gYXBwbHlpbmcgdGhlIHNlY29uZCBpdGVtIG9mIHRoZSBleHBvcnQgYXMgaXQgY29udGFpbnMgdGhlIGNzcyBjb250ZW50c1xuICAgICAgICAgICAgICAgIGFwcGxpY2F0aW9uLmFkZENzcyhjc3NFeHBvcnRbMV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG47XG4gICAgaWYgKG1vZHVsZS5ob3QpIHtcbiAgICAgICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHtcbiAgICAgICAgICAgIGdsb2JhbC5obXJSZWZyZXNoKHsgdHlwZTogJ3N0eWxlJywgcGF0aDogJy4vY29tcG9uZW50cy9FZGl0YXIudnVlJyB9KTtcbiAgICAgICAgfSlcbiAgICB9XG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbi5sYmx7XFxuICAgIGNvbG9yOiNGRkY7XFxuICAgIG1hcmdpbi1sZWZ0OiAxMDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxMDtcXG59XFxuLmxibC1ib2xke1xcbiAgICAgXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG4uc2FpciB7XFxuICAgIGhlaWdodDogMzA7XFxufVxcbi5lZGljYW8ge1xcbiAgICBoZWlnaHQ6IDI1O1xcbn1cXG4uYnRuLXRhbWFuaG97XFxuICAgIHdpZHRoOiA0MSU7XFxufVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuICAgIGNvbnN0IGFwcGxpY2F0aW9uID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb25cIik7XG4gICAgcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvc3R5bGluZy9zdHlsZS1zY29wZVwiKTtcblxuICAgIGlmICh0eXBlb2YgZXhwb3J0cy5mb3JFYWNoID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgZXhwb3J0cy5mb3JFYWNoKGNzc0V4cG9ydCA9PiB7XG4gICAgICAgICAgICBpZiAoY3NzRXhwb3J0Lmxlbmd0aCA+IDEgJiYgY3NzRXhwb3J0WzFdKSB7XG4gICAgICAgICAgICAgICAgLy8gYXBwbHlpbmcgdGhlIHNlY29uZCBpdGVtIG9mIHRoZSBleHBvcnQgYXMgaXQgY29udGFpbnMgdGhlIGNzcyBjb250ZW50c1xuICAgICAgICAgICAgICAgIGFwcGxpY2F0aW9uLmFkZENzcyhjc3NFeHBvcnRbMV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG47XG4gICAgaWYgKG1vZHVsZS5ob3QpIHtcbiAgICAgICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHtcbiAgICAgICAgICAgIGdsb2JhbC5obXJSZWZyZXNoKHsgdHlwZTogJ3N0eWxlJywgcGF0aDogJy4vY29tcG9uZW50cy9Ib21lLnZ1ZScgfSk7XG4gICAgICAgIH0pXG4gICAgfVxuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG4ucGFnZVtkYXRhLXYtYzI3NDgyYzRdIHtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuLmZvcm1bZGF0YS12LWMyNzQ4MmM0XSB7XFxuICAgIG1hcmdpbi1sZWZ0OiAzMDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAzMDtcXG4gICAgZmxleC1ncm93OiAyO1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbn1cXG4ubG9nb1tkYXRhLXYtYzI3NDgyYzRdIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTI7XFxuICAgIGhlaWdodDogOTA7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG4uaGVhZGVyW2RhdGEtdi1jMjc0ODJjNF0ge1xcbiAgICBob3Jpem9udGFsLWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMjU7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIG1hcmdpbi1ib3R0b206IDcwO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGNvbG9yOiAjMDY3QTY1O1xcbn1cXG4ubWVuc2FnZW1bZGF0YS12LWMyNzQ4MmM0XSB7XFxuICAgIGhvcml6b250YWwtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAxNjtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBjb2xvcjogcmVkO1xcbn1cXG4uaW5wdXQtZmllbGRbZGF0YS12LWMyNzQ4MmM0XSB7XFxuICAgIG1hcmdpbi1ib3R0b206IDI1O1xcbn1cXG4uaW5wdXRbZGF0YS12LWMyNzQ4MmM0XSB7XFxuICAgIGZvbnQtc2l6ZTogMTg7XFxuICAgIHBsYWNlaG9sZGVyLWNvbG9yOiAjQThBOEE4O1xcbn1cXG4uaW5wdXRbZGF0YS12LWMyNzQ4MmM0XTpkaXNhYmxlZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBvcGFjaXR5OiAwLjU7XFxufVxcbi5idG4tcHJpbWFyeVtkYXRhLXYtYzI3NDgyYzRdIHtcXG4gICAgbWFyZ2luOiAzMCA1IDE1IDU7XFxufVxcbi5sb2dpbi1sYWJlbFtkYXRhLXYtYzI3NDgyYzRdIHtcXG4gICAgaG9yaXpvbnRhbC1hbGlnbjogY2VudGVyO1xcbiAgICBjb2xvcjogI0E4QThBODtcXG4gICAgZm9udC1zaXplOiAxNjtcXG59XFxuLnNpZ24tdXAtbGFiZWxbZGF0YS12LWMyNzQ4MmM0XSB7XFxuICAgIG1hcmdpbi1ib3R0b206IDIwO1xcbn1cXG4uYm9sZFtkYXRhLXYtYzI3NDgyYzRdIHtcXG4gICAgY29sb3I6ICMwMDAwMDA7XFxufVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuICAgIGNvbnN0IGFwcGxpY2F0aW9uID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb25cIik7XG4gICAgcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvc3R5bGluZy9zdHlsZS1zY29wZVwiKTtcblxuICAgIGlmICh0eXBlb2YgZXhwb3J0cy5mb3JFYWNoID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgZXhwb3J0cy5mb3JFYWNoKGNzc0V4cG9ydCA9PiB7XG4gICAgICAgICAgICBpZiAoY3NzRXhwb3J0Lmxlbmd0aCA+IDEgJiYgY3NzRXhwb3J0WzFdKSB7XG4gICAgICAgICAgICAgICAgLy8gYXBwbHlpbmcgdGhlIHNlY29uZCBpdGVtIG9mIHRoZSBleHBvcnQgYXMgaXQgY29udGFpbnMgdGhlIGNzcyBjb250ZW50c1xuICAgICAgICAgICAgICAgIGFwcGxpY2F0aW9uLmFkZENzcyhjc3NFeHBvcnRbMV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG47XG4gICAgaWYgKG1vZHVsZS5ob3QpIHtcbiAgICAgICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHtcbiAgICAgICAgICAgIGdsb2JhbC5obXJSZWZyZXNoKHsgdHlwZTogJ3N0eWxlJywgcGF0aDogJy4vY29tcG9uZW50cy9Mb2dpbi52dWUnIH0pO1xuICAgICAgICB9KVxuICAgIH1cbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLmxibCB7XFxuICAgIGNvbG9yOiAjRkZGO1xcbiAgICBtYXJnaW4tbGVmdDogMTA7XFxuICAgIG1hcmdpbi1yaWdodDogMTA7XFxufVxcbi5ib2xkIHtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcbi5mb3Jte1xcbiAgICBtYXJnaW4tbGVmdDoyMHB4O1xcbn1cXG4udGVsZWZvbmVcXG57XFxuICAgIGNvbG9yOiMwMDA7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xcbn1cXG4uZXNwYWNhbWVudG97XFxuICAgIG1hcmdpbi10b3A6OHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOjhweDtcXG59XFxuLmxvZ28taWNve1xcbiAgICAgaGVpZ2h0OiAyMDtcXG4gICAgIHdpZHRoOiA0MDtcXG59XFxuLnRlbGVmb25lLWZvcm1hdHtcXG4gICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnfi9pbWFnZXMvbGlnYXIucG5nJyk7XFxuICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICAgYmFja2dyb3VuZC1zaXplOiAxNTBweCA3MHB4O1xcbiAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogcmlnaHQ7XFxuICAgICBwYWRkaW5nOiAwIDE4MHB4IDAgMDtcXG59XFxuLndoYXRzLWZvcm1hdHtcXG4gICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnfi9pbWFnZXMvd2hhdHMucG5nJyk7XFxuICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICAgYmFja2dyb3VuZC1zaXplOiA1MHB4IDUwcHg7XFxuICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiByaWdodDtcXG4gICAgIHBhZGRpbmc6IDAgODBweCAwIDA7XFxufVxcbi5pbWctbWFwYXtcXG4gICAgIHdpZHRoOiAxOTBweDtcXG59XFxuLmltZy1tYXBhLWNvbXBhcnRpbGhhcntcXG4gICAgIHdpZHRoOiAzODBweDtcXG4gICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xcbn1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cbiAgICBjb25zdCBhcHBsaWNhdGlvbiA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uXCIpO1xuICAgIHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3N0eWxpbmcvc3R5bGUtc2NvcGVcIik7XG5cbiAgICBpZiAodHlwZW9mIGV4cG9ydHMuZm9yRWFjaCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIGV4cG9ydHMuZm9yRWFjaChjc3NFeHBvcnQgPT4ge1xuICAgICAgICAgICAgaWYgKGNzc0V4cG9ydC5sZW5ndGggPiAxICYmIGNzc0V4cG9ydFsxXSkge1xuICAgICAgICAgICAgICAgIC8vIGFwcGx5aW5nIHRoZSBzZWNvbmQgaXRlbSBvZiB0aGUgZXhwb3J0IGFzIGl0IGNvbnRhaW5zIHRoZSBjc3MgY29udGVudHNcbiAgICAgICAgICAgICAgICBhcHBsaWNhdGlvbi5hZGRDc3MoY3NzRXhwb3J0WzFdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuO1xuICAgIGlmIChtb2R1bGUuaG90KSB7XG4gICAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB7XG4gICAgICAgICAgICBnbG9iYWwuaG1yUmVmcmVzaCh7IHR5cGU6ICdzdHlsZScsIHBhdGg6ICcuL2NvbXBvbmVudHMvUGVkaWRvLnZ1ZScgfSk7XG4gICAgICAgIH0pXG4gICAgfVxuIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcIlBhZ2VcIixcbiAgICBbXG4gICAgICBfYyhcbiAgICAgICAgXCJBY3Rpb25CYXJcIixcbiAgICAgICAgeyBhdHRyczogeyB0aXRsZTogXCJQZXJmaWwgZG8gVXN1w6FyaW9cIiB9IH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiTGFiZWxcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaDJcIixcbiAgICAgICAgICAgICAgYXR0cnM6IHsgcm93OiBcIjBcIiwgaG9yaXpvbnRhbEFsaWdubWVudDogXCJjZW50ZXJcIiB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcIlNwYW5cIiwgeyBhdHRyczogeyB0ZXh0OiBcIlBlcmZpbCBkbyBVc3XDoXJpb1wiIH0gfSksXG4gICAgICAgICAgICAgIF9jKFwiU3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcImJvbGRcIiwgYXR0cnM6IHsgdGV4dDogX3ZtLkNvZGlnbyB9IH0pXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKSxcbiAgICAgIF9jKFxuICAgICAgICBcIkZsZXhib3hMYXlvdXRcIixcbiAgICAgICAgeyBzdGF0aWNDbGFzczogXCJwYWdlXCIgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJmb3JtXCIgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJHcmlkTGF5b3V0XCIsXG4gICAgICAgICAgICAgICAgeyBhdHRyczogeyByb3dzOiBcImF1dG8sIGF1dG8sIGF1dG8sIGF1dG8sIGF1dG8sIGF1dG8sIGF1dG9cIiB9IH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiU3RhY2tMYXlvdXRcIixcbiAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJpbnB1dC1maWVsZFwiLCBhdHRyczogeyByb3c6IFwiMFwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwic3ViLXRpdHVsb1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogXCJNZXVzIGRhZG9zXCIgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImlucHV0LWZpZWxkXCIsIGF0dHJzOiB7IHJvdzogXCIxXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJUZXh0RmllbGRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaW5wdXRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhpbnQ6IFwiTm9tZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBrZXlib2FyZFR5cGU6IFwibm9tZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvY29ycmVjdDogXCJmYWxzZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvY2FwaXRhbGl6YXRpb25UeXBlOiBcIm5vbmVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuS2V5VHlwZTogXCJuZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLlVzdWFyaW8uTm9tZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5Vc3VhcmlvLCBcIk5vbWVcIiwgJGV2ZW50Lm9iamVjdFtcInRleHRcIl0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiVXN1YXJpby5Ob21lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcIlN0YWNrTGF5b3V0XCIsIHsgc3RhdGljQ2xhc3M6IFwiaHItbGlnaHRcIiB9KVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiU3RhY2tMYXlvdXRcIixcbiAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJpbnB1dC1maWVsZFwiLCBhdHRyczogeyByb3c6IFwiMlwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiVGV4dEZpZWxkXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImlucHV0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBoaW50OiBcIkUtbWFpbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBrZXlib2FyZFR5cGU6IFwiZW1haWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJlbWFpbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvY29ycmVjdDogXCJmYWxzZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvY2FwaXRhbGl6YXRpb25UeXBlOiBcIm5vbmVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuS2V5VHlwZTogXCJuZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLlVzdWFyaW8uRW1haWwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5Vc3VhcmlvLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJFbWFpbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50Lm9iamVjdFtcInRleHRcIl1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiVXN1YXJpby5FbWFpbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJTdGFja0xheW91dFwiLCB7IHN0YXRpY0NsYXNzOiBcImhyLWxpZ2h0XCIgfSlcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcIlN0YWNrTGF5b3V0XCIsXG4gICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiaW5wdXQtZmllbGRcIiwgYXR0cnM6IHsgcm93OiBcIjNcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInN1Yi10aXR1bG9cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRleHQ6IFwiTWluaGEgU2VuaGFcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcIlN0YWNrTGF5b3V0XCIsXG4gICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiaW5wdXQtZmllbGRcIiwgYXR0cnM6IHsgcm93OiBcIjRcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcIlRleHRGaWVsZFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWY6IFwicGFzc3dvcmRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImlucHV0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBoaW50OiBcIlNlbmhhIEF0dWFsXCIsIHNlY3VyZTogXCJ0cnVlXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uVXN1YXJpby5TZW5oYUF0dWFsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uVXN1YXJpbyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiU2VuaGFBdHVhbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50Lm9iamVjdFtcInRleHRcIl1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiVXN1YXJpby5TZW5oYUF0dWFsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcIlN0YWNrTGF5b3V0XCIsIHsgc3RhdGljQ2xhc3M6IFwiaHItbGlnaHRcIiB9KVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiU3RhY2tMYXlvdXRcIixcbiAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJpbnB1dC1maWVsZFwiLCBhdHRyczogeyByb3c6IFwiNVwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiVGV4dEZpZWxkXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZjogXCJwYXNzd29yZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaW5wdXRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGhpbnQ6IFwiTm92YSBzZW5oYVwiLCBzZWN1cmU6IFwidHJ1ZVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBvbjogeyByZXR1cm5QcmVzczogX3ZtLmZvY3VzUGFzc3dvcmQgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uVXN1YXJpby5TZW5oYSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLlVzdWFyaW8sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlNlbmhhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQub2JqZWN0W1widGV4dFwiXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJVc3VhcmlvLlNlbmhhXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcIlN0YWNrTGF5b3V0XCIsIHsgc3RhdGljQ2xhc3M6IFwiaHItbGlnaHRcIiB9KVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiU3RhY2tMYXlvdXRcIixcbiAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJpbnB1dC1maWVsZFwiLCBhdHRyczogeyByb3c6IFwiNlwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiVGV4dEZpZWxkXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZjogXCJjb25maXJtUGFzc3dvcmRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImlucHV0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBoaW50OiBcIkNvbmZpcm1hciBub3ZhIHNlbmhhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNlY3VyZTogXCJ0cnVlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybktleVR5cGU6IFwiZG9uZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgb246IHsgcmV0dXJuUHJlc3M6IF92bS5mb2N1c0NvbmZpcm1QYXNzd29yZCB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5Vc3VhcmlvLkNvbmZpcm1hclNlbmhhLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uVXN1YXJpbyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiQ29uZmlybWFyU2VuaGFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC5vYmplY3RbXCJ0ZXh0XCJdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIlVzdWFyaW8uQ29uZmlybWFyU2VuaGFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiU3RhY2tMYXlvdXRcIiwgeyBzdGF0aWNDbGFzczogXCJoci1saWdodFwiIH0pXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX2MoXCJCdXR0b25cIiwge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tcHJpbWFyeSBidG4tZ3JlZW5cIixcbiAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBcIlNhbHZhclwiIH0sXG4gICAgICAgICAgICAgICAgb246IHsgdGFwOiBfdm0uc2FsdmFyIH1cbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF9jKFwiQnV0dG9uXCIsIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLXByaW1hcnkgYnRuLWdyZXlcIixcbiAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBcIkNhbmNlbGFyXCIgfSxcbiAgICAgICAgICAgICAgICBvbjogeyB0YXA6IF92bS52b2x0YXIgfVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgIClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJQYWdlXCIsXG4gICAgeyBhdHRyczogeyBhY3Rpb25CYXJIaWRkZW46IFwiZmFsc2VcIiB9IH0sXG4gICAgW1xuICAgICAgX2MoXG4gICAgICAgIFwiQWN0aW9uQmFyXCIsXG4gICAgICAgIHsgYXR0cnM6IHsgdGl0bGU6IFwiXCIgfSB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcIlN0YWNrTGF5b3V0XCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgb3JpZW50YXRpb246IFwiaG9yaXpvbnRhbFwiLFxuICAgICAgICAgICAgICAgIFwiaW9zOmhvcml6b250YWxBbGlnbm1lbnRcIjogXCJsZWZ0XCIsXG4gICAgICAgICAgICAgICAgXCJhbmRyb2lkOmhvcml6b250YWxBbGlnbm1lbnRcIjogXCJsZWZ0XCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJJbWFnZVwiLCB7XG4gICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgaGVpZ2h0OiBcIjEwMHB4XCIsIGZsb2F0OiBcInJpZ2h0XCIgfSxcbiAgICAgICAgICAgICAgICBhdHRyczogeyBzcmM6IFwifi9pbWFnZXMvbG9nby5wbmdcIiB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgICksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcIkFjdGlvbkl0ZW1cIixcbiAgICAgICAgICAgIHsgYXR0cnM6IHsgXCJpb3MucG9zaXRpb25cIjogXCJyaWdodFwiIH0sIG9uOiB7IHRhcDogX3ZtLmVkaXRhciB9IH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwiSW1hZ2VcIiwgeyBhdHRyczogeyBzcmM6IFwifi9pbWFnZXMvbG9nby10b3BvLnBuZ1wiIH0gfSksXG4gICAgICAgICAgICAgIF9jKFwiSW1hZ2VcIiwge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImVkaWNhb1wiLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7IHNyYzogXCJyZXM6Ly9lZGljYW9cIiB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgICksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcIkFjdGlvbkl0ZW1cIixcbiAgICAgICAgICAgIHsgYXR0cnM6IHsgXCJpb3MucG9zaXRpb25cIjogXCJyaWdodFwiIH0sIG9uOiB7IHRhcDogX3ZtLmxvZ291dCB9IH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwiSW1hZ2VcIiwgeyBhdHRyczogeyBzcmM6IFwifi9pbWFnZXMvbG9nby10b3BvLnBuZ1wiIH0gfSksXG4gICAgICAgICAgICAgIF9jKFwiSW1hZ2VcIiwgeyBzdGF0aWNDbGFzczogXCJzYWlyXCIsIGF0dHJzOiB7IHNyYzogXCJyZXM6Ly9zYWlyXCIgfSB9KVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgICksXG4gICAgICBfYyhcbiAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICB7IGF0dHJzOiB7IGJhY2tncm91bmRDb2xvcjogXCIjMDQ1MjQ0XCIgfSB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcIlRhYnNcIixcbiAgICAgICAgICAgIHsgYXR0cnM6IHsgc2VsZWN0ZWRJbmRleDogX3ZtLnNlbGVjdGVkSW5kZXggfSB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcIlRhYlN0cmlwXCIsXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiVGFiU3RyaXBJdGVtXCIsXG4gICAgICAgICAgICAgICAgICAgIHsgb246IHsgdGFwOiBfdm0ucGVkaWRvcyB9IH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHsgYXR0cnM6IHsgdGV4dDogXCJQZWRpZG9zXCIgfSB9KSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcIkltYWdlXCIsIHsgYXR0cnM6IHsgc3JjOiBcInJlczovL2hvbWVcIiB9IH0pXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJUYWJTdHJpcEl0ZW1cIixcbiAgICAgICAgICAgICAgICAgICAgeyBvbjogeyB0YXA6IF92bS5wZWRpZG9zSGlzdG9yaWNvIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwgeyBhdHRyczogeyB0ZXh0OiBcIkhpc3TDs3JpY29cIiB9IH0pLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiSW1hZ2VcIiwgeyBhdHRyczogeyBzcmM6IFwicmVzOi8vc2V0dGluZ3NcIiB9IH0pXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJUYWJDb250ZW50SXRlbVwiLFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcIlNjcm9sbFZpZXdcIixcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJMaXN0Vmlld1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJsaXN0LWdyb3VwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGl0ZW1zOiBfdm0uaXRlbXMsIFwiK2FsaWFzXCI6IFwiaXRlbVwiIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidi10ZW1wbGF0ZVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NvcGVkU2xvdHM6IF92bS5fdShbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogXCJkZWZhdWx0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZuOiBmdW5jdGlvbihyZWYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgaXRlbSA9IHJlZi5pdGVtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyICRpbmRleCA9IHJlZi4kaW5kZXhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgJGV2ZW4gPSByZWYuJGV2ZW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgJG9kZCA9IHJlZi4kb2RkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJHcmlkTGF5b3V0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sdW1uczogXCIyLzYqLCAyLzYqXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiMxNDhBNjRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3dzOiBcIjIwLDIwLDIwLDIwLDIwLDIwLDIwLDIwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibGJsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbDogXCIwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3c6IFwiMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogXCJDw7NkaWdvOlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dFdyYXA6IFwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibGJsIGxibC1ib2xkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbDogXCIwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3c6IFwiMVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogaXRlbS5Db2RpZ28sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0V3JhcDogXCJ0cnVlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJsYmxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sOiBcIjBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdzogXCIyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBcIkxvamE6XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0V3JhcDogXCJ0cnVlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJsYmwgbGJsLWJvbGRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sOiBcIjBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdzogXCIzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBpdGVtLkxvamFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJsYmxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sOiBcIjBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdzogXCI0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBcIkFnZW5kYWRhIHBhcmE6XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0V3JhcDogXCJ0cnVlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJsYmwgbGJsLWJvbGRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sOiBcIjBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdzogXCI1XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBfdm0uX2YoXCJGb3JtYXRhRGF0YVwiKShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5EYXRhRW50cmVnYVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRXcmFwOiBcInRydWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImxibFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2w6IFwiMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93OiBcIjZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IFwiU3RhdHVzOlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dFdyYXA6IFwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibGJsIGxibC1ib2xkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbDogXCIwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3c6IFwiN1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogaXRlbS5TdGF0dXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIkJ1dHRvblwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJ0biBidG4tcHJpbWFyeSBidG4tb3JhbmdlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvd1NwYW46IFwiM1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93OiBcIjBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbDogXCIxXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBcIlZpc3VhbGl6YXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0udmlzdWFsaXphcihpdGVtLCBmYWxzZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJsYmxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93U3BhbjogXCIzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2w6IFwiMVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93OiBcIjNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiKkNsaXF1ZSBlbSBWaXN1YWxpemFyIHBhcmEgQWNlaXRhciBvdSByZWplaXRhciBvIFBlZGlkb1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVydGljYWxBbGlnbm1lbnQ6IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0V3JhcDogXCJ0cnVlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcIlRhYkNvbnRlbnRJdGVtXCIsXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiU3RhY2tMYXlvdXRcIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IGJhY2tncm91bmQ6IFwiI2ZmZlwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgb3JpZW50YXRpb246IFwidmVydGljYWxcIiB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiU3RhY2tMYXlvdXRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgYmFja2dyb3VuZDogXCIjZmZmXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgb3JpZW50YXRpb246IFwiaG9yaXpvbnRhbFwiIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiQnV0dG9uXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLXRhbWFuaG8gYnRuLXByaW1hcnkgYnRuLWdyZXlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBfdm0uVGV4dG9EYXRhRGUgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjogeyB0YXA6IF92bS5kYXRhRGUgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJCdXR0b25cIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tdGFtYW5obyBidG4tcHJpbWFyeSBidG4tZ3JleVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRleHQ6IF92bS5UZXh0b0RhdGFBdGUgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjogeyB0YXA6IF92bS5kYXRhQXRlIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcIkRhdGVQaWNrZXJcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLkRhdGFEZVZpc2libGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJEYXRhRGVWaXNpYmxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHZlcnRpY2FsQWxpZ25tZW50OiBcImNlbnRlclwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLkRhdGFEZVNlbGVjaW9uYWRhLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLkRhdGFEZVNlbGVjaW9uYWRhID0gJGV2ZW50Lm9iamVjdFtcImRhdGVcIl1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJEYXRhRGVTZWxlY2lvbmFkYVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJEYXRlUGlja2VyXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5EYXRhQXRlVmlzaWJsZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIkRhdGFBdGVWaXNpYmxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHZlcnRpY2FsQWxpZ25tZW50OiBcImNlbnRlclwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLkRhdGFBdGVTZWxlY2lvbmFkYSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5EYXRhQXRlU2VsZWNpb25hZGEgPSAkZXZlbnQub2JqZWN0W1wiZGF0ZVwiXVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIkRhdGFBdGVTZWxlY2lvbmFkYVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlN0YWNrTGF5b3V0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLkRhdGFEZVZpc2libGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIkRhdGFEZVZpc2libGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgYmFja2dyb3VuZDogXCIjZmZmXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgb3JpZW50YXRpb246IFwiaG9yaXpvbnRhbFwiIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiQnV0dG9uXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLXRhbWFuaG8gYnRuLXByaW1hcnkgYnRuLXJlZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRleHQ6IFwiTGltcGFyXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjogeyB0YXA6IF92bS5MaW1wYXJEYXRhRGUgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJCdXR0b25cIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJidG4gYnRuLXRhbWFuaG8gYnRuLXByaW1hcnkgYnRuLWdyZWVuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogXCJDb25maXJtYXJcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7IHRhcDogX3ZtLmNvbmZpcm1hckRhdGFEZSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlN0YWNrTGF5b3V0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLkRhdGFBdGVWaXNpYmxlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJEYXRhQXRlVmlzaWJsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZTogeyBiYWNrZ3JvdW5kOiBcIiNmZmZcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBvcmllbnRhdGlvbjogXCJob3Jpem9udGFsXCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJCdXR0b25cIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tdGFtYW5obyBidG4tcHJpbWFyeSBidG4tcmVkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogXCJMaW1wYXJcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7IHRhcDogX3ZtLkxpbXBhckRhdGFBdGUgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJCdXR0b25cIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJidG4gYnRuLXRhbWFuaG8gYnRuLXByaW1hcnkgYnRuLWdyZWVuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogXCJDb25maXJtYXJcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7IHRhcDogX3ZtLmNvbmZpcm1hckRhdGFBdGUgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiQnV0dG9uXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tcHJpbWFyeSBidG4tZ3JleVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogX3ZtLlN0YXR1cyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgb246IHsgdGFwOiBfdm0uc3RhdHVzUGVkaWRvIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiTGlzdFZpZXdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibGlzdC1ncm91cFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBpdGVtczogX3ZtLml0ZW1zSGlzdG9yaWNvLCBcIithbGlhc1wiOiBcIml0ZW1cIiB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInYtdGVtcGxhdGVcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjb3BlZFNsb3RzOiBfdm0uX3UoW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IFwiZGVmYXVsdFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbjogZnVuY3Rpb24ocmVmKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGl0ZW0gPSByZWYuaXRlbVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciAkaW5kZXggPSByZWYuJGluZGV4XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyICRldmVuID0gcmVmLiRldmVuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyICRvZGQgPSByZWYuJG9kZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiR3JpZExheW91dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbHVtbnM6IFwiMi82KiwgMi82KlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjODg4ODg4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93czogXCIyMCwyMCwyMCwyMCwyMCwyMCwyMCwyMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImxibFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2w6IFwiMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93OiBcIjBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IFwiQ8OzZGlnbzpcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRXcmFwOiBcInRydWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImxibCBsYmwtYm9sZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2w6IFwiMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93OiBcIjFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IGl0ZW0uQ29kaWdvLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dFdyYXA6IFwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibGJsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbDogXCIwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3c6IFwiMlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogXCJMb2phOlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dFdyYXA6IFwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibGJsIGxibC1ib2xkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbDogXCIwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3c6IFwiM1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogaXRlbS5Mb2phLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dFdyYXA6IFwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibGJsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbDogXCIwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3c6IFwiNFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogXCJBZ2VuZGFkYSBwYXJhOlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dFdyYXA6IFwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibGJsIGxibC1ib2xkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbDogXCIwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3c6IFwiNVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogX3ZtLl9mKFwiRm9ybWF0YURhdGFcIikoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uRGF0YUVudHJlZ2FcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0V3JhcDogXCJ0cnVlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJsYmxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sOiBcIjBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdzogXCI2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBcIlN0YXR1czpcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRXcmFwOiBcInRydWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImxibCBsYmwtYm9sZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2w6IFwiMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93OiBcIjdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IGl0ZW0uU3RhdHVzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJCdXR0b25cIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJidG4gYnRuLXByaW1hcnkgYnRuLW9yYW5nZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3dTcGFuOiBcIjZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdzogXCIwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2w6IFwiMVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogXCJWaXN1YWxpemFyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXA6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnZpc3VhbGl6YXIoaXRlbSwgdHJ1ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgdGhpcyQxID0gdGhpc1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcIlBhZ2VcIixcbiAgICB7IGF0dHJzOiB7IGFjdGlvbkJhckhpZGRlbjogXCJ0cnVlXCIgfSB9LFxuICAgIFtcbiAgICAgIF9jKFxuICAgICAgICBcIlNjcm9sbHZpZXdcIixcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJGbGV4Ym94TGF5b3V0XCIsXG4gICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInBhZ2VcIiB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcIlN0YWNrTGF5b3V0XCIsXG4gICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJmb3JtXCIgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcIkltYWdlXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibG9nb1wiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBzcmM6IFwifi9pbWFnZXMvbG9nby5wbmdcIiB9XG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJoZWFkZXJcIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogXCJQRURJRE9TXCIgfVxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICB0aGlzLnJldG9ybm9Mb2dpbiAhPSBcIlwiXG4gICAgICAgICAgICAgICAgICAgID8gX2MoXCJMYWJlbFwiLCB7IHN0YXRpY0NsYXNzOiBcIm1lbnNhZ2VtXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0ucmV0b3Jub0xvZ2luKSlcbiAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiR3JpZExheW91dFwiLFxuICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHJvd3M6IFwiYXV0bywgYXV0bywgYXV0b1wiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJpbnB1dC1maWVsZFwiLCBhdHRyczogeyByb3c6IFwiMFwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJUZXh0RmllbGRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImlucHV0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpbnQ6IFwiTG9naW5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzRW5hYmxlZDogIV92bS5wcm9jZXNzaW5nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5Ym9hcmRUeXBlOiBcImVtYWlsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvY29ycmVjdDogXCJmYWxzZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0b2NhcGl0YWxpemF0aW9uVHlwZTogXCJub25lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5LZXlUeXBlOiBcIm5leHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHsgcmV0dXJuUHJlc3M6IF92bS5mb2N1c1Bhc3N3b3JkIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0udXNlci5lbWFpbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnVzZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJlbWFpbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC5vYmplY3RbXCJ0ZXh0XCJdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInVzZXIuZW1haWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiU3RhY2tMYXlvdXRcIiwgeyBzdGF0aWNDbGFzczogXCJoci1saWdodFwiIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlN0YWNrTGF5b3V0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImlucHV0LWZpZWxkXCIsIGF0dHJzOiB7IHJvdzogXCIxXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIlRleHRGaWVsZFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmOiBcInBhc3N3b3JkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaW5wdXRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNFbmFibGVkOiAhX3ZtLnByb2Nlc3NpbmcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoaW50OiBcIlBhc3N3b3JkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWN1cmU6IFwidHJ1ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuS2V5VHlwZTogX3ZtLmlzTG9nZ2luZ0luID8gXCJkb25lXCIgOiBcIm5leHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHsgcmV0dXJuUHJlc3M6IF92bS5mb2N1c0NvbmZpcm1QYXNzd29yZCB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnVzZXIucGFzc3dvcmQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS51c2VyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicGFzc3dvcmRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQub2JqZWN0W1widGV4dFwiXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJ1c2VyLnBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIlN0YWNrTGF5b3V0XCIsIHsgc3RhdGljQ2xhc3M6IFwiaHItbGlnaHRcIiB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6ICFfdm0uaXNMb2dnaW5nSW4sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIiFpc0xvZ2dpbmdJblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpbnB1dC1maWVsZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyByb3c6IFwiMlwiIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiVGV4dEZpZWxkXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY6IFwiY29uZmlybVBhc3N3b3JkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaW5wdXRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNFbmFibGVkOiAhX3ZtLnByb2Nlc3NpbmcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoaW50OiBcIkNvbmZpcm0gcGFzc3dvcmRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlY3VyZTogXCJ0cnVlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5LZXlUeXBlOiBcImRvbmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0udXNlci5jb25maXJtUGFzc3dvcmQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS51c2VyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY29uZmlybVBhc3N3b3JkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50Lm9iamVjdFtcInRleHRcIl1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwidXNlci5jb25maXJtUGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiU3RhY2tMYXlvdXRcIiwgeyBzdGF0aWNDbGFzczogXCJoci1saWdodFwiIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJBY3Rpdml0eUluZGljYXRvclwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyByb3dTcGFuOiBcIjNcIiwgYnVzeTogX3ZtLnByb2Nlc3NpbmcgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyByb3c6IFwiM1wiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJCdXR0b25cIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tcHJpbWFyeSBidG4tZ3JlZW4gbS10LTIwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IF92bS5pc0xvZ2dpbmdJbiA/IFwiRW50cmFyXCIgOiBcIlNpZ24gVXBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzRW5hYmxlZDogIV92bS5wcm9jZXNzaW5nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjogeyB0YXA6IF92bS5zdWJtaXQgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibG9naW4tbGFiZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIqdi1zaG93XCI6IFwiaXNMb2dnaW5nSW5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IFwiRXNxdWVjZXUgc3VhIHNlbmhhP1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFwOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5mb3Jnb3RQYXNzd29yZCgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIXRoaXMuaXNSZWNhcHRjaGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwiV2ViVmlld1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJodHRwczovL3d3dy5oZWxpYXJleHByZXNzLmNvbS5ici9yZWNhcHRjaGEuaHRtbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9hZEZpbmlzaGVkOiBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzJDEucmVjYXB0Y2hhKGUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiUGFnZVwiLFxuICAgIFtcbiAgICAgIF9jKFxuICAgICAgICBcIkFjdGlvbkJhclwiLFxuICAgICAgICB7IGF0dHJzOiB7IHRpdGxlOiBcIkRldGFsaGUgZG8gcGVkaWRvXCIgfSB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcIkxhYmVsXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImgyXCIsXG4gICAgICAgICAgICAgIGF0dHJzOiB7IHJvdzogXCIwXCIsIGhvcml6b250YWxBbGlnbm1lbnQ6IFwiY2VudGVyXCIgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJTcGFuXCIsIHsgYXR0cnM6IHsgdGV4dDogXCJEZXRhbGhlIGRvIHBlZGlkbzogXCIgfSB9KSxcbiAgICAgICAgICAgICAgX2MoXCJTcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwiYm9sZFwiLCBhdHRyczogeyB0ZXh0OiBfdm0uQ29kaWdvIH0gfSlcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApLFxuICAgICAgX2MoXG4gICAgICAgIFwiU3RhY2tMYXlvdXRcIixcbiAgICAgICAgeyBzdGF0aWNDbGFzczogXCJmb3JtXCIgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgICAgICAgICAgICAgdmFsdWU6ICFfdm0uaXNBdmFsaWFjYW8sXG4gICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIiFpc0F2YWxpYWNhb1wiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcIkh0bWxWaWV3XCIsIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ0ZWxlZm9uZVwiLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7IGh0bWw6IF92bS5fZihcIkZvcm1hdGFMb2phXCIpKF92bS5QZWRpZG9zLkxvamEpIH1cbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiTGFiZWxcIixcbiAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImgzXCIgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJGb3JtYXR0ZWRTdHJpbmdcIixcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiU3BhblwiLCB7IGF0dHJzOiB7IHRleHQ6IFwiTm9tZSBkbyBDbGllbnRlOiBcIiB9IH0pLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiU3BhblwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJib2xkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBfdm0uUGVkaWRvcy5Ob21lQ2xpZW50ZSB9XG4gICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcIkxhYmVsXCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmlzQWNlaXRvICYmIF92bS5QZWRpZG9zLkNQRiAhPSBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiaXNBY2VpdG8gJiYgUGVkaWRvcy5DUEYgIT0gbnVsbFwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJoM1wiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJGb3JtYXR0ZWRTdHJpbmdcIixcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiU3BhblwiLCB7IGF0dHJzOiB7IHRleHQ6IFwiQ1BGOiBcIiB9IH0pLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiU3BhblwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJib2xkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBfdm0uUGVkaWRvcy5DUEYgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJMYWJlbFwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5pc0FjZWl0byAmJiBfdm0uUGVkaWRvcy5FbWFpbCAhPSBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiaXNBY2VpdG8gJiYgUGVkaWRvcy5FbWFpbCAhPSBudWxsXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImgzXCJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcIkZvcm1hdHRlZFN0cmluZ1wiLFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJTcGFuXCIsIHsgYXR0cnM6IHsgdGV4dDogXCJFbWFpbDogXCIgfSB9KSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcIlNwYW5cIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYm9sZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogX3ZtLlBlZGlkb3MuRW1haWwgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgb3JpZW50YXRpb246IFwiaG9yaXpvbnRhbFwiIH0gfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcIkh0bWxWaWV3XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uaXNBY2VpdG8gJiYgX3ZtLlBlZGlkb3MuVGVsZWZvbmUgIT0gbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiaXNBY2VpdG8gJiYgUGVkaWRvcy5UZWxlZm9uZSAhPSBudWxsXCJcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInRlbGVmb25lIHRlbGVmb25lLWZvcm1hdFwiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIGh0bWw6IF92bS5fZihcIkZvcm1hdGFUZWxlZm9uZVwiKShfdm0uUGVkaWRvcy5UZWxlZm9uZSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgb3JpZW50YXRpb246IFwiaG9yaXpvbnRhbFwiIH0gfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcIkh0bWxWaWV3XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uaXNBY2VpdG8gJiYgX3ZtLlBlZGlkb3MuVGVsZWZvbmUgIT0gbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiaXNBY2VpdG8gJiYgUGVkaWRvcy5UZWxlZm9uZSAhPSBudWxsXCJcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInRlbGVmb25lIHdoYXRzLWZvcm1hdFwiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIGh0bWw6IF92bS5fZihcIkZvcm1hdGFXaGF0c1wiKShfdm0uUGVkaWRvcy5UZWxlZm9uZSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJMYWJlbFwiLFxuICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiaDNcIiB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcIkZvcm1hdHRlZFN0cmluZ1wiLFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJTcGFuXCIsIHsgYXR0cnM6IHsgdGV4dDogXCJWZWljdWxvOiBcIiB9IH0pLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiU3BhblwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJib2xkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBfdm0uUGVkaWRvcy5Nb2RlbG8gfVxuICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJMYWJlbFwiLFxuICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiaDNcIiB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcIkZvcm1hdHRlZFN0cmluZ1wiLFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJTcGFuXCIsIHsgYXR0cnM6IHsgdGV4dDogXCJQcm9kdXRvOiBcIiB9IH0pLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiU3BhblwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJib2xkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBfdm0uUGVkaWRvcy5CYXRlcmlhIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiTGFiZWxcIixcbiAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImgzXCIgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJGb3JtYXR0ZWRTdHJpbmdcIixcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiU3BhblwiLCB7IGF0dHJzOiB7IHRleHQ6IFwiRm9ybWEgZGUgUGFnYW1lbnRvOiBcIiB9IH0pLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiU3BhblwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJib2xkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBfdm0uUGVkaWRvcy5Gb3JtYURlUGFnYW1lbnRvIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiTGFiZWxcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uUGVkaWRvcy5EZXNjb250byA+IDAsXG4gICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJQZWRpZG9zLkRlc2NvbnRvID4gMFwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJoM1wiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJGb3JtYXR0ZWRTdHJpbmdcIixcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiU3BhblwiLCB7IGF0dHJzOiB7IHRleHQ6IFwiRGVzY29udG86IFwiIH0gfSksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJTcGFuXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJvbGRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IF92bS5fZihcIkZvcm1hdGFWYWxvclwiKShfdm0uUGVkaWRvcy5EZXNjb250bylcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiTGFiZWxcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uUGVkaWRvcy5WYWxvclRvdGFsUGVkaWRvID4gMCxcbiAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIlBlZGlkb3MuVmFsb3JUb3RhbFBlZGlkbyA+IDBcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaDNcIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiRm9ybWF0dGVkU3RyaW5nXCIsXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcIlNwYW5cIiwgeyBhdHRyczogeyB0ZXh0OiBcIlRvdGFsOiBcIiB9IH0pLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiU3BhblwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJib2xkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBfdm0uX2YoXCJGb3JtYXRhVmFsb3JcIikoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLlBlZGlkb3MuVmFsb3JUb3RhbFBlZGlkb1xuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcIkxhYmVsXCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLlBlZGlkb3MuRm9ybWFQYWdhbWVudG8gIT0gbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIlBlZGlkb3MuRm9ybWFQYWdhbWVudG8gIT0gbnVsbFwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJoM1wiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJGb3JtYXR0ZWRTdHJpbmdcIixcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiU3BhblwiLCB7IGF0dHJzOiB7IHRleHQ6IFwiUGFnYW1lbnRvOiBcIiB9IH0pLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiU3BhblwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJib2xkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBfdm0uUGVkaWRvcy5Gb3JtYVBhZ2FtZW50byB9XG4gICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcIkxhYmVsXCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLlBlZGlkb3MuVHJvY28gPiAwLFxuICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiUGVkaWRvcy5Ucm9jbyA+IDBcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaDNcIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiRm9ybWF0dGVkU3RyaW5nXCIsXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcIlNwYW5cIiwgeyBhdHRyczogeyB0ZXh0OiBcIlRyb2NvOiBcIiB9IH0pLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiU3BhblwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJib2xkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBfdm0uX2YoXCJGb3JtYXRhVmFsb3JcIikoX3ZtLlBlZGlkb3MuVHJvY28pXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcIkxhYmVsXCIsXG4gICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJoM1wiIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiRm9ybWF0dGVkU3RyaW5nXCIsXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcIlNwYW5cIiwgeyBhdHRyczogeyB0ZXh0OiBcIkRhdGEgZGEgRW50cmVnYTogXCIgfSB9KSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcIlNwYW5cIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYm9sZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogX3ZtLl9mKFwiRm9ybWF0YURhdGFcIikoX3ZtLlBlZGlkb3MuRGF0YUVudHJlZ2EpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcIkxhYmVsXCIsXG4gICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJoM1wiIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiRm9ybWF0dGVkU3RyaW5nXCIsXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcIlNwYW5cIiwgeyBhdHRyczogeyB0ZXh0OiBcIkhvcsOhcmlvIGRhIEVudHJlZ2E6IFwiIH0gfSksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJTcGFuXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJvbGRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IF92bS5fZihcIkZvcm1hdGFIb3JhcmlvXCIpKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5QZWRpZG9zLkRhdGFFbnRyZWdhXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiTGFiZWxcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiAhX3ZtLmlzQWNlaXRvLFxuICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiIWlzQWNlaXRvXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImgzXCJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcIkZvcm1hdHRlZFN0cmluZ1wiLFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJTcGFuXCIsIHsgYXR0cnM6IHsgdGV4dDogXCJCYWlycm86IFwiIH0gfSksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJTcGFuXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJvbGRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRleHQ6IF92bS5QZWRpZG9zLkJhaXJybyB9XG4gICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfYyhcIkh0bWxWaWV3XCIsIHtcbiAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmlzQWNlaXRvICYmIF92bS5QZWRpZG9zLkVuZGVyZWNvICE9IG51bGwsXG4gICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiaXNBY2VpdG8gJiYgUGVkaWRvcy5FbmRlcmVjbyAhPSBudWxsXCJcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInRlbGVmb25lXCIsXG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgaHRtbDogX3ZtLl9mKFwiRm9ybWF0YUVuZGVyZWNvXCIpKF92bS5QZWRpZG9zLkVuZGVyZWNvKSB9XG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcIlN0YWNrTGF5b3V0XCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmlzQWNlaXRvICYmIF92bS5QZWRpZG9zLkVuZGVyZWNvICE9IG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJpc0FjZWl0byAmJiBQZWRpZG9zLkVuZGVyZWNvICE9IG51bGxcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgb3JpZW50YXRpb246IFwiaG9yaXpvbnRhbFwiIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiSW1hZ2VcIiwge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpbWctbWFwYVwiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBzcmM6IFwifi9pbWFnZXMvbWFwYS5wbmdcIiB9LFxuICAgICAgICAgICAgICAgICAgICBvbjogeyB0YXA6IF92bS5hYnJpck1hcGEgfVxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBfYyhcIkltYWdlXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaW1nLW1hcGEtY29tcGFydGlsaGFyXCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHNyYzogXCJ+L2ltYWdlcy9zaGFyZS5wbmdcIiB9LFxuICAgICAgICAgICAgICAgICAgICBvbjogeyB0YXA6IF92bS5jb21wYXJ0aWxoYXJNYXBhIH1cbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiTGFiZWxcIixcbiAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImgzXCIgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJGb3JtYXR0ZWRTdHJpbmdcIixcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiU3BhblwiLCB7IGF0dHJzOiB7IHRleHQ6IFwiRGlzdMOibmNpYSBhcHJveGltYWRhOiBcIiB9IH0pLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiU3BhblwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJib2xkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBfdm0uX2YoXCJGb3JtYXRhRGlzdGFuY2lhXCIpKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5QZWRpZG9zLkRpc3RhbmNpYUFwcm94aW1hZGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5pc0F2YWxpYWNhbyxcbiAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiaXNBdmFsaWFjYW9cIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJMYWJlbFwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImgyXCIsXG4gICAgICAgICAgICAgICAgICBhdHRyczogeyByb3c6IFwiMFwiLCBob3Jpem9udGFsQWxpZ25tZW50OiBcImNlbnRlclwiIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcIkZvcm1hdHRlZFN0cmluZ1wiLFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJTcGFuXCIsIHsgYXR0cnM6IHsgdGV4dDogXCJBdmFsaWHDp8OjbyBkbyBwZWRpZG86IFwiIH0gfSksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJTcGFuXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJvbGRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRleHQ6IF92bS5Db2RpZ28gfVxuICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJMYWJlbFwiLFxuICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiaDNcIiwgYXR0cnM6IHsgdGV4dFdyYXA6IFwidHJ1ZVwiIH0gfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJGb3JtYXR0ZWRTdHJpbmdcIixcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiU3BhblwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBcIk8gcGVkaWRvIGZvaSBlbnRyZWd1ZSBjb3JyZXRhbWVudGU6IFwiIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcIlNwYW5cIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYm9sZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogX3ZtLl9mKFwiRm9ybWF0YUJvbGVhbm9cIikoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLkF2YWxpYWNhby5FbnRyZWd1ZUNvcnJldGFtZW50ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcIkxhYmVsXCIsXG4gICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJoM1wiLCBhdHRyczogeyB0ZXh0V3JhcDogXCJ0cnVlXCIgfSB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcIkZvcm1hdHRlZFN0cmluZ1wiLFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJTcGFuXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJPIHByb2R1dG8gZm9pIGVudHJlZ3VlIG5vIGxvY2FsIGUgaG9yw6FyaW8gYWdlbmRhZG86IFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJTcGFuXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJvbGRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IF92bS5fZihcIkZvcm1hdGFCb2xlYW5vXCIpKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5BdmFsaWFjYW8uTG9jYWxIb3JhcmlvXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiTGFiZWxcIixcbiAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImgzXCIsIGF0dHJzOiB7IHRleHRXcmFwOiBcInRydWVcIiB9IH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiRm9ybWF0dGVkU3RyaW5nXCIsXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcIlNwYW5cIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogXCJPY29ycmV1IHR1ZG8gYmVtIGNvbSBhIGluc3RhbGHDp8OjbzogXCIgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiU3BhblwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJib2xkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBfdm0uX2YoXCJGb3JtYXRhQm9sZWFub1wiKShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uQXZhbGlhY2FvLkluc3RhbGFjYW9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJMYWJlbFwiLFxuICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiaDNcIiwgYXR0cnM6IHsgdGV4dFdyYXA6IFwidHJ1ZVwiIH0gfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJGb3JtYXR0ZWRTdHJpbmdcIixcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiU3BhblwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiRW0gdW1hIGVzY2FsYSBkZSAwIGEgMTAsIHF1YW50byB2b2PDqiByZWNvbWVuZGFyaWEgbyBIZWxpYXIgRXhwcmVzczogXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcIlNwYW5cIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYm9sZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogX3ZtLkF2YWxpYWNhby5Ob3RhIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiTGFiZWxcIixcbiAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImgzXCIsIGF0dHJzOiB7IHRleHRXcmFwOiBcInRydWVcIiB9IH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiRm9ybWF0dGVkU3RyaW5nXCIsXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcIlNwYW5cIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogXCJQb3JxdWUgZXNjb2xoZXUgY29tcHJhciBubyBIZWxpYXIgRXhwcmVzczogXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcIlNwYW5cIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYm9sZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogX3ZtLkF2YWxpYWNhby5NZW5zYWdlbSB9XG4gICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcIkxhYmVsXCIsXG4gICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJoM1wiLCBhdHRyczogeyB0ZXh0V3JhcDogXCJ0cnVlXCIgfSB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcIkZvcm1hdHRlZFN0cmluZ1wiLFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJTcGFuXCIsIHsgYXR0cnM6IHsgdGV4dDogXCJPYnNlcnZhw6fDo286IFwiIH0gfSksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJTcGFuXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJvbGRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRleHQ6IF92bS5BdmFsaWFjYW8uT2JzZXJ2YWNhbyB9XG4gICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgICksXG4gICAgICAgICAgX2MoXCJCdXR0b25cIiwge1xuICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgICAgICAgICAgICB2YWx1ZTogIV92bS5IaXN0b3JpY28gJiYgIV92bS5pc0FjZWl0byxcbiAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIiFIaXN0b3JpY28gJiYgIWlzQWNlaXRvXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0biBlc3BhY2FtZW50byBidG4tcHJpbWFyeSBidG4tZ3JlZW5cIixcbiAgICAgICAgICAgIGF0dHJzOiB7IHRleHQ6IFwiQWNlaXRhclwiIH0sXG4gICAgICAgICAgICBvbjogeyB0YXA6IF92bS5hY2VpdGFyIH1cbiAgICAgICAgICB9KSxcbiAgICAgICAgICBfYyhcIkJ1dHRvblwiLCB7XG4gICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgICAgICAgICAgIHZhbHVlOiAhX3ZtLkhpc3RvcmljbyAmJiAhX3ZtLmlzQWNlaXRvLFxuICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiIUhpc3RvcmljbyAmJiAhaXNBY2VpdG9cIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuIGVzcGFjYW1lbnRvIGJ0bi1wcmltYXJ5IGJ0bi1yZWRcIixcbiAgICAgICAgICAgIGF0dHJzOiB7IHRleHQ6IFwicmVjdXNhclwiIH0sXG4gICAgICAgICAgICBvbjogeyB0YXA6IF92bS5yZWplaXRhciB9XG4gICAgICAgICAgfSksXG4gICAgICAgICAgX2MoXCJCdXR0b25cIiwge1xuICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLkhpc3RvcmljbyAmJiBfdm0uaXNFbmNlcnJhcixcbiAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIkhpc3RvcmljbyAmJiBpc0VuY2VycmFyXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0biBlc3BhY2FtZW50byBidG4tcHJpbWFyeSBidG4tZ3JlZW5cIixcbiAgICAgICAgICAgIGF0dHJzOiB7IHRleHQ6IFwiRmluYWxpemFyIFBlZGlkb1wiIH0sXG4gICAgICAgICAgICBvbjogeyB0YXA6IF92bS5lbmNlcnJhciB9XG4gICAgICAgICAgfSksXG4gICAgICAgICAgX2MoXCJCdXR0b25cIiwge1xuICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLkhpc3RvcmljbyAmJiBfdm0uaXNDYW5jZWxhcixcbiAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIkhpc3RvcmljbyAmJiBpc0NhbmNlbGFyXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0biBlc3BhY2FtZW50byBidG4tcHJpbWFyeSBidG4tcmVkXCIsXG4gICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBcIkNhbmNlbGFyIFBlZGlkb1wiIH0sXG4gICAgICAgICAgICBvbjogeyB0YXA6IF92bS5jYW5jZWxhciB9XG4gICAgICAgICAgfSksXG4gICAgICAgICAgX2MoXCJCdXR0b25cIiwge1xuICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmlzQXZhbGlhY2FvQm90YW8sXG4gICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJpc0F2YWxpYWNhb0JvdGFvXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0biBlc3BhY2FtZW50byBidG4tcHJpbWFyeSBidG4tb3JhbmdlXCIsXG4gICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBcIkF2YWxpYcOnw6NvXCIgfSxcbiAgICAgICAgICAgIG9uOiB7IHRhcDogX3ZtLmF2YWxpYWNhbyB9XG4gICAgICAgICAgfSksXG4gICAgICAgICAgX2MoXCJCdXR0b25cIiwge1xuICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmlzQm90YW9Wb2x0YXIsXG4gICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJpc0JvdGFvVm9sdGFyXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0biBlc3BhY2FtZW50byBidG4tcHJpbWFyeSBidG4tZ3JleVwiLFxuICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogXCJWb2x0YXJcIiB9LFxuICAgICAgICAgICAgb246IHsgdGFwOiBfdm0udm9sdGFyIH1cbiAgICAgICAgICB9KSxcbiAgICAgICAgICBfYyhcIkJ1dHRvblwiLCB7XG4gICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uaXNBdmFsaWFjYW9Cb3Rhb1ZvbHRhcixcbiAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImlzQXZhbGlhY2FvQm90YW9Wb2x0YXJcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuIGVzcGFjYW1lbnRvIGJ0bi1wcmltYXJ5IGJ0bi1ncmV5XCIsXG4gICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBcIlZvbHRhciBhbyBwZWRpZG9cIiB9LFxuICAgICAgICAgICAgb246IHsgdGFwOiBfdm0udm9sdGFyUGVkaWRvIH1cbiAgICAgICAgICB9KVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgbWFwID0ge1xuXHRcIi4vYXBwLmNzc1wiOiBcIi4vYXBwLmNzc1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuLyBzeW5jIF5cXFxcLlxcXFwvYXBwXFxcXC4oY3NzfHNjc3N8bGVzc3xzYXNzKSRcIjsiLCJ2YXIgbWFwID0ge1xuXHRcIi4vX2NvbmZpZy9fY29uZmlnLmpzXCI6IFwiLi9fY29uZmlnL19jb25maWcuanNcIixcblx0XCIuL2FwcC5jc3NcIjogXCIuL2FwcC5jc3NcIixcblx0XCIuL2FwcC5qc1wiOiBcIi4vYXBwLmpzXCIsXG5cdFwiLi9yb3V0ZXMvaW5kZXguanNcIjogXCIuL3JvdXRlcy9pbmRleC5qc1wiLFxuXHRcIi4vc2VydmljZXMvYmFja2VuZC1zZXJ2aWNlLmpzXCI6IFwiLi9zZXJ2aWNlcy9iYWNrZW5kLXNlcnZpY2UuanNcIixcblx0XCIuL3NlcnZpY2VzL2hlbGlhci1hcHAuanNcIjogXCIuL3NlcnZpY2VzL2hlbGlhci1hcHAuanNcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi8gc3luYyByZWN1cnNpdmUgKD88IVxcXFxiQXBwX1Jlc291cmNlc1xcXFxiLiopKD88IVxcXFwuXFxcXC9cXFxcYnRlc3RzXFxcXGJcXFxcLy4qPylcXFxcLih4bWx8Y3NzfGpzfGt0fCg/PCFcXFxcLmRcXFxcLil0c3woPzwhXFxcXGJfW1xcXFx3LV0qXFxcXC4pc2NzcykkXCI7IiwiaW1wb3J0IHsgaXNOdWxsT3JVbmRlZmluZWQgfSBmcm9tIFwidXRpbFwiO1xuY29uc3QgX2NoYXZlVG9rZW4gPSBcImRldmljZV90b2tlblwiO1xuY29uc3QgX2RldmljZWlkID0gXCJkZXZpY2VfaWRcIlxuY29uc3QgX2FwaVVybCA9IFwiaHR0cHM6Ly93d3cuaGVsaWFyZXhwcmVzcy5jb20uYnIvYXBpL1wiO1xudmFyIGFwcGxpY2F0aW9uU2V0dGluZ3MgPSByZXF1aXJlKFwiYXBwbGljYXRpb24tc2V0dGluZ3NcIik7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb25maWcgeyAgICBcblxuICAgIGdldEFwaVVybCgpe1xuICAgICAgICByZXR1cm4gX2FwaVVybDtcbiAgICB9XG5cbiAgICBnZXRUb2tlbigpe1xuICAgICAgICBpZihhcHBsaWNhdGlvblNldHRpbmdzLmdldFN0cmluZyhfY2hhdmVUb2tlbikgPT0gbnVsbCB8fCBhcHBsaWNhdGlvblNldHRpbmdzLmdldFN0cmluZyhfY2hhdmVUb2tlbikgPT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgcmV0dXJuIFwiXCI7XG4gICAgICAgICAgICBcbiAgICAgICAgcmV0dXJuIGFwcGxpY2F0aW9uU2V0dGluZ3MuZ2V0U3RyaW5nKF9jaGF2ZVRva2VuKTtcbiAgICB9XG4gICAgc2V0VG9rZW4oX3Rva2VuKXtcbiAgICAgICAgYXBwbGljYXRpb25TZXR0aW5ncy5zZXRTdHJpbmcoX2NoYXZlVG9rZW4sIF90b2tlbik7XG4gICAgfVxuXG4gICAgZ2V0RGV2aWNlSWQoKXtcblxuICAgICAgICBpZihpc051bGxPclVuZGVmaW5lZChhcHBsaWNhdGlvblNldHRpbmdzLmdldFN0cmluZyhfZGV2aWNlaWQpKSlcbiAgICAgICAgICAgIHJldHVybiBcIlwiO1xuXG4gICAgICAgIHJldHVybiBhcHBsaWNhdGlvblNldHRpbmdzLmdldFN0cmluZyhfZGV2aWNlaWQpO1xuICAgIH1cbiAgICBzZXREZXZpY2VJZChfaWQpe1xuICAgICAgICBhcHBsaWNhdGlvblNldHRpbmdzLnNldFN0cmluZyhfZGV2aWNlaWQsIF9pZCk7XG4gICAgfVxuXG5cbn0iLCJnbG9iYWwucmVnaXN0ZXJNb2R1bGUoXCJ+bmF0aXZlc2NyaXB0LXRoZW1lLWNvcmUvY3NzL2NvcmUubGlnaHQuY3NzXCIsICgpID0+IHJlcXVpcmUoXCIhbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL2NzczJqc29uLWxvYWRlcj91c2VGb3JJbXBvcnRzIW5hdGl2ZXNjcmlwdC10aGVtZS1jb3JlL2Nzcy9jb3JlLmxpZ2h0LmNzc1wiKSk7XG5nbG9iYWwucmVnaXN0ZXJNb2R1bGUoXCJuYXRpdmVzY3JpcHQtdGhlbWUtY29yZS9jc3MvY29yZS5saWdodC5jc3NcIiwgKCkgPT4gcmVxdWlyZShcIiFuYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svY3NzMmpzb24tbG9hZGVyP3VzZUZvckltcG9ydHMhbmF0aXZlc2NyaXB0LXRoZW1lLWNvcmUvY3NzL2NvcmUubGlnaHQuY3NzXCIpKTttb2R1bGUuZXhwb3J0cyA9IHtcInR5cGVcIjpcInN0eWxlc2hlZXRcIixcInN0eWxlc2hlZXRcIjp7XCJydWxlc1wiOlt7XCJ0eXBlXCI6XCJpbXBvcnRcIixcImltcG9ydFwiOlwiJ35uYXRpdmVzY3JpcHQtdGhlbWUtY29yZS9jc3MvY29yZS5saWdodC5jc3MnXCJ9LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5idG4tcHJpbWFyeVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImhlaWdodFwiLFwidmFsdWVcIjpcIjUwXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYm9yZGVyLXJhZGl1c1wiLFwidmFsdWVcIjpcIjVcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJmb250LXNpemVcIixcInZhbHVlXCI6XCIyMFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImZvbnQtd2VpZ2h0XCIsXCJ2YWx1ZVwiOlwiNjAwXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLmJ0bi1ncmVlblwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJhY2tncm91bmQtY29sb3JcIixcInZhbHVlXCI6XCIjMDY3QTY1XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLmJ0bi1yZWRcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJ2YWx1ZVwiOlwiI0Q1MUExQVwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5idG4tcHJpbWFyeTpkaXNhYmxlZFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm9wYWNpdHlcIixcInZhbHVlXCI6XCIwLjVcIn1dfV0sXCJwYXJzaW5nRXJyb3JzXCI6W119fTs7XG4gICAgaWYgKG1vZHVsZS5ob3QpIHtcbiAgICAgICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHtcbiAgICAgICAgICAgIGdsb2JhbC5obXJSZWZyZXNoKHsgdHlwZTogJ3N0eWxlJywgcGF0aDogJy4vYXBwLmNzcycgfSk7XG4gICAgICAgIH0pXG4gICAgfVxuIiwiaW1wb3J0IFZ1ZSBmcm9tIFwibmF0aXZlc2NyaXB0LXZ1ZVwiO1xuaW1wb3J0IHJvdXRlcyBmcm9tIFwiLi9yb3V0ZXNcIjtcbmltcG9ydCBCYWNrZW5kU2VydmljZSBmcm9tIFwiLi9zZXJ2aWNlcy9iYWNrZW5kLXNlcnZpY2VcIjtcbmltcG9ydCBIZWxpYXJBcHAgZnJvbSBcIi4vc2VydmljZXMvaGVsaWFyLWFwcFwiO1xuaW1wb3J0IENvbmZpZyBmcm9tIFwiLi9fY29uZmlnL19jb25maWdcIjtcbmltcG9ydCB7IG1lc3NhZ2luZyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtcGx1Z2luLWZpcmViYXNlL21lc3NhZ2luZ1wiO1xuaW1wb3J0IHsgRnJhbWUgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL2ZyYW1lJztcblxuVnVlLmNvbmZpZy5zaWxlbnQgPSBmYWxzZTtcbmNvbnN0IGNvbmZpZyA9IG5ldyBDb25maWcoKTtcblZ1ZS5wcm90b3R5cGUuJGNvbmZpZyA9IGNvbmZpZztcblxuY29uc3QgYmFja2VuZFNlcnZpY2UgPSBuZXcgQmFja2VuZFNlcnZpY2UoKTtcblZ1ZS5wcm90b3R5cGUuJGJhY2tlbmRTZXJ2aWNlID0gYmFja2VuZFNlcnZpY2U7XG5cbmNvbnN0IGhlbGlhckFwcCA9IG5ldyBIZWxpYXJBcHAoKTtcblZ1ZS5wcm90b3R5cGUuJGhlbGlhckFwcCA9IGhlbGlhckFwcDtcblxuY29uc3QgeyBhbGVydCwgY29uZmlybSwgcHJvbXB0LCBsb2dpbiwgYWN0aW9uLCBpbnB1dFR5cGUgfSA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2RpYWxvZ3NcIik7XG52YXIgZmlyZWJhc2UgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LXBsdWdpbi1maXJlYmFzZVwiKTtcbnZhciBhcHBsaWNhdGlvblNldHRpbmdzID0gcmVxdWlyZShcImFwcGxpY2F0aW9uLXNldHRpbmdzXCIpO1xuXG5zZXRUaW1lb3V0KCgpPT57XG4gIGZpcmViYXNlLmluaXQoKVxuICAgICAgLnRoZW4oaW5zdGFuY2UgPT4ge1xuICAgICAgICAgIG1lc3NhZ2luZy5yZWdpc3RlckZvclB1c2hOb3RpZmljYXRpb25zKHtcblxuICAgICAgICAgICAgICBvblB1c2hUb2tlblJlY2VpdmVkQ2FsbGJhY2s6ICh0b2tlbikgPT4ge1xuICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJGaXJlYmFzZSBwbHVnaW4gcmVjZWl2ZWQgYSBwdXNoIHRva2VuOiBcIiArIHRva2VuKTtcbiAgICAgICAgICAgICAgICAgIGFwcGxpY2F0aW9uU2V0dGluZ3Muc2V0U3RyaW5nKCdkZXZpY2VfdG9rZW4nLCB0b2tlbik7XG4gICAgICAgICAgICAgICAgICBjb25maWcuc2V0VG9rZW4odG9rZW4pO1xuICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgIG9uTWVzc2FnZVJlY2VpdmVkQ2FsbGJhY2s6IChtZXNzYWdlKSA9PiB7XG4gICAgICAgICAgICAgICAgdmFyIGNvZGlnbyA9IG1lc3NhZ2UuZGF0YS5rZXlfMTtcbiAgICAgICAgICAgICAgICB2YXIgaGlzdG9yaWNvID0gbWVzc2FnZS5kYXRhLmtleV8yO1xuXG4gICAgICAgICAgICAgICAgYWxlcnQoe1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTogbWVzc2FnZS5kYXRhLnRpdGxlLFxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBtZXNzYWdlLmRhdGEuYm9keSxcbiAgICAgICAgICAgICAgICAgICAgb2tCdXR0b25UZXh0OiBcIlZpc3VhbGl6YXJcIixcbiAgICAgICAgICAgICAgICAgICAgY2FuY2VsQnV0dG9uVGV4dDogXCJDYW5jZWxhclwiXG4gICAgICAgICAgICAgICAgfSkudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIFZ1ZS5wcm90b3R5cGUuJGhlbGlhckFwcCBcbiAgICAgICAgICAgICAgICAgICAgLmlzTG9nZ2VkSW4oKVxuICAgICAgICAgICAgICAgICAgICAudGhlbigocmVzcG9uc2UpPT4geyAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihyZXNwb25zZS5TdGF0dXMgPT0gZmFsc2Upe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lbnNhZ2VtKFwiVXN1w6FyaW8gbsOjbyBhdXRlbnRpY2FkbyBwYXJhIHZpc3VhbGl6YXIgbyBwZWRpZG9cIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmF2aWdhdGVUb0xvZ2luKHJvdXRlcy5sb2dpbik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hdmlnYXRlVG8ocm91dGVzLnBlZGlkbywgY29kaWdvLCBoaXN0b3JpY28pOyAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQoXCJFcnJvIGFvIHZlcmlmaWNhciBhdXRlbnRpY2HDp8OjbyBkbyB1c3XDoXJpb1wiKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHNob3dOb3RpZmljYXRpb25zOiB0cnVlLFxuICAgICAgICAgICAgICBzaG93Tm90aWZpY2F0aW9uc1doZW5JbkZvcmVncm91bmQ6IHRydWVcbiAgICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oKCkgPT4gY29uc29sZS5sb2coXCJSZWdpc3RlcmVkIGZvciBwdXNoXCIpKVxuICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUubG9nKGByZWdpc3RlckZvclB1c2hOb3RpZmljYXRpb25zIGVycm9yOiAke2Vycm9yfWApKTtcblxuICAgICAgICAgIHNldFRpbWVvdXQoKCk9PntcbiAgICAgICAgICAgICAgbWVzc2FnaW5nLmdldEN1cnJlbnRQdXNoVG9rZW4oKVxuICAgICAgICAgICAgICAgICAgLnRoZW4odG9rZW4gPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVnaXN0ZXJGaXJlYmFzZSh0b2tlbik7XG4gICAgICAgICAgICAgICAgICB9LCBlID0+IGNvbnNvbGUubG9nKFwiRXJyb3I6IFwiICsgKGUubWVzc2FnZSB8fCBlKSkpO1xuICAgICAgICAgIH0sIDUwMDApO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coYGZpcmViYXNlLmluaXQgZXJyb3I6ICR7ZXJyb3J9YCk7XG4gICAgICAgICAgY29uc29sZS5sb2coXCJQcmVwYXJlIGdldCB0b2tlbi4uXCIpO1xuICAgICAgICAgIHNldFRpbWVvdXQoKCk9PntcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJHZXR0aW5nIHRva2VuLi5cIik7XG4gICAgICAgICAgICAgIG1lc3NhZ2luZy5nZXRDdXJyZW50UHVzaFRva2VuKClcbiAgICAgICAgICAgICAgICAgIC50aGVuKHRva2VuID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlRva2VuIGZvdW5kOiBcIiwgdG9rZW4pO1xuICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVnaXN0ZXJGaXJlYmFzZSh0b2tlbik7XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgLmNhdGNoKGUgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3IgZ2V0dGluZyB0b2tlbjogXCIgKyAoZS5tZXNzYWdlIHx8IGUpKTtcbiAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0sIDUwMDApO1xuICAgICAgfSk7XG4gICAgfSwzMDAwKSxcblxubmV3IFZ1ZSh7XG4gIHJlbmRlcjogaCA9PiBoKFwiZnJhbWVcIiwgW2goYmFja2VuZFNlcnZpY2UuaXNMb2dnZWRJbigpID8gcm91dGVzLmhvbWUgOiByb3V0ZXMubG9naW4pXSlcbn0pLiRzdGFydCgpO1xuXG5mdW5jdGlvbiBuYXZpZ2F0ZVRvIChwYWdlLCBjb2RpZ28sIGhpc3Rvcmljbykge1xuICAgIEZyYW1lLnRvcG1vc3QoKS5jdXJyZW50UGFnZS5fX3Z1ZVBhZ2VSZWZfXy4kbmF2aWdhdGVUbyhwYWdlLCB7XG4gICAgICAgIGNsZWFySGlzdG9yeTogdHJ1ZSxcbiAgICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICAgQ29kaWdvOiBjb2RpZ28sXG4gICAgICAgICAgICAgSGlzdG9yaWNvOiBoaXN0b3JpY29cbiAgICAgICAgIH1cbiAgICB9KVxufVxuXG5mdW5jdGlvbiBuYXZpZ2F0ZVRvTG9naW4gKHBhZ2UpIHtcbiAgICBGcmFtZS50b3Btb3N0KCkuY3VycmVudFBhZ2UuX192dWVQYWdlUmVmX18uJG5hdmlnYXRlVG8ocGFnZSwge1xuICAgICAgICBjbGVhckhpc3Rvcnk6IHRydWVcbiAgICB9KVxufVxuXG5mdW5jdGlvbiBtZW5zYWdlbShtZXNzYWdlKSB7XG4gICAgcmV0dXJuIGFsZXJ0KHtcbiAgICAgICAgdGl0bGU6IFwiQXRlbsOnw6NvXCIsXG4gICAgICAgIG9rQnV0dG9uVGV4dDogXCJPS1wiLFxuICAgICAgICBtZXNzYWdlOiBtZXNzYWdlXG4gICAgfSk7XG59XG4iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0VkaXRhci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MzAxNGE3NTYmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vRWRpdGFyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vRWRpdGFyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9FZGl0YXIudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9Vc2Vycy9ydW5uZXIvd29yay9IZWxpYXJIZXhwcmVzcy5BUFBMb2ppc3RhL0hlbGlhckhleHByZXNzLkFQUExvamlzdGEvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnMzAxNGE3NTYnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMzAxNGE3NTYnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMzAxNGE3NTYnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0VkaXRhci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MzAxNGE3NTYmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMzAxNGE3NTYnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImNvbXBvbmVudHMvRWRpdGFyLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9FZGl0YXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRWRpdGFyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9zdHlsZS1ob3QtbG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svYXBwbHktY3NzLWxvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0zLTIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRWRpdGFyLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svc3R5bGUtaG90LWxvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL2FwcGx5LWNzcy1sb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMy0yIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0VkaXRhci52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9FZGl0YXIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTMwMTRhNzU2JlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9Ib21lLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02NzQxMGYzYSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9Ib21lLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vSG9tZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vSG9tZS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL3J1bm5lci93b3JrL0hlbGlhckhleHByZXNzLkFQUExvamlzdGEvSGVsaWFySGV4cHJlc3MuQVBQTG9qaXN0YS9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc2NzQxMGYzYScpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc2NzQxMGYzYScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc2NzQxMGYzYScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vSG9tZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9Njc0MTBmM2EmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNjc0MTBmM2EnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImNvbXBvbmVudHMvSG9tZS52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vSG9tZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Ib21lLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9zdHlsZS1ob3QtbG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svYXBwbHktY3NzLWxvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0zLTIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vSG9tZS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL3N0eWxlLWhvdC1sb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9hcHBseS1jc3MtbG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTMtMiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Ib21lLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0hvbWUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTY3NDEwZjNhJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9Mb2dpbi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9YzI3NDgyYzQmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vTG9naW4udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9Mb2dpbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vTG9naW4udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9YzI3NDgyYzQmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcImMyNzQ4MmM0XCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL3J1bm5lci93b3JrL0hlbGlhckhleHByZXNzLkFQUExvamlzdGEvSGVsaWFySGV4cHJlc3MuQVBQTG9qaXN0YS9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCdjMjc0ODJjNCcpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCdjMjc0ODJjNCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCdjMjc0ODJjNCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vTG9naW4udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWMyNzQ4MmM0JnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJ2MyNzQ4MmM0Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJjb21wb25lbnRzL0xvZ2luLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Mb2dpbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Mb2dpbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svc3R5bGUtaG90LWxvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL2FwcGx5LWNzcy1sb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMy0yIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0xvZ2luLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWMyNzQ4MmM0JnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svc3R5bGUtaG90LWxvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL2FwcGx5LWNzcy1sb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMy0yIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0xvZ2luLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWMyNzQ4MmM0JnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0xvZ2luLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1jMjc0ODJjNCZzY29wZWQ9dHJ1ZSZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vUGVkaWRvLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wOWFhNmM0MCZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9QZWRpZG8udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9QZWRpZG8udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL1BlZGlkby52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL3J1bm5lci93b3JrL0hlbGlhckhleHByZXNzLkFQUExvamlzdGEvSGVsaWFySGV4cHJlc3MuQVBQTG9qaXN0YS9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCcwOWFhNmM0MCcpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCcwOWFhNmM0MCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCcwOWFhNmM0MCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vUGVkaWRvLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wOWFhNmM0MCZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCcwOWFhNmM0MCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiY29tcG9uZW50cy9QZWRpZG8udnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1BlZGlkby52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9QZWRpZG8udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL3N0eWxlLWhvdC1sb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9hcHBseS1jc3MtbG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTMtMiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9QZWRpZG8udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9zdHlsZS1ob3QtbG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svYXBwbHktY3NzLWxvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0zLTIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vUGVkaWRvLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1BlZGlkby52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MDlhYTZjNDAmXCIiLCJpbXBvcnQgTG9naW4gZnJvbSBcIi4uL2NvbXBvbmVudHMvTG9naW5cIjtcbmltcG9ydCBIb21lIGZyb20gXCIuLi9jb21wb25lbnRzL0hvbWVcIjtcbmltcG9ydCBQZWRpZG8gZnJvbSBcIi4uL2NvbXBvbmVudHMvUGVkaWRvXCI7XG5cbmNvbnN0IHJvdXRlcyA9IHtcbiAgICBsb2dpbjogTG9naW4sXG4gICAgaG9tZTogSG9tZSxcbiAgICBwZWRpZG8gOiBQZWRpZG9cbn1cbmV4cG9ydCBkZWZhdWx0IHJvdXRlczsiLCIvLyBUaGUgZm9sbG93aW5nIGlzIGEgc2FtcGxlIGltcGxlbWVudGF0aW9uIG9mIGEgYmFja2VuZCBzZXJ2aWNlIHVzaW5nIFByb2dyZXNzIEtpbnZleSAoaHR0cHM6Ly93d3cucHJvZ3Jlc3MuY29tL2tpbnZleSkuXG4vLyBGZWVsIGZyZWUgdG8gc3dhcCBpbiB5b3VyIG93biBzZXJ2aWNlIC8gQVBJcyAvIGV0YyBoZXJlIGZvciB5b3VyIG93biBhcHBzLlxuXG5pbXBvcnQgKiBhcyBLaW52ZXkgZnJvbSBcImtpbnZleS1uYXRpdmVzY3JpcHQtc2RrXCI7XG5cbktpbnZleS5pbml0KHtcbiAgICBhcHBLZXk6IFwia2lkX1N5WThMWU84TVwiLFxuICAgIGFwcFNlY3JldDogXCIwOTI4Mjk4NWQ3YzU0MGY3YjA3NmE5YzdmZDg4NGM3N1wiXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFja2VuZFNlcnZpY2Uge1xuXG4gICAgaXNMb2dnZWRJbigpIHtcbiAgICAgICAgcmV0dXJuICEhS2ludmV5LlVzZXIuZ2V0QWN0aXZlVXNlcigpO1xuICAgIH1cblxuICAgIGxvZ2luKHVzZXIpIHtcbiAgICAgICAgcmV0dXJuIEtpbnZleS5Vc2VyLmxvZ2luKHVzZXIuZW1haWwsIHVzZXIucGFzc3dvcmQpO1xuICAgIH1cblxuICAgIHJlc2V0UGFzc3dvcmQodXNlcikge1xuICAgICAgICByZXR1cm4gS2ludmV5LlVzZXIucmVzZXRQYXNzd29yZCh1c2VyKTtcbiAgICB9XG5cbiAgICBsb2dvdXQoKSB7XG4gICAgICAgIHJldHVybiBLaW52ZXkuVXNlci5sb2dvdXQoKTtcbiAgICB9XG5cbiAgICByZWdpc3Rlcih1c2VyKSB7XG4gICAgICAgIHJldHVybiBLaW52ZXkuVXNlci5zaWdudXAoeyB1c2VybmFtZTogdXNlci5lbWFpbCwgcGFzc3dvcmQ6IHVzZXIucGFzc3dvcmQgfSk7XG4gICAgfVxufVxuXG4iLCJpbXBvcnQgKiBhcyBodHRwIGZyb20gXCJodHRwXCI7XG5pbXBvcnQgKiBhcyBLaW52ZXkgZnJvbSBcImtpbnZleS1uYXRpdmVzY3JpcHQtc2RrXCI7XG5pbXBvcnQgQ29uZmlnIGZyb20gXCIuLi9fY29uZmlnL19jb25maWdcIjtcbmltcG9ydCB7IGlzTnVsbE9yVW5kZWZpbmVkIH0gZnJvbSBcInV0aWxcIjtcbnZhciBjb25maWcgPSBuZXcgQ29uZmlnKCk7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIZWxpYXJBcHAge1xuXG4gICAgLy8gdGVsYSBkZSBhdXRlbnRpY2FjYW9cbiAgICBpc0xvZ2dlZEluKCkgeyAgXG4gICAgICAgIFxuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0SGVsaWFyKFwiYXV0ZW50aWNhY2FvbW9iaWxlL3ZlcmlmaWNhcmF1dGVudGljYWRvXCIsXG4gICAgICAgIEpTT04uc3RyaW5naWZ5KHsgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIHRva2VuIDogY29uZmlnLmdldFRva2VuKClcbiAgICAgICAgfSksXG4gICAgICAgIFwiUE9TVFwiKVxuICAgIH1cblxuICAgIGRlc2F1dGVudGljYXIoKSB7IFxuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0SGVsaWFyKFwiYXV0ZW50aWNhY2FvbW9iaWxlL2Rlc2F1dGVudGljYXJcIixcbiAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICBkaXNwb3NpdGl2bzogY29uZmlnLmdldERldmljZUlkKCksXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIFwiUE9TVFwiXG4gICAgICAgIClcbiAgICB9XG5cbiAgICBsb2dpbih1c2VyKSB7IFxuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0SGVsaWFyKFwiYXV0ZW50aWNhY2FvbW9iaWxlL2F1dGVudGljYXJcIixcbiAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICBlbWFpbDogdXNlci5lbWFpbCxcbiAgICAgICAgICAgICAgICBzZW5oYTogdXNlci5wYXNzd29yZCxcbiAgICAgICAgICAgICAgICB0b2tlbjogY29uZmlnLmdldFRva2VuKCksXG4gICAgICAgICAgICAgICAgZGlzcG9zaXRpdm8gOiBjb25maWcuZ2V0RGV2aWNlSWQoKVxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBcIlBPU1RcIlxuICAgICAgICApXG4gICAgfVxuXG4gICAgcmVzZXRQYXNzd29yZCh1c2VyKSB7IFxuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0SGVsaWFyKFwiYXV0ZW50aWNhY2FvbW9iaWxlL2VzcXVlY2lzZW5oYVwiLFxuICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgIGVtYWlsOiB1c2VyLFxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBcIlBPU1RcIlxuICAgICAgICApXG4gICAgfVxuXG4gICAgbG9nb3V0KCkge1xuICAgICAgICByZXR1cm4gS2ludmV5LlVzZXIubG9nb3V0KCk7XG4gICAgfVxuXG4gICAgcmVnaXN0ZXIodXNlcikge1xuICAgICAgICByZXR1cm4gS2ludmV5LlVzZXIuc2lnbnVwKHsgdXNlcm5hbWU6IHVzZXIuZW1haWwsIHBhc3N3b3JkOiB1c2VyLnBhc3N3b3JkIH0pO1xuICAgIH1cbiAgICAvL2ZpbSB0ZWxhIGRlIGF1dGVudGljYWNhb1xuXG4gICAgLy8gdGVsYSBkZSBwZWRpZG9zXG4gICAgcGVkaWRvcygpe1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0SGVsaWFyKFwicGVkaWRvbW9iaWxlL2xpc3RhcnBlZGlkb3NcIixcbiAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICBkaXNwb3NpdGl2bzogY29uZmlnLmdldERldmljZUlkKCksXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIFwiUE9TVFwiXG4gICAgICAgIClcbiAgICB9O1xuXG4gICAgcGVkaWRvc0hpc3RvcmljbyhwZWRpZG9TdGF0dXMsIGRhdGFJbmljaWFsLCBkYXRhRmluYWwpe1xuXG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RIZWxpYXIoXCJwZWRpZG9tb2JpbGUvbGlzdGFycGVkaWRvc2hpc3Rvcmljb1wiLFxuICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkoeyAgICBcbiAgICAgICAgICAgICAgICBTdGF0dXNQZWRpZG9GaWx0cm86IHBlZGlkb1N0YXR1cyxcbiAgICAgICAgICAgICAgICBEYXRhSW5pY2lhbDogZGF0YUluaWNpYWwsXG4gICAgICAgICAgICAgICAgRGF0YUZpbmFsOiBkYXRhRmluYWwsXG4gICAgICAgICAgICAgICAgZGlzcG9zaXRpdm86IGNvbmZpZy5nZXREZXZpY2VJZCgpLFxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBcIlBPU1RcIlxuICAgICAgICApXG4gICAgfTtcblxuICAgIGRldGFsaGVQZWRpZG8oY29kaWdvKXtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdEhlbGlhcihcInBlZGlkb21vYmlsZS9kZXRhbGhlcGVkaWRvXCIsXG4gICAgICAgICAgICBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgICAgY29kaWdvUGVkaWRvOiBjb2RpZ28sXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIFwiUE9TVFwiXG4gICAgICAgICkgICBcbiAgICB9XG4gICAgLy8gZmltIHRlbGEgZGUgcGVkaWRvc1xuXG4gICAgLy8gYWNlaXRhciBvdSByZWN1c2FyIHBlZGlkb1xuICAgIGFjZWl0YXJQZWRpZG8oY29kaWdvLCBpc0FjZWl0byl7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RIZWxpYXIoXCJhY2VpdGFycGVkaWRvbW9iaWxlL2FjZWl0YXJwZWRpZG9tb2JpbGVcIixcbiAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICBjb2RpZ29QZWRpZG86IGNvZGlnbyxcbiAgICAgICAgICAgICAgICBhY2VpdGFQZWRpZG86IGlzQWNlaXRvLFxuICAgICAgICAgICAgICAgIGRpc3Bvc2l0aXZvOiBjb25maWcuZ2V0RGV2aWNlSWQoKVxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBcIlBPU1RcIlxuICAgICAgICApICAgXG4gICAgfVxuXG4gICAgcmVjdXNhclBlZGlkbyhjb2RpZ28sIGlzQWNlaXRvLCByZXN1bHQsIG91dHJvcyl7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RIZWxpYXIoXCJhY2VpdGFycGVkaWRvbW9iaWxlL2FjZWl0YXJwZWRpZG9tb2JpbGVcIixcbiAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICBjb2RpZ29QZWRpZG86IGNvZGlnbyxcbiAgICAgICAgICAgICAgICBhY2VpdGFQZWRpZG86IGlzQWNlaXRvLFxuICAgICAgICAgICAgICAgIGRpc3Bvc2l0aXZvOiBjb25maWcuZ2V0RGV2aWNlSWQoKSxcbiAgICAgICAgICAgICAgICBtb3Rpdm86IHJlc3VsdCxcbiAgICAgICAgICAgICAgICBNb3Rpdm9PdXRyb3M6IG91dHJvc1xuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBcIlBPU1RcIlxuICAgICAgICApICAgXG4gICAgfVxuXG4gICAgZW5jZXJyYXJQZWRpZG8oY29kaWdvKXtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdEhlbGlhcihcImFsdGVyYXJwZWRpZG9tb2JpbGUvYWx0ZXJhcnN0YXR1c3BlZGlkb21vYmlsZVwiLFxuICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgIGNvZGlnb1BlZGlkbzogY29kaWdvLFxuICAgICAgICAgICAgICAgIGNvZGlnb1N0YXR1czogMTAsIC8vIDEwID0gZW50cmVndWVcbiAgICAgICAgICAgICAgICBkaXNwb3NpdGl2bzogY29uZmlnLmdldERldmljZUlkKClcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgXCJQT1NUXCJcbiAgICAgICAgKSAgIFxuICAgIH1cblxuICAgIGNhbmNlbGFyUGVkaWRvKGNvZGlnbywgcmVzdWx0LCBvdXRyb3Mpe1xuICAgICAgICBpZihvdXRyb3MgIT0gJycpIHtcbiAgICAgICAgICAgIHJlc3VsdCA9IG91dHJvcztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RIZWxpYXIoXCJhbHRlcmFycGVkaWRvbW9iaWxlL2FsdGVyYXJzdGF0dXNwZWRpZG9tb2JpbGVcIixcbiAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICBjb2RpZ29QZWRpZG86IGNvZGlnbyxcbiAgICAgICAgICAgICAgICBjb2RpZ29TdGF0dXM6IDExLCAvL3BlZGlvZG8gY2FuY2VsYWRvIHBlbGEgbG9qYVxuICAgICAgICAgICAgICAgIGRpc3Bvc2l0aXZvOiBjb25maWcuZ2V0RGV2aWNlSWQoKSxcbiAgICAgICAgICAgICAgICBtb3Rpdm86IHJlc3VsdCxcbiAgICAgICAgICAgICAgICBNb3Rpdm9PdXRyb3M6IG91dHJvc1xuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBcIlBPU1RcIlxuICAgICAgICApICAgXG4gICAgfVxuICAgIC8vIGZpbSBhY2VpdGFyIG91IHJlY3VzYXIgcGVkaWRvXG4gICAgXG4gICAgLy8gcG9wdWxhciBkYWRvc1xuICAgIHBvcHVsYXJEYWRvcygpe1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0SGVsaWFyKFwiYWx0ZXJhcmRhZG9zbW9iaWxlL29idGVyZGFkb3NcIixcbiAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICBkaXNwb3NpdGl2bzogY29uZmlnLmdldERldmljZUlkKClcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgXCJQT1NUXCJcbiAgICAgICAgKSAgIFxuICAgIH1cbiAgICAvLyBwb3B1bGFyIGRhZG9zXG5cbiAgICAvLyBzYWx2YXIgZGFkb3NcbiAgICBzYWx2YXJEYWRvcyhDb2RpZ28sIE5vbWUsIEVtYWlsLCBTZW5oYSwgU2VuaGFBdHVhbCwgQ29uZmlybWFyU2VuaGEpe1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0SGVsaWFyKFwiYWx0ZXJhcmRhZG9zbW9iaWxlL0FsdGVyYXJEYWRvc1wiLFxuICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgIENvZGlnbzogQ29kaWdvLFxuICAgICAgICAgICAgICAgIE5vbWU6IE5vbWUsXG4gICAgICAgICAgICAgICAgRW1haWw6IEVtYWlsLFxuICAgICAgICAgICAgICAgIFNlbmhhOiBTZW5oYSxcbiAgICAgICAgICAgICAgICBTZW5oYUF0dWFsOiBTZW5oYUF0dWFsLFxuICAgICAgICAgICAgICAgIENvbmZpcm1hclNlbmhhOiBDb25maXJtYXJTZW5oYVxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBcIlBPU1RcIlxuICAgICAgICApICAgXG4gICAgfVxuICAgIC8vIHNhbHZhciBkYWRvc1xuXG4gICAgcmVxdWVzdEhlbGlhcih1cmwsIG9iamV0bywgbWV0b2RvKSB7XG4gICAgICAgIHZhciBhcGlVcmwgPSBjb25maWcuZ2V0QXBpVXJsKCk7XG5cbiAgICAgICAgcmV0dXJuIGh0dHAucmVxdWVzdCh7XG4gICAgICAgICAgICB1cmw6IGFwaVVybCt1cmwsXG4gICAgICAgICAgICBtZXRob2Q6IG1ldG9kbyxcbiAgICAgICAgICAgIGhlYWRlcnM6IHsgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIgfSxcbiAgICAgICAgICAgIGNvbnRlbnQ6IG9iamV0b1xuICAgICAgICB9KS50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5jb250ZW50LnRvSlNPTigpO1xuICAgICAgICB9LCBlcnJvciA9PiB7XG4gICAgICAgICAgICByZXR1cm4gZXJyb3I7XG4gICAgICAgIH0pO1xuICAgIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9