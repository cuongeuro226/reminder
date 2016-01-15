// UI
$(document).ready(function(){
					   
	// resize
	$(window).load(function() {
			changeUI();
	});
	// resize
	$(window).afterresize(function() {
			changeUI();
	});
	 
	
	function changeUI(){
		setPosMenuInLeft();
		setPosSortInRight();
		setHeightFormAddTask();
		setHightContentInCenter();
		$('body').css('height',$(window).height()+"px");
	}
	// set position menu-in-left
	function setPosMenuInLeft(){
		//pos
		var itop  = (parseFloat($(".head").css('height')) * parseFloat($(".head").parent().css('height'))  )/100 ; 
		$('.menu-in-left').css('top',itop);	
		//height
		var h_html = $('html').height();
		var h_top = $('.head').height();
		var h_me = h_html-itop;
		$('.menu-in-left').css('height',h_me+"px");

	}
	// set position sort-in-right
	function setPosSortInRight(){
		//pos
		var itop  = $('.head').css('height');
		$('.sort-in-right').css('top',itop);	

		//height
		var h_html = $('html').height();
		var h_top = $('.head').height();
		var h_me = h_html-h_top;
		//$('.sort-in-right').css('height',h_me+"px");
	}
	// set position sort-in-right
	function setHeightFormAddTask(){
		//pos

		$('.content-form-add').css('max-height',$('html').height()/2+"px");	

	 

	}
	// set position sort-in-right
	function setHightContentInCenter(){
		//pos
		//pos
		var itop  = (parseFloat($(".head").css('height')) * parseFloat($(".head").parent().css('height'))  )/100 ; 

		//$('.content-in-center').css('margin-top',itop);
		//height
		var itophtml  = $('html').height();
		var he = itophtml-itop;
		$('.content-in-center').css('height',he+"px");	

	}
});









// event
document.addEventListener("deviceready", onDeviceReady, false);

 
function onDeviceReady() {
	// notice when loadding complete
	noticeWhenLoadingComplete();
	// set focus or not focus
	$(document).mouseup(focusoutSetting);
	$(document).hover(focusoutSetting);
	
	// click button setting
	$('.buttton-setting').click(clickSetting);
	// click button sort
	$('.buttton-sort').click(clickSort);
	// click button add task
	$('.buttton-add').click(clickAdd);
	// click btn huy
	$('#btnHuy').click(clickHuy);
	// click btn dong y
	$('#btnDongy').click(clickDongy);
	// affect btn in leftclick
	$('.btn-left').click(btnLeftClick);
	// click button
	$('.btnedit').on('click',btnEditclick());
	
}

// function api
function noticeWhenLoadingComplete(){
	var checkAcount= 1;
	if(checkAcount===null)
	{
	}
	else
	{
		// load data
		$('.login').fadeIn(600,function(){
										 	myVar = setTimeout(function(){
																			clearTimeout(myVar);
																			loadAfterlogin();
																			},1500);
																		
										 })
		
		// main home
/*		myVar = setTimeout(function(){
								clearTimeout(myVar);
								$('.notice-box').fadeOut("slow",function(){$('.notice-box').css('display','none')});
								$('.login').fadeOut("slow",function(){$('.login').css('display','none')});
								$('.after-load').fadeIn("slow",function(){$('.after-load').css('display','block')});
								},700)*/	
	}
	
	
	

	
	}
// load after login
function loadAfterlogin(){
	$('.login').fadeOut(100,function(){
										$('.login').css('display','none');
										// create  or open database 
										var db = window.openDatabase("Remind", "1.0", "remind", 200000);
										db.transaction(loadAllTask, errorloadAllTask);	
										//display after login
										$('.after-load').fadeIn("slow",function(){$('.after-load').css('display','block')});
									  }); }
// funtion process
// Cclick setting
function clickSetting(){

	//ui
	$('.buttton-setting').fadeOut(200,function(){$('.buttton-setting').fadeIn(200)});
	// process
	if($('.menu-in-left').css("display")== "none")
	{
 
		var l = $('html').width()/20;
		$('.menu-in-left').css("display","block");
		$('.menu-in-left').animate({left: l+"px"},100,function(){
															   $('.menu-in-left').animate({left: "0px"},50);
															   });
	}
	else
	{
	
		if($('.menu-in-left').css("display")== "block")
		{
			var l = $('html').width()/20;
			//alert(l);
			var ileft = $('.menu-in-left').css("width");

			$('.menu-in-left').animate({left: "0px"},50,function(){
																	$('.menu-in-left').animate({left: "-"+ileft},100,function(){
																															  $('.menu-in-left').css("display","none");}
																															  );	
																		  })
			
		}
	}}
