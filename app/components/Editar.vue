<template>
     <Page>
         <ActionBar title="Perfil do Usuário">
            <Label class="h2" row="0" horizontalAlignment="center">
               <Span text="Perfil do Usuário"> 
                </Span>
                <Span :text="Codigo" class="bold">
                </Span>
            </Label>
        </ActionBar>
        <FlexboxLayout class="page">
            <StackLayout class="form">

                <GridLayout rows="auto, auto, auto, auto, auto, auto, auto">
                     <StackLayout row="0" class="input-field">
                        <Label class="sub-titulo" text="Meus dados"></Label>
                    </StackLayout>

                    <StackLayout row="1" class="input-field">
                        <TextField class="input" hint="Nome"
                            keyboardType="nome"  v-model="Usuario.Nome"
                            autocorrect="false" autocapitalizationType="none"
                            returnKeyType="next"
                            ></TextField>
                        <StackLayout class="hr-light"></StackLayout>
                    </StackLayout>

                    <StackLayout row="2" class="input-field">
                        <TextField class="input" hint="E-mail"
                             keyboardType="email" type="email" v-model="Usuario.Email"
                            autocorrect="false" autocapitalizationType="none"
                            returnKeyType="next"
                           ></TextField>
                        <StackLayout class="hr-light"></StackLayout>
                    </StackLayout>
                
                    <StackLayout row="3" class="input-field">
                        <Label class="sub-titulo" text="Minha Senha"></Label>
                    </StackLayout>

                    <StackLayout row="4" class="input-field">
                        <TextField class="input" ref="password"
                            hint="Senha Atual" v-model="Usuario.SenhaAtual"
                            secure="true"></TextField>
                        <StackLayout class="hr-light"></StackLayout>
                    </StackLayout>

                    <StackLayout row="5" class="input-field">
                        <TextField class="input" ref="password"
                            hint="Nova senha"  v-model="Usuario.Senha"
                            secure="true" @returnPress="focusPassword"></TextField>
                        <StackLayout class="hr-light"></StackLayout>
                    </StackLayout>

                    <StackLayout row="6" class="input-field">
                        <TextField class="input" ref="confirmPassword"
                            hint="Confirmar nova senha" v-model="Usuario.ConfirmarSenha"
                            secure="true" @returnPress="focusConfirmPassword"
                            returnKeyType="done"></TextField>
                        <StackLayout class="hr-light"></StackLayout>
                    </StackLayout>
                </GridLayout>

                <Button text="Salvar" @tap="salvar" class="btn btn-primary btn-green"></Button>
                <Button text="Cancelar" @tap="voltar" class="btn btn-primary btn-grey"></Button>
            </StackLayout>

        </FlexboxLayout>
    </Page>
</template>

<script>
    import Home from "./Home";
    import Pedido from "./Pedido";
    import Config from "../_config/_config";
    var config = new Config();
    const { alert, confirm, prompt, login, action, inputType } = require("tns-core-modules/ui/dialogs");

    export default {
        data() {
           return { Usuario: '', Historico : true };
        },
        props: ["Historico"],
        created: function () {
            this.popularDados();
        },
        methods: {
             popularDados() {
                this.$heliarApp
                .popularDados()
                .then((response)=> {   
                    if(response.Status == true) {                      
                        this.Usuario = response.Usuario;
                        this.Usuario.Senha = '';
                    }
                    else{
                        this.alert(response.Mensagem);
                    }
                })
                .catch(() => {
                     this.alert("Erro ao encontrar seus pedidos");
                });               
            },
            voltar() {
                this.$navigateTo(Home, {
                    clearHistory: true,
                     props: {
                        Historico: this.Historico
                    }
                });
            },
            salvar() {
                this.$heliarApp
                .salvarDados(this.Usuario.Codigo, this.Usuario.Nome, this.Usuario.Email, this.Usuario.Senha, this.Usuario.SenhaAtual, this.Usuario.ConfirmarSenha)
                .then((response)=> {   
                    if(response.Status == true) {                      
                        this.alert(response.Mensagem);
                    }
                    else{
                        this.alert(response.Mensagem);
                    }
                })
                .catch(() => {
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
    };
</script>

<style>
    .sub-titulo {
        color: #1e6832;
        font-size: 18px;
    }
    .input{
        border-color:red;
    }
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
</style>