<template>
    <Page actionBarHidden="true">
        <Scrollview>
            <FlexboxLayout class="page">
                <StackLayout class="form">
                    <Image class="logo" src="~/images/logo.png"></Image>
                    <Label class="header" text="PEDIDOS"></Label>
                    <Label class="mensagem" v-if="this.retornoLogin != ''">{{retornoLogin}}</Label>
                    
                    <GridLayout rows="auto, auto, auto">
                        <StackLayout row="0" class="input-field">
                            <TextField class="input" hint="Login"
                                :isEnabled="!processing" keyboardType="email"
                                autocorrect="false" autocapitalizationType="none"
                                v-model="user.email" returnKeyType="next"
                                @returnPress="focusPassword"></TextField>
                            <StackLayout class="hr-light"></StackLayout>
                        </StackLayout>

                        <StackLayout row="1" class="input-field">
                            <TextField class="input" ref="password"
                                :isEnabled="!processing" hint="Password"
                                secure="true" v-model="user.password"
                                :returnKeyType="isLoggingIn ? 'done' : 'next'"
                                @returnPress="focusConfirmPassword"></TextField>
                            <StackLayout class="hr-light"></StackLayout>
                        </StackLayout>

                        <StackLayout row="2" v-show="!isLoggingIn"
                            class="input-field">
                            <TextField class="input" ref="confirmPassword"
                                :isEnabled="!processing" hint="Confirm password"
                                secure="true" v-model="user.confirmPassword"
                                returnKeyType="done"></TextField>
                            <StackLayout class="hr-light"></StackLayout>
                        </StackLayout>
                        <ActivityIndicator rowSpan="3" :busy="processing">
                        </ActivityIndicator>
                        <StackLayout row="3">
                    <Button :text="isLoggingIn ? 'Entrar' : 'Sign Up'"
                        :isEnabled="!processing" @tap="submit"
                        class="btn btn-primary btn-green m-t-20"></Button>
                    <Label *v-show="isLoggingIn" text="Esqueceu sua senha?"
                        class="login-label" @tap="forgotPassword()"></Label>
                    <!--<WebView v-if="!this.isRecaptcha" src="https://www.heliarexpress.com.br/recaptcha.html" @loadFinished='(e)=> {this.recaptcha(e)}' />-->
                        </StackLayout>
                    </GridLayout>
                </StackLayout>

            </FlexboxLayout>
        </Scrollview>
    </Page>
</template>

<script>
    import Home from "./Home";
    import Config from "../_config/_config";

    var config = new Config();

    export default {
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
            VerificarAutenticado(){
                 this.$heliarApp
                    .isLoggedIn()
                    .then((response)=> {
                        if(response.Status == true) { 
                            this.$navigateTo(Home, {
                                clearHistory: false
                            });
                        }
                    })
                    .catch(() => {
                        alert("Erro ao verificar autenticação do usuário");
                    });
            },
            submit() {
                if (!this.user.email && this.user.password|| !this.user.password && this.user.email) {
                    this.retornoLogin = 'Por favor, preencher login ou senha!';
                    return;
                }

                //if( !this.isRecaptcha ) {
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
                this.$backendService
                    .login(this.user)
                    .then(() => {
                        this.processing = false;
                        this.$navigateTo(Home, {
                            clearHistory: true
                        });
                    })
                    .catch(() => {
                        this.processing = false;
                        this.alert(
                            "Unfortunately we could not find your account."
                            );
                    });
            },
            login() {
                    this.$heliarApp
                    .login(this.user)
                    .then((response)=> {
                        this.processing = false;
                        
                        config.setToken('f-u5vqcIlfo:APA91bF0D825LoY0rkLJ_bq0ZptGLnO8ShM2zJVnyqDrJMpCgZE3T48AvLwz29oiZTRBmYDI_lV_6lu1JjhKU0PaB9zp5XNrsai31rXE6DdP4964zmQdMLvFb2W3OhVNUGaOAvx_lgnB');
                        config.setDeviceId('e9c55bcd-c4c2-4b52-a0d8-c831902e52fd');

                        this.$navigateTo(Home, {
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
                    defaultText: "     " + this.user.email,
                }).then(data => {                    
                     if (data.result) {
                        this.$heliarApp
                        .resetPassword(data.text.trim())
                        .then((response)=> {
                            this.alert(response.Mensagem);
                        })
                        .catch(() => {
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
    };
</script>


<style scoped>
    .page {
        align-items: center;
        flex-direction: column;
    }

    .form {
        margin-left: 30;
        margin-right: 30;
        flex-grow: 2;
        vertical-align: middle;
    }

    .logo {
        margin-bottom: 12;
        height: 90;
        font-weight: bold;
    }

    .header {
        horizontal-align: center;
        font-size: 25;
        font-weight: 600;
        margin-bottom: 70;
        text-align: center;
        color: #067A65;
    }

     .mensagem {
        horizontal-align: center;
        font-size: 16;
        font-weight: 600;
        margin-bottom: 30px;
        text-align: center;
        color: red;
    }

    .input-field {
        margin-bottom: 25;
    }

    .input {
        font-size: 18;
        placeholder-color: #A8A8A8;
    }

    .input:disabled {
        background-color: white;
        opacity: 0.5;
    }

    .btn-primary {
        margin: 30 5 15 5;
    }

    .login-label {
        horizontal-align: center;
        color: #A8A8A8;
        font-size: 16;
    }

    .sign-up-label {
        margin-bottom: 20;
    }

    .bold {
        color: #000000;
    }
</style>