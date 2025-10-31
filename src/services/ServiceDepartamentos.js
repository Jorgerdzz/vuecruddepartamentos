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

}