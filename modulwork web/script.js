"use strict"
//variant 10




/*tests 
10. 2) promt
20. 3) 4
30. 2) 305,36,15,2,1
40. немає правильної відповіді(number)
45. 1) посилання на глобальний об'єкт.
*/

//знайти суму елементів які знаходяться після елемента із значенням більшим ніж 78

let value = 78;
let arr = [2,5,10,78,10,10,10,10];
let index = arr.indexOf(value) + 1;
let sum = 0;

for (let i = index; i < arr.length; i++){
    sum += arr[i];
}

console.log(sum);

//////////////




/* 
Форма авторизації з автозаповненням пароля. При створенні об”єкта у
конструктор передаємо набори логінів і відповідних паролів. Користувач
вводить логін. Якщо у об”єкті зберігається логін, то автоматично вставити

пароль у друге поле вводу
*/

class Form {
    constructor (logs, pass){
        this.logs = [...logs];
        this.pass = [...pass];
    }

    show (){
        let log = document.getElementsByClassName("login")[0].value;
        

        let item ;

       
        for (let i = 0; i < this.logs.length; i++){
            if ( log == this.logs[i]){
                item = this.pass[i];
                document.getElementById('pass').innerHTML = item;
                
                
            }
            else{
                continue;
            }
        }    
        
            
           
     
       
    }


}


let logins = ["Vio","Yana","Jess"];
let passwords = ["255","168","333"];


let clas = new Form(logins,passwords);

//виклик функції прописаний в html


 






