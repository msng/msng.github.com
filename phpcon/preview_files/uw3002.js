
function changeSalesStatus(target) {

	var dNo = $("#eventDetailNo" + target + " option:selected").val();
	$("#eventDetailNoMain").val(dNo);
	$("#eventDetailNoSub").val(dNo);

	if(dNo == ""){
		var tickets = document.getElementsByName("event0");
		for(i = 0; i < tickets.length; i++){
			ticketId = tickets[i].value;
			$("#date" + ticketId).html("&nbsp;");
			$("#ticketLink" + ticketId).removeClass("ol");
			$("#ticketLink" + ticketId).removeClass("bac");
			$("#ticketLink" + ticketId).removeClass("btnBeforeReceptS"); // 受付前
			$("#ticketLink" + ticketId).removeClass("btnApplyEventS"); // チケットを申し込む
			$("#ticketLink" + ticketId).removeClass("btnFinishReceptS"); // 受付終了
			$("#ticketLink" + ticketId).removeClass("btnSoldOutS"); // 完売
			$("#ticketLink" + ticketId).removeClass("btnDisable");
			$("#ticketLink" + ticketId).removeClass("btn");
		}
	}else{
		var tickets = document.getElementsByName("event" + dNo);
		for(i = 0; i < tickets.length; i++){
			ticketId = tickets[i].value;
			dateVal = document.getElementsByName("event" + dNo + "Date")[i].value;
			statusVal = document.getElementsByName("event" + dNo + "Status")[i].value;
			$("#date" + ticketId).html(dateVal + "までお申し込みが可能です。");
			// スタイル制御
			$("#ticketLink" + ticketId).removeClass("btnBeforeReceptS"); // 受付前
			$("#ticketLink" + ticketId).removeClass("btnApplyEventS"); // チケットを申し込む
			$("#ticketLink" + ticketId).removeClass("btnFinishReceptS"); // 受付終了
			$("#ticketLink" + ticketId).removeClass("btnSoldOutS"); // 完売
			$("#ticketLink" + ticketId).removeClass("btnDisable");
			$("#ticketLink" + ticketId).removeClass("btn");
			// チケットステータスでスタイルを制御(リピートが対象なので抽選は除外)
			if (statusVal == "販売中") {
				$("#ticketLink" + ticketId).addClass("btnApplyEventS");
				$("#ticketLink" + ticketId).addClass("btn"); // 受付中
			}else if (statusVal == "販売前") {
				$("#ticketLink" + ticketId).addClass("btnBeforeReceptS");
				$("#ticketLink" + ticketId).addClass("btnDisable"); // 受付前
			}else if (statusVal == "販売終了") {
				$("#ticketLink" + ticketId).addClass("btnFinishReceptS");
				$("#ticketLink" + ticketId).addClass("btnDisable"); // 受付終了
			}else if (statusVal == "完売") {
				$("#ticketLink" + ticketId).addClass("btnSoldOutS");
				$("#ticketLink" + ticketId).addClass("btnDisable"); // 完売
			}
		}
	}

}
