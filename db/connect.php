<?php
   $host        = "ec2-54-90-211-192.compute-1.amazonaws.com";
   $port        = "port=5432";
   $dbname      = "dbname=d88b87tlfnisig";
   $credentials = "user=aqtlcgojywysbt password=d61b9972b2ad8c79abcc2ca1c80db021e6fd13e877dd42972b776bc5f18f845b";

   $db = pg_connect( "$host $port $dbname $credentials"  );

//    $sql =<<<EOF
//       SELECT * FROM tabla;
// EOF;

$sql =<<<EOF
CREATE TABLE fruits(
   id SERIAL PRIMARY KEY,
   name VARCHAR NOT NULL
);
EOF;

   $ret = pg_query($db, $sql);
   if(!$ret){
      echo pg_last_error($db);
      exit;
   } 
   $rows = array();
   while($r = pg_fetch_assoc($ret)){
      $rows[] = $r;
      echo json_encode($rows);
   }
?>