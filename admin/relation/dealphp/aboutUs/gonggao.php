<?php

date_default_timezone_set('PRC');
$atime=date("Y-m-d H:i:s"); 
//当前代码是直检测是否上传文件
if(isset($_POST["atitle"]) && isset($_POST["ades"]) && isset($_POST["atime"])){
	$title=$_POST["atitle"];
	$year=$_POST["atime"];
	
	if(isset($_FILES["apdf"])){
	
		include_once "../tools/moveUp.class.php";
		$mo=new moveUp();
		$mo->move($_FILES["apdf"],$_POST["atime"]);
		
		$str=$_SESSION["str"];
		
include_once "../tools/sql.class.php";
$sq=new sql();
$sql="INSERT INTO `relation`( `rtitle`, `rpath`, `rshijian`, `ryear`) VALUES ('".$title."','".$str."','".$atime."','".$year."')"; 
$sq->cha($sql);

		//$mo->shuchu();
	}else{
		echo "您尚未上传PDF文件";
	}
	
	
	
}else{
	echo "no";
}
?>