// Cclick setting affect
function btnLeftClick(){
	var wid  = $(this).width();
	$(this).off('click');
	$(this).animate(
					{width:wid/2},100,"linear",function()
														{
															$(this).animate(
																			{width: wid},100,"linear",function()
																												{
																													$(this).click(btnLeftClick)
																												}
																			)
														});
					
		  }
//click sort
function clickSort(){
	//ui
	$('.buttton-sort').fadeOut(200,function(){$('.buttton-sort').fadeIn(200)});
	// process
	if($('.sort-in-right').css("display")== "none")
	{
		var l = $('html').width()/20;
		$('.sort-in-right').css("display","block");
		$('.sort-in-right').animate({right: l+"px"},100,function() {
																 $('.sort-in-right').animate({right: "0px"},50);
																 });

	}
	else
	{
		if($('.sort-in-right').css("display")== "block")
		{
			var iright = $('.sort-in-right').css("width"); 
			$('.sort-in-right').animate({right: "-"+iright},100,function(){
																		 $('.sort-in-right').css("display","none");
																		 });
			 
		}
	}}
//change focus setting
function focusoutSetting(e){
		
		// set focus menu in left
		setfocusMenuInLeft(e);
		// set focus sort in right
		setfocusSortInRight(e);

	}
// set focus sort 
function setfocusMenuInLeft(e){
		var container = $(".menu-in-left");
		if (container.has(e.target).length === 0) {
			if($('.menu-in-left').css("display")== "block")
			{
			var ileft = $('.menu-in-left').css("width"); 
			$('.menu-in-left').animate({left: "-"+ileft},function(){
																  $('.menu-in-left').css("display","none");
																  });
			}	
		}	}

function setfocusSortInRight(e){
		var container = $(".sort-in-right");
		if (container.has(e.target).length === 0) {
			
			if($('.sort-in-right').css("display")== "block")
			{
				var iright = $('.sort-in-right').css("width"); 
				$('.sort-in-right').animate({right: "-"+iright},function(){
																		 $('.sort-in-right').css("display","none");
																		 });
				 
			}
		}}

function clickAdd(){
	$('.form-add').fadeIn(function(){$('.form-add').css('display','table')});
	$('.content-in-center').css('display','none');
	$('.sort-in-right').off('click');
	$('.menu-in-left').off('click');}

function backGoHome(){
	//
	$('.form-add').fadeOut(function(){
									$('.content-in-center').fadeIn(function(){
																			$('.content-in-center').css('display','block');
																			});
									$('.form-add').css('display','none');
									});		
	// click button setting
	$('.buttton-setting').on("click");
	// click button sort
	$('.buttton-sort').on("click");}

function displayNotice(text,index){
	if(index==1)
	{
		$('.notice-box div').addClass('alert-info');
	}
	else
	{
		
			$('.notice-box div').addClass('alert-danger');
		
	}
	
$('.notice-box div').html(text)
			$('.notice-box').fadeIn(function(){
											 $('.notice-box').css('display','block'); 
											 myVar = setTimeout(function(){
																			clearTimeout(myVar);
																			$('.notice-box').fadeOut(100,function(){
																												 $('.notice-box').css('display','none'); 
																												 });
																			},1500); 
											 });}

function clickHuy(){
	
	backGoHome();}

function clickDongy(){
	// create database 
	if($('#date').val().trim().length==0||$('#loop').val().trim().length==0||$('#time').val().trim().length==0||$('#text').val().trim().length==0)
	{
			displayNotice('Nhập đầy đủ nội dung để hoàn thành việc thêm mới 1 nhiệm vụ! ',-1);
	}
	else
	{
		// xu ly ds
		var db = window.openDatabase("Remind", "1.0", "remind", 200000);
		db.transaction(function(tx) {
									tx.executeSql('select * from tabledata', [], insert_data, insertError);
	
									}, insertError);
		
		//xu ly ui
		backGoHome();
		 
	}}

function btnEditclick(){
	//alert(1);
}
	
function insert_data(tx, results){
			// insert
			var len = parseInt( results.rows.length)+1;
			tx.executeSql('INSERT INTO tabledata(id ,date,loop,time,text,deleted,isring) VALUES ("'+len+'","'+$('#date').val()+'","'+$('#loop').val()+'","'+$('#time').val()+'","'+$('#text').val()+'","'+0+'","'+0+'")',[],insertSuccess($('#date').val(),$('#loop').val(),$('#time').val(),$('#text').val()),insertError);
			
	}
	
