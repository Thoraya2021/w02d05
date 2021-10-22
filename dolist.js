
$("p").css("color","white")
$(".page").css("font-size","50px")

let list = [];
$("#addBtn").click(() => {
  if ($("input[type=text").val().trim().length > 0) {
    list.push({ item: $("input[type=text").val(), isCompleted: false });
    renderList();
  }
});

const renderList = () => {
  $("ul").html("");
  list.forEach((element, i) => {
    $("ul").append(
      `<li id='${"li" + i}'><span id='${
        "allSpan" + i
      }'><span onclick='completed(${i})' id='${"element" + i}'>${
        element.item
      }  </span><span id='ed' onclick='edit(${i})'>Edit</span> <span id='ed' onclick='remove(${i})'>Remove</span> </span></li>`
    );
    if (list[i].isCompleted) {
      $("#element" + i).css("text-decoration", "line-through");
    }
  });
  let count = list.filter((item) => item.isCompleted === false).length;
  $("#count").text(count);
};

const edit = (i) => {
  $("#allSpan" + i).hide();
  $("#li" + i).append(`<input type='text' id='ed' value='${list[i].item}'>`);
  $("input#ed").change((e) => {
    list[i].item = e.target.value;
    renderList();
  });
};

const remove = (i) => {
  console.log("trigered");
  list.splice(i, 1);
  renderList();
};

const completed = (i) => {
  list[i].isCompleted = !list[i].isCompleted;
  renderList();
};

$(".clear1").click(() => {
  list = [];
  renderList();
});

$(".clear2").click(() => {
  let completedList = list.filter((item) => {
    return item.isCompleted === false;
  });
  list = completedList;
  renderList();
});
