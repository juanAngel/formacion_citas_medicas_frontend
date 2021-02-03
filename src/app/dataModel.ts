
export interface User{
    id:number;
    nombre: string;
    apellidos: string;
    usuario: string;
    clave?: string;
}


export interface Doctor extends User{
    numColegiado: string;
    pacientes:Patient[]|number[];
    citas:MedicalAppointment[]|number[];
}

export interface Patient extends User{
    NSS: string;
    numTarjeta: string;
    telefono: string;
    direccion: string;
    medicos:Doctor[]|number[];
    citas:MedicalAppointment[]|number[];
}
export interface MedicalAppointment{
    id:number;
    paciente: number|Patient;
    medico: number|Doctor;
    diagnostico: number|Diagnostic;
    fechaHora: number;
    motivoCita: string;
    attibute11: string;
}

export interface Diagnostic{
	id:number;
    valoracionEspecialista: string;
    enfermedad: string;
    cita:MedicalAppointment|number;
}
/*
export abstract class FormacionApi{
    constructor(){
    }
    public abstract getDoctor(id:number):Doctor;
    public abstract getDoctorByName(name:string):Doctor[];
    public abstract getPatient(id:number):Patient;
    public abstract getPatientByName(name:string):Patient[];


    public static getInstance():FormacionApi{
        return FormacionApiMock.getInstance();
    }
}
export class FormacionApiImp extends FormacionApi{
    public getDoctorByName(name: string): Doctor[] {
        throw new Error('Method not implemented.');
    }
    public getPatientByName(name: string): Patient[] {
        throw new Error('Method not implemented.');
    }
    constructor(){
        super();
    }
    public getDoctor(id: number): Doctor {
        throw new Error('Method not implemented.');
    }
    public getPatient(id: number): Patient {
        throw new Error('Method not implemented.');
    }
}
export class FormacionApiMock extends FormacionApi{
    public getDoctorByName(name: string): Doctor[] {
        let result:Doctor[] = []
        name = name.toLowerCase();
        for (const it of this.doctors) {
            if(it.nombre.toLowerCase().includes(name)){
                result.push(it);
            }
        }
        return result;
    }
    public getPatientByName(name: string): Patient[] {
        let result:Patient[] = []
        name = name.toLowerCase();
        for (const it of this.patients) {
            if(it.nombre.toLowerCase().includes(name)){
                result.push(it);
            }
        }
        return result;
    }
    private doctors:Doctor[] = [
        {id:0,nombre:"pepe",apellidos:"Perez Sanchez",usuario:"pepe27",clave:"",numColegiado:"z00000"},
        {id:1,nombre:"Carlos",apellidos:"Rodriguez Diaz",usuario:"carlos95",clave:"",numColegiado:"b00000"},
        {id:2,nombre:"Francisco",apellidos:"Hurtado Gonzalez",usuario:"francisco27",clave:"",numColegiado:"s00000"}
    ];
    private patients:Patient[] = [
        {id:0,nombre:"Manuel",apellidos:"Jumenez Ruiz",usuario:"manuel1",clave:"",NSS:"xxxxx",direccion:"Calle nula",numTarjeta:"123456789",telefono:"0000000"}
    ];

    constructor(){
        super();
    }
    public static getInstance():FormacionApiMock{
        return new FormacionApiMock();
    }
    public getDoctor(id:number):Doctor {
        return this.doctors[id];
    }
    public getPatient(id:number):Patient {
        return this.patients[id];
    }
}*/