document.querySelector('#add').onclick = function(){
    if(document.querySelector('#shop input').value.length == 0){
        alert("Please Enter a Task")
    }

    else{
        document.querySelector('#shop-list').innerHTML += `
            <div class="task">
                <span id="taskname">
                    ${document.querySelector('#shop input').value}
                </span>
                <button class="delete"></button>
            </div>
        `;

        var current_tasks = document.querySelectorAll(".delete");
        for(var i=0; i<current_tasks.length; i++){
            current_tasks[i].onclick = function(){
                this.parentNode.remove();
            }
        }
    }
}
