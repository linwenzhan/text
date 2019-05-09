$(function(){
	var yx = 0;
	$.ajax({
		type:"get",
		url:"css/xiaoYone.json",
		async:true,
		success:function(data){
			$(".navMa-one-img").attr("src",data.nav.img[0]);
			$(".con-Sp").html(data.con.tex);
			$(".con-Sp2").html(data.conV.tit);
			$(".con-iM2").html(data.conV.conVNR);
			$("#rsU").attr("src",data.rsU);
			$(".Sp3").html(data.conV1.tit1);
			$(".Sp4").html(data.conV1.conVNR1);
			$("#gM a").html(data.nav.tex[5]);
			$("#gM").css("background","url(img/58108c1cb777d_610.jpg)20% 50% no-repeat");
			$(".footer1Im").attr("src",data.footer.img);
			$(".fotwie img").attr("src",data.footer.fotwie[0]);
			$(".fotwie p").html(data.footer.fotwie[1]);
			$(".fotjDo a span:first").html(data.footer.fotjDo[1]);
			$(".fotjDo a img:first").attr("src",data.footer.fotjDo[0]);
			$(".fotjDo a img:last").attr("src",data.footer.fotjDo[2]);
			$(".fotjDo a span:last").html(data.footer.fotjDo[3]);
			$(".fotpm span:first").html(data.footer.fotpm[0]);
			$(".fotpm span a").html(data.footer.fotpm[1]);
			$.each(data.nav.tex, function(i,t) {$(".navA:eq("+(i)+")").html(t);});
			$.each(data.con.imgo, function(i,t) {$(".con-iM img:eq("+(i)+")").prop("src",t);});
			$.each(data.lon.img, function(i,t) {$(".lon ul li img:eq("+i+")").attr("src",t);});
			$.each(data.lon.tex, function(i,t) {$(".lon ul li a:eq("+i+")").html(t)});
			$.each(data.lon.tex2, function(i,t) {$(".lon ul li p:eq("+i+")").html(t)});
			$.each(data.footer.tex, function(i,t) {$(".tit:eq("+i+")").html(t);});
			$.each(data.footer.tex2, function(i,t) {$(".footCf div p a:eq("+i+")").html(t)});
			$.each(data.footer.fothm, function(i,t) {$(".fothm p:eq("+i+")").html(t);});
			$.each(data.navDis.tex, function(i,t) {$(".navDis-con").append($("<div class='navDisR'><img class='navDisIm  nav"+i+"' src="+data.navDis.img[i]+"><div class='navDisTx'>"+t+"</div></div>"));});
			$.each(data.nav.navDm.txt, function(i,t) {$("#navDm div a:eq("+i+")").html(t)});
			$.each(data.nav.navDm.img, function(i,t) {$("#navDm div img:eq("+i+")").attr("src",t);});
		}
	});
	$("a").on("mousemove",function(){var yx = $(this).css("color");$(this).css("color","rgb(217, 23, 72)");}).on("mouseout",function(){$(this).css("color",yx);});
	$("#navYc").on("mousemove",function(){$(".navDis").css("display","block");$(".navDis").on("mousemove",function(){$(this).css("display","block");}).on("mouseout",function(){$(this).css("display","none");});}).on("mouseout",function(){$(".navDis").css("display","none");});
	$("#gM").on("mousemove",function(){$("#navDm").css("display","block");$("#navDm").on("mousemove",function(){$(this).css("display","block");}).on("mouseout",function(){$(this).css("display","none");});}).on("mouseout",function(){$(".navDis").css("display","none");});
});


