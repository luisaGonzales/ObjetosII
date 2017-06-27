var assert = require ("assert");
//Ejercicio 1
function ejercicio1 (numInicial, numFinal){
  const Objeto = {
    inicio : numInicial,
    fin : numFinal,
    suma : function(){//Puede recibir strings
      var resultado = 0;
      if ((!isNaN(this.inicio)) && (!isNaN(this.fin))){
        for ( var i = parseInt(this.inicio); i <= parseInt(this.fin); i++){
          resultado += i;
        }
        return resultado;
      }
      else { // En caso se tenga nada como segundo parámetro
        return resultado = this.inicio;
      }
    }
  }
  return Objeto.suma();
}

//Ejercicio 2
function Ejercicio2 (nombre, edad, ocupación, género){
  this.nombre = nombre;
  this.edad = edad;
  this.ocupación = ocupación;
  this.género = género;
  this.mensaje = function(){ //No caseSensitive
    var resultado = "";
      if ((this.edad > 17) && (this.género.toLowerCase() == "femenino") &&
      ((this.ocupación.toLowerCase() == "estudiante laboratoria") || (this.ocupación.toLowerCase() == "web developer"))){
        resultado = "You're Awesome";
      }
      else {
        resultado = "Upsiii";
      }
    return resultado;
  }
}

//Ejercicio 3
function ArrPropiedades (){
  this.stringTotal = "";
  this.stringUno = "propiedad";
  inicio = 1;
  this.string = function(array){
    for (var i = 0; i < array.length ; i++){
     this.valores = array[parseInt(i)];
     this.stringTotal += this.stringUno + inicio + "-->" + this.valores + ";";
      inicio++;
    }
    return this.stringTotal.slice(0, -1); //Quitar último ;
  }
}
function ejercicio3(array){ //Nueva función para el arreglo
  var arreglo = new ArrPropiedades ();
  return arreglo.string(array);
}

//Ejercicio 4
function Ejercicio4 (nombre, apellido, edad, género, ciudad, país){
    this.nombre = nombre,
    this.apellido = apellido,
    this.edad = edad,
    this.género = género,
    this.ciudad = ciudad,
    this.país = país,
    this.ficha = function(){ //Coloca Mayúsculas en nombres propios
      return ("Nombre: " + (this.nombre.charAt(0).toUpperCase() + this.nombre.slice(1)) + " " +
      (this.apellido.charAt(0).toUpperCase() + this.apellido.slice(1)) + ". Edad: " + this.edad +
        ". País: " + this.país.charAt(0).toUpperCase() + this.país.slice(1));
    }
}

//Pruebas Unitarias
describe("Ejercicios con Objetos 2", function(){
  describe("Ejercicio1", function(){
    it("Prueba 1 y 10", function(){
      assert.equal(55, ejercicio1(1, 10));
    });
    it("Prueba 1 y string 10", function(){
      assert.equal(55, ejercicio1(1, "10"));
    });
    it("Prueba de 5 y nada", function(){
      assert.equal(5, ejercicio1(5));
    });
    it("Prueba string 5 y string 10", function(){
      assert.equal(45, ejercicio1("5","10"));
    });
  });
  describe("Ejercicio2", function(){
    var tamara = new Ejercicio2 ("Tamara", 22, "Estudiante Laboratoria", "Femenino");
    it("Prueba Tamara", function(){
      assert.equal("You're Awesome", tamara.mensaje());
    });
    var brandon = new Ejercicio2 ("Brandon", 25, "WEB DEVELOPER", "Masculino");
    it("Prueba Brandon", function(){
      assert.equal("Upsiii", brandon.mensaje());
    });
    var karla = new Ejercicio2 ("Karla", 16, "Arquitecta", "FEMENINO");
    it("Prueba Karla", function(){
      assert.equal("Upsiii", karla.mensaje());
    });
    var candy = new Ejercicio2 ("Candy", 18, "WEB DEVELOPER", "FEMENINO");
    it("Prueba Candy", function(){
      assert.equal("You're Awesome", candy.mensaje());
    });
  });
  describe("Ejercicio3", function(){
    it("Prueba [6,5,4,3,2,1]", function(){
      assert.equal("propiedad1-->6;propiedad2-->5;propiedad3-->4;propiedad4-->3;propiedad5-->2;propiedad6-->1", ejercicio3([6,5,4,3,2,1]));
    });
    it("Prueba [6,string 5,4,3,2,1]", function(){
      assert.equal("propiedad1-->6;propiedad2-->5;propiedad3-->4;propiedad4-->3;propiedad5-->2;propiedad6-->1", ejercicio3([6,"5","4","3",2,1]));
    });
    it("Prueba menos valores", function(){
      assert.equal("propiedad1-->5;propiedad2-->4;propiedad3-->3", ejercicio3(["5","4","3"]));
    });
  });
  describe("Ejercicio4", function(){
    var blanca = new Ejercicio4 ("Blanca", "Pérez", 19, "Femenino", "Santiago", "Chile");
    it("Prueba Blanca", function(){
      assert.equal("Nombre: Blanca Pérez. Edad: 19. País: Chile", blanca.ficha());
    });
    var luisa = new Ejercicio4 ("luisa", "gonzales", 22, "Femenino", "Arequipa", "perú")
    it("Prueba Luisa", function(){
      assert.equal("Nombre: Luisa Gonzales. Edad: 22. País: Perú", luisa.ficha());
    });
  });
});
