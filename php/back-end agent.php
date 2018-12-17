<?php
header('content-type:text/html;charset=utf-8');
header("Content-Type: text/html;charset=gb2312");// 避免出现乱码
$b=$_GET["user"];
$a=file_get_contents("http://www.kaola.com/getSuggestKeyword.html?query=".$b."&size=10");

echo mb_convert_encoding($a,'gbk','utf-8');// 避免出现繁体字

// https://www.kaola.com/getSuggestKeyword.html?xRequestedWith=XMLHttpRequest


?>