# Readme

### APP Portal Heliar Express

Portal Heliar Express is a system developed so that Heliar franchisees can sell batteries to their end customers. The objective is to have a platform where the end customer can inform their location and vehicle model and with this information the system locates the closest franchisee that can serve the customer. This document is intended to instruct new developers on how to set up an environment for debugging and developing this application.

### Requirements
•	Visual Studio Code, version 1.54.3.
•	Git Bash
•	NativescriptView (https://nativescript-vue.org/en/docs/getting-started/installation/)
•	Nativescript (https://docs.nativescript.org/environment-setup.html)
•	Node version 12.18.4
•	Cell android
•	Cable USB

### Description of API`S

This system is divided into four views (Login.vue, Home.vue, Request.vue and Edit.vue), which consume API`S to process all APP requests, below the description of the calls that is inside the app- project > services-> heliar-app.js

-  **Method isLoggedIn()**  
A post is made, informing the token of the logged in user, the method's return is, status true/false with a respective message.

- **Method desautenticar()**  
A post is made, informing the logged device, the method's return is, status true/false with a respective message.

- **Method login(user)**
A post is made, informing the email, password, token and device, the method's return is, status true/false, message, device and if the authentication is true, the access token is also returned.

- **Method resetPassword(user)**
A post is made, informing the e-mail, the method's return is, status true/false and a respective message.

- **Method logout()** 	
This method is used to de-authenticate the system user.

- **Method register(user)**
This method is used to register the user in the system.

- **Method pedidos()**
A post is made, informing the logged device, the method's return is, true/false status, message and a list of requests.

- **Method pedidosHistorico(pedidoStatus, dataInicial, dataFinal)**
A post is made, informing the order status (optional), start date (optional), end date (optional) and the device, the method return is, true/false status, message and a list of orders.

- **Method detalhePedido(codigo)**
A post is made, informing the order code, the method's return is, true/false status, message and the order.

- **Method aceitarPedido(codigo, isAceito)**
A post is made, informing the order code, if yes/no and the device was accepted, the method's return is, status true/false, message and a status code.

- **Method recusarPedido(codigo, isAceito, result, outros)**
A post is made, informing the order code, if yes/no was accepted, device, reason and other reason, the method's return is, status true/false, message and a status code.

- **Method encerrarPedido(codigo)**
A post is made, informing the order code, status code and device, the method's return is, status true/false with a respective message.

- **Method cancelarPedido(codigo, result, outros)**
A post is made, informing the order code, status code, device, reason and other reason, the method return is, status true/false, message and a status code.

- **Method popularDados()**
A post is made, informing the device, the method's return is, true/false status, message and user data.

- **Method salvarDados ()**
A post is made, informing the Code, name, e-mail, password, current password and confirm password, the method's return is, status true/false with a respective message.

**Obs:** The API`S is in the HeliarExpress project in the “Framework.Base” solution, “VM2.UI” project in the ControllersApiMobile folder.	

### Debugging the project
To run the APP, it is necessary to connect the USB to the PC/Notebook and the android cell phone, open the /app folder and select the Git Bash Here item.

A command prompt will open, in it we need to type the following command **“tns run android”**, with this, the application **“Heliar Express”** will be installed on your cell phone, we can make changes to the visual code and view APP modifications on mobile.

To debug the project, we must keep the URL registered in the variable _apiUrl 
equal to http://teste.heliarexpress.com.br/api/ 
inside the folder /app/_config/_config.js, therefore, the orders viewed will all be from the test base.

### Publishing an APP version
To generate a publication, it is necessary to change the version of android:versionCode and android:versionName which is in the AndroidManifest.xml file, the new version number cannot be repeated, so the ideal is always to add 1 more for the new version , example:

**Previous version:** android:versionCode="20010" android:versionName="2.1.0"
**New version:** android:versionCode="20011" android:versionName="2.1.1" 

It is necessary to change a URL registered in the variable _apiUrl for https://heliarexpress.com.br/api/ 
inside the folder /app/_config/_config.js, therefore, the orders viewed will all be from the production base.

With that, we are just a few steps away from generating the package's publish and uploading it to the store, let's again open the /app folder, as shown in the image below, and select the Git Bash Here item.

At the command prompt, we need to type the item **“tns build android --release --key-store-path C:/ProjetosGit/HeliarAPP/app/heliar.jks --key-store-password 123456 --key-store-alias heliarlojistadev --key-store-alias-password 123456 --compileSdk 29”**

Obs: To generate the package it is necessary to have the file **“heliar.jks”** 
in the folder **“C:\projetosmobile\heliarexpress-app\app”**, this file can be found inside the project's /app folder.
After running the above command at the prompt, a file called “app-release.apk” (follows the example of the file generated in the /app/publish/app-release.apk folder), this file must be updated in the store https://play.google.com/apps . 

