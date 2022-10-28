export class persona{
    id?: number;
    nombre: string;
    apellido: string;
<<<<<<< HEAD
    descripcion: string;
    img: string;

    constructor(nombre: string,apellido: string,descripcion: string,img: string){
        this.nombre = nombre;
        this.apellido = apellido;
        this.descripcion = descripcion;
=======
    img: string;

    constructor(nombre: string,apellido: string,img: string){
        this.nombre = nombre;
        this.apellido = apellido;
>>>>>>> 6d48d9cd62ad83a22e57cd7c8c33cdd779c26299
        this.img = img;
    }

}