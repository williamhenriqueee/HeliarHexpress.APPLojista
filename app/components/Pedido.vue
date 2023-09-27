<template>
    <Page>
        <ActionBar title="Detalhe do pedido">
            <Label class="h2" row="0" horizontalAlignment="center">
               <Span text="Detalhe do pedido: "> 
                </Span>
                <Span :text="Codigo" class="bold">
                </Span>
            </Label>
        </ActionBar>
        <StackLayout class="form">
            <StackLayout v-show="!isAvaliacao">
                <HtmlView class="telefone"
                    :html="Pedidos.Loja|FormataLoja" > 
                </HtmlView>
                <Label class="h3" >
                    <FormattedString>
                        <Span text="Nome do Cliente: ">
                        </Span>
                        <Span :text="Pedidos.NomeCliente" class="bold">
                        </Span>
                    </FormattedString>
                </Label>
                <Label class="h3" v-show="isAceito && Pedidos.CPF != null">
                    <FormattedString>
                        <Span text="CPF: ">
                        </Span>
                        <Span :text="Pedidos.CPF" class="bold">
                        </Span>
                    </FormattedString>
                </Label>
                <Label class="h3" v-show="isAceito && Pedidos.Email != null">
                    <FormattedString>
                        <Span text="Email: ">
                        </Span>
                        <Span :text="Pedidos.Email" class="bold">
                        </Span>
                    </FormattedString>
                </Label>
                <StackLayout orientation="horizontal">
                    <HtmlView v-show="isAceito && Pedidos.Telefone != null" 
                        :html="Pedidos.Telefone|FormataTelefone" class="telefone telefone-format">  
                    </HtmlView>
                </StackLayout>
                  <StackLayout orientation="horizontal">
                    <HtmlView v-show="isAceito && Pedidos.Telefone != null" 
                        :html="Pedidos.Telefone|FormataWhats" class="telefone whats-format">  
                    </HtmlView>
                </StackLayout>
                <Label class="h3">
                    <FormattedString>
                        <Span text="Veículo: ">
                        </Span>
                        <Span :text="Pedidos.Modelo" class="bold">
                        </Span>
                    </FormattedString>
                </Label>
                <Label class="h3">
                    <FormattedString>
                        <Span text="Produto: ">
                        </Span>
                        <Span :text="Pedidos.Bateria" class="bold">
                        </Span>
                    </FormattedString>
                </Label>
                <Label class="h3">
                    <FormattedString>
                        <Span text="Forma de Pagamento: ">
                        </Span>
                        <Span :text="Pedidos.FormaDePagamento" class="bold">
                        </Span>
                    </FormattedString>
                </Label>
                <Label class="h3" v-show="Pedidos.Desconto > 0">
                    <FormattedString>
                        <Span text="Desconto: ">
                        </Span>
                        <Span :text="Pedidos.Desconto|FormataValor" class="bold">
                        </Span>
                    </FormattedString>
                </Label>
                <Label class="h3" v-show="Pedidos.ValorTotalPedido > 0">
                    <FormattedString>
                        <Span text="Total: ">
                        </Span>
                        <Span :text="Pedidos.ValorTotalPedido|FormataValor" class="bold">
                        </Span>
                    </FormattedString>
                </Label>
                <Label class="h3" v-show="Pedidos.FormaPagamento != null">
                    <FormattedString>
                        <Span text="Pagamento: ">
                        </Span>
                        <Span :text="Pedidos.FormaPagamento" class="bold">
                        </Span>
                    </FormattedString>
                </Label>
                <Label class="h3" v-show="Pedidos.Troco > 0">
                    <FormattedString>
                        <Span text="Troco: ">
                        </Span>
                        <Span :text="Pedidos.Troco|FormataValor" class="bold">
                        </Span>
                    </FormattedString>
                </Label>
                <Label class="h3">
                    <FormattedString>
                        <Span text="Data da Entrega: ">
                        </Span>
                        <Span :text="Pedidos.DataEntrega|FormataData" class="bold">
                        </Span>
                    </FormattedString>
                </Label>
                <Label class="h3">
                    <FormattedString>
                        <Span text="Horário da Entrega: ">
                        </Span>
                        <Span :text="Pedidos.DataEntrega|FormataHorario" class="bold">
                        </Span>
                    </FormattedString>
                </Label>
                <Label class="h3" v-show="!isAceito">
                    <FormattedString>
                        <Span text="Bairro: ">
                        </Span>
                        <Span :text="Pedidos.Bairro" class="bold">
                        </Span>
                    </FormattedString>
                </Label>
                <HtmlView v-show="isAceito && Pedidos.Endereco != null"
                    :html="Pedidos.Endereco|FormataEndereco" class="telefone"> 
                </HtmlView>
                <StackLayout orientation="horizontal" v-show="isAceito && Pedidos.Endereco != null">
                    <Image src="~/images/mapa.png" class="img-mapa" @tap="abrirMapa" />
                    <Image src="~/images/share.png" class="img-mapa-compartilhar" @tap="compartilharMapa" />
                </StackLayout>
                <Label class="h3">
                    <FormattedString>
                        <Span text="Distância aproximada: ">
                        </Span>
                        <Span :text="Pedidos.DistanciaAproximada|FormataDistancia" class="bold">
                        </Span>
                    </FormattedString>
                </Label>
            </StackLayout>

            <StackLayout v-show="isAvaliacao">
                <Label class="h2" row="0" horizontalAlignment="center">
                    <FormattedString>
                        <Span text="Avaliação do pedido: "> 
                        </Span>
                        <Span :text="Codigo" class="bold">
                        </Span>
                    </FormattedString>
                </Label>
                <Label class="h3" textWrap="true">
                    <FormattedString>
                        <Span text="O pedido foi entregue corretamente: ">
                        </Span>
                        <Span :text="Avaliacao.EntregueCorretamente|FormataBoleano" class="bold">
                        </Span>
                    </FormattedString>
                </Label>
                <Label class="h3" textWrap="true">
                    <FormattedString>
                        <Span text="O produto foi entregue no local e horário agendado: ">
                        </Span>
                        <Span :text="Avaliacao.LocalHorario|FormataBoleano" class="bold">
                        </Span>
                    </FormattedString>
                </Label>
                <Label class="h3" textWrap="true">
                    <FormattedString>
                        <Span text="Ocorreu tudo bem com a instalação: ">
                        </Span>
                        <Span :text="Avaliacao.Instalacao|FormataBoleano" class="bold">
                        </Span>
                    </FormattedString>
                </Label>
                <Label class="h3" textWrap="true">
                    <FormattedString>
                        <Span text="Em uma escala de 0 a 10, quanto você recomendaria o Heliar Express: ">
                        </Span>
                        <Span :text="Avaliacao.Nota" class="bold">
                        </Span>
                    </FormattedString>
                </Label>
                <Label class="h3" textWrap="true">
                    <FormattedString>
                        <Span text="Porque escolheu comprar no Heliar Express: ">
                        </Span>
                        <Span :text="Avaliacao.Mensagem" class="bold">
                        </Span>
                    </FormattedString>
                </Label>
                <Label class="h3" textWrap="true">
                    <FormattedString>
                        <Span text="Observação: ">
                        </Span>
                        <Span :text="Avaliacao.Observacao" class="bold">
                        </Span>
                    </FormattedString>
                </Label>
            </StackLayout>

            <Button class="btn espacamento btn-primary btn-green" v-show="!Historico && !isAceito" text="Aceitar" @tap="aceitar"></Button>
            <Button class="btn espacamento btn-primary btn-red"  v-show="!Historico && !isAceito" text="Recusar" @tap="rejeitar"></Button>

            <Button class="btn espacamento btn-primary btn-green" v-show="Historico && isEncerrar" text="Finalizar Pedido" @tap="encerrar"></Button>
            <Button class="btn espacamento btn-primary btn-red"  v-show="Historico && isCancelar" text="Cancelar Pedido" @tap="cancelar"></Button>
            <Button class="btn espacamento btn-primary btn-orange" v-show="isAvaliacaoBotao" text="Avaliação" @tap="avaliacao"></Button>
            <Button class="btn espacamento btn-primary btn-grey" v-show="isBotaoVoltar" text="Voltar" @tap="voltar"></Button>
            <Button class="btn espacamento btn-primary btn-grey" v-show="isAvaliacaoBotaoVoltar" text="Voltar ao pedido" @tap="voltarPedido"></Button>
        </StackLayout>
    </Page>
