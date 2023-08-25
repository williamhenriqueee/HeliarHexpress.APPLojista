<template>
    <Page actionBarHidden="false">
        <ActionBar title="">
            <StackLayout orientation="horizontal"
                ios:horizontalAlignment="left"
                android:horizontalAlignment="left">
                <Image src="~/images/logo.png" style="height:100px; float:right;"></Image>
            </StackLayout>
            <ActionItem  ios.position="right" @tap="editar">
                <Image src="~/images/logo-topo.png"></Image>
                <Image class="edicao" src="res://edicao"></Image>
            </ActionItem>
            <ActionItem  ios.position="right" @tap="logout">
                <Image src="~/images/logo-topo.png"></Image>
                <Image class="sair" src="res://sair"></Image>
            </ActionItem>            
        </ActionBar> 
        <StackLayout backgroundColor="#045244"> 
         <Tabs :selectedIndex="selectedIndex">
            <TabStrip>
                <TabStripItem @tap="pedidos">
                    <Label text="Pedidos"></Label>
                    <Image src="res://home"></Image>
                </TabStripItem>
                <TabStripItem @tap="pedidosHistorico"> 
                    <Label text="Histórico"></Label>
                    <Image src="res://settings"></Image>
                </TabStripItem>
            </TabStrip>
            <TabContentItem>
                <ScrollView>
                    <ListView for="item in items" class="list-group">
                        <v-template>
                            <GridLayout columns="2/6*, 2/6*" backgroundColor="#148A64" rows="20,20,20,20,20,20,20,20" >						
                                <Label class="lbl" col="0" row="0"  text="Código:" textWrap="true"></Label>                          
                                <Label class="lbl lbl-bold" col="0" row="1"  :text="item.Codigo" textWrap="true"></Label>
                                <Label class="lbl" col="0" row="2"  text="Loja:" textWrap="true"></Label>
                                <Label class="lbl lbl-bold" col="0" row="3"  :text="item.Loja"></Label>
                                <Label class="lbl" col="0" row="4"  text="Agendada para:" textWrap="true"></Label>
                                <Label class="lbl lbl-bold" col="0" row="5"  :text="item.DataEntrega|FormataData" textWrap="true"></Label>
                                <Label class="lbl" col="0" row="6"  text="Status:" textWrap="true"></Label>
                                <Label class="lbl lbl-bold" col="0" row="7"  :text="item.Status" ></Label>
                            
                                <Button  rowSpan="3" row="0" col="1" class="btn btn-primary btn-orange" text="Visualizar" @tap="visualizar(item, false)"></Button>
                                <Label class="lbl"  rowSpan="3" col="1" row="3"  text="*Clique em Visualizar para Aceitar ou rejeitar o Pedido"  verticalAlignment="center" textWrap="true"></Label>
                            </GridLayout>
                        </v-template>
                    </ListView>
                </ScrollView> 
            </TabContentItem>
            <TabContentItem>
                <StackLayout orientation="vertical" style="background:#fff">
                    
                    <StackLayout orientation="horizontal" style="background:#fff">                        
                        <Button class="btn btn-tamanho btn-primary btn-grey" :text="TextoDataDe" @tap="dataDe" />                        
                        <Button class="btn btn-tamanho btn-primary btn-grey" :text="TextoDataAte" @tap="dataAte" />                        
                   </StackLayout>
                    <DatePicker v-show="DataDeVisible" verticalAlignment="center" v-model="DataDeSelecionada"></DatePicker>
                    <DatePicker v-show="DataAteVisible" verticalAlignment="center" v-model="DataAteSelecionada"></DatePicker>
                    <StackLayout orientation="horizontal" style="background:#fff" v-show="DataDeVisible">   
                        <Button class="btn btn-tamanho btn-primary btn-red"  text="Limpar" @tap="LimparDataDe" />                     
                        <Button class="btn btn-tamanho btn-primary btn-green"  text="Confirmar" @tap="confirmarDataDe" />                   
                    </StackLayout>
                     <StackLayout orientation="horizontal" style="background:#fff" v-show="DataAteVisible">   
                        <Button class="btn btn-tamanho btn-primary btn-red"  text="Limpar" @tap="LimparDataAte" />                     
                        <Button class="btn btn-tamanho btn-primary btn-green"  text="Confirmar" @tap="confirmarDataAte" />                   
                    </StackLayout>
                    <Button class="btn btn-primary btn-grey" :text="Status" @tap="statusPedido" />

                    <ListView for="item in itemsHistorico" class="list-group">
                        <v-template>
                            <GridLayout columns="2/6*, 2/6*" backgroundColor="#888888" rows="20,20,20,20,20,20,20,20" >						
                                <Label class="lbl" col="0" row="0"  text="Código:" textWrap="true"></Label>                          
                                <Label  class="lbl lbl-bold" col="0" row="1"  :text="item.Codigo" textWrap="true"></Label>
                                <Label class="lbl" col="0" row="2"  text="Loja:" textWrap="true"></Label>
                                <Label  class="lbl lbl-bold" col="0" row="3"  :text="item.Loja" textWrap="true"></Label>
                                <Label class="lbl" col="0" row="4"  text="Agendada para:" textWrap="true"></Label>
                                <Label class="lbl lbl-bold" col="0" row="5"  :text="item.DataEntrega|FormataData" textWrap="true"></Label>
                                <Label class="lbl" col="0" row="6"  text="Status:" textWrap="true"></Label>
                                <Label class="lbl lbl-bold" col="0" row="7"  :text="item.Status" ></Label>
                                
                                <Button  rowSpan="6" row="0" col="1" class="btn btn-primary btn-orange" text="Visualizar" @tap="visualizar(item, true)"></Button>
                            </GridLayout>
                        </v-template>
                    </ListView>
                 </StackLayout>
            </TabContentItem>
        </Tabs>
    </StackLayout>
    </Page>
