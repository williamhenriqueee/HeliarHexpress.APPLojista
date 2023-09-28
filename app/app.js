import Vue from "nativescript-vue";
import routes from "./routes";
import BackendService from "./services/backend-service";
import HeliarApp from "./services/heliar-app";
import Config from "./_config/_config";
import { messaging } from "nativescript-plugin-firebase/messaging";
import { Frame } from 'tns-core-modules/ui/frame';

Vue.config.silent = false;
const config = new Config();
Vue.prototype.$config = config;

const backendService = new BackendService();
Vue.prototype.$backendService = backendService;

const heliarApp = new HeliarApp();
Vue.prototype.$heliarApp = heliarApp;

const { alert, confirm, prompt, login, action, inputType } = require("tns-core-modules/ui/dialogs");
var firebase = require("nativescript-plugin-firebase");
var applicationSettings = require("application-settings");
var dialogs = require("tns-core-modules/ui/dialogs");
[15: 46] Victor Domingues

setTimeout(() => {

    firebase.init({

        onPushTokenReceivedCallback: (token) => {

            console.log("Firebase plugin received a push token: " + token);

            applicationSettings.setString("device_token", token);

            config.setToken(token);

        },



        onMessageReceivedCallback: (message) => {

            var codigo = message.data.key_1;

            var historico = message.data.key_2;



            alert({

                title: message.data.title,

                message: message.data.body,

                okButtonText: "Visualizar",

                cancelButtonText: "Cancelar",

            }).then((result) => {

                Vue.prototype.$heliarApp

                    .isLoggedIn()

                    .then((response) => {

                        if (response.Status == false) {

                            mensagem("Usuário não autenticado para visualizar o pedido");

                            navigateToLogin(routes.login);

                        } else {

                            navigateTo(routes.pedido, codigo, historico);

                        }

                    })

                    .catch(() => {

                        alert("Erro ao verificar autenticação do usuário");

                    });

            });

        },

        showNotifications: true,

        showNotificationsWhenInForeground: true,

    });

}, 3000)

new Vue({
  render: h => h("frame", [h(backendService.isLoggedIn() ? routes.home : routes.login)])
}).$start();

function navigateTo (page, codigo, historico) {
    Frame.topmost().currentPage.__vuePageRef__.$navigateTo(page, {
        clearHistory: true,
         props: {
             Codigo: codigo,
             Historico: historico
         }
    })
}

function navigateToLogin (page) {
    Frame.topmost().currentPage.__vuePageRef__.$navigateTo(page, {
        clearHistory: true
    })
}

function mensagem(message) {
    return alert({
        title: "Atenção",
        okButtonText: "OK",
        message: message
    });
}
