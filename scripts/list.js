var listView=document.getElementById("list-view");
var mapView=document.getElementById("map-view");
viewme=document.getElementById("view2");
viewme.onclick = function() {viewMe()};
viewmeback=document.getElementById("view1");
viewmeback.onclick = function() {viewMeBack()};

function viewMe() {
  listView.style.display="none";
  mapView.style.display="block";
}

function viewMeBack(){
  listView.style.display="flex";
  mapView.style.display="none";
}