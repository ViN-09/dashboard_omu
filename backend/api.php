<?php
header('Content-Type: application/json');
if ($_SERVER['REQUEST_METHOD'] === 'GET' && isset($_GET['request'])) {
    // Daftar fungsi yang diperbolehkan
    $available_function = ['dapot_list', 'table_kolom' , 'table_data' , 'data_from_id' , 'single_data_from_id'];
    // Ambil request dari GET atau POST
    $requested_function = $_GET['request'] ?? $_POST['request'] ?? null;

    if ($requested_function && in_array($requested_function, $available_function)) {
        // Jika fungsi diizinkan
        switch ($requested_function) {
            case 'dapot_list':
                echo json_encode(generate_tables_dapot(db_conn()));
                break;
            case 'table_data':
                echo json_encode(generate_data(db_conn(), $_GET['name']));
                break;
            case 'table_kolom':
                echo json_encode(generate_tables_kolom_name(db_conn(), $_GET['name']));
                break;
            case 'data_from_id':
                echo json_encode(generate_data_by_id(db_conn(), $_GET['name'],$_GET['id']));
                break;
            case 'single_data_from_id':
                echo json_encode(generate_data_by_per_kolom(db_conn(), $_GET['name'],$_GET['id'],$_GET['kolom']));
                break;
        }
        isset($_GET);
    } else {
        // Jika fungsi tidak dikenal
        echo json_encode([
            'status' => 'denied',
            'message' => 'Fungsi tidak tersedia atau tidak diizinkan.'
        ]);
    }

}

























/////////////////////////////////////////////////////////////////////////////////////
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


//data_generator
function generate_data($pdo, $table)
{
    $data = [];
    $stmt = $pdo->query("SELECT * FROM `$table`");

    while ($row = $stmt->fetch()) {
        $data[] = $row;
    }

    return $data;
}

function generate_data_by_id($pdo, $table, $id)
{
    $data = [];
    $stmt = $pdo->query("SELECT * FROM `$table` WHERE id='$id'");

    while ($row = $stmt->fetch()) {
        $data = $row;
    }

    return $data;
}

function generate_data_by_per_kolom($pdo, $table, $id , $kolom)
{
    $data = [];
    $stmt = $pdo->query("SELECT `$kolom` FROM `$table` WHERE id = $id");


    while ($row = $stmt->fetch()) {
        $data = $row;
    }

    return $data;
}



//utility generator
function generate_tables_dapot($pdo)
{
    $data = [];
    $stmt = $pdo->query("SELECT table_name 
                         FROM information_schema.tables 
                         WHERE table_schema = 'fm_teling' 
                         AND table_name LIKE 'dp\_%';");

    while ($row = $stmt->fetch()) {
        $data[] = $row;
    }

    return $data;
}

function generate_tables_kolom_name($pdo, $table)
{
    $data = [];
    $stmt = $pdo->query("SELECT 
                        COLUMN_NAME AS Field,
                        CASE 
                            WHEN LOCATE('(', COLUMN_TYPE) > 0 THEN LEFT(COLUMN_TYPE, LOCATE('(', COLUMN_TYPE) - 1)
                            ELSE COLUMN_TYPE
                        END AS Type
                        FROM INFORMATION_SCHEMA.COLUMNS
                        WHERE TABLE_SCHEMA = 'fm_teling' AND TABLE_NAME = '$table';
");

    while ($row = $stmt->fetch()) {
        $data[] = $row;
    }

    return $data;
}


// print_r(generate_tables_dapot(db_conn()));


?>