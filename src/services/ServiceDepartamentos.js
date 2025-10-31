import Global from "@/Global";
import axios from "axios";

export default class ServiceDepartamentos{

    getDepartamentos(){
        return new Promise(function(resolve){
            let departamentos = [];
            let url = Global.urlApiDepartamentos;
            let request = "api/Departamentos";
            axios.get(url + request).then(response=>{
                departamentos = response.data
                resolve(departamentos)
            })
        })
    }

    createDepartamento(departamento){
        return new Promise(function(resolve){
            let request = "api/Departamentos";
            let url = Global.urlApiDepartamentos;
            axios.post(url + request, departamento).then(response=>{
                resolve(response)
            })
        })
    }

    findDepartamento(id){
        return new Promise(function(resolve){
            let departamento = [];
            let url = Global.urlApiDepartamentos;
            let request = "api/Departamentos/" + id;
            axios.get(url + request).then(response=>{
                departamento = response.data
                resolve(departamento)
            })
        })
    }


    updateDepartamento(departamento){
        return new Promise(function(resolve){
            let url = Global.urlApiDepartamentos;
            let request = "api/Departamentos";
            axios.put(url + request, departamento).then(response=>{
                resolve(response)
            })
        })
    }

    deleteDepartamento(id){
        return new Promise(function(resolve){
            let url = Global.urlApiDepartamentos;
            let request = "api/Departamentos/" + id;
            axios.delete(url + request).then(response=>
                resolve(response)
            )
        })
        
    }

}