</template>

<script>
    import Home from "./Home";
    import Pedido from "./Pedido";
    import Config from "../_config/_config";
    const utilsModule = require("tns-core-modules/utils/utils");

    var config = new Config();
    const { alert, confirm, prompt, login, action, inputType } = require("tns-core-modules/ui/dialogs");

    export default {
        data() {
           return { 
                Pedidos : '', 
                isAceito : false,
                Historico : true,
                Avaliacao : '', 
                isAvaliacao : false,
                isAvaliacaoBotao : false,
                isAvaliacaoBotaoVoltar : false,
                isBotaoVoltar : true,
                isEncerrar : false,
                isCancelar : false,
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
            FormataData: function (value) {
                var d = new Date(value),
                mes = '' + (d.getMonth() + 1),
                dia = '' + d.getDate(),
                ano = d.getFullYear();

                if (mes.length < 2) mes = '0' + mes;
                if (dia.length < 2) dia = '0' + dia;

                return [dia, mes, ano].join('/');
            },
            FormataHorario: function (value) {
                var d = new Date(value),
                hora = '' + (d.getHours()),
                minuto = '' + d.getMinutes();

                if (hora.length < 2) hora = '0' + hora;
                if (minuto.length < 2) minuto = '0' + minuto;
                
                return hora + ":" + minuto;
            },
            FormataBoleano: function (value) {
                if(value == 'false'){
                    value = 'Não';
                }
                else {
                    value = 'Sim';
                }
                
                return value;
            },
            FormataValor: function (value) {
                var valor = parseFloat(value);
                return "R$ " + valor.toFixed(2).replace('.', ',').replace(/(\d)(?=(\d{3})+\,)/g, "$1.");
            },
            FormataTelefone: function (value){
                if(value == undefined) { return '' };
                
                var tel = value.split("#")[0];

                var telFormatado = tel;
                tel = tel.replace('(', '').replace(')', '').replace(' ', '').replace('-', '');
                telFormatado = telFormatado.replace('(', '').replace(')', ' ').replace(' ', '');

                return "<label textWrap='true'><span>Tel</span>: <a class='bold' href='tel://55" + tel + " '>" + telFormatado + "</a></label>";
            },
            FormataWhats: function (value){
                if(value == undefined) { return '' };
                
                var tel = value.split("#")[0];

                var telFormatado = tel;
                tel = tel.replace('(', '').replace(')', '').replace(' ', '').replace('-', '');
                telFormatado = telFormatado.replace('(', '').replace(')', ' ').replace(' ', '');
                
                return  "<label textWrap='true'><span>Whats</span>: <a class='bold' href='https://api.whatsapp.com/send?phone=55" + tel +
                  " &text=Ol%C3%A1%2C%20tudo%20bem%3F&nbsp;'>" + telFormatado + "</a></label>";
            },
            FormataEndereco: function (value){
                if(value == undefined) { return '' };

                return "<label textWrap='true'><span>Endereço</span>: <b> " + value + "</b> </label>";
            },
             FormataLoja: function (value) {
                return "<label textWrap='true'><span>Loja</span>: <b> " + value + "</b></label>";
            },
            FormataDistancia: function (value) {
                return value + " KM";
            },
        },
        methods: {
            detalhePedido(codigo) {
               this.$heliarApp
                    .detalhePedido(codigo)
                    .then((response)=> {
                       this.Pedidos = response.Pedidos;
                        
                        console.log(this.Status);

                       if(this.Historico == true){
                            this.isAceito = true;  
                       }

                       if(this.Pedidos.CodigoStatus == 6 || this.Pedidos.CodigoStatus == 5 || this.Pedidos.CodigoStatus == 10){ 
                            this.isEncerrar = false; // 6 = pedido finalizado
                            this.isCancelar = false; // 5 = pedido cancelado
                            this.isAceito = false; // 10 =  pedido entregue
                       }
                       else if(this.Historico == true){
                            this.isEncerrar = true; // 6 = pedido finalizado
                            this.isCancelar = true; // 5 = pedido cancelado
                        }
                        else if(this.Historico == "true"){
                           this.isAceito = true;
                           this.Historico = true;
                           this.isEncerrar = true;
                           this.isCancelar = true;
                       }
                       else if(this.Historico == "false"){
                           this.isAceito = false;
                           this.Historico = false;
                       }

                       if(response.Pedidos.AvaliacoesPedidoMobile != null){
                            this.Avaliacao = response.Pedidos.AvaliacoesPedidoMobile;  
                            this.isAvaliacaoBotao = true;
                       }
                    })
                    .catch(() => {
                        this.alert("Erro ao encontrar seu pedido");
                    });
            },
            abrirMapa(){
                utilsModule.openUrl('https://www.google.com/maps/place/' + this.Pedidos.Endereco.replace('/', '+').replace(' - ', ',')
                    .replace(' -', ',').replace('- ', ',').replace('-', ',').replace(' ', '+').replace(' ', '+')
                    .replace(' ', '+').replace(' ', '+').replace(' ', '+').replace(' ', '+'));
            },
            compartilharMapa(){
                utilsModule.openUrl('https://api.whatsapp.com/send?text=https://www.google.com/maps/place/' + this.Pedidos.Endereco.replace('/', '.').replace(' - ', ',')
                    .replace(' -', ',').replace('- ', ',').replace('-', ',').replace(' ', '.').replace(' ', '.')
                    .replace(' ', '.').replace(' ', '.').replace(' ', '.').replace(' ', '.'));
            },
            voltar() {
                console.log(this.Status);
                this.$navigateTo(Home, {
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
                this.$heliarApp
                .encerrarPedido(this.Codigo)
                .then((response)=> {
                    if(response.Status == true) {
                        this.isEncerrar = false; 
                        this.isCancelar = false;                       
                    }
                    this.alert(response.Mensagem);
                })
                .catch(() => {
                    this.alert("Erro ao aceitar o pedido");
                });
            },
            aceitar() {
                this.$heliarApp
                .aceitarPedido(this.Codigo, true, '', '')
                .then((response)=> {
                    if(response.Status == true) {
                        this.isAceito = true;                        
                    }
                    this.alert(response.Mensagem);
                })
                .catch(() => {
                    this.alert("Erro ao aceitar o pedido");
                });
            },           
            rejeitar() {
                var dialogs = require("tns-core-modules/ui/dialogs");               
                dialogs.action({
                    title: "Deseja realmente Recusar? Informe um motivo",
                    cancelButtonText: "Cancelar",
                    actions: this.Pedidos.JustificativasRejeicoesPedido
                }).then((result) => {
                    var resposta = result;

                     if(result == "Cancelar"){
                         return false;
                     } 

                    if(result == "Outro"){
                        prompt({
                            title: "Deseja realmente Recusar? Descreva o motivo",
                            okButtonText: "Recusar",
                            cancelButtonText: "Cancelar",
                            defaultText: "",
                        }).then((result) => {
                            
                            if(result.result == false){
                                return false;
                            } 

                             this.$heliarApp
                            .recusarPedido(this.Codigo, false, resposta, result.text.trim())
                            .then((response)=> {
                                if(response.Status == true) {
                                    this.isAceito = false; 
                                    this.Historico = true;                       
                                }
                                this.alert(response.Mensagem);
                            })
                            .catch(() => {
                                this.alert("Erro ao recusar o pedido");
                            });
                        });
                    }
                    else{
                        this.$heliarApp
                        .recusarPedido(this.Codigo, false, resposta,'')
                        .then((response)=> {
                            if(response.Status == true) {
                                this.isAceito = false;   
                                this.Historico = true;                        
                            }
                            this.alert(response.Mensagem);
                        })
                        .catch(() => {
                            this.alert("Erro ao recusar o pedido");
                        });
                    }
                });
            },   
            cancelar() {
                var dialogs = require("tns-core-modules/ui/dialogs");
                dialogs.action({
                    title: "Deseja realmente cancelar o pedido? Informe um motivo",
                    cancelButtonText: "Cancelar",
                    actions: this.Pedidos.JustificativasRejeicoesPedido
                }).then((result) => {
                    var resposta = result;
                    
                    if(result == "Cancelar"){
                        return false;
                    }

                    if(result == "Outro"){
                        prompt({
                            title: "Deseja realmente cancelar o pedido? Informe um motivo",
                            okButtonText: "Recusar",
                            cancelButtonText: "Cancelar",
                            defaultText: "",
                        }).then((result) => {
                            
                            if(result.result == false){
                                return false;
                            } 

                             this.$heliarApp
                            .cancelarPedido(this.Codigo, resposta, result.text.trim())
                            .then((response)=> {
                                if(response.Status == true) {
                                    this.isEncerrar = false; 
                                    this.isCancelar = false;  
                                    this.isAceito = false;                       
                                }
                                this.alert(response.Mensagem);
                            })
                            .catch(() => {
                                this.alert("Erro ao recusar o pedido");
                            });
                        });
                    }
                    else{
                        this.$heliarApp
                        .cancelarPedido(this.Codigo, resposta,'')
                        .then((response)=> {
                            if(response.Status == true) {
                                this.isEncerrar = false; 
                                this.isCancelar = false;    
                                 this.isAceito = false;                  
                            }
                            this.alert(response.Mensagem);
                        })
                        .catch(() => {
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
    };
</script>

<style>
    .lbl {
        color: #FFF;
        margin-left: 10;
        margin-right: 10;
    }
    .bold {
        font-weight: bold;
    }
    .form{
        margin-left:20px;
    }
    .telefone
    {
        color:#000;
        font-size: 16px;
        margin-bottom: 5px;
    }
    .espacamento{
        margin-top:8px;
        margin-bottom:8px;
    }
    .logo-ico{
         height: 20;
         width: 40;
    }
    .telefone-format {
        background-image: url('~/images/ligar.png');
        background-repeat: no-repeat;
        background-size: 50px 17px;
        background-position: right;
        width: 550px;
    }
    .whats-format {
        background-image: url('~/images/whats.png');
        background-repeat: no-repeat;
        background-size: 17px 17px;
        background-position: right;
        width: 510px;
    }
    .img-mapa{
         width: 190px;
    }
    .img-mapa-compartilhar{
         width: 380px;
         margin-left: 15px;
    }
</style>