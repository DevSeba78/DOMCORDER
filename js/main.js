
let table= document.getElementById("table")
const body = document.body
body.setAttribute("style","background-color: #D5DBDB")

let btnG = document.getElementById("btnG")


class Prenda {
    constructor(tipo, marca, costo, stock, disp){
    
        this.tipo = tipo;
        this.marca = marca;
        this.costo = costo;
        this.stock = stock;
        this.disp = disp;
    }
    

}

let Prendas= []

function cargarStock() {
    
    
    let tipo = document.getElementById("tipo").value;
    let marca = document.getElementById("marca").value;
    let costo = document.getElementById("costo").value;
    let stock = document.getElementById("stock").value;
    let disp = document.getElementById("disp").value;

   

    let paso1 = JSON.parse(localStorage.getItem("Prendas"))

   
    if (localStorage.getItem("Prendas")!= null) {
        let id = paso1.length + 1
        let producto = new Prenda (id, tipo, marca, costo, stock, disp);   //        OBJETO
        paso1.push(producto)                                           //         ARRAY

        localStorage.setItem("Prendas", JSON.stringify(paso1))      //          GUARDAMOS DATOS EN EL NAVEGADOR
    }else{
        localStorage.clear()
        let id = 1
        let producto = new Prenda (id,tipo, marca, costo, stock, disp);   //        OBJETO
        Prendas.push(producto)
        localStorage.setItem("Prendas", JSON.stringify(Prendas))      //          GUARDAMOS DATOS EN EL NAVEGADOR
    }
    alert(`Cargaste ${tipo}, ${marca}, ${costo}, ${stock}, ${disp}`)
    
}



/*
conten.setAttribute("class","container-fluid")

let form = document.getElementById("formulario")
    form.setAttribute("action"," ")
    form.setAttribute("class","row")

let labelT = document.createElement("label")
    labelT.setAttribute("for", " ")
    labelT.textContent="Tipo: "
    let inputT = document.createElement("input")
        inputT.setAttribute("Type", "text")
        inputT.setAttribute("id","tipo")
        inputT.setAttribute("placeholder", "Tipo")



let labelM = document.createElement("label")
    labelM.setAttribute("for", " ")
    labelM.textContent="Marca: "
    let inputM = document.createElement("input")
        inputM.setAttribute("Type", "text")
        inputM.setAttribute("id","marca")
        inputM.setAttribute("placeholder", "Marca")
                        
let labelC = document.createElement("label")
    labelC.setAttribute("for", " ")
    labelC.textContent="Costo: "
    let inputC = document.createElement("input")
        inputC.setAttribute("Type", "Number")
        inputC.setAttribute("id","costo")
        inputC.setAttribute("placeholder", "Costo")

let labelS = document.createElement("label")
    labelS.setAttribute("for", " ")
    labelS.textContent="Stock: "
    let inputS = document.createElement("input")
        inputS.setAttribute("Type", "Number")
        inputS.setAttribute("id","stock")
        inputS.setAttribute("placeholder", "Stock")

let labelD = document.createElement("label")
    labelD.setAttribute("for", " ")
    labelD.textContent="Disponible: "
    let inputD = document.createElement("input")
        inputD.setAttribute("Type", "text")
        inputD.setAttribute("id","disp")
        inputD.setAttribute("placeholder", "Disponibilidad")

let btnG = document.createElement("button")
    btnG.setAttribute("type","button")
    btnG.setAttribute("class","btn-secundary btn-sm")
    btnG.textContent="Cargar Stock"            
                                    ;

conten.appendChild(form)


form.appendChild(labelT)
form.appendChild(labelM)
form.appendChild(labelC)
form.appendChild(labelS)
form.appendChild(labelD)
form.appendChild(btnG)
labelT.appendChild(inputT)
labelM.appendChild(inputM)
labelC.appendChild(inputC)
labelS.appendChild(inputS)
labelD.appendChild(inputD)
*/

function mostrar() {
    let imprimir = JSON.parse(localStorage.getItem("Prendas"))
    if (imprimir != null) {
        imprimir.forEach(element => {
            let tabla = document.createElement("tr")
                
                let td = document.createElement("td")
                    td.setAttribute("class", "col-1")
                    td.textContent = `${imprimir.indexOf(element)}`
                    tabla.appendChild(td)
                let th1 = document.createElement("th")
                    th1.setAttribute("class", "col-2")
                    th1.textContent = `${element.tipo}`
                    tabla.appendChild(th1)
                let th2 = document.createElement("th")
                    th2.setAttribute("class", "col-2")
                    th2.textContent = `${element.marca}`
                    tabla.appendChild(th2)
                let th3 = document.createElement("th")
                    th3.setAttribute("class", "col-2")
                    th3.textContent = `${element.costo}`
                    tabla.appendChild(th3)
                let th4 = document.createElement("th")
                    th4.setAttribute("class", "col-2")
                    th4.textContent = `${element.stock}`
                    tabla.appendChild(th4)
                let th5 = document.createElement("th")
                    th5.setAttribute("class", "col-2")
                    th5.textContent = `${element.disp}`
                    tabla.appendChild(th5)
                /*let td1 = document.createElement("td")
                    td1.setAttribute("class", "col-2")
                    tabla.appendChild(td1)*/
        
                table.appendChild(tabla)
        });
    }else{
        console.log(`Nada por cargar`);
        alert(`Nada por cargar`);
    }
    

    
}

btnG.addEventListener("click",cargarStock)
mostrar()