function insertSuccess(date,loop,time,text){
	displayNotice('Tạo mới thành công',1);
	//// refrest
	refreshListTask(date,loop,time,text);}

function insertError(err){
	displayNotice('Tạo mới không thành công! mã lỗi '+er.code,-1);}

function affectAddTask(){
	$('.affect-new').css('color','#2080a5');}

function refreshListTask(date,loop,time,text){	
	//'0'1=> no complete, and wait
	// '0'2=> prepend
	// '1'2=> append
	
	addHtmlTask(date,time,loop,text,'0','0',"affect-new");
	affectAddTask();
	//$('.task').remove();
	//var db = window.openDatabase("Remind", "1.0", "remind", 200000);
	//db.transaction(queryDb, errorDb);
	}

function addHtmlTask(date,time,loop,text,index,flag,cl){

		
		if(index=="1")
			{
				complete =" complete";
				wait =" non-wait";
				
			}
		else
			{
				wait =" wait";
				complete =" non-complete";
				
			}
	var  source =		"<div class='task "+cl+"'>"+
								"<div class='text-top'>"+
									   " <div class='time'><span class='glyphicon glyphicon-time' aria-hidden='true'></span> "+date+"-"+time+
										"</div>"+
										"<div class='loop'><span class='glyphicon glyphicon-refresh' aria-hidden='true'  ></span>  "+loop+
										"</div>"+
										"<div class='text'><span class='glyphicon glyphicon-hand-right' aria-hidden='true'>  "+text+"</span></div>"+
							  
								 "</div>"+
								 "<div class='button'>"+
												<!-- button add task-->
												"<img  class='btn btnedit'  style='margin-top:10px'   src='./img/edit.png' width='50px' height='width' alt='edit'> "+
											   <!--end button add task-->
											   <!-- button add task-->
												"<img class='btn '  style=' margin-top:10px' id='bt-delete' ' src='./img/delete.png' width='50px' height='width' alt='delete'> "+
											   <!--end button add task-->
											   <!-- button add task-->
												"<img  class='btn "+complete+" '  style='margin-top:10px' id='bt-add'  src='./img/complete.png' width='50px' height='width' alt='complete'> "+
											   <!--end button add task-->
											   <!-- button add task-->
												"<img class='btn "+wait+"'  style='margin-top:10px' id='bt-add' ' src='./img/wait.png' width='50px' height='width' alt='wait'> "+
											   <!--end button add task-->
								  "</div>"+
								
								
							"</div>"
		if(flag==1)
		{
		$('.content-in-center').append(source);
		}
		else
		{
			
			$('.content-in-center').prepend(source);
			//$('.content-in-center').animate({scrollTop(0)},10);
 
		}}

function Loadata(tx, results) {
 
	var len = results.rows.length;
 
    for(var i=0; i<parseInt( results.rows.length); i++)
	{
		
		var index =results.rows.item(i).isring;
		var date =results.rows.item(i).date;
		var time =results.rows.item(i).time;
		var loop = results.rows.item(i).loop;
		var text=results.rows.item(i).text;
		//1=>apped
		addHtmlTask(date,time,loop,text,index,1,"");
				
		
		
		

		
	}}

function successloadAllTask(tx, results) {
	Loadata(tx, results);
	displayNotice('Load dữ liệu thành công !',1);}
   
function errorloadAllTask(err) {
    displayNotice('Lỗi không load đưuọc CSDL ! Mã lỗi: ' + err.code ,-1);}
	
function loadAllTask(tx) {
	//tx.executeSql('drop table if exists tabledata');
    tx.executeSql('CREATE TABLE IF NOT EXISTS tabledata (id unique,date,loop,time,text,deleted,isring)');
    //tx.executeSql('INSERT INTO tabledata(id ,date,loop,time,text,deleted,isring) VALUES ("7","20-12-2015","5","20:05","le thanh nhan","1","0")');
    //tx.executeSql('INSERT INTO tabledata(id ,date,loop,time,text,deleted,isring) VALUES ("8","22-12-2015","6","21:05","le  nhan","0","0")');
    //tx.executeSql('INSERT INTO tabledata(id ,date,loop,time,text,deleted,isring) VALUES ("9","24-12-2015","6","22:05"," thanh nhan","0","1")');
	tx.executeSql('select * from tabledata',[],successloadAllTask,errorloadAllTask);
	}
	
