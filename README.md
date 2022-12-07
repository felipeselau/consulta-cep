# Consulta-cep
--- 
![code snippet](assets/img/Snap.png)

---

## A simple application that uses JS to consume an API 



### Technologies Used:

- **HTML <img src="assets/img/png/html.png" width="auto" height="30">**
- **CSS <img src="assets/img/png/css.png" width="auto" height="30">**
- **JS <img src="assets/img/png/js.png" width="auto" height="30">**

### How does it work?
Using the property [Fetch](https://developer.mozilla.org/pt-BR/docs/Web/API/Fetch_API) from javascript to consume [ViaCep API](https://viacep.com.br/), and, only with a Brazillian Zipcode, it returns:

- Street name
- District name
- City name 
- State name

--- 
## The Application itself:

<p style="text-align: center"><img src="assets/img/app1.png"></p>

#### At first, the user has 2 options:

- when it opens the app, to type a **zipcode** and then **search** for it. 

- if it tries to search a **blank zipcode**, the application returns an alert sayin "CEP Inválido"(invalid Zipcode!)


#### When the user clicks on "Pesquisar"(Search) the app then returns:

<p style="text-align: center"><img src="assets/img/app2.png"></p>