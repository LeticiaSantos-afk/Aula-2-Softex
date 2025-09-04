  class moto{
public marca : String   
    public ano : string
    public cor : string
    public modelo : string
    public placa : string

  constructor(marca: string, ano: string, cor: string, modelo: string, placa: string){
    this.marca = marca;
    this.ano = ano;
    this.cor = cor;
    this.modelo = modelo;
    this.placa = placa;
  }
 ligar(){
    console.log("pratatata")
 }    
desligar(){
    console.log("pipipi")
}    

  }

  const moto1 = new moto('honda' , '2025', 'preta', 'CB500', 'LYL010')
  const moto2 = new moto('yamara', '2015', 'azul', 'titan', 'pch202')
  const moto3 = new moto('pcx', '2019', 'verde', 'bros', 'QPZ942')

  moto1.ligar();
  moto1.desligar();
  console.log(moto1.ano);

  moto2.ligar();
  moto2.desligar();
  console.log(moto2);

  moto3.ligar();
  moto3.desligar();
  console.log(moto3);
  

