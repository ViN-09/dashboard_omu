<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST' || $_SERVER['REQUEST_METHOD'] === 'GET') {
    $available_function = ['update', 'upload'];
    $requested_function = $_GET['request'] ?? $_POST['request'] ?? null;
    // Contoh ambil db_name dan id

    $db_name = $_POST['db_name'] ?? '';
    $id = $_POST['id'] ?? '';
    unset($_POST['db_name'], $_POST['id']);
    if ($requested_function && in_array($requested_function, $available_function)) {
        switch ($requested_function) {
            case 'update':
                echo update(db_conn(), $id, $db_name, $_POST);
                break;
        }
        // Cek apakah POST ada dan tidak kosong


        // Kamu bisa lakukan proses lain disini (query database, dsb)

    } else {
        echo "Request bukan POST!";
    }
}



function db_conn()
{
    $host = 'localhost';      // atau 'localhost'
    $db = 'fm_teling';
    $user = 'root';
    $pass = '';
    $charset = 'utf8mb4';

    $dsn = "mysql:host=$host;dbname=$db;charset=$charset";

    // Konfigurasi opsional untuk keamanan & performa
    $options = [
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION, // lempar exception kalau error
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,       // hasil query dalam bentuk array asosiatif
        PDO::ATTR_EMULATE_PREPARES => false,                  // gunakan prepared statement asli
    ];

    try {
        $pdo = new PDO($dsn, $user, $pass, $options);
        // echo "Koneksi berhasil";
    } catch (\PDOException $e) {
        // Jangan tampilkan error asli ke user (untuk keamanan)
        echo "Koneksi gagal.";
        error_log($e->getMessage()); // log error untuk developer
    }

    return $pdo;

}

function update($pdo, $id, $db_name, $data)
{
    $response=[];

    // Bangun bagian SET query: col1 = :col1, col2 = :col2, ...
    $setParts = [];
    foreach ($data as $col => $val) {
        $setParts[] = "`$col` = :$col";
    }
    $setQuery = implode(", ", $setParts);

    // Query lengkap dengan WHERE id
    $sql = "UPDATE `$db_name` SET $setQuery WHERE `id` = :id";

    try {
        $stmt = $pdo->prepare($sql);

        // Bind semua parameter dari $data
        foreach ($data as $col => $val) {
            $stmt->bindValue(":$col", $val);
        }

        // Bind id
        $stmt->bindValue(":id", $id);

        $stmt->execute();

        $response['status'] = 'successfully';
        $response['db_updated'] = $db_name;

        return json_encode($response);
    } catch (PDOException $e) {
        return "Error: " . $e->getMessage();
    }
}



?>