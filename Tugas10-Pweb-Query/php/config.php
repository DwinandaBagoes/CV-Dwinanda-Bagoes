<?php

$server = "localhost";
$user = "id18158808_pendaftar";
$password = "ya%{NO6<LAJB/iJW";
$nama_database = "id18158808_pendaftar_db";

$db = mysqli_connect($server, $user, $password, $nama_database);

if (!$db) {
    die("Gagal terhubung dengan database: " . mysqli_connect_error());
}