/**
 * Created by zjn on 16-10-18.
 */
$(document).ready(function(){
    $("#jquery_test").click( function(event) {
        alert("start");
        var text = $("#jquery_test");
        console.log(text);
        text.text("切换文字");
 });
})
