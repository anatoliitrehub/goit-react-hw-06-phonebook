import sid from 'shortid';

export const addUser = ({name,number}) =>{
    return{
        type: "user/addUser",
        payload:{
            id:sid.generate(),
            name:name,
            number:number
        }
    }
}