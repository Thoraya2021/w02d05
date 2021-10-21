$("p").css("color","white")
$(".page").css("font-size","30px")

// $(".inp1").on ("click" , addfun)






const toDos = [{name:"eat",iscompleted:false}]
const render =()=>{
    toDos.forEach((element,i )=> {

    $(".mylist").append(`<li>${element.name}</li>`)

    })
    

}


render()




addToList ()


$("#addBtn").click(addToList)

