<?php
include_once "../tools/sql.class.php";
$sq=new sql();
if(isset($_GET["wd"])){
	$sql="select distinct ryear from relation group by ryear order by rshijian desc";
}else{
	
	
	if(isset($_GET["year"])){
		$year=intval($_GET["year"]);
	}else{
		$year=2017;
	}
	
	
if(isset($_GET["zhi"])){
	$zhi=intval($_GET["zhi"])*10;
$sql="select rpath,rshijian,rtitle from relation where ryear=$year order by rshijian desc limit ".$zhi.",10";	
}else{
	$sql="select rpath,rshijian,rtitle from relation where ryear=$year order by rshijian desc limit 0,10";
}	
}
$sq->chajson($sql);
//
?>