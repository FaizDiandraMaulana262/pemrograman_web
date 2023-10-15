let arrActivity = [];
let count = 0;

onClickAdd = () => {
  let inputActivity = document.getElementById("inputActivity");
  arrActivity.push(inputActivity.value);
  inputActivity.value = "";
  getListActivity();
};

onClickDelete = (id) => {
    let activityList = document.getElementById("activityList");
    let form = document.getElementById(id)
    activityList.removeChild(form.parentElement)
};

onClickUpdate = (id) => {
    let text = document.getElementById("text"+id)
    let input = prompt("Edit : ", text.textContent);

    text.textContent = input
}

getListActivity = () => {
  let activityList = document.getElementById("activityList");
  let form = document.createElement("div");
  arrActivity.forEach(function (e) {
    form.innerHTML = `<div id="${count}" class="card my-2"> <div class="container"> <div class="row align-items-center"> <div class="col-9"> <h5 id="text${count}" class="ms-3">${e}</h5> </div> <div class="col-3 "> <button class="btn btn-success my-1 mx-1" onclick="onClickUpdate(${count})"><i class="fa-solid fa-check"></i></button> <button class="btn btn-danger my-1 mx-1" onclick="onClickDelete(${count})"><i class="fa-solid fa-trash"></i></button> </div> </div> </div> </div>`;
    activityList.appendChild(form);
  });

  count = count + 1;
};
