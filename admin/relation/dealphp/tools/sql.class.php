<?php
class sql{
  public $host="localhost";
	 public $nuser="root";
	 public $pass="root";
	 public $db="weishi";
	 public $result;
public	function cha($sql){
	
@mysql_connect($this->host,$this->nuser,$this->pass)or die('错误：'.mysql_error());
    @mysql_select_db($this->db) or die('错误：'.mysql_error());
mysql_query("SET NAMES utf8");

$result=mysql_query($sql);
$this->result=$result;
return $result;
}

public function chajson($sql){
		
@mysql_connect($this->host,$this->nuser,$this->pass)or die('错误：'.mysql_error());
    @mysql_select_db($this->db) or die('错误：'.mysql_error());
mysql_query("SET NAMES utf8");

$result=mysql_query($sql);
$theJson="[";

while($row=mysql_fetch_assoc($result)){
$key=array_keys($row);
	$theJson=$theJson."{";

	for($i=0;$i<count($row);$i++){
			
	$jian= $key[$i];
		if($i==(count($row)-1)){
		$theJson=$theJson.'"'.$jian.'":"'.$row[$jian].'" ';	
		}else{
			$theJson=$theJson.'"'.$jian.'":"'.$row[$jian].'",';
		}
		
	}
	$theJson=$theJson."},";
	
}
$theJson=$theJson."]";
$theJson=substr($theJson,0,strlen($theJson)-4);
$theJson.="}]";
//$theJson=str_replace("\'","\"",$theJson);
	echo '{"data":'.$theJson.'}';
}



}


 //$a=new sql();
//$result=$a->chajson('select * from usern where id=3");
 
?>