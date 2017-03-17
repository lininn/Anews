<?php
session_start();
//当pdf文件上传完毕后检测并移动pdf文件
class moveUp{
	
	public function move($nfile,$ntime){
		$nfile['name']=substr($nfile['name'],strripos($nfile['name'],'.'));
        $str=md5(time());
		
		
		   function mkFolder($path)
				{
				    if(!is_readable($path))
				    {
				        is_file($path) or mkdir($path,0700);
				    }
				}
			mkFolder(dirname(dirname(dirname(__FILE__)))."/uploadPdf/$ntime");
			$_SESSION["str"]="/uploadPdf/$ntime/$str".$nfile['name'];
	move_uploaded_file($nfile['tmp_name'],dirname(dirname(dirname(__FILE__)))."/uploadPdf/$ntime/$str".$nfile['name']);
	}
	
	
	public function shuchu(){
		echo "ok";
	}
}
?>