</template>

<script>
    import Login from "./Login";
    import Pedido from "./Pedido";
    import Editar from "./Editar";
    import Config from "../_config/_config";
    var config = new Config();

    export default {
        data() {
            return { 
                items : '', 
                itemsHistorico : '',
                Historico : false,
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
        created: function () {

            if(this.DataDeFiltro != '' && this.DataDeFiltro != undefined){       
                this.ValueDataDe = this.DataDeFiltro;

                var d = new Date(this.DataDeFiltro),
                mes = '' + (d.getMonth() + 1),
                dia = '' + d.getDate(),
                ano = d.getFullYear();
               
                if (mes.length < 2) mes = '0' + mes;
                if (dia.length < 2) dia = '0' + dia;

                this.TextoDataDe = dia + '/' +  mes + '/' +  ano;  
                this.DataDeSelecionada =  new Date(this.DataDeFiltro);
            }
            
            if(this.DataAteFiltro != '' && this.DataAteFiltro != undefined){
                this.ValueDataAte = this.DataAteFiltro;

                var d = new Date(this.DataAteFiltro),
                mes = '' + (d.getMonth() + 1),
                dia = '' + d.getDate(),
                ano = d.getFullYear();
               
                if (mes.length < 2) mes = '0' + mes;
                if (dia.length < 2) dia = '0' + dia;

                this.TextoDataAte = dia + '/' +  mes + '/' +  ano;  
                this.DataAteSelecionada =  new Date(this.DataAteFiltro);              
            }

            if(this.StatusFiltro != '' && this.StatusFiltro != undefined){
                this.Status = this.StatusFiltro;
                this.PedidoStatus = this.StatusFiltro;

                if (this.StatusFiltro == 5){
                    this.Status = "Cancelado";
                }
                else if (this.StatusFiltro == 6){
                    this.Status = "Finalizado";
                }
                else if (this.StatusFiltro == 10){
                    this.Status = "Entregue";
                }
                else if (this.StatusFiltro == 7){
                    this.Status = "Aceito pela Loja";
                }
            }

            this.pedidos();
            this.pedidosHistorico();
            this.AtualizarAPP();

            if (this.Historico == true){
                this.selectedIndex = 1;
            }
        },
        filters: {
            FormataData: function (value) {
                var d = new Date(value),
                mes = '' + (d.getMonth() + 1),
                dia = '' + d.getDate(),
                ano = d.getFullYear(),
                hora = '' + (d.getHours()),
                minuto = '' + d.getMinutes();

                if (mes.length < 2) mes = '0' + mes;
                if (dia.length < 2) dia = '0' + dia;
                if (hora.length < 2) hora = '0' + hora;
                if (minuto.length < 2) minuto = '0' + minuto;

                return [dia, mes, ano].join('/') + ' às ' + hora + ":" + minuto;
            },
        },
        methods: {
            logout() {
                this.$heliarApp
                .desautenticar()
                .then((response)=> {                    
                    if(response.Status == true)
                    {
                        this.$navigateTo(Login, {
                            clearHistory: false
                        });
                    }
                    else{
                        this.alert(response.Mensagem);
                    }
                })
                .catch(() => {
                    alert("Erro ao encontrar seus pedidos");
                });               
            },
            dataDe(){
                this.DataDeVisible = true;
                this.DataAteVisible = false;
            },
            dataAte(){
                this.DataDeVisible = false;
                this.DataAteVisible = true;
            },      
            confirmarDataDe(){
                var d = new Date(this.DataDeSelecionada),
                mes = '' + (d.getMonth() + 1),
                dia = '' + d.getDate(),
                ano = d.getFullYear();
               
                if (mes.length < 2) mes = '0' + mes;
                if (dia.length < 2) dia = '0' + dia;

                this.TextoDataDe = dia + '/' +  mes + '/' +  ano;                
                this.ValueDataDe = mes + '/' + dia  + '/' +  ano;
                this.DataDeVisible = false;
                this.pedidosHistorico();
            },   
            confirmarDataAte(){
                var d = new Date(this.DataAteSelecionada),
                mes = '' + (d.getMonth() + 1),
                dia = '' + d.getDate(),
                ano = d.getFullYear();
               
                if (mes.length < 2) mes = '0' + mes;
                if (dia.length < 2) dia = '0' + dia;

                this.TextoDataAte = dia + '/' +  mes + '/' +  ano;                
                this.ValueDataAte = mes + '/' + dia  + '/' +  ano;
                this.DataAteVisible = false;
                this.pedidosHistorico();
            },   
            LimparDataDe(){
                this.TextoDataDe = 'Data De';
                this.DataDeVisible = false;
                this.ValueDataDe = null;
                this.pedidosHistorico();
            },         
            LimparDataAte(){
                this.TextoDataAte = 'Data Até';
                this.DataAteVisible = false;
                this.ValueDataAte = null;
                this.pedidosHistorico();
            },          
            statusPedido() {

                this.DataDeVisible = false;
                this.DataAteVisible = false;

                var dialogs = require("tns-core-modules/ui/dialogs");
                dialogs.action({
                    title: "Escolha o status que deseja fazer o filtro",
                    cancelButtonText: "Cancelar",
                    actions: ['Todos','Cancelado','Finalizado', 'Entregue', 'Aceito pela Loja']
                }).then((result) => {
                    var resposta = result;

                     if(result == "Cancelar"){
                         return false;
                     }

                    if (result == "Todos"){
                        this.PedidoStatus = null;
                        this.Status = "Todos Status";
                        this.pedidosHistorico();
                    }
                    else if (result == "Cancelado"){
                        this.PedidoStatus = 5;
                        this.Status = "Cancelado";
                        this.pedidosHistorico();
                    }
                    else if (result == "Finalizado"){
                        this.PedidoStatus = 6;
                        this.Status = "Finalizado";
                        this.pedidosHistorico();
                    }
                     else if (result == "Entregue"){
                        this.PedidoStatus = 10;
                        this.Status = "Entregue";
                        this.pedidosHistorico();
                    }
                     else if (result == "Aceito pela Loja"){
                         this.Status = "Aceito pela Loja";
                        this.PedidoStatus = 7;
                        this.pedidosHistorico();
                    }
                });
            },
            editar(isHistorico) {
                this.$navigateTo(Editar, {
                    clearHistory: true,
                    props: {
                        Historico: isHistorico
                    }
                }); 
            },
            pedidos(){
                 this.$heliarApp
                    .pedidos()
                    .then((response)=> {
                        this.items = response.Pedidos;
                    })
                    .catch(() => {
                        alert("Erro ao encontrar seus pedidos");
                    });
            },
            pedidosHistorico(){
                this.$heliarApp
                    .pedidosHistorico(this.PedidoStatus,  this.ValueDataDe, this.ValueDataAte)
                    .then((responseHistorico)=> {
                        this.itemsHistorico = responseHistorico.Pedidos;
                    })
                    .catch(() => {
                        alert("Erro ao encontrar seus pedidos");
                    });
            },
            visualizar(e, isHistorico) {
                this.$navigateTo(Pedido, {
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
            AtualizarAPP(){
              setInterval(() => pedidos(), 600000); //90000
              setInterval(() => pedidosHistorico(this.PedidoStatus, null, this.ValueDataAte), 600000);
            }
        }
    };
</script>

<style>
    .lbl{
        color:#FFF;
        margin-left: 10;
        margin-right: 10;
    }
    .lbl-bold{
         
        font-weight: bold;
    }
    .sair {
        height: 30;
    }

    .edicao {
        height: 25;
    }
    .btn-tamanho{
        width: 41%;
    }
</style>