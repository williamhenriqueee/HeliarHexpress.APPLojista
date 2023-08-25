import * as http from "http";
import * as Kinvey from "kinvey-nativescript-sdk";
import Config from "../_config/_config";
import { isNullOrUndefined } from "util";
var config = new Config();
export default class HeliarApp {

    // tela de autenticacao
    isLoggedIn() {  
        
        return this.requestHeliar("autenticacaomobile/verificarautenticado",
        JSON.stringify({               
            token : config.getToken()
        }),
        "POST")
    }

    desautenticar() { 
        return this.requestHeliar("autenticacaomobile/desautenticar",
            JSON.stringify({
                dispositivo: config.getDeviceId(),
            }),
            "POST"
        )
    }

    login(user) { 
        return this.requestHeliar("autenticacaomobile/autenticar",
            JSON.stringify({
                email: user.email,
                senha: user.password,
                token: config.getToken(),
                dispositivo : config.getDeviceId()
            }),
            "POST"
        )
    }

    resetPassword(user) { 
        return this.requestHeliar("autenticacaomobile/esquecisenha",
            JSON.stringify({
                email: user,
            }),
            "POST"
        )
    }

    logout() {
        return Kinvey.User.logout();
    }

    register(user) {
        return Kinvey.User.signup({ username: user.email, password: user.password });
    }
    //fim tela de autenticacao

    // tela de pedidos
    pedidos(){
        return this.requestHeliar("pedidomobile/listarpedidos",
            JSON.stringify({
                dispositivo: config.getDeviceId(),
            }),
            "POST"
        )
    };

    pedidosHistorico(pedidoStatus, dataInicial, dataFinal){

        return this.requestHeliar("pedidomobile/listarpedidoshistorico",
            JSON.stringify({    
                StatusPedidoFiltro: pedidoStatus,
                DataInicial: dataInicial,
                DataFinal: dataFinal,
                dispositivo: config.getDeviceId(),
            }),
            "POST"
        )
    };

    detalhePedido(codigo){
        return this.requestHeliar("pedidomobile/detalhepedido",
            JSON.stringify({
                codigoPedido: codigo,
            }),
            "POST"
        )   
    }
    // fim tela de pedidos

    // aceitar ou recusar pedido
    aceitarPedido(codigo, isAceito){
        return this.requestHeliar("aceitarpedidomobile/aceitarpedidomobile",
            JSON.stringify({
                codigoPedido: codigo,
                aceitaPedido: isAceito,
                dispositivo: config.getDeviceId()
            }),
            "POST"
        )   
    }

    recusarPedido(codigo, isAceito, result, outros){
        return this.requestHeliar("aceitarpedidomobile/aceitarpedidomobile",
            JSON.stringify({
                codigoPedido: codigo,
                aceitaPedido: isAceito,
                dispositivo: config.getDeviceId(),
                motivo: result,
                MotivoOutros: outros
            }),
            "POST"
        )   
    }

    encerrarPedido(codigo){
        return this.requestHeliar("alterarpedidomobile/alterarstatuspedidomobile",
            JSON.stringify({
                codigoPedido: codigo,
                codigoStatus: 10, // 10 = entregue
                dispositivo: config.getDeviceId()
            }),
            "POST"
        )   
    }

    cancelarPedido(codigo, result, outros){
        if(outros != '') {
            result = outros;
        }

        return this.requestHeliar("alterarpedidomobile/alterarstatuspedidomobile",
            JSON.stringify({
                codigoPedido: codigo,
                codigoStatus: 11, //pediodo cancelado pela loja
                dispositivo: config.getDeviceId(),
                motivo: result,
                MotivoOutros: outros
            }),
            "POST"
        )   
    }
    // fim aceitar ou recusar pedido
    
    // popular dados
    popularDados(){
        return this.requestHeliar("alterardadosmobile/obterdados",
            JSON.stringify({
                dispositivo: config.getDeviceId()
            }),
            "POST"
        )   
    }
    // popular dados

    // salvar dados
    salvarDados(Codigo, Nome, Email, Senha, SenhaAtual, ConfirmarSenha){
        return this.requestHeliar("alterardadosmobile/AlterarDados",
            JSON.stringify({
                Codigo: Codigo,
                Nome: Nome,
                Email: Email,
                Senha: Senha,
                SenhaAtual: SenhaAtual,
                ConfirmarSenha: ConfirmarSenha
            }),
            "POST"
        )   
    }
    // salvar dados

    requestHeliar(url, objeto, metodo) {
        var apiUrl = config.getApiUrl();

        return http.request({
            url: apiUrl+url,
            method: metodo,
            headers: { "Content-Type": "application/json" },
            content: objeto
        }).then(response => {
            return response.content.toJSON();
        }, error => {
            return error;
        });
    